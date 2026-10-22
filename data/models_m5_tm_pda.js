window.TOC_MODELS = window.TOC_MODELS || [];
window.TOC_MODELS.push({
  "id": "m5",
  "title": "نموذج 5: آلات تورنغ وأوتوماتون المكدس (TM & PDA)",
  "title_ar": "النموذج الخامس الشامل — آلات تورنغ وأوتوماتون المكدس وهرم اللغات",
  "short_label": "نموذج 5 · TM & PDA",
  "origin_label": "نموذج الاختبار النهائي المتقدم 2026",
  "teacher": "د. رويدا العامري",
  "questions": [
    {
      "n": 1,
      "ref": "L9-S002",
      "q": "Who invented the Turing Machine, and in which year?",
      "q_ar": "من هو مخترع آلة تورنغ وفي أي عام طُرحت لأول مرة؟",
      "answer": 0,
      "options": [
        "Alan Turing in 1936",
        "John von Neumann in 1945",
        "Noam Chomsky in 1956",
        "Stephen Kleene in 1951"
      ],
      "options_ar": [
        "آلان تورنغ عام 1936",
        "جون فون نيومان عام 1945",
        "نعوم تشومسكي عام 1956",
        "ستيفن كلين عام 1951"
      ],
      "why": "طرح آلان تورنغ ورقة بحثية رائدة عام 1936 تضمنت الآلة التي سماها a-machine لوضع تعريف رياضي دقيق لمفهوم الخوارزمية.",
      "distractor_analysis": [
        null,
        "جون فون نيومان صاغ معمارية الحواسيب ذات البرامج المخزنة عام 1945 وليس آلة تورنغ.",
        "نعوم تشومسكي وضع تصنيف هرم اللغات والقواعد التوليدية في الخمسينات.",
        "ستيفن كلين برهن نظرية التكافؤ بين التعابير المنتظمة والآلات المنتهية."
      ],
      "tip": "سؤال تاريخي تأسيسي يتكرر في مقدمات الاختبارات النصفية والنهائية."
    },
    {
      "n": 2,
      "ref": "L9-S008",
      "q": "What are the three core components of a standard Turing Machine?",
      "q_ar": "ما هي المكونات الثلاثة الجوهرية لآلة تورنغ القياسية؟",
      "answer": 1,
      "options": [
        "Input tape, Stack, and Output tape",
        "Infinite Tape, Read/Write Head, and Finite State Control",
        "ALU, Registers, and Program Counter",
        "State diagram, Grammar rules, and Parse Tree"
      ],
      "options_ar": [
        "شريط دخل، ومكدس، وشريط خرج",
        "شريط لانهائي، ورأس قراءة/كتابة متحرك، ووحدة تحكم بالحالات المنتهية",
        "وحدة الحساب والمنطق، والمسجلات، وعداد البرنامج",
        "مخطط الحالات، وقواعد القواعد اللغوية، وشجرة الإعراب"
      ],
      "why": "تتكون آلة تورنغ من: 1) شريط مقسم لخلايا يمتد لانهائياً، 2) رأس يقرأ ويكتب ويتحرك يميناً ويساراً، 3) وحدة تحكم منتهية بحالات وجدول انتقالات.",
      "distractor_analysis": [
        "وجود المكدس خاص بآلة PDA وليس آلة تورنغ التي تعتمد على شريط قراءة وكتابة حر.",
        null,
        "المسجلات و ALU مكونات عتادية للمعالجات الدقيقة وليست النموذج المجرد لآلة تورنغ.",
        "شجرة الإعراب وقواعد اللغة أدوات نحوية توليدية وليست مكونات آلة أوتوماتون."
      ],
      "tip": "ركز على ميزتين حصريتين لآلة تورنغ: الرأس يكتب (Write) والرأس يتحرك بالاتجاهين (Left/Right)."
    },
    {
      "n": 3,
      "ref": "L9-S018",
      "q": "What is the formal mathematical signature of the transition function delta in a standard Turing Machine?",
      "q_ar": "ما هي الصيغة الرياضية الرسمية لدالة الانتقال delta في آلة تورنغ؟",
      "answer": 0,
      "options": [
        "delta : Q x Gamma -> Q x Gamma x {L, R}",
        "delta : Q x Sigma -> Q",
        "delta : Q x (Sigma U {epsilon}) x Gamma -> Q x Gamma*",
        "delta : Q x Gamma -> Q x {L, R}"
      ],
      "options_ar": [
        "delta : Q × Γ → Q × Γ × {L, R}",
        "delta : Q × Σ → Q",
        "delta : Q × (Σ ∪ {ε}) × Γ → Q × Γ*",
        "delta : Q × Γ → Q × {L, R}"
      ],
      "why": "تأخذ دالة الانتقال في آلة تورنغ (الحالة الحالية من Q، ورمز الشريط المقروء من Γ) وتنتج (الحالة التالية، رمز يكتب مكانه على الشريط، واتجاه الحركة L أو R).",
      "distractor_analysis": [
        null,
        "هذه دالة الانتقال لآلة DFA حيث لا كتابة ولا حركة رأس بل تغيير حالة فقط.",
        "هذه دالة الانتقال لآلة الأوتوماتون ذو المكدس PDA حيث تشمل سحب ودفع في المكدس.",
        "هذه الصيغة تنقصها خطوة كتابة الرمز الجديد على الشريط."
      ],
      "tip": "لاحظ وجود ثلاثة عناصر في ناتج الدالة: حالة جديدة + رمز مكتوب جديد + اتجاه حركة (L أو R)."
    },
    {
      "n": 4,
      "ref": "L9-S005",
      "q": "Which of the following languages CANNOT be recognized by a PDA, but CAN be recognized by a Turing Machine?",
      "q_ar": "أي اللغات التالية يستحيل على أوتوماتون المكدس PDA التعرف عليها، بينما تتعرف عليها آلة تورنغ بسهولة؟",
      "answer": 2,
      "options": [
        "L = {a^n b^n | n >= 0}",
        "L = {w w^R | w in {a, b}*}",
        "L = {a^n b^n c^n | n >= 0}",
        "L = {w | w contains an even number of 0s}"
      ],
      "options_ar": [
        "L = {a^n b^n | n >= 0}",
        "L = {w w^R | w in {a, b}*}",
        "L = {a^n b^n c^n | n >= 0}",
        "L = {سلاسل تحتوي عدداً زوجياً من الأصفار}"
      ],
      "why": "اللغة a^n b^n c^n تتطلب مقارنة ثلاثة حدود متساوية، والمكدس الواحد في PDA يفرغ بعد مقارنة a مع b ولا يتبقى فيه ما يقارن c، بينما آلة تورنغ تتحرك بحرية على الشريط وتضع علامات شطب.",
      "distractor_analysis": [
        "لغة a^n b^n يقبلها PDA بسهولة بدفع a وسحبها مع كل b.",
        "لغة الباليندروم المتعاكس w w^R هي لغة خالية من السياق قياسية يقبلها PDA.",
        null,
        "هذه لغة منتظمة بسيطة يقبلها DFA بحالتين فقط."
      ],
      "tip": "تذكر دائماً: لغة a^n b^n يقبلها PDA، أما a^n b^n c^n فلا يقبلها إلا آلة تورنغ."
    },
    {
      "n": 5,
      "ref": "L9-S028",
      "q": "In which scenario does a Turing Machine REJECT an input string?",
      "q_ar": "في أي السيناريوهات التالية ترفض آلة تورنغ كلمة الدخل؟",
      "answer": 3,
      "options": [
        "Only when it encounters the blank symbol",
        "Only when the input string is empty (epsilon)",
        "When it halts in a final state",
        "When it halts in a non-final state, or loops infinitely without accepting"
      ],
      "options_ar": [
        "فقط عند مصادفة رمز الفراغ",
        "فقط عندما تكون كلمة الدخل فارغة",
        "عندما تتوقف في حالة نهائية",
        "عندما تتوقف في حالة غير نهائية (لغياب انتقال صالح)، أو عندما تدخل في حلقة لانهائية دون قبول"
      ],
      "why": "رفض السلسلة في آلة تورنغ يحدث إما صراحة بالتوقف (Halting) في حالة غير مقبولة، أو ضمناً بالدخول في حلقة تكرار لانهائية تمنع بلوغ حالة القبول للأبد.",
      "distractor_analysis": [
        "مصادفة رمز الفراغ أمر طبيعي يمثل نهاية نص الدخل وغالباً ما تقفز بعده الآلة للقبول.",
        "الكلمة الفارغة قد تكون مقبولة إذا كانت الحالة الابتدائية هي حالة قبول.",
        "التوقف في حالة نهائية هو تعريف القبول (Accept) وليس الرفض.",
        null
      ],
      "tip": "احذر فخ المقارنة مع DFA: في آلة تورنغ الدخول في حلقة لانهائية (Infinite Loop) يعتبر نوعاً من عدم القبول/الرفض."
    },
    {
      "n": 6,
      "ref": "L9-S007",
      "q": "What is the famous problem proved by Alan Turing to be undecidable?",
      "q_ar": "ما هي المسألة الشهيرة التي برهن آلان تورنغ رياضياً استحالة حلها بخوارزمية عامة (Undecidable)؟",
      "answer": 1,
      "options": [
        "The Traveling Salesperson Problem",
        "The Halting Problem",
        "Shortest Path in a Graph",
        "Sorting an array of n numbers"
      ],
      "options_ar": [
        "مسألة البائع المتجول",
        "مشكلة التوقف (The Halting Problem)",
        "أقصر مسار في رسم بياني",
        "فرز مصفوفة من n عنصراً"
      ],
      "why": "برهن تورنغ عبر برهان التناقض والتقطير (Diagonalization) أن مشكلة التوقف (Halting Problem) مسألة غير قابلة للحسم (Undecidable).",
      "distractor_analysis": [
        "مسألة البائع المتجول مسألة صعبة NP-hard لكنها قابلة للحل نظرياً بخوارزميات منتهية الوقت.",
        null,
        "أقصر مسار يُحل بخوارزمية ديكسترا بكفاءة زمنية متعددة الحدود O(V^2).",
        "الفرز مسألة أساسية تُحل بخوارزميات سريعة في زمن O(n log n)."
      ],
      "tip": "The Halting Problem هي النموذج الأيقوني للمسائل غير القابلة للتقرير في تاريخ علم الحاسوب."
    },
    {
      "n": 7,
      "ref": "L9-S009",
      "q": "What is the relationship between the input alphabet Sigma and the tape alphabet Gamma in a Turing Machine?",
      "q_ar": "ما هي العلاقة الرياضية بين أبجدية الدخل Sigma وأبجدية الشريط Gamma في آلة تورنغ؟",
      "answer": 0,
      "options": [
        "Sigma is a proper subset of Gamma, and the blank symbol belongs to Gamma but not to Sigma",
        "Gamma is a proper subset of Sigma",
        "Sigma and Gamma must be completely disjoint sets",
        "Sigma and Gamma are always identical in every Turing Machine"
      ],
      "options_ar": [
        "أبجدية الدخل Sigma مجموعة جزئية حقيقية من Gamma، ورمز الفراغ ينتمي لـ Gamma ولا ينتمي لـ Sigma",
        "أبجدية الشريط Gamma مجموعة جزئية من أبجدية الدخل Sigma",
        "أبجديتا الدخل والشريط مجموعتان منفصلتان تماماً",
        "أبجديتا الدخل والشريط متطابقتان دائماً في كل آلة تورنغ"
      ],
      "why": "شريط آلة تورنغ يحوي رموز الدخل بالإضافة إلى رمز الفراغ Blank ⊔ ورموز العلامات الوسيطة مثل X, Y، لذلك دائماً Sigma ⊂ Gamma و ⊔ ∈ Gamma و ⊔ ∉ Sigma.",
      "distractor_analysis": [
        null,
        "العكس تماماً: شريط العمل يحوي رموزاً أكثر بكثير من رموز الدخل الأصلية.",
        "غير صحيح لأن رموز الدخل تُكتب في البداية على الشريط فهي جزء منه حتماً.",
        "مستحيل لأن رمز الفراغ ⊔ لا يمكن أن يكون ضمن أبجدية الدخل الصافية."
      ],
      "tip": "تذكر القاعدة: Sigma ⊂ Gamma دائماً، والرمز Blank موجود في Gamma حصراً."
    },
    {
      "n": 8,
      "ref": "PDA-S001",
      "q": "What kind of memory mechanism allows a Pushdown Automaton (PDA) to recognize context-free languages?",
      "q_ar": "ما هي آلية الذاكرة التي تمكن أوتوماتون المكدس PDA من التعرف على اللغات الخالية من السياق؟",
      "answer": 2,
      "options": [
        "Random Access Memory (RAM)",
        "Infinite 2D Grid Tape",
        "A Last-In, First-Out (LIFO) Stack",
        "A First-In, First-Out (FIFO) Queue"
      ],
      "options_ar": [
        "ذاكرة وصول عشوائي (RAM)",
        "شريط شبكي ثنائي الأبعاد لانهائي",
        "مكدس يعمل بمبدأ الوارد آخراً يخرج أولاً (LIFO Stack)",
        "طابور يعمل بمبدأ الوارد أولاً يخرج أولاً (FIFO Queue)"
      ],
      "why": "يعتمد PDA في تعريفه وقوته على مكدس Stack يتيح عمليتي الدفع Push والسحب Pop من القمة حصراً بنظام LIFO.",
      "distractor_analysis": [
        "ذاكرة الوصول العشوائي ميزة الحواسيب العامة وآلات تورنغ ذات الوصول الحر وليست لمكدس PDA المقيد.",
        "الشريط ميزة آلة تورنغ وليس PDA.",
        null,
        "الطابور FIFO لو أضيف لآلة منتهية لحولها فوراً إلى قوة مكافئة لآلة تورنغ، بينما PDA مقيد بمكدس LIFO فقط."
      ],
      "tip": "Pushdown Automaton = Finite Automaton + Single LIFO Stack."
    },
    {
      "n": 9,
      "ref": "PDA-S002",
      "q": "Why is non-determinism strictly necessary for recognizing the palindrome language L = {v v^R} using a PDA?",
      "q_ar": "لماذا يُعد عدم الحتمية (Non-determinism) ضرورياً وحتمياً للتعرف على لغة الباليندروم المتعاكس L = {v v^R} بواسطة PDA؟",
      "answer": 0,
      "options": [
        "Because the machine must guess the midpoint of the string without an explicit separator symbol",
        "Because palindromes can only be accepted by empty stack, not final state",
        "Because a deterministic PDA cannot push symbols onto the stack",
        "Because the alphabet must contain at least three distinct symbols"
      ],
      "options_ar": [
        "لأن الآلة تحتاج لتخمين نقطة منتصف الكلمة لعدم وجود رمز فاصل يحدد أين ينتهي النصف الأول ويبدأ المعكوس",
        "لأن الباليندروم لا يُقبل إلا بالمكدس الفارغ وليس بالحالة النهائية",
        "لأن أوتوماتون المكدس الحتمي لا يستطيع دفع الرموز إلى المكدس",
        "لأن الأبجدية يجب أن تحوي ثلاثة رموز مختلفة على الأقل"
      ],
      "why": "في لغة v v^R (مثل abba)، لا يوجد حرف وسط فاصل (كالحرف c في v c v^R)؛ لذا تحتاج الآلة لانتقال غير حتمي lambda, lambda -> lambda لتخمين متى تتوقف عن الدفع وتبدأ السحب.",
      "distractor_analysis": [
        null,
        "القبول بالمكدس الفارغ والحالة النهائية متكافئان تماماً في PDA.",
        "الـ DPDA الحتمي يدفع ويسحب بطبيعة الحال، لكنه يعجز عن تخمين نقطة المنتصف.",
        "اللغة معرفة حتى على أبجدية ثنائية بسيطة {a, b} ولا تشترط ثلاثة رموز."
      ],
      "tip": "سؤال ذكي جداً: وجود رمز وسط فاصل مثل w#w^R يجعلها لغة حتمية DPDA، أما غياب الفاصل فيجعلها غير حتمية NPDA حتماً."
    },
    {
      "n": 10,
      "ref": "L9-S023",
      "q": "What distinguishes a Deterministic Turing Machine (DTM) from a Non-Deterministic one (NTM)?",
      "q_ar": "ما الذي يميز آلة تورنغ الحتمية (DTM) عن غير الحتمية (NTM)؟",
      "answer": 3,
      "options": [
        "A DTM can only move its head right, never left",
        "An NTM has an infinite number of states",
        "A DTM has multiple tapes while an NTM has one tape",
        "For every state and tape symbol in a DTM, there is at most one defined transition"
      ],
      "options_ar": [
        "الآلة الحتمية تتحرك يميناً فقط ولا تتحرك يساراً أبداً",
        "الآلة غير الحتمية تملك عدداً لانهائياً من الحالات",
        "الآلة الحتمية تملك عدة أشرطة بينما غير الحتمية تملك شريطاً واحداً",
        "لكل زوج من (الحالة، ورمز الشريط) في الآلة الحتمية يوجد انتقال واحد محدد على الأكثر"
      ],
      "why": "تعريف الحتمية الرياضي الدقيق: الدالة delta أحادية القيمة؛ لكل زوج (حالة، رمز) انتقال واحد فقط على الأكثر.",
      "distractor_analysis": [
        "آلة تورنغ الحتمية تتحرك يساراً ويميناً كلاهما.",
        "كلا النوعين يملكان مجموعة حالات منتهية Q منتهية الحجم بالضرورة.",
        "تعدد الأشرطة Multi-tape نموذج مكافئ مستقل ولا علاقة له بالحتمية.",
        null
      ],
      "tip": "معلومة هامة: DTM و NTM متكافئتان تماماً في القوة؛ أي لغة تقبلها NTM يمكن لـ DTM محاكاتها وقبولها."
    }
  ]
});
