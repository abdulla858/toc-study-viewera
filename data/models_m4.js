window.TOC_MODELS = window.TOC_MODELS || [];

window.TOC_MODELS.push({
  "id": "m4",
  "kind": "صح/خطأ + مقالي",
  "title_ar": "أسئلة صح/خطأ ومقالية (حل كتابي ورسومي)",
  "origin_ar": "نموذج محاكاة امتحاني تحليلي مولّد ومطوّر بالذكاء الاصطناعي وفق تصريح وتوجيهات د. أيهم الأكحلي لطبيعة الاختبار النهائي (أسئلة صح/خطأ ومسائل مقالية تفكيكية بخطوات الحل) من صلب السلايدات.",
  "questions": [
    {
      "n": 1,
      "type": "tf",
      "q_ar": "الأبجدية (Alphabet Σ) في نظرية الحوسبة يمكن أن تكون مجموعة لانهائية من الرموز طالما كانت الرموز محددة بوضوح.",
      "q_en": "In Theory of Computation, an alphabet Σ can be an infinite set of symbols as long as the symbols are clearly defined.",
      "graphic": false,
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "غير صحيح، لأن اشتراط كون الأبجدية مجموعة منتهية (Finite) هو ركن أساسي لا غنى عنه في تعريف النماذج الحسابية الصورية."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "صحيح، فالأبجدية Σ تُعرّف رياضياً بأنها مجموعة منتهية وغير فارغة (Finite, non-empty set) من الرموز؛ والسلاسل أو اللغات المشتقة منها هي التي قد تكون لانهائية."
        }
      ],
      "ref": "L1-S013",
      "tip": "الأبجدية دائماً مجموعة منتهية وغير فارغة، بينما اللغات المشتقة منها يمكن أن تكون لانهائية."
    },
    {
      "n": 2,
      "type": "tf",
      "q_ar": "إذا كانت السلسلة u = aba والسلسلة v = bab، فإن عملية دمج السلاسل (Concatenation) تبديلية، أي أن uv = vu دائماً.",
      "q_en": "If string u = aba and string v = bab, string concatenation is commutative, meaning uv = vu always holds.",
      "graphic": false,
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "غير صحيح، فالتبديل لا ينطبق على دمج السلاسل إلا في حالات استثنائية (كأن تكون السلسلتان متطابقتين أو إحداهما ε)."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "صحيح، فعملية دمج السلاسل ليست تبديلية عموماً (uv ≠ vu)؛ ففي هذا المثال uv = ababab بينما vu = bababa، وهما سلسلتان مختلفتان تماماً."
        }
      ],
      "ref": "L1-S020",
      "tip": "دمج السلاسل تجميعي (Associative) u(vw)=(uv)w لكنه ليس تبديلياً (Not Commutative)."
    },
    {
      "n": 3,
      "type": "tf",
      "q_ar": "المجموعة الفارغة ∅ (اللغة الفارغة) تطابق تماماً اللغة المحتوية على السلسلة الفارغة {ε} ولهما نفس الخصائص الحجمية والرياضية.",
      "q_en": "The empty set ∅ (empty language) is identical to the language containing the empty string {ε} and they share the same cardinality and mathematical properties.",
      "graphic": false,
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "غير صحيح، الخلط بين المجموعة الخالية ومجموعة تحوي عنصراً واحداً هو السلسلة الخالية خطأ مفاهيمي شائع."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "صحيح، فاللغة الفارغة ∅ لا تحوي أي سلسلة على الإطلاق وحجمها |∅| = 0، بينما {ε} هي لغة تحوي عنصراً واحداً هو السلسلة الفارغة وحجمها |{ε}| = 1."
        }
      ],
      "ref": "L1-S023",
      "tip": "∅ لا سلاسل فيها إطلاقاً (|∅|=0)، بينما {ε} لغة تحوي عنصراً واحداً هو ε (|{ε}|=1)."
    },
    {
      "n": 4,
      "type": "tf",
      "q_ar": "في الأوتوماتون المنتهي M = (Q, Σ, δ, q0, F)، يُشترط أن تكون مجموعة الحالات النهائية F مجموعة غير فارغة (F ≠ ∅) ليُعد النموذج صحيحاً.",
      "q_en": "In a finite automaton M = (Q, Σ, δ, q0, F), the set of final states F must strictly be non-empty (F ≠ ∅) for the model to be formally valid.",
      "graphic": false,
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "غير صحيح، فالآلة التي لا تحوي أي حالة قبول (F = ∅) هي نموذج رياضي صحيح تماماً يقبل اللغة الفارغة L(M) = ∅."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "صحيح، فمجموعة الحالات النهائية F هي أي مجموعة جزئية من Q (F ⊆ Q)، ويمكن أن تكون فارغة (F = ∅) أو تحوي حالة واحدة أو حالات متعددة أو كل الحالات Q."
        }
      ],
      "ref": "L2-S007",
      "tip": "الحالات النهائية F ⊆ Q يمكن أن تكون ∅ (لغة فارغة)، أو تحوي حالة واحدة، أو حالات متعددة، أو حتى جميع الحالات Q."
    },
    {
      "n": 5,
      "type": "tf",
      "q_ar": "الفرق الأساسي بين DFA و NFA هو أن DFA يحدد انتقالاً واحداً وحيداً لكل رمز من كل حالة دون السماح بانتقالات ε، بينما NFA يسمح بصفر أو أكثر من الانتقالات وبالانتقال التلقائي عبر ε.",
      "q_en": "The fundamental difference between a DFA and an NFA is that a DFA specifies exactly one transition per symbol from each state without allowing ε-transitions, whereas an NFA allows zero, one, or more transitions as well as spontaneous ε-transitions.",
      "graphic": false,
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "صحيح، فدالة الانتقال في DFA هي δ: Q × Σ → Q (دالة كاملة وحيدة القيمة)، بينما في NFA هي δ: Q × (Σ ∪ {ε}) → 2^Q."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "غير صحيح، فهذا هو التمييز الرياضي والشكلي الدقيق بين الأوتوماتون الحتمي وغير الحتمي."
        }
      ],
      "ref": "L2-S011",
      "tip": "DFA: انتقال واحد بالضبط لكل رمز ولا وجود لـ ε. NFA: خيارات متعددة وانتقالات ε ممكنة."
    },
    {
      "n": 6,
      "type": "tf",
      "q_ar": "دالة الانتقال δ في أوتوماتون الحالة المنتهية الحتمي (DFA) هي دالة تامة (Total Function) يجب أن تكون معرفة لكل زوج من الحالة ورمز الإدخال (q, a) ∈ Q × Σ.",
      "q_en": "The transition function δ in a Deterministic Finite Automaton (DFA) is a total function that must be defined for every pair of state and input symbol (q, a) ∈ Q × Σ.",
      "graphic": false,
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "صحيح، ففي DFA القياسي لا يمكن أن يكون هناك رمز بدون انتقال خارج من الحالة؛ لكل حالة ولكل رمز من Σ يوجد مسار واحد محدد تماماً إلى حالة في Q."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "غير صحيح، فإذا كانت هناك انتقالات مفقودة تصبح الدالة جزئية (Partial) ويخرج النموذج عن التعريف القياسي لـ DFA الكامل."
        }
      ],
      "ref": "L3-S004",
      "tip": "في جدول انتقال DFA، لا توجد أي خلية فارغة؛ كل خلية تحوي حالة واحدة بالضبط."
    },
    {
      "n": 7,
      "type": "tf",
      "q_ar": "إذا مرت آلة DFA بحالة قبول (Accept State) أثناء قراءة رموز السلسلة، ولكنها استقرت في حالة غير نهائية بعد قراءة آخر رمز، فإن السلسلة تُعد مقبولة.",
      "q_en": "If a DFA passes through an accept state while reading the symbols of a string, but ends in a non-final state after reading the last symbol, the string is considered accepted.",
      "graphic": false,
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "غير صحيح، فالحالات الوسيطة التي تمر بها الآلة أثناء القراءة لا تحدد قرار القبول إطلاقاً."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "صحيح، فقرار قبول السلسلة في DFA يعتمد حصراً على الحالة التي تستقر فيها الآلة بعد انتهاء جميع رموز السلسلة؛ فإن كانت الحالة الأخيرة ليست من F ترفض السلسلة قطيعاً."
        }
      ],
      "ref": "L3-S019",
      "tip": "القبول في DFA يُحسم فقط عند اكتمال قراءة السلسلة: إذا كانت الحالة الأخيرة ∈ F تُقبل، وإلا تُرفض."
    },
    {
      "n": 8,
      "type": "tf",
      "q_ar": "يمكن لآلة DFA أن تمتلك أكثر من حالة بداية واحدة (q0) في نفس الوقت لتسهيل بدء المعالجة من مواقع مختلفة.",
      "q_en": "A DFA can possess more than one initial start state (q0) simultaneously to facilitate starting processing from different locations.",
      "graphic": false,
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "غير صحيح، فتعدد حالات البداية غير مسموح به في DFA وهو ميزة خاصة ببعض تعميمات NFA فقط."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "صحيح، فحالة البداية q0 في الخماسية الرسمية لـ DFA هي عنصر وحيد وفريد (q0 ∈ Q)، ولا يمكن لآلة DFA أن تبدأ من أكثر من حالة."
        }
      ],
      "ref": "L3-S035",
      "tip": "حالة البداية q0 في DFA دائماً واحدة فقط، بينما حالات النهاية F يمكن أن تكون صفراً أو واحدة أو أكثر."
    },
    {
      "n": 9,
      "type": "tf",
      "q_ar": "في التعبيرات النمطية (Regular Expressions)، تتمتع عملية الإغلاق النجمي (Kleene Star *) بأعلى أولوية تنفيذ تليها عملية الدمج (Concatenation) ثم عملية الاتحاد (+).",
      "q_en": "In Regular Expressions, the Kleene Star operator (*) has the highest precedence, followed by concatenation, and then union (+).",
      "graphic": false,
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "صحيح، ترتيب الأسبقية القياسي للتعبيرات النمطية هو: الأقواس () أولاً، ثم النجمة (*)، ثم الدمج (التجاور)، ثم الاتحاد (+) أو (|)."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "غير صحيح، فهذا الترتيب القياسي معتمد رياضياً لتجنب الإفراط في كتابة الأقواس."
        }
      ],
      "ref": "L4-S005",
      "tip": "أولوية العمليات في RegEx: (1) الأقواس ()، (2) النجمة *، (3) الدمج (التجاور)، (4) الاتحاد +."
    },
    {
      "n": 10,
      "type": "tf",
      "q_ar": "التعبيران النمطيان (a+b)* و (a*b*)* يصفان نفس اللغة ويكافئان لغة جميع السلاسل المكونة من الحرفين a و b.",
      "q_en": "The regular expressions (a+b)* and (a*b*)* describe the exact same language and are equivalent to the language of all strings over {a, b}.",
      "graphic": false,
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "صحيح، فالتعبير (a*b*)* يتيح تكرار أي مقاطع من a و b بأي طول وأي ترتيب، مما يولد مجموعة كل السلاسل {a, b}* تماماً مثل (a+b)*."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "غير صحيح، فكلا التعبيرين يولد لغة المجموعة الشاملة Σ* = {a, b}* بدقة تامة."
        }
      ],
      "ref": "L4-S012",
      "tip": "متطابقات شهيرة: (a+b)* ≡ (a*b*)* ≡ (a*+b*)* ≡ (a+b*)* = {a, b}*."
    },
    {
      "n": 11,
      "type": "tf",
      "q_ar": "الرموز الطرفية (Terminals T) في القواعد الصورية هي رموز أساسية تظهر في السلاسل النهائية للغة ولا يمكن استبدالها أو تطبيق قواعد إنتاج عليها.",
      "q_en": "Terminal symbols (T) in a formal grammar are atomic symbols that appear in the final strings of the language and cannot be replaced or expanded by production rules.",
      "graphic": false,
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "صحيح، فالرموز الطرفية تمثل أحرف الأبجدية النهائية (T = Σ)، ويتوقف الاشتقاق تماماً عند الوصول إلى سلسلة مكونة كلياً من رموز طرفية (w ∈ T*)."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "غير صحيح، فالرموز غير الطرفية (Variables V) هي التي تُستبدل، بينما الرموز الطرفية ثابتة ولا تُستبدل."
        }
      ],
      "ref": "L5-S008",
      "tip": "الرموز غير الطرفية (V) متغيرات تُستبدل أثناء الاشتقاق، بينما الرموز الطرفية (T) هي حروف السلسلة النهائية."
    },
    {
      "n": 12,
      "type": "tf",
      "q_ar": "تُسمى القواعد خطية (Linear Grammar) إذا وفقط إذا احتوى الطرف الأيمن لكل قاعدة إنتاج على متغيرين غير طرفيين (Non-terminals) على الأقل.",
      "q_en": "A grammar is called a Linear Grammar if and only if the right-hand side of every production rule contains at least two non-terminal variables.",
      "graphic": false,
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "غير صحيح، فاحتواء الطرف الأيمن على متغيرين أو أكثر يخرج القواعد عن كونها خطية."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "صحيح، فالقواعد الخطية تُعرّف بأن الطرف الأيمن لكل قاعدة إنتاج يحوي متغيراً غير طرفي واحداً على الأكثر (at most one non-terminal)."
        }
      ],
      "ref": "L5-S019",
      "tip": "القواعد الخطية: الطرف الأيمن يحوي متغيراً واحداً على الأكثر (مثل A → w1 B w2 أو A → w حيث w ∈ T*)."
    },
    {
      "n": 13,
      "type": "tf",
      "q_ar": "القواعد المنتظمة (Regular Grammar) يمكن أن تخلط بحرية بين قواعد خطية يمنى (Right-Linear) وقواعد خطية يسرى (Left-Linear) في نفس القواعد G وتبقى منتظمة.",
      "q_en": "A Regular Grammar can freely mix right-linear and left-linear production rules within the same grammar G and remain a regular grammar.",
      "graphic": false,
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": false,
          "why": "غير صحيح، فالخلط بين القواعد الخطية اليمنى واليسرى داخل نفس الجرامر يلغي خاصية الانتظام."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": true,
          "why": "صحيح، فالقواعد تكون منتظمة إذا كانت إما جميع قواعدها خطية يمنى (Right-Linear) أو جميع قواعدها خطية يسرى (Left-Linear)؛ وخلطهما ينتج قواعد خطية عامة تولد لغات غير منتظمة مثل {a^n b^n}."
        }
      ],
      "ref": "L5-S024",
      "tip": "القواعد المنتظمة إما يمنى بالكامل أو يسرى بالكامل؛ الخلط بينهما ينتج لغات غير منتظمة (Non-Regular) كـ {a^n b^n}."
    },
    {
      "n": 14,
      "type": "tf",
      "q_ar": "كل لغة تولدها قواعد خطية يمنى (Right-Linear Grammar) هي لغة منتظمة (Regular Language) ويمكن تمثيلها بـ DFA مكافئ.",
      "q_en": "Every language generated by a right-linear grammar is a regular language and can be represented by an equivalent DFA.",
      "graphic": false,
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "صحيح، وفقاً للنظرية الأساسية لتكافؤ النماذج الصورية، فإن فئة اللغات المولدة بالقواعد الخطية اليمنى تطابق تماماً فئة اللغات المنتظمة المقبولة بآلات DFA/NFA."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "غير صحيح، فهذه نظرية مبرهنة تثبت تكافؤ القواعد المنتظمة مع آلات الحالة المنتهية والتعبيرات النمطية."
        }
      ],
      "ref": "L6-S036",
      "tip": "اللغات المنتظمة = اللغات المقبولة بـ DFA/NFA = لغات التعبيرات النمطية = اللغات المولدة بقواعد منتظمة."
    },
    {
      "n": 15,
      "type": "tf",
      "q_ar": "عند تحويل آلة DFA إلى قواعد خطية يمنى مكافئة، يُنشأ لكل انتقال δ(qi, a) = qj قاعدة إنتاج من الشكل qi → a qj، ولكل حالة قبول qk ∈ F تُضاف القاعدة qk → ε.",
      "q_en": "When converting a DFA into an equivalent right-linear grammar, for each transition δ(qi, a) = qj a production rule qi → a qj is created, and for each accept state qk ∈ F the rule qk → ε is added.",
      "graphic": false,
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "صحيح، فهذه هي خوارزمية البناء الرياضي المنهجي المعتمدة لتحويل أي DFA إلى Right-Linear Grammar مكافئة تماماً."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "غير صحيح، فهذا هو البناء المعياري الدقيق لتحويل انتقالات وحالات القبول في DFA إلى قواعد إنتاج صورية."
        }
      ],
      "ref": "L6-S046",
      "tip": "تحويل DFA إلى قواعد يمنى: الانتقال δ(A, a)=B يعطي A → aB، وحالة القبول C ∈ F تعطي C → ε."
    },
    {
      "n": 16,
      "type": "tf",
      "q_ar": "بالنظر إلى الرسم الموضح لآلة الـ DFA، الآلة تقبل السلسلة w = \"bba\" وترفض السلسلة w = \"bab\".",
      "q_en": "Given the DFA diagram shown, the machine accepts the string w = \"bba\" and rejects the string w = \"bab\".",
      "graphic": true,
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "صحيح: بتتبع \"bba\": q0 --b--> q0 --b--> q0 --a--> q1 ∈ F (مقبولة). وبتتبع \"bab\": q0 --b--> q0 --a--> q1 --b--> q0 ∉ F (مرفوضة)."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "غير صحيح، فمسارات التتبع مطابقة تماماً لانتقالات الرسم وتؤكد قبول الأولى ورفض الثانية."
        }
      ],
      "image_prompt": "Clean educational exam figure on pure white background, black ink textbook style. Top: the question text rendered exactly as: 'Determine if the DFA accepts w = bba and rejects w = bab'. Center: a deterministic finite automaton diagram with 2 states labeled q0 and q1 drawn as circles, the start state q0 marked with an incoming arrow from the left, state q1 drawn as a double circle (accept state), transition arrows: self-loop on q0 with label 'b', forward arrow from q0 to q1 labeled 'a', self-loop on q1 with label 'a', backward curved arrow from q1 to q0 labeled 'b'. Bottom: answer options rendered exactly as: 'True / False'. Crisp 1.5px lines, no shading, 4:3 aspect ratio.",
      "ref": "L3-S009",
      "tip": "تتبع قراءة كل رمز خطوة بخطوة من حالة البداية q0 حتى آخر رمز لتحديد الحالة النهائية."
    },
    {
      "n": 17,
      "type": "tf",
      "q_ar": "آلة الـ DFA الموضحة في الرسم تقبل فقط السلاسل التي تبدأ بالرمز \"0\" على الأبجدية Σ = {0, 1}.",
      "q_en": "The DFA shown in the diagram accepts strictly all strings that start with the symbol \"0\" over the alphabet Σ = {0, 1}.",
      "graphic": true,
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "صحيح: إذا كان أول رمز \"0\" تنتقل الآلة إلى q1 (حالة قبول) وتستقر فيها، وإذا كان أول رمز \"1\" تنتقل إلى q2 (حالة فخ/موت) وتستقر فيها للأبد، ولا تقبل ε لأن q0 ليست حالة قبول."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "غير صحيح، فسلوك الآلة يطابق لغة التعبير النمطي 0(0+1)* بدقة تامة."
        }
      ],
      "image_prompt": "Clean educational exam figure on pure white background, black ink textbook style. Top: the question text rendered exactly as: 'Does this DFA accept the language of all strings starting with 0?'. Center: a deterministic finite automaton diagram with 3 states labeled q0, q1, q2 drawn as circles, start state q0 with incoming arrow from left, accept state q1 drawn as double circle, dead state q2 drawn as single circle, transition arrow from q0 to q1 labeled '0', arrow from q0 to q2 labeled '1', self-loop on q1 labeled '0, 1', self-loop on q2 labeled '0, 1'. Bottom: answer options rendered exactly as: 'True / False'. Crisp 1.5px lines, no shading, 4:3 aspect ratio.",
      "ref": "L3-S014",
      "tip": "حالة الفخ (Trap/Dead State) هي حالة غير نهائية لا يمكن الخروج منها وتستخدم لرفض السلاسل غير المطابقة فوراً."
    },
    {
      "n": 18,
      "type": "tf",
      "q_ar": "الرسم يمثل بناء طومسون (Thompson's Construction) لأوتوماتون NFA المكافئ للتعبير النمطي a*.",
      "q_en": "The diagram represents Thompson's Construction of an NFA equivalent to the regular expression a*.",
      "graphic": true,
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "صحيح: بناء طومسون لـ a* يضيف حالة بداية جديدة q0 وحالة قبول جديدة q3 مع انتقال ε مباشر لتجاوز الحرف وقبول ε، وانتقال ε عكسي للتكرار."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "غير صحيح، فهذا هو البناء الهيكلي القياسي لعملية Kleene Star في خوارزمية طومسون."
        }
      ],
      "image_prompt": "Clean educational exam figure on pure white background, black ink textbook style. Top: the question text rendered exactly as: 'Identify if this NFA corresponds to the regular expression a* via Thompson construction'. Center: an NFA diagram with 4 states labeled q0, q1, q2, q3 drawn as circles, start state q0 with incoming arrow from left, final state q3 drawn as double circle, transitions: epsilon-arrow from q0 to q1, labeled arrow 'a' from q1 to q2, epsilon-arrow from q2 to q1 (loopback), epsilon-arrow from q2 to q3, and top curved epsilon-arrow from q0 to q3 bypassing the submachine. Bottom: answer options rendered exactly as: 'True / False'. Crisp 1.5px lines, no shading, 4:3 aspect ratio.",
      "ref": "L4-S019",
      "tip": "بناء طومسون لـ a* يتميز بمسار ε علوي للالتفاف وقبول ε ومسار ε سفلي للعودة والتكرار."
    },
    {
      "n": 19,
      "type": "tf",
      "q_ar": "شجرة الاشتقاق (Parse Tree) الموضحة تمثل اشتقاقاً صحيحاً للسلسلة w = \"aabb\" باستخدام قواعد الإنتاج S → aSb | ε.",
      "q_en": "The parse tree shown in the diagram represents a valid derivation for the string w = \"aabb\" using the productions S → aSb | ε.",
      "graphic": true,
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "صحيح: قراءة الأوراق (Leaves) من اليسار إلى اليمين تعطي a · a · ε · b · b = \"aabb\"، وكل تفرع في الشجرة يطابق إحدى قواعد الإنتاج المعطاة."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "غير صحيح، فالشجرة متطابقة تماماً مع قواعد الإنتاج وسلسلة الحروف الناتجة عند الأوراق هي aabb."
        }
      ],
      "image_prompt": "Clean educational exam figure on pure white background, black ink textbook style. Top: the question text rendered exactly as: 'Verify if the parse tree derives the string aabb from S -> aSb | epsilon'. Center: a parse tree diagram with root node labeled S, branching into three child nodes labeled 'a', 'S', 'b'; the middle child S branches into three child nodes labeled 'a', 'S', 'b'; the second middle child S branches into a single child node labeled 'epsilon'; leaves read from left to right yield a-a-epsilon-b-b. Bottom: answer options rendered exactly as: 'True / False'. Crisp 1.5px lines, no shading, 4:3 aspect ratio.",
      "ref": "L5-S003",
      "tip": "ناتج شجرة الاشتقاق (Yield) يُقرأ دائماً من أوراق الشجرة الطرفية بالترتيب من اليسار إلى اليمين مع تجاهل ε."
    },
    {
      "n": 20,
      "type": "tf",
      "q_ar": "مخطط الانتقال الموضح يمثل آلة NFA المكافئة للقواعد الخطية اليمنى S → aA, A → bS | c.",
      "q_en": "The transition diagram shown represents the NFA equivalent to the right-linear grammar S → aA, A → bS | c.",
      "graphic": true,
      "opts": [
        {
          "ar": "صح",
          "en": "True",
          "ok": true,
          "why": "صحيح: المتغيرات S و A أصبحت حالات مع إضافة حالة قبول جديدة F؛ والقواعد S → aA و A → bS و A → c تحولت إلى انتقالات مطابقة تماماً."
        },
        {
          "ar": "خطأ",
          "en": "False",
          "ok": false,
          "why": "غير صحيح، فتمثيل القواعد الخطية اليمنى كآلة NFA يتبع هذه القواعد المباشرة بدقة."
        }
      ],
      "image_prompt": "Clean educational exam figure on pure white background, black ink textbook style. Top: the question text rendered exactly as: 'Is this transition graph the exact NFA for grammar S -> aA, A -> bS | c?'. Center: a transition graph with 3 states labeled S, A, F drawn as circles, start state S marked with incoming arrow from left, accepting state F drawn as a double circle, directed edge from S to A labeled 'a', directed edge from A to S labeled 'b', directed edge from A to F labeled 'c'. Bottom: answer options rendered exactly as: 'True / False'. Crisp 1.5px lines, no shading, 4:3 aspect ratio.",
      "ref": "L6-S057",
      "tip": "في تحويل القواعد الخطية اليمنى لـ NFA: كل قاعدة X → aY تعطي سهماً من X إلى Y بالرمز a، وكل قاعدة X → c تعطي سهماً من X إلى حالة قبول نهائية F بالرمز c."
    },
    {
      "n": 21,
      "type": "essay",
      "q_ar": "إذا كانت اللغتان L1 = {ab, ba} و L2 = {ε, a, bb} معرفتين على الأبجدية Σ = {a, b}:\n1. احسب لغة الدمج (Concatenation) L1 L2.\n2. احسب لغة الدمج العكسية L2 L1.\n3. بيّن بالدليل هل L1 L2 = L2 L1؟ وما حجم كل من اللغتين الناتجين؟",
      "q_en": "Given languages L1 = {ab, ba} and L2 = {ε, a, bb} over Σ = {a, b}:\n1. Compute the concatenation L1 L2.\n2. Compute the concatenation L2 L1.\n3. Prove whether L1 L2 = L2 L1, and state the cardinality of both resulting languages.",
      "graphic": false,
      "ans_ar": "الخطوة 1: حساب L1 L2 بدمج كل عنصر من L1 مع كل عنصر من L2 بالترتيب:\n- مع ab: ab·ε = ab، ab·a = aba، ab·bb = abbb.\n- مع ba: ba·ε = ba، ba·a = baa، ba·bb = babb.\nإذاً: L1 L2 = {ab, aba, abbb, ba, baa, babb}.\n\nالخطوة 2: حساب L2 L1 بدمج كل عنصر من L2 مع كل عنصر من L1 بالترتيب:\n- مع ε: ε·ab = ab، ε·ba = ba.\n- مع a: a·ab = aab، a·ba = aba.\n- مع bb: bb·ab = bbab، bb·ba = bbba.\nإذاً: L2 L1 = {ab, ba, aab, aba, bbab, bbba}.\n\nالخطوة 3: المقارنة والحجم:\n- نلاحظ أن L1 L2 ≠ L2 L1؛ حيث تحتوي L1 L2 على سلاسل مثل abbb و baa لا تنتمي لـ L2 L1.\n- حجم كل من اللغتين: |L1 L2| = 6 سلاسل، و |L2 L1| = 6 سلاسل.",
      "ref": "L1-S020",
      "tip": "عند ضرب اللغات (Concatenation): ادمج كل سلسلة في المجموعة الأولى مع كل سلسلة في المجموعة الثانية واحرص على الترتيب لأن الدمج غير تبديلي."
    },
    {
      "n": 22,
      "type": "essay",
      "q_ar": "لدينا آلة DFA معرفة بـ M = (Q, Σ, δ, q0, F) حيث Q = {q0, q1, q2}، Σ = {a, b}، حالة البداية q0، وحالة القبول F = {q1}. جدول الانتقالات معطى كالتالي:\n- δ(q0, a) = q1, δ(q0, b) = q0\n- δ(q1, a) = q1, δ(q1, b) = q2\n- δ(q2, a) = q1, δ(q2, b) = q0\nالمطلوب: تتبع تنفيذ السلسلتين w1 = \"baba\" و w2 = \"abb\" خطوة بخطوة موضحاً تسلسل الحالات والقرار النهائي (قبول/رفض) مع التعليل.",
      "q_en": "Given a DFA M = (Q, Σ, δ, q0, F) where Q = {q0, q1, q2}, Σ = {a, b}, start state q0, accept state F = {q1}. Transitions: δ(q0, a)=q1, δ(q0, b)=q0; δ(q1, a)=q1, δ(q1, b)=q2; δ(q2, a)=q1, δ(q2, b)=q0. Trace strings w1 = \"baba\" and w2 = \"abb\" step-by-step stating state sequences and final decisions with justification.",
      "graphic": false,
      "ans_ar": "الخطوة 1: تتبع السلسلة الأولى w1 = \"baba\":\n- البداية من q0.\n- قراءة الرمز \"b\": δ(q0, b) = q0.\n- قراءة الرمز \"a\": δ(q0, a) = q1.\n- قراءة الرمز \"b\": δ(q1, b) = q2.\n- قراءة الرمز \"a\": δ(q2, a) = q1.\n- مسار الحالة: q0 --b--> q0 --a--> q1 --b--> q2 --a--> q1.\n- القرار: تُقبل السلسلة (ACCEPT) لأن الحالة النهائية q1 ∈ F.\n\nالخطوة 2: تتبع السلسلة الثانية w2 = \"abb\":\n- البداية من q0.\n- قراءة الرمز \"a\": δ(q0, a) = q1.\n- قراءة الرمز \"b\": δ(q1, b) = q2.\n- قراءة الرمز \"b\": δ(q2, b) = q0.\n- مسار الحالة: q0 --a--> q1 --b--> q2 --b--> q0.\n- القرار: تُرفض السلسلة (REJECT) لأن الحالة النهائية q0 ∉ F.",
      "ref": "L3-S016",
      "tip": "اكتب كل انتقال بوضوح في سطر مستقل: δ(q_current, symbol) = q_next، واختم بمقارنة الحالة النهائية بمجموعة القبول F."
    },
    {
      "n": 23,
      "type": "essay",
      "q_ar": "بيّن بالتفصيل الرياضي والتحليلي تكافؤ التعبيرين النمطيين التاليين:\nr1 = a*(a+b)*\nr2 = (a+b)*\nواذكر الخاصية الجبرية للتعبيرات النمطية التي تفسر هذه النتيجة.",
      "q_en": "Prove mathematically and analytically the equivalence of regular expressions r1 = a*(a+b)* and r2 = (a+b)*, and state the algebraic property justifying this result.",
      "graphic": false,
      "ans_ar": "الخطوة 1: تحليل اللغة الناتجة عن التعبير الثاني L(r2):\nr2 = (a+b)* يولد جميع السلاسل الممكن تكوينها من الأبجدية {a, b} بأي طول وأي ترتيب، أي أن L(r2) = Σ* = {a, b}*.\n\nالخطوة 2: تحليل اللغة الناتجة عن التعبير الأول L(r1):\n- التعبير r1 = a*(a+b)* يمثل دمج لغتين: لغة السلاسل المكونة من الحرف a فقط (L(a*))، ولغة جميع السلاسل الممكنة (L((a+b)*)=Σ*).\n- بما أن L(a*) ⊆ Σ*، وبما أن Σ* Σ* = Σ*، وأيضاً ε ∈ L(a*)، فإن:\nL(r1) = L(a*) · Σ* ⊆ Σ* · Σ* = Σ*.\n- ومن جهة أخرى، باختيار ε من الجزء a* ينتج ε · Σ* = Σ* ⊆ L(r1).\n- بالتالي: L(r1) = Σ*.\n\nالخطوة 3: الاستنتاج والقاعدة الجبرية:\n- بما أن L(r1) = Σ* و L(r2) = Σ*، فإن التعبيرين متكافئان تماماً (r1 ≡ r2).\n- الخاصية الجبرية المفسرة: لغة المجموعة الشاملة Σ* تمتص أي لغة فرعية تسبقها في عملية الدمج طالما أن ε مشمول، وفق قاعدة R* (R + S)* ≡ (R + S)* ≡ Σ*.",
      "ref": "L4-S012",
      "tip": "لإثبات تكافؤ تعبيرين، أثبت احتواء الطرفين في الاتجاهين (L1 ⊆ L2 و L2 ⊆ L1) أو بيّن أن كليهما يولد نفس المجموعة Σ*."
    },
    {
      "n": 24,
      "type": "essay",
      "q_ar": "لتكن القواعد الصورية G = (V, T, S, P) حيث:\nV = {S, A, B}, T = {a, b}, Start symbol = S\nوقواعد الإنتاج P هي:\nS → aB | bA\nA → a | aS | bAA\nB → b | bS | aBB\n1. اشتق السلسلة w = \"aabbab\" باستخدام الاشتقاق من أقصى اليسار (Leftmost Derivation).\n2. ما هي اللغة L(G) التي تولدها هذه القواعد؟",
      "q_en": "Given grammar G = (V, T, S, P) with V = {S, A, B}, T = {a, b}, start symbol S, and productions: S → aB | bA, A → a | aS | bAA, B → b | bS | aBB. 1. Derive string w = \"aabbab\" via Leftmost Derivation. 2. What is the language L(G) generated by this grammar?",
      "graphic": false,
      "ans_ar": "الخطوة 1: الاشتقاق من أقصى اليسار (Leftmost Derivation) للسلسلة w = \"aabbab\" خطوة بخطوة:\n1. S ⇒ aB (باستخدام S → aB)\n2. ⇒ aaBB (باستبدال B بأقصى اليسار بالقاعدة B → aBB)\n3. ⇒ aabS B (باستبدال B الأول بالقاعدة B → bS)\n4. ⇒ aabbA B (باستبدال S بالقاعدة S → bA)\n5. ⇒ aabba B (باستبدال A بالقاعدة A → a)\n6. ⇒ aabbab (باستبدال B الأخير بالقاعدة B → b)\nتم اشتقاق السلسلة بالكامل بنجاح: S ⇒* aabbab.\n\nالخطوة 2: تحديد لغة القواعد L(G):\n- القواعد تولد لغة جميع السلاسل غير الفارغة على الأبجدية {a, b} التي يتساوى فيها عدد مرات ظهور الحرف a مع عدد مرات ظهور الحرف b:\nL(G) = {w ∈ {a, b}+ | na(w) = nb(w)}.",
      "ref": "L5-S004",
      "tip": "في الاشتقاق من أقصى اليسار (Leftmost): استبدل دائماً المتغير غير الطرفي الواقع في أقصى يسار السلسلة المشتقة أولاً."
    },
    {
      "n": 25,
      "type": "essay",
      "q_ar": "لتكن القواعد G ذات قواعد الإنتاج التالية:\nS → aSb | aAb\nA → cA | c\n1. أوجد صيغة رياضية دقيقة للغة L(G) التي تولدها هذه القواعد بصيغة بناء المجموعات (Set-builder notation).\n2. اشتق السلسلة w = \"aaccbb\" مبيناً خطوات الاشتقاق.",
      "q_en": "Given grammar G with productions: S → aSb | aAb, A → cA | c. 1. Find the exact mathematical set-builder notation for L(G). 2. Derive string w = \"aaccbb\" showing all derivation steps.",
      "graphic": false,
      "ans_ar": "الخطوة 1: تحديد لغة القواعد L(G) بالصيغة الرياضية:\n- المتغير S يولد عدداً متساوياً من a في البداية و b في النهاية عبر S → aSb.\n- عند الانتقال إلى S → aAb يتشكل زوج إضافي من (a, b) ويدخل المتغير A.\n- المتغير A يولد تتابعاً من الرمز c بطول m ≥ 1 عبر A → cA | c.\n- بالتالي فإن اللغة هي:\nL(G) = {a^n c^m b^n | n ≥ 1, m ≥ 1}.\n\nالخطوة 2: اشتقاق السلسلة w = \"aaccbb\" حيث n=2, m=2:\n1. S ⇒ aSb (تطبيق S → aSb)\n2. ⇒ aaAbb (تطبيق S → aAb)\n3. ⇒ aacAbb (تطبيق A → cA)\n4. ⇒ aaccbb (تطبيق A → c)\nوبذلك يتم الوصول للسلسلة المستهدفة S ⇒* aaccbb.",
      "ref": "L5-S016",
      "tip": "عند تحليل لغة القواعد، راقب كيف تتولد الرموز الطرفية: S → aSb تضمن تساوي a و b في الأطراف، بينما A يولد الحرف الأوسط c."
    },
    {
      "n": 26,
      "type": "essay",
      "q_ar": "حوّل القواعد الخطية اليمنى (Right-Linear Grammar) التالية إلى أوتوماتون غير حتمي (NFA) مكافئ خطوة بخطوة:\nS → 0A | 1S\nA → 1B | 0\nB → 0S | 1\nموضحاً: مجموعة الحالات Q، حالة البداية، حالات القبول، وجدول الانتقالات الكامل للأوتوماتون الناتج.",
      "q_en": "Convert the following Right-Linear Grammar into an equivalent NFA step-by-step: S → 0A | 1S, A → 1B | 0, B → 0S | 1. State: state set Q, start state, accept states, and full transition table.",
      "graphic": false,
      "ans_ar": "الخطوة 1: تعريف عناصر الـ NFA الناتج M = (Q, Σ, δ, q0, F):\n- مجموعة الحالات: نأخذ كل متغير كحالة ونضيف حالة قبول نهائية جديدة F_f: Q = {S, A, B, F_f}.\n- الأبجدية: Σ = {0, 1}.\n- حالة البداية: S (رمز البداية للقواعد).\n- حالات القبول: F = {F_f}.\n\nالخطوة 2: بناء الانتقالات من قواعد الإنتاج:\n- من S → 0A | 1S: نضيف انتقالات δ(S, 0) = {A} و δ(S, 1) = {S}.\n- من A → 1B | 0: نضيف انتقال δ(A, 1) = {B}، والقاعدة الطرفية A → 0 تعطي انتقالاً لحالة القبول δ(A, 0) = {F_f}.\n- من B → 0S | 1: نضيف انتقال δ(B, 0) = {S}، والقاعدة الطرفية B → 1 تعطي انتقالاً لحالة القبول δ(B, 1) = {F_f}.\n\nالخطوة 3: جدول الانتقالات الكامل:\n- الحالة S: بالرمز 0 → {A}، بالرمز 1 → {S}.\n- الحالة A: بالرمز 0 → {F_f}، بالرمز 1 → {B}.\n- الحالة B: بالرمز 0 → {S}، بالرمز 1 → {F_f}.\n- الحالة F_f (قبول): بالرمز 0 → ∅، بالرمز 1 → ∅.",
      "ref": "L6-S044",
      "tip": "خوارزمية التحويل القياسية: كل قاعدة X → aY تصبح δ(X, a)={Y}، وكل قاعدة X → a تصبح δ(X, a)={F_f} حيث F_f حالة قبول نهائية."
    },
    {
      "n": 27,
      "type": "essay",
      "q_ar": "لدينا آلة DFA معرفة بـ M = ({q0, q1}, {a, b}, δ, q0, {q1}) حيث الانتقالات:\nδ(q0, a) = q1, δ(q0, b) = q0\nδ(q1, a) = q0, δ(q1, b) = q1\nالمطلوب: اشتقاق قواعد خطية يمنى (Right-Linear Grammar) مكافئة تماماً لهذه الآلة، مع تحديد عناصر القواعد الأربعة G = (V, T, S, P) بالتفصيل.",
      "q_en": "Given a DFA M = ({q0, q1}, {a, b}, δ, q0, {q1}) with transitions δ(q0, a)=q1, δ(q0, b)=q0; δ(q1, a)=q0, δ(q1, b)=q1. Derive an equivalent Right-Linear Grammar G=(V, T, S, P) specifying all 4 components.",
      "graphic": false,
      "ans_ar": "الخطوة 1: تحديد المكونات الأربعة للقواعد الصورية G = (V, T, S, P):\n- مجموعة المتغيرات غير الطرفية V: تمثل حالات الآلة V = {q0, q1}.\n- مجموعة الرموز الطرفية T: تمثل أبجدية الإدخال T = {a, b}.\n- رمز البداية S: يقابل حالة البداية q0.\n- قواعد الإنتاج P: تُشتق من دالة الانتقال وحالات القبول.\n\nالخطوة 2: اشتقاق قواعد الإنتاج P من انتقالات DFA:\n- من الانتقال δ(q0, a) = q1: ينتج القاعدة q0 → a q1.\n- من الانتقال δ(q0, b) = q0: ينتج القاعدة q0 → b q0.\n- من الانتقال δ(q1, a) = q0: ينتج القاعدة q1 → a q0.\n- من الانتقال δ(q1, b) = q1: ينتج القاعدة q1 → b q1.\n\nالخطوة 3: معالجة حالات القبول:\n- بما أن q1 ∈ F هي حالة القبول الوحيدة، نضيف القاعدة q1 → ε.\n\nالخلاصة: قواعد الإنتاج النهائية هي:\nq0 → a q1 | b q0\nq1 → a q0 | b q1 | ε.",
      "ref": "L6-S046",
      "tip": "كل انتقال δ(qi, x) = qj يولد qi → x qj. ولكل حالة قبول qk ∈ F نضيف qk → ε لإنهاء الاشتقاق بنجاح."
    },
    {
      "n": 28,
      "type": "essay",
      "q_ar": "صمم وارسم أوتوماتون حالة منتهية حتمي (DFA) يقبل لغة جميع السلاسل الثنائية على الأبجدية Σ = {0, 1} التي تنتهي بالمقطع \"01\".\nالمطلوب:\n1. تحديد حالات الآلة ومعنى كل حالة.\n2. رسم مخطط الانتقال الكامل موضحاً حالة البداية وحالات القبول والانتقالات لجميع الرموز.\n3. كتابة جدول الانتقالات.",
      "q_en": "Design and draw a Deterministic Finite Automaton (DFA) accepting all binary strings over Σ = {0, 1} ending with \"01\". 1. Define states and their meanings. 2. Draw the transition diagram showing start state, accept state, and all transitions. 3. Provide the complete transition table.",
      "graphic": true,
      "ans_ar": "الخطوة 1: تحديد الحالات ومعناها:\n- q0: حالة البداية (لم يُقرأ شيء أو آخر رمز مقروء هو \"1\" ولا يوجد تطابق جزئي).\n- q1: آخر رمز تمت قراءته هو \"0\" (تطابق أول رمز من المقطع \"01\").\n- q2: تم قراءة المقطع \"01\" بنجاح في نهاية السلسلة (حالة قبول).\n\nالخطوة 2: الانتقالات ورسم المخطط:\n- من q0: بالرمز \"0\" → q1، بالرمز \"1\" → q0.\n- من q1: بالرمز \"0\" → q1 (تكرار 0 يبقى مطابقاً)، بالرمز \"1\" → q2 (اكتمال 01).\n- من q2: بالرمز \"0\" → q1 (بداية مقطع جديد 0)، بالرمز \"1\" → q0 (فقدان التطابق).\n\nالخطوة 3: جدول الانتقالات:\n- q0 (بداية): δ(q0, 0) = q1, δ(q0, 1) = q0\n- q1: δ(q1, 0) = q1, δ(q1, 1) = q2\n- q2 (قبول مزدوج): δ(q2, 0) = q1, δ(q2, 1) = q0",
      "image_prompt": "Clean educational exam figure on pure white background, black ink textbook style. Top: the question text rendered exactly as: 'Design a minimal DFA that accepts all binary strings ending in 01'. Center: a deterministic finite automaton diagram with 3 states labeled q0, q1, q2 drawn horizontally as circles, incoming arrow into start state q0 from left, state q2 drawn as double circle (accept state), transitions: self-loop on q0 labeled '1', directed arrow from q0 to q1 labeled '0', self-loop on q1 labeled '0', directed arrow from q1 to q2 labeled '1', backward curved arrow from q2 to q1 labeled '0', long backward curved arrow from q2 to q0 labeled '1'. Bottom: answer options rendered exactly as: 'States: q0 (start), q1 (seen 0), q2 (accept, seen 01)'. Crisp 1.5px lines, no shading, 4:3 aspect ratio.",
      "ref": "L3-S009",
      "tip": "لغة السلاسل المنتهية بنمط معين تتطلب حالات بعدد طول النمط + 1: تتبع تراجع الحالات عند ورود رمز يكسر التسلسل."
    },
    {
      "n": 29,
      "type": "essay",
      "q_ar": "باستخدام خوارزمية بناء طومسون (Thompson's Construction)، ارسم مخطط أوتوماتون NFA كامل بانتقالات ε للتعبير النمطي:\nr = a + b c*\nموضحاً الحالات الابتدائية والنهائية وتفرعات ε لكل عملية (الاتحاد والدمج والنجمة).",
      "q_en": "Using Thompson's Construction, draw the complete ε-NFA diagram for regular expression r = a + b c*, clearly showing start and accept states, union branching, concatenation, and star submachines.",
      "graphic": true,
      "ans_ar": "الخطوة 1: تفكيك التعبير إلى أجزائه الهيكلية:\n- التعبير الرئيسي هو اتحاد (Union) بين فرعين: الفرع العلوي a والفرع السفلي b c*.\n- الفرع السفلي يتكون من دمج (Concatenation) للرمز b مع الآلة الجزئية للتكرار c*.\n\nالخطوة 2: بناء المخطط وفق قواعد طومسون:\n1. إضافة حالة بداية عامة q0 تتفرع بـ ε إلى الآلة الجزئية لـ a (بين q1, q2) وإلى الآلة الجزئية لـ b c* (تبدأ عند q3).\n2. الفرع العلوي: انتقال بحرف a من q1 → q2 ثم ε → q8 (حالة القبول النهائية).\n3. الفرع السفلي: انتقال بحرف b من q3 → q4 ثم انتقال ε إلى بداية الآلة الجزئية لـ c* (بين q5, q6, q7).\n4. الآلة الجزئية لـ c*: انتقال بالحرف c من q5 → q6 مع حلقة عودة ε من q6 → q5، ومسار تجاوز ε من q4 → q7، ثم ε → q8.\n\nالخطوة 3: النتيجة النهائية:\n- حالة بداية واحدة q0 وحالة قبول واحدة q8 (دائرة مزدوجة).",
      "image_prompt": "Clean educational exam figure on pure white background, black ink textbook style. Top: the question text rendered exactly as: 'Thompson Construction NFA for regular expression: a + b c*'. Center: an NFA diagram with start state q0 on the far left with an incoming arrow, branching with two epsilon arrows into top and bottom paths: top path has state q1 transition 'a' to q2 followed by epsilon to final state q8; bottom path has state q3 transition 'b' to q4, then epsilon to submachine for c* (states q5, q6, q7 with loopback and bypass epsilon transitions), then epsilon to double-circle accept state q8. Bottom: answer options rendered exactly as: 'Complete Thompson NFA with union and Kleene star submachines'. Crisp 1.5px lines, no shading, 4:3 aspect ratio.",
      "ref": "L4-S023",
      "tip": "بناء طومسون يضمن حالة بداية وحيدة وحالة قبول وحيدة لكل آلة فرعية مع ربطهما بانتقالات ε دقيقة."
    },
    {
      "n": 30,
      "type": "essay",
      "q_ar": "لتكن القواعد الصورية المعرفة بقواعد الإنتاج التالية:\nS → aSb | A\nA → cA | ε\n1. ارسم شجرة الاشتقاق (Parse Tree) الكاملة للسلسلة w = \"aaccb\".\n2. اكتب الاشتقاق المقابل خطوة بخطوة.",
      "q_en": "Given grammar with productions: S → aSb | A, A → cA | ε. 1. Draw the complete parse tree for string w = \"aaccb\". 2. Provide the corresponding derivation step-by-step.",
      "graphic": true,
      "ans_ar": "الخطوة 1: خطوات الاشتقاق للسلسلة w = \"aaccb\":\n1. S ⇒ aSb (استخدام S → aSb)\n2. ⇒ aAb (استخدام S → A)\n3. ⇒ acAb (استخدام A → cA)\n4. ⇒ accAb (استخدام A → cA)\n5. ⇒ accεb = \"aaccb\" (استخدام A → ε)\n\nالخطوة 2: هيكل شجرة الاشتقاق (Parse Tree):\n- الجذر: العقدة S.\n- أطفال الجذر S: العقد \"a\"، \"S\"، \"b\".\n- تفرع العقدة S الداخلية: عقدة فرعية وحيدة A.\n- تفرع العقدة A الأولى: العقد \"c\" و \"A\".\n- تفرع العقدة A الثانية: العقد \"c\" و \"A\".\n- تفرع العقدة A الأخيرة: العقدة الطرفية \"ε\".\n- قراءة الأوراق من اليسار لليمين: a · c · c · ε · b = \"aaccb\".",
      "image_prompt": "Clean educational exam figure on pure white background, black ink textbook style. Top: the question text rendered exactly as: 'Parse tree for deriving string aaccb from S -> aSb | A, A -> cA | epsilon'. Center: a hierarchical parse tree diagram with root labeled S branching into children labeled 'a', 'S', 'b'; the middle node S branches to a single child labeled 'A'; that node A branches into 'c' and 'A'; the second node A branches into 'c' and 'A'; the lowest node A branches into leaf 'epsilon'; leaves read from left to right: a, c, c, epsilon, b yielding string aaccb. Bottom: answer options rendered exactly as: 'Parse Tree Yield: aaccb'. Crisp 1.5px lines, no shading, 4:3 aspect ratio.",
      "ref": "L5-S005",
      "tip": "في شجرة الاشتقاق: الرمز المبدئي S هو الجذر، القواعد تطبق كتفرعات هابطة، والأوراق الطرفية تمثل السلسلة الناتجة."
    },
    {
      "n": 31,
      "type": "essay",
      "q_ar": "حوّل القواعد الخطية اليمنى (Right-Linear Grammar) التالية إلى مخطط انتقال NFA كامل بالرسم:\nS → aA | bB\nA → aA | bS | a\nB → bB | ε\nارسم المخطط موضحاً الحالات الابتدائية والنهائية والانتقالات لجميع الرموز.",
      "q_en": "Convert the following Right-Linear Grammar into a complete NFA transition diagram: S → aA | bB, A → aA | bS | a, B → bB | ε. Draw the diagram showing initial and final states and all labeled transitions.",
      "graphic": true,
      "ans_ar": "الخطوة 1: تحديد الحالات في مخطط الانتقال:\n- الحالات المأخوذة من المتغيرات: S (حالة البداية)، A، B.\n- بما أن B → ε، فإن الحالة B هي حالة قبول نهائية مباشرة (B ∈ F).\n- نضيف حالة قبول نهائية عامة F للقواعد الطرفية الأخرى.\n\nالخطوة 2: رسم وتحديد الانتقالات:\n- من S: انتقال بالحرف a إلى A، وانتقال بالحرف b إلى B.\n- من A: حلقة ذاتية بالحرف a إلى A، وانتقال بالحرف b إلى S، وانتقال بالحرف a إلى حالة القبول F (من A → a).\n- من B: حلقة ذاتية بالحرف b إلى B (من B → bB).\n\nالخطوة 3: النتيجة والمخطط:\n- حالات القبول (دوائر مزدوجة): B و F.\n- حالة البداية: S بسهم دخول من اليسار.",
      "image_prompt": "Clean educational exam figure on pure white background, black ink textbook style. Top: the question text rendered exactly as: 'NFA transition diagram constructed from Right-Linear Grammar'. Center: a transition diagram with 4 states labeled S, A, B, F drawn as circles, start state S with incoming arrow from left, accepting states B and F drawn as double circles, directed arrow from S to A labeled 'a', directed arrow from S to B labeled 'b', self-loop on A labeled 'a', directed arrow from A to S labeled 'b', directed arrow from A to F labeled 'a', self-loop on B labeled 'b'. Bottom: answer options rendered exactly as: 'States: S (start), A, B (final), F (final)'. Crisp 1.5px lines, no shading, 4:3 aspect ratio.",
      "ref": "L6-S057",
      "tip": "إذا احتوت القواعد على X → ε تصبح الحالة X نفسها حالة قبول مباشرة، بينما القواعد مثل X → a توجه سهماً بحرف a إلى حالة قبول منفصلة F."
    },
    {
      "n": 32,
      "type": "essay",
      "q_ar": "لدينا آلة DFA بحالات غير مبسطة تحتوي على حالات متكافئة وحالة غير قابلة للوصول:\nالحالات: {q0, q1, q2, q3}، حالة البداية q0، وحالة القبول q1.\nالانتقالات:\n- δ(q0, a) = q1, δ(q0, b) = q2\n- δ(q1, a) = q1, δ(q1, b) = q2\n- δ(q2, a) = q1, δ(q2, b) = q2\n- الحالة q3 لا يوجد أي سهم يصل إليها من q0.\nالمطلوب:\n1. اختزال الآلة بحذف الحالات غير القابلة للوصول ودمج الحالات المتكافئة (DFA Minimization).\n2. رسم مخطط الـ DFA الأدنى (Minimized DFA) الناتج.",
      "q_en": "Given a non-minimal DFA with states {q0, q1, q2, q3}, start state q0, accept state q1, transitions δ(q0, a)=q1, δ(q0, b)=q2; δ(q1, a)=q1, δ(q1, b)=q2; δ(q2, a)=q1, δ(q2, b)=q2; and unreachable state q3. 1. Minimize the DFA. 2. Draw the resulting Minimized DFA.",
      "graphic": true,
      "ans_ar": "الخطوة 1: حذف الحالات غير القابلة للوصول (Unreachable States):\n- الحالة q3 لا يمكن الوصول إليها من حالة البداية q0 بأي مسار، لذا تُحذف تماماً من الآلة.\n- تبقى الحالات القابلة للوصول: {q0, q1, q2}.\n\nالخطوة 2: تقسيم الحالات ودمج المتكافئة (State Equivalence):\n- التقسيم الأولي لحالات القبول وغير القبول: P0 = {{q1}, {q0, q2}}.\n- فحص المجموعة {q0, q2}:\n  * بالرمز a: كلاهما ينتقل إلى q1 ∈ {q1}.\n  * بالرمز b: كلاهما ينتقل إلى q2 ∈ {q0, q2}.\n- بالتالي الحالتان q0 و q2 متكافئتان سلوكياً تماماً (q0 ≡ q2) ويتم دمجهما في حالة واحدة تمثل حالة البداية [q0, q2].\n\nالخطوة 3: رسم الآلة المصغرة الناتجة:\n- تتكون الآلة المصغرة من حالتين فقط: الحالة المركبة [q0, q2] (بداية) وحالة القبول q1 (قبول مزدوج).\n- الانتقالات: من [q0, q2] بالرمز a → q1، وبالرمز b → [q0, q2] (حلقة ذاتية). ومن q1 بالرمز a → q1 (حلقة ذاتية)، وبالرمز b → [q0, q2].",
      "image_prompt": "Clean educational exam figure on pure white background, black ink textbook style. Top: the question text rendered exactly as: 'Minimized DFA with 2 equivalent/merged states'. Center: a minimal deterministic finite automaton diagram with 2 states labeled q02 and q1 drawn as circles, incoming arrow into start state q02 from left, accept state q1 drawn as double circle, transitions: self-loop on q02 labeled 'b', directed forward arrow from q02 to q1 labeled 'a', self-loop on q1 labeled 'a', directed backward arrow from q1 to q02 labeled 'b'. Bottom: answer options rendered exactly as: 'Minimized 2-state DFA (q3 removed, q0 and q2 merged)'. Crisp 1.5px lines, no shading, 4:3 aspect ratio.",
      "ref": "L6-S078",
      "tip": "تبسيط DFA يتم على مرحلتين: (1) إزالة الحالات المستحيلة/المعزولة، (2) تقسيم الحالات إلى مجموعات متكافئة ودمج الحالات غير القابلة للتمييز."
    }
  ]
});

