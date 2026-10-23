/* ═══════════════════════════════════════════════════════════
   ملف التهيئة الوحيد للمادة
   لتحويل الموقع لمادة جديدة: انسخ المجلد كاملاً ثم بدّل ملفات
   data/ وعدّل هذا الملف فقط — كل الصفحات تقرأ منه.
   ═══════════════════════════════════════════════════════════ */
window.TOC_CONFIG = {
  /* ── هوية المادة ── */
  subject: "نظرية الحوسبة",
  brand: "TOC · Study Viewer",
  brandSmall: "الاختبار النظري — المحاضرات 1–7",
  homeIcon: "Σ",
  homeSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="36" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="148" cy="256" r="72"/><circle cx="368" cy="256" r="72"/><circle cx="368" cy="256" r="110"/><path d="M228 256h72M272 218l40 38-40 38"/></svg>',
  pageTitle: "نظرية الحوسبة · السلايدات والنماذج (1–7)",
  summaryBrand: "TOC · Summary",
  teachers: "د. رويدا العامري + أ. وائل الوظاف",
  lecturesRange: "L1–L9 + PDA (435 شريحة شاملة النظري والمعمل)",
  aboutLine:
    "عارض مراجعة «نظرية الحوسبة» — سلايدات أصلية + أسئلة واقتباسات امتحانية لكل سلايد + حل النموذج الفصلي الرسمي مع الرسومات + بنك نماذج شامل (278+ سؤالاً مع بنك الرسوم البيانية).",

  /* ── نطاق الاختبار: مفتوح بالكامل حالياً حتى يتم التأكد من الدكاترة ── */
  excludedLecs: [],
  includedSlides: [],
  excludedSlides: [],

  /* ── أيقونات المحاضرات والنماذج ── */
  lecIcons: {},
  modelIcons: {},

  /* ── العرض الافتراضي عند الفتح: "slides" أو "models" ── */
  defaultView: "slides",

  /* ── رسائل الأقسام المعلقة (تظهر فقط عند غياب بياناتها) ── */
  theoryPendingTitle: "القسم النظري قيد الإعداد",
  theoryPendingSub: "النظري سيتوفر لاحقاً — هذا القسم معلق حالياً",
  modelsPendingTitle: "لا توجد نماذج بعد",
  modelsPendingSub:
    "ولّد بيانات النماذج من برومبت التوليد ثم ضع الملف في data/ وأضفه لقائمة files.index",

  /* ── ملفات البيانات المحمّلة لكل صفحة (بدون data/ وبدون .js) ── */
  files: {
    index: [
      "meta",
      "L1_ar",
      "L1_ex",
      "L2_ar",
      "L2_ex",
      "L3_ar",
      "L3_ex",
      "L4_ar",
      "L4_ex",
      "L6_ar",
      "L6_ex",
      "L7_ar",
      "L7_ex",
      "L9_ar",
      "L9_ex",
      "PDA_ar",
      "PDA_ex",
      "models_official",
      "models_comprehensive_quiz",
      "models_visual_diagrams",
      "slide_exam_quotes",
      "models_m1",
      "models_m23",
      "models_m4",
      "models_m5_tm_pda",
      "glossary",
      "img_prompts",
      "qpics",
      "videos",
      "summary",
      "tables",
      "interactive",
      "emergency"
],
    summary: ["meta", "summary"],
    roadmap: ["meta", "videos"],
    prompts: ["img_prompts"],
  },
};
