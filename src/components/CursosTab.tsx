import React, { useState, useEffect, useMemo } from 'react';
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileCheck,
  GraduationCap,
  HelpCircle,
  Lock,
  Printer,
  QrCode,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  UserCheck,
  ArrowLeft,
  Check,
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { COURSES_DATA, ClinicalCourse } from '../data/coursesData';

export interface IssuedCertificate {
  certId: string;
  studentName: string;
  studentDocType: 'DNI' | 'CEP' | 'CE';
  studentDocNumber: string;
  courseId: string;
  courseCode: string;
  courseTitle: string;
  academicHours: number;
  credits: number;
  score: number;
  issueDate: string;
  modules: string[];
}

interface CursosTabProps {
  initialVerifyData?: IssuedCertificate | null;
  onClearVerify?: () => void;
}

const STORAGE_KEY_CERTS = 'ec_issued_certificates_v1';
const STORAGE_KEY_PROGRESS = 'ec_courses_progress_v1';

export function encodeCertificateToken(cert: IssuedCertificate): string {
  try {
    const payload = {
      id: cert.certId,
      n: cert.studentName,
      dt: cert.studentDocType,
      dn: cert.studentDocNumber,
      c: cert.courseId,
      ct: cert.courseTitle,
      h: cert.academicHours,
      cr: cert.credits,
      s: cert.score,
      d: cert.issueDate,
    };
    const jsonStr = JSON.stringify(payload);
    return btoa(encodeURIComponent(jsonStr));
  } catch {
    return '';
  }
}

export function decodeCertificateToken(token: string): IssuedCertificate | null {
  try {
    const jsonStr = decodeURIComponent(atob(token));
    const p = JSON.parse(jsonStr);
    const course = COURSES_DATA.find((c) => c.id === p.c);
    return {
      certId: p.id || 'EC-2026-VERIF',
      studentName: p.n || 'Profesional de Enfermería',
      studentDocType: p.dt || 'DNI',
      studentDocNumber: p.dn || '---',
      courseId: p.c || '',
      courseCode: course?.code || 'EC-CUR',
      courseTitle: p.ct || course?.title || 'Curso de Actualización Clínica',
      academicHours: Number(p.h) || 24,
      credits: Number(p.cr) || 1.5,
      score: Number(p.s) || 20,
      issueDate: p.d || new Date().toLocaleDateString('es-PE'),
      modules: course ? course.modules.map((m) => m.title) : [],
    };
  } catch {
    return null;
  }
}

