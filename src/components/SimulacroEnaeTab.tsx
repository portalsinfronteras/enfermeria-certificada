import React, { useState, useMemo, useEffect } from 'react';
import {
  GraduationCap,
  BookOpenCheck,
  Timer,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Star,
  RotateCcw,
  Search,
  Filter,
  Award,
  ChevronRight,
  ChevronLeft,
  Lightbulb,
  BookMarked,
  Flag,
  Share2,
  AlertTriangle,
  Play,
  ArrowRight,
  BarChart3,
  Layers,
  Sparkles,
  Info,
} from 'lucide-react';
import { ENAE_QUESTIONS, ENAE_AREAS, getRandom50Questions, EnaeQuestion, EnaeAreaType } from '../data/enaeQuestionsData';

type ViewMode = 'study' | 'exam' | 'results';

export const SimulacroEnaeTab: React.FC = () => {
  // Navigation & mode
  const [viewMode, setViewMode] = useState<ViewMode>('study');

  // 50 random questions for "Todas las áreas" in study mode (changes dynamically upon entering)
  const [study50Questions, setStudy50Questions] = useState<EnaeQuestion[]>(() => getRandom50Questions(ENAE_QUESTIONS));

  // Study mode filters
  const [selectedArea, setSelectedArea] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [onlyStarred, setOnlyStarred] = useState<boolean>(false);
  const [showAllExplanations, setShowAllExplanations] = useState<boolean>(false);

  // User interactions in Study mode
  const [userAnswers, setUserAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [starredQuestions, setStarredQuestions] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('enae_starred_questions');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Timed Exam Mode states - Default to 50 questions as requested
  const [examPoolSize, setExamPoolSize] = useState<number>(50);
  const [examAreaFilter, setExamAreaFilter] = useState<string>('all');
  const [examQuestions, setExamQuestions] = useState<EnaeQuestion[]>([]);
  const [examCurrentIndex, setExamCurrentIndex] = useState<number>(0);
  const [examAnswers, setExamAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [examFlagged, setExamFlagged] = useState<Record<string, boolean>>({});
  const [timeRemaining, setTimeRemaining] = useState<number>(50 * 75); // 50 * 75s = 62.5 minutes
  const [examDuration, setExamDuration] = useState<number>(50 * 75);
  const [isExamTimerRunning, setIsExamTimerRunning] = useState<boolean>(false);
  const [showNavigatorSheet, setShowNavigatorSheet] = useState<boolean>(false);

  // Shuffle 50 new questions on demand for "Todas las áreas"
  const shuffleStudy50 = () => {
    setStudy50Questions(getRandom50Questions(ENAE_QUESTIONS));
  };

  // Sync starred to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('enae_starred_questions', JSON.stringify(starredQuestions));
    } catch (e) {
      console.error('Error saving starred questions', e);
    }
  }, [starredQuestions]);

  // Exam timer countdown
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (viewMode === 'exam' && isExamTimerRunning && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            finishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [viewMode, isExamTimerRunning, timeRemaining]);

  // Star / Unstar helper
  const toggleStar = (id: string) => {
    setStarredQuestions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Study mode answer selection
  const handleStudyAnswer = (questionId: string, optionId: 'A' | 'B' | 'C' | 'D') => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  // Reset single question
  const resetQuestionAnswer = (questionId: string) => {
    setUserAnswers((prev) => {
      const copy = { ...prev };
      delete copy[questionId];
      return copy;
    });
  };

  // Study mode pagination state (10 random questions per batch)
  const [studyPage, setStudyPage] = useState<number>(0);
  const [shuffledStudyPool, setShuffledStudyPool] = useState<EnaeQuestion[]>([]);

  // Filtered questions for Study Mode
  const filteredQuestions = useMemo(() => {
    return ENAE_QUESTIONS.filter((q) => {
      if (selectedArea !== 'all' && q.area !== selectedArea) return false;
      if (selectedYear !== 'all' && !q.examSource.includes(selectedYear)) return false;
      if (onlyStarred && !starredQuestions[q.id]) return false;
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesText =
          q.question.toLowerCase().includes(query) ||
          q.topic.toLowerCase().includes(query) ||
          q.subarea.toLowerCase().includes(query) ||
          q.explanation.toLowerCase().includes(query) ||
          q.example.toLowerCase().includes(query) ||
          q.options.some((opt) => opt.text.toLowerCase().includes(query));
        if (!matchesText) return false;
      }
      return true;
    });
  }, [selectedArea, selectedYear, onlyStarred, searchQuery, starredQuestions]);

  // Whenever filtered questions change, shuffle them randomly and reset page to 0
  useEffect(() => {
    const shuffled = [...filteredQuestions].sort(() => 0.5 - Math.random());
    setShuffledStudyPool(shuffled);
    setStudyPage(0);
  }, [filteredQuestions]);

  const totalPages = Math.max(1, Math.ceil(shuffledStudyPool.length / 10));

  const currentStudy10 = useMemo(() => {
    const start = studyPage * 10;
    return shuffledStudyPool.slice(start, start + 10);
  }, [shuffledStudyPool, studyPage]);

  const handleNextStudy10 = () => {
    if (studyPage + 1 < totalPages) {
      setStudyPage((prev) => prev + 1);
    } else {
      // Reshuffle for a new random cycle
      const shuffled = [...filteredQuestions].sort(() => 0.5 - Math.random());
      setShuffledStudyPool(shuffled);
      setStudyPage(0);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevStudy10 = () => {
    if (studyPage > 0) {
      setStudyPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleShuffleNewBatch = () => {
    const shuffled = [...filteredQuestions].sort(() => 0.5 - Math.random());
    setShuffledStudyPool(shuffled);
    setStudyPage(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Statistics for study mode
  const studyStats = useMemo(() => {
    const answeredCount = Object.keys(userAnswers).length;
    let correctCount = 0;
    Object.entries(userAnswers).forEach(([qId, ans]) => {
      const q = ENAE_QUESTIONS.find((item) => item.id === qId);
      if (q && q.correctAnswer === ans) {
        correctCount++;
      }
    });
    const starredCount = Object.values(starredQuestions).filter(Boolean).length;
    return {
      total: ENAE_QUESTIONS.length,
      answered: answeredCount,
      correct: correctCount,
      accuracy: answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0,
      starred: starredCount,
    };
  }, [userAnswers, starredQuestions]);

  // Start Exam
  const startExam = (poolCount: number, area: string) => {
    let pool = ENAE_QUESTIONS;
    if (area !== 'all') {
      pool = pool.filter((q) => q.area === area);
    }
    // Shuffle pool
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(poolCount, shuffled.length));

    setExamQuestions(selected);
    setExamCurrentIndex(0);
    setExamAnswers({});
    setExamFlagged({});
    const totalSecs = selected.length * 75; // 75 seconds per question (~1.25 min)
    setTimeRemaining(totalSecs);
    setExamDuration(totalSecs);
    setIsExamTimerRunning(true);
    setViewMode('exam');
  };

  // Exam Answer select
  const handleExamOptionSelect = (optionId: 'A' | 'B' | 'C' | 'D') => {
    const currentQ = examQuestions[examCurrentIndex];
    if (!currentQ) return;
    setExamAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionId,
    }));
  };

  // Toggle flag in exam
  const toggleFlagExamQuestion = (id: string) => {
    setExamFlagged((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Finish exam & go to results
  const finishExam = () => {
    setIsExamTimerRunning(false);
    setViewMode('results');
  };

  // Format seconds to mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Exam results calculation
  const examResults = useMemo(() => {
    if (examQuestions.length === 0) return null;
    let correct = 0;
    let incorrect = 0;
    let omitted = 0;

    const areaBreakdown: Record<string, { total: number; correct: number }> = {};
    ENAE_AREAS.forEach((a) => {
      areaBreakdown[a] = { total: 0, correct: 0 };
    });

    examQuestions.forEach((q) => {
      const userAns = examAnswers[q.id];
      if (!areaBreakdown[q.area]) {
        areaBreakdown[q.area] = { total: 0, correct: 0 };
      }
      areaBreakdown[q.area].total++;

      if (!userAns) {
        omitted++;
      } else if (userAns === q.correctAnswer) {
        correct++;
        areaBreakdown[q.area].correct++;
      } else {
        incorrect++;
      }
    });

    const total = examQuestions.length;
    const scoreVigesimal = total > 0 ? Number(((correct / total) * 20).toFixed(1)) : 0;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    const isApproved = scoreVigesimal >= 11.0;

    return {
      total,
      correct,
      incorrect,
      omitted,
      scoreVigesimal,
      percentage,
      isApproved,
      areaBreakdown,
    };
  }, [examQuestions, examAnswers]);

  return (
    <div className="space-y-6">
      {/* Hero Banner with Official Syllabus Alignment */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#072438] via-[#09314d] to-[#0d4468] p-5 sm:p-7 border border-[#1b587a] shadow-2xl">
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#22b8af]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#134e6f] text-[#42edd8] border border-[#22b8af]/40">
                <GraduationCap className="w-3.5 h-3.5" />
                SIMULACRO ENAE & SERUMS 2026
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 font-medium">
                Temario Oficial MINSA
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-medium">
                Respuestas Explicadas + Ejemplos
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
              Entrenamiento y Banco de Preguntas ENAE
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              Exámenes oficiales pasados (2024-I, 2024-II, 2025-I, 2025-II y 2026-I) categorizados por los 5 bloques del{' '}
              <strong className="text-[#42edd8]">Temario Oficial de Enfermería MINSA</strong>. Cada pregunta cuenta con su fundamento normativo y un{' '}
              <strong className="text-amber-300">ejemplo sencillo para entender y recordar</strong>.
            </p>
          </div>

          {/* Quick Mode Switcher */}
          <div className="flex sm:flex-col gap-2 shrink-0">
            <div className="bg-[#051926]/90 p-1.5 rounded-xl border border-[#174863] flex gap-1">
              <button
                onClick={() => setViewMode('study')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'study'
                    ? 'bg-gradient-to-r from-[#179c94] to-[#22b8af] text-white shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-[#0a293d]'
                }`}
              >
                <BookOpenCheck className="w-4 h-4" />
                <span>Modo Estudio</span>
              </button>
              <button
                onClick={() => {
                  if (viewMode !== 'exam') {
                    startExam(examPoolSize, examAreaFilter);
                  }
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'exam' || viewMode === 'results'
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-[#0a293d]'
                }`}
              >
                <Timer className="w-4 h-4 text-amber-300" />
                <span>Simulacro Real</span>
              </button>
            </div>
          </div>
        </div>

        {/* Study Mode Quick Stats Strip */}
        {viewMode === 'study' && (
          <div className="mt-5 pt-4 border-t border-[#12425a] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-[#051926]/60 rounded-xl p-2.5 border border-[#144863] flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#22b8af]/20 flex items-center justify-center text-[#42edd8] shrink-0 font-bold">
                {studyStats.total}
              </div>
              <div>
                <p className="text-slate-400 text-[11px]">Banco Total</p>
                <p className="font-semibold text-white">Preguntas ENAE</p>
              </div>
            </div>

            <div className="bg-[#051926]/60 rounded-xl p-2.5 border border-[#144863] flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 font-bold">
                {studyStats.answered}
              </div>
              <div>
                <p className="text-slate-400 text-[11px]">Practicadas</p>
                <p className="font-semibold text-emerald-300">
                  {studyStats.correct} Correctas ({studyStats.accuracy}%)
                </p>
              </div>
            </div>

            <div className="bg-[#051926]/60 rounded-xl p-2.5 border border-[#144863] flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 font-bold">
                {studyStats.starred}
              </div>
              <div>
                <p className="text-slate-400 text-[11px]">Para Repaso</p>
                <p className="font-semibold text-amber-300">Guardadas ⭐</p>
              </div>
            </div>

            <div className="bg-[#051926]/60 rounded-xl p-2.5 border border-[#144863] flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300 shrink-0 font-bold">
                5
              </div>
              <div>
                <p className="text-slate-400 text-[11px]">Áreas Temario</p>
                <p className="font-semibold text-cyan-300">MINSA Oficial</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ============================================================== */}
      {/* VIEW MODE 1: MODO ESTUDIO & BANCO DE PREGUNTAS INTERACTIVO     */}
      {/* ============================================================== */}
      {viewMode === 'study' && (
        <div className="space-y-6">
          {/* Daily Limit Info Banner */}
          <div className="bg-[#071d2b] border border-[#12425a] rounded-xl p-4 flex items-start gap-3.5 text-xs text-slate-300 shadow-md">
            <Info className="w-4 h-4 text-[#22b8af] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white text-sm block mb-0.5">¿Cuándo se actualiza mi límite del día?</span>
              <p className="leading-relaxed text-slate-300">
                Tus accesos y cuotas diarias se actualizan automáticamente todos los días a las <strong className="text-[#42edd8]">00:00 horas (Medianoche)</strong> hora local. Tienes acceso ilimitado continuo a todo el banco de 600 preguntas clasificadas por temario oficial MINSA y simulacros.
              </p>
            </div>
          </div>

          {/* Controls & Filter Bar */}
          <div className="bg-[#071d2b] p-4 rounded-xl border border-[#12425a] shadow-lg space-y-3">
            {/* Row 1: Search & Toggles */}
            <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar por tema, palabra clave (ej: cadena de frío, Apgar, Bradford Hill, FODA, dengue)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-[#051926] border border-[#174863] rounded-lg text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#22b8af]"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs">
                {/* Year Filter */}
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="bg-[#051926] text-slate-200 border border-[#174863] rounded-lg px-2.5 py-2 text-xs focus:outline-none focus:border-[#22b8af]"
                >
                  <option value="all">📅 Todos los Exámenes</option>
                  <option value="2026">Examen 2026-I</option>
                  <option value="2025-II">Examen 2025-II</option>
                  <option value="2025-I">Examen 2025-I</option>
                  <option value="2024-II">Examen 2024-II</option>
                  <option value="2024-I">Examen 2024-I</option>
                </select>

                {/* Starred filter button */}
                <button
                  onClick={() => setOnlyStarred(!onlyStarred)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border text-xs font-medium cursor-pointer transition-colors ${
                    onlyStarred
                      ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                      : 'bg-[#051926] border-[#174863] text-slate-300 hover:text-white'
                  }`}
                >
                  <Star className={`w-3.5 h-3.5 ${onlyStarred ? 'fill-amber-400 text-amber-400' : 'text-slate-400'}`} />
                  <span>Guardadas ({studyStats.starred})</span>
                </button>

                {/* Show all explanations toggle */}
                <button
                  onClick={() => setShowAllExplanations(!showAllExplanations)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border text-xs font-medium cursor-pointer transition-colors ${
                    showAllExplanations
                      ? 'bg-[#15465e] border-[#22b8af] text-[#42edd8]'
                      : 'bg-[#051926] border-[#174863] text-slate-300 hover:text-white'
                  }`}
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>{showAllExplanations ? 'Ocultar Fundamentos' : 'Mostrar Todos los Fundamentos'}</span>
                </button>
              </div>
            </div>

            {/* Row 2: Temario Area Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-thin">
              <span className="text-slate-400 text-[11px] font-semibold uppercase tracking-wider mr-1 shrink-0 flex items-center gap-1">
                <Filter className="w-3 h-3 text-[#22b8af]" /> Temario:
              </span>
              <button
                onClick={() => setSelectedArea('all')}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all font-medium cursor-pointer ${
                  selectedArea === 'all'
                    ? 'bg-[#22b8af] text-[#061824] font-bold shadow-md'
                    : 'bg-[#051926] text-slate-300 hover:bg-[#0c2a3d] border border-[#144863]'
                }`}
              >
                Todas las Áreas ({ENAE_QUESTIONS.length})
              </button>
              {ENAE_AREAS.map((area) => {
                const count = ENAE_QUESTIONS.filter((q) => q.area === area).length;
                const isSelected = selectedArea === area;
                return (
                  <button
                    key={area}
                    onClick={() => setSelectedArea(area)}
                    className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all font-medium cursor-pointer ${
                      isSelected
                        ? 'bg-[#22b8af] text-[#061824] font-bold shadow-md'
                        : 'bg-[#051926] text-slate-300 hover:bg-[#0c2a3d] border border-[#144863]'
                    }`}
                  >
                    {area} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question List (10 Random Questions per Page) */}
          {filteredQuestions.length === 0 ? (
            <div className="bg-[#071d2b] rounded-2xl border border-[#12425a] p-10 text-center space-y-3">
              <HelpCircle className="w-12 h-12 mx-auto text-slate-500" />
              <h3 className="text-base font-bold text-white">No se encontraron preguntas con estos filtros</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Prueba borrando el término de búsqueda o seleccionando "Todas las Áreas" para ver todo el banco.
              </p>
              <button
                onClick={() => {
                  setSelectedArea('all');
                  setSelectedYear('all');
                  setSearchQuery('');
                  setOnlyStarred(false);
                }}
                className="px-4 py-2 bg-[#12425a] hover:bg-[#1a5b7d] text-white rounded-lg text-xs font-semibold cursor-pointer"
              >
                Restablecer Filtros
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-300 px-1 bg-[#051926]/80 p-3 rounded-xl border border-[#144863]">
                <span>
                  Mostrando bloque <strong className="text-[#42edd8]">{studyPage + 1}</strong> de <strong className="text-white">{totalPages}</strong> (<strong>10 preguntas aleatorias</strong> de {filteredQuestions.length} totales en este temario)
                </span>
                <span className="text-slate-400">Haz clic en una opción para responder o comprobar</span>
              </div>

              {currentStudy10.map((q, index) => {
                const globalIndex = studyPage * 10 + index;
                const userSelectedOption = userAnswers[q.id];
                const isAnswered = !!userSelectedOption;
                const isCorrect = userSelectedOption === q.correctAnswer;
                const isStarred = !!starredQuestions[q.id];
                const shouldShowDetails = isAnswered || showAllExplanations;

                return (
                  <div
                    key={q.id}
                    className={`bg-[#071d2b] rounded-xl border transition-all duration-200 overflow-hidden shadow-lg ${
                      isAnswered
                        ? isCorrect
                          ? 'border-emerald-500/40 bg-[#072428]/30'
                          : 'border-rose-500/40 bg-[#240a12]/20'
                        : 'border-[#12425a] hover:border-[#1d5c7c]'
                    }`}
                  >
                    {/* Header Bar */}
                    <div className="px-4 py-2.5 bg-[#051926]/90 border-b border-[#12425a] flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-[#0a2f42] text-[#42edd8] font-bold flex items-center justify-center text-xs border border-[#1b6285]">
                          #{globalIndex + 1}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#0e3a52] text-[#36d7cb] font-semibold text-[11px] border border-[#1b6285]">
                          {q.area}
                        </span>
                        <span className="text-slate-400 text-[11px] hidden sm:inline">&bull; {q.subarea}</span>
                        <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 text-[10px] border border-amber-500/25">
                          {q.examSource}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        {isAnswered && (
                          <button
                            onClick={() => resetQuestionAnswer(q.id)}
                            title="Reiniciar respuesta"
                            className="p-1.5 text-slate-400 hover:text-white hover:bg-[#0c2a3d] rounded-lg transition-colors cursor-pointer"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                          </button>
                        )}
                        <button
                          onClick={() => toggleStar(q.id)}
                          title={isStarred ? 'Quitar de guardadas' : 'Guardar para repasar'}
                          className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                            isStarred
                              ? 'text-amber-400 bg-amber-500/20'
                              : 'text-slate-400 hover:text-white hover:bg-[#0c2a3d]'
                          }`}
                        >
                          <Star className={`w-4 h-4 ${isStarred ? 'fill-amber-400' : ''}`} />
                        </button>
                      </div>
                    </div>

                    {/* Question Content */}
                    <div className="p-4 sm:p-5 space-y-4">
                      {/* Topic Pill */}
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                          <Layers className="w-3 h-3 text-[#22b8af]" /> Tema clave:
                        </span>
                        <span className="text-xs font-semibold text-white bg-[#092b3d] px-2 py-0.5 rounded border border-[#134e6f]">
                          {q.topic}
                        </span>
                      </div>

                      {/* Question Statement */}
                      <p className="text-sm sm:text-base font-medium text-slate-100 leading-relaxed">
                        {q.question}
                      </p>

                      {/* Options Grid */}
                      <div className="grid grid-cols-1 gap-2 pt-1">
                        {q.options.map((opt) => {
                          const isThisSelected = userSelectedOption === opt.id;
                          const isThisCorrect = opt.id === q.correctAnswer;

                          let optionStyles = 'bg-[#051926] border-[#144863] text-slate-200 hover:border-[#22b8af]/60';
                          if (shouldShowDetails) {
                            if (isThisCorrect) {
                              optionStyles = 'bg-emerald-950/40 border-emerald-500 text-emerald-200 font-semibold shadow-sm shadow-emerald-500/20';
                            } else if (isThisSelected && !isThisCorrect) {
                              optionStyles = 'bg-rose-950/40 border-rose-500 text-rose-200 font-medium';
                            } else {
                              optionStyles = 'bg-[#051926]/50 border-[#144863]/50 text-slate-400 opacity-60';
                            }
                          } else if (isThisSelected) {
                            optionStyles = 'bg-[#0c3144] border-[#22b8af] text-white font-medium';
                          }

                          return (
                            <button
                              key={opt.id}
                              onClick={() => handleStudyAnswer(q.id, opt.id)}
                              className={`w-full text-left p-3 rounded-xl border flex items-start gap-3 transition-all cursor-pointer text-xs sm:text-sm ${optionStyles}`}
                            >
                              <span
                                className={`w-6 h-6 rounded-lg font-bold flex items-center justify-center text-xs shrink-0 mt-0.5 ${
                                  shouldShowDetails && isThisCorrect
                                    ? 'bg-emerald-500 text-emerald-950 font-black'
                                    : shouldShowDetails && isThisSelected && !isThisCorrect
                                    ? 'bg-rose-500 text-white'
                                    : isThisSelected
                                    ? 'bg-[#22b8af] text-[#061824]'
                                    : 'bg-[#092437] text-slate-300'
                                }`}
                              >
                                {opt.id}
                              </span>
                              <span className="flex-1">{opt.text}</span>
                              {shouldShowDetails && isThisCorrect && (
                                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                              )}
                              {shouldShowDetails && isThisSelected && !isThisCorrect && (
                                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Explanation & Simple Example Box */}
                      {shouldShowDetails && (
                        <div className="pt-3 border-t border-[#12425a] space-y-3 animate-fadeIn">
                          {/* Correct Answer Header */}
                          <div className="flex items-center gap-2 text-xs">
                            <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4" /> Respuesta Correcta: Opción {q.correctAnswer}
                            </span>
                            {isAnswered && (
                              <span
                                className={`text-[11px] px-2 py-0.5 rounded font-bold ${
                                  isCorrect ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                                }`}
                              >
                                {isCorrect ? '¡Acertaste! 👏' : 'Respuesta Incorrecta'}
                              </span>
                            )}
                          </div>

                          {/* Technical Foundation */}
                          <div className="bg-[#051926] p-3.5 rounded-xl border border-[#144863] space-y-1.5 text-xs">
                            <div className="flex items-center gap-1.5 text-[#42edd8] font-bold">
                              <BookMarked className="w-3.5 h-3.5" />
                              <span>Fundamento Clínico / Normativo MINSA:</span>
                            </div>
                            <p className="text-slate-300 leading-relaxed">{q.explanation}</p>
                          </div>

                          {/* Simple Example / Clinical Analogy */}
                          <div className="bg-gradient-to-r from-amber-950/30 to-amber-900/10 p-3.5 rounded-xl border border-amber-500/30 space-y-1.5 text-xs">
                            <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                              <span>Para Entenderlo Fácil / Ejemplo Práctico:</span>
                            </div>
                            <p className="text-amber-100/90 leading-relaxed italic">{q.example}</p>
                          </div>

                          {/* Key Takeaway */}
                          {q.keyTakeaway && (
                            <div className="flex items-center gap-2 text-[11px] bg-[#0c2a3d] px-3 py-1.5 rounded-lg border border-[#175373] text-teal-200">
                              <Sparkles className="w-3.5 h-3.5 text-teal-300 shrink-0" />
                              <span>
                                <strong>Regla de oro:</strong> {q.keyTakeaway}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Pagination & Next 10 Random Questions Bar */}
              <div className="bg-[#071d2b] border border-[#12425a] rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg mt-6">
                <div className="text-xs text-slate-300">
                  Bloque <strong className="text-[#42edd8]">{studyPage + 1}</strong> de <strong className="text-white">{totalPages}</strong> (10 preguntas aleatorias)
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevStudy10}
                    disabled={studyPage === 0}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border ${
                      studyPage === 0
                        ? 'opacity-40 border-slate-700 text-slate-500 cursor-not-allowed'
                        : 'border-[#174863] bg-[#051926] text-slate-200 hover:bg-[#0c2a3d] cursor-pointer'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Anterior</span>
                  </button>

                  <button
                    onClick={handleShuffleNewBatch}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#0c3144] border border-[#17657d] text-[#42edd8] hover:bg-[#12455e] cursor-pointer"
                    title="Mezclar nuevas 10 preguntas aleatorias"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Nuevas Aleatorias</span>
                  </button>

                  <button
                    onClick={handleNextStudy10}
                    className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-[#179c94] hover:bg-[#22b8af] text-white shadow-md cursor-pointer transition-colors"
                  >
                    <span>Siguiente (10 más)</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* VIEW MODE 2: SIMULACRO REAL CRONOMETRADO                       */}
      {/* ============================================================== */}
      {viewMode === 'exam' && examQuestions.length > 0 && (
        <div className="space-y-4">
          {/* Exam Status Bar */}
          <div className="sticky top-16 z-30 bg-[#071d2b]/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-[#1b587a] shadow-xl flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-[#0e3a52] text-[#42edd8] text-xs font-bold border border-[#1b6285]">
                Pregunta {examCurrentIndex + 1} de {examQuestions.length}
              </span>
              <div className="hidden sm:flex items-center gap-1 text-xs text-slate-300">
                <span>Respondidas:</span>
                <strong className="text-white">
                  {Object.keys(examAnswers).length} / {examQuestions.length}
                </strong>
              </div>
            </div>

            {/* Countdown Clock */}
            <div
              className={`flex items-center gap-2 px-3 py-1 rounded-lg border text-xs sm:text-sm font-mono font-bold ${
                timeRemaining < 300
                  ? 'bg-rose-950/60 border-rose-500 text-rose-300 animate-pulse'
                  : 'bg-[#051926] border-[#174863] text-amber-300'
              }`}
            >
              <Timer className="w-4 h-4" />
              <span>{formatTime(timeRemaining)}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowNavigatorSheet(!showNavigatorSheet)}
                className="px-3 py-1.5 rounded-lg bg-[#0c2a3d] hover:bg-[#123952] text-xs text-slate-200 border border-[#174863] font-medium cursor-pointer"
              >
                Matriz ({Object.keys(examAnswers).length}/{examQuestions.length})
              </button>
              <button
                onClick={finishExam}
                className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-xs text-white font-bold shadow-md cursor-pointer"
              >
                Finalizar Examen
              </button>
            </div>
          </div>

          {/* Question Navigator Drawer / Grid (Collapsible) */}
          {showNavigatorSheet && (
            <div className="bg-[#051926] p-4 rounded-xl border border-[#144863] shadow-xl space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-200">Navegador de Preguntas:</span>
                <div className="flex items-center gap-3 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22b8af]" /> Respondida
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Marcada 🚩
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-600" /> Pendiente
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 max-h-48 overflow-y-auto p-1">
                {examQuestions.map((q, idx) => {
                  const hasAns = !!examAnswers[q.id];
                  const isFlag = !!examFlagged[q.id];
                  const isCurrent = idx === examCurrentIndex;

                  let btnColor = 'bg-[#092233] text-slate-400 border-[#144863]';
                  if (isCurrent) {
                    btnColor = 'ring-2 ring-white bg-[#12425a] text-white font-bold';
                  } else if (isFlag) {
                    btnColor = 'bg-amber-500/20 text-amber-300 border-amber-500/50 font-bold';
                  } else if (hasAns) {
                    btnColor = 'bg-[#155a6d] text-[#42edd8] border-[#22b8af]/40 font-semibold';
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        setExamCurrentIndex(idx);
                        setShowNavigatorSheet(false);
                      }}
                      className={`h-8 rounded-lg border text-xs flex items-center justify-center transition-all cursor-pointer ${btnColor}`}
                    >
                      {idx + 1}
                      {isFlag && <span className="text-[9px] ml-0.5">🚩</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Current Exam Question Card */}
          {(() => {
            const currentQ = examQuestions[examCurrentIndex];
            if (!currentQ) return null;
            const currentAnswer = examAnswers[currentQ.id];
            const isFlagged = !!examFlagged[currentQ.id];

            return (
              <div className="bg-[#071d2b] rounded-2xl border border-[#1b587a] p-5 sm:p-7 shadow-2xl space-y-6">
                {/* Header info */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs border-b border-[#12425a] pb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-[#0e3a52] text-[#42edd8] font-bold">
                      Pregunta #{examCurrentIndex + 1}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#092a3d] text-teal-300 font-medium">
                      {currentQ.area}
                    </span>
                    <span className="text-slate-400 text-xs hidden sm:inline">&bull; {currentQ.subarea}</span>
                  </div>

                  <button
                    onClick={() => toggleFlagExamQuestion(currentQ.id)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border text-xs font-medium cursor-pointer transition-colors ${
                      isFlagged
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                        : 'bg-[#051926] border-[#174863] text-slate-400 hover:text-white'
                    }`}
                  >
                    <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-400' : ''}`} />
                    <span>{isFlagged ? 'Marcada para revisar 🚩' : 'Marcar para revisar'}</span>
                  </button>
                </div>

                {/* Statement */}
                <div className="space-y-2">
                  <p className="text-base sm:text-lg font-semibold text-white leading-relaxed">
                    {currentQ.question}
                  </p>
                </div>

                {/* Options */}
                <div className="space-y-2.5">
                  {currentQ.options.map((opt) => {
                    const isSelected = currentAnswer === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleExamOptionSelect(opt.id)}
                        className={`w-full text-left p-3.5 sm:p-4 rounded-xl border flex items-center gap-3.5 transition-all cursor-pointer text-xs sm:text-sm ${
                          isSelected
                            ? 'bg-[#0c3144] border-[#22b8af] text-white font-medium shadow-md shadow-[#22b8af]/20'
                            : 'bg-[#051926] border-[#144863] text-slate-200 hover:bg-[#082233] hover:border-[#22b8af]/50'
                        }`}
                      >
                        <span
                          className={`w-7 h-7 rounded-lg font-bold flex items-center justify-center text-xs shrink-0 ${
                            isSelected ? 'bg-[#22b8af] text-[#061824]' : 'bg-[#092437] text-slate-300'
                          }`}
                        >
                          {opt.id}
                        </span>
                        <span className="flex-1">{opt.text}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Next / Prev Navigation */}
                <div className="flex items-center justify-between pt-4 border-t border-[#12425a]">
                  <button
                    disabled={examCurrentIndex === 0}
                    onClick={() => setExamCurrentIndex((prev) => Math.max(0, prev - 1))}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border ${
                      examCurrentIndex === 0
                        ? 'opacity-40 border-slate-700 text-slate-500 cursor-not-allowed'
                        : 'border-[#174863] bg-[#051926] text-slate-200 hover:bg-[#0c2a3d] cursor-pointer'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Anterior</span>
                  </button>

                  <span className="text-xs text-slate-400">
                    {examCurrentIndex + 1} de {examQuestions.length}
                  </span>

                  {examCurrentIndex < examQuestions.length - 1 ? (
                    <button
                      onClick={() => setExamCurrentIndex((prev) => Math.min(examQuestions.length - 1, prev + 1))}
                      className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-[#179c94] hover:bg-[#22b8af] text-white shadow-md cursor-pointer transition-colors"
                    >
                      <span>Siguiente</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={finishExam}
                      className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-md cursor-pointer"
                    >
                      <span>Entregar Examen</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* ============================================================== */}
      {/* VIEW MODE 3: RESULTADOS DEL SIMULACRO Y DESGLOSE POR ÁREA     */}
      {/* ============================================================== */}
      {viewMode === 'results' && examResults && (
        <div className="space-y-6">
          {/* Main Score Card */}
          <div className="bg-[#071d2b] rounded-2xl border border-[#1b587a] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0e3a52] text-[#42edd8] border border-[#1b6285]">
                  RESULTADO DEL SIMULACRO OFICIAL
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {examResults.isApproved ? '¡Felicitaciones! Has Aprobado 🎉' : 'Resultado Obtenido'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
                  {examResults.isApproved
                    ? 'Superaste la nota mínima aprobatoria para el SERUMS / ENAE. Revisa a continuación el desglose por áreas para afinar tus puntos más fuertes.'
                    : 'Aún estás por debajo de la meta aprobatoria. Te recomendamos repasar los fundamentos teóricos y ejemplos de las áreas marcadas abajo.'}
                </p>
              </div>

              {/* Big Grade Badge */}
              <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#051926] border border-[#144863] shadow-inner shrink-0 min-w-[200px]">
                <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Nota Vigesimal</p>
                <div className="flex items-baseline gap-1 my-1">
                  <span
                    className={`text-4xl sm:text-5xl font-black ${
                      examResults.scoreVigesimal >= 14
                        ? 'text-emerald-400'
                        : examResults.scoreVigesimal >= 11
                        ? 'text-teal-300'
                        : 'text-rose-400'
                    }`}
                  >
                    {examResults.scoreVigesimal}
                  </span>
                  <span className="text-slate-400 text-lg font-bold">/ 20</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium">
                  <span className="text-slate-300">{examResults.percentage}% de acierto</span>
                  <span className="text-slate-500">&bull;</span>
                  <span
                    className={`px-2 py-0.5 rounded font-bold text-[11px] ${
                      examResults.isApproved
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : 'bg-rose-500/20 text-rose-300'
                    }`}
                  >
                    {examResults.isApproved ? 'APROBADO' : 'REQUIERE REFUERZO'}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-6 pt-6 border-t border-[#12425a] grid grid-cols-3 gap-3 text-center">
              <div className="bg-[#051926]/70 p-3 rounded-xl border border-emerald-500/30">
                <p className="text-xs text-emerald-400 font-semibold flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Correctas
                </p>
                <p className="text-xl font-bold text-white mt-0.5">{examResults.correct}</p>
              </div>
              <div className="bg-[#051926]/70 p-3 rounded-xl border border-rose-500/30">
                <p className="text-xs text-rose-400 font-semibold flex items-center justify-center gap-1">
                  <XCircle className="w-3.5 h-3.5" /> Incorrectas
                </p>
                <p className="text-xl font-bold text-white mt-0.5">{examResults.incorrect}</p>
              </div>
              <div className="bg-[#051926]/70 p-3 rounded-xl border border-slate-600">
                <p className="text-xs text-slate-400 font-semibold flex items-center justify-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5" /> En blanco
                </p>
                <p className="text-xl font-bold text-white mt-0.5">{examResults.omitted}</p>
              </div>
            </div>
          </div>

          {/* Area Performance Breakdown */}
          <div className="bg-[#071d2b] rounded-2xl border border-[#12425a] p-5 sm:p-6 space-y-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#22b8af]" />
              <h4 className="text-base font-bold text-white">Rendimiento por Bloque del Temario MINSA</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {ENAE_AREAS.map((area) => {
                const data = examResults.areaBreakdown[area] || { total: 0, correct: 0 };
                if (data.total === 0) return null;
                const pct = Math.round((data.correct / data.total) * 100);

                let barColor = 'bg-rose-500';
                let textColor = 'text-rose-400';
                if (pct >= 70) {
                  barColor = 'bg-emerald-500';
                  textColor = 'text-emerald-400';
                } else if (pct >= 50) {
                  barColor = 'bg-amber-500';
                  textColor = 'text-amber-400';
                }

                return (
                  <div key={area} className="bg-[#051926] p-3.5 rounded-xl border border-[#144863] space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-200">{area}</span>
                      <span className={`font-bold ${textColor}`}>
                        {data.correct} / {data.total} ({pct}%)
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#082233] overflow-hidden">
                      <div className={`h-full rounded-full transition-all duration-500 ${barColor}`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => startExam(examPoolSize, examAreaFilter)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#179c94] to-[#22b8af] text-white text-xs font-bold shadow-lg cursor-pointer hover:opacity-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Realizar Nuevo Simulacro</span>
            </button>

            <button
              onClick={() => setViewMode('study')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0e3a52] text-[#42edd8] border border-[#1b6285] text-xs font-bold hover:bg-[#124866] cursor-pointer"
            >
              <BookOpenCheck className="w-4 h-4" />
              <span>Volver al Modo Banco de Preguntas</span>
            </button>
          </div>

          {/* Full Exam Review / Solucionario */}
          <div className="space-y-4 pt-4">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              Solucionario Completo del Simulacro ({examQuestions.length} Preguntas)
            </h4>

            <div className="space-y-4">
              {examQuestions.map((q, idx) => {
                const userAns = examAnswers[q.id];
                const isCorrect = userAns === q.correctAnswer;
                const isOmitted = !userAns;

                return (
                  <div
                    key={q.id}
                    className={`bg-[#071d2b] rounded-xl border p-4 sm:p-5 space-y-3.5 shadow-md ${
                      isOmitted
                        ? 'border-slate-700 bg-[#061824]'
                        : isCorrect
                        ? 'border-emerald-500/40 bg-[#072529]/30'
                        : 'border-rose-500/40 bg-[#250a12]/20'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-[#092233] text-white font-bold flex items-center justify-center text-xs">
                          #{idx + 1}
                        </span>
                        <span className="font-semibold text-slate-300">{q.area}</span>
                        <span className="text-slate-400 hidden sm:inline">&bull; {q.subarea}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        {isOmitted ? (
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-medium">
                            En blanco
                          </span>
                        ) : isCorrect ? (
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Correcta
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold flex items-center gap-1">
                            <XCircle className="w-3.5 h-3.5" /> Tu respuesta: {userAns}
                          </span>
                        )}
                        <span className="text-amber-300 text-[11px] font-bold">
                          Clave: {q.correctAnswer}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm font-medium text-white leading-relaxed">{q.question}</p>

                    {/* Options list */}
                    <div className="grid grid-cols-1 gap-1.5 text-xs">
                      {q.options.map((opt) => {
                        const isThisCorrect = opt.id === q.correctAnswer;
                        const isThisUser = userAns === opt.id;

                        let style = 'bg-[#051926]/60 border-[#144863] text-slate-300';
                        if (isThisCorrect) {
                          style = 'bg-emerald-950/40 border-emerald-500 text-emerald-200 font-bold';
                        } else if (isThisUser && !isThisCorrect) {
                          style = 'bg-rose-950/40 border-rose-500 text-rose-200 font-medium';
                        }

                        return (
                          <div key={opt.id} className={`p-2.5 rounded-lg border flex items-center gap-2.5 ${style}`}>
                            <span
                              className={`w-5 h-5 rounded font-bold flex items-center justify-center text-[11px] shrink-0 ${
                                isThisCorrect
                                  ? 'bg-emerald-500 text-emerald-950'
                                  : isThisUser
                                  ? 'bg-rose-500 text-white'
                                  : 'bg-[#092437] text-slate-400'
                              }`}
                            >
                              {opt.id}
                            </span>
                            <span className="flex-1">{opt.text}</span>
                            {isThisCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                            {isThisUser && !isThisCorrect && <XCircle className="w-4 h-4 text-rose-400 shrink-0" />}
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    <div className="bg-[#051926] p-3 rounded-lg border border-[#144863] space-y-1.5 text-xs">
                      <p className="text-[#42edd8] font-semibold flex items-center gap-1.5">
                        <BookMarked className="w-3.5 h-3.5" /> Fundamento Teórico:
                      </p>
                      <p className="text-slate-300 leading-relaxed">{q.explanation}</p>
                      <div className="pt-2 border-t border-[#12425a]/60">
                        <p className="text-amber-300 font-semibold flex items-center gap-1.5">
                          <Lightbulb className="w-3.5 h-3.5" /> Ejemplo Sencillo:
                        </p>
                        <p className="text-amber-100/90 italic">{q.example}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
