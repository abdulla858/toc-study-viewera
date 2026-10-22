window.TOC_MODELS = window.TOC_MODELS || [];

window.TOC_MODELS.push({
 "id": "m1",
 "kind": "عملي",
 "title_ar": "بنك أسئلة الدفعة السابقة (عملي)",
 "origin_ar": "أسئلة حقيقية من دفعة سابقة بنفس المنهج — أُعيد تنظيمها وترجمتها وأُضيفت لها الشروحات لكل خيار وربط السلايدات ونصائح امتحانية",
 "origin_url": "https://github.com/Koros1Sama/toc-viewer/tree/main/exams",
 "origin_label": "مجلد النماذج على GitHub",
 "origin_sources": [
  {
   "label": "ملف Com_th.html الأصلي",
   "url": "./exams/Com_th.html"
  },
  {
   "label": "كود بنك النماذج المباشر (models_m1.js)",
   "url": "https://github.com/Koros1Sama/toc-viewer/blob/main/data/models_m1.js"
  }
 ],
 "questions": [
  {
   "n": 1,
   "type": "mcq",
   "q_ar": "أيٌّ مما يلي يمثل مجموعة منتهية وغير فارغة من الرموز (Symbols) في نظرية الحوسبة؟",
   "q_en": "Which of the following represents a finite, non-empty set of symbols in Theory of Computation?",
   "opts": [
    {
     "ar": "الأبجدية (Alphabet / Σ)",
     "en": "Alphabet (Σ)",
     "ok": true,
     "why": "الأبجدية تُعرّف رياضياً بأنها مجموعة منتهية وغير فارغة من الرموز أو الأحرف الأساسية التي تُبنى منها السلاسل واللغات."
    },
    {
     "ar": "السلسلة (String / Word)",
     "en": "String",
     "ok": false,
     "why": "السلسلة هي تتابع أو متتالية منتهية ومرتبة من الرموز وليست مجموعة من الرموز."
    },
    {
     "ar": "اللغة (Language)",
     "en": "Language",
     "ok": false,
     "why": "اللغة هي مجموعة من السلاسل (قد تكون منتهية أو لانهائية) وليست مجموعة من الرموز المفردة."
    },
    {
     "ar": "القواعد (Grammar)",
     "en": "Grammar",
     "ok": false,
     "why": "القواعد هي نظام متكامل من قواعد الإنتاج الصورية (Production Rules) لتوليد السلاسل وليست مجرد مجموعة رموز."
    }
   ],
   "ref": "L1-S013",
   "tip": "تذكر دائماً: الرمز (Symbol) عنصر أولي، والأبجدية (Σ) مجموعة رموز منتهية، والسلسلة (String) تتابع رموز، واللغة (Language) مجموعة سلاسل."
  },
  {
   "n": 2,
   "type": "mcq",
   "q_ar": "مجموعة جميع السلاسل الممكن تكوينها من الأبجدية Σ، بما في ذلك السلسلة الفارغة (ε)، يُرمز لها بـ:",
   "q_en": "The set of all possible strings that can be formed from an alphabet Σ, including the empty string, is denoted by:",
   "opts": [
    {
     "ar": "Σ* (نجمة كلين / Kleene Star)",
     "en": "Σ* (Kleene Star)",
     "ok": true,
     "why": "نجمة كلين تمثل الإغلاق النجمي للأبجدية، أي مجموعة كل السلاسل الناتجة عن تكرار رموز Σ صفراً أو أكثر من المرات: Σ* = Σ⁰ ∪ Σ¹ ∪ Σ² ∪ ... متضمنة السلسلة الفارغة ε."
    },
    {
     "ar": "Σ⁺ (إغلاق كلين الموجب / Kleene Plus)",
     "en": "Σ+ (Kleene Plus)",
     "ok": false,
     "why": "الإغلاق الموجب (Σ⁺) يمثل مجموعة كل السلاسل ذات الطول 1 فما فوق (تكرار مرة واحدة على الأقل)، ولا يحتوي على ε ما لم تكن الأبجدية تحويها أصلاً."
    },
    {
     "ar": "Σ²",
     "en": "Σ²",
     "ok": false,
     "why": "Σ² تمثل فقط السلاسل ذات الطول 2 المكونة من رموز Σ."
    },
    {
     "ar": "2^Σ (مجموعة القوة / Power Set)",
     "en": "Power set of Σ",
     "ok": false,
     "why": "2^Σ أو P(Σ) يمثل مجموعة كل المجموعات الجزئية من رموز الأبجدية وليس مجموعة السلاسل النصية."
    }
   ],
   "ref": "L1-S022",
   "tip": "الفرق الجوهري بين Σ* و Σ⁺ هو احتواء Σ* على السلسلة الفارغة ε: العلاقة هي Σ* = Σ⁺ ∪ {ε}."
  },
  {
   "n": 3,
   "type": "mcq",
   "q_ar": "إذا كانت السلسلة u = \"ab\" والسلسلة v = \"ba\"، فما ناتج عملية الربط والتسلسل (Concatenation) uv؟",
   "q_en": "If u = \"ab\" and v = \"ba\", what is the concatenation uv?",
   "opts": [
    {
     "ar": "abba",
     "en": "abba",
     "ok": true,
     "why": "عملية الربط uv تلصق رموز السلسلة v مباشرة بعد رموز السلسلة u بالتتابع: \"ab\" + \"ba\" = \"abba\"."
    },
    {
     "ar": "baab",
     "en": "baab",
     "ok": false,
     "why": "هذا الناتج يمثل vu وليس uv، وعملية ربط السلاسل غير إبدالية (Non-commutative) أي uv ≠ vu عموماً."
    },
    {
     "ar": "abab",
     "en": "abab",
     "ok": false,
     "why": "هذا الناتج يمثل u² (ربط u بنفسها) وليس ربط u مع v."
    },
    {
     "ar": "baba",
     "en": "baba",
     "ok": false,
     "why": "هذا الناتج يمثل v² (ربط v بنفسها) وليس ربط u مع v."
    }
   ],
   "ref": "L1-S020",
   "tip": "انتبه: عملية ربط السلاسل تجميعية (Associative) ولكنها ليست إبدالية (Not Commutative). طول السلسلة المدمجة |uv| = |u| + |v| = 4."
  },
  {
   "n": 4,
   "type": "mcq",
   "q_ar": "بالنسبة للسلسلة \"automata\"، أي من الخيارات التالية يُعد بادئة صالحة (Prefix) ولكن ليس لاحقة (Suffix)؟",
   "q_en": "For the string \"automata\", which of the following is a valid prefix but not a valid suffix?",
   "opts": [
    {
     "ar": "\"auto\"",
     "en": "\"auto\"",
     "ok": true,
     "why": "السلسلة \"auto\" تبدأ بها الكلمة الأصلية (\"auto\" + \"mata\") فهي بادئة (Prefix)، لكن الكلمة لا تنتهي بـ \"auto\" (بل تنتهي بـ \"mata\")، وبالتالي ليست لاحقة (Suffix)."
    },
    {
     "ar": "\"a\"",
     "en": "\"a\"",
     "ok": false,
     "why": "الرمز 'a' هو بادئة لأن الكلمة تبدأ به، وهو أيضاً لاحقة لأن الكلمة تنتهي به."
    },
    {
     "ar": "\"ta\"",
     "en": "\"ta\"",
     "ok": false,
     "why": "\"ta\" لاحقة صحيحة لأن الكلمة تنتهي بها، وليست بادئة لأن الكلمة لا تبدأ بـ \"ta\"."
    },
    {
     "ar": "\"automata\"",
     "en": "\"automata\"",
     "ok": false,
     "why": "السلسلة الكاملة تُعتبر بادئة ولاحقة لنفسها في نفس الوقت (غير فعلية Improper)."
    }
   ],
   "ref": "L1-S017",
   "tip": "البادئة (Prefix) تبدأ من أول السلسلة، واللاحقة (Suffix) تمتد حتى آخر حرف. لأي سلسلة w، تعتبر w و ε بوادئ ولواحق لنفسها دائماً."
  },
  {
   "n": 5,
   "type": "mcq",
   "q_ar": "ما هو طول السلسلة الفارغة (Empty String) المرموز لها بـ ε (أو λ)؟",
   "q_en": "What is the length of the empty string (ε or λ)?",
   "opts": [
    {
     "ar": "0",
     "en": "0",
     "ok": true,
     "why": "السلسلة الفارغة ε هي السلسلة الفريدة التي لا تحتوي على أي رموز، ولذلك طولها رياضياً |ε| = 0 دائماً."
    },
    {
     "ar": "1",
     "en": "1",
     "ok": false,
     "why": "السلسلة ذات الطول 1 تحتوي على رمز واحد على الأقل، بينما ε خالية تماماً من أي رمز."
    },
    {
     "ar": "غير محدد (Undefined)",
     "en": "Undefined",
     "ok": false,
     "why": "طول السلسلة الفارغة محدد رياضياً بدقة وقيمته ثابتة وتساوي الصفر."
    },
    {
     "ar": "لانهائي (Infinite)",
     "en": "Infinite",
     "ok": false,
     "why": "طول السلسلة الفارغة عدد منتهٍ ومحدد ويساوي 0."
    }
   ],
   "ref": "L1-S016",
   "tip": "فخ شائع: طول السلسلة الفارغة هو |ε| = 0، بينما عدد عناصر المجموعة المحتوية عليها هو |{ε}| = 1 لأنها تحوي عنصراً واحداً هو السلسلة الفارغة."
  },
  {
   "n": 6,
   "type": "mcq",
   "q_ar": "العملية التي تعكس ترتيب الرموز في السلسلة النصية تُسمى:",
   "q_en": "The operation that reverses the order of symbols in a string is called:",
   "opts": [
    {
     "ar": "المعكوس (Reverse / wᴿ)",
     "en": "Reverse (wᴿ)",
     "ok": true,
     "why": "عملية المعكوس wᴿ تعكس تتابع الرموز في السلسلة من اليمين إلى اليسار (فإذا كانت w = a₁a₂...aₙ فإن wᴿ = aₙ...a₂a₁)."
    },
    {
     "ar": "الربط (Concatenation)",
     "en": "Concatenation",
     "ok": false,
     "why": "الربط يدمج سلسلتين معاً بالتتابع دون تغيير ترتيب الرموز الداخلية لكل منهما."
    },
    {
     "ar": "الاتحاد (Union)",
     "en": "Union",
     "ok": false,
     "why": "الاتحاد عملية على المجموعات واللغات تجمع عناصر لغتين وليست عملية عكس لرموز السلسلة."
    },
    {
     "ar": "نجمة كلين (Kleene Star)",
     "en": "Kleene Star",
     "ok": false,
     "why": "نجمة كلين تولد تكرارات متعددة للسلاسل وليست مسؤولة عن عكس ترتيب الرموز."
    }
   ],
   "ref": "L1-S020",
   "tip": "من خواص المعكوس المهمة: (uv)ᴿ = vᴿuᴿ (يُعكس الترتيب الخارجي وتُعكس كل سلسلة داخلياً) و (wᴿ)ᴿ = w."
  },
  {
   "n": 7,
   "type": "mcq",
   "q_ar": "تُعرّف اللغة الصورية (Language) في نظرية الحوسبة بأنها:",
   "q_en": "A formal language is defined in TOC as:",
   "opts": [
    {
     "ar": "مجموعة من السلاسل المعرفة فوق أبجدية معينة (A set of strings over an alphabet)",
     "en": "A set of strings over an alphabet",
     "ok": true,
     "why": "اللغة L فوق أبجدية Σ هي أي مجموعة جزئية من فضاء جميع السلاسل الممكنة: L ⊆ Σ*."
    },
    {
     "ar": "مجموعة منتهية فقط من السلاسل",
     "en": "A finite set of strings only",
     "ok": false,
     "why": "يمكن للغة أن تكون منتهية (Finite) أو لا نهائية (Infinite مثل لغة كل السلاسل ذات الطول الزوجي)."
    },
    {
     "ar": "سلسلة واحدة مفردة من الرموز",
     "en": "A single string",
     "ok": false,
     "why": "اللغة مجموعة من السلاسل وليست سلسلة مفردة؛ حتى وإن احتوت على سلسلة واحدة {w} فهي مجموعة."
    },
    {
     "ar": "مجموعة كل الرموز الأساسية",
     "en": "A set of basic symbols",
     "ok": false,
     "why": "مجموعة الرموز الأساسية هي تعريف الأبجدية (Alphabet) وليست اللغة."
    }
   ],
   "ref": "L1-S021",
   "tip": "تذكر: بما أن L ⊆ Σ*، فإن المجموعة الفارغة ∅ لغة، والمجموعة {ε} لغة، و Σ* نفسها لغة."
  },
  {
   "n": 8,
   "type": "mcq",
   "q_ar": "لا يمكن تعريف متممة اللغة L (ويرمز لها بـ L̄ أو L') إلا إذا كان ما يلي مُعرَّفاً ومحدداً مسبقاً:",
   "q_en": "The complement of a language L (L') is defined if and only if which of the following is defined?",
   "opts": [
    {
     "ar": "الأبجدية Σ (The Alphabet Σ)",
     "en": "Alphabet (Σ)",
     "ok": true,
     "why": "تُعرّف متممة اللغة رياضياً بالنسبة للفضاء الشامل للسلاسل: L' = Σ* - L، وبدون معرفة الأبجدية Σ لا يمكن تحديد المجموعة الشاملة Σ*."
    },
    {
     "ar": "السلسلة النصية (The String)",
     "en": "String",
     "ok": false,
     "why": "السلسلة عنصر ينتمي للغة وليست الفضاء المرجعي الحاكم للعمليات المجموعاتية كالمتممة."
    },
    {
     "ar": "الكلمة (The Word)",
     "en": "Word",
     "ok": false,
     "why": "الكلمة مرادف للسلسلة النصية، ولا تحدد الفضاء الشامل المطلوب لحساب المتممة."
    },
    {
     "ar": "القواعد (The Grammar)",
     "en": "Grammar",
     "ok": false,
     "why": "القواعد أداة توليد للغة وليست الفضاء المرجعي الذي تُحسب منه المتممة."
    }
   ],
   "ref": "L1-S025",
   "tip": "المتممة تعتمد كلياً على الأبجدية: متممة L = {0} فوق Σ={0} هي Σ* - {0}، بينما فوق Σ={0,1} تختلف تماماً لاشتمالها على كافة السلاسل المحتوية على 1."
  },
  {
   "n": 9,
   "type": "mcq",
   "q_ar": "أيٌّ من التعبيرات التالية لا يمثل اللغة المعطاة {0, 01}؟",
   "q_en": "Which of the following expressions does NOT represent the language {0, 01}?",
   "opts": [
    {
     "ar": "{0} ^ {01}",
     "en": "{0} ^ {01}",
     "ok": true,
     "why": "الرمز ^ لا يعبر عن اتحاد المجموعات؛ بل يُستخدم للتقاطع أو القوة، وتقاطع المجموعتين {0} ∩ {01} يعطي المجموعة الفارغة ∅ وليس {0, 01}."
    },
    {
     "ar": "0 + 01",
     "en": "0 + 01",
     "ok": false,
     "why": "التعبير النمطي 0 + 01 يمثل الاختيار (الاتحاد) بين السلسلتين 0 و 01، وهو تمثيل صحيح للغة {0, 01}."
    },
    {
     "ar": "{0} ∪ {01}",
     "en": "{0} ∪ {01}",
     "ok": false,
     "why": "اتحاد المجموعتين {0} ∪ {01} يدمج عناصرهما معاً لينتج تماماً المجموعة {0, 01}."
    },
    {
     "ar": "{0} ∪ {0}{1}",
     "en": "{0} ∪ {0}{1}",
     "ok": false,
     "why": "دمج {0}{1} يعطي {01}، واتحادها مع {0} يعطي {0, 01}، وهو تمثيل رياضي صحيح."
    }
   ],
   "ref": "L1-S025",
   "tip": "انتبه للرموز: الرمز '+' في التعابير النمطية و '∪' في المجموعات كلاهما يمثلان الاتحاد (Union)."
  },
  {
   "n": 10,
   "type": "mcq",
   "q_ar": "تشير عملية الربط والتسلسل (Concatenation) على السلاسل واللغات إلى أي من الرموز / العمليات التالية:",
   "q_en": "Concatenation operation refers to which symbol / operation notation:",
   "opts": [
    {
     "ar": "النقطة (Dot / •) أو التجاور المباشر",
     "en": "Dot",
     "ok": true,
     "why": "تُكتب عملية الربط بوضع نقطة بين السلاسل u • v أو اللغات L₁ • L₂ أو بمجرد تجاورها المباشر uv."
    },
    {
     "ar": "الاتحاد (Union / ∪)",
     "en": "Union",
     "ok": false,
     "why": "الاتحاد (∪ أو +) يمثل الاختيار والبدائل (OR) بين المجموعات وليس ربط وتسلسل العناصر."
    },
    {
     "ar": "نجمة كلين (Kleene Star / *)",
     "en": "Kleene Star",
     "ok": false,
     "why": "نجمة كلين تمثل الإغلاق التكراري للسلسلة أو اللغة من 0 إلى ما لا نهاية."
    },
    {
     "ar": "التقاطع (Intersection / ∩)",
     "en": "Intersection",
     "ok": false,
     "why": "التقاطع يمثل العناصر المشتركة بين لغتين فقط."
    }
   ],
   "ref": "L1-S020",
   "tip": "في اللغات والتعبيرات النمطية، يُحذف رمز النقطة غالباً للاختصار ويُكتفى بالتجاور: L₁L₂ تعني تماماً L₁ • L₂."
  },
  {
   "n": 11,
   "type": "mcq",
   "q_ar": "أي العبارات التالية صحيحة؟ العبارة 1: ε تمثل سلسلة بطول 0. العبارة 2: ∅ تمثل اللغة الخالية التي لا تحتوي على أي سلسلة.",
   "q_en": "Which of the following is correct? Statement 1: ε represents a string of length 0. Statement 2: ∅ represents the empty language that contains no strings.",
   "opts": [
    {
     "ar": "العبارتان 1 و 2 صحيحتان تماماً",
     "en": "Both Statement 1 and 2 are correct",
     "ok": true,
     "why": "ε هي سلسلة بطول صفر (|ε|=0)، بينما ∅ هي مجموعة خالية تماماً لا تحوي عناصر (|∅|=0 كلغة)، واللغة {ε} تحتوي على عنصر واحد هو السلسلة الفارغة (|{ε}|=1)."
    },
    {
     "ar": "العبارة 1 خاطئة والعبارة 2 صحيحة",
     "en": "Statement 1 is false but Statement 2 is true",
     "ok": false,
     "why": "العبارة 1 صحيحة تماماً لأن تعريف السلسلة الفارغة هو السلسلة ذات الطول صفر."
    },
    {
     "ar": "العبارة 1 صحيحة والعبارة 2 خاطئة",
     "en": "Statement 1 is true but Statement 2 is false",
     "ok": false,
     "why": "العبارة 2 صحيحة تماماً لأن ∅ هي لغة لا تحوي أي سلسلة على الإطلاق."
    },
    {
     "ar": "لا يوجد فرق بينهما، ε و ∅ ترميزان لنفس المفهوم",
     "en": "No difference, ε and ∅ are the same",
     "ok": false,
     "why": "هذا فخ شائع وخطير: ε سلسلة (String) بينما ∅ لغة ومجموعة خالية (Set/Language)؛ إذن {ε} ≠ ∅."
    }
   ],
   "ref": "L1-S021",
   "tip": "المقارنة الذهبية للامتحان: عدد عناصر اللغة ∅ هو 0، بينما عدد عناصر اللغة {ε} هو 1 (تحتوي على السلسلة الفارغة). إذن {ε} ≠ ∅."
  },
  {
   "n": 12,
   "type": "tf",
   "q_ar": "صح أم خطأ: السلسلة الفارغة ε لا تظهر كرمز إدخال فعلي مكتوب على شريط الإدخال (Input Tape) للآلة المنتهية.",
   "q_en": "State True or False: The empty string ε does not appear as an actual input symbol on the input tape.",
   "opts": [
    {
     "ar": "صح (True)",
     "en": "True",
     "ok": true,
     "why": "ε تمثل غياب الرمز أو الحركة التلقائية دون قراءة أي رمز من شريط الإدخال، وشريط الإدخال يحتوي فقط على رموز الأبجدية الفعلية Σ."
    },
    {
     "ar": "خطأ (False)",
     "en": "False",
     "ok": false,
     "why": "العبارة صحيحة؛ فـ ε ليست رمزاً مطبوعاً في خانات الشريط، بل هي تمثيل نظري لعدم استهلاك أي رمز."
    }
   ],
   "ref": "L1-S016",
   "tip": "في الأوتوماتون غير الحتمي (NFA)، الانتقال بـ ε يعني الانتقال التلقائي بين حالتين دون استهلاك أو قراءة أي رمز من شريط الإدخال."
  },
  {
   "n": 13,
   "type": "mcq",
   "q_ar": "أي من النماذج التالية لا يُعد نموذجاً حوسبياً رسمياً (Formal Model of Computation) في نظرية الحوسبة التقليدية؟",
   "q_en": "Which of the following is NOT a formal model of computation in TOC?",
   "opts": [
    {
     "ar": "الشبكات العصبية الاصطناعية (Neural Networks)",
     "en": "Neural Networks",
     "ok": true,
     "why": "الشبكات العصبية نموذج في الذكاء الاصطناعي والتعلم الآلي وليست من النماذج الحوسبية الشكلية الكلاسيكية لنظرية الأوتوماتا (مثل DFA, PDA, Turing Machine)."
    },
    {
     "ar": "الآلة المنتهية الحتمية (Deterministic Finite Automaton - DFA)",
     "en": "Deterministic Finite Automaton",
     "ok": false,
     "why": "الـ DFA هو النموذج الأساسي للغات المنتظمة في هرم تشومسكي."
    },
    {
     "ar": "أوتوماتون المكدس (Pushdown Automaton - PDA)",
     "en": "Pushdown Automaton",
     "ok": false,
     "why": "الـ PDA هو النموذج الحوسبي الرسمي المعترف به للغات الحرة من السياق (CFL)."
    },
    {
     "ar": "آلة تورنغ (Turing Machine)",
     "en": "Turing Machine",
     "ok": false,
     "why": "آلة تورنغ هي النموذج الرياضي الشامل والأقوى في نظرية الحوسبة."
    }
   ],
   "ref": "L1-S009",
   "tip": "النماذج الحوسبية الأساسية في نظرية الحوسبة هي بالترتيب التصاعدي للقوة: Finite Automata (FA) -> Pushdown Automata (PDA) -> Linear Bounded Automata (LBA) -> Turing Machines (TM)."
  },
  {
   "n": 14,
   "type": "mcq",
   "q_ar": "في الأوتوماتون المنتهي الحتمي (DFA)، كم عدد الانتقالات التي يجب أن تخرج من كل حالة لرمز دخل محدد؟",
   "q_en": "For a Deterministic Finite Automaton (DFA), how many transitions must exist from a single state for a given input symbol?",
   "opts": [
    {
     "ar": "انتقال واحد بالضبط (Exactly 1)",
     "en": "Exactly one transition",
     "ok": true,
     "why": "خاصية الحتمية (Deterministic) تقتضي وجود انتقال واحد وحيد ومحدد لكل رمز من الأبجدية من كل حالة (دالة كاملة δ: Q × Σ → Q)."
    },
    {
     "ar": "صفر أو أكثر من انتقال",
     "en": "Zero or more transitions",
     "ok": false,
     "why": "هذه خاصية الأوتوماتون غير الحتمي (NFA) وليس الـ DFA."
    },
    {
     "ar": "انتقال واحد على الأكثر (0 أو 1)",
     "en": "At most one transition (0 or 1)",
     "ok": false,
     "why": "في الـ DFA القياسي المعرّف رياضياً، دالة الانتقال كاملة ويجب أن يكون هناك انتقال لكل رمز، فلا يمكن أن يكون صفراً."
    },
    {
     "ar": "لا توجد أي قيود على عدد الانتقالات",
     "en": "No restriction on the number of transitions",
     "ok": false,
     "why": "الـ DFA محكوم بقاعدة حتمية صارمة تحدد انتقالاً واحداً بالضبط لكل رمز."
    }
   ],
   "ref": "L3-S004",
   "tip": "كلمة Deterministic تعني أن المسار محدد تماماً وبدون أي غموض: لكل زوج (حالة، رمز) يوجد مخرج وحيد دقيق."
  },
  {
   "n": 15,
   "type": "mcq",
   "q_ar": "يقبل الأوتوماتون المنتهي غير الحتمي (NFA) سلسلة الدخل إذا:",
   "q_en": "A Non-Deterministic Finite Automaton (NFA) accepts an input string if:",
   "opts": [
    {
     "ar": "انتهى مسار حسابي واحد على الأقل في حالة قبول (Final State)",
     "en": "At least one possible computation path ends in an accepting state",
     "ok": true,
     "why": "معيار القبول في الـ NFA هو وجود مسار ناجح واحد على الأقل يصل إلى حالة نهائية تنتمي إلى F بعد قراءة السلسلة كاملة."
    },
    {
     "ar": "انتهت جميع المسارات الحسابية الممكنة في حالات قبول",
     "en": "All possible computation paths end in accepting states",
     "ok": false,
     "why": "لا يشترط قبول جميع المسارات في NFA، بل يكفي مسار واحد ناجح."
    },
    {
     "ar": "انتهى المسار الأقصر فقط في حالة قبول",
     "en": "Only the shortest path ends in an accepting state",
     "ok": false,
     "why": "طول المسار ليس معياراً للقبول، بل الوصول لحالة قبول عبر أي مسار صالح."
    },
    {
     "ar": "لم توجد أي تفرعات أو انتقالات إبسلون (ε)",
     "en": "There are no branches or ε-transitions",
     "ok": false,
     "why": "الـ NFA يمكنه احتواء تفرعات وانتقالات ε وقبول السلسلة بشكل طبيعي."
    }
   ],
   "ref": "L2-S013",
   "tip": "في الـ NFA، التخمين المثالي (Non-determinism) يعني أن السلسلة تُقبل إذا وجد مسار واحد على الأقل ينتهي في حالة نهائية F."
  },
  {
   "n": 16,
   "type": "mcq",
   "q_ar": "ما هي 'حالة الفخ' (Trap / Dead State) في الـ DFA؟",
   "q_en": "What is a 'trap state' (or dead state) in a DFA?",
   "opts": [
    {
     "ar": "حالة غير نهائية تعود جميع الانتقالات الخارجة منها إلى نفسها",
     "en": "A non-accepting state where all outgoing transitions loop back to itself",
     "ok": true,
     "why": "بمجرد دخول حالة الفخ، لا يمكن للآلة الخروج منها وتعود كل الرموز لنفس الحالة، وهي حالة غير نهائية تؤدي دائماً إلى الرفض (Reject)."
    },
    {
     "ar": "حالة قبول نهائية لا يمكن الخروج منها",
     "en": "An accepting state from which the machine cannot leave",
     "ok": false,
     "why": "حالة الفخ هي دائماً حالة رفض (Non-final) وليست حالة قبول."
    },
    {
     "ar": "حالة لا تحتوي على أي انتقالات خارجة",
     "en": "A state with no outgoing transitions",
     "ok": false,
     "why": "في الـ DFA يجب أن يكون لكل حالة انتقالات لجميع الرموز، وفي حالة الفخ تدور الانتقالات حول نفسها (Self-loops)."
    },
    {
     "ar": "الحالة الابتدائية للآلة عندما تفشل في قراءة الرمز الأول",
     "en": "The start state when it fails on the first symbol",
     "ok": false,
     "why": "حالة الفخ هي حالة مخصصة لاحتجاز السلاسل المرفوضة وليست بالضرورة الحالة الابتدائية."
    }
   ],
   "ref": "L3-S019",
   "tip": "حالة الفخ (Dead State) تجعل الـ DFA كاملاً؛ تُوجّه إليها كل السلاسل التي أصبحت يستحيل أن تُقبل مهما قرأت الآلة بعدها."
  },
  {
   "n": 17,
   "type": "tf",
   "q_ar": "يمكن تحويل أي أوتوماتون منتهي غير حتمي (NFA) إلى أوتوماتون منتهي حتمي (DFA) مكافئ يتعرف على نفس اللغة تماماً.",
   "q_en": "Every Non-Deterministic Finite Automaton (NFA) can be converted into an equivalent Deterministic Finite Automaton (DFA) that recognizes the exact same language.",
   "opts": [
    {
     "ar": "صح (True)",
     "en": "True",
     "ok": true,
     "why": "صحيح، الـ NFA والـ DFA متكافئان في القدرة اللغوية، ويمكن التحويل باستخدام خوارزمية بناء المجموعات الجزئية (Subset Construction)."
    },
    {
     "ar": "خطأ (False)",
     "en": "False",
     "ok": false,
     "why": "خطأ، لأن اللغات التي تقبلها NFA هي اللغات المنتظمة نفسها التي تقبلها DFA بدون أي زيادة في القوة التعبيرية."
    }
   ],
   "ref": "L2-S013",
   "tip": "الـ DFA والـ NFA متكافئان تماماً في القوة الحسابية؛ أي لغة يقبلها أحدهما يقبلها الآخر."
  },
  {
   "n": 18,
   "type": "mcq",
   "q_ar": "في خوارزمية بناء المجموعات الجزئية (Subset Construction)، تمثل كل حالة في الـ DFA الناتج:",
   "q_en": "In the subset construction algorithm, a state in the resulting DFA corresponds to:",
   "opts": [
    {
     "ar": "مجموعة جزئية من حالات الـ NFA الأصلية",
     "en": "A set / subset of states from the original NFA",
     "ok": true,
     "why": "تقوم الخوارزمية بتمثيل جميع الحالات التي يمكن أن يتواجد فيها الـ NFA في لحظة معينة كحالة واحدة مدمجة في الـ DFA."
    },
    {
     "ar": "حالة مفردة فقط من حالات الـ NFA",
     "en": "A single state only from the NFA",
     "ok": false,
     "why": "حالة الـ DFA تمثل مجموعة من حالات NFA (مثل {q0, q1}) وليس بالضرورة حالة واحدة."
    },
    {
     "ar": "رمز دخل واحد من الأبجدية Σ",
     "en": "A single input symbol from Σ",
     "ok": false,
     "why": "الحالات تمثل مجموعات من الحالات وليست رموز الأبجدية."
    },
    {
     "ar": "انتقال إبسلون (ε-transition) من الآلة",
     "en": "An ε-transition of the machine",
     "ok": false,
     "why": "الحالة في DFA الناتج تمثل مجموعة حالات NFA مأخوذة مع الإغلاق إبسلون (ε-closure)."
    }
   ],
   "ref": "L2-S013",
   "tip": "فكرة الـ Subset Construction هي محاكاة التوازي في NFA بتجميع الحالات الممكنة في حالة واحدة تسمى مجموعة جزئية (Subset)."
  },
  {
   "n": 19,
   "type": "mcq",
   "q_ar": "يُعرَّف الـ DFA رياضياً بالخماسي (Q, Σ, δ, q0, F). أيٌّ من المكونات التالية لا ينتمي إلى تعريف الـ DFA؟",
   "q_en": "A DFA is formally defined by the 5-tuple (Q, Σ, δ, q0, F). Which of the following is NOT part of a DFA?",
   "opts": [
    {
     "ar": "أبجدية المكدس (Γ - Stack alphabet)",
     "en": "Stack alphabet (Γ)",
     "ok": true,
     "why": "أبجدية المكدس Γ خاصة بأوتوماتون المكدس (Pushdown Automaton - PDA) وليست جزءاً من الأوتوماتون المنتهي (DFA)."
    },
    {
     "ar": "مجموعة الحالات المنتهية (Q)",
     "en": "Finite set of states (Q)",
     "ok": false,
     "why": "Q هي مكون أساسي يمثل مجموعة حالات الـ DFA."
    },
    {
     "ar": "دالة الانتقال (δ)",
     "en": "Transition function (δ)",
     "ok": false,
     "why": "δ هي دالة الانتقال الأساسية في تعريف الـ DFA."
    },
    {
     "ar": "مجموعة حالات القبول (F)",
     "en": "Set of accept states (F)",
     "ok": false,
     "why": "F هي مجموعة حالات القبول أو الحالات النهائية في الـ DFA."
    }
   ],
   "ref": "L3-S004",
   "tip": "خماسي الـ DFA يتضمن فقط: Q (الحالات)، Σ (الأبجدية)، δ (الانتقالات)، q0 (البداية)، F (القبول). لا وجود لمكدس أو ذاكرة إضافية."
  },
  {
   "n": 20,
   "type": "mcq",
   "q_ar": "في الـ NFA، يعني الانتقال δ(q, ε) = p أن الآلة:",
   "q_en": "In an NFA, a transition like δ(q, ε) = p means:",
   "opts": [
    {
     "ar": "تنتقل من الحالة q إلى الحالة p تلقائياً دون استهلاك أي رمز دخل",
     "en": "The machine moves from state q to state p without consuming any input symbol",
     "ok": true,
     "why": "انتقال إبسلون (ε-transition) هو انتقال حر وفوري يتم تلقائياً دون استهلاك أو قراءة أي رمز من شريط الدخل."
    },
    {
     "ar": "تنتقل فقط عند قراءة رمز الفراغ ' ' من شريط الدخل",
     "en": "Moves only when reading a space character ' ' from input",
     "ok": false,
     "why": "إبسلون ε هي السلسلة الفارغة (طولها 0) وليست رمز مسافة."
    },
    {
     "ar": "تحذف الرمز السابق وتعود للحالة الابتدائية",
     "en": "Deletes the previous symbol and resets to start state",
     "ok": false,
     "why": "الانتقال لا يعدل أو يحذف رموز الدخل."
    },
    {
     "ar": "تتوقف عن العمل فوراً وترفض السلسلة",
     "en": "Halts immediately and rejects the string",
     "ok": false,
     "why": "الانتقال بإبسلون يسمح للآلة بمتابعة المعالجة في الحالة p دون توقف."
    }
   ],
   "ref": "L2-S013",
   "tip": "انتقال ε يسمى الانتقال التلقائي أو العفوي (Spontaneous / Free move) لأنه لا يستهلك أي حرف من الدخل."
  },
  {
   "n": 21,
   "type": "mcq",
   "q_ar": "في المخطط البياني للانتقالات للأوتوماتون المنتهي، كيف يتم تمثيل الحالة الابتدائية (Initial State)؟",
   "q_en": "The initial (start) state of an automaton is represented graphically by:",
   "opts": [
    {
     "ar": "سهم داخل يشير إليها من الفضاء (بدون حالة مصدر)",
     "en": "An incoming arrow pointing to the state from nowhere (Start arrow)",
     "ok": true,
     "why": "تُميَّز الحالة الابتدائية بسهم يشير إليها من العدم (قد يُكتب عليه Start) للدلالة على نقطة بداية المعالجة."
    },
    {
     "ar": "دائرة مزدوجة متحدة المركز",
     "en": "A double concentric circle",
     "ok": false,
     "why": "الدائرة المزدوجة تمثل حالة القبول (Final/Accept State) وليس الحالة الابتدائية."
    },
    {
     "ar": "مربع أو مستطيل مظلل",
     "en": "A shaded square or rectangle",
     "ok": false,
     "why": "تُرسم جميع الحالات كدوائر وليست مربعات."
    },
    {
     "ar": "سهم يخرج منها ولا يدخلها أي سهم",
     "en": "An outgoing arrow with no incoming arrows",
     "ok": false,
     "why": "الحالة الابتدائية قد يدخلها انتقالات من حالات أخرى، والمميز لها هو سهم البداية الخارجي."
    }
   ],
   "ref": "L3-S035",
   "tip": "الحالة الابتدائية q0 تبدأ بسهم قادم من الخارج (Start Arrow)، بينما حالات القبول F تُرسم بدائرة مزدوجة (Double Circle)."
  },
  {
   "n": 22,
   "type": "mcq",
   "q_ar": "في المخطط البياني للانتقالات، تُمثَّل حالة القبول (الحالة النهائية) بيانياً بـ:",
   "q_en": "A final (accepting) state in a finite automaton is represented graphically by:",
   "opts": [
    {
     "ar": "دائرة مزدوجة متحدة المركز (Double circle)",
     "en": "A double concentric circle",
     "ok": true,
     "why": "الاصطلاح القياسي في نظرية الأوتوماتا لتمثيل حالات القبول (Final/Accept States) هو الدائرة المزدوجة."
    },
    {
     "ar": "دائرة مفردة مع سهم خارجي",
     "en": "A single circle with an incoming start arrow",
     "ok": false,
     "why": "هذا تمثيل الحالة الابتدائية وليس حالة القبول."
    },
    {
     "ar": "دائرة يتفرع منها سهمان فقط",
     "en": "A circle with exactly two outgoing arrows",
     "ok": false,
     "why": "عدد الأسهم يعتمد على حجم الأبجدية وليس نوع الحالة."
    },
    {
     "ar": "رمز النجمة * داخل الدائرة",
     "en": "A star symbol * inside the circle",
     "ok": false,
     "why": "التمثيل الرسومي القياسي هو الدائرة المزدوجة."
    }
   ],
   "ref": "L3-S036",
   "tip": "الدائرة المفردة = حالة عادية، الدائرة المزدوجة = حالة قبول (Accept State)، السهم القادم من الخارج = حالة البداية (Start State)."
  },
  {
   "n": 23,
   "type": "mcq",
   "q_ar": "إذا كان لدى NFA عدد k من الحالات، فما هو أقصى عدد ممكن من الحالات في الـ DFA المكافئ الناتج عن خوارزمية بناء المجموعات الجزئية؟",
   "q_en": "If an NFA has k states, the equivalent DFA produced by subset construction can have at most:",
   "opts": [
    {
     "ar": "2^k حالة (مجموعة القوى 2^Q)",
     "en": "2^k states (power set)",
     "ok": true,
     "why": "حالات الـ DFA تمثل مجموعات جزئية من حالات NFA، وعدد جميع المجموعات الجزئية الممكنة لمجموعة من k عناصر هو 2^k."
    },
    {
     "ar": "k^2 حالة",
     "en": "k^2 states",
     "ok": false,
     "why": "عدد المجموعات الجزئية ينمو بشكل أسي 2^k وليس تربيعياً k^2."
    },
    {
     "ar": "k + 1 حالة",
     "en": "k + 1 states",
     "ok": false,
     "why": "هذا نمو خطي غير صحيح للتحويل في الحالة الأسوأ."
    },
    {
     "ar": "2k حالة",
     "en": "2k states",
     "ok": false,
     "why": "الحد الأقصى هو مجموعة القوى بالكامل أي 2^k."
    }
   ],
   "ref": "L2-S013",
   "tip": "بما أن حالات الـ DFA هي عناصر في مجموعة القوى P(Q)، فإن الحد الأقصى النظري لعدد الحالات هو 2^k (State Explosion في أسوأ الحالات)."
  },
  {
   "n": 24,
   "type": "mcq",
   "q_ar": "تُعرَّف اللغة الصورية بأنها 'منتظمة' (Regular Language) إذا وفقط إذا كان بالإمكان التعرف عليها بواسطة:",
   "q_en": "A formal language is regular if and only if it is accepted by a:",
   "opts": [
    {
     "ar": "أوتوماتون منتهي (Finite Automaton: DFA / NFA)",
     "en": "Finite Automaton (DFA / NFA)",
     "ok": true,
     "why": "اللغة المنتظمة هي لغة يُقبل كل نصوصها بواسطة أوتوماتون منتهي الحالة (أو يُعبَّر عنها بتعبير منتظم Regex)."
    },
    {
     "ar": "أوتوماتون المكدس (Pushdown Automaton) فقط",
     "en": "Pushdown Automaton only",
     "ok": false,
     "why": "أوتوماتون المكدس يتعرف على اللغات الخالية من السياق (Context-Free Languages)."
    },
    {
     "ar": "آلة تورنغ (Turing Machine) ذات الشريط اللانهائي حصراً",
     "en": "Turing Machine exclusively",
     "ok": false,
     "why": "آلة تورنغ تتعرف على اللغات المعدودة عودياً (Recursively Enumerable)."
    },
    {
     "ar": "مترجم بلغة البرمجة C فقط",
     "en": "A C-language compiler only",
     "ok": false,
     "why": "التعريف رياضي مستقل عن لغات البرمجة التنفيذية."
    }
   ],
   "ref": "L2-S006",
   "tip": "الفئة الأساسية الأولى في هرم تشومسكي هي اللغات المنتظمة (Regular Languages)، وآلتها المميزة هي Finite Automaton."
  },
  {
   "n": 25,
   "type": "mcq",
   "q_ar": "تُعرَّف دالة الانتقال δ في الأوتوماتون المنتهي غير الحتمي (NFA) رسمياً بأنها:",
   "q_en": "The transition function δ for an NFA is formally defined as:",
   "opts": [
    {
     "ar": "δ: Q × (Σ ∪ {ε}) → P(Q)",
     "en": "δ: Q × (Σ ∪ {ε}) → P(Q) / 2^Q",
     "ok": true,
     "why": "تستقبل الحالة والرمز (أو ε) وتُرجع مجموعة جزئية من الحالات P(Q) (أي قد تكون ∅ أو حالة واحدة أو عدة حالات)."
    },
    {
     "ar": "δ: Q × Σ → Q",
     "en": "δ: Q × Σ → Q",
     "ok": false,
     "why": "هذا تعريف دالة الانتقال في DFA الحتمي، حيث النتيجة حالة واحدة ولا تقبل ε."
    },
    {
     "ar": "δ: Q × Q → Σ",
     "en": "δ: Q × Q → Σ",
     "ok": false,
     "why": "الدالة تربط الحالة والرمز بالحالات التالية، وليس العكس."
    },
    {
     "ar": "δ: Σ* → Q",
     "en": "δ: Σ* → Q",
     "ok": false,
     "why": "هذا ليس تمثيلاً لدالة الانتقال ذات الخطوة الواحدة."
    }
   ],
   "ref": "L2-S013",
   "tip": "في NFA الخرج هو مجموعة من الحالات P(Q) أو 2^Q، والمدخل قد يشمل إبسلون (Σ ∪ {ε})."
  },
  {
   "n": 26,
   "type": "tf",
   "q_ar": "كل أوتوماتون منتهي حتمي (DFA) يُعتبر أيضاً أوتوماتون منتهي غير حتمي (NFA).",
   "q_en": "Every Deterministic Finite Automaton (DFA) is also a Non-Deterministic Finite Automaton (NFA).",
   "opts": [
    {
     "ar": "صح (True)",
     "en": "True",
     "ok": true,
     "why": "صحيح، لأن الـ DFA هو حالة خاصة (Special Case) من الـ NFA تكون فيها درجة الاختيار 1 بالضبط وخالية من انتقالات ε."
    },
    {
     "ar": "خطأ (False)",
     "en": "False",
     "ok": false,
     "why": "خطأ، لأن فئة الـ DFA تقع بالكامل داخل فئة الـ NFA."
    }
   ],
   "ref": "L2-S011",
   "tip": "كل DFA هو NFA (حالة خاصة)، ولكن ليس كل NFA هو DFA."
  },
  {
   "n": 27,
   "type": "mcq",
   "q_ar": "في التعريف الخماسي الرسمي للأوتوماتون المنتهي FA = (Q, Σ, δ, q0, F)، تأمل العبارتين: (1) q0 ∈ Q، و (2) F ⊆ Q. أي الخيارات التالية صحيح؟",
   "q_en": "In the 5-tuple FA = (Q, Σ, δ, q0, F): Statement 1: q0 ∈ Q. Statement 2: F ⊆ Q (F is a subset of Q). Which is correct?",
   "opts": [
    {
     "ar": "كلا العبارتين صحيحتان (Both statements are true)",
     "en": "Both statements are true according to the formal definition",
     "ok": true,
     "why": "الحالة الابتدائية q0 يجب أن تكون عنصراً ينتمي لـ Q (q0 ∈ Q)، ومجموعة حالات القبول F يجب أن تكون مجموعة جزئية من Q (F ⊆ Q)."
    },
    {
     "ar": "العبارة (1) صحيحة والعبارة (2) خاطئة",
     "en": "Statement 1 is true, Statement 2 is false",
     "ok": false,
     "why": "العبارة (2) صحيحة أيضاً لأن F مجموعة جزئية من حالات الآلة Q."
    },
    {
     "ar": "العبارة (1) خاطئة والعبارة (2) صحيحة",
     "en": "Statement 1 is false, Statement 2 is true",
     "ok": false,
     "why": "العبارة (1) صحيحة أيضاً لأن q0 عنصر في Q."
    },
    {
     "ar": "كلا العبارتين خاطئتان",
     "en": "Both statements are false",
     "ok": false,
     "why": "كلا العبارتين هما نص التعريف الرياضي الدقيق لـ FA."
    }
   ],
   "ref": "L3-S004",
   "tip": "انتبه للفرق الرمزي: q0 عنصر وحيد فينتمي (∈)، بينما F مجموعة حالات فتكون مجموعة جزئية (⊆)."
  },
  {
   "n": 28,
   "type": "mcq",
   "q_ar": "إذا كانت الأبجدية Σ = {a, b, c}، فما هو العدد الدقيق للانتقالات التي يجب أن تخرج من كل حالة في الـ DFA المكتمل؟",
   "q_en": "If Σ = {a, b, c}, what is the exact number of transitions originating from each state in a complete DFA?",
   "opts": [
    {
     "ar": "3 انتقالات بالضبط (انتقال واحد لكل رمز)",
     "en": "3 transitions, exactly one for each symbol",
     "ok": true,
     "why": "في الـ DFA المكتمل، يجب أن يخرج من كل حالة انتقال واحد محدد لكل رمز في الأبجدية Σ (حجم الأبجدية |Σ| = 3)."
    },
    {
     "ar": "انتقال واحد فقط في المجمل",
     "en": "Only 1 transition in total",
     "ok": false,
     "why": "يجب وجود انتقال لكل رمز من الرموز الثلاثة a و b و c."
    },
    {
     "ar": "من 0 إلى 3 انتقالات حسب الحاجة",
     "en": "Between 0 and 3 transitions",
     "ok": false,
     "why": "في DFA الكامل لا يُسمح بعدم اكتمال الانتقالات (دالة كاملة وليست جزئية)."
    },
    {
     "ar": "6 انتقالات (انتقالان لكل رمز)",
     "en": "6 transitions (two for each symbol)",
     "ok": false,
     "why": "لا يمكن أن يخرج أكثر من انتقال واحد لنفس الرمز في DFA الحتمي."
    }
   ],
   "ref": "L3-S037",
   "tip": "في أي DFA كامل: عدد الأسهم الخارجة من كل حالة = عدد عناصر الأبجدية |Σ| دائماً."
  },
  {
   "n": 29,
   "type": "mcq",
   "q_ar": "دالة الانتقال δ في الأوتوماتون المنتهي الحتمي (DFA) تُعيّن (Map):",
   "q_en": "The transition function δ for a DFA maps:",
   "opts": [
    {
     "ar": "Q × Σ → Q",
     "en": "Q × Σ → Q",
     "ok": true,
     "why": "تأخذ الدالة زوجاً مكوّناً من (الحالة الحالية، رمز الدخل) وتنتج بدقة حالة تالية وحيدة تنتمي لـ Q."
    },
    {
     "ar": "Q × Σ → P(Q)",
     "en": "Q × Σ → P(Q)",
     "ok": false,
     "why": "هذا تعريف دالة الانتقال في NFA غير الحتمي وليس DFA."
    },
    {
     "ar": "Q × (Σ ∪ {ε}) → Q",
     "en": "Q × (Σ ∪ {ε}) → Q",
     "ok": false,
     "why": "الـ DFA لا يقبل انتقال إبسلون ε في دالة الانتقال."
    },
    {
     "ar": "Σ × Q → Σ",
     "en": "Σ × Q → Σ",
     "ok": false,
     "why": "المجال المقابل للدالة هو مجموعة الحالات Q وليس الأبجدية Σ."
    }
   ],
   "ref": "L3-S037",
   "tip": "δ(q, a) = p تعني: عندما تكون في الحالة q وتقرأ الرمز a، انتقل حتماً إلى الحالة p."
  },
  {
   "n": 30,
   "type": "mcq",
   "q_ar": "تُعرَّف دالة الانتقال الممتدة δ*(q, ya) استقرائياً، حيث y سلسلة و a رمز مفرد، بأنها تكافئ:",
   "q_en": "The extended transition function δ*(q, ya) where y is a string and a is a symbol is equivalent to:",
   "opts": [
    {
     "ar": "δ(δ*(q, y), a)",
     "en": "δ(δ*(q, y), a)",
     "ok": true,
     "why": "يتم أولاً تتبع معالجة السلسلة y بالدالة الممتدة δ*(q, y) للوصول إلى حالة وسيطة، ثم تطبيق دالة الخطوة الواحدة δ مع الرمز الأخير a."
    },
    {
     "ar": "δ*(δ(q, a), y)",
     "en": "δ*(δ(q, a), y)",
     "ok": false,
     "why": "الرمز a في نهاية السلسلة ya، فيجب معالجة البادئة y أولاً ثم الانتقال بالرمز a."
    },
    {
     "ar": "δ(q, y) + δ(q, a)",
     "en": "δ(q, y) + δ(q, a)",
     "ok": false,
     "why": "الدوال التركيبية تطبق بالتتابع وليس بالجمع الحسابي."
    },
    {
     "ar": "δ*(q, a) · y",
     "en": "δ*(q, a) · y",
     "ok": false,
     "why": "هذا التعبير غير متوافق رياضياً مع مجالات الدوال الانتقالية."
    }
   ],
   "ref": "L3-S041",
   "tip": "التعريف الاستقرائي لـ δ*: δ*(q, ε) = q، و δ*(q, ya) = δ(δ*(q, y), a)."
  },
  {
   "n": 31,
   "type": "mcq",
   "q_ar": "تُعرَّف اللغة L(M) المقبولة بواسطة الأوتوماتون المنتهي M رياضياً بأنها:",
   "q_en": "The language L(M) recognized by an automaton M is defined as:",
   "opts": [
    {
     "ar": "{ w ∈ Σ* | δ*(q0, w) ∈ F }",
     "en": "The set of all strings w such that δ*(q0, w) ∈ F",
     "ok": true,
     "why": "اللغة هي مجموعة كل السلاسل w المكونة من الأبجدية Σ* والتي تؤدي قراءتها من الحالة الابتدائية q0 إلى الاستقرار في إحدى حالات القبول F."
    },
    {
     "ar": "{ w ∈ Σ* | δ*(q0, w) ∉ F }",
     "en": "The set of all strings w such that δ*(q0, w) ∉ F",
     "ok": false,
     "why": "هذا يمثل لغة السلاسل المرفوضة (المتممة) وليس المقبولة."
    },
    {
     "ar": "{ w ∈ Σ* | δ(q0, w) = q0 }",
     "en": "The set of all strings w such that δ(q0, w) = q0",
     "ok": false,
     "why": "ليس شرطاً أن تعود السلسلة للحالة الابتدائية لتكون مقبولة، بل يجب أن تنتهي في F."
    },
    {
     "ar": "{ w ∈ Q | w ∈ Σ }",
     "en": "The set of all states w such that w ∈ Σ",
     "ok": false,
     "why": "السلاسل تنتمي لـ Σ* بينما الحالات تنتمي لـ Q."
    }
   ],
   "ref": "L3-S018",
   "tip": "شرط قبول أي كلمة w هو ببساطة: مسار المعالجة يبدأ من q0 وينتهي في حالة قبول تنتمي لـ F."
  },
  {
   "n": 32,
   "type": "mcq",
   "q_ar": "عند تحويل NFA إلى DFA: العبارة 1: الحالة الابتدائية لـ DFA هي {q0} (أو ε-closure(q0)). العبارة 2: أي حالة في DFA تحتوي على الأقل على حالة قبول واحدة من NFA تصبح حالة قبول في DFA. أي الخيارات صحيح؟",
   "q_en": "In converting NFA to DFA: Statement 1: The initial state of DFA is {q0} (or ε-closure(q0)). Statement 2: Any DFA state containing at least one final state of the NFA becomes an accepting state. Which is correct?",
   "opts": [
    {
     "ar": "كلا العبارتين صحيحتان (Both statements are true)",
     "en": "Both are true",
     "ok": true,
     "why": "تبدأ DFA من إغلاق إبسلون للحالة الابتدائية، وتكون أي مجموعة حالات في DFA حالة قبول إذا اشتملت على أي حالة من F الخاصة بالـ NFA."
    },
    {
     "ar": "العبارة (1) صحيحة والعبارة (2) خاطئة",
     "en": "Statement 1 is true, Statement 2 is false",
     "ok": false,
     "why": "العبارة (2) صحيحة تماماً وتعتبر قاعدة تحديد حالات القبول في DFA الناتج."
    },
    {
     "ar": "العبارة (1) خاطئة والعبارة (2) صحيحة",
     "en": "Statement 1 is false, Statement 2 is true",
     "ok": false,
     "why": "العبارة (1) صحيحة وهي قاعدة تحديد الحالة الابتدائية لـ DFA."
    },
    {
     "ar": "كلا العبارتين خاطئتان",
     "en": "Both statements are false",
     "ok": false,
     "why": "كلا القاعدتين هما القواعد الأساسية لخوارزمية Subset Construction."
    }
   ],
   "ref": "L2-S013",
   "tip": "في DFA الناتج: F_DFA = { S ⊆ Q | S ∩ F_NFA ≠ ∅ } (يكفي وجود حالة قبول واحدة داخل المجموعة لتصبح الحالة مقبولة)."
  },
  {
   "n": 33,
   "type": "mcq",
   "q_ar": "ما الذي يجعل التعريف الخماسي ({q0, q1, q2}, {0,1}, δ, q3, {q3}) غير صالح رياضياً؟",
   "q_en": "What makes the definition ({q0, q1, q2}, {0,1}, δ, q3, {q3}) mathematically invalid?",
   "opts": [
    {
     "ar": "الحالة الابتدائية q3 ومجموعة القبول {q3} لا تنتميان إلى مجموعة الحالات Q = {q0, q1, q2}",
     "en": "The initial state q3 and final state {q3} do not belong to the state set Q = {q0, q1, q2}",
     "ok": true,
     "why": "يشترط التعريف الرياضي أن تكون الحالة الابتدائية q0 ∈ Q وحالات القبول F ⊆ Q، وهنا q3 ليست موجودة في Q = {q0, q1, q2}."
    },
    {
     "ar": "الأبجدية {0, 1} لا يمكن أن تحتوي على أرقام",
     "en": "The alphabet {0, 1} cannot contain digits",
     "ok": false,
     "why": "الأبجدية يمكن أن تحتوي على أي رموز منتهية بما فيها الأرقام الثنائية {0, 1}."
    },
    {
     "ar": "عدد الحالات 3 حالات وهو عدد غير مسموح به في DFA",
     "en": "The state count of 3 is invalid for DFA",
     "ok": false,
     "why": "يمكن للـ DFA أن يمتلك أي عدد منتهٍ من الحالات."
    },
    {
     "ar": "لا يمكن أن تكون الحالة الابتدائية وحالة القبول متطابقتين",
     "en": "Initial state and final state cannot be identical",
     "ok": false,
     "why": "يجوز تماماً أن تكون الحالة الابتدائية حالة قبول (لقبول السلسلة الفارغة ε)."
    }
   ],
   "ref": "L3-S004",
   "tip": "شرط الاتساق الرياضي: كل من الحالة الابتدائية q0 وحالات القبول F يجب أن تكون مأخوذة حصراً من مجموعة الحالات Q المعرفة."
  },
  {
   "n": 34,
   "type": "mcq",
   "q_ar": "ما الذي يعبر عنه التعبير النمطي (0+1)*؟",
   "q_en": "The regular expression (0+1)* denotes:",
   "opts": [
    {
     "ar": "مجموعة كل السلاسل الثنائية الممكنة من أي طول بما فيها السلسلة الفارغة (Σ*)",
     "en": "The set of all possible strings of 0s and 1s",
     "ok": true,
     "why": "التعبير (0+1) يعني اختيار '0' أو '1'، ونجمة كلين (*) تعني التكرار صفراً أو أكثر من المرات، مما يولد كل السلاسل الممكنة على الأبجدية {0, 1} بما فيها السلسلة الفارغة ε."
    },
    {
     "ar": "مجموعة السلاسل الثنائية ذات الطول الزوجي فقط",
     "en": "The set of all strings of 0s and 1s with even length",
     "ok": false,
     "why": "السلاسل ذات الطول الزوجي يُعبر عنها بـ ((0+1)(0+1))* وليس (0+1)*."
    },
    {
     "ar": "مجموعة السلاسل التي تحتوي على أصفار فقط",
     "en": "The set of all strings containing only 0s",
     "ok": false,
     "why": "السلاسل المكونة من أصفار فقط يُعبر عنها بـ 0*."
    },
    {
     "ar": "مجموعة السلاسل التي تبدأ بالرمز 0",
     "en": "The set of all strings starting with 0",
     "ok": false,
     "why": "السلاسل التي تبدأ بـ 0 يُعبر عنها بـ 0(0+1)*."
    }
   ],
   "ref": "L4-S007",
   "tip": "التعبير (0+1)* هو المعادل الرياضي لـ Σ* على الأبجدية الثنائية {0, 1}؛ فهو يمثل الجوكر الشامل الذي يولد أي سلسلة بأي طول."
  },
  {
   "n": 35,
   "type": "mcq",
   "q_ar": "أي تعبير نمطي يصف لغة جميع السلاسل الثنائية التي تنتهي بـ '00'؟",
   "q_en": "Which regular expression describes the language of all binary strings ending with '00'?",
   "opts": [
    {
     "ar": "(0+1)*00",
     "en": "(0+1)*00",
     "ok": true,
     "why": "(0+1)* تسمح بأي بادئة عشوائية من الأصفار والآحاد (أو السلسلة الفارغة ε)، متبوعة إجبارياً في النهاية بالسلسلة الثابتة '00'."
    },
    {
     "ar": "00(0+1)*",
     "en": "00(0+1)*",
     "ok": false,
     "why": "هذا التعبير يصف السلاسل التي تبدأ بـ '00' وليس التي تنتهي بها."
    },
    {
     "ar": "(00)*",
     "en": "(00)*",
     "ok": false,
     "why": "هذا التعبير يولد سلاسل تتكون من تكرار '00' فقط مثل ε, 00, 0000 ولا يسمح بوجود الرقم 1."
    },
    {
     "ar": "(0+1)00",
     "en": "(0+1)00",
     "ok": false,
     "why": "هذا يولد سلسلتين فقط بطول 3: إما 000 أو 100."
    }
   ],
   "ref": "L4-S007",
   "tip": "قاعدة تصميم Regex: 'تبدأ بـ X' = X(Σ)*، 'تنتهي بـ X' = (Σ)*X، 'تحتوي على X' = (Σ)*X(Σ)*."
  },
  {
   "n": 36,
   "type": "mcq",
   "q_ar": "ما هي اللغة التي يُعرّفها التعبير النمطي a*b*؟",
   "q_en": "What language does the regular expression a*b* define?",
   "opts": [
    {
     "ar": "أي عدد من الرمز 'a' متبوعاً بأي عدد من الرمز 'b' (الترتيب ثابت)",
     "en": "Any number of 'a's followed by any number of 'b's",
     "ok": true,
     "why": "a* تعني صفراً أو أكثر من a، متبوعة بـ b* التي تعني صفراً أو أكثر من b، وتمنع تماماً ظهور أي 'a' بعد أي 'b'."
    },
    {
     "ar": "أي سلسلة تحتوي على أعداد متساوية من a و b",
     "en": "Equal number of 'a's and 'b's",
     "ok": false,
     "why": "اللغة ذات الأعداد المتساوية {aⁿbⁿ | n ≥ 0} لغة غير منتظمة ولا يمكن تمثيلها بتعبير نمطي بسيط مثل a*b*."
    },
    {
     "ar": "سلاسل تتناوب فيها الحروف بالتتابع ababab",
     "en": "Alternating 'a's and 'b's",
     "ok": false,
     "why": "التناوب يُعبر عنه بـ (ab)*."
    },
    {
     "ar": "أي ترتيب عشوائي لحروف a و b معاً",
     "en": "Any string of 'a's and 'b's",
     "ok": false,
     "why": "الخلط العشوائي يُعبر عنه بـ (a+b)*."
    }
   ],
   "ref": "L4-S007",
   "tip": "a*b* تسمح بـ ε، وتسمح بـ \"aaaa\" (بدون b) وتسمح بـ \"bb\" (بدون a)، لكن تمنع تماماً ظهور النمط الممنوع 'ba'."
  },
  {
   "n": 37,
   "type": "mcq",
   "q_ar": "التعبير النمطي للغة السلاسل الثنائية التي تحتوي على السلسلة الجزئية '01' هو:",
   "q_en": "The language of all binary strings containing the substring '01' is represented by:",
   "opts": [
    {
     "ar": "(0+1)*01(0+1)*",
     "en": "(0+1)*01(0+1)*",
     "ok": true,
     "why": "يسمح التعبير بأي بادئة عبر (0+1)*، ثم يشترط وجود الكتلة '01' متصلة، ثم يسمح بأي لاحقة عبر (0+1)*."
    },
    {
     "ar": "0*1*",
     "en": "0*1*",
     "ok": false,
     "why": "0*1* لا تسمح بظهور 0 بعد 1 (مثل 010)، بينما اللغة المطلوبة تسمح بذلك."
    },
    {
     "ar": "0(0+1)*1",
     "en": "0(0+1)*1",
     "ok": false,
     "why": "هذا التعبير يمثل السلاسل التي تبدأ بـ 0 وتنتهي بـ 1 حصراً."
    },
    {
     "ar": "(01)*",
     "en": "(01)*",
     "ok": false,
     "why": "هذا التعبير يولد فقط تكرارات النمط 01 مثل ε, 01, 0101 ولا يسمح بسلاسل مثل 00100."
    }
   ],
   "ref": "L4-S007",
   "tip": "لتمثيل 'تحتوي على السلسلة الجزئية w': نضع w بين جوكرين للأبجدية: Σ* w Σ*."
  },
  {
   "n": 38,
   "type": "mcq",
   "q_ar": "في التعبيرات النمطية، رمز التخيير أو البديل (a|b) يكافئ تماماً:",
   "q_en": "The regular expression (a|b) is equivalent to:",
   "opts": [
    {
     "ar": "a + b (عملية الاتحاد)",
     "en": "a+b",
     "ok": true,
     "why": "الرمز '|' في صياغة التعابير النمطية البرمجية هو المعادل الدقيق للرمز '+' أو '∪' المستخدم رياضياً في نظرية الحوسبة للتعبير عن الاتحاد (Union)."
    },
    {
     "ar": "ab (عملية الربط)",
     "en": "ab",
     "ok": false,
     "why": "الربط ab يعني التسلسل والتتالي للرموز معاً وليس التخيير بينهما."
    },
    {
     "ar": "a* (نجمة كلين)",
     "en": "a*",
     "ok": false,
     "why": "نجمة كلين تعني التكرار لـ a صفراً أو أكثر من المرات وليس الاختيار بين a و b."
    },
    {
     "ar": "b* (نجمة كلين)",
     "en": "b*",
     "ok": false,
     "why": "التعبير b* لا يشمل الرمز a إطلاقاً."
    }
   ],
   "ref": "L4-S002",
   "tip": "في مراجع نظرية الحوسبة، يُستخدم '+' للاتحاد، بينما في لغات البرمجة يُستخدم '|'. كلاهما يعني المنطق نفسه."
  },
  {
   "n": 39,
   "type": "mcq",
   "q_ar": "ما هي الأولوية (Precedence) الأعلى بين عمليات التعبيرات النمطية عند غياب الأقواس؟",
   "q_en": "The operation with the highest precedence in regular expressions is:",
   "opts": [
    {
     "ar": "الأقواس () إن وُجدت، ثم نجمة كلين (*)",
     "en": "Parentheses () / Kleene Star (*)",
     "ok": true,
     "why": "ترتيب الأسبقية القياسي هو: الأقواس () أولاً، ثم نجمة كلين (*)، ثم الربط (Concatenation •)، وأخيراً الاتحاد (+)."
    },
    {
     "ar": "الربط والتسلسل (Concatenation •)",
     "en": "Concatenation (dot)",
     "ok": false,
     "why": "الربط يلي نجمة كلين في الأسبقية (مثال: ab* تعني a(b*) وليس (ab)*)."
    },
    {
     "ar": "الاتحاد (+ / Union)",
     "en": "Union (+)",
     "ok": false,
     "why": "الاتحاد هو الأقل أسبقية بين العمليات الأساسية (مثال: a+bc تعني a+(bc))."
    },
    {
     "ar": "جميع العمليات متساوية في الأسبقية وتُنفذ من اليسار لليمين",
     "en": "All have equal precedence",
     "ok": false,
     "why": "توجد أسبقية محددة وصارمة لمنع الغموض وتوحيد تفسير السلاسل."
    }
   ],
   "ref": "L4-S002",
   "tip": "احفظ هرم الأسبقية: (*) ثم (•) ثم (+). لذا ab*+c تكافئ ((a • (b*)) + c)."
  },
  {
   "n": 40,
   "type": "mcq",
   "q_ar": "ما هو التعبير النمطي لجميع السلاسل فوق الأبجدية {a, b} التي تبدأ بـ 'ab' وتنتهي بـ 'bba'؟",
   "q_en": "Regular expression for all strings starts with ab and ends with bba is:",
   "opts": [
    {
     "ar": "ab(a+b)*bba",
     "en": "ab(a+b)*bba",
     "ok": true,
     "why": "يبدأ التعبير إجبارياً بالبادئة 'ab'، ويليه أي تتابع عشوائي من a و b عبر (a+b)*، ثم ينتهي إجبارياً باللاحقة 'bba'."
    },
    {
     "ar": "aba*b*bba",
     "en": "aba*b*bba",
     "ok": false,
     "why": "هذا الخيار يقيد الحشو الداخلي بحيث لا تظهر أي 'a' بعد 'b'، وهو قيد إضافي غير مطلوب."
    },
    {
     "ar": "ab(ab)*bba",
     "en": "ab(ab)*bba",
     "ok": false,
     "why": "هذا يقيد الحشو الداخلي بتكرارات 'ab' فقط ويستبعد سلاسل صالحة مثل abbba أو abaaabba."
    },
    {
     "ar": "ababbba",
     "en": "ababbba",
     "ok": false,
     "why": "هذا يمثل سلسلة واحدة محددة فقط بطول 7 ولا يغطي بقية السلاسل."
    }
   ],
   "ref": "L4-S008",
   "tip": "عند تحديد بادئة محددة u ولاحقة محددة v مع حرية في الوسط، تكون الصيغة العامة دائماً: u(a+b)*v."
  },
  {
   "n": 41,
   "type": "mcq",
   "q_ar": "اللغة L = {x ∈ {0,1}* | طول السلسلة x لا يتجاوز 4} يُعبَّر عنها بالتعبير النمطي:",
   "q_en": "According to the given language, which among the following expressions does it correspond to? Language L = {x ∈ {0,1} | x is of length 4 or less}",
   "opts": [
    {
     "ar": "(0+1+ε)⁴",
     "en": "(0+1+ε)4",
     "ok": true,
     "why": "التعبير (0+1+ε) يتيح اختيار إما '0' أو '1' أو لا شيء (ε). تكرار هذا الاختيار 4 مرات بالربط يولد كل السلاسل ذات الطول 0 و1 و2 و3 و4."
    },
    {
     "ar": "(0+1)⁴",
     "en": "(0+1)4",
     "ok": false,
     "why": "هذا يولد فقط السلاسل ذات الطول 4 بالضبط (16 سلسلة) ولا يولد السلاسل الأقصر."
    },
    {
     "ar": "(01)⁴",
     "en": "(01)4",
     "ok": false,
     "why": "هذا يولد سلسلة واحدة فقط هي '01010101' ذات الطول 8."
    },
    {
     "ar": "(0+1+0+1+0+1+0+1)⁴",
     "en": "(0+1+0+1+0+1+0+1)4",
     "ok": false,
     "why": "هذا تكرار غير مفيد يكافئ (0+1)⁴ ولا يولد سلاسل بطول أقل من 4."
    }
   ],
   "ref": "L4-S008",
   "tip": "لتحديد حد أقصى للطول (Length ≤ k)، نضيف ε مع عناصر الأبجدية ونكرر القوس k مرة: (Σ ∪ {ε})ᵏ."
  },
  {
   "n": 42,
   "type": "mcq",
   "q_ar": "أي لغة تصف بدقة التعبير النمطي ((0+1).(0+1))*؟",
   "q_en": "Which among the following looks similar to the given expression? ((0+1).(0+1))*",
   "opts": [
    {
     "ar": "{x ∈ {0,1}* | x هي جميع السلاسل الثنائية ذات الطول الزوجي}",
     "en": "{x ∈ {0,1}* | x is all binary numbers with even length}",
     "ok": true,
     "why": "التعبير الداخلي (0+1)(0+1) يولد أي سلسلة بطول 2. تكراره بنجمة كلين يولد سلاسل بأطوال مضاعفات 2 (0, 2, 4, 6, ...) وهي الأطوال الزوجية بما فيها ε."
    },
    {
     "ar": "{x ∈ {0,1}* | x هي جميع السلاسل الثنائية ذات الطول الفردي}",
     "en": "{x ∈ {0,1}* | x is all binary numbers with odd length}",
     "ok": false,
     "why": "السلاسل ذات الطول الفردي يُعبر عنها بـ (0+1)((0+1)(0+1))*."
    },
    {
     "ar": "{x ∈ {0,1}* | x تحتوي على عدد زوجي من الآحاد فقط}",
     "en": "{x ∈ {0,1}* | x has even number of 1s}",
     "ok": false,
     "why": "هذا يعتمد على عدد الرمز 1 وليس الطول الكلي للسلسلة."
    },
    {
     "ar": "{x ∈ {0,1}* | x تحتوي على عدد زوجي من الأصفار فقط}",
     "en": "{x ∈ {0,1}* | x has even number of 0s}",
     "ok": false,
     "why": "التعبير يتعامل مع الرموز 0 و 1 بشكل متكافئ لقياس الطول الإجمالي."
    }
   ],
   "ref": "L4-S008",
   "tip": "(ΣΣ)* يمثل اللغات ذات الطول الزوجي (بما فيها ε ذات الطول 0)، بينما Σ(ΣΣ)* يمثل اللغات ذات الطول الفردي."
  },
  {
   "n": 43,
   "type": "mcq",
   "q_ar": "لأي تعبير نمطي R، ناتج ربط R مع اللغة الفارغة R ∅ (أو ∅ R) يساوي:",
   "q_en": "Concatenation of R with Ф outputs:",
   "opts": [
    {
     "ar": "∅ (اللغة الفارغة)",
     "en": "Ф",
     "ok": true,
     "why": "عملية الربط مع اللغة الفارغة ∅ لا يمكن أن تنتج أي سلسلة لأنه لا يوجد أي عنصر في ∅ لربطه مع سلاسل R، فالناتج دائماً ∅."
    },
    {
     "ar": "R",
     "en": "R",
     "ok": false,
     "why": "المحايد لعملية الربط هو السلسلة الفارغة ε (أي Rε = R)، بينما ∅ تمتص الربط وتجعله ∅."
    },
    {
     "ar": "R.∅",
     "en": "R.Ф",
     "ok": false,
     "why": "هذا تمثيل غير مبسط؛ الناتج الرياضي النهائي هو ∅."
    },
    {
     "ar": "ε",
     "en": "ε",
     "ok": false,
     "why": "∅ لا تحتوي حتى على ε، فلا يمكن أن ينتج ε من ربطها."
    }
   ],
   "ref": "L4-S002",
   "tip": "انتبه للفرق: R • ε = R (عنصر محايد للربط)، بينما R • ∅ = ∅ (عنصر ماص للربط مثل الضرب في صفر)."
  },
  {
   "n": 44,
   "type": "mcq",
   "q_ar": "التعبير النمطي RR* (أو R*R) يمكن التعبير عنه بالصيغة القياسية:",
   "q_en": "RR* can be expressed in which of the forms:",
   "opts": [
    {
     "ar": "R⁺ (الإغلاق الموجب Positive Closure)",
     "en": "R+",
     "ok": true,
     "why": "R* تعني تكرار R صفراً أو أكثر من المرات. عند ربطها بـ R إضافية تصبح التكرارات مرة واحدة أو أكثر، وهو تعريف R⁺ = RR* = R*R."
    },
    {
     "ar": "R⁻",
     "en": "R-",
     "ok": false,
     "why": "لا يوجد رمز R⁻ في التعابير النمطية القياسية."
    },
    {
     "ar": "R⁺ ∪ R⁻",
     "en": "R+ U R-",
     "ok": false,
     "why": "هذا خيار مركب غير رياضي."
    },
    {
     "ar": "R",
     "en": "R",
     "ok": false,
     "why": "R تعني تكراراً واحداً فقط، بينما RR* تسمح بأي عدد من التكرارات ≥ 1."
    }
   ],
   "ref": "L4-S002",
   "tip": "العلاقة بين النجمي والموجب: R* = R⁺ + ε، و R⁺ = RR* = R*R."
  },
  {
   "n": 45,
   "type": "mcq",
   "q_ar": "أي من المطابقات الجبرية التالية للتعبيرات النمطية تُعتبر خاطئة (Incorrect)؟",
   "q_en": "Which among the following are incorrect regular identities?",
   "opts": [
    {
     "ar": "R ∅ = R",
     "en": "RФ = R",
     "ok": true,
     "why": "هذه مطابقة خاطئة؛ فالصواب رياضياً هو R ∅ = ∅ لأن ربط أي مجموعة مع المجموعة الخالية ينتج مجموعة خالية."
    },
    {
     "ar": "ε R = R",
     "en": "εR = R",
     "ok": false,
     "why": "هذه مطابقة صحيحة؛ فالسلسلة الفارغة ε هي العنصر المحايد لعملية الربط."
    },
    {
     "ar": "ε* = ε",
     "en": "ε* = ε",
     "ok": false,
     "why": "هذه مطابقة صحيحة؛ فتكرار السلسلة الفارغة أي عدد من المرات يبقى دائماً {ε}."
    },
    {
     "ar": "∅* = ε",
     "en": "Ф* = ε",
     "ok": false,
     "why": "هذه مطابقة صحيحة رياضياً؛ فالإغلاق النجمي للمجموعة الخالية يحتوي دائماً على السلسلة الفارغة ∅⁰ = {ε}."
    }
   ],
   "ref": "L4-S002",
   "tip": "فخ شهير جداً في الامتحانات: ∅* = {ε} وليس ∅! بينما R ∅ = ∅ و R + ∅ = R."
  },
  {
   "n": 46,
   "type": "mcq",
   "q_ar": "ما هي لغة السلاسل التي يمثلها التعبير النمطي (0+ε)(1+ε)؟",
   "q_en": "(0+ε)(1+ε) represents:",
   "opts": [
    {
     "ar": "{ε, 0, 1, 01}",
     "en": "{0, 1, 01, ε}",
     "ok": true,
     "why": "بفك التعبير بواسطة خاصية توزيع الربط على الاتحاد: (0•1) + (0•ε) + (ε•1) + (ε•ε) = {01, 0, 1, ε}."
    },
    {
     "ar": "{0, 1, ε}",
     "en": "{0, 1, ε}",
     "ok": false,
     "why": "هذا الخيار ينقصه الناتج المشترك لربط 0 مع 1 وهو '01'."
    },
    {
     "ar": "{0, 1, 01, 11, 00, 10, ε}",
     "en": "{0, 1, 01, 11, 00, 10, ε}",
     "ok": false,
     "why": "السلسلة '10' وسلاسل التكرار لا يمكن توليدها لأن الترتيب يقتضي أن يأتي الرمز من القوس الأول أولاً ثم من الثاني."
    },
    {
     "ar": "{0, 1}",
     "en": "{0, 1}",
     "ok": false,
     "why": "هذا يستبعد كلاً من السلسلة الفارغة ε والسلسلة 01."
    }
   ],
   "ref": "L4-S008",
   "tip": "في ضرب التعابير، طبق التوزيع الجبري: (A+B)(C+D) = AC + AD + BC + BD مع مراعاة أن ε تعمل كالرقم 1 في الضرب."
  },
  {
   "n": 47,
   "type": "mcq",
   "q_ar": "وفقاً لقواعد أسبقية العمليات (Precedence)، كيف يُفسَّر التعبير (a + b*).c بشكل صحيح؟",
   "q_en": "(a + b*).c most correctly represents:",
   "opts": [
    {
     "ar": "(a + (b*)).c",
     "en": "(a + (b*)).c",
     "ok": true,
     "why": "داخل القوس، نجمة كلين (*) لها أسبقية أعلى من الاتحاد (+)، فتُطبق أولاً على b، ثم يُحسب الاتحاد مع a، ثم يُربط الناتج كاملاً مع c."
    },
    {
     "ar": "(a + b)*c",
     "en": "(a + b)*c",
     "ok": false,
     "why": "النجمة موضوعة مباشرة على b فقط وليس على القوس (a+b)."
    },
    {
     "ar": "a + ((b*).c)",
     "en": "a + ((b*).c)",
     "ok": false,
     "why": "وجود القوس الخارجي يفرض حساب الجمع قبل ضربه في c."
    },
    {
     "ar": "(a) + ((b)*.c)",
     "en": "(a) + ((b)*.c)",
     "ok": false,
     "why": "الربط مع c يقع على كامل القوس وليس على b فقط."
    }
   ],
   "ref": "L4-S002",
   "tip": "الأقواس تكسر الترتيب الافتراضي دائماً، ولكن بداخل القوس يظل الترتيب: النجمة أولاً ثم الجمع."
  },
  {
   "n": 48,
   "type": "mcq",
   "q_ar": "فوق الأبجدية Σ = {r, t}، أي تعبير نمطي يمثل مجموعة السلاسل التي لا تحتوي على السلسلة الجزئية 'rt'؟",
   "q_en": "Which of the following regular expressions represents the set of strings which do not contain a substring ‘rt’ if Σ = {r, t}",
   "opts": [
    {
     "ar": "t*r*",
     "en": "(t*r*)",
     "ok": true,
     "why": "حتى لا يظهر الحرف 'r' متبوعاً بالحرف 't' مباشرة، يجب أن تسبق جميع حروف 't' حروف 'r'، أي عدد من t متبوعاً بأي عدد من r يضمن عدم ظهور 'rt'."
    },
    {
     "ar": "r*t*",
     "en": "(r*t*)",
     "ok": false,
     "why": "هذا التعبير يولد السلسلة 'rt' مباشرة بمجرد اختيار r واحدة متبوعة بـ t واحدة."
    },
    {
     "ar": "(rt)*",
     "en": "(rt)*",
     "ok": false,
     "why": "هذا التعبير يتكون أساساً من تكرار السلسلة الممنوعة 'rt'."
    },
    {
     "ar": "(tr)*",
     "en": "(tr)*",
     "ok": false,
     "why": "هذا يولد 'trtr' ويمنع سلاسل صالحة كثيرة مثل 'ttt' أو 'rrr' بشكل مستقل."
    }
   ],
   "ref": "L4-S008",
   "tip": "لمنع نمط 'xy' عبر أبجدية ثنائية {x, y}، فإن التعبير هو y*x* (يُعكس الترتيب بحيث تأتي كل y قبل أي x)."
  },
  {
   "n": 49,
   "type": "mcq",
   "q_ar": "ما هو التعبير النمطي للغة L = {x ∈ {0,1}* | السلسلة x تنتهي بـ 1 ولا تحتوي على السلسلة الجزئية '01'}؟",
   "q_en": "Generate a regular expression for the given language: L(x) = {x ∈ {0,1}* | x ends with 1 and does not contain a substring 01}",
   "opts": [
    {
     "ar": "(0+01)*(1+01) — ويختصر منطقياً إلى 1⁺",
     "en": "(0+01)*(1+01)",
     "ok": true,
     "why": "إذا ظهر أي '0' في السلسلة، فلن يمكن أن يتبعه '1' (بسبب منع '01'). وبما أن السلسلة يجب أن تنتهي بـ 1، فمن المستحيل وجود أي 0 أصلاً! إذن السلسلة يجب أن تتكون فقط من آحاد وتكون غير فارغة: 1⁺."
    },
    {
     "ar": "(0+01)*",
     "en": "(0+01)*",
     "ok": false,
     "why": "هذا التعبير يسمح بالسلسلة الفارغة ε وبالسلاسل التي تنتهي بصفر مخالفاً شرط الانتهاء بـ 1."
    },
    {
     "ar": "(0+01)*1",
     "en": "(0+01)*1",
     "ok": false,
     "why": "يحتوي صراحة على '01' وهو النمط الممنوع."
    },
    {
     "ar": "جميع ما ذُكر",
     "en": "All of the mentioned",
     "ok": false,
     "why": "الخيارات الأخرى تحتوي على أنماط ممنوعة أو لا تحقق شروط النهاية."
    }
   ],
   "ref": "L4-S008",
   "tip": "الاستنتاج المنطقي: منع '01' مع شرط 'تنتهي بـ 1' يعني أنه لا يمكن لأي صفر أن يسبق الـ 1 الأخير، وبالتالي لا يمكن وجود أي صفر في السلسلة."
  },
  {
   "n": 50,
   "type": "mcq",
   "q_ar": "أي من التعبيرات النمطية التالية يُعبّر عن صفر أو أكثر من تكرارات الرمز x أو الرمز y؟",
   "q_en": "The regular expressions denote zero or more instances of x or y is?",
   "opts": [
    {
     "ar": "(x+y)*",
     "en": "(x+y)*",
     "ok": true,
     "why": "(x+y) يمثل الاختيار بين x أو y، ووضع نجمة كلين (*) على القوس يعني تكرار هذا الاختيار صفراً أو أكثر من المرات بأي ترتيب."
    },
    {
     "ar": "(x+y)",
     "en": "(x+y)",
     "ok": false,
     "why": "هذا يمثل تكراراً واحداً فقط لأحدهما (طول السلسلة 1 دائماً)."
    },
    {
     "ar": "(x* + y)",
     "en": "(x* + y)",
     "ok": false,
     "why": "هذا يسمح بتكرار x فقط، أو ظهور y مرة واحدة منفردة."
    },
    {
     "ar": "(xy)*",
     "en": "(xy)*",
     "ok": false,
     "why": "هذا يشترط ظهور x متبوعاً بـ y بالتناوب الإجباري مثل xyxy."
    }
   ],
   "ref": "L4-S007",
   "tip": "(x+y)* هي الصيغة المعيارية لتوليد كل السلاسل الممكنة من الأبجدية {x, y}."
  },
  {
   "n": 51,
   "type": "mcq",
   "q_ar": "التعبير النمطي (a+b)* يُكافئ جبرياً التعبير:",
   "q_en": "(a+b)* is equivalent to:",
   "opts": [
    {
     "ar": "(a*b*)*",
     "en": "(a*b*)*",
     "ok": true,
     "why": "كلا التعبيرين يولد مجموعة كل السلاسل الممكنة المكونة من a و b بأي طول وترتيب، وهي متطابقة قياسية شهيرة في جبر اللغات المنتظمة."
    },
    {
     "ar": "a*b*",
     "en": "a*b*",
     "ok": false,
     "why": "a*b* تمنع ظهور a بعد b (مثل ba)، بينما (a+b)* تسمح بها."
    },
    {
     "ar": "b*a*",
     "en": "b* a*",
     "ok": false,
     "why": "b*a* تمنع ظهور b بعد a (مثل ab)."
    },
    {
     "ar": "لا شيء مما ذُكر",
     "en": "none of the mentioned",
     "ok": false,
     "why": "الخيار (a*b*)* مكافئ تماماً وصحيح رياضياً."
    }
   ],
   "ref": "L4-S008",
   "tip": "متطابقات كلين الشهيرة: (a+b)* = (a*b*)* = (a* + b*)* = (a+b*)*."
  },
  {
   "n": 52,
   "type": "mcq",
   "q_ar": "أي نوع من القواعد اللغوية (Grammars) يولد بدقة فئة اللغات المنتظمة (Regular Languages)؟",
   "q_en": "Which type of grammar generates Regular Languages?",
   "opts": [
    {
     "ar": "القواعد المنتظمة (Regular Grammar)",
     "en": "Regular Grammar",
     "ok": true,
     "why": "القواعد المنتظمة (سواء كانت خطية يمنى Right-Linear أو خطية يسرى Left-Linear) تكافئ بدقة الأوتوماتون المنتهي وتولد اللغات المنتظمة حصراً."
    },
    {
     "ar": "القواعد الحرة من السياق (Context-Free Grammar)",
     "en": "Context-Free Grammar",
     "ok": false,
     "why": "القواعد الحرة من السياق تولد فئة أوسع تسمى اللغات الحرة من السياق (CFLs) مثل {aⁿbⁿ | n ≥ 0} التي ليست منتظمة."
    },
    {
     "ar": "القواعد الحساسة للسياق (Context-Sensitive Grammar)",
     "en": "Context-Sensitive",
     "ok": false,
     "why": "القواعد الحساسة للسياق تولد لغات معقدة مثل {aⁿbⁿcⁿ | n ≥ 1} وهي أعلى بكثير في هرم تشومسكي."
    },
    {
     "ar": "القواعد غير المقيدة (Unrestricted Grammar)",
     "en": "Unrestricted Grammar",
     "ok": false,
     "why": "القواعد غير المقيدة تولد اللغات القابلة للعد تكرارياً (Recursively Enumerable) وتكافئ آلات تورنغ."
    }
   ],
   "ref": "L5-S024",
   "tip": "تذكر هرم تشومسكي (Chomsky Hierarchy): النوع 3 هو القواعد المنتظمة (Regular) وتولد اللغات المنتظمة وتكافئ Finite Automata."
  },
  {
   "n": 53,
   "type": "mcq",
   "q_ar": "في التعريف الرباعي القياسي للقواعد الصورية G = (V, T, P, S)، ماذا يمثل المكون 'V'؟",
   "q_en": "In a grammar G=(V, T, P, S), what does 'V' represent?",
   "opts": [
    {
     "ar": "مجموعة المتغيرات أو الرموز غير الطرفية (Variables / Non-terminals)",
     "en": "The set of variables (non-terminal symbols)",
     "ok": true,
     "why": "المكون V يمثل مجموعة منتهية من المتغيرات التي تُستبدل أثناء الاشتقاق ويُرمز لها عادة بحروف كبيرة مثل A, B, S."
    },
    {
     "ar": "مجموعة الرموز الطرفية النهائية (Terminal symbols)",
     "en": "The set of terminal symbols",
     "ok": false,
     "why": "مجموعة الرموز الطرفية يُرمز لها بـ T أو Σ وهي الحروف التي تتكون منها السلسلة النهائية."
    },
    {
     "ar": "مجموعة السلاسل الصالحة (Set of valid strings)",
     "en": "The set of valid strings",
     "ok": false,
     "why": "مجموعة السلاسل تمثل لغة القواعد L(G) وليست المتغيرات V."
    },
    {
     "ar": "المفردات الكلية (The vocabulary)",
     "en": "The vocabulary",
     "ok": false,
     "why": "المفردات الكلية هي اتحاد V ∪ T وليست V وحدها."
    }
   ],
   "ref": "L5-S002",
   "tip": "الرباعي الأساسي للقواعد: V (المتغيرات Non-terminals)، T (الرموز الطرفية Terminals)، P (قواعد الإنتاج Productions)، S (متغير البداية Start variable)."
  },
  {
   "n": 54,
   "type": "mcq",
   "q_ar": "قاعدة الإنتاج التي تأخذ الشكل A → xB (حيث x ∈ T* و B ∈ V) تُعد الصيغة القياسية لـ:",
   "q_en": "The production rule A → xB is a format for:",
   "opts": [
    {
     "ar": "القواعد الخطية اليمنى (Right-Linear Grammar)",
     "en": "Right-Linear Grammar",
     "ok": true,
     "why": "تُسمى خطية يمنى لأن المتغير الوحيد المسموح به في الطرف الأيمن (إن وُجد) يقع في أقصى اليمين بعد السلسلة الطرفية x."
    },
    {
     "ar": "القواعد الخطية اليسرى (Left-Linear Grammar)",
     "en": "Left-Linear Grammar",
     "ok": false,
     "why": "القواعد الخطية اليسرى تأخذ الشكل A → Bx، حيث يكون المتغير B في أقصى يسار الطرف الأيمن."
    },
    {
     "ar": "القواعد العامة الحرة من السياق (General Context-Free Grammar)",
     "en": "General Context-Free Grammar",
     "ok": false,
     "why": "الـ CFG العامة تسمح بوجود متغيرات متعددة وفي أي موضع في الطرف الأيمن مثل A → aAb."
    },
    {
     "ar": "القواعد الحساسة للسياق (Context-Sensitive Grammar)",
     "en": "Context-Sensitive Grammar",
     "ok": false,
     "why": "القواعد الحساسة للسياق تسمح بوجود أكثر من رمز في الطرف الأيسر αAβ → αγβ."
    }
   ],
   "ref": "L5-S022",
   "tip": "خطي يمين (Right-linear): المتغير في أقصى اليمين (A → wB). خطي يسار (Left-linear): المتغير في أقصى اليسار (A → Bw). كلاهما قواعد منتظمة."
  },
  {
   "n": 55,
   "type": "mcq",
   "q_ar": "العملية المتتالية لتطبيق قواعد الإنتاج لاستبدال المتغيرات بدءاً من رمز البداية S للوصول إلى سلسلة طرفية تُسمى:",
   "q_en": "The process of deriving a string in a grammar is called:",
   "opts": [
    {
     "ar": "الاشتقاق (Derivation / ⇒)",
     "en": "Derivation",
     "ok": true,
     "why": "الاشتقاق (ويرمز له بـ ⇒ أو ⇒*) هو التتابع المنطقي لتطبيق قواعد P خطوة بخطوة حتى تصبح السلسلة خالية تماماً من المتغيرات."
    },
    {
     "ar": "الحساب (Computation)",
     "en": "Computation",
     "ok": false,
     "why": "الحساب يعبر عن خطوات معالجة الآلات للبيانات، بينما توليد السلاسل عبر القواعد يُسمى اشتقاقاً."
    },
    {
     "ar": "الانتقال (Transition)",
     "en": "Transition",
     "ok": false,
     "why": "الانتقال مصطلح خاص بالآلات والأوتوماتا (دالة الانتقال δ) وليس توليد السلاسل عبر القواعد."
    },
    {
     "ar": "التنفيذ (Execution)",
     "en": "Execution",
     "ok": false,
     "why": "التنفيذ مصطلح تشغيلي للبرامج وليس التوليد الصوري للسلاسل."
    }
   ],
   "ref": "L5-S004",
   "tip": "نستخدم الرمز ⇒ للاشتقاق في خطوة واحدة، والرمز ⇒* للاشتقاق في صفر أو أكثر من الخطوات: S ⇒* w تعني أن w تنتمي للغة L(G) إذا كانت w ∈ T*."
  },
  {
   "n": 56,
   "type": "mcq",
   "q_ar": "تُوصف القواعد اللغوية بأنها 'غامضة' (Ambiguous) إذا وُجدت لسلسلة معينة واحدة على الأقل:",
   "q_en": "A grammar that can produce a string in more than one way (multiple parse trees) is called:",
   "opts": [
    {
     "ar": "غامضة (Ambiguous — تمتلك أكثر من شجرة إعراب فريدة)",
     "en": "Ambiguous",
     "ok": true,
     "why": "الغموض (Ambiguity) يعني وجود طريقتين مختلفتين بنيوياً لتفسير السلسلة نفسها (شجرتا إعراب أو اشتقاقان أقصى-يسار مختلفان)."
    },
    {
     "ar": "غير غامضة (Unambiguous)",
     "en": "Unambiguous",
     "ok": false,
     "why": "غير الغامضة تعني أن لكل سلسلة في اللغة شجرة إعراب فريدة وواحدة فقط."
    },
    {
     "ar": "منتظمة (Regular)",
     "en": "Regular",
     "ok": false,
     "why": "الانتظام يحدد مستوى اللغة في هرم تشومسكي وليس خاصية تعدد أشجار الإعراب."
    },
    {
     "ar": "معقدة (Complex)",
     "en": "Complex",
     "ok": false,
     "why": "التعقيد ليس مصطلحاً صورياً لوصف تعدد أشجار الإعراب."
    }
   ],
   "ref": "L6-S011",
   "tip": "الغموض خاصية في صياغة القواعد (Grammar) وليس في اللغة نفسها؛ بعض اللغات يمكن إعادة كتابة قواعدها لتصبح غير غامضة (Unambiguous)."
  },
  {
   "n": 57,
   "type": "mcq",
   "q_ar": "تكون القواعد حرة من السياق (Context-Free Grammar - CFG) إذا وفقط إذا كان الطرف الأيسر لكل قاعدة إنتاج:",
   "q_en": "A grammar is Context-Free if the left side of every production rule is:",
   "opts": [
    {
     "ar": "متغيراً مفرداً واحداً فقط (A single variable A ∈ V)",
     "en": "A single variable symbol",
     "ok": true,
     "why": "الشرط الحاسم لـ CFG هو أن كل قاعدة تكون على الشكل A → α حيث A ∈ V و α ∈ (V ∪ T)*، أي يتم استبدال المتغير A بمعزل تام عن السياق المحيط به."
    },
    {
     "ar": "رمزاً طرفياً واحداً (A single terminal symbol)",
     "en": "A single terminal symbol",
     "ok": false,
     "why": "الرموز الطرفية لا يمكن أن تظهر في الطرف الأيسر لقواعد الإنتاج لأنها لا تُستبدل."
    },
    {
     "ar": "سلسلة من الرموز الطرفية (A string of terminals)",
     "en": "A string of terminals",
     "ok": false,
     "why": "الرموز الطرفية لا تظهر في الطرف الأيسر."
    },
    {
     "ar": "سلسلة من المتغيرات والرموز الطرفية معاً",
     "en": "A string of variables and terminals",
     "ok": false,
     "why": "وجود سلاسل مركبة في الطرف الأيسر مثل αAβ يجعل القاعدة حساسة للسياق (Context-Sensitive) أو غير مقيدة."
    }
   ],
   "ref": "L6-S022",
   "tip": "'حرة من السياق' (Context-Free) تعني: الطرف الأيسر حرف واحد كبير دائماً (A → α)، وتطبيق القاعدة لا يعتمد على ما يحيط بهذا الحرف."
  },
  {
   "n": 58,
   "type": "mcq",
   "q_ar": "كل قاعدة منتظمة (Regular Grammar) تُعد بالضرورة أيضاً:",
   "q_en": "Regular grammar is:",
   "opts": [
    {
     "ar": "قاعدة حرة من السياق (Context-Free Grammar)",
     "en": "context free grammar",
     "ok": true,
     "why": "القواعد المنتظمة (A → wB أو A → w) تحقق تماماً شرط CFG لأن طرفها الأيسر مكون من متغير مفرد A ∈ V، والطرف الأيمن سلسلة من (V ∪ T)*."
    },
    {
     "ar": "قاعدة غير حرة من السياق (Non-context-free grammar)",
     "en": "non context free grammar",
     "ok": false,
     "why": "القواعد المنتظمة هي مجموعة جزئية حقيقية من القواعد الحرة من السياق."
    },
    {
     "ar": "قواعد لغة إنجليزية (English grammar)",
     "en": "english grammar",
     "ok": false,
     "why": "هذا تصنيف للغات الطبيعية وليس اللغات الصورية الرياضية."
    },
    {
     "ar": "لا شيء مما ذُكر",
     "en": "none of the mentioned",
     "ok": false,
     "why": "القواعد المنتظمة هي بالفعل فئة فرعية من القواعد الحرة من السياق."
    }
   ],
   "ref": "L6-S033",
   "tip": "علاقة الاحتواء في هرم تشومسكي: Regular Grammars ⊂ Linear Grammars ⊂ Context-Free Grammars ⊂ Context-Sensitive Grammars."
  },
  {
   "n": 59,
   "type": "mcq",
   "q_ar": "في التعريف الرسمي للقواعد G = (V, Σ, P, S)، ماذا يمثل المكون 'S'؟",
   "q_en": "The Grammar can be defined as: G = (V, Σ, P, S). In the given definition, what does S represent?",
   "opts": [
    {
     "ar": "متغير البداية (Starting Variable / Start Symbol)",
     "en": "Starting Variable",
     "ok": true,
     "why": "المكون S هو متغير محدد من مجموعة المتغيرات V (أي S ∈ V) تبدأ منه دائماً كل عمليات الاشتقاق لتوليد سلاسل اللغة."
    },
    {
     "ar": "حالة القبول (Accepting State)",
     "en": "Accepting State",
     "ok": false,
     "why": "حالة القبول مصطلح يخص الأوتوماتا (F) وليس القواعد الصورية."
    },
    {
     "ar": "القواعد الحساسة (Sensitive Grammar)",
     "en": "Sensitive Grammar",
     "ok": false,
     "why": "S حرف يرمز للمتغير الابتدائي (Start) وليس نوع القواعد."
    },
    {
     "ar": "لا شيء مما ذُكر",
     "en": "None of these",
     "ok": false,
     "why": "S يمثل بدقة رمز البداية (Starting Variable)."
    }
   ],
   "ref": "L5-S002",
   "tip": "كل عملية اشتقاق في أي قواعد تبدأ إلزامياً من الحرف S كخطوة أولى: S ⇒ ..."
  },
  {
   "n": 60,
   "type": "mcq",
   "q_ar": "بالنسبة للقواعد ذات الإنتاج S → 0S1 | ε فوق الأبجدية Σ = {0, 1}، أي من العبارات التالية خاطئة (Wrong) في وصف اللغة المتولدة؟",
   "q_en": "For S -> 0S1 | ε for Σ = {0,1}*, which of the following is wrong for the language produced?",
   "opts": [
    {
     "ar": "اللغة المتولدة هي {0ⁿ1ⁿ | n ≥ 1}",
     "en": "0ⁿ1ⁿ | n ≥ 1",
     "ok": true,
     "why": "هذا الوصف خاطئ لأن القواعد تحتوي على القاعدة S → ε التي تسمح بتوليد السلسلة الفارغة ε (الموافقة لـ n = 0)، فالصواب أن n ≥ 0."
    },
    {
     "ar": "اللغة المتولدة هي {0ⁿ1ⁿ | n ≥ 0}",
     "en": "0ⁿ1ⁿ | n ≥ 0",
     "ok": false,
     "why": "هذا وصف صحيح تماماً للغة لأن الاشتقاق يبدأ بـ ε عندما n=0."
    },
    {
     "ar": "لغة غير منتظمة (Non regular language)",
     "en": "Non regular language",
     "ok": false,
     "why": "هذا وصف صحيح؛ فاللغة {0ⁿ1ⁿ | n ≥ 0} تحتاج ذاكرة غير محدودة للمقارنة وتتطلب مكدساً (CFL وليست منتظمة)."
    },
    {
     "ar": "لا شيء مما ذُكر",
     "en": "None of the mentioned",
     "ok": false,
     "why": "العبارة n ≥ 1 خاطئة وتعتبر الإجابة المستهدفة."
    }
   ],
   "ref": "L5-S015",
   "tip": "انتبه لشرط البداية (n ≥ 0 مقابل n ≥ 1): إذا كانت القواعد تشمل S → ε مباشرة فإن السلسلة الفارغة مشمولة والشرط الصحيح هو n ≥ 0."
  },
  {
   "n": 61,
   "type": "mcq",
   "q_ar": "بالنظر إلى القواعد A → aA | a | b، ما هو عدد خطوات الاشتقاق اللازمة لتوليد السلسلة \"aab\"؟",
   "q_en": "A -> aA | a | b. The number of steps to form \"aab\":",
   "opts": [
    {
     "ar": "3 خطوات (3 steps)",
     "en": "3",
     "ok": true,
     "why": "خطوات الاشتقاق هي:\nالخطوة 1: A ⇒ aA (بتطبيق A → aA)\nالخطوة 2: aA ⇒ aaA (بتطبيق A → aA)\nالخطوة 3: aaA ⇒ aab (بتطبيق A → b)\nالمجموع = 3 خطوات بالضبط."
    },
    {
     "ar": "خطوتان (2 steps)",
     "en": "2",
     "ok": false,
     "why": "خطوتان تكفيان لتوليد \"ab\" أو \"aa\" فقط وليس \"aab\"."
    },
    {
     "ar": "4 خطوات (4 steps)",
     "en": "4",
     "ok": false,
     "why": "3 خطوات كافية تماماً للوصول للسلسلة الطرفية ولا حاجة لخطوة رابعة."
    },
    {
     "ar": "5 خطوات (5 steps)",
     "en": "5",
     "ok": false,
     "why": "هذا العدد زائد عن الحاجة لتوليد سلسلة بطول 3 في هذه القواعد."
    }
   ],
   "ref": "L5-S004",
   "tip": "لحساب عدد خطوات الاشتقاق: تتبع كل سهم (⇒) من البداية حتى الحصول على سلسلة كل عناصرها رموز طرفية (Terminals)."
  },
  {
   "n": 62,
   "type": "mcq",
   "q_ar": "أي من الخيارات التالية يمثل بدقة اللغة المتولدة من القواعد: G → X111 | G1 و X → X0 | 00؟",
   "q_en": "Which among the following is the correct option for the given grammar? G -> X111 | G1, X -> X0 | 00",
   "opts": [
    {
     "ar": "{ 0ᵃ 1ᵇ | a ≥ 2, b ≥ 3 }",
     "en": "{0^a 1^b | a ≥ 2, b ≥ 3}",
     "ok": true,
     "why": "القاعدة X → X0 | 00 تولد سلسلتين أو أكثر من الأصفار (0ᵃ حيث a ≥ 2). والقاعدة G → X111 | G1 تبدأ بـ X متبوعاً بثلاثة آحاد وتسمح بإضافة المزيد عبر G1، مما يولد ثلاثة آحاد أو أكثر (1ᵇ حيث b ≥ 3)."
    },
    {
     "ar": "{ 0ᵃ 1ᵇ | a = 1, b = 5 }",
     "en": "{0^a 1^b | a = 1, b = 5}",
     "ok": false,
     "why": "القيمة الدنيا لـ a هي 2 لأن قاعدة التوقف لـ X هي 00."
    },
    {
     "ar": "{ 0ᵃ 1ᵇ | a = b }",
     "en": "{0^a 1^b | a = b}",
     "ok": false,
     "why": "لا يوجد أي ترابط أو تساوي إجباري بين عدد الأصفار وعدد الآحاد."
    },
    {
     "ar": "أكثر من خيار مما ذُكر صحيح",
     "en": "More than one of the mentioned is correct",
     "ok": false,
     "why": "خيار واحد فقط دقيق وصحيح وهو {0ᵃ 1ᵇ | a ≥ 2, b ≥ 3}."
    }
   ],
   "ref": "L6-S023",
   "tip": "حلل قاعدة التوقف (Base Case) لكل متغير: X تنتج 00 كحد أدنى، و G تنتج X111 كحد أدنى، إذن الحد الأدنى هو 00111 أي a≥2 و b≥3."
  },
  {
   "n": 63,
   "type": "tf",
   "q_ar": "مبرهنة: كل قاعدة خطية يمنى (Right-Linear Grammar) تولد لغة منتظمة (Regular Language).",
   "q_en": "Every right-linear grammar generates a regular language.",
   "opts": [
    {
     "ar": "صح (True)",
     "en": "True",
     "ok": true,
     "why": "مبرهنة أساسية في نظرية الحوسبة: كل قاعدة خطية يمنى يمكن تحويلها مباشرة إلى أوتوماتون غير حتمي NFA مكافئ يتعرف على نفس اللغة بالضبط."
    },
    {
     "ar": "خطأ (False)",
     "en": "False",
     "ok": false,
     "why": "العبارة صحيحة تماماً وتثبت التكافؤ بين القواعد المنتظمة والآلات المنتهية."
    }
   ],
   "ref": "L5-S028",
   "tip": "المبرهنة الأساسية: اللغات المنتظمة = اللغات المقبولة بـ DFA/NFA = اللغات المولدة بقواعد خطية يمنى = اللغات المولدة بقواعد خطية يسرى = اللغات الممثلة بـ Regex."
  },
  {
   "n": 64,
   "type": "mcq",
   "q_ar": "أي من القواعد التالية حرة من السياق (CFG) وتولد بدقة اللغة L = {x ∈ {0,1}* | عدد الأصفار يساوي عدد الآحاد}؟",
   "q_en": "CFG for L = {x ∈ {0,1}* | number of zeroes = number of ones}",
   "opts": [
    {
     "ar": "جميع ما ذُكر (كلا النموذجين القياسيين صحيح)",
     "en": "All of the mentioned",
     "ok": true,
     "why": "كلا النموذجين يولد اللغة بدقة: (1) النموذج المباشر S → ε | 0S1 | 1S0 | SS يغطي التوليد المتداخل والدمج، و (2) النموذج المساعد S → 0B | 1A | ε; A → 0S; B → 1S يتعقب فائض الأصفار والآحاد."
    },
    {
     "ar": "S → ε | 0S1 | 1S0 | SS فقط",
     "en": "S -> ε | 0S1 | 1S0 | SS",
     "ok": false,
     "why": "هذا النموذج صحيح بمفرده، لكن الخيار الآخر صحيح أيضاً مما يجعل 'جميع ما ذُكر' هو الإجابة الشاملة."
    },
    {
     "ar": "S → 0B | 1A | ε; A → 0S; B → 1S فقط",
     "en": "S -> 0B | 1A | ε; A -> 0S; B -> 1S",
     "ok": false,
     "why": "هذا النموذج صحيح بمفرده، لكن الخيار الأول صحيح أيضاً."
    },
    {
     "ar": "لا شيء مما ذُكر",
     "en": "None of the mentioned",
     "ok": false,
     "why": "توجد صيغتان صحيحتان معروضتان في الخيارات."
    }
   ],
   "ref": "L6-S023",
   "tip": "لتوليد أي ترتيب متساوٍ، نحتاج التوليد المتداخل 0S1 و 1S0 بالإضافة إلى الدمج التكراري SS للتعامل مع السلاسل المركبة."
  },
  {
   "n": 65,
   "type": "mcq",
   "q_ar": "أي من السلاسل التالية لا يمكن توليدها بواسطة القواعد: S → SaSbS | ε؟",
   "q_en": "Which of the following strings is not generated by the following grammar? S → SaSbS | ε",
   "opts": [
    {
     "ar": "aaabbb",
     "en": "aaabbb",
     "ok": true,
     "why": "هذه القواعد تمثل لغة أقواس متوازنة من نوع دايك (Dyck Language) حيث كل 'a' تتزاوج وتغلق مباشرة بواسطة 'b' مرتبطة بها في نمط SaSbS؛ لا يمكنها توليد التداخل العميق المستمر 3 مرات a متبوعة بـ 3 مرات b بشكل مباشر من هذه الصيغة."
    },
    {
     "ar": "aabb",
     "en": "aabb",
     "ok": false,
     "why": "يمكن توليد aabb بالاشتقاق: S ⇒ SaSbS ⇒ aSb ⇒ a(SaSbS)b ⇒ a(aSb)b ⇒ aabb."
    },
    {
     "ar": "abab",
     "en": "abab",
     "ok": false,
     "why": "يمكن توليد abab بالاشتقاق: S ⇒ SaSbS ⇒ abS ⇒ ab(SaSbS) ⇒ abab."
    },
    {
     "ar": "aababb",
     "en": "aababb",
     "ok": false,
     "why": "يمكن توليد aababb عبر اشتقاق سليم من خلال تطبيق القاعدة مرتين وتفريغ الباقي بـ ε."
    }
   ],
   "ref": "L6-S019",
   "tip": "القواعد S → SaSbS | ε هي صيغة كلاسيكية لتوليد جميع تعبيرات الأقواس المتوازنة (Dyck language over a,b)."
  },
  {
   "n": 66,
   "type": "tf",
   "q_ar": "يمكن تعديل الأوتوماتون المنتهي غير الحتمي (NFA) ليسمح بحركات وانتقالات تلقائية دون قراءة أي رمز دخل (انتقالات ε-transitions) مع بقاء قدرته التعبيرية مكافئة للـ NFA القياسي.",
   "q_en": "State true or false? Statement: An NFA can be modified to allow transition without input alphabets, along with one or more transitions on input symbols.",
   "opts": [
    {
     "ar": "صح (True)",
     "en": "True",
     "ok": true,
     "why": "صحيح؛ أوتوماتون NFA مع انتقالات إبسلون (ε-NFA) يكافئ تماماً في القوة الحسابية كلاً من NFA القياسي و DFA، ويمكن تحويله إلى DFA مكافئ دون أي فقدان للقدرة التعبيرية."
    },
    {
     "ar": "خطأ (False)",
     "en": "False",
     "ok": false,
     "why": "خطأ؛ لأن إضافة انتقالات ε تُعد ميزة تسهل التصميم الرياضي لكنها لا تزيد من فئة اللغات المقبولة التي تظل دائماً اللغات المنتظمة (Regular Languages)."
    }
   ],
   "ref": "L2-S013",
   "tip": "تذكر: NFA-ε ≡ NFA ≡ DFA. إضافة انتقالات إبسلون توفر مرونة وراحة في التصميم والبناء (مثل خوارزمية طومسون) دون زيادة القوة التعبيرية."
  },
  {
   "n": 67,
   "type": "mcq",
   "q_ar": "يمكن الحصول على متممة لغة منتظمة مقبولة بواسطة DFA مكتمل M = (Q, Σ, δ, q0, F) ببساطة عن طريق:",
   "q_en": "Complement of a DFA can be obtained by:",
   "opts": [
    {
     "ar": "تبديل حالات القبول لتصبح حالات رفض، وحالات الرفض لتصبح حالات قبول (F' = Q - F)",
     "en": "making final states non-final and non-final to final",
     "ok": true,
     "why": "في أي DFA مكتمل، كل سلسلة تنتهي في حالة واحدة محددة بدقة؛ لذا فإن عكس تصنيف الحالات يجعل كل سلسلة كانت مقبولة تنتهي في حالة غير نهائية (مرفوضة)، وكل سلسلة كانت مرفوضة تنتهي في حالة قبول."
    },
    {
     "ar": "جعل الحالة الابتدائية هي حالة القبول الوحيدة",
     "en": "making starting state as final state",
     "ok": false,
     "why": "هذا يقبل فقط السلسلة الفارغة أو السلاسل التي تعود لنقطة البداية ولا يحسب المتممة الرياضية للغة."
    },
    {
     "ar": "لا توجد طريقة مباشرة وبسيطة",
     "en": "no trivial method",
     "ok": false,
     "why": "توجد طريقة مباشرة وسريعة جداً وهي عكس مصفوفة/مجموعة حالات القبول F."
    },
    {
     "ar": "جعل حالة القبول هي الحالة الابتدائية",
     "en": "make final as a starting state",
     "ok": false,
     "why": "هذا يغير نقطة انطلاق المعالجة ولا يولد المتممة."
    }
   ],
   "ref": "L3-S036",
   "tip": "شرط جوهري: طريقة تبديل الحالات (F' = Q - F) تعمل بنجاح 100% فقط على DFA المكتمل (Complete DFA). لا تطبقها أبداً مباشرة على NFA دون تحويله أولاً إلى DFA كامل."
  },
  {
   "n": 68,
   "type": "mcq",
   "q_ar": "بالنسبة للغة L = {x ∈ {0,1}* | x = 0ⁿ1ⁿ لكل n ≥ 1}، هل يمكن بناء أوتوماتون منتهي حتمي (DFA) للتعرف عليها؟",
   "q_en": "L = {x ∈ Σ = {0,1} | x = 0ⁿ1ⁿ for n ≥ 1}. Can there be a DFA possible for the language?",
   "opts": [
    {
     "ar": "لا (No) — لا يمكن للـ DFA التعرف عليها",
     "en": "No",
     "ok": true,
     "why": "الـ DFA يمتلك ذاكرة منتهية فقط من الحالات ولا يستطيع عد وتخزين عدد غير محدود من الأصفار لمطابقتها مع عدد متساوٍ من الآحاد (لغة غير منتظمة تتطلب مكدساً PDA)."
    },
    {
     "ar": "نعم (Yes) — يمكن بناء DFA بعدد كافٍ من الحالات",
     "en": "Yes",
     "ok": false,
     "why": "مهما كان عدد الحالات كبيراً، طالما أنه منتهٍ فلن يستطيع التعامل مع قيمة n عندما تتجاوز عدد حالات الآلة."
    },
    {
     "ar": "نعم، بشرط أن تكون n عدداً زوجياً فقط",
     "en": "Yes, if n is even",
     "ok": false,
     "why": "تقييد n بالأعداد الزوجية لا يحل مشكلة الذاكرة اللانهائية اللازمة للمطابقة المتساوية."
    },
    {
     "ar": "نعم، إذا استخدمنا NFA بدلاً من DFA",
     "en": "Yes, using NFA",
     "ok": false,
     "why": "الـ NFA مكافئ تماماً للـ DFA في القوة اللغوية ولا يمكنه أيضاً التعرف على 0ⁿ1ⁿ."
    }
   ],
   "ref": "L1-S010",
   "tip": "قاعدة ذهبية: أي لغة تتطلب 'عداً ومقارنة متزامنة غير محدودة' مثل aⁿbⁿ أو w wᴿ ليست منتظمة (Non-regular) ولا يمكن لأي DFA أو NFA التعرف عليها."
  },
  {
   "n": 69,
   "type": "mcq",
   "q_ar": "أيٌّ من اللغات التالية تُعد لغة منتظمة (Regular Language) يمكن التعرف عليها بواسطة DFA؟",
   "q_en": "Which of the following is a regular language?",
   "opts": [
    {
     "ar": "لغة السلاسل التي تحتوي على عدد زوجي من الأصفار",
     "en": "String with even number of Zero’s",
     "ok": true,
     "why": "التحقق من الزوجية (Parity) يتطلب حالتين فقط في الـ DFA (حالة للعدد الزوجي وحالة للعدد الفردي)، ولذلك هي لغة منتظمة قياسية."
    },
    {
     "ar": "لغة السلاسل التي يكون طولها عدداً أولياً {1ᵖ | p عدد أولي}",
     "en": "String whose length is a sequence of prime numbers",
     "ok": false,
     "why": "الأعداد الأولية تتطلب فحص قابلية القسمة لعدد لا نهائي من القيم ولا يمكن تمثيلها بآلة ذات حالات منتهية."
    },
    {
     "ar": "لغة السلاسل المتناظرة (Palindromes: {w | w = wᴿ})",
     "en": "Palindrome string",
     "ok": false,
     "why": "فحص التناظر يتطلب مكدساً (PDA) لمقارنة النصف الثاني بالنصف الأول المعكوس."
    },
    {
     "ar": "لغة السلاسل التي تتضمن تكراراً متطابقاً {wwᴿ | w ∈ Σ*}",
     "en": "String with substring wwr in between",
     "ok": false,
     "why": "تتطلب ذاكرة تخزين لمطابقة السلسلة w مع معكوسها وهي لغة خالية من السياق وليست منتظمة."
    }
   ],
   "ref": "L1-S010",
   "tip": "لتحديد هل اللغة منتظمة: إذا كان التحقق منها يعتمد على باقٍ حسابي دوري (مثل عدد زوجي/فردي، يقبل القسمة على k، يبدأ أو ينتهي بنمط محدد) فهي منتظمة؛ وإذا اعتمدت على ذاكرة تراكمية مفتوحة فهي غير منتظمة."
  },
  {
   "n": 70,
   "type": "tf",
   "q_ar": "صح أم خطأ: يستطيع الأوتوماتون المنتهي الحتمي (DFA) التعرف على لغة السلاسل المتناظرة (Palindromes) على الأبجدية {0, 1}.",
   "q_en": "A DFA can recognize a palindrome string.",
   "opts": [
    {
     "ar": "خطأ (False)",
     "en": "False",
     "ok": true,
     "why": "الـ DFA لا يستطيع التعرف على المتناظرات العامة؛ لأن مقارنة الحرف الأول بالحرف الأخير تتطلب تذكر السلسلة بالكامل وهو ما يتجاوز الذاكرة المنتهية المحدودة للـ DFA."
    },
    {
     "ar": "صح (True)",
     "en": "True",
     "ok": false,
     "why": "لغة المتناظرات العامة غير منتظمة وتتطلب أوتوماتون مكدس غير حتمي (NPDA)."
    }
   ],
   "ref": "L1-S010",
   "tip": "لغة المتناظرات (Palindromes) هي المثال الأشهر للغات الخالية من السياق (CFL) غير المنتظمة."
  },
  {
   "n": 71,
   "type": "mcq",
   "q_ar": "ما هي فئة اللغات الصورية التي يتعرف عليها ويقبلها أوتوماتون المكدس (Pushdown Automaton - PDA)؟",
   "q_en": "The language accepted by Push down Automaton:",
   "opts": [
    {
     "ar": "اللغات الخالية من السياق (Context-Free Languages - CFL)",
     "en": "Context free language",
     "ok": true,
     "why": "أوتوماتون المكدس (PDA) هو النموذج الحوسبي المعتمد رسمياً للتعرف على فئة اللغات الخالية من السياق وتوليدها القواعد CFG."
    },
    {
     "ar": "اللغات العودية (Recursive Language)",
     "en": "Recursive Language",
     "ok": false,
     "why": "اللغات العودية تتعرف عليها آلات تورنغ التي تتوقف دائماً (Deciders)."
    },
    {
     "ar": "اللغات المقيدة خطياً (Linearly Bounded language)",
     "en": "Linearly Bounded language",
     "ok": false,
     "why": "اللغات المقيدة خطياً تتعرف عليها آلات LBA وتكافئ اللغات الحساسة للسياق."
    },
    {
     "ar": "جميع ما ذُكر",
     "en": "All of the mentioned",
     "ok": false,
     "why": "الـ PDA مخصص حصراً للغات الخالية من السياق (CFL)."
    }
   ],
   "ref": "L6-S022",
   "tip": "احفظ الربط المباشر لهرم تشومسكي: Finite Automaton ↔ Regular Language | Pushdown Automaton ↔ Context-Free Language | Turing Machine ↔ Recursively Enumerable."
  },
  {
   "n": 72,
   "type": "mcq",
   "q_ar": "إلى أي فئة تنتمي اللغة الصورية L = {aᵐ bᵐ cᵐ | m ≥ 1}؟",
   "q_en": "Which of the following the given language belongs to? L = {a^m b^m c^m | m ≥ 1}",
   "opts": [
    {
     "ar": "لا شيء مما ذُكر (لغة حساسة للسياق Context-Sensitive)",
     "en": "None of the mentioned",
     "ok": true,
     "why": "اللغة aᵐbᵐcᵐ تتطلب مقارنة متزامنة بين ثلاثة أطراف متساوية، وهو ما لا يستطيعه المكدس المفرد (PDA)؛ لذا فهي ليست منتظمة وليست خالية من السياق، بل لغة حساسة للسياق (CSL)."
    },
    {
     "ar": "لغة خالية من السياق (Context free language)",
     "en": "Context free language",
     "ok": false,
     "why": "المكدس يمكنه مطابقة طرفين فقط (مثل aᵐbᵐ)، وعند إفراغه لمطابقة cᵐ يفقد معلومة العدد m."
    },
    {
     "ar": "لغة منتظمة (Regular language)",
     "en": "Regular language",
     "ok": false,
     "why": "اللغات المنتظمة تعجز عن مطابقة طرفين فكيف بثلاثة أطراف متساوية."
    },
    {
     "ar": "لغة خالية من السياق ومنتظمة في نفس الوقت",
     "en": "Context free language & Regular language",
     "ok": false,
     "why": "اللغة خارج هاتين الفئتين تماماً وتقع في المستوى الأعلى (Type-1)."
    }
   ],
   "ref": "L1-S010",
   "tip": "تذكر: aⁿbⁿ هي Context-Free (مكدس واحد يكفي)، بينما aⁿbⁿcⁿ هي Context-Sensitive (تحتاج مكدسين أو شريط تورنغ)."
  },
  {
   "n": 73,
   "type": "mcq",
   "q_ar": "ما هو هيكل البيانات الأساسي المستخدم كذاكرة مساعدة في أوتوماتون المكدس (Pushdown Automaton)؟",
   "q_en": "A Pushdown Automaton (PDA) uses a...",
   "opts": [
    {
     "ar": "المكدس (Stack / LIFO)",
     "en": "Stack",
     "ok": true,
     "why": "الـ PDA يتكون من تحكم بحالات منتهية مضافاً إليه مكدس (Stack) يعمل بمبدأ الوارد أخيراً صادر أولاً (Last-In, First-Out) لتخزين الرموز واسترجاعها."
    },
    {
     "ar": "طابور الانتظار (Queue)",
     "en": "Queue",
     "ok": false,
     "why": "استخدام الطابور (Queue) بدلاً من المكدس يجعل الآلة مكافئة لآلة تورنغ الكاملة وليس PDA."
    },
    {
     "ar": "الشريط (Tape)",
     "en": "Tape",
     "ok": false,
     "why": "الشريط هو هيكل الذاكرة الخاص بآلة تورنغ (Turing Machine)."
    },
    {
     "ar": "السجل (Register)",
     "en": "Register",
     "ok": false,
     "why": "السجلات هياكل معمارية حاسوبية وليست نموذج ذاكرة PDA الصوري."
    }
   ],
   "ref": "L1-S009",
   "tip": "اسم الآلة نفسه 'Pushdown' مشتق من حركة دفع العناصر إلى قمة المكدس (Push)."
  },
  {
   "n": 74,
   "type": "mcq",
   "q_ar": "ما هو النموذج الحوسبي الأكثر قوة في هرم تشومسكي القادر على محاكاة أي خوارزمية حاسوبية؟",
   "q_en": "What is the most powerful type of automaton in the Chomsky Hierarchy?",
   "opts": [
    {
     "ar": "آلة تورنغ (Turing Machine)",
     "en": "Turing Machine",
     "ok": true,
     "why": "آلة تورنغ (TM) هي النموذج النظري الأقوى، وبحسب أطروحة تشيرش-تورنغ (Church-Turing Thesis) فإنها تستطيع تنفيذ أي حساب يمكن لأي حاسوب فعلي إنجازه."
    },
    {
     "ar": "الأوتوماتون المنتهي الحتمي (Finite Automaton)",
     "en": "Finite Automaton",
     "ok": false,
     "why": "الـ FA هو النموذج الأبسط والأقل قدرة وذاكرته محدودة للغاية بحالاته."
    },
    {
     "ar": "أوتوماتون المكدس (Pushdown Automaton)",
     "en": "Pushdown Automaton",
     "ok": false,
     "why": "الـ PDA مقيد بالوصول لقمة المكدس فقط ولا يمكنه التحرك الحر في الذاكرة."
    },
    {
     "ar": "جميع النماذج متساوية تماماً في القدرة الحسابية",
     "en": "All are equally powerful.",
     "ok": false,
     "why": "تتدرج النماذج في قوة تعبيرية حاسمة: FA < PDA < LBA < Turing Machine."
    }
   ],
   "ref": "L1-S010",
   "tip": "قمة هرم الحوسبة هي آلة تورنغ؛ لأن شريطها اللانهائي ورأس القراءة/الكتابة الحر يمنحانها وصولاً عشوائياً كاملاً للذاكرة."
  },
  {
   "n": 75,
   "type": "mcq",
   "q_ar": "شريط الذاكرة (Memory Tape) لآلة تورنغ في النموذج النظري يُعتبر:",
   "q_en": "A Turing machine's tape is:",
   "opts": [
    {
     "ar": "شريطاً غير منتهٍ (Infinite)",
     "en": "Infinite.",
     "ok": true,
     "why": "النموذج النظري لآلة تورنغ يفترض وجود شريط مقسم لخلايا يمتد إلى ما لا نهاية لتوفير مساحة تخزين غير محدودة للخوارزميات."
    },
    {
     "ar": "منتهياً في اتجاه واحد فقط",
     "en": "Finite in one direction.",
     "ok": false,
     "why": "الشريط القياسي يمتد لا نهائياً (إما أحادي الاتجاه لا نهائي أو ثنائي الاتجاه لا نهائي)."
    },
    {
     "ar": "منتهياً في كلا الاتجاهين",
     "en": "Finite in both directions.",
     "ok": false,
     "why": "الشريط المنتهي المحدود بحجم المدخلات يخص فئة Linear Bounded Automata وليس آلة تورنغ العامة."
    },
    {
     "ar": "مخصصاً للقراءة فقط (Read-only)",
     "en": "Read-only.",
     "ok": false,
     "why": "آلة تورنغ تقرأ وتكتب الرموز بحرية تامة على شريطها."
    }
   ],
   "ref": "L1-S010",
   "tip": "الفرق الجوهري بين الحواسيب الواقعية وآلة تورنغ النظرية هو أن آلة تورنغ تمتلك ذاكرة شريط لا نهائية الحجم (Infinite Memory)."
  },
  {
   "n": 76,
   "type": "mcq",
   "q_ar": "ما هي العمليات الأساسية التي يمكن لرأس القراءة والكتابة في آلة تورنغ إنجازها في الخطوة الواحدة بعد قراءة الرمز الحالي؟",
   "q_en": "Which of the following operations can a Turing machine perform?",
   "opts": [
    {
     "ar": "جميع ما ذُكر (قراءة رمز، كتابة رمز، وتحريك الرأس يميناً أو يساراً)",
     "en": "All of the mentioned.",
     "ok": true,
     "why": "دالة الانتقال في آلة تورنغ δ: Q × Γ → Q × Γ × {L, R} تسمح بتغيير الحالة الحالية، وكتابة رمز بديل على الشريط، وتحريك رأس القراءة خطوة واحدة إلى اليسار (L) أو اليمين (R)."
    },
    {
     "ar": "قراءة رمز فقط (Read a symbol)",
     "en": "Read a symbol.",
     "ok": false,
     "why": "آلة تورنغ ليست للقراءة فقط بل تكتب وتعدل الشريط أيضاً."
    },
    {
     "ar": "كتابة رمز فقط (Write a symbol)",
     "en": "Write a symbol.",
     "ok": false,
     "why": "الكتابة جزء من العملية وليست العملية الوحيدة."
    },
    {
     "ar": "تحريك الرأس يميناً أو يساراً فقط",
     "en": "Move its head left or right.",
     "ok": false,
     "why": "تحريك الرأس يترافق دائماً مع القراءة والكتابة وتغيير الحالة."
    }
   ],
   "ref": "L1-S010",
   "tip": "ثلاثية خطوة آلة تورنغ: (1) غيّر الحالة، (2) اكتب رمزاً على الخلية، (3) حرّك الرأس L أو R."
  },
  {
   "n": 77,
   "type": "mcq",
   "q_ar": "المسألة الحوسبية التي لا يمكن لأي خوارزمية أو آلة تورنغ حلها بشكل صحيح ودائم لجميع المدخلات تُسمى:",
   "q_en": "A problem that cannot be solved by any algorithm is called:",
   "opts": [
    {
     "ar": "مسألة غير قابلة للتقرير (Undecidable)",
     "en": "Undecidable",
     "ok": true,
     "why": "المسائل غير القابلة للتقرير (مثل مسألة التوقف الشهيرة Halting Problem) أثبتت نظرية الحوسبة استحالة وجود خوارزمية عامة تحلها دائماً."
    },
    {
     "ar": "مسألة صعبة غير حتمية (NP-Hard)",
     "en": "NP-Hard",
     "ok": false,
     "why": "مسائل NP-Hard قابلة للحل بخوارزميات لكنها تتطلب وقتاً أسياً، بينما Undecidable يستحيل حلها خوارزمياً أصلاً."
    },
    {
     "ar": "مسألة معقدة (Complex)",
     "en": "Complex",
     "ok": false,
     "why": "المسائل المعقدة تصف درجة الصعوبة الزمنية وليست استحالة الحل المطلق."
    },
    {
     "ar": "مسألة عودية (Recursive)",
     "en": "Recursive",
     "ok": false,
     "why": "المسألة العودية هي مسألة قابلة للتقرير (Decidable) ويمكن حلها بخوارزمية تتوقف دائماً."
    }
   ],
   "ref": "L1-S010",
   "tip": "مسألة التوقف لآلن تورنغ (Turing's Halting Problem) هي البرهان التاريخي الأشهر على وجود مسائل غير قابلة للتقرير (Undecidable)."
  },
  {
   "n": 78,
   "type": "mcq",
   "q_ar": "ما هو الحد الأدنى لعدد الحالات اللازمة لبناء DFA يقبل لغة السلاسل الثنائية التي تنتهي بـ '10' فوق Σ = {0,1}؟",
   "q_en": "Number of states required to accept string ending with 10:",
   "opts": [
    {
     "ar": "3 حالات (q0: البداية/لم يقرأ 1، q1: قرأ 1، q2: قرأ 10 قبول)",
     "en": "3",
     "ok": true,
     "why": "يحتاج الـ DFA إلى 3 حالات:\n1. q0 (ابتدائية): تمثل عدم توفر أي بادئة من النمط.\n2. q1: تمثل آخر رمز تمت قراءته هو '1'.\n3. q2 (حالة قبول): تمثل آخر رمزين هما '10'.\nأي عدد أقل من 3 لن يستطيع التمييز بين هذه الشروط الثلاثة."
    },
    {
     "ar": "حالتان (2 states)",
     "en": "2",
     "ok": false,
     "why": "حالتان تكفيان فقط لسلاسل تنتهي برمز واحد (مثل السلاسل التي تنتهي بـ '0')."
    },
    {
     "ar": "حالة واحدة (1 state)",
     "en": "1",
     "ok": false,
     "why": "حالة واحدة تقبل كل السلاسل أو ترفضها جميعاً ولا تميز النهاية."
    },
    {
     "ar": "لا يمكن تمثيلها",
     "en": "can’t be represented",
     "ok": false,
     "why": "اللغة منتظمة ويمكن تمثيلها بـ DFA من 3 حالات بسهولة."
    }
   ],
   "ref": "L3-S009",
   "tip": "قاعدة سريعة: لقبول سلسلة تنتهي بنمط طوله k (بدون تكرارات معقدة)، يحتاج الـ DFA الأصغري إلى (k + 1) من الحالات. هنا طول '10' هو 2، لذا 2 + 1 = 3 حالات."
  },
  {
   "n": 79,
   "type": "mcq",
   "q_ar": "أي من التعبيرات النمطية التالية يمثل بدقة مجموعة السلاسل الثنائية التي تحتوي على زوج متتالي واحد على الأكثر من الآحاد ('11') فوق Σ = {0, 1}؟",
   "q_en": "Which of the following RE for strings with at most one pair of consecutive 1's over Σ = {0,1} is correct?",
   "opts": [
    {
     "ar": "(0+10)*(1+ε)",
     "en": "(0+10)*(1+ε)",
     "ok": true,
     "why": "التعبير (0+10)* يضمن عدم تجاور أي آحاد إطلاقاً في الجزء التكراري (كل 1 يتبعه 0 إجبارياً)، واللاحقة (1+ε) تسمح بظهور 1 إضافي وحيد في النهاية كحد أقصى، مما يضمن ألا يتكرر النمط المتجاور '11' أكثر من مرة واحدة في السلسلة."
    },
    {
     "ar": "(0+10)*(1+ε)*",
     "en": "(0+10)*(1+ε)*",
     "ok": false,
     "why": "وجود النجمة على القوس الأخير يسمح بتكرار الآحاد في النهاية وتوليد 111 أو 1111 مما يكسر الشرط."
    },
    {
     "ar": "(0+101)*(0+ε)",
     "en": "(0+101)*(0+ε)",
     "ok": false,
     "why": "هذا التعبير يقيد النمط بـ 101 ويفشل في توليد سلاسل صالحة مثل 000 أو 0100."
    },
    {
     "ar": "(1+010)*(1+ε)",
     "en": "(1+010)*(1+ε)",
     "ok": false,
     "why": "يبدأ بـ 1* غير مقيدة فيسمح بتجاورات عشوائية متعددة للآحاد."
    }
   ],
   "ref": "L4-S008",
   "tip": "لتحييد تجاور الآحاد: نربط كل 1 بـ 0 إجباري (10)، ثم نتحكم بنهاية السلسلة بـ (1+ε) لضمان عدم تجاوز الحد الأقصى المطلوب."
  },
  {
   "n": 80,
   "type": "mcq",
   "q_ar": "إذا كانت L1 = {w ∈ {t,r}* | w لا تحتوي على 'tr'} و L2 = {w ∈ {t,r}* | w تحتوي على 'tr'}. ما هو الفرق بين الحد الأدنى لعدد الحالات للـ DFA المقابل لـ L1 والـ DFA المقابل لـ L2؟",
   "q_en": "L1 = {w | w does not contain the string tr}, L2 = {w | w does contain the string tr}. Given Σ = {t, r}, the difference of the minimum number of states required to form L1 and L2?",
   "opts": [
    {
     "ar": "0 (كلاهما يحتاج نفس عدد الحالات بالضبط وهو 3 حالات)",
     "en": "0",
     "ok": true,
     "why": "اللغة L1 هي المتممة الدقيقة للغة L2 (أي L1 = L2̄)؛ وبناء DFA للمتممة ينتج ببساطة عن تبديل حالات القبول والرفض لنفس الآلة الأصلية دون إضافة أو حذف أي حالة، وبالتالي عدد الحالات متطابق والفرق = 0."
    },
    {
     "ar": "1 حالة",
     "en": "1",
     "ok": false,
     "why": "عكس حالات القبول في DFA لا يغير عدد حالات الآلة إطلاقاً."
    },
    {
     "ar": "2 حالتان",
     "en": "2",
     "ok": false,
     "why": "الآلتان تمتلكان نفس جدول الانتقالات تماماً وتختلفان فقط في مجموعة F."
    },
    {
     "ar": "لا يمكن تحديده",
     "en": "Cannot be said",
     "ok": false,
     "why": "محدد رياضياً بدقة وثابت دائماً لأي لغة ومتممتها."
    }
   ],
   "ref": "L3-S011",
   "tip": "مبرهنة امتحانية هامة: أي لغة منتظمة L ومتممتها L̄ يمتلكان نفس عدد حالات الـ DFA الأصغري الأدنى تماماً (Minimal DFA State Count is identical)."
  },
  {
   "n": 81,
   "type": "mcq",
   "q_ar": "في DFA مكتمل مكون من 3 حالات يتعرف على اللغة L = {w ∈ {0,1}* | w تنتهي بـ '00'}، ما هو عدد الانتقالات الخارجة الإجمالية في مخطط الانتقال؟",
   "q_en": "Predict the number of transitions required to automate the following language using only 3 states: L = {w | w ends with 00}",
   "opts": [
    {
     "ar": "6 انتقالات (انتقالان لكل حالة × 3 حالات، أو 3 انتقالات أمامية محددة)",
     "en": "6 transitions (or 3 forward track transitions)",
     "ok": true,
     "why": "في الـ DFA المكتمل، يخرج من كل حالة انتقال واحد محدد لكل رمز في الأبجدية: عدد الانتقالات الكلي = عدد الحالات |Q| × حجم الأبجدية |Σ| = 3 × 2 = 6 أسهم في المخطط (وفي صياغات بعض الأسئلة تشير لـ 3 انتقالات مسار أمامي رئيسي)."
    },
    {
     "ar": "انتقالان (2)",
     "en": "2",
     "ok": false,
     "why": "انتقالان لا يكفيان لربط 3 حالات في أوتوماتون مكتمل."
    },
    {
     "ar": "4 انتقالات (4)",
     "en": "4",
     "ok": false,
     "why": "في أوتوماتون ثنائي من 3 حالات، العدد الإجمالي للانتقالات الكاملة هو 6."
    },
    {
     "ar": "لا يمكن التنبؤ به",
     "en": "Cannot be said",
     "ok": false,
     "why": "عدد الانتقالات محكوم بقاعدة جبرية دقيقة |Q| × |Σ|."
    }
   ],
   "ref": "L3-S009",
   "tip": "قانون عدد الانتقالات في أي Complete DFA: Total Transitions = |Q| × |Σ| دائماً وأبداً."
  },
  {
   "n": 82,
   "type": "mcq",
   "q_ar": "ما هو الحد الأدنى لعدد الحالات لبناء DFA يقبل جميع السلاسل فوق {a, b} التي تحتوي على حرفي 'a' بالضبط وعلى الأقل حرفي 'b'؟",
   "q_en": "The total number of states to build the given language using DFA: L = {w | w has exactly 2 a’s and at least 2 b’s}",
   "opts": [
    {
     "ar": "12 حالة في آلة الضرب المباشر (أو 10 حالات بعد دمج حالات الفخ)",
     "en": "10 (or 12 in full product grid)",
     "ok": true,
     "why": "الـ DFA يحتاج لتتبع عدادين مستقلين عبر جداء الضرب الديكارتي:\n- عدد 'a' بالضبط 2: يحتاج 4 حالات {0a, 1a, 2a, >2a ميتة}.\n- عدد 'b' على الأقل 2: يحتاج 3 حالات {0b, 1b, ≥2b}.\nإجمالي الحالات في شبكة الجداء = 4 × 3 = 12 حالة (وفي حال دمج حالات الرفض لـ >2a تصبح 10 حالات)."
    },
    {
     "ar": "11 حالة",
     "en": "11",
     "ok": false,
     "why": "الضرب الديكارتي للشبكة ينتج 12 حالة أو 10 حالات عند دمج الفخ."
    },
    {
     "ar": "13 حالة",
     "en": "13",
     "ok": false,
     "why": "13 حالة بناء غير مصغر وتتجاوز فضاء الضرب الديكارتي."
    },
    {
     "ar": "5 حالات (2 + 3)",
     "en": "5",
     "ok": false,
     "why": "الجمع البسيط لا يكفي لأن الآلة يجب أن تتتبع العدادين معاً في نفس الوقت بالتوافيق والتباديل (ضرب الحالات)."
    }
   ],
   "ref": "L3-S011",
   "tip": "تقنية الـ Product Automaton: عند وجود شرطين مستقلين (A و B)، فإن عدد حالات الـ DFA الناتج هو جداء ضرب حالات الشرط الأول في حالات الشرط الثاني (|Q_A| × |Q_B|)."
  }
 ],
 "teacher_ar": "أ. وائل الوظاف — عملي دفعة سابقة"
});