export const CursosTab: React.FC<CursosTabProps> = ({ initialVerifyData, onClearVerify }) => {
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [activeModuleIndex, setActiveModuleIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'catalog' | 'study' | 'exam' | 'certificate' | 'verify'>('catalog');

  const [studentName, setStudentName] = useState<string>(() => localStorage.getItem('ec_student_name') || '');
  const [studentDocType, setStudentDocType] = useState<'DNI' | 'CEP' | 'CE'>(() => (localStorage.getItem('ec_student_doctype') as any) || 'CEP');
  const [studentDocNumber, setStudentDocNumber] = useState<string>(() => localStorage.getItem('ec_student_docnum') || '');

  const [progress, setProgress] = useState<Record<string, { completedModules: string[]; bestScore?: number; certId?: string }>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROGRESS);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [certificates, setCertificates] = useState<IssuedCertificate[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CERTS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [moduleAnswer, setModuleAnswer] = useState<number | null>(null);
  const [moduleChecked, setModuleChecked] = useState<boolean>(false);

  const [examAnswers, setExamAnswers] = useState<Record<string, number>>({});
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);
  const [examScore, setExamScore] = useState<number>(0);
  const [activeCertificate, setActiveCertificate] = useState<IssuedCertificate | null>(null);

  const [searchVerifyCode, setSearchVerifyCode] = useState<string>('');
  const [verifiedCertResult, setVerifiedCertResult] = useState<IssuedCertificate | null>(null);
  const [verifyError, setVerifyError] = useState<string>('');

  useEffect(() => {
    if (initialVerifyData) {
      setVerifiedCertResult(initialVerifyData);
      setViewMode('verify');
    }
  }, [initialVerifyData]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progress));
    } catch {}
  }, [progress]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_CERTS, JSON.stringify(certificates));
    } catch {}
  }, [certificates]);

  useEffect(() => {
    localStorage.setItem('ec_student_name', studentName);
    localStorage.setItem('ec_student_doctype', studentDocType);
    localStorage.setItem('ec_student_docnum', studentDocNumber);
  }, [studentName, studentDocType, studentDocNumber]);

  const selectedCourse: ClinicalCourse | undefined = useMemo(
    () => COURSES_DATA.find((c) => c.id === selectedCourseId),
    [selectedCourseId]
  );

  const openCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    setActiveModuleIndex(0);
    setModuleAnswer(null);
    setModuleChecked(false);
    setViewMode('study');
  };

  const handleCompleteModule = (courseId: string, moduleId: string) => {
    setProgress((prev) => {
      const current = prev[courseId] || { completedModules: [] };
      const updatedModules = current.completedModules.includes(moduleId)
        ? current.completedModules
        : [...current.completedModules, moduleId];
      return {
        ...prev,
        [courseId]: {
          ...current,
          completedModules: updatedModules,
        },
      };
    });

    if (selectedCourse && activeModuleIndex < selectedCourse.modules.length - 1) {
      setActiveModuleIndex((prev) => prev + 1);
      setModuleAnswer(null);
      setModuleChecked(false);
    }
  };

  const startFinalExam = () => {
    setExamAnswers({});
    setExamSubmitted(false);
    setExamScore(0);
    setViewMode('exam');
  };

  const handleSubmitExam = () => {
    if (!selectedCourse) return;
    let correctCount = 0;
    selectedCourse.finalExam.forEach((q) => {
      if (examAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });
    const calculatedScore = Math.round((correctCount / selectedCourse.finalExam.length) * 20);
    setExamScore(calculatedScore);
    setExamSubmitted(true);

    if (calculatedScore >= 14) {
      const existingCert = certificates.find(
        (c) =>
          c.courseId === selectedCourse.id &&
          c.studentName.trim().toLowerCase() === (studentName.trim() || 'Participante').toLowerCase()
      );

      const randomDigits = Math.floor(10000 + Math.random() * 90000);
      const certId = existingCert ? existingCert.certId : `EC-${new Date().getFullYear()}-${randomDigits}`;
      const newCert: IssuedCertificate = {
        certId,
        studentName: studentName.trim() || 'Licenciado(a) / Estudiante de Enfermería',
        studentDocType,
        studentDocNumber: studentDocNumber.trim() || 'S/N',
        courseId: selectedCourse.id,
        courseCode: selectedCourse.code,
        courseTitle: selectedCourse.title,
        academicHours: selectedCourse.academicHours,
        credits: selectedCourse.credits,
        score: Math.max(calculatedScore, existingCert?.score || 0),
        issueDate: new Date().toLocaleDateString('es-PE', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }),
        modules: selectedCourse.modules.map((m) => `Módulo ${m.number}: ${m.title}`),
      };

      setActiveCertificate(newCert);
      setCertificates((prev) => {
        const filtered = prev.filter((c) => c.certId !== certId);
        return [newCert, ...filtered];
      });

      setProgress((prev) => ({
        ...prev,
        [selectedCourse.id]: {
          completedModules: selectedCourse.modules.map((m) => m.id),
          bestScore: Math.max(calculatedScore, prev[selectedCourse.id]?.bestScore || 0),
          certId,
        },
      }));
    }
  };

  const handleManualVerifySearch = (e: React.FormEvent) => {
    e.preventDefault();
    setVerifyError('');
    const code = searchVerifyCode.trim().toUpperCase();
    if (!code) return;

    const found = certificates.find((c) => c.certId.toUpperCase() === code);
    if (found) {
      setVerifiedCertResult(found);
    } else {
      setVerifiedCertResult(null);
      setVerifyError(
        'No se encontró el código en este dispositivo. Si tienes el Certificado en PDF o impreso, escanea directamente su Código QR con la cámara de tu celular para validarlo automáticamente.'
      );
    }
  };

  const getVerificationUrl = (cert: IssuedCertificate) => {
    const token = encodeCertificateToken(cert);
    const baseUrl =
      typeof window !== 'undefined' && window.location.hostname !== 'localhost'
        ? window.location.origin
        : 'https://www.enfermeriacertificada.com';
    return `${baseUrl}/?verificar=${encodeURIComponent(cert.certId)}&datos=${encodeURIComponent(token)}`;
  };

  const getQrImageUrl = (cert: IssuedCertificate) => {
    const verifyUrl = getVerificationUrl(cert);
    return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=8&data=${encodeURIComponent(verifyUrl)}`;
  };

  const handlePrintCertificate = (cert: IssuedCertificate) => {
    const verifyUrl = getVerificationUrl(cert);
    const qrUrl = getQrImageUrl(cert);
    const logoUrl = `${window.location.origin}/icon-512.png`;

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <title>Certificado_${cert.certId}_${cert.studentName.replace(/\s+/g, '_')}</title>
        <style>
          @page {
            size: A4 landscape;
            margin: 0;
          }
          * {
            box-sizing: border-box;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          body {
            margin: 0;
            padding: 0;
            font-family: 'Georgia', 'Times New Roman', serif;
            background: #061824;
            color: #0f172a;
          }
          .page {
            width: 297mm;
            height: 210mm;
            padding: 12mm;
            background: linear-gradient(135deg, #061824 0%, #0b2d42 50%, #061824 100%);
            position: relative;
            page-break-after: always;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .cert-frame {
            width: 100%;
            height: 100%;
            background: #ffffff;
            border: 4px solid #179c94;
            border-radius: 14px;
            padding: 10mm 14mm;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: inset 0 0 0 3px #d4af37, 0 20px 40px rgba(0,0,0,0.4);
          }
          .watermark {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 320px;
            height: 320px;
            opacity: 0.05;
            pointer-events: none;
          }
          .top-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 2px solid #0e7490;
            padding-bottom: 10px;
          }
          .brand-left {
            display: flex;
            align-items: center;
            gap: 14px;
          }
          .brand-logo {
            width: 72px;
            height: 72px;
            border-radius: 50%;
            border: 2.5px solid #179c94;
            object-fit: cover;
          }
          .brand-title {
            font-family: 'Segoe UI', Arial, sans-serif;
            font-size: 19px;
            font-weight: 900;
            color: #071d2b;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin: 0;
          }
          .brand-sub {
            font-family: 'Segoe UI', Arial, sans-serif;
            font-size: 11px;
            font-weight: 700;
            color: #0d9488;
            margin-top: 3px;
          }
          .reg-badge {
            text-align: right;
            font-family: 'Segoe UI', Arial, sans-serif;
          }
          .reg-code {
            background: #071d2b;
            color: #32d2c2;
            padding: 5px 12px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.8px;
          }
          .center-content {
            text-align: center;
            margin: 6px 0;
            z-index: 2;
          }
          .cert-heading {
            font-size: 34px;
            font-weight: 900;
            color: #071d2b;
            letter-spacing: 4px;
            margin: 4px 0 2px;
            text-transform: uppercase;
          }
          .cert-subheading {
            font-family: 'Segoe UI', Arial, sans-serif;
            font-size: 12px;
            font-weight: 700;
            color: #b45309;
            letter-spacing: 2.5px;
            text-transform: uppercase;
            margin-bottom: 12px;
          }
          .grant-label {
            font-family: 'Segoe UI', Arial, sans-serif;
            font-size: 13px;
            color: #475569;
            margin: 0;
          }
          .student-name {
            font-size: 30px;
            font-weight: bold;
            color: #061824;
            margin: 8px auto 4px;
            padding-bottom: 4px;
            border-bottom: 2px solid #cbd5e1;
            max-width: 82%;
            text-transform: uppercase;
          }
          .student-doc {
            font-family: 'Segoe UI', Arial, sans-serif;
            font-size: 12px;
            font-weight: 700;
            color: #334155;
            margin-bottom: 10px;
          }
          .course-reason {
            font-family: 'Segoe UI', Arial, sans-serif;
            font-size: 13.5px;
            color: #334155;
            max-width: 88%;
            margin: 0 auto 8px;
            line-height: 1.45;
          }
          .course-title {
            font-family: 'Segoe UI', Arial, sans-serif;
            font-size: 23px;
            font-weight: 900;
            color: #0f766e;
            margin: 6px auto 10px;
            text-transform: uppercase;
            max-width: 90%;
          }
          .metrics-row {
            display: inline-flex;
            gap: 18px;
            background: #f0fdfa;
            border: 1px solid #99f6e4;
            padding: 8px 22px;
            border-radius: 999px;
            font-family: 'Segoe UI', Arial, sans-serif;
            font-size: 12.5px;
            color: #0f172a;
            margin-top: 4px;
          }
          .bottom-bar {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            margin-top: 8px;
            padding-top: 8px;
          }
          .qr-box {
            display: flex;
            align-items: center;
            gap: 10px;
            text-align: left;
            font-family: 'Segoe UI', Arial, sans-serif;
          }
          .qr-img {
            width: 84px;
            height: 84px;
            border: 2px solid #071d2b;
            border-radius: 8px;
            padding: 2px;
            background: #fff;
          }
          .qr-info {
            font-size: 10px;
            color: #475569;
            max-width: 210px;
            line-height: 1.35;
          }
          .signature-block {
            text-align: center;
            font-family: 'Segoe UI', Arial, sans-serif;
            min-width: 240px;
          }
          .sig-script {
            font-family: 'Brush Script MT', 'Segoe Script', cursive;
            font-size: 28px;
            color: #0c4a6e;
            margin-bottom: -6px;
          }
          .sig-line {
            border-top: 2px solid #071d2b;
            padding-top: 5px;
            font-size: 13px;
            font-weight: 800;
            color: #071d2b;
          }
          .sig-role {
            font-size: 11px;
            color: #0d9488;
            font-weight: 700;
          }
          .seal-circle {
            width: 82px;
            height: 82px;
            border: 3px double #d4af37;
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-family: 'Segoe UI', Arial, sans-serif;
            background: radial-gradient(circle, #fef9c3 0%, #fde047 100%);
            color: #713f12;
            font-weight: 900;
            font-size: 9.5px;
            padding: 6px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.12);
          }
          .syllabus-box {
            margin-top: 8px;
            font-family: 'Segoe UI', Arial, sans-serif;
            font-size: 11px;
            color: #475569;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 6px 12px;
            text-align: left;
          }
        </style>
      </head>
      <body>
        <div class="page">
          <div class="cert-frame">
            <img src="${logoUrl}" class="watermark" alt="" />

            <div class="top-bar">
              <div class="brand-left">
                <img src="${logoUrl}" class="brand-logo" alt="Logo" />
                <div>
                  <h1 class="brand-title">Enfermería Certificada</h1>
                  <div class="brand-sub">PLATAFORMA DE EDUCACIÓN CONTINUA Y ACTUALIZACIÓN CLÍNICA • PERÚ</div>
                  <div style="font-family: 'Segoe UI', sans-serif; font-size: 10px; color: #64748b; margin-top: 2px;">
                    www.enfermeriacertificada.com | Dirección Académica: Lic. Miguel Pantoja A. (CEP 120064)
                  </div>
                </div>
              </div>
              <div class="reg-badge">
                <div class="reg-code">REGISTRO N° ${cert.certId}</div>
                <div style="font-size: 10.5px; color: #475569; margin-top: 4px; font-weight: 600;">
                  Código de Curso: ${cert.courseCode}
                </div>
              </div>
            </div>

            <div class="center-content">
              <div class="cert-heading">CERTIFICADO</div>
              <div class="cert-subheading">DE CAPACITACIÓN Y APROBACIÓN ACADÉMICA</div>

              <p class="grant-label">Otorgado a:</p>
              <div class="student-name">${cert.studentName}</div>
              <div class="student-doc">Documento / Registro: ${cert.studentDocType} N° ${cert.studentDocNumber}</div>

              <p class="course-reason">
                Por haber culminado y aprobado satisfactoriamente todos los módulos teóricos-prácticos y la evaluación final del curso de actualización clínica en:
              </p>
              <div class="course-title">“${cert.courseTitle}”</div>

              <div class="metrics-row">
                <span><strong>Valor Académico:</strong> ${cert.academicHours} Horas Académicas (${cert.credits} Créditos)</span>
                <span>•</span>
                <span><strong>Calificación Final:</strong> ${cert.score} / 20 (Aprobado)</span>
                <span>•</span>
                <span><strong>Modalidad:</strong> Virtual Autoinstructiva</span>
              </div>

              <div class="syllabus-box">
                <strong>Módulos desarrollados:</strong> ${cert.modules.join(' • ')}
              </div>
            </div>

            <div class="bottom-bar">
              <div class="qr-box">
                <img src="${qrUrl}" class="qr-img" alt="QR de Verificación" />
                <div class="qr-info">
                  <strong style="color: #071d2b; font-size: 11px;">CERTIFICADO CON QR VERIFICABLE</strong><br/>
                  Escanee el código QR con la cámara de su celular o ingrese a <strong>enfermeriacertificada.com</strong> con el código <strong>${cert.certId}</strong> para validar su autenticidad.<br/>
                  <span style="color: #0d9488; font-weight: 700;">Fecha de emisión: ${cert.issueDate}</span>
                </div>
              </div>

              <div class="seal-circle">
                <span>SELLO DE</span>
                <span style="font-size: 11px; margin: 2px 0;">VALIDEZ</span>
                <span>ACADÉMICA</span>
                <span style="font-size: 8px; font-weight: 700; margin-top: 2px;">CEP 120064</span>
              </div>

              <div class="signature-block">
                <div class="sig-script">Miguel Pantoja A.</div>
                <div class="sig-line">Lic. Miguel Pantoja A.</div>
                <div class="sig-role">Licenciado en Enfermería - CEP 120064</div>
                <div style="font-size: 10px; color: #64748b;">Director General - Enfermería Certificada</div>
              </div>
            </div>
          </div>
        </div>
        <script>
          window.onload = function() {
            setTimeout(function() { window.print(); }, 400);
          };
        </script>
      </body>
      </html>
    `);
    printWindow.document.close();
  };

  if (viewMode === 'verify') {
    return (
      <section className="space-y-6">
        <div className="bg-[#071d2b]/95 rounded-2xl p-5 border border-[#12425a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                Sistema Oficial de Verificación de Certificados (QR)
              </h2>
              <p className="text-xs text-slate-300">
                Validación en línea de certificados emitidos por Enfermería Certificada — Lic. Miguel Pantoja (CEP 120064)
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              if (onClearVerify) onClearVerify();
              setViewMode('catalog');
            }}
            className="px-4 py-2 rounded-xl bg-[#0c2a3d] hover:bg-[#123850] text-[#32d2c2] border border-[#175270] text-xs font-bold flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Ir al Aula Virtual de Cursos
          </button>
        </div>

        <form
          onSubmit={handleManualVerifySearch}
          className="bg-[#092233]/90 p-4 rounded-2xl border border-[#12425a] flex flex-col sm:flex-row gap-3"
        >
          <input
            type="text"
            value={searchVerifyCode}
            onChange={(e) => setSearchVerifyCode(e.target.value)}
            placeholder="Ingrese código de registro (ej: EC-2026-48291)..."
            className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-teal-400 focus:outline-none"
          />
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#179c94] to-[#22b8af] text-white font-bold text-xs sm:text-sm cursor-pointer shadow-lg"
          >
            Verificar Código
          </button>
        </form>

        {verifyError && (
          <div className="bg-amber-950/60 border border-amber-500/50 rounded-2xl p-4 text-xs text-amber-200 flex items-center gap-2.5">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
            <span>{verifyError}</span>
          </div>
        )}

        {verifiedCertResult && (
          <div className="bg-gradient-to-br from-[#08273a] via-[#071d2b] to-[#052e2b] rounded-3xl p-6 sm:p-8 border-2 border-emerald-400/60 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-emerald-500/30 pb-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <CheckCircle2 className="w-7 h-7 stroke-[2.5]" />
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-400 text-slate-950">
                    ✓ CERTIFICADO AUTÉNTICO Y VERIFICADO
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                    Registro Oficial N° {verifiedCertResult.certId}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => handlePrintCertificate(verifiedCertResult)}
                className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <Printer className="w-4 h-4" />
                Descargar / Imprimir PDF Oficial
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                <span className="text-xs text-slate-400 block">Profesional / Estudiante Titular</span>
                <p className="text-base sm:text-lg font-black text-white mt-0.5 uppercase">
                  {verifiedCertResult.studentName}
                </p>
                <span className="text-xs text-teal-300 font-semibold">
                  {verifiedCertResult.studentDocType}: {verifiedCertResult.studentDocNumber}
                </span>
              </div>

              <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                <span className="text-xs text-slate-400 block">Curso de Actualización Aprobado</span>
                <p className="text-base font-bold text-[#32d2c2] mt-0.5">
                  {verifiedCertResult.courseTitle}
                </p>
                <span className="text-xs text-slate-300">
                  Código Curricular: {verifiedCertResult.courseCode}
                </span>
              </div>

              <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                <span className="text-xs text-slate-400 block">Carga Académica y Créditos</span>
                <p className="text-sm font-bold text-white mt-0.5">
                  {verifiedCertResult.academicHours} Horas Académicas ({verifiedCertResult.credits} Créditos)
                </p>
                <span className="text-xs text-emerald-400 font-semibold">
                  Nota Final Obtenida: {verifiedCertResult.score} / 20 (Aprobado)
                </span>
              </div>

              <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                <span className="text-xs text-slate-400 block">Fecha de Emisión y Autoridad</span>
                <p className="text-sm font-bold text-white mt-0.5">{verifiedCertResult.issueDate}</p>
                <span className="text-xs text-slate-300">
                  Firmado por: Lic. Miguel Pantoja A. — CEP 120064
                </span>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }

  if (viewMode === 'study' && selectedCourse) {
    const currentModule = selectedCourse.modules[activeModuleIndex];
    const courseProgress = progress[selectedCourse.id]?.completedModules || [];
    const isModuleCompleted = courseProgress.includes(currentModule.id);
    const allModulesCompleted = selectedCourse.modules.every((m) => courseProgress.includes(m.id));

    return (
      <section className="space-y-5">
        <div className="bg-[#071d2b]/95 rounded-2xl p-4 sm:p-5 border border-[#12425a] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1">
            <button
              onClick={() => setViewMode('catalog')}
              className="text-xs text-[#32d2c2] hover:underline flex items-center gap-1 font-bold cursor-pointer mb-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Volver al Catálogo de los 7 Cursos
            </button>
            <h2 className="text-base sm:text-xl font-black text-white flex items-center gap-2 flex-wrap">
              <span>{selectedCourse.title}</span>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 font-bold">
                {selectedCourse.academicHours} Horas ({selectedCourse.credits} Créditos)
              </span>
            </h2>
            <p className="text-xs text-slate-400">{selectedCourse.normativaBase}</p>
          </div>

          <button
            onClick={startFinalExam}
            className="w-full md:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer"
          >
            <FileCheck className="w-4 h-4" />
            <span>Rendir Examen Final para Certificado</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-4 space-y-2.5">
            <div className="bg-[#092233]/90 p-4 rounded-2xl border border-[#12425a] space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#32d2c2]" />
                  Módulos del Curso
                </h3>
                <span className="text-[11px] text-teal-300 font-bold">
                  {courseProgress.length} / {selectedCourse.modules.length} completados
                </span>
              </div>

              <div className="space-y-2">
                {selectedCourse.modules.map((mod, idx) => {
                  const done = courseProgress.includes(mod.id);
                  const active = idx === activeModuleIndex;
                  return (
                    <button
                      key={mod.id}
                      onClick={() => {
                        setActiveModuleIndex(idx);
                        setModuleAnswer(null);
                        setModuleChecked(false);
                      }}
                      className={`w-full p-3 rounded-xl border text-left transition flex items-start gap-2.5 cursor-pointer ${
                        active
                          ? 'bg-gradient-to-r from-[#113d56] to-[#0d3349] border-[#32d2c2] text-white shadow-md'
                          : 'bg-slate-950/60 border-slate-800/80 text-slate-300 hover:bg-[#0c2a3d]'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 mt-0.5 ${
                          done
                            ? 'bg-emerald-500 text-slate-950'
                            : active
                            ? 'bg-[#32d2c2] text-slate-950'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {done ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : mod.number}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold leading-snug">{mod.title}</p>
                        <span className="text-[10px] text-slate-400 flex items-center gap-1 mt-1">
                          <Clock className="w-3 h-3" /> {mod.duration}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-[#12425a]">
                <button
                  onClick={startFinalExam}
                  className={`w-full py-3 px-4 rounded-xl font-black text-xs flex items-center justify-center gap-2 transition cursor-pointer ${
                    allModulesCompleted
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg shadow-emerald-950/50'
                      : 'bg-[#0c2a3d] hover:bg-[#143d57] text-amber-300 border border-amber-500/40'
                  }`}
                >
                  <Award className="w-4 h-4" />
                  <span>Ir a Evaluación Final (5 Preguntas)</span>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-[#092233]/90 p-5 sm:p-6 rounded-2xl border border-[#12425a] space-y-5 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#12425a] pb-4">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-[#32d2c2]">
                  Módulo {currentModule.number} de {selectedCourse.modules.length} • {currentModule.duration}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white mt-0.5">
                  {currentModule.title}
                </h3>
              </div>
              {isModuleCompleted && (
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Módulo Completado
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-teal-200/90 bg-[#061824] p-3.5 rounded-xl border border-[#12425a] italic">
              {currentModule.summary}
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
              {currentModule.content.map((paragraph, i) => (
                <p key={i} className="bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/60">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#072638] to-[#061c29] p-4 rounded-2xl border border-teal-500/30 space-y-2.5">
              <h4 className="text-xs sm:text-sm font-black text-[#32d2c2] flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Puntos Clave para la Práctica Hospitalaria y Examen
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-200">
                {currentModule.keyPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#32d2c2] font-black">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-950/35 border border-amber-500/40 p-4 rounded-2xl space-y-1">
              <span className="text-[11px] font-black uppercase text-amber-300 block">
                💡 Perla Clínica de Guardia
              </span>
              <p className="text-xs sm:text-sm text-amber-100 leading-relaxed">
                {currentModule.clinicalPearl}
              </p>
            </div>

            <div className="bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
                <HelpCircle className="w-4 h-4" />
                <span>Pregunta de Comprobación del Módulo {currentModule.number}:</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-white">
                {currentModule.checkQuestion.question}
              </p>
              <div className="space-y-2">
                {currentModule.checkQuestion.options.map((opt, idx) => {
                  const isSelected = moduleAnswer === idx;
                  const isCorrect = idx === currentModule.checkQuestion.correctIndex;
                  let btnStyle = 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-600';
                  if (moduleChecked) {
                    if (isCorrect) {
                      btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                    } else if (isSelected && !isCorrect) {
                      btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                    }
                  } else if (isSelected) {
                    btnStyle = 'bg-[#0e3a52] border-[#32d2c2] text-white font-bold';
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setModuleAnswer(idx);
                        setModuleChecked(true);
                      }}
                      className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer flex items-center justify-between gap-2 ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {moduleChecked && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {moduleChecked && (
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700 text-xs text-slate-300">
                  <strong className="text-[#32d2c2]">Fundamento Clínico: </strong>
                  {currentModule.checkQuestion.explanation}
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                type="button"
                disabled={activeModuleIndex === 0}
                onClick={() => {
                  setActiveModuleIndex((prev) => Math.max(0, prev - 1));
                  setModuleAnswer(null);
                  setModuleChecked(false);
                }}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-300 disabled:opacity-40 cursor-pointer"
              >
                ← Módulo Anterior
              </button>

              {activeModuleIndex < selectedCourse.modules.length - 1 ? (
                <button
                  type="button"
                  onClick={() => handleCompleteModule(selectedCourse.id, currentModule.id)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#179c94] to-[#22b8af] hover:from-[#1eb0a7] hover:to-[#28ccc2] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <span>Completar Módulo y Continuar</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    handleCompleteModule(selectedCourse.id, currentModule.id);
                    startFinalExam();
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl cursor-pointer"
                >
                  <Award className="w-4 h-4" />
                  <span>Finalizar Módulos y Dar Examen Final</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (viewMode === 'exam' && selectedCourse) {
    const allAnswered = selectedCourse.finalExam.every((q) => examAnswers[q.id] !== undefined);
    const passed = examSubmitted && examScore >= 14;

    return (
      <section className="space-y-6">
        <div className="bg-[#071d2b]/95 rounded-2xl p-5 border border-[#12425a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div>
            <button
              onClick={() => setViewMode('study')}
              className="text-xs text-[#32d2c2] hover:underline flex items-center gap-1 font-bold cursor-pointer mb-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Volver a los Módulos de Estudio
            </button>
            <h2 className="text-lg sm:text-xl font-black text-white">
              Evaluación Final de Certificación: {selectedCourse.title}
            </h2>
            <p className="text-xs text-slate-300 mt-0.5">
              Nota mínima aprobatoria: 14 / 20 puntos (al menos 4 de 5 respuestas correctas).
            </p>
          </div>
        </div>

        <div className="bg-[#092233]/95 p-5 rounded-2xl border border-teal-500/40 space-y-3 shadow-lg">
          <h3 className="text-xs sm:text-sm font-black text-[#32d2c2] flex items-center gap-2">
            <UserCheck className="w-4 h-4" />
            Datos del Profesional / Estudiante para la Emisión del Certificado Oficial
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="md:col-span-6">
              <label className="block text-[11px] text-slate-300 font-semibold mb-1">
                Nombres y Apellidos Completos (tal como aparecerá en el Certificado)
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Ej: Lic. María Elena Quispe Rojas"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-teal-400 focus:outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-[11px] text-slate-300 font-semibold mb-1">Documento</label>
              <select
                value={studentDocType}
                onChange={(e) => setStudentDocType(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-white focus:border-teal-400 focus:outline-none"
              >
                <option value="CEP">N° CEP</option>
                <option value="DNI">DNI</option>
                <option value="CE">Carné Extr.</option>
              </select>
            </div>
            <div className="md:col-span-4">
              <label className="block text-[11px] text-slate-300 font-semibold mb-1">
                Número de {studentDocType}
              </label>
              <input
                type="text"
                value={studentDocNumber}
                onChange={(e) => setStudentDocNumber(e.target.value)}
                placeholder={studentDocType === 'CEP' ? 'Ej: 120064' : 'Ej: 72849102'}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-teal-400 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {examSubmitted && (
          <div
            className={`p-6 rounded-3xl border-2 shadow-2xl space-y-5 ${
              passed
                ? 'bg-gradient-to-br from-[#072b28] via-[#071d2b] to-[#0a293d] border-emerald-400'
                : 'bg-rose-950/40 border-rose-500/60'
            }`}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-black uppercase ${
                    passed ? 'bg-emerald-400 text-slate-950' : 'bg-rose-500 text-white'
                  }`}
                >
                  {passed ? '¡APROBADO CON ÉXITO!' : 'NOTA INSUFICIENTE — PUEDES VOLVER A INTENTARLO'}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-2">
                  Calificación Obtenida: {examScore} / 20 puntos
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  {passed
                    ? 'Tu certificado oficial con Código QR de verificación ha sido generado y registrado.'
                    : 'Revisa la retroalimentación clínica debajo y presiona "Intentar Nuevamente" sin costo.'}
                </p>
              </div>

              {!passed && (
                <button
                  onClick={startFinalExam}
                  className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  Intentar Examen Nuevamente
                </button>
              )}
            </div>

            {passed && activeCertificate && (
              <div className="bg-white text-slate-900 rounded-2xl p-5 sm:p-7 border-4 border-[#179c94] shadow-2xl space-y-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-teal-700 pb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="/icon-192.png"
                      alt="Logo"
                      className="w-14 h-14 rounded-full border-2 border-[#179c94]"
                    />
                    <div>
                      <h4 className="font-black text-base sm:text-lg text-[#071d2b] uppercase">
                        Enfermería Certificada
                      </h4>
                      <p className="text-xs font-bold text-teal-700">
                        CERTIFICADO OFICIAL • REGISTRO N° {activeCertificate.certId}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handlePrintCertificate(activeCertificate)}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-[#071d2b] to-[#0f3852] hover:from-[#0c2d42] hover:to-[#154b6e] text-[#32d2c2] font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Descargar / Imprimir Certificado en PDF (con QR)</span>
                  </button>
                </div>

                <div className="text-center space-y-2 py-2">
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                    Se otorga el presente Certificado a:
                  </p>
                  <p className="text-xl sm:text-3xl font-black text-[#071d2b] uppercase underline decoration-teal-500/50">
                    {activeCertificate.studentName}
                  </p>
                  <p className="text-xs font-bold text-slate-600">
                    {activeCertificate.studentDocType}: {activeCertificate.studentDocNumber}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 max-w-2xl mx-auto pt-1">
                    Por haber aprobado satisfactoriamente el curso de actualización clínica en:
                  </p>
                  <p className="text-base sm:text-xl font-black text-teal-800 uppercase">
                    “{activeCertificate.courseTitle}”
                  </p>
                  <p className="text-xs font-bold text-slate-700">
                    Valor académico: {activeCertificate.academicHours} Horas Académicas ({activeCertificate.credits} Créditos) • Nota: {activeCertificate.score}/20 • Fecha: {activeCertificate.issueDate}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-3">
                    <img
                      src={getQrImageUrl(activeCertificate)}
                      alt="Código QR de Verificación"
                      className="w-20 h-20 border-2 border-slate-900 rounded-lg p-1 bg-white"
                    />
                    <div className="text-[11px] text-slate-600 max-w-xs">
                      <strong className="text-slate-900 block">QR de Verificación Activo</strong>
                      Escanea el código con tu celular para abrir el validador oficial en línea de{' '}
                      <span className="font-bold text-teal-700">enfermeriacertificada.com</span>.
                    </div>
                  </div>

                  <div className="text-center sm:text-right">
                    <p className="font-bold text-sm text-slate-900">Lic. Miguel Pantoja A.</p>
                    <p className="text-xs text-teal-700 font-bold">Licenciado en Enfermería — CEP 120064</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="space-y-4">
          {selectedCourse.finalExam.map((q, qIndex) => {
            const selected = examAnswers[q.id];
            return (
              <div
                key={q.id}
                className="bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] space-y-3 shadow-lg"
              >
                <p className="text-xs sm:text-sm font-bold text-white">
                  <span className="text-[#32d2c2] mr-1.5">Pregunta {qIndex + 1}:</span>
                  {q.question}
                </p>

                <div className="space-y-2">
                  {q.options.map((opt, oIndex) => {
                    const isPicked = selected === oIndex;
                    const isRight = oIndex === q.correctIndex;
                    let itemStyle =
                      'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-600';

                    if (examSubmitted) {
                      if (isRight) {
                        itemStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                      } else if (isPicked && !isRight) {
                        itemStyle = 'bg-rose-950/80 border-rose-500 text-rose-200';
                      }
                    } else if (isPicked) {
                      itemStyle = 'bg-[#0e3a52] border-[#32d2c2] text-white font-bold';
                    }

                    return (
                      <button
                        key={oIndex}
                        type="button"
                        disabled={examSubmitted}
                        onClick={() =>
                          setExamAnswers((prev) => ({
                            ...prev,
                            [q.id]: oIndex,
                          }))
                        }
                        className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer flex items-center justify-between gap-2 ${itemStyle}`}
                      >
                        <span>{opt}</span>
                        {examSubmitted && isRight && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {examSubmitted && (
                  <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800 text-xs text-slate-300">
                    <strong className="text-[#32d2c2]">Sustento Clínico: </strong>
                    {q.rationale}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {!examSubmitted && (
          <div className="flex justify-end">
            <button
              type="button"
              disabled={!allAnswered}
              onClick={handleSubmitExam}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#179c94] to-[#22b8af] hover:from-[#1eb0a7] hover:to-[#28ccc2] disabled:opacity-40 text-white font-black text-sm shadow-xl cursor-pointer flex items-center justify-center gap-2"
            >
              <Award className="w-5 h-5" />
              <span>Calificar Examen y Generar Mi Certificado con QR</span>
            </button>
          </div>
        )}
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <div className="bg-gradient-to-r from-[#071d2b] via-[#0b2c40] to-[#071d2b] rounded-2xl p-5 sm:p-6 border border-[#175270] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-500/20 border border-teal-400/40 text-[#32d2c2] text-[11px] font-black uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Acceso Libre • Certificación Automática con Código QR Verificable
          </div>
          <h2 className="text-lg sm:text-2xl font-black text-white flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-400 shrink-0" />
            Aula Virtual de Cursos Clínicos y Certificación
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl">
            Desarrolla los módulos interactivos basados en Normas Técnicas del MINSA y guías internacionales, rinde la evaluación final y descarga al instante tu <strong>Certificado Oficial en PDF con Código QR de verificación</strong> a tu nombre.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
          <button
            onClick={() => {
              setVerifiedCertResult(certificates[0] || null);
              setViewMode('verify');
            }}
            className="flex-1 lg:flex-none px-4 py-2.5 rounded-xl bg-[#0c2a3d] hover:bg-[#133b54] text-[#32d2c2] border border-[#1d6387] text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow"
          >
            <QrCode className="w-4 h-4" />
            <span>Validar Certificado / QR</span>
          </button>
        </div>
      </div>

      <div className="bg-[#092233]/90 p-4 rounded-2xl border border-[#12425a] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <GraduationCap className="w-5 h-5 text-[#32d2c2] shrink-0" />
          <div className="text-xs">
            <span className="text-white font-bold block">Tus Datos para los Certificados:</span>
            <span className="text-slate-400">
              Se guardan automáticamente en tu dispositivo para emitir tus certificados al aprobar.
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 flex-1 max-w-2xl">
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Tu Nombre y Apellidos (ej: Lic. Ana Torres)"
            className="sm:col-span-2 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-teal-400 focus:outline-none"
          />
          <input
            type="text"
            value={studentDocNumber}
            onChange={(e) => setStudentDocNumber(e.target.value)}
            placeholder="N° CEP o DNI"
            className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-teal-400 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {COURSES_DATA.map((course, idx) => {
          const cProg = progress[course.id];
          const doneCount = cProg?.completedModules?.length || 0;
          const totalMods = course.modules.length;
          const percent = Math.round((doneCount / totalMods) * 100);
          const existingCert = certificates.find((c) => c.courseId === course.id);

          return (
            <div
              key={course.id}
              className="bg-[#092233]/90 rounded-2xl border border-[#12425a] hover:border-teal-500/60 transition-all flex flex-col justify-between overflow-hidden shadow-xl group"
            >
              <div>
                <div className={`h-2 w-full bg-gradient-to-r ${course.badgeColor}`} />

                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-slate-950 text-[#32d2c2] border border-slate-800">
                      Curso N° 0{idx + 1} • {course.category}
                    </span>
                    <span className="text-[11px] font-bold text-amber-300">
                      {course.academicHours} hrs ({course.credits} cr.)
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-white group-hover:text-[#32d2c2] transition-colors leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">{course.subtitle}</p>

                  <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">
                      Temario ({course.modules.length} Módulos + Examen):
                    </span>
                    {course.modules.map((m) => (
                      <div key={m.id} className="text-[11px] text-slate-300 flex items-center gap-1.5 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                        <span className="truncate">
                          M{m.number}: {m.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-400">Avance de módulos</span>
                    <span className="text-teal-300 font-bold">
                      {doneCount}/{totalMods} ({percent}%)
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#179c94] to-[#32d2c2] transition-all"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openCourse(course.id)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#179c94] to-[#22b8af] hover:from-[#1eb0a7] hover:to-[#28ccc2] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md cursor-pointer active:scale-95"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{doneCount > 0 ? 'Continuar Curso' : 'Iniciar Curso Gratis'}</span>
                  </button>

                  {existingCert && (
                    <button
                      onClick={() => handlePrintCertificate(existingCert)}
                      title="Descargar tu Certificado emitido"
                      className="py-2.5 px-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/50 text-xs font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Award className="w-4 h-4" />
                      <span>Certificado</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {certificates.length > 0 && (
        <div className="bg-[#092233]/90 p-5 rounded-2xl border border-[#12425a] space-y-4 shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-black text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              Mis Certificados Emitidos ({certificates.length})
            </h3>
            <span className="text-xs text-slate-400">Listos para imprimir o verificar por QR</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {certificates.map((cert) => (
              <div
                key={cert.certId}
                className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 flex items-center justify-between gap-3"
              >
                <div className="min-w-0">
                  <span className="text-[10px] font-black text-emerald-400 uppercase block">
                    ✓ {cert.certId} • Nota: {cert.score}/20
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-white truncate">{cert.courseTitle}</p>
                  <p className="text-[11px] text-slate-400 truncate">
                    Titular: {cert.studentName} ({cert.academicHours} hrs)
                  </p>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => {
                      setVerifiedCertResult(cert);
                      setViewMode('verify');
                    }}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-teal-300 border border-slate-700 cursor-pointer"
                    title="Ver Validación QR"
                  >
                    <QrCode className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handlePrintCertificate(cert)}
                    className="px-3 py-2 rounded-lg bg-gradient-to-r from-[#179c94] to-[#22b8af] text-white text-xs font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>PDF</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
