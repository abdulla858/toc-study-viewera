window.TOC_INTERACTIVE = [
  {
    "id": "dfa_studio",
    "title": "استوديو الأوتوماتون الحتمي (DFA Live Simulator)",
    "desc": "محاكي تفاعلي حي لاختبار السلاسل خطوة بخطوة على آلة DFA تقبل السلاسل التي تنتهي بـ 01.",
    "type": "dfa",
    "states": [
      "q0",
      "q1",
      "q2"
    ],
    "start": "q0",
    "finals": [
      "q2"
    ],
    "transitions": {
      "q0": {
        "0": "q1",
        "1": "q0"
      },
      "q1": {
        "0": "q1",
        "1": "q2"
      },
      "q2": {
        "0": "q1",
        "1": "q0"
      }
    }
  },
  {
    "id": "pda_studio",
    "title": "استوديو تتبع مكدس PDA (Pushdown Automata Simulator)",
    "desc": "محاكاة بصرية لمكدس LIFO عند معالجة لغة a^n b^n مع إظهار الدفع والسحب لحظياً.",
    "type": "pda",
    "language": "L = {a^n b^n | n >= 1}"
  },
  {
    "id": "tm_studio",
    "title": "استوديو شريط آلة تورنغ (Turing Machine Tape Animator)",
    "desc": "شريط تفاعلي مع رأس قراءة وكتابة يتحرك خطوة بخطوة ويوضح تغييرات خلايا الشريط.",
    "type": "tm",
    "tape_example": "0011⊔⊔"
  }
];