window.TOC_M3_EXTRA = [
  {
    "n": 1,
    "type": "mcq",
    "q_ar": "في نظرية قابلية الحوسبة (Computability Theory)، تُوصف المسألة بأنها «غير قابلة للتقرير» (Undecidable) إذا:",
    "q_en": "In Computability Theory, a problem is classified as \"Undecidable\" if:",
    "opts": [
      {
        "ar": "لا يمكن رياضياً بناء أي خوارزمية تضمن التوقف وتقديم إجابة صحيحة (نعم/لا) لجميع المدخلات الممكنة (مثل مشكلة التوقف Halting Problem).",
        "en": "It is mathematically impossible to construct any algorithm that halts and gives a correct yes/no answer for all possible inputs (e.g., Halting Problem).",
        "ok": true,
        "why": "صحيح: المسألة غير القابلة للتقرير تعني عدم وجود أي خوارزمية حاسوبية قادرة على تقرير الإجابة بشكل صحيح وقاطع لجميع المدخلات الممكنة في وقت منتهٍ."
      },
      {
        "ar": "تتطلب الخوارزمية وقتاً تنفيذياً هائلاً (أُسياً) يتجاوز قدرة المعالجات الحديثة مع وجود خوارزمية للحل.",
        "en": "The algorithm requires exponential time exceeding modern processors, despite an algorithm existing.",
        "ok": false,
        "why": "خطأ: هذا يصف التعقيد الحسابي العالي (Complexity) ومسائل فئة EXPTIME أو NP-Hard، بينما المسائل غير القابلة للتقرير مستحيلة الحل خوارزمياً بأي وقت."
      },
      {
        "ar": "لا يمكن حل المسألة باستخدام الآلات المنتهية DFA ولكن يمكن حلها بآلات المكدس PDA.",
        "en": "The problem cannot be solved by a DFA but can always be solved by a PDA.",
        "ok": false,
        "why": "خطأ: هذا يصف تصنيف اللغات الصورية الخالية من السياق، بينما المسائل غير القابلة للتقرير تعجز عنها حتى آلات تورنغ الأقوى حوسبياً."
      },
      {
        "ar": "المسألة غير قابلة للصياغة كنموذج رياضي أو لغة صورية.",
        "en": "The problem cannot be formulated as a mathematical model or formal language.",
        "ok": false,
        "why": "خطأ: المسائل غير القابلة للتقرير تُصاغ وتُوصف بدقة رياضية صورية تامة وتُمثّل كلغات قرار (Decision Languages)."
      }
    ],
    "ref": "L1-S010",
    "tip": "تذكر دائماً: عدم القابلية للتقرير (Undecidability) استحالة منطقية ورياضية مطلقة لجميع الحواسيب والآلات (مثل مشكلة التوقف)، وليست مجرد صعوبة في الوقت أو قلة في موارد العتاد."
  },
  {
    "n": 2,
    "type": "mcq",
    "q_ar": "في نظرية اللغات الصورية، إذا كانت w سلسلة نصية فوق الأبجدية Σ، فما هو التعريف الرياضي الاستقرائي الصحيح لـ «قوة السلسلة» (String Power) wⁿ للحالة الأساسية (n=0) والخطوة الاستقرائية (n ≥ 1)؟",
    "q_en": "In formal language theory, if w is a string over alphabet Σ, what is the correct inductive mathematical definition of the string power wⁿ for base case (n=0) and inductive step (n ≥ 1)?",
    "opts": [
      {
        "ar": "w⁰ = ε ولكل n ≥ 1 فإن wⁿ = wⁿ⁻¹w (ويكون |wⁿ| = n × |w|).",
        "en": "w⁰ = ε and for each n ≥ 1, wⁿ = wⁿ⁻¹w (with |wⁿ| = n × |w|).",
        "ok": true,
        "why": "صحيح: رفع أي سلسلة للأس صفر ينتج السلسلة الفارغة ε، وتكرار السلسلة n مرة يعتمد على دمج السلسلة w مع نفسها n مرة وطولها يساوي n مضروباً في طول w."
      },
      {
        "ar": "w⁰ = w ولكل n ≥ 1 فإن wⁿ = n × w.",
        "en": "w⁰ = w and for each n ≥ 1, wⁿ = n × w.",
        "ok": false,
        "why": "خطأ: رفع السلسلة للأس 0 ينتج السلسلة المحايدة ε وليس w، وعملية الأسس للسلاسل هي تكرار الدمج (Concatenation) وليست ضرباً جبرياً."
      },
      {
        "ar": "w⁰ = ∅ ولكل n ≥ 1 فإن wⁿ = wⁿ ∪ wⁿ⁻¹.",
        "en": "w⁰ = ∅ and for each n ≥ 1, wⁿ = wⁿ ∪ wⁿ⁻¹.",
        "ok": false,
        "why": "خطأ: ∅ تمثل المجموعة الخالية، بينما ناتج القوة هو سلسلة نصية (ε في الحالة الصفرية)، والعمليات على السلاسل هي دمج وليست اتحاد مجموعات."
      },
      {
        "ar": "w⁰ = 0 ولكل n ≥ 1 فإن wⁿ = (w)ⁿ⁻¹.",
        "en": "w⁰ = 0 and for each n ≥ 1, wⁿ = (w)ⁿ⁻¹.",
        "ok": false,
        "why": "خطأ: 0 هو رمز رقمي أو عدد وليس السلسلة الفارغة ε، والمعادلة الاستقرائية منقوصة."
      }
    ],
    "ref": "L1-S018",
    "tip": "انتبه لفخ الأسس: في نظرية الحوسبة w⁰ = ε دائماً (السلسلة الفارغة)، وطول السلسلة الناتجة |w⁰| = 0 و |wⁿ| = n · |w|."
  },
  {
    "n": 3,
    "type": "mcq",
    "q_ar": "لتكن L أي لغة صورية معرفة فوق الأبجدية Σ. ما هي النتيجة الدقيقة لعمليتي الدمج: L · ∅ (دمج L مع المجموعة الفارغة) و L · {ε} (دمج L مع لغة السلسلة الفارغة) على التوالي؟",
    "q_en": "Let L be any formal language defined over alphabet Σ. What are the exact results of the concatenations L · ∅ and L · {ε}, respectively?",
    "opts": [
      {
        "ar": "L · ∅ = ∅ و L · {ε} = L.",
        "en": "L · ∅ = ∅ and L · {ε} = L.",
        "ok": true,
        "why": "صحيح: الدمج مع المجموعة الفارغة ينتج مجموعة فارغة (L · ∅ = ∅) لعدم وجود عناصر للدمج، بينما {ε} تمثل المحايد للدمج اللغوي (L · {ε} = L)."
      },
      {
        "ar": "L · ∅ = L و L · {ε} = L.",
        "en": "L · ∅ = L and L · {ε} = L.",
        "ok": false,
        "why": "خطأ: دمج أي لغة مع ∅ يستحيل أن يولد أي سلسلة لأن تعريف دمج اللغات L1L2 = {uv | u ∈ L1, v ∈ L2}، فإذا كانت L2 = ∅ فلا توجد عناصر v فيكون الناتج ∅."
      },
      {
        "ar": "L · ∅ = {ε} و L · {ε} = {ε}.",
        "en": "L · ∅ = {ε} and L · {ε} = {ε}.",
        "ok": false,
        "why": "خطأ: دمج L مع {ε} يعيد كل سلاسل اللغة L كاملة وليس {ε} فقط."
      },
      {
        "ar": "L · ∅ = ∅ و L · {ε} = ∅.",
        "en": "L · ∅ = ∅ and L · {ε} = ∅.",
        "ok": false,
        "why": "خطأ: {ε} تحتوي على عنصر حقيقي وهو السلسلة الفارغة، فدمجها مع L لا يصفر اللغة بل يحافظ عليها كاملة."
      }
    ],
    "ref": "L1-S024",
    "tip": "تذكر التناظر الرياضي: المجموعة الفارغة ∅ تعمل كالصفر في الضرب (L · ∅ = ∅)، بينما {ε} تعمل كالواحد المحايد في الضرب (L · {ε} = L)."
  },
  {
    "n": 4,
    "type": "mcq",
    "q_ar": "إذا كانت الأبجدية Σ = {0, 1}، فكم عدد السلاسل المختلفة في المجموعة Σ³، وكم عدد اللغات المختلفة (المجموعات الجزئية) التي يمكن تكوينها من هذه السلاسل فقط؟",
    "q_en": "If alphabet Σ = {0, 1}, how many distinct strings are in the set Σ³, and how many distinct languages (subsets) can be formed exclusively from these strings?",
    "opts": [
      {
        "ar": "عدد السلاسل في Σ³ هو 2³ = 8 سلاسل، وعدد اللغات الممكن تكوينها هو 2⁸ = 256 لغة.",
        "en": "Number of strings in Σ³ is 2³ = 8, and number of possible languages is 2⁸ = 256.",
        "ok": true,
        "why": "صحيح: عدد السلاسل من الطول 3 هو |Σ|³ = 2³ = 8. وبما أن أي لغة هي مجموعة جزئية من هذه السلاسل، فإن عدد اللغات هو حجم مجموعة القوة P(Σ³) = 2⁸ = 256 لغة."
      },
      {
        "ar": "عدد السلاسل هو 3² = 9 سلاسل، وعدد اللغات الممكن تكوينها هو 2⁹ = 512 لغة.",
        "en": "Number of strings is 3² = 9, and number of possible languages is 2⁹ = 512.",
        "ok": false,
        "why": "خطأ: عدد السلاسل ذات الطول k فوق أبجدية بحجم |Σ| يُحسب كـ |Σ|^k = 2³ = 8 وليس 3²."
      },
      {
        "ar": "عدد السلاسل هو 8 سلاسل، وعدد اللغات هو 8 لغات أيضاً.",
        "en": "Number of strings is 8, and number of languages is also 8.",
        "ok": false,
        "why": "خطأ: اللغات هي مجموعات جزئية من فضاء السلاسل، وعدد المجموعات الجزئية لمجموعة بها n عناصر هو 2ⁿ = 2⁸ = 256 وليس n."
      },
      {
        "ar": "عدد السلاسل هو 6 سلاسل، وعدد اللغات هو 64 لغة.",
        "en": "Number of strings is 6, and number of languages is 64.",
        "ok": false,
        "why": "خطأ: عدد السلاسل الثنائية بطول 3 هو 2 × 2 × 2 = 8 سلاسل."
      }
    ],
    "ref": "L1-S026",
    "tip": "قاعدة ذهبية: عدد السلاسل من الطول k هو |Σ|^k. واللغات هي مجموعات جزئية من هذه السلاسل، فيكون عدد اللغات الممكنة هو |P(Σ^k)| = 2^(|Σ|^k)."
  },
  {
    "n": 5,
    "type": "mcq",
    "q_ar": "ما هو القيد البنيوي الجوهري في نموذج «الآلة المنتهية» (Finite Automaton) الذي يمنعها من التعرف على لغات مثل L = {0ⁿ 1ⁿ | n ≥ 0}؟",
    "q_en": "What is the fundamental structural limitation of a Finite Automaton that prevents it from recognizing languages such as L = {0ⁿ 1ⁿ | n ≥ 0}?",
    "opts": [
      {
        "ar": "امتلاكها لعدد محدود وثابت من الحالات الداخلية (Q) دون ذاكرة تخزين إضافية (كالمكدس أو الشريط)، مما يجعلها عاجزة عن عد تكرارات غير محدودة.",
        "en": "Having a strictly finite set of internal states (Q) without auxiliary memory (like a stack or tape), making it unable to count unbounded repetitions.",
        "ok": true,
        "why": "صحيح: الآلة المنتهية تمتلك ذاكرة حالات محدودة وثابتة، ولمقارنة عدد الأصفار بعدد الآحاد لأي n غير مقيد، تتطلب الآلة عداداً لانهائياً وهو ما يتجاوز بنيتها."
      },
      {
        "ar": "عدم قدرتها على قراءة الرمز '0' متبوعاً بالرمز '1' في نفس السلسلة.",
        "en": "Inability to read symbol '0' followed by symbol '1' within the same input string.",
        "ok": false,
        "why": "خطأ فادح: الآلة المنتهية تقرأ أي تتابع رمزي بكفاءة، وتتعرف بسهولة على اللغات المنتظمة مثل 0*1*."
      },
      {
        "ar": "حتمية وجود دورانات ذاتية (Self-loops) في كل الحالات تمنع الانتقال الخطي.",
        "en": "The requirement of self-loops on all states preventing linear progression.",
        "ok": false,
        "why": "خطأ: الدورانات الذاتية ليست مفروضة على كل الحالات بل تعتمد على تصميم دالة الانتقال."
      },
      {
        "ar": "عدم دعمها لتمثيل الحالة الابتدائية وحالات القبول في نفس الوقت.",
        "en": "Lack of support for having start and accept states simultaneously.",
        "ok": false,
        "why": "خطأ: كل آلة منتهية FA تحتوي حتماً على حالة بداية ومجموعة حالات قبول."
      }
    ],
    "ref": "L2-S008",
    "tip": "الذاكرة في الآلات المنتهية FA مقتصرة حصراً على «الحالة الحالية» (Finite State Memory)، لذا لا يمكنها تذكر عداد رقمي مفتوح للمقارنة والمطابقة."
  },
  {
    "n": 6,
    "type": "mcq",
    "q_ar": "عند تحويل آلة أوتوماتون غير محددة (NFA) تحتوي على k من الحالات إلى آلة محددة مكافئة (DFA) باستخدام خوارزمية بناء المجموعات الجزئية (Subset Construction)، ما هي العلاقة الدقيقة بين القوة التعبيرية والحد الأقصى لعدد حالات الـ DFA الناتج؟",
    "q_en": "When converting an NFA with k states into an equivalent DFA using the Subset Construction algorithm, what is the exact relationship regarding expressive power and maximum possible states of the resulting DFA?",
    "opts": [
      {
        "ar": "الآلتان متكافئتان تماماً في القوة التعبيرية (تتعرفان على نفس فئة اللغات المنتظمة)، والحد الأقصى النظري لعدد حالات الـ DFA هو 2^k حالة.",
        "en": "Both machines are fully equivalent in expressive power (recognizing the exact same class of regular languages), and the theoretical upper bound on DFA states is 2^k.",
        "ok": true,
        "why": "صحيح: مبرهنة التكافؤ تثبت أن L(DFA) = L(NFA)، وبما أن كل حالة في DFA تمثل مجموعة جزئية من حالات NFA، فإن الحد الأقصى لعدد الحالات هو حجم مجموعة القوة 2^k."
      },
      {
        "ar": "الـ NFA أقوى تعبيرياً من الـ DFA وتتعرف على لغات أكثر، وعدد حالات الـ DFA الناتج يكون دائماً k × 2.",
        "en": "NFA is strictly more expressive than DFA, and the resulting DFA state count is always k × 2.",
        "ok": false,
        "why": "خطأ: NFA لا تتفوق على DFA في القوة اللغوية إطلاقاً بل تكافئها تماماً، وعدد الحالات الأقصى أسي 2^k."
      },
      {
        "ar": "الـ DFA أقوى تعبيرياً من الـ NFA، والحد الأقصى لعدد حالاته هو k² حالة.",
        "en": "DFA is strictly more expressive than NFA, and maximum states is k².",
        "ok": false,
        "why": "خطأ: القوة اللغوية متطابقة، والحد الأقصى للحالات أسي 2^k وليس تربيعياً."
      },
      {
        "ar": "الآلتان متكافئتان، وعدد حالات الـ DFA الناتج يجب أن يساوي تماماً نفس عدد حالات الـ NFA الأصلي (k).",
        "en": "Both machines are equivalent, and the resulting DFA must have the exact same number of states (k).",
        "ok": false,
        "why": "خطأ: حالات DFA الناتجة تمثل مجموعات من حالات NFA، وفي أسوأ الحالات قد نحتاج إلى 2^k حالة."
      }
    ],
    "ref": "L2-S011",
    "tip": "تذكر دائماً: في القوة اللغوية DFA ≡ NFA. ولكن من حيث الحجم، قد يتطلب تحويل NFA بحجم k آلة DFA بحجم أسي 2^k في أسوأ الحالات."
  },
  {
    "n": 7,
    "type": "mcq",
    "q_ar": "في التعريف الرياضي الصوري للخماسية المرتبة لآلة الـ DFA المحددة M = (Q, Σ, δ, q₀, F)، ما هو الشرط الدقيق الذي تفرضه دالة الانتقال δ لضمان حتمية الآلة (Determinism)؟",
    "q_en": "In the formal mathematical 5-tuple definition of a DFA M = (Q, Σ, δ, q₀, F), what exact condition does the transition function δ enforce to ensure the machine's determinism?",
    "opts": [
      {
        "ar": "δ دالة كلية (Total function) معرفة كـ δ: Q × Σ → Q، بحيث يوجد لكل زوج (q, a) حالة تالية واحدة ووحيدة تنتمي إلى Q دون انتقالات ε.",
        "en": "δ is a total function defined as δ: Q × Σ → Q, where for every pair (q, a) there is exactly one next state in Q with no ε-transitions.",
        "ok": true,
        "why": "صحيح: الحتمية تقتضي أن يكون لكل حالة ولكل رمز من Σ انتقال واحد محدد تماماً إلى حالة واحدة في Q، مع منع انتقالات إبسيلون."
      },
      {
        "ar": "δ دالة جزئية تسمح بالانتقال إلى مجموعة من الحالات δ: Q × Σ → P(Q).",
        "en": "δ is a partial function allowing transitions to a set of states δ: Q × Σ → P(Q).",
        "ok": false,
        "why": "خطأ: الانتقال إلى مجموعة من الحالات P(Q) هو تعريف دالة الانتقال في NFA غير الحتمية."
      },
      {
        "ar": "δ دالة تسمح بالانتقال بدون قراءة أي رمز عبر δ: Q × (Σ ∪ {ε}) → Q.",
        "en": "δ allows transitions without reading any input symbol via δ: Q × (Σ ∪ {ε}) → Q.",
        "ok": false,
        "why": "خطأ: انتقالات إبسيلون ممنوعة قطعاً في آلات الـ DFA الحتمية."
      },
      {
        "ar": "δ دالة تربط بين الحالات النهائية وحالة البداية فقط δ: F × Σ → {q₀}.",
        "en": "δ maps only final states to the start state.",
        "ok": false,
        "why": "خطأ: دالة الانتقال تغطي جميع حالات المجموعة Q دون استثناء."
      }
    ],
    "ref": "L3-S004",
    "tip": "كلمة «حتمي» (Deterministic) تعني مساراً واحداً وحيداً لا لبس فيه: لكل حالة ولكل رمز مدخل سهم خروج واحد ووحيد ينتهي في حالة معرفة."
  },
  {
    "n": 8,
    "type": "mcq",
    "q_ar": "لتكن دالة الانتقال الممتدة (Extended Transition Function) لآلة DFA يُرمز لها بـ δ*، وتعمل على معالجة السلاسل النصية w ∈ Σ*. ما هو التعريف الاستقرائي الصحيح لـ δ* وشرط قبول السلسلة w؟",
    "q_en": "Let δ* denote the Extended Transition Function for a DFA processing strings w ∈ Σ*. What is the correct inductive definition of δ* and the string acceptance condition for w?",
    "opts": [
      {
        "ar": "δ*(q, ε) = q و δ*(q, wa) = δ(δ*(q, w), a)، وتُقبل السلسلة w إذا وفقط إذا كانت δ*(q₀, w) ∈ F.",
        "en": "δ*(q, ε) = q and δ*(q, wa) = δ(δ*(q, w), a), and string w is accepted iff δ*(q₀, w) ∈ F.",
        "ok": true,
        "why": "صحيح: معالجة السلسلة الفارغة تبقي الآلة في نفس حالتها δ*(q, ε) = q، وقراءة رمز إضافي a تطبق دالة الانتقال δ على الحالة الناتجة من w، وشرط القبول هو استقرار الحالة النهائية في F."
      },
      {
        "ar": "δ*(q, ε) = ∅ و δ*(q, wa) = δ*(q, w) ∪ {a}، وتُقبل السلسلة إذا كانت δ*(q₀, w) = Q.",
        "en": "δ*(q, ε) = ∅ and δ*(q, wa) = δ*(q, w) ∪ {a}, accepted if δ*(q₀, w) = Q.",
        "ok": false,
        "why": "خطأ: دالة δ* تعيد حالة واحدة q عند إدخال ε وليس ∅، والناتج حالة واحدة وليس مجموعة حالات."
      },
      {
        "ar": "δ*(q, ε) = q₀ و δ*(q, wa) = δ*(q, a)، وتُقبل السلسلة إذا مرت بأي حالة قبول أثناء المعالجة.",
        "en": "δ*(q, ε) = q₀ and δ*(q, wa) = δ*(q, a), accepted if it visits any accept state during processing.",
        "ok": false,
        "why": "خطأ: قبول السلسلة يعتمد حصراً على الحالة التي تستقر عندها الآلة بعد انتهاء جميع رموز السلسلة، وليس على الحالات الوسيطة التي مرت بها."
      },
      {
        "ar": "δ*(q, w) = δ(q, w) لكل سلسلة w مهما بلغ طولها.",
        "en": "δ*(q, w) = δ(q, w) for any string w regardless of length.",
        "ok": false,
        "why": "خطأ: دالة الانتقال الأساسية δ معرفة فقط للرموز الفردية Σ، بينما δ* معرفة لمعالجة السلاسل النصية Σ* استقرائياً."
      }
    ],
    "ref": "L3-S014",
    "tip": "دالة الانتقال الممتدة δ* هي التي تصف الرحلة الكاملة للآلة: تبدأ من q₀ وتستهلك السلسلة w حرفاً بحرف حتى تصل إلى الحالة النهائية δ*(q₀, w)."
  },
  {
    "n": 9,
    "type": "mcq",
    "q_ar": "في أي آلة DFA مكتملة الخماسية M = (Q, Σ, δ, q₀, F): ماذا تكون اللغة المقبولة L(M) إذا كانت مجموعة الحالات النهائية فارغة F = ∅؟ وماذا تصبح اللغة إذا تم استبدال حالات القبول بالمجموعة المتممة F' = Q - F؟",
    "q_en": "In any complete DFA M = (Q, Σ, δ, q₀, F): what is the language accepted L(M) if the set of final states is empty F = ∅, and what does the language become if accept states are replaced by the complement set F' = Q - F?",
    "opts": [
      {
        "ar": "إذا كانت F = ∅ فإن L(M) = ∅ (اللغة الفارغة)، وعند استبدال F بـ Q - F تقبل الآلة لغة المتمم L(M') = Σ* - L(M).",
        "en": "If F = ∅ then L(M) = ∅, and when replacing F with Q - F the machine accepts the complement language L(M') = Σ* - L(M).",
        "ok": true,
        "why": "صحيح: إذا لم تكن هناك أي حالة قبول فلن يُقبل أي دخل ويكون L(M) = ∅. وقلب حالات القبول إلى غير قبول والعكس يقلب قرار الآلة لتقبل بالضبط متمم اللغة Σ* - L(M)."
      },
      {
        "ar": "إذا كانت F = ∅ فإن L(M) = {ε}، وعند استبدال F بـ Q - F تقبل الآلة نفس اللغة L(M).",
        "en": "If F = ∅ then L(M) = {ε}, and replacing F with Q - F yields the same language.",
        "ok": false,
        "why": "خطأ: إذا كانت F = ∅ فلا تقبل الآلة حتى ε وتكون اللغة ∅، واستبدال الحالات يعكس قرار القبول تماماً."
      },
      {
        "ar": "إذا كانت F = ∅ فإن L(M) = Σ*، وعند استبدال F بـ Q - F تكون اللغة فارغة دائماً.",
        "en": "If F = ∅ then L(M) = Σ*, and replacing F with Q - F always yields empty language.",
        "ok": false,
        "why": "خطأ: L(M) = Σ* تتحقق عندما تكون كل حالات الآلة حالات قبول (F = Q) وليس عندما تكون F = ∅."
      },
      {
        "ar": "تصبح الآلة غير محددة (NFA) وتتوقف عن العمل في كلا الحالتين.",
        "en": "The machine becomes non-deterministic (NFA) and halts in both cases.",
        "ok": false,
        "why": "خطأ: تحديد أو تغيير حالات القبول F لا يمس دالة الانتقال δ وتظل الآلة DFA تامة التحديد."
      }
    ],
    "ref": "L3-S036",
    "tip": "لإيجاد متمم لغة DFA منتظمة، كل ما عليك فعله هو قلب الحالات: اجعل كل حالة عادية حالة قبول، واجعل كل حالة قبول حالة عادية (F' = Q - F)."
  },
  {
    "n": 10,
    "type": "mcq",
    "q_ar": "في الجبر الصوري للتعبيرات النمطية (Regular Expressions)، أيٌّ من المتطابقات الجبرية التالية صحيحة دائماً لأي تعبيرين نمطيين R و S؟",
    "q_en": "In the formal algebra of Regular Expressions, which of the following algebraic identities is ALWAYS true for any regular expressions R and S?",
    "opts": [
      {
        "ar": "∅* = ε و (R + S)* = (R* S*)* و R · ∅ = ∅.",
        "en": "∅* = ε and (R + S)* = (R* S*)* and R · ∅ = ∅.",
        "ok": true,
        "why": "صحيح: نجمة كلين للمجموعة الفارغة تنتج السلسلة الفارغة (∅* = ε)، وتكرار الاتحاد يكافئ تكرار دمج النجمتين، والدمج مع ∅ يفرغ الناتج."
      },
      {
        "ar": "∅* = ∅ و R · ∅ = R و R* = R⁺.",
        "en": "∅* = ∅ and R · ∅ = R and R* = R⁺.",
        "ok": false,
        "why": "خطأ: ∅* = ε دائماً، و R · ∅ = ∅، و R* يحوي ε بينما R⁺ قد لا يحويها."
      },
      {
        "ar": "(R*)* = ε و R + ε = R لكل R.",
        "en": "(R*)* = ε and R + ε = R for all R.",
        "ok": false,
        "why": "خطأ: المتطابقة الصحيحة هي (R*)* = R*، والاتحاد مع ε يضيف السلسلة الفارغة للغة ولا يساوي R إلا إذا كانت ε ∈ L(R)."
      },
      {
        "ar": "(RS)* = R* S* دائماً.",
        "en": "(RS)* = R* S* always.",
        "ok": false,
        "why": "خطأ: (RS)* يسمح بتبادل تكرار R و S بالتناوب مثل rsrs، بينما R*S* يلزم بظهور كل مقاطع R أولاً ثم كل مقاطع S مثل rrrsss."
      }
    ],
    "ref": "L4-S004",
    "tip": "قاعدة حاسمة: ∅* = ε لأن نجمة كلين لأي مجموعة تحوي دائماً تكرار الصفر وهو ε. بينما R · ∅ = ∅ لأن الدمج مع لا شيء ينتج لا شيء."
  },
  {
    "n": 11,
    "type": "mcq",
    "q_ar": "في خوارزمية طومسون القياسية (Thompson's Construction) لتحويل التعبير النمطي للاتحاد (R₁ + R₂) إلى آلة NFA مكافئة، كيف يتم الربط البنيوي بين الآلتين الجزئيتين M(R₁) و M(R₂)؟",
    "q_en": "In standard Thompson's Construction for converting a union regular expression (R₁ + R₂) into an equivalent NFA, how are the two sub-automata M(R₁) and M(R₂) structurally connected?",
    "opts": [
      {
        "ar": "إنشاء حالة بداية جديدة تُفرّع بانتقالات ε إلى حالتي البداية للآلتين، وتوجيه انتقالات ε من حالات قبول الآلتين إلى حالة قبول نهائية موحدة جديدة.",
        "en": "Create a new start state with ε-transitions branching to both start states, and add ε-transitions from both sub-automata accept states to a single new final accept state.",
        "ok": true,
        "why": "صحيح: بناء الاتحاد في طومسون يضمن التوازي بإضافة حالة بداية جديدة تنقسم بـ ε للآلتين، وتجميع مسارات القبول بـ ε نحو حالة قبول نهائية فريدة."
      },
      {
        "ar": "ربط حالة القبول للآلة الأولى M(R₁) مباشرة بحالة البداية للآلة الثانية M(R₂) بانتقال ε.",
        "en": "Connect the accept state of M(R₁) directly to the start state of M(R₂) via an ε-transition.",
        "ok": false,
        "why": "خطأ: هذا هو البناء الهيكلي لعملية التسلسل والدمج (Concatenation: R₁ R₂) وليس الاتحاد (Union)."
      },
      {
        "ar": "دمج حالتي البداية وحالتي القبول في حالة واحدة دون أي انتقالات إبسيلون ε.",
        "en": "Merge start and accept states into a single state without any ε-transitions.",
        "ok": false,
        "why": "خطأ: طومسون تعتمد بنيوياً على إضافة حالات جديدة وانتقالات ε لضمان عزل مسارات الآلات الجزئية."
      },
      {
        "ar": "إضافة حلقة ذاتية (Self-loop) بـ ε على حالة البداية للآلة الأولى فقط.",
        "en": "Add an ε self-loop only to the start state of the first machine.",
        "ok": false,
        "why": "خطأ: الحلقة الذاتية لا تتيح الاختيار والتفريع بين لغتين مختلفتين."
      }
    ],
    "ref": "L4-S023",
    "tip": "في خوارزمية طومسون: الاتحاد (R₁ + R₂) يفتح مسارين متوازيين عبر حالة بداية جديدة وحالة نهاية جديدة متصلتين بأسهم ε."
  },
  {
    "n": 12,
    "type": "mcq",
    "q_ar": "في نظرية القواعد الصورية G = (V, T, S, P)، ما هو الفارق الدقيق بين «الشكل الجملي» (Sentential Form) و «الجملة» (Sentence)؟",
    "q_en": "In formal grammar theory G = (V, T, S, P), what is the exact distinction between a \"Sentential Form\" and a \"Sentence\"?",
    "opts": [
      {
        "ar": "الشكل الجملي هو أي سلسلة α ∈ (V ∪ T)* يمكن اشتقاقها من S (S ⇒* α)، وتكون «جملة» إذا وفقط إذا خلت تماماً من المتغيرات وأصبحت مكونة من رموز طرفية فقط (α ∈ T*).",
        "en": "A sentential form is any string α ∈ (V ∪ T)* derivable from S (S ⇒* α), and becomes a \"sentence\" iff it contains only terminal symbols (α ∈ T*).",
        "ok": true,
        "why": "صحيح: كل خطوة اشتقاق تنتج Sentential Form قد يحتوي على متغيرات ورموز طرفية، ولا تصبح السلسلة جملة (Sentence) وتنتمي إلى L(G) إلا عند خلوها تماماً من أي متغيرات."
      },
      {
        "ar": "الشكل الجملي يحتوي فقط على رموز طرفية T* بينما الجملة تحتوي فقط على متغيرات V*.",
        "en": "A sentential form contains only terminals T*, while a sentence contains only non-terminals V*.",
        "ok": false,
        "why": "خطأ: الجملة (Sentence) هي التي يجب أن تتكون حصراً من رموز طرفية T* وتنتمي إلى لغة القواعد L(G)."
      },
      {
        "ar": "الشكل الجملي هو قاعدة إنتاج A → α في P بينما الجملة هي لغة القواعد L(G).",
        "en": "A sentential form is a production rule in P, while a sentence is the grammar language L(G).",
        "ok": false,
        "why": "خطأ: الشكل الجملي هو سلسلة ناتجة عن مسار اشتقاق وليس قاعدة إنتاج منفردة."
      },
      {
        "ar": "لا يوجد فرق بينهما، فكل سلسلة مشتقة من S تُسمى جملة وشكلاً جملياً في نفس الوقت حتى مع بقاء المتغيرات.",
        "en": "There is no difference; every string derived from S is called both a sentence and a sentential form even with remaining variables.",
        "ok": false,
        "why": "خطأ: وجود أي متغير غير طرفي يمنع تصنيف السلسلة كـ Sentence ويجعلها Sentential form فقط."
      }
    ],
    "ref": "L5-S012",
    "tip": "معادلة ذهبية: كل Sentence هي Sentential Form خالصة من المتغيرات (w ∈ T*)، ولغة القواعد L(G) هي حصراً مجموعة كل الجمل (Sentences)."
  },
  {
    "n": 13,
    "type": "mcq",
    "q_ar": "لماذا تُصنف القواعد التالية G: {S → aB, B → Sb | ε} كقواعد خطية (Linear Grammar) وليست قواعد منتظمة (Regular Grammar)؟",
    "q_en": "Why is the grammar G: {S → aB, B → Sb | ε} classified as a Linear Grammar and NOT a Regular Grammar?",
    "opts": [
      {
        "ar": "لأنها تحتوي على قاعدة خطية يمينية (S → aB) وقاعدة خطية يسارية (B → Sb) في نفس النظام، ويُشترط في القواعد المنتظمة أن تكون جميع قواعدها من نفس الاتجاه حصراً.",
        "en": "Because it contains a right-linear rule (S → aB) and a left-linear rule (B → Sb) in the same system, whereas a regular grammar must strictly have all rules in the same direction.",
        "ok": true,
        "why": "صحيح: القواعد المنتظمة تشترط أن تكون إما Right-Linear بالكامل أو Left-Linear بالكامل. الخلط بينهما في نفس القواعد يجعلها Linear CFG فقط ويمكّنها من توليد لغات غير منتظمة مثل {aⁿ bⁿ}."
      },
      {
        "ar": "لأنها تحتوي على أكثر من متغير في الطرف الأيمن لقواعد الإنتاج.",
        "en": "Because it contains more than one non-terminal on the right-hand side of production rules.",
        "ok": false,
        "why": "خطأ: كل قاعدة تحتوي على متغير واحد فقط في طرفها الأيمن، وهذا بالضبط ما يجعلها خطية (Linear)."
      },
      {
        "ar": "لأنها تحتوي على القاعدة الفارغة B → ε والقواعد المنتظمة تمنع السلسلة الفارغة تماماً.",
        "en": "Because it contains the epsilon rule B → ε, and regular grammars strictly forbid epsilon.",
        "ok": false,
        "why": "خطأ: قواعد الإنهاء بالسلسلة الفارغة ε مسموحة وشائعة جداً في القواعد المنتظمة لإنهاء مسارات الاشتقاق."
      },
      {
        "ar": "لأنها تولد لغة غير خالية من السياق (Non-CFL).",
        "en": "Because it generates a non-context-free language.",
        "ok": false,
        "why": "خطأ: هذه القواعد تولد لغة {aⁿ bⁿ} وهي لغة خالية من السياق (Context-Free Language) قياسية."
      }
    ],
    "ref": "L6-S033",
    "tip": "قاعدة تشومسكي الذهبية: القواعد المنتظمة (Type-3) تكون إما Right-Linear بالكامل أو Left-Linear بالكامل؛ الخلط بينهما في نفس القواعد يحولها إلى Linear CFG قادرة على توليد لغات غير منتظمة مثل {aⁿ bⁿ}."
  },
  {
    "n": 14,
    "type": "mcq",
    "q_ar": "عند تطبيق خوارزمية تحويل آلة DFA M = (Q, Σ, δ, q₀, F) إلى قواعد خطية يمينية مكافئة G = (V, T, S, P)، كيف يتم توليد قواعد الإنتاج P بدقة لكل انتقال ولكل حالة قبول؟",
    "q_en": "When applying the algorithm to convert a DFA M = (Q, Σ, δ, q₀, F) into an equivalent right-linear grammar G = (V, T, S, P), how are production rules in P precisely generated for each transition and each accept state?",
    "opts": [
      {
        "ar": "لكل انتقال δ(qᵢ, a) = qⱼ نضيف القاعدة qᵢ → a qⱼ، ولكل حالة قبول q_k ∈ F نضيف قاعدة الإنهاء q_k → λ (أو ε).",
        "en": "For each transition δ(qᵢ, a) = qⱼ add production qᵢ → a qⱼ, and for each accept state q_k ∈ F add termination production q_k → λ (or ε).",
        "ok": true,
        "why": "صحيح: كل انتقال في DFA يُمثل بقاعدة خطية يمينية تحاكي قراءة الرمز والانتقال للحالة التالية، وكل حالة قبول تُمثل بقاعدة تفريغ إلى λ لإتاحة إنهاء الكلمة بنجاح."
      },
      {
        "ar": "لكل انتقال δ(qᵢ, a) = qⱼ نضيف القاعدة qⱼ → a qᵢ، ولكل حالة q_k ∉ F نضيف q_k → λ.",
        "en": "For each transition δ(qᵢ, a) = qⱼ add production qⱼ → a qᵢ, and for each non-accept state q_k ∉ F add q_k → λ.",
        "ok": false,
        "why": "خطأ: هذا يعكس اتجاه الاشتقاق، وقواعد الإنهاء λ تضاف حصراً لحالات القبول F وليس للحالات المرفوضة."
      },
      {
        "ar": "لكل انتقال نضيف qᵢ → qⱼ a (خطية يسارية) ولا نضيف أي قواعد لحالات القبول.",
        "en": "For each transition add qᵢ → qⱼ a (left-linear) and add no rules for accept states.",
        "ok": false,
        "why": "خطأ: الخوارزمية القياسية تولد Right-Linear Grammar حيث يسبق الرمز الطرفي المتغير، وإغفال حالات القبول يمنع إنهاء أي كلمة."
      },
      {
        "ar": "نضيف فقط قاعدة واحدة شاملة S → Σ* F.",
        "en": "Add only a single generic rule S → Σ* F.",
        "ok": false,
        "why": "خطأ: قواعد الإنتاج يجب أن تفصل كل حركة في الآلة بصورة صورية دقيقة."
      }
    ],
    "ref": "L6-S047",
    "tip": "خوارزمية التحويل المباشرة: كل سهم في DFA ($q_i \\xrightarrow{a} q_j$) يقابله في الجرامر $q_i \\to a q_j$. وكل دائرة مزدوجة ($q_k \\in F$) يقابلها $q_k \\to \\lambda$."
  }
];
