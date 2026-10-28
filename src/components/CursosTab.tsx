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
  ExternalLink,
  Download,
  Share2
} from 'lucide-react';
import { COURSES_DATA, ClinicalCourse } from '../data/coursesData';
<<<<<<< Updated upstream
import { CERTIFICATE_TEMPLATE_DATA_URI } from '../data/certificateTemplateData';
=======
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
      academicHours: Number(p.h) || 40,
      credits: Number(p.cr) || 2.5,
=======
      academicHours: Number(p.h) || 24,
      credits: Number(p.cr) || 1.5,
>>>>>>> Stashed changes
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

  // Student identity state
  const [studentName, setStudentName] = useState<string>(() => localStorage.getItem('ec_student_name') || '');
  const [studentDocType, setStudentDocType] = useState<'DNI' | 'CEP' | 'CE'>(() => (localStorage.getItem('ec_student_doctype') as any) || 'CEP');
  const [studentDocNumber, setStudentDocNumber] = useState<string>(() => localStorage.getItem('ec_student_docnum') || '');

  // Course progress: { [courseId]: { completedModules: string[], bestScore?: number, certId?: string } }
  const [progress, setProgress] = useState<Record<string, { completedModules: string[]; bestScore?: number; certId?: string }>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROGRESS);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Issued certificates list
  const [certificates, setCertificates] = useState<IssuedCertificate[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CERTS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Module self-check state
  const [moduleAnswer, setModuleAnswer] = useState<number | null>(null);
  const [moduleChecked, setModuleChecked] = useState<boolean>(false);
<<<<<<< Updated upstream
  const [moduleQuizAnswers, setModuleQuizAnswers] = useState<Record<string, number>>({});
  const [showFullModuleQuiz, setShowFullModuleQuiz] = useState<boolean>(false);
=======
>>>>>>> Stashed changes

  // Final exam answers: { [questionId]: selectedOptionIndex }
  const [examAnswers, setExamAnswers] = useState<Record<string, number>>({});
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);
  const [examScore, setExamScore] = useState<number>(0);
  const [activeCertificate, setActiveCertificate] = useState<IssuedCertificate | null>(null);

  // Manual code verification search
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
    // Vigésimal score (0 to 20)
    const calculatedScore = Math.round((correctCount / selectedCourse.finalExam.length) * 20);
    setExamScore(calculatedScore);
    setExamSubmitted(true);

    if (calculatedScore >= 14) {
      // Check if certificate already issued for this course + student
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

  const loadImageElement = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = (e) => reject(e);
      img.src = src;
    });
  };

  // Renderiza la Constancia sobre la plantilla limpia oficial (1024x722 -> escalada a 2048x1444 HD)
  const renderCertificateCanvas = async (cert: IssuedCertificate): Promise<HTMLCanvasElement> => {
    const canvas = document.createElement('canvas');
    const W = 2048;
    const H = 1444;
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d')!;

<<<<<<< Updated upstream
    // 1. Dibujar tu plantilla limpia oficial de fondo (100% embebida, sin fallos de red/CORS)
    const bgImg = await loadImageElement(CERTIFICATE_TEMPLATE_DATA_URI);
=======
    // 1. Dibujar tu plantilla limpia oficial de fondo
    const bgImg = await loadImageElement('/plantilla-certificado.jpg');
>>>>>>> Stashed changes
    ctx.drawImage(bgImg, 0, 0, W, H);

    // 2. Título principal: CONSTANCIA
    ctx.textAlign = 'center';
    ctx.fillStyle = '#16264c';
    ctx.font = '900 104px Montserrat, "Segoe UI", Arial, sans-serif';
    ctx.fillText('CONSTANCIA', W / 2 - 40, 345);

    // 3. Subtítulo
    ctx.fillStyle = '#4b5563';
    ctx.font = '500 38px Montserrat, "Segoe UI", Arial, sans-serif';
    ctx.fillText('de Capacitación y Aprobación Académica en Enfermería', W / 2 - 40, 412);

    ctx.fillStyle = '#6b7280';
    ctx.font = '500 30px Montserrat, "Segoe UI", Arial, sans-serif';
    ctx.fillText('Por la presente, se hace constar que:', W / 2 - 40, 466);

    // 4. Nombre del participante en letra cursiva caligráfica azul marino
    ctx.fillStyle = '#16264c';
    ctx.font = 'italic 400 108px "Great Vibes", "Brush Script MT", "Segoe Script", Georgia, cursive';
    ctx.fillText(cert.studentName, W / 2 - 20, 595);

    // 5. Párrafo central con datos del curso, documento, horas y nota
    ctx.fillStyle = '#475569';
    ctx.font = '500 28px Montserrat, "Segoe UI", Arial, sans-serif';
    const line1 = `Identificado(a) con ${cert.studentDocType} N° ${cert.studentDocNumber}, ha culminado y aprobado satisfactoriamente el Curso de Actualización:`;
    ctx.fillText(line1, W / 2, 678);

    ctx.fillStyle = '#0f766e';
    ctx.font = '800 36px Montserrat, "Segoe UI", Arial, sans-serif';
    ctx.fillText(`“${cert.courseTitle.toUpperCase()}”`, W / 2, 738);

    ctx.fillStyle = '#334155';
    ctx.font = '600 27px Montserrat, "Segoe UI", Arial, sans-serif';
    const line3 = `Desarrollado con una duración de ${cert.academicHours} HORAS ACADÉMICAS (${cert.credits} CRÉDITOS) y calificación aprobatoria de ${cert.score}/20.`;
    ctx.fillText(line3, W / 2, 795);

    ctx.fillStyle = '#5b6472';
    ctx.font = '400 25px Montserrat, "Segoe UI", Arial, sans-serif';
    ctx.fillText(
      'Reconocemos su compromiso, dedicación y esfuerzo en su actualización continua,',
      W / 2,
      852
    );
    ctx.fillText(
      'que refleja su vocación y profesionalismo en el cuidado de la salud.',
      W / 2,
      890
    );

    // 6. Fecha justo encima de la firma que ya viene en la plantilla (derecha)
    ctx.textAlign = 'center';
    ctx.fillStyle = '#475569';
    ctx.font = '600 28px Montserrat, "Segoe UI", Arial, sans-serif';
    ctx.fillText(`Lima, ${cert.issueDate}`, 1640, 1085);

    // 7. Recuadro de Código QR y Registro en la parte inferior central
    const boxX = 640;
    const boxY = 1145;
    const boxW = 630;
    const boxH = 210;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.94)';
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(boxX, boxY, boxW, boxH, 20);
    ctx.fill();
    ctx.stroke();

    try {
      const qrImg = await loadImageElement(getQrImageUrl(cert));
      ctx.drawImage(qrImg, boxX + 20, boxY + 20, 170, 170);
    } catch {}

    ctx.textAlign = 'left';
    ctx.fillStyle = '#16264c';
    ctx.font = '800 23px Montserrat, "Segoe UI", Arial, sans-serif';
    ctx.fillText('CONSTANCIA CON QR VERIFICABLE', boxX + 208, boxY + 58);

    ctx.fillStyle = '#334155';
    ctx.font = '600 21px Montserrat, "Segoe UI", Arial, sans-serif';
    ctx.fillText(`Reg. N°: ${cert.certId} (${cert.courseCode})`, boxX + 208, boxY + 95);
    ctx.fillText(`Titular: ${cert.studentDocType} ${cert.studentDocNumber}`, boxX + 208, boxY + 130);

    ctx.fillStyle = '#0d9488';
    ctx.font = '700 21px Montserrat, "Segoe UI", Arial, sans-serif';
    ctx.fillText('www.enfermeriacertificada.com', boxX + 208, boxY + 166);

    return canvas;
  };

  const handleDownloadImage = async (cert: IssuedCertificate) => {
    try {
      const canvas = await renderCertificateCanvas(cert);
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = `Constancia_${cert.certId}_${cert.studentName.replace(/\s+/g, '_')}.png`;
      link.click();
    } catch (err) {
      console.error('Error al generar imagen:', err);
    }
  };

  const handleShareSocial = async (cert: IssuedCertificate) => {
    try {
      const canvas = await renderCertificateCanvas(cert);
      const blob: Blob | null = await new Promise((res) => canvas.toBlob(res, 'image/png'));
      const shareText = `¡Acabo de aprobar el curso "${cert.courseTitle}" (${cert.academicHours} hrs) en Enfermería Certificada! 🩺🎓 Verifica mi constancia aquí: ${getVerificationUrl(cert)}`;

      if (blob && navigator.share) {
        const file = new File([blob], `Constancia_${cert.certId}.png`, { type: 'image/png' });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: `Constancia - ${cert.courseTitle}`,
            text: shareText,
            files: [file],
          });
          return;
        }
        await navigator.share({
          title: `Constancia - ${cert.courseTitle}`,
          text: shareText,
          url: getVerificationUrl(cert),
        });
        return;
      }

      // Fallback en PC: Descargar la imagen lista y abrir WhatsApp para compartir
      await handleDownloadImage(cert);
      window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
    } catch (err) {
      console.error('Error al compartir:', err);
    }
  };

  const handlePrintCertificate = (cert: IssuedCertificate) => {
    const qrUrl = getQrImageUrl(cert);
<<<<<<< Updated upstream
    const tplUrl = CERTIFICATE_TEMPLATE_DATA_URI;
=======
    const tplUrl = `${window.location.origin}/plantilla-certificado.jpg`;
>>>>>>> Stashed changes

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <title>Constancia_${cert.certId}_${cert.studentName.replace(/\s+/g, '_')}</title>
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
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
            background: #0f172a;
            font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .page {
            width: 297mm;
            height: 210mm;
            position: relative;
            overflow: hidden;
            background: #ffffff;
          }
          /* Tu plantilla en limpio ocupa exactamente el 100% del fondo */
          .bg-template {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: fill;
            z-index: 1;
          }
          .overlay-content {
            position: absolute;
            inset: 0;
            z-index: 5;
          }
          /* Bloque central encajado en la zona blanca limpia de tu plantilla */
          .center-block {
            position: absolute;
            top: 17%;
            left: 6%;
            right: 8%;
            text-align: center;
          }
          .main-title {
            font-size: 40pt;
            font-weight: 900;
            color: #16264c;
            letter-spacing: 3px;
            text-transform: uppercase;
            margin: 0;
            line-height: 1;
          }
          .sub-title {
            font-size: 14pt;
            font-weight: 500;
            color: #4b5563;
            margin: 2.5mm 0 1.5mm;
          }
          .grant-intro {
            font-size: 11pt;
            font-weight: 500;
            color: #6b7280;
            margin: 0 0 2mm;
          }
          .student-script-name {
            font-family: 'Great Vibes', 'Brush Script MT', 'Segoe Script', cursive;
            font-size: 46pt;
            font-weight: 400;
            color: #16264c;
            margin: 1mm 0 3mm;
            line-height: 1.08;
          }
          .description-text {
            font-size: 10.5pt;
            font-weight: 400;
            color: #475569;
            line-height: 1.6;
            max-width: 222mm;
            margin: 0 auto;
          }
          .description-text strong {
            color: #16264c;
            font-weight: 700;
          }
          .course-highlight {
            display: block;
            font-size: 14pt;
            font-weight: 800;
            color: #0f766e;
            margin: 2mm 0;
            text-transform: uppercase;
          }
          /* Fecha posicionada exactamente encima de la firma de tu plantilla (abajo a la derecha) */
          .date-above-sig {
            position: absolute;
            bottom: 23.5%;
            right: 8.5%;
            width: 72mm;
            text-align: center;
            font-size: 10.5pt;
            font-weight: 600;
            color: #475569;
          }
          /* Código QR posicionado en el espacio limpio inferior central (entre la onda izquierda y tu firma) */
          .qr-bottom-center {
            position: absolute;
            bottom: 6%;
            left: 31%;
            display: flex;
            align-items: center;
            gap: 10px;
            background: rgba(255, 255, 255, 0.94);
            border: 1.5px solid #cbd5e1;
            border-radius: 10px;
            padding: 5px 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.06);
          }
          .qr-img {
            width: 20mm;
            height: 20mm;
            display: block;
          }
          .qr-meta {
            font-size: 8pt;
            color: #475569;
            line-height: 1.35;
            text-align: left;
          }
          .qr-meta strong {
            color: #16264c;
            font-size: 8.5pt;
          }
        </style>
      </head>
      <body>
        <div class="page">
          <img src="${tplUrl}" class="bg-template" alt="Plantilla Oficial" />

          <div class="overlay-content">
            <div class="center-block">
              <h1 class="main-title">CONSTANCIA</h1>
              <div class="sub-title">
                de Capacitación y Aprobación Académica en Enfermería
              </div>
              <div class="grant-intro">Por la presente, se hace constar que:</div>

              <div class="student-script-name">${cert.studentName}</div>

              <div class="description-text">
                Identificado(a) con <strong>${cert.studentDocType} N° ${cert.studentDocNumber}</strong>, ha culminado y aprobado satisfactoriamente el Curso de Actualización Clínica:
                <span class="course-highlight">“${cert.courseTitle}”</span>
                Desarrollado con una duración de <strong>${cert.academicHours} HORAS ACADÉMICAS (${cert.credits} CRÉDITOS)</strong> y calificación aprobatoria de <strong>${cert.score}/20</strong>.<br/>
                Reconocemos su compromiso, dedicación y esfuerzo en su actualización continua, que refleja su vocación y profesionalismo en el cuidado de la salud.
              </div>
            </div>

            <div class="date-above-sig">
              Lima, ${cert.issueDate}
            </div>

            <div class="qr-bottom-center">
              <img src="${qrUrl}" class="qr-img" alt="QR de Verificación" />
              <div class="qr-meta">
                <strong>CONSTANCIA CON QR VERIFICABLE</strong><br/>
                Reg. N°: <strong>${cert.certId}</strong> (${cert.courseCode})<br/>
                Titular: <strong>${cert.studentDocType} ${cert.studentDocNumber}</strong><br/>
                <strong>www.enfermeriacertificada.com</strong>
              </div>
            </div>
          </div>
        </div>
        <script>
          window.onload = function() {
            setTimeout(function() { window.print(); }, 450);
          };
        </script>
      </body>
      </html>
    `);
    printWindow.document.close();
  };

<<<<<<< Updated upstream
  // Generador e Impresor del Manual de Cátedra Oficial en PDF (A4) - Deshabilitado para evitar descargas
  const handlePrintManual = (_course: ClinicalCourse) => {
    return;
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const modulesHtml = course.modules
      .map(
        (mod) => `
      <div class="module-block">
        <div class="module-header">
          <span class="module-badge">MÓDULO ${mod.number} (${mod.duration})</span>
          <h2>${mod.title}</h2>
        </div>

        ${
          mod.part1Title || mod.part2Title
            ? `
          <div class="parts-grid">
            ${mod.part1Title ? `<div class="part-badge">📘 ${mod.part1Title}</div>` : ''}
            ${mod.part2Title ? `<div class="part-badge">📗 ${mod.part2Title}</div>` : ''}
          </div>
        `
            : ''
        }

        <div class="summary-box">
          <strong>Resumen Ejecutivo:</strong> ${mod.summary}
        </div>

        <div class="content-body">
          ${mod.content.map((p) => `<p>${p}</p>`).join('')}
        </div>

        ${
          mod.tableData
            ? `
          <div class="table-container">
            <div class="table-title">📊 ${mod.tableData.title}</div>
            <table>
              <thead>
                <tr>${mod.tableData.headers.map((h) => `<th>${h}</th>`).join('')}</tr>
              </thead>
              <tbody>
                ${mod.tableData.rows
                  .map(
                    (row) =>
                      `<tr>${row
                        .map(
                          (cell, cIdx) =>
                            `<td class="${cIdx === 0 ? 'first-col' : ''}">${cell}</td>`
                        )
                        .join('')}</tr>`
                  )
                  .join('')}
              </tbody>
            </table>
          </div>
        `
            : ''
        }

        <div class="keypoints-box">
          <h4>✓ Puntos Clave para la Práctica Asistencial y Examen:</h4>
          <ul>
            ${mod.keyPoints.map((kp) => `<li>${kp}</li>`).join('')}
          </ul>
        </div>

        <div class="pearl-box">
          <strong>💡 Perla Clínica de Guardia:</strong> ${mod.clinicalPearl}
        </div>

        ${
          mod.moduleQuiz && mod.moduleQuiz.length > 0
            ? `
          <div class="quiz-section">
            <h3>Evaluación de Acreditación del Módulo ${mod.number} (${mod.moduleQuiz.length} Preguntas)</h3>
            <div class="quiz-list">
              ${mod.moduleQuiz
                .map(
                  (q, idx) => `
                <div class="question-card">
                  <div class="question-text"><strong>${idx + 1}.</strong> ${q.question}</div>
                  <div class="options-grid">
                    ${q.options
                      .map(
                        (opt, oIdx) => `
                      <div class="option-item ${oIdx === q.correctIndex ? 'correct-option' : ''}">
                        <span class="opt-letter">${String.fromCharCode(97 + oIdx)})</span> ${opt}
                        ${oIdx === q.correctIndex ? ' <strong>✓ [Correcta]</strong>' : ''}
                      </div>
                    `
                      )
                      .join('')}
                  </div>
                  <div class="rationale-box"><strong>Fundamento Clínico:</strong> ${q.rationale}</div>
                </div>
              `
                )
                .join('')}
            </div>
          </div>
        `
            : ''
        }
      </div>
    `
      )
      .join('');

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <title>Manual_de_Catedra_${course.code}_${course.id}</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          @page {
            size: A4 portrait;
            margin: 14mm 12mm 14mm 12mm;
          }
          * {
            box-sizing: border-box;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          body {
            font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            color: #1e293b;
            background: #ffffff;
            margin: 0;
            padding: 0;
            line-height: 1.5;
            font-size: 9.5pt;
          }
          .cover-banner {
            background: linear-gradient(135deg, #071d2b 0%, #0f405c 100%);
            color: #ffffff;
            padding: 20px 24px;
            border-radius: 12px;
            margin-bottom: 22px;
            border-left: 6px solid #32d2c2;
          }
          .program-badge {
            display: inline-block;
            background: #32d2c2;
            color: #071d2b;
            font-size: 8pt;
            font-weight: 800;
            padding: 3px 10px;
            border-radius: 9999px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
          }
          .cover-title {
            font-size: 17pt;
            font-weight: 900;
            margin: 4px 0 8px;
            line-height: 1.2;
          }
          .cover-meta {
            font-size: 8.5pt;
            color: #cbd5e1;
            line-height: 1.5;
          }
          .cover-meta strong {
            color: #32d2c2;
          }
          .module-block {
            margin-bottom: 26px;
            page-break-inside: avoid;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            padding: 16px;
            background: #ffffff;
          }
          .module-header {
            border-bottom: 2px solid #0f766e;
            padding-bottom: 6px;
            margin-bottom: 10px;
          }
          .module-badge {
            background: #0f766e;
            color: white;
            font-size: 7.5pt;
            font-weight: 800;
            padding: 2px 8px;
            border-radius: 4px;
            text-transform: uppercase;
          }
          .module-header h2 {
            font-size: 12pt;
            font-weight: 800;
            color: #0f172a;
            margin: 6px 0 0;
          }
          .parts-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            margin-bottom: 10px;
          }
          .part-badge {
            background: #f0fdfa;
            border: 1px solid #99f6e4;
            color: #0f766e;
            padding: 5px 8px;
            border-radius: 6px;
            font-size: 8pt;
            font-weight: 700;
          }
          .summary-box {
            background: #f8fafc;
            border-left: 3px solid #3b82f6;
            padding: 8px 12px;
            font-size: 8.5pt;
            color: #334155;
            margin-bottom: 10px;
            border-radius: 0 6px 6px 0;
          }
          .content-body p {
            margin: 0 0 7px;
            text-align: justify;
            font-size: 8.5pt;
            line-height: 1.5;
            color: #334155;
          }
          .table-container {
            margin: 12px 0;
            border: 1px solid #cbd5e1;
            border-radius: 8px;
            overflow: hidden;
          }
          .table-title {
            background: #0f766e;
            color: white;
            font-weight: 700;
            font-size: 8pt;
            padding: 5px 10px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 7.5pt;
          }
          th {
            background: #f1f5f9;
            color: #0f172a;
            font-weight: 700;
            padding: 5px 7px;
            border-bottom: 1px solid #cbd5e1;
            text-align: left;
          }
          td {
            padding: 5px 7px;
            border-bottom: 1px solid #e2e8f0;
            color: #334155;
            vertical-align: top;
          }
          td.first-col {
            font-weight: 700;
            color: #0f172a;
          }
          .keypoints-box {
            background: #f0fdf4;
            border: 1px solid #86efac;
            padding: 9px 12px;
            border-radius: 8px;
            margin: 10px 0;
          }
          .keypoints-box h4 {
            margin: 0 0 5px;
            font-size: 8pt;
            font-weight: 800;
            color: #166534;
          }
          .keypoints-box ul {
            margin: 0;
            padding-left: 15px;
            font-size: 7.5pt;
            color: #14532d;
          }
          .keypoints-box li {
            margin-bottom: 3px;
          }
          .pearl-box {
            background: #fefce8;
            border: 1px solid #fde047;
            padding: 7px 10px;
            border-radius: 8px;
            font-size: 8pt;
            color: #854d0e;
            margin-bottom: 12px;
          }
          .quiz-section {
            background: #f8fafc;
            border: 1px solid #cbd5e1;
            border-radius: 8px;
            padding: 10px;
            margin-top: 12px;
          }
          .quiz-section h3 {
            margin: 0 0 8px;
            font-size: 9pt;
            font-weight: 800;
            color: #0f172a;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 4px;
          }
          .question-card {
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 6px;
            padding: 7px 9px;
            margin-bottom: 6px;
            page-break-inside: avoid;
          }
          .question-text {
            font-size: 8pt;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 4px;
          }
          .options-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3px;
            margin-bottom: 4px;
          }
          .option-item {
            font-size: 7.5pt;
            color: #475569;
            padding: 2px 5px;
            border-radius: 4px;
          }
          .option-item.correct-option {
            background: #dcfce7;
            color: #166534;
            font-weight: 600;
          }
          .rationale-box {
            background: #f1f5f9;
            padding: 3px 6px;
            border-radius: 4px;
            font-size: 7pt;
            color: #334155;
          }
          .footer-note {
            text-align: center;
            font-size: 7.5pt;
            color: #64748b;
            margin-top: 18px;
            border-top: 1px solid #e2e8f0;
            padding-top: 8px;
          }
        </style>
      </head>
      <body>
        <div class="cover-banner">
          <div class="program-badge">PROGRAMA DE ALTA ESPECIALIZACIÓN ACADÉMICA Y CLÍNICA (40 HORAS)</div>
          <h1 class="cover-title">Manual de Cátedra: ${course.title}</h1>
          <div class="cover-meta">
            <strong>Marco Técnico Normativo:</strong> ${course.normativaBase}<br/>
            <strong>Carga Académica:</strong> ${course.academicHours} Horas Lectivas (${course.credits} Créditos) • <strong>Código:</strong> ${course.code}<br/>
            <strong>Dirección Académica:</strong> Lic. Miguel Pantoja Antonio (CEP 120064) • <strong>Plataforma:</strong> www.enfermeriacertificada.com
          </div>
        </div>

        ${modulesHtml}

        <div class="footer-note">
          © 2026 Enfermería Certificada — Lic. Miguel Pantoja Antonio (CEP 120064). Material de cátedra oficial para uso de licenciados y estudiantes de enfermería.
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

=======
>>>>>>> Stashed changes
  // ============================================================================
  // VISTA 1: VALIDADOR PÚBLICO DE CERTIFICADO (QR)
  // ============================================================================
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

        {/* Buscador por código */}
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

  // ============================================================================
  // VISTA 2: ESTUDIO DE MÓDULOS DEL CURSO SELECCIONADO
  // ============================================================================
  if (viewMode === 'study' && selectedCourse) {
    const currentModule = selectedCourse.modules[activeModuleIndex];
    const courseProgress = progress[selectedCourse.id]?.completedModules || [];
    const isModuleCompleted = courseProgress.includes(currentModule.id);
    const allModulesCompleted = selectedCourse.modules.every((m) => courseProgress.includes(m.id));

    return (
      <section className="space-y-5">
        {/* Barra superior de retorno y progreso */}
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

<<<<<<< Updated upstream
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={startFinalExam}
              className="flex-1 md:flex-none px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <FileCheck className="w-4 h-4" />
              <span>Rendir Examen Final para Constancia</span>
            </button>
          </div>
=======
          <button
            onClick={startFinalExam}
            className="w-full md:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer"
          >
            <FileCheck className="w-4 h-4" />
            <span>Rendir Examen Final para Certificado</span>
          </button>
>>>>>>> Stashed changes
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Columna Izquierda: Índice de Módulos */}
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

          {/* Columna Derecha: Contenido del Módulo Activo */}
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

<<<<<<< Updated upstream
            {/* Subtítulos Parte 1 y Parte 2 del Manual de Cátedra */}
            {(currentModule.part1Title || currentModule.part2Title) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentModule.part1Title && (
                  <div className="bg-[#061824] px-3.5 py-2.5 rounded-xl border border-teal-500/30 text-xs font-bold text-teal-300">
                    📘 {currentModule.part1Title}
                  </div>
                )}
                {currentModule.part2Title && (
                  <div className="bg-[#061824] px-3.5 py-2.5 rounded-xl border border-cyan-500/30 text-xs font-bold text-cyan-300">
                    📗 {currentModule.part2Title}
                  </div>
                )}
              </div>
            )}

=======
>>>>>>> Stashed changes
            {/* Desarrollo teórico-clínico */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
              {currentModule.content.map((paragraph, i) => (
                <p key={i} className="bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/60">
                  {paragraph}
                </p>
              ))}
            </div>

<<<<<<< Updated upstream
            {/* Tabla Clínica Estructurada del Manual de Cátedra */}
            {currentModule.tableData && (
              <div className="bg-slate-950/70 rounded-2xl border border-[#164e63] overflow-hidden shadow-lg">
                <div className="bg-[#082f49] px-4 py-2.5 border-b border-[#164e63] text-xs sm:text-sm font-black text-[#32d2c2]">
                  📊 {currentModule.tableData.title}
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-900/90 text-teal-200 border-b border-slate-800">
                        {currentModule.tableData.headers.map((h, hIdx) => (
                          <th key={hIdx} className="p-3 font-bold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80 text-slate-200">
                      {currentModule.tableData.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-900/50">
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`p-3 align-top ${cIdx === 0 ? 'font-bold text-white' : ''}`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

=======
>>>>>>> Stashed changes
            {/* Puntos Clave de Enfermería */}
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

            {/* Perla Clínica */}
            <div className="bg-amber-950/35 border border-amber-500/40 p-4 rounded-2xl space-y-1">
              <span className="text-[11px] font-black uppercase text-amber-300 block">
                💡 Perla Clínica de Guardia
              </span>
              <p className="text-xs sm:text-sm text-amber-100 leading-relaxed">
                {currentModule.clinicalPearl}
              </p>
            </div>

            {/* Pregunta de Autoevaluación del Módulo */}
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

<<<<<<< Updated upstream
            {/* Banco de 10 Preguntas de Acreditación del Módulo (del Manual de Cátedra) */}
            {currentModule.moduleQuiz && currentModule.moduleQuiz.length > 0 && (
              <div className="bg-[#061824]/90 p-4 sm:p-5 rounded-2xl border border-teal-500/40 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs sm:text-sm font-black text-[#32d2c2] flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-400" />
                      Evaluación de Certificación del Módulo {currentModule.number} ({currentModule.moduleQuiz.length} Preguntas de Acreditación)
                    </span>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Practica con las 10 preguntas oficiales del Manual de Cátedra con retroalimentación inmediata.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowFullModuleQuiz((prev) => !prev)}
                    className="px-3.5 py-2 rounded-xl bg-[#0c2a3d] hover:bg-[#133d57] text-[#32d2c2] border border-[#1d6387] text-xs font-bold cursor-pointer shrink-0"
                  >
                    {showFullModuleQuiz ? 'Ocultar 10 Preguntas' : 'Resolver las 10 Preguntas del Módulo'}
                  </button>
                </div>

                {showFullModuleQuiz && (
                  <div className="space-y-3 pt-2 border-t border-slate-800">
                    {currentModule.moduleQuiz.map((mq, mqIdx) => {
                      const picked = moduleQuizAnswers[mq.id];
                      const answered = picked !== undefined;
                      return (
                        <div
                          key={mq.id}
                          className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 space-y-2.5"
                        >
                          <p className="text-xs sm:text-sm font-bold text-white">
                            <span className="text-amber-400 mr-1.5">{mqIdx + 1}.</span>
                            {mq.question}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {mq.options.map((opt, oIdx) => {
                              const isPicked = picked === oIdx;
                              const isRight = oIdx === mq.correctIndex;
                              let cls = 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-600';
                              if (answered) {
                                if (isRight) {
                                  cls = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold';
                                } else if (isPicked && !isRight) {
                                  cls = 'bg-rose-950/80 border-rose-500 text-rose-200';
                                }
                              }
                              return (
                                <button
                                  key={oIdx}
                                  type="button"
                                  onClick={() =>
                                    setModuleQuizAnswers((prev) => ({
                                      ...prev,
                                      [mq.id]: oIdx,
                                    }))
                                  }
                                  className={`text-left p-2.5 rounded-lg border text-xs transition cursor-pointer flex items-center justify-between gap-2 ${cls}`}
                                >
                                  <span>{opt}</span>
                                  {answered && isRight && (
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                          {answered && (
                            <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-[11px] text-slate-300">
                              <strong className="text-[#32d2c2]">Fundamento: </strong>
                              {mq.rationale}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

=======
>>>>>>> Stashed changes
            {/* Botón Completar y Avanzar */}
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

  // ============================================================================
  // VISTA 3: EXAMEN FINAL Y EMISIÓN DE CERTIFICADO CON QR
  // ============================================================================
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

        {/* Datos del participante para el certificado */}
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

        {/* Resultado del examen y Certificado si aprobó */}
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
              <div className="space-y-4">
                {/* Botones de Descarga PDF, Descarga Imagen PNG y Compartir en Redes */}
                <div className="flex flex-wrap items-center justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={() => handlePrintCertificate(activeCertificate)}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#179c94] to-[#22b8af] hover:from-[#1eb0a7] hover:to-[#28ccc2] text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Descargar / Imprimir PDF</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDownloadImage(activeCertificate)}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#0c2a3d] hover:bg-[#133d57] text-[#32d2c2] border border-[#1d6387] font-black text-xs flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Descargar como Imagen HD (PNG)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleShareSocial(activeCertificate)}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Compartir en Redes / WhatsApp</span>
                  </button>
                </div>

<<<<<<< Updated upstream
                {/* Vista previa usando directamente tu plantilla en limpio embebida */}
                <div className="relative max-w-4xl mx-auto aspect-[1024/722] rounded-2xl shadow-2xl overflow-hidden border border-slate-300 select-none bg-white">
                  <img
                    src={CERTIFICATE_TEMPLATE_DATA_URI}
=======
                {/* Vista previa usando directamente tu plantilla en limpio (/plantilla-certificado.jpg) */}
                <div className="relative max-w-4xl mx-auto aspect-[1024/722] rounded-2xl shadow-2xl overflow-hidden border border-slate-300 select-none bg-white">
                  <img
                    src="/plantilla-certificado.jpg"
>>>>>>> Stashed changes
                    alt="Plantilla Oficial Enfermería Certificada"
                    className="absolute inset-0 w-full h-full object-fill pointer-events-none"
                  />

                  {/* Contenido editado encima de la zona limpia de tu plantilla */}
                  <div className="absolute inset-0 z-10">
                    <div className="absolute top-[16%] left-[6%] right-[8%] text-center">
                      <h3 className="text-2xl sm:text-5xl font-black tracking-widest text-[#16264c] uppercase leading-none">
                        CONSTANCIA
                      </h3>
                      <p className="text-[11px] sm:text-lg font-medium text-[#4b5563] mt-1">
                        de Capacitación y Aprobación Académica en Enfermería
                      </p>
                      <p className="text-[10px] sm:text-xs text-[#6b7280] mt-0.5">
                        Por la presente, se hace constar que:
                      </p>

                      <div
                        className="text-2xl sm:text-5xl text-[#16264c] py-1 sm:py-2 leading-tight"
                        style={{ fontFamily: "'Great Vibes', 'Brush Script MT', 'Segoe Script', cursive" }}
                      >
                        {activeCertificate.studentName}
                      </div>

                      <p className="text-[10px] sm:text-xs text-[#475569] leading-relaxed max-w-xl mx-auto px-2">
                        Identificado(a) con{' '}
                        <strong className="text-[#16264c]">
                          {activeCertificate.studentDocType} N° {activeCertificate.studentDocNumber}
                        </strong>
                        , ha culminado y aprobado satisfactoriamente el Curso de Actualización Clínica:
                        <span className="block text-xs sm:text-base font-black text-teal-800 uppercase my-0.5 sm:my-1">
                          “{activeCertificate.courseTitle}”
                        </span>
                        Desarrollado con una duración de{' '}
                        <strong className="text-[#16264c]">
                          {activeCertificate.academicHours} HORAS ACADÉMICAS ({activeCertificate.credits}{' '}
                          CRÉDITOS)
                        </strong>{' '}
                        y calificación aprobatoria de{' '}
                        <strong className="text-[#16264c]">{activeCertificate.score}/20</strong>.
                        <span className="hidden sm:inline">
                          <br />
                          Reconocemos su compromiso, dedicación y esfuerzo en su actualización continua, que
                          refleja su vocación y profesionalismo en el cuidado de la salud.
                        </span>
                      </p>
                    </div>

                    {/* Fecha ubicada justo encima de la firma de la plantilla */}
                    <div className="absolute bottom-[23.5%] right-[8.5%] w-[26%] text-center text-[10px] sm:text-xs font-semibold text-slate-600">
                      Lima, {activeCertificate.issueDate}
                    </div>

                    {/* Recuadro de Código QR en el espacio limpio inferior central */}
                    <div className="absolute bottom-[5.5%] left-[31%] flex items-center gap-2 bg-white/95 border border-slate-300 rounded-xl p-1.5 sm:p-2 shadow-sm">
                      <img
                        src={getQrImageUrl(activeCertificate)}
                        alt="Código QR de Verificación"
                        className="w-10 h-10 sm:w-16 sm:h-16 block"
                      />
                      <div className="text-[9px] sm:text-[10px] text-slate-600 leading-tight text-left">
                        <strong className="text-[#16264c] block">CONSTANCIA CON QR</strong>
                        Reg. N°: <strong>{activeCertificate.certId}</strong>
                        <br />
                        <span className="text-teal-700 font-bold">www.enfermeriacertificada.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Lista de preguntas del examen */}
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

  // ============================================================================
  // VISTA PRINCIPAL: CATÁLOGO DE LOS 7 CURSOS Y MIS CERTIFICADOS
  // ============================================================================
  return (
    <section className="space-y-6">
      {/* Cabecera del Aula Virtual */}
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

      {/* Barra rápida de datos del alumno */}
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

      {/* Grid de los 7 Cursos */}
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
                {/* Franja superior de color */}
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

                  {/* Lista resumida de módulos */}
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
                {/* Barra de progreso */}
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

      {/* Historial de Certificados Emitidos en este Dispositivo */}
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
