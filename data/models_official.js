window.TOC_MODELS = window.TOC_MODELS || [];

window.TOC_MODELS.unshift({
  "id": "m_official",
  "kind": "نظري معتمد",
  "title_ar": "النموذج الفصلي الجامعي الرسمي (معتمد مع الحل والرسومات)",
  "origin_ar": "النموذج الورقي الرسمي الفصلي لمقرر نظرية الحوسبة واللغات الصورية — د. رويدا العامري — شامل الأسئلة الصح والخطأ والمسائل المقالية ورسومات الأوتوماتا والاشتقاقات وتصحيحات دفتر الطالب",
  "origin_label": "ورقة الاختبار الفصلي الرسمية",
  "questions": [
    {
      "n": 1,
      "type": "tf",
      "q_en": "An alphabet is a finite set of fundamental symbols.",
      "q_ar": "الأبجدية هي مجموعة محدودة من الرموز الأساسية.",
      "opts": [
        {
          "ar": "صح (True)",
          "en": "True",
          "ok": true,
          "why": "الأبجدية مثل Σ = {a, b} أو Σ = {0, 1} تُعرّف رياضياً بأنها مجموعة منتهية (Finite Set) وغير فارغة من الرموز الأساسية التي تُبنى منها السلاسل واللغات."
        },
        {
          "ar": "خطأ (False)",
          "en": "False",
          "ok": false,
          "why": "العبارة صحيحة تماماً؛ فالأبجدية لا يجوز أن تكون لانهائية أبداً."
        }
      ],
      "ref": "L1-S013",
      "badge": "🏷️ سؤال امتحان رسمي — Q1.1",
      "tip": "قاعدة ذهبية: الأبجدية Σ منتهية دائماً، بينما اللغة L المكونة من رموز Σ قد تكون منتهية أو لانهائية."
    },
    {
      "n": 2,
      "type": "tf",
      "q_en": "In DFA, for each state and each input symbol, there is exactly one transition.",
      "q_ar": "في الـ DFA، لكل حالة ولكل رمز إدخال يوجد انتقال واحد فقط بالضبط.",
      "opts": [
        {
          "ar": "صح (True)",
          "en": "True",
          "ok": true,
          "why": "DFA تعني Deterministic Finite Automaton (حتمية)، والشرط الحاسم للحتمية هو خروج سهم واحد فقط ومحدد لكل رمز إدخال من كل حالة، ولا يُسمح بانتقالات إبسيلون (ε)."
        },
        {
          "ar": "خطأ (False)",
          "en": "False",
          "ok": false,
          "why": "العبارة صحيحة؛ إذا وُجد أكثر من سهم لنفس الرمز أو سهم فارغ فتتحول الآلة فوراً إلى NFA."
        }
      ],
      "ref": "L4-S004",
      "badge": "🏷️ سؤال امتحان رسمي — Q1.2",
      "tip": "قاعدة الحتمية: في DFA دالة الانتقال δ: Q × Σ → Q تنتج حالة واحدة مفردة، بينما في NFA δ: Q × (Σ ∪ {ε}) → 2^Q تنتج مجموعة حالات."
    },
    {
      "n": 3,
      "type": "tf",
      "q_en": "A Finite Automaton is a mathematical model that consists of a finite number of states and moves between states when reading input symbols.",
      "q_ar": "الأوتوماتا المنتهية نموذج رياضي يتكون من عدد محدود من الحالات وينتقل بينها عند قراءة رموز الإدخال.",
      "opts": [
        {
          "ar": "صح (True)",
          "en": "True",
          "ok": true,
          "why": "هذا هو التعريف الدقيق للآلة المنتهية (Finite Automaton): نموذج تجريدي ذو عدد محدود من الحالات يغير حالته وفق دالة الانتقال مع قراءة كل رمز."
        },
        {
          "ar": "خطأ (False)",
          "en": "False",
          "ok": false,
          "why": "العبارة صحيحة تماماً ومطابقة لتعريف المقرر الرسمي."
        }
      ],
      "ref": "L4-S002",
      "badge": "🏷️ سؤال امتحان رسمي — Q1.3",
      "tip": "الآلة المنتهية نموذج بدون ذاكرة إضافية (تعتمد فقط على حالتها الحالية لقراءة الرمز التالي)."
    },
    {
      "n": 4,
      "type": "tf",
      "q_en": "If u = 'abb' and v = 'ab', then uv = 'abba'.",
      "q_ar": "إذا كان u = abb و v = ab فإن دمجهما uv يساوي abba.",
      "opts": [
        {
          "ar": "صح (True)",
          "en": "True",
          "ok": false,
          "why": "خطأ! دمج السلاسل (Concatenation) يعني وضع السلسلة v مباشرة بعد السلسلة u، فيكون الناتج uv = abb · ab = abbab بطول 5 وليس abba بطول 4."
        },
        {
          "ar": "خطأ (False)",
          "en": "False",
          "ok": true,
          "why": "الصحيح: uv = abbab لأننا نلصق v بعد u مباشرة: |uv| = |u| + |v| = 3 + 2 = 5."
        }
      ],
      "correction": "uv = abb · ab = abbab (وليس abba)",
      "ref": "L1-S017",
      "badge": "🏷️ سؤال امتحان رسمي — Q1.4",
      "tip": "انتبه: عملية دمج السلاسل ليست تبادلية: uv = abbab بينما vu = ababb."
    },
    {
      "n": 5,
      "type": "tf",
      "q_en": "A formal language is a set of strings over an alphabet.",
      "q_ar": "اللغة الشكلية هي مجموعة من السلاسل المكوّنة من رموز أبجدية ما.",
      "opts": [
        {
          "ar": "صح (True)",
          "en": "True",
          "ok": true,
          "why": "صحيح، رياضياً أي لغة صورية L فوق الأبجدية Σ هي ببساطة مجموعة جزئية من فضاء جميع السلاسل الممكنة (L ⊆ Σ*)."
        },
        {
          "ar": "خطأ (False)",
          "en": "False",
          "ok": false,
          "why": "العبارة صحيحة؛ فاللغات الصورية في علوم الحاسب تُعرّف رياضياً كمجموعات سلاسل."
        }
      ],
      "ref": "L1-S021",
      "badge": "🏷️ سؤال امتحان رسمي — Q1.5",
      "tip": "تذكر: السلسلة (String) متتالية رموز، واللغة (Language) مجموعة سلاسل."
    },
    {
      "n": 6,
      "type": "tf",
      "q_en": "If a finite automaton ends in a final state after processing the entire input, then the machine stops immediately.",
      "q_ar": "إذا انتهت الأوتوماتا في حالة نهائية بعد معالجة كامل الإدخال فإن الآلة تتوقف.",
      "opts": [
        {
          "ar": "صح (True)",
          "en": "True",
          "ok": true,
          "why": "صحيح، لأن كامل شريط الإدخال قد نَفَد (Entire input processed)، وبما أنها بلغت حالة نهائية (Final State) فالآلة تتوقف وتُعلن قبول السلسلة (Accepted)."
        },
        {
          "ar": "خطأ (False)",
          "en": "False",
          "ok": false,
          "why": "العبارة صحيحة في معيار عمل الأوتوماتا؛ فالقرار بالقبول أو الرفض يصدر فور انتهاء مدخلات السلسلة."
        }
      ],
      "ref": "L4-S003",
      "badge": "🏷️ سؤال امتحان رسمي — Q1.6",
      "tip": "شرط القبول: قراءة كامل الإدخال + التواجد في حالة نهائية q ∈ F."
    },
    {
      "n": 7,
      "type": "tf",
      "q_en": "Computability Theory is the branch that studies problems that cannot be solved by any algorithm.",
      "q_ar": "نظرية القابلية للحساب هي الفرع الذي يدرس المسائل التي لا يمكن حلها بأي خوارزمية.",
      "opts": [
        {
          "ar": "صح (True)",
          "en": "True",
          "ok": false,
          "why": "خطأ! الصياغة حاصرة وناقصة؛ نظرية القابلية للحساب تدرس ما يمكن وما لا يمكن حله خوارزمياً (which problems can and cannot be solved)."
        },
        {
          "ar": "خطأ (False)",
          "en": "False",
          "ok": true,
          "why": "الصحيح: نظرية قابلية الحساب تدرس كلا الجانبين: المشكلات القابلة للحل (Solvable/Decidable) وتلك غير القابلة للحل (Undecidable)."
        }
      ],
      "correction": "Computability Theory studies which problems CAN and CANNOT be solved by algorithms.",
      "ref": "L1-S006",
      "badge": "🏷️ سؤال امتحان رسمي — Q1.7",
      "tip": "فخ امتحاني كلاسيكي: حذف كلمة 'can' يجعل العبارة خاطئة؛ فالنظرية تُصنف القابل للحل وغير القابل للحل معاً."
    },
    {
      "n": 8,
      "type": "tf",
      "q_en": "Grammar is a set of rules for accepted language.",
      "q_ar": "الـ Grammar هي مجموعة قواعد للغة المقبولة.",
      "opts": [
        {
          "ar": "صح (True)",
          "en": "True",
          "ok": false,
          "why": "خطأ! القواعد (Grammar) تُوَلِّد اللغة (Generates a language)، بينما الأوتوماتا والآلات هي التي تقبل وترفض اللغة (Automaton Accepts/Rejects)."
        },
        {
          "ar": "خطأ (False)",
          "en": "False",
          "ok": true,
          "why": "الصحيح: A grammar is a set of production rules used to GENERATE a language. (Grammar -> Generates, Automaton -> Accepts)."
        }
      ],
      "correction": "Grammar generates a language, while an Automaton accepts a language.",
      "ref": "L1-S008",
      "badge": "🏷️ سؤال امتحان رسمي — Q1.8",
      "tip": "قاعدة ذهبية ثابتة: القواعد تُوَلِّد (Generates)، والآلات تفحص وتقبل (Accepts)."
    },
    {
      "n": 9,
      "type": "tf",
      "q_en": "Grammar is the process of applying Production Rules starting from the Start Symbol until we reach a string that contains only Terminals.",
      "q_ar": "الـ Grammar هي عملية تطبيق قواعد الإنتاج بدءًا من رمز البداية حتى الوصول إلى سلسلة تحتوي فقط على Terminals.",
      "opts": [
        {
          "ar": "صح (True)",
          "en": "True",
          "ok": false,
          "why": "خطأ! هذه العملية تسمى الاشتقاق (Derivation) وليست الـ Grammar."
        },
        {
          "ar": "خطأ (False)",
          "en": "False",
          "ok": true,
          "why": "الصحيح: هذا تعريف الاشتقاق (Derivation): هو مسار تطبيق قواعد الإنتاج خطوة بخطوة من رمز البداية S حتى الوصول إلى سلسلة من الرموز الطرفية (Terminals)."
        }
      ],
      "correction": "This is the definition of Derivation, not Grammar.",
      "ref": "L6-S006",
      "badge": "🏷️ سؤال امتحان رسمي — Q1.9",
      "tip": "الفرق الدقيق: Grammar هي النظام الكامل G=(V,Σ,P,S)، بينما Derivation هو تسلسل خطوات التعويض الفعلية S => ... => w."
    },
    {
      "n": 10,
      "type": "tf",
      "q_en": "A formal grammar is generally defined as G = (Q, Σ, P, F).",
      "q_ar": "الـ Formal Grammar تُعرّف عادةً بالشكل G = (Q, Σ, P, F).",
      "opts": [
        {
          "ar": "صح (True)",
          "en": "True",
          "ok": false,
          "why": "خطأ! الرباعية المذكورة خاطئة تماماً؛ فالرموز Q و F تخص الأوتوماتون (Automaton M = (Q, Σ, δ, q0, F))."
        },
        {
          "ar": "خطأ (False)",
          "en": "False",
          "ok": true,
          "why": "الصحيح: القواعد الشكلية تُعرّف برباعية: G = (V, Σ, P, S) حيث V المتغيرات، Σ الرموز الطرفية، P قواعد الإنتاج، S رمز البداية."
        }
      ],
      "correction": "G = (V, Σ, P, S) حيث V=Variables, Σ=Terminals, P=Productions, S=Start Symbol.",
      "ref": "L6-S003",
      "badge": "🏷️ سؤال امتحان رسمي — Q1.10",
      "tip": "قارن دائماً: القواعد G=(V, Σ, P, S) بينما الآلات المنتهية M=(Q, Σ, δ, q0, F)."
    },
    {
      "n": 11,
      "type": "problem",
      "q_en": "Q2: How does a finite automaton work?",
      "q_ar": "السؤال الثاني المقالي: كيف تعمل الأوتوماتا المنتهية (Finite Automaton)؟",
      "opts": [
        {
          "ar": "عرض الحل النموذجي المعتمد مع الرسم التوضيحي",
          "en": "View Model Answer & Workflow Diagram",
          "ok": true,
          "why": "الحل الكامل المعتمد:\n1. تبدأ الآلة من الحالة الابتدائية (Initial State q0).\n2. تقرأ رموز سلسلة الدخل رمزاً برمز بالتتابع من اليسار لليمين.\n3. تنتقل بين الحالات وفق دالة الانتقال δ(state, symbol).\n4. عند قراءة آخر رمز، إذا استقرت في حالة نهائية (Final State q ∈ F) تُقبل السلسلة (Accepted)، وإلا تُرفض (Rejected)."
        }
      ],
      "diagram": `<div style="background:var(--sf); border:1px solid var(--ln); border-radius:14px; padding:18px; margin:14px 0; text-align:center;">
        <svg viewBox="0 0 850 210" style="max-width:100%; height:auto;">
          <defs>
            <marker id="arr1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="var(--acc)"/></marker>
          </defs>
          <rect x="20" y="65" width="160" height="70" rx="14" fill="var(--sf2)" stroke="var(--acc)" stroke-width="2"/>
          <text x="100" y="95" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)">الحالة الابتدائية</text>
          <text x="100" y="120" text-anchor="middle" font-size="15" fill="var(--acc)">Initial State (q₀)</text>
          
          <line x1="180" y1="100" x2="295" y2="100" stroke="var(--acc)" stroke-width="3" marker-end="url(#arr1)"/>
          <text x="237" y="85" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink-m)">قراءة رمز واحد</text>
          
          <rect x="300" y="65" width="190" height="70" rx="14" fill="var(--sf2)" stroke="var(--ln)" stroke-width="2"/>
          <text x="395" y="95" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink)">الانتقال بالحالات</text>
          <text x="395" y="120" text-anchor="middle" font-size="14" fill="var(--acc)">δ(state, symbol)</text>
          
          <line x1="490" y1="100" x2="605" y2="100" stroke="var(--acc)" stroke-width="3" marker-end="url(#arr1)"/>
          <text x="547" y="85" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink-m)">بعد نفاد كامل الدخل</text>
          
          <rect x="610" y="30" width="220" height="60" rx="14" fill="rgba(46,160,67,0.15)" stroke="var(--ok)" stroke-width="2"/>
          <text x="720" y="66" text-anchor="middle" font-size="16" font-weight="800" fill="var(--ok)">حالة نهائية (Final) ➔ قبول (Accept)</text>
          
          <rect x="610" y="115" width="220" height="60" rx="14" fill="rgba(217,138,138,0.15)" stroke="var(--err)" stroke-width="2"/>
          <text x="720" y="151" text-anchor="middle" font-size="16" font-weight="800" fill="var(--err)">غير نهائية ➔ رفض (Reject)</text>
        </svg>
      </div>`,
      "ref": "L4-S002",
      "badge": "🏷️ سؤال امتحان رسمي — Q2",
      "tip": "الصيغة الإنجليزية المعتمدة في الامتحان:\n\"A finite automaton starts at the initial state, reads input one symbol at a time, and moves between states according to the transition function δ. After the entire input is read, if it ends in a final state, the string is accepted; otherwise, it is rejected.\""
    },
    {
      "n": 12,
      "type": "problem",
      "q_en": "Q3: Draw a graph representing all the strings generated by the following language: L = { a^(n+1) | n >= 0 }?",
      "q_ar": "السؤال الثالث: ارسم مخطط أوتوماتون يمثل جميع السلاسل المولدة من اللغة L = { a^(n+1) | n ≥ 0 }؟",
      "opts": [
        {
          "ar": "عرض التحليل الرياضي ورسم الـ DFA الكامل",
          "en": "View Derivation & DFA State Machine Graph",
          "ok": true,
          "why": "تحليل قيم n:\n• n = 0 ➔ a^(0+1) = a\n• n = 1 ➔ a^(1+1) = aa\n• n = 2 ➔ a^(2+1) = aaa\nإذن اللغة هي: L = {a, aa, aaa, aaaa, ...} = a⁺\nملاحظة حاسمة: السلسلة الفارغة ε غير مقبولة (ε ∉ L)؛ لذلك تبدأ الآلة من q0 غير النهائية، وتنتقل بقراءة رمز a إلى الحالة النهائية q1، ثم تدور بحلقة Loop على q1 لقراءة أي عدد إضافي من a."
        }
      ],
      "diagram": `<div style="background:var(--sf); border:1px solid var(--ln); border-radius:14px; padding:18px; margin:14px 0; text-align:center;">
        <svg viewBox="0 0 650 220" style="max-width:100%; height:auto;">
          <defs>
            <marker id="arr2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="var(--acc)"/></marker>
          </defs>
          <!-- Start Arrow -->
          <line x1="40" y1="110" x2="135" y2="110" stroke="var(--acc)" stroke-width="3" marker-end="url(#arr2)"/>
          <text x="75" y="95" font-size="14" font-weight="700" fill="var(--ink-m)">البداية (Start)</text>
          
          <!-- State q0 -->
          <circle cx="180" cy="110" r="42" fill="var(--sf2)" stroke="var(--ln)" stroke-width="3"/>
          <text x="180" y="117" text-anchor="middle" font-size="22" font-weight="800" fill="var(--ink)">q0</text>
          
          <!-- Transition on a -->
          <line x1="222" y1="110" x2="385" y2="110" stroke="var(--acc)" stroke-width="3.5" marker-end="url(#arr2)"/>
          <text x="303" y="92" text-anchor="middle" font-size="24" font-weight="800" fill="var(--acc)">a</text>
          
          <!-- State q1 (Double Circle Final) -->
          <circle cx="440" cy="110" r="46" fill="var(--sf2)" stroke="var(--ok)" stroke-width="3.5"/>
          <circle cx="440" cy="110" r="37" fill="none" stroke="var(--ok)" stroke-width="2"/>
          <text x="440" y="117" text-anchor="middle" font-size="22" font-weight="800" fill="var(--ink)">q1</text>
          
          <!-- Self Loop on a -->
          <path d="M415 68 C380 -5, 500 -5, 465 68" fill="none" stroke="var(--acc)" stroke-width="3" marker-end="url(#arr2)"/>
          <text x="440" y="24" text-anchor="middle" font-size="22" font-weight="800" fill="var(--acc)">a</text>
          
          <text x="325" y="195" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink-m)">L(M) = {a, aa, aaa, aaaa, ...} = a⁺ (بدون إبسيلون ε)</text>
        </svg>
      </div>`,
      "ref": "L4-S015",
      "badge": "🏷️ سؤال امتحان رسمي — Q3",
      "tip": "تنبيه من دفتر الطالب: لا تجعل حالة البداية q0 نهائية أبداً! لأن جعلها نهائية يعني قبول السلسلة الفارغة ε، بينما شرط الأس هو n+1 ≥ 1 مما يفرض وجود رمز a واحد على الأقل."
    },
    {
      "n": 13,
      "type": "problem",
      "q_en": "Q4: If the Grammar is: S ➔ Ab, A ➔ aAb, A ➔ λ. Derive all strings from this grammar (RE), then construct the regular language (RL)?",
      "q_ar": "السؤال الرابع: إذا كانت القواعد كما يلي: S ➔ Ab, A ➔ aAb, A ➔ λ. اشتق السلاسل واكتب لغة القواعد الناتجة؟",
      "opts": [
        {
          "ar": "عرض خطوات الاشتقاق التفصيلية + التنبيه الأكاديمي الحاسم",
          "en": "View Derivation Steps & Critical Academic Correction",
          "ok": true,
          "why": "خطوات الاشتقاق بالتتابع:\n1. للاشتقاق الأقصر (تعويض A ➔ λ):\n   S ⟹ Ab ⟹ λb ⟹ b\n2. للاشتقاق الثاني (تطبيق A ➔ aAb مرة واحدة ثم A ➔ λ):\n   S ⟹ Ab ⟹ aAbb ⟹ aλbb ⟹ abb\n3. للاشتقاق الثالث:\n   S ⟹ Ab ⟹ aAbb ⟹ aaAbbb ⟹ aaλbbb ⟹ aabbb\n4. للاشتقاق الرابع:\n   S ⟹ ... ⟹ aaaλbbbb ⟹ aaabbbb\n\nالنمط العام للغة الناتجة هو:\nL = { b, abb, aabbb, aaabbbb, ... } = { aⁿ bⁿ⁺¹ | n ≥ 0 }\n\n⚠️ تنبيه امتحاني وتصحيح أكاديمي جوهري:\nإذا ورد في ورقة السؤال طلب 'Regular Expression (RE)' أو 'Regular Language (RL)' فهذا خطأ في صياغة السؤال الامتحاني؛ لأن هذه اللغة تتطلب تطابقاً بين عدد رموز a وعدد رموز b بالعلاقة (#b = #a + 1)، وهذه لغة غير منتظمة (Non-Regular) وتحتاج إلى ذاكرة مكدس (PDA)، وبالتالي يستحيل كتابة تعبير نمطي (RE) مكافئ لها أو رسم DFA لها. الحل المعتمد المطلوب هو كتابة صيغة اللغة الرياضية: L = { aⁿ bⁿ⁺¹ | n ≥ 0 }."
        }
      ],
      "diagram": `<div style="background:var(--sf); border:1px solid var(--ln); border-radius:14px; padding:18px; margin:14px 0;">
        <div style="font-family:var(--fm); font-size:1.05rem; line-height:2.1; color:var(--ink); background:var(--sf2); padding:14px; border-radius:10px; border-right:4px solid var(--acc);">
          <b>S ⟹ Ab ⟹ λb ⟹ <span style="color:var(--ok)">b</span> (عند n=0)</b><br>
          <b>S ⟹ Ab ⟹ aAbb ⟹ aλbb ⟹ <span style="color:var(--ok)">abb</span> (عند n=1)</b><br>
          <b>S ⟹ Ab ⟹ aAbb ⟹ aaAbbb ⟹ aaλbbb ⟹ <span style="color:var(--ok)">aabbb</span> (عند n=2)</b><br>
          <b>S ⟹ Ab ⟹ aAbb ⟹ aaAbbb ⟹ aaaAbbbb ⟹ <span style="color:var(--ok)">aaabbbb</span> (عند n=3)</b>
        </div>
        <div style="margin-top:12px; font-weight:800; color:var(--acc); font-size:1.15rem; text-align:center;">
          الصيغة المعيارية للغة: L = { aⁿ bⁿ⁺¹ | n ≥ 0 }
        </div>
      </div>`,
      "ref": "L6-S012",
      "badge": "🏷️ سؤال امتحان رسمي — Q4",
      "tip": "طريقة الحل السريع في الامتحان: لاحظ أن كل تطبيق لقاعدة A ➔ aAb يضيف رمز a في البداية ورمز b في النهاية بنفس العدد، والرمز b الأساسي القادم من S ➔ Ab يبقى ثابتاً في النهاية، فتكون النتيجة دوماً aⁿ متبوعة بـ bⁿ⁺¹."
    }
  ]
});
