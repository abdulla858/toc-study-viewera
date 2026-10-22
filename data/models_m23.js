window.TOC_MODELS = window.TOC_MODELS || [];

window.TOC_MODELS.push({
 "id": "m2",
 "kind": "عملي",
 "title_ar": "نموذج محاكي عملي (تصميم وتتبع)",
 "origin_ar": "نماذج تدريبية وتتبعية مولّدة ومطوّرة بالذكاء الاصطناعي حصرياً من واقع سلايدات المقرر وأمثلته المحلولة (بناء DFA، تتبع كلمات، جداول انتقال، regex→NFA، minimize) مع وقفة امتحانية لكل سؤال.",
 "questions": [
  {
   "n": 1,
   "type": "mcq",
   "q_ar": "آلة DFA على الأبجدية Σ = {0, 1} تتكون من الحالات Q = {q0, q1, q2} مع حالة البداية q0 وحالة القبول F = {q2}. الانتقالات معطاة كالتالي: من q0 بالرمز 0 إلى q1، وبالرمز 1 إلى q0؛ ومن q1 بالرمز 0 إلى q1، وبالرمز 1 إلى q2؛ ومن q2 بالرمز 0 إلى q1، وبالرمز 1 إلى q0. عند إدخال السلسلة w = '1001' على هذه الآلة، ما هو مسار التنفيذ الكامل والقرار النهائي للآلة؟",
   "q_en": "A DFA over Σ = {0, 1} has states Q = {q0, q1, q2}, start state q0, and accept state F = {q2}. Transitions: δ(q0, 0)=q1, δ(q0, 1)=q0; δ(q1, 0)=q1, δ(q1, 1)=q2; δ(q2, 0)=q1, δ(q2, 1)=q0. What is the full execution trace and final decision for input w = '1001'?",
   "opts": [
    {
     "ar": "المسار هو: q0 --1--> q0 --0--> q1 --0--> q1 --1--> q2، وتقبل الآلة السلسلة لأن q2 ∈ F.",
     "en": "Trace: q0 --1--> q0 --0--> q1 --0--> q1 --1--> q2, and the machine ACCEPTS because q2 ∈ F.",
     "ok": true,
     "why": "صحيح: معالجة الرمز '1' الأول تبقي الآلة في q0، ثم الرمز '0' ينقلها إلى q1، ثم الرمز '0' يبقيها في q1، وأخيراً الرمز '1' ينقلها إلى حالة القبول q2."
    },
    {
     "ar": "المسار هو: q0 --1--> q1 --0--> q1 --0--> q2 --1--> q0، وترفض الآلة السلسلة لأن q0 ∉ F.",
     "en": "Trace: q0 --1--> q1 --0--> q1 --0--> q2 --1--> q0, and the machine REJECTS because q0 ∉ F.",
     "ok": false,
     "why": "خطأ: الانتقال من q0 بالرمز '1' يؤدي إلى q0 ذاتها وليس q1، مما يجعل المسار المقترح غير صحيح."
    },
    {
     "ar": "المسار هو: q0 --1--> q0 --0--> q2 --0--> q1 --1--> q2، وترفض الآلة السلسلة.",
     "en": "Trace: q0 --1--> q0 --0--> q2 --0--> q1 --1--> q2, and the machine REJECTS.",
     "ok": false,
     "why": "خطأ: الانتقال من q0 بالرمز '0' ينقل إلى q1 وليس q2، والقرار النهائي عند الاستقرار في q2 هو القبول وليس الرفض."
    },
    {
     "ar": "المسار يتوقف عند q1 لأن الرمز '0' مكرر، وترفض الآلة السلسلة.",
     "en": "The path halts at q1 due to duplicate '0', and the machine REJECTS.",
     "ok": false,
     "why": "خطأ: الـ DFA آلة كاملة التحديد ودالة الانتقال δ(q1, 0)=q1 معرفة وتسمح بالدوران الذاتي دون توقف."
    }
   ],
   "ref": "L3-S016",
   "tip": "عند تتبع مسار تنفيذ DFA، اكتب الحالة الحالية بعد قراءة كل رمز بدقة: الحالة الابتدائية لا تستهلك أي رمز، وعدد الانتقالات يساوي طول السلسلة المدخلة تماماً."
  },
  {
   "n": 2,
   "type": "mcq",
   "q_ar": "بالنظر لآلة الـ DFA في السؤال السابق (حيث حالة القبول الوحيدة هي q2)، تتبّع تنفيذ السلسلة w = '0110'. ما هي الحالة التي تستقر عندها الآلة وما هو قرارها؟",
   "q_en": "Considering the DFA from the previous question (where F = {q2}), trace the execution on string w = '0110'. Which state does it end in and what is the decision?",
   "opts": [
    {
     "ar": "تستقر عند الحالة q1 وترفض السلسلة (REJECT) لأن q1 ليست حالة قبول.",
     "en": "Ends at state q1 and REJECTS the string because q1 is not an accept state.",
     "ok": true,
     "why": "صحيح: المسار هو q0 --0--> q1 --1--> q2 --1--> q0 --0--> q1. الحالة النهائية هي q1 وبما أن q1 ∉ F فالقرار هو الرفض."
    },
    {
     "ar": "تستقر عند الحالة q2 وتقبل السلسلة (ACCEPT) لأنها زارت q2 أثناء القراءة.",
     "en": "Ends at state q2 and ACCEPTS the string because it visited q2 during processing.",
     "ok": false,
     "why": "خطأ: قرار قبول السلسلة في DFA يعتمد حصراً على الحالة التي تستقر فيها الآلة بعد انتهاء جميع رموز السلسلة، وليس على الحالات الوسيطة التي مرت بها."
    },
    {
     "ar": "تستقر عند الحالة q0 وترفض السلسلة (REJECT).",
     "en": "Ends at state q0 and REJECTS the string.",
     "ok": false,
     "why": "خطأ: بعد قراءة الرمز '0' الأخير تنتقل الآلة من q0 إلى q1، فلا تستقر عند q0."
    },
    {
     "ar": "تستقر عند حالة مصيدة (Trap state) غير معرفة.",
     "en": "Ends at an undefined trap state.",
     "ok": false,
     "why": "خطأ: جميع الحالات والانتقالات معرفة بشكل كامل داخل المجموعة Q ولا توجد حالة مصيدة غير معرفة."
    }
   ],
   "ref": "L3-S020",
   "tip": "فخ امتحاني متكرر: لا يعني مرور الآلة بحالة قبول أثناء المسار أنها قبلت السلسلة؛ العبرة دائماً بالحالة التي تقف عليها الآلة بعد استهلاك آخر رمز في الكلمة."
  },
  {
   "n": 3,
   "type": "mcq",
   "q_ar": "آلة DFA معرفة بالجدول التالي فوق Σ = {a, b}: الحالة q0 هي البداية وتنتقل بـ a إلى q1 وبـ b إلى q0؛ الحالة q1 تنتقل بـ a إلى q1 وبـ b إلى q2؛ الحالة q2 (حالة قبول مزدوجة الدائرة) تنتقل بـ a إلى q1 وبـ b إلى q0. ما هي لغة السلاسل L(M) التي تقبلها هذه الآلة بدقة؟",
   "q_en": "A DFA over Σ = {a, b} has start state q0 with transitions δ(q0,a)=q1, δ(q0,b)=q0; δ(q1,a)=q1, δ(q1,b)=q2; and accept state q2 with δ(q2,a)=q1, δ(q2,b)=q0. What is the exact language L(M) accepted by this DFA?",
   "opts": [
    {
     "ar": "لغة كل السلاسل التي تنتهي بالمقطع 'ab'.",
     "en": "The language of all strings ending with the substring 'ab'.",
     "ok": true,
     "why": "صحيح: للوصول إلى حالة القبول q2 يجب أن تقرأ الآلة الرمز 'a' (للانتقال إلى q1) متبوعاً مباشرة بالرمز 'b' (للانتقال إلى q2)، وأي رمز إضافي يعيد الآلة إلى q1 أو q0."
    },
    {
     "ar": "لغة كل السلاسل التي تبدأ بالمقطع 'ab'.",
     "en": "The language of all strings starting with the substring 'ab'.",
     "ok": false,
     "why": "خطأ: السلسلة 'bab' تقبلها الآلة رغم أنها تبدأ بـ 'b'، فالبداية بـ 'ab' ليست شرطاً."
    },
    {
     "ar": "لغة كل السلاسل التي تحتوي على عدد زوجي من الرمز 'a'.",
     "en": "The language of all strings with an even number of 'a's.",
     "ok": false,
     "why": "خطأ: السلسلة 'ab' مقبولة وبها 'a' واحدة فقط (عدد فردي)."
    },
    {
     "ar": "لغة كل السلاسل التي لا تحتوي على المقطع 'bb'.",
     "en": "The language of all strings that do not contain 'bb'.",
     "ok": false,
     "why": "خطأ: السلسلة 'b' لا تحتوي على 'bb' ومع ذلك ترفضها الآلة لأنها تستقر في q0."
    }
   ],
   "ref": "L3-S009",
   "tip": "لمعرفة لغة DFA من رسم أو جدول: تتبع أقصر السلاسل المقبولة أولاً، ثم افحص كيف تؤثر إضافة رموز جديدة في بداية الكلمة أو نهايتها على الرجوع لحالات سابقة."
  },
  {
   "n": 4,
   "type": "mcq",
   "q_ar": "نظام DFA يتكون من الحالات Q = {A, B, C, D, DEAD} فوق Σ = {a, b} للتعرف على السلسلة المفردة 'abba'. إذا كانت حالة البداية A وحالة القبول D، والمسار الناجح هو: A --a--> B --b--> C --b--> D --a--> [قبول]. إذا كانت الآلة في الحالة C وقرأت الرمز 'a' بدلاً من 'b'، إلى أي حالة يجب أن تنتقل الآلة وفق التصميم القياسي للآلات ذات الحالة الميتة؟",
   "q_en": "A DFA with Q = {A, B, C, D, DEAD} over Σ = {a, b} recognizes exactly the single string 'abba'. Start state is A, accept is D. The successful path is A --a--> B --b--> C --b--> D. If the machine is at state C and reads 'a' instead of 'b', to which state must it transition according to standard trap-state DFA design?",
   "opts": [
    {
     "ar": "تنتقل إلى حالة المصيدة (DEAD state) وتدور حول نفسها للأبد لجميع المدخلات اللاحقة.",
     "en": "Transitions to DEAD (trap) state and loops on itself forever for all subsequent inputs.",
     "ok": true,
     "why": "صحيح: بمجرد قراءة 'a' في الحالة C، تصبح البادئة المقروءة 'aba' وهي يستحيل أن تكون بداية للكلمة المستهدفة 'abba'، لذا يُرمى المسار إلى حالة المصيدة DEAD."
    },
    {
     "ar": "تعود إلى حالة البداية A لتعيد المحاولة من الصفر.",
     "en": "Returns to start state A to retry from the beginning.",
     "ok": false,
     "why": "خطأ: هذا DFA يطابق كلمة 'abba' فقط كنص كامل وليس كسلسلة جزئية، فالعودة للبداية تسمح بقبول سلاسل أخرى مثل 'abaab'."
    },
    {
     "ar": "تبقى في نفس الحالة C في انتظار الرمز 'b'.",
     "en": "Remains in state C waiting for symbol 'b'.",
     "ok": false,
     "why": "خطأ: الـ DFA حتمي ولا ينتظر، وقراءة 'a' تستهلك رمزاً ولا يجوز تجاهله بالدوران إذا كان يفسد السلسلة."
    },
    {
     "ar": "تنتقل مباشرة إلى حالة القبول D.",
     "en": "Transitions directly to accept state D.",
     "ok": false,
     "why": "خطأ: الانتقال إلى D يجعل الآلة تقبل السلسلة الخاطئة 'aba'."
    }
   ],
   "ref": "L3-S014",
   "tip": "حالة المصيدة (Trap/Dead State) هي حالة غير نهائية بمجرد الدخول إليها لا يمكن الخروج منها أبداً δ(DEAD, x) = DEAD لكل x ∈ Σ، وتُستخدم لالتقاط أي خروج عن النمط المحدد."
  },
  {
   "n": 5,
   "type": "mcq",
   "q_ar": "نريد تصميم DFA بأقل عدد من الحالات فوق Σ = {0, 1} يقبل لغة كل السلاسل الثنائية التي يمثل طولها عدداً زوجياً (أي |w| mod 2 = 0 بما فيها السلسلة الفارغة λ). كم عدد الحالات المطلوبة وما هي حالة/حالات القبول؟",
   "q_en": "We want to design a minimal DFA over Σ = {0, 1} accepting all binary strings of even length (|w| mod 2 = 0, including empty string λ). How many states are required and what are the accept state(s)?",
   "opts": [
    {
     "ar": "حالتان: q0 (زوجي/بداية وقبول) و q1 (فردي/رفض)، مع انتقالات متبادلة بالرمزين 0 و 1.",
     "en": "2 states: q0 (even/start & accept) and q1 (odd/reject), with alternating transitions on 0 and 1.",
     "ok": true,
     "why": "صحيح: q0 تمثل قراءة عدد زوجي من الرموز (تبدأ بـ 0 رموز وهي مقبولة)، وأي رمز ينقل إلى q1 (فردي)، والرمز التالي يعيدها إلى q0."
    },
    {
     "ar": "حالة واحدة فقط تدور حول نفسها بالرمزين 0 و 1 وتكون حالة قبول.",
     "en": "Only 1 state that loops on 0 and 1 and is an accept state.",
     "ok": false,
     "why": "خطأ: الحالة الواحدة المقبولة ستقبل جميع السلاسل بما فيها ذات الطول الفردي (مثل '0' و '1')."
    },
    {
     "ar": "3 حالات: حالة للصفر، وحالة للواحد، وحالة للقبول.",
     "en": "3 states: one for zero, one for one, and an accept state.",
     "ok": false,
     "why": "خطأ: عداد الطول الزوجي/الفردي يعتمد على موديولو 2 فقط ولا يحتاج التمييز بين نوع الرمز (0 أو 1)."
    },
    {
     "ar": "4 حالات لتمثيل الحالات الزوجية والفردية لكل رمز على حدة.",
     "en": "4 states to represent even and odd states for each symbol separately.",
     "ok": false,
     "why": "خطأ: 4 حالات تعد تصميماً غير مصغر ومكرراً، وحالتان تكفيان تماماً."
    }
   ],
   "ref": "L3-S024",
   "tip": "لحساب باقي القسمة |w| mod k في DFA، ستحتاج دائماً إلى k من الحالات بالضبط (0, 1, ..., k-1)، وتكون الحالة q0 هي حالة البداية."
  },
  {
   "n": 6,
   "type": "mcq",
   "q_ar": "ليكن DFA المعطى بالخماسي M = (Q, Σ, δ, q0, F) حيث Q = {q0, q1}، Σ = {a, b}، F = {q1}، ودالة الانتقال: δ(q0, a) = q1, δ(q0, b) = q0, δ(q1, a) = q0, δ(q1, b) = q1. ما هي قيمة دالة الانتقال الممتدة δ*(q0, 'ababa')؟",
   "q_en": "Given DFA M = (Q, Σ, δ, q0, F) with Q = {q0, q1}, Σ = {a, b}, F = {q1}, and transitions: δ(q0,a)=q1, δ(q0,b)=q0, δ(q1,a)=q0, δ(q1,b)=q1. What is the value of the extended transition function δ*(q0, 'ababa')?",
   "opts": [
    {
     "ar": "q1 (والسلسلة مقبولة لأن q1 ∈ F).",
     "en": "q1 (and the string is accepted since q1 ∈ F).",
     "ok": true,
     "why": "صحيح: تتبع الخطوات: δ*(q0, ε)=q0 → δ(q0,a)=q1 → δ(q1,b)=q1 → δ(q1,a)=q0 → δ(q0,b)=q0 → δ(q0,a)=q1. النتيجة النهائية هي q1."
    },
    {
     "ar": "q0 (والسلسلة مرفوضة لأن q0 ∉ F).",
     "en": "q0 (and the string is rejected since q0 ∉ F).",
     "ok": false,
     "why": "خطأ: عند استهلاك الرمز 'a' الأخير تنتقل الآلة من q0 إلى q1 وليس العكس."
    },
    {
     "ar": "{q0, q1} كلاهما معاً.",
     "en": "{q0, q1} simultaneously.",
     "ok": false,
     "why": "خطأ: الآلة DFA حتمية، ودالة الانتقال δ* تعيد دائماً حالة واحدة وحيدة q ∈ Q وليس مجموعة من الحالات."
    },
    {
     "ar": "غير معرفة لأن السلسلة تنتهي بالرمز 'a'.",
     "en": "Undefined because the string ends with symbol 'a'.",
     "ok": false,
     "why": "خطأ: الدالة معرفة تماماً لجميع الرموز والحالات."
    }
   ],
   "ref": "L3-S037",
   "tip": "دالة الانتقال الممتدة δ*(q, w) تحسب موقع استقرار الآلة بعد قراءة كامل السلسلة w؛ لاحظ أن عدد مرات تبديل الحالة هنا يعتمد فقط على عدد الرموز 'a' (عدد فردي = q1)."
  },
  {
   "n": 7,
   "type": "tf",
   "q_ar": "في أي آلة DFA، إذا كانت حالة البداية q0 تنتمي أيضاً إلى مجموعة حالات القبول (أي q0 ∈ F)، فإن السلسلة الفارغة λ (أو ε) تكون مقبولة حتماً بواسطة هذه الآلة.",
   "q_en": "In any DFA, if the start state q0 is also an element of the accept states set (i.e., q0 ∈ F), then the empty string λ (or ε) is necessarily accepted by this machine.",
   "opts": [
    {
     "ar": "صحيح: لأن معالجة السلسلة الفارغة تبقي الآلة في حالة البداية δ*(q0, λ) = q0، وبما أن q0 ∈ F فإن السلسلة تقبل فوراً دون استهلاك أي رمز.",
     "en": "True: Because processing the empty string leaves the machine at start state δ*(q0, λ) = q0, and since q0 ∈ F, the string is accepted without reading any symbol.",
     "ok": true,
     "why": "صحيح: تعريف قبول السلسلة w هو δ*(q0, w) ∈ F، وعندما w = λ فإن δ*(q0, λ) = q0 ∈ F."
    },
    {
     "ar": "خطأ: قبول السلسلة الفارغة يتطلب وجود انتقال صريح بالرمز λ من حالة البداية إلى حالة قبول منفصلة.",
     "en": "False: Accepting the empty string requires an explicit λ-transition from the start state to a separate accept state.",
     "ok": false,
     "why": "خطأ: الـ DFA لا يحتوي على انتقالات λ إطلاقاً، وقبول λ يتم ببساطة عندما تكون حالة البداية نفسها إحدى حالات القبول."
    }
   ],
   "ref": "L3-S035",
   "tip": "قاعدة ذهبية: اللغة L(M) تحتوي على السلسلة الفارغة λ إذا وفقط إذا كانت حالة البداية q0 حالة قبول (Double Circle)."
  },
  {
   "n": 8,
   "type": "mcq",
   "q_ar": "آلة DFA على الأبجدية {0, 1} وظيفتها قبول السلاسل التي تحتوي على عدد فردي من الواحدات (Odd number of 1s). تم بناء جدول الانتقالات بحالتين: q_even (البداية) و q_odd (القبول). ما هو التوصيف الصحيح لدالة الانتقال δ؟",
   "q_en": "A DFA over {0, 1} accepts strings with an odd number of 1s. The transition table has two states: q_even (start) and q_odd (accept). What is the correct specification of transition function δ?",
   "opts": [
    {
     "ar": "δ(q_even, 0) = q_even، δ(q_even, 1) = q_odd؛ و δ(q_odd, 0) = q_odd، δ(q_odd, 1) = q_even.",
     "en": "δ(q_even, 0) = q_even, δ(q_even, 1) = q_odd; and δ(q_odd, 0) = q_odd, δ(q_odd, 1) = q_even.",
     "ok": true,
     "why": "صحيح: قراءة '0' لا تغير عدد الواحدات (دوران ذاتي على نفس الحالة)، بينما قراءة '1' تقلب الزوجية/الفردية بين الحالتين."
    },
    {
     "ar": "δ(q_even, 0) = q_odd، δ(q_even, 1) = q_even؛ و δ(q_odd, 0) = q_even، δ(q_odd, 1) = q_odd.",
     "en": "δ(q_even, 0) = q_odd, δ(q_even, 1) = q_even; and δ(q_odd, 0) = q_even, δ(q_odd, 1) = q_odd.",
     "ok": false,
     "why": "خطأ: هذا التوصيف يغير الحالة عند قراءة '0' ويثبتها عند قراءة '1'، وهو عكس المطلوب."
    },
    {
     "ar": "δ(q_even, 1) = q_odd، وجميع الانتقالات الأخرى بالرمز '0' تذهب إلى حالة مصيدة DEAD.",
     "en": "δ(q_even, 1) = q_odd, and all other transitions on '0' go to a DEAD trap state.",
     "ok": false,
     "why": "خطأ: الأصفار مسموح بوجودها بأي عدد ولا يجوز إرسالها إلى حالة مصيدة."
    },
    {
     "ar": "δ(q_even, 0) = q_even، δ(q_even, 1) = q_even؛ و δ(q_odd, 0) = q_odd، δ(q_odd, 1) = q_odd.",
     "en": "δ(q_even, 0) = q_even, δ(q_even, 1) = q_even; and δ(q_odd, 0) = q_odd, δ(q_odd, 1) = q_odd.",
     "ok": false,
     "why": "خطأ: في هذا الخيار لا تنتقل الآلة بين الحالتين إطلاقاً وتظل عالقة في حالة البداية."
    }
   ],
   "ref": "L3-S041",
   "tip": "في مسائل العد الثنائي (Parity): الرموز المحايدة تدور حول نفس الحالة، والرموز المحتسبة تُحدث تبديلاً (Toggle) بين الحالات."
  },
  {
   "n": 9,
   "type": "mcq",
   "q_ar": "في مخطط انتقال لآلة DFA تحتوي على 4 حالات {q0, q1, q2, q3} على الأبجدية {a, b}، كم عدد الأسهم الخارجة (Outgoing transitions) الإجمالي التي يجب أن تظهر في الرسم البياني الكامل للآلة؟",
   "q_en": "In a transition diagram of a DFA containing 4 states {q0, q1, q2, q3} over alphabet {a, b}, how many total outgoing transition arrows must appear in the complete state graph?",
   "opts": [
    {
     "ar": "8 أسهم بالضبط (سهمان خارجان من كل حالة من الحالات الأربع: سهم لـ 'a' وسهم لـ 'b').",
     "en": "Exactly 8 arrows (2 outgoing arrows per state for each of the 4 states: one for 'a' and one for 'b').",
     "ok": true,
     "why": "صحيح: في الـ DFA، لكل حالة q ∈ Q ولكل رمز a ∈ Σ يوجد انتقال خارج واحد بالضبط، فالعدد الإجمالي = |Q| × |Σ| = 4 × 2 = 8."
    },
    {
     "ar": "4 أسهم فقط (سهم واحد من كل حالة).",
     "en": "Only 4 arrows (one from each state).",
     "ok": false,
     "why": "خطأ: وجود سهم واحد يعني أن أحد الرمزين غير مغطى من تلك الحالة، مما يخالف شروط الـ DFA."
    },
    {
     "ar": "16 سهماً لتمثيل جميع التباديل الممكنة.",
     "en": "16 arrows representing all possible permutations.",
     "ok": false,
     "why": "خطأ: 16 سهماً يعني خروج 4 أسهم من كل حالة، وهو ما ينافي خاصية الحتمية (Determinism)."
    },
    {
     "ar": "يتوقف عدد الأسهم على عدد حالات القبول.",
     "en": "The number of arrows depends on the number of accept states.",
     "ok": false,
     "why": "خطأ: حتى حالات القبول يجب أن يخرج منها سهم لكل رمز في الأبجدية."
    }
   ],
   "ref": "L3-S004",
   "tip": "قاعدة التحقق من صحة رسم الـ DFA: تأكد أن كل حالة يخرج منها بالضبط عدد من الأسهم يساوي حجم الأبجدية |Σ|، بلا زيادة ولا نقصان."
  },
  {
   "n": 10,
   "type": "mcq",
   "q_ar": "لتصميم DFA يتعرف على جميع السلاسل فوق {a, b} التي تبدأ بالمقطع 'ab'، ما هو التوزيع الصحيح للحالات والانتقالات؟",
   "q_en": "To design a DFA accepting all strings over {a, b} that start with prefix 'ab', what is the correct configuration of states and transitions?",
   "opts": [
    {
     "ar": "4 حالات: q0 (بداية)، تنتقل بـ 'a' إلى q1 وبـ 'b' إلى TRAP؛ q1 تنتقل بـ 'b' إلى q2 (قبول) وبـ 'a' إلى TRAP؛ q2 تدور على نفسها بـ 'a, b'؛ و TRAP تدور على نفسها بـ 'a, b'.",
     "en": "4 states: q0 (start) goes on 'a' to q1 and 'b' to TRAP; q1 goes on 'b' to q2 (accept) and 'a' to TRAP; q2 loops on 'a,b'; TRAP loops on 'a,b'.",
     "ok": true,
     "why": "صحيح: أي خلل في أول رمزين يرسل الكلمة مباشرة إلى TRAP، وبمجرد اجتياز 'ab' بنجاح تستقر الآلة في حالة القبول q2 وتدور حول نفسها لأي مدخلات تالية."
    },
    {
     "ar": "حالتان فقط: q0 تنتقل بـ 'ab' إلى q1 المقبولة وتدور حول نفسها.",
     "en": "Only 2 states: q0 transitions on 'ab' to accept state q1 and loops.",
     "ok": false,
     "why": "خطأ: في DFA لا يجوز كتابة سلسلة من حرفين 'ab' على سهم واحد، بل يجب قراءة كل رمز في خطوة منفصلة."
    },
    {
     "ar": "3 حالات دون الحاجة لحالة مصيدة TRAP.",
     "en": "3 states without the need for a TRAP state.",
     "ok": false,
     "why": "خطأ: بدون حالة المصيدة، أين ستذهب الانتقالات الخاطئة مثل قراءة 'b' في البداية؟ عدم وضعها يجعل الآلة غير مكتملة."
    },
    {
     "ar": "4 حالات حيث جميع الحالات ما عدا q0 هي حالات قبول.",
     "en": "4 states where all states except q0 are accept states.",
     "ok": false,
     "why": "خطأ: هذا سيقبل سلاسل تبدأ بـ 'aa' أو 'b' وهي لا تحقق شرط البدء بـ 'ab'."
    }
   ],
   "ref": "L3-S011",
   "tip": "في لغات البادئة (Prefix Languages مثل 'تبدأ بـ'): بمجرد اكتمال البادئة المطلوبة، تتحول الحالة الهدف إلى حالة قبول ذات دوران ذاتي شامل على جميع الرموز (a,b)*."
  },
  {
   "n": 11,
   "type": "mcq",
   "q_ar": "آلة DFA معرفة بالجدول: من q0 بالرمز '0' إلى q1، وبالرمز '1' إلى q0؛ من q1 بالرمز '0' إلى q2، وبالرمز '1' إلى q0؛ من q2 بالرمز '0' إلى q2، وبالرمز '1' إلى q0؛ وحالة القبول الوحيدة هي q2. ما هو الوصف اللفظي للغة التي تقبلها هذه الآلة؟",
   "q_en": "A DFA has transitions: δ(q0,0)=q1, δ(q0,1)=q0; δ(q1,0)=q2, δ(q1,1)=q0; δ(q2,0)=q2, δ(q2,1)=q0; with accept state F = {q2}. What is the verbal description of the language accepted?",
   "opts": [
    {
     "ar": "لغة جميع السلاسل التي تنتهي بالرمزين '00' على الأقل.",
     "en": "The language of all strings ending with at least two zeros ('00').",
     "ok": true,
     "why": "صحيح: للوصول إلى q2 والاستقرار فيها عند نهاية الكلمة، يجب أن تقرأ الآلة صفرين متتاليين '00'، وأي رمز '1' يعيد الآلة فوراً إلى حالة البداية q0."
    },
    {
     "ar": "لغة جميع السلاسل التي تحتوي على صفرين فقط في كامل السلسلة.",
     "en": "The language of all strings containing exactly two zeros in total.",
     "ok": false,
     "why": "خطأ: الآلة تدور في q2 على الصفر δ(q2, 0)=q2، وبالتالي تقبل '000' و '0000' (أكثر من صفرين)."
    },
    {
     "ar": "لغة جميع السلاسل التي تبدأ بالرمزين '00'.",
     "en": "The language of all strings starting with '00'.",
     "ok": false,
     "why": "خطأ: السلسلة '001' ترفضها الآلة لأن قراءة '1' تعيدها إلى q0 غير المقبولة."
    },
    {
     "ar": "لغة السلاسل التي لا تحتوي على الرمز '1'.",
     "en": "The language of strings that contain no '1's.",
     "ok": false,
     "why": "خطأ: السلسلة '1100' تحتوي على واحدات ومع ذلك تقبلها الآلة لأنها تنتهي بـ '00'."
    }
   ],
   "ref": "L3-S018",
   "tip": "في لغات اللاحقة (Suffix Languages مثل 'تنتهي بـ'): أي رمز يخالف النمط يعيد الآلة إلى الحالة المناسبة السابقة وليس إلى حالة مصيدة ميتة."
  },
  {
   "n": 12,
   "type": "tf",
   "q_ar": "إذا كانت آلة DFA تقبل السلسلة w1 = 'abb' وترفض السلسلة w2 = 'ab'، فإن الحالة التي تستقر عندها الآلة بعد قراءة 'abb' يجب أن تكون مختلفة حتماً عن الحالة التي تستقر عندها بعد قراءة 'ab'.",
   "q_en": "If a DFA accepts string w1 = 'abb' and rejects string w2 = 'ab', then the state reached after processing 'abb' must necessarily be distinct from the state reached after processing 'ab'.",
   "opts": [
    {
     "ar": "صحيح: لأن الحالة النهائية للأولى تنتمي لمجموعة حالات القبول F، بينما الحالة النهائية للثانية لا تنتمي لـ F، ولا يمكن للحالة الواحدة أن تكون مقبولة وغير مقبولة في آن واحد.",
     "en": "True: Because the final state of the first belongs to accept states F, while the final state of the second does not belong to F, and a single state cannot be both accept and non-accept simultaneously.",
     "ok": true,
     "why": "صحيح: δ*(q0, w1) ∈ F و δ*(q0, w2) ∉ F، وبالتالي يستحيل رياضياً أن تتساوى الحالتان."
    },
    {
     "ar": "خطأ: يمكن للآلة أن تقف في نفس الحالة وتقرر القبول أو الرفض بناءً على طول السلسلة.",
     "en": "False: The machine can stop in the same state and decide acceptance or rejection based on string length.",
     "ok": false,
     "why": "خطأ: الـ DFA آلة بلا ذاكرة إضافية؛ قرارها يعتمد فقط وحصراً على تسمية الحالة النهائية هل هي ضمن F أم لا."
    }
   ],
   "ref": "L3-S006",
   "tip": "قاعدة التمييز بين الحالات (Distinguishability): إذا كانت هناك لاحقة z تجعل إحدى الكلمتين مقبولة والأخرى مرفوضة، فيستحيل أن تقود الكلمتان إلى نفس الحالة في أي DFA صحيح."
  },
  {
   "n": 13,
   "type": "mcq",
   "q_ar": "لدينا DFA بـ 3 حالات {q0, q1, q2} مع q0 كبداية و q2 كقبول وحيد. الانتقالات: δ(q0, 0)=q1, δ(q0, 1)=q0; δ(q1, 0)=q1, δ(q1, 1)=q2; δ(q2, 0)=q2, δ(q2, 1)=q2. أي من السلاسل التالية سيتم **رفضها** (REJECTED) بواسطة هذه الآلة؟",
   "q_en": "A DFA has states {q0, q1, q2}, start q0, accept F={q2}. Transitions: δ(q0,0)=q1, δ(q0,1)=q0; δ(q1,0)=q1, δ(q1,1)=q2; δ(q2,0)=q2, δ(q2,1)=q2. Which of the following strings will be REJECTED by this machine?",
   "opts": [
    {
     "ar": "السلسلة '111000' (تتوقف في q1 غير المقبولة).",
     "en": "The string '111000' (ends in non-accept state q1).",
     "ok": true,
     "why": "صحيح: معالجة '111' تبقي الآلة في q0، ثم '000' تنقلها إلى q1 وتستمر فيها، وبما أن q1 ∉ F فالسلسلة مرفوضة (الآلة تقبل فقط السلاسل التي تحوي المقطع '01')."
    },
    {
     "ar": "السلسلة '101' (تقبلها الآلة في q2).",
     "en": "The string '101' (accepted at q2).",
     "ok": false,
     "why": "خطأ: q0 --1--> q0 --0--> q1 --1--> q2 (مقبولة)."
    },
    {
     "ar": "السلسلة '00010' (تقبلها الآلة في q2).",
     "en": "The string '00010' (accepted at q2).",
     "ok": false,
     "why": "خطأ: السلسلة تحتوي على '01' فتصل إلى q2 وتدور فيها بالرمز '0' فتكون مقبولة."
    },
    {
     "ar": "السلسلة '01' (تقبلها الآلة في q2).",
     "en": "The string '01' (accepted at q2).",
     "ok": false,
     "why": "خطأ: q0 --0--> q1 --1--> q2 (أقصر سلسلة مقبولة)."
    }
   ],
   "ref": "L3-S028",
   "tip": "لاحظ أن الحالة q2 بمجرد الوصول إليها تدور حول نفسها بالرمزين 0 و 1، مما يعني أن هذه الآلة تبحث عن احتواء السلسلة على المقطع الجزئي '01' (Contains substring '01')."
  },
  {
   "n": 14,
   "type": "mcq",
   "q_ar": "ما هو التمثيل الرياضي الصوري الدقيق لدالة الانتقال δ في الآلة المنتهية الحتمية DFA المكونة من الخماسي M = (Q, Σ, δ, q0, F)؟",
   "q_en": "What is the exact formal mathematical representation of the transition function δ in a DFA represented by the 5-tuple M = (Q, Σ, δ, q0, F)?",
   "opts": [
    {
     "ar": "δ: Q × Σ → Q",
     "en": "δ: Q × Σ → Q",
     "ok": true,
     "why": "صحيح: في DFA، تأخذ الدالة زوجاً مرتباً مكوناً من حالة حالية q ∈ Q ورمز إدخال مفرد a ∈ Σ وتعيد حالة تالية وحيدة q' ∈ Q."
    },
    {
     "ar": "δ: Q × (Σ ∪ {ε}) → P(Q)",
     "en": "δ: Q × (Σ ∪ {ε}) → P(Q)",
     "ok": false,
     "why": "خطأ: هذا تعريف دالة الانتقال في الآلة غير الحتمية NFA مع انتقالات إبسلون."
    },
    {
     "ar": "δ: Q × Σ* → Q",
     "en": "δ: Q × Σ* → Q",
     "ok": false,
     "why": "خطأ: هذا تعريف دالة الانتقال الممتدة δ* وليس دالة الانتقال الأساسية δ."
    },
    {
     "ar": "δ: Q × Q → Σ",
     "en": "δ: Q × Q → Σ",
     "ok": false,
     "why": "خطأ: المجال والمجال المقابل معكوسان تماماً."
    }
   ],
   "ref": "L3-S034",
   "tip": "احفظ الفارق: δ في DFA هي Q × Σ → Q (حالة مفردة)، بينما في NFA هي Q × (Σ ∪ {ε}) → P(Q) (مجموعة حالات جزئية)."
  },
  {
   "n": 15,
   "type": "mcq",
   "q_ar": "إذا قمنا بتعديل آلة DFA بحيث تم عكس جميع حالاتها (أي استبدال مجموعة حالات القبول F بالمجموعة المتممة Q \\ F مع الإبقاء على نفس الحالات والانتقالات والبداية)، فما هي اللغة الجديدة L(M') التي ستتعرف عليها الآلة الناتجة؟",
   "q_en": "If a DFA is modified by complementing its states (replacing accept states set F with Q \\ F while keeping same Q, Σ, δ, and q0), what is the new language L(M') recognized by the resulting machine?",
   "opts": [
    {
     "ar": "متممة اللغة الأصلية L(M)' = Σ* \\ L(M).",
     "en": "The complement of the original language L(M)' = Σ* \\ L(M).",
     "ok": true,
     "why": "صحيح: بما أن مسار التنفيذ في DFA حتمي ووحيد لكل سلسلة w، فإن السلسلة التي كانت تنتهي في F ستنتهي الآن في غير F (تُرفض)، والسلسلة التي كانت تُرفض ستنتهي في Q \\ F (تُقبل)."
    },
    {
     "ar": "عكس السلاسل في اللغة L(M)^R (Reversal).",
     "en": "The reversed language L(M)^R.",
     "ok": false,
     "why": "خطأ: عكس السلاسل يتطلب عكس اتجاه الأسهم وتبديل حالة البداية مع حالات القبول مما ينتج NFA وليس مجرد تبديل حالات القبول."
    },
    {
     "ar": "اللغة الفارغة ∅ دائماً.",
     "en": "The empty language ∅ always.",
     "ok": false,
     "why": "خطأ: ستقبل الآلة كل السلاسل التي كانت ترفضها الآلة السابقة."
    },
    {
     "ar": "نفس اللغة الأصلية L(M) دون أي تغيير.",
     "en": "The exact same original language L(M) without change.",
     "ok": false,
     "why": "خطأ: تغيرت حالات القبول فلا يمكن أن تبقى اللغة متطابقة إلا في حالات خاصة جداً وغير واقعية."
    }
   ],
   "ref": "L2-S010",
   "tip": "إثبات انغلاق اللغات المنتظمة تحت عملية المتممة (Complement): يتم ببساطة بتحويل كل حالة قبول في DFA إلى حالة رفض، وكل حالة رفض إلى حالة قبول."
  },
  {
   "n": 16,
   "type": "mcq",
   "q_ar": "تأمّل DFA على Σ = {a, b} بحالتين: q0 (بداية وقبول) و q1 (رفض). الانتقالات: δ(q0, a) = q0, δ(q0, b) = q1; δ(q1, a) = q1, δ(q1, b) = q0. ما هو التعبير النمطي (Regular Expression) المكافئ للغة التي تقبلها هذه الآلة؟",
   "q_en": "Consider a DFA over {a, b} with 2 states: q0 (start & accept) and q1 (reject). Transitions: δ(q0, a)=q0, δ(q0, b)=q1; δ(q1, a)=q1, δ(q1, b)=q0. What is the equivalent Regular Expression for the language accepted by this machine?",
   "opts": [
    {
     "ar": "a*(ba*b)*a*",
     "en": "a*(ba*b)*a*",
     "ok": true,
     "why": "صحيح: الآلة تقبل السلاسل التي تحتوي على عدد زوجي من الرمز 'b' (بما فيها صفر من b)، مع إمكانية تكرار 'a' بأي عدد في أي موضع."
    },
    {
     "ar": "b*(ab*a)*b*",
     "en": "b*(ab*a)*b*",
     "ok": false,
     "why": "خطأ: هذا التعبير يمثل السلاسل ذات العدد الزوجي من 'a' وليس 'b'."
    },
    {
     "ar": "(a + b)*b",
     "en": "(a + b)*b",
     "ok": false,
     "why": "خطأ: هذا يمثل السلاسل المنتهية بـ 'b' فقط."
    },
    {
     "ar": "(ab)*",
     "en": "(ab)*",
     "ok": false,
     "why": "خطأ: هذا يقبل فقط تكرار المقطع 'ab' ولا يقبل السلسلة 'a' المقبولة في الآلة."
    }
   ],
   "ref": "L3-S042",
   "tip": "السلسلة المقبولة في هذا الـ DFA تتطلب زوجاً من 'b' للعودة إلى q0؛ كل زوج من 'b' يمكن أن يفصل بينهما أي عدد من 'a'، مما يولد النمط a*(ba*b)*a*."
  },
  {
   "n": 17,
   "type": "tf",
   "q_ar": "في الآلة المنتهية الحتمية DFA، يمكن أن تنتهي معالجة سلسلة نصية w في أكثر من حالة واحدة في نفس الوقت إذا تفرعت الانتقالات.",
   "q_en": "In a Deterministic Finite Automaton (DFA), the processing of an input string w can end in more than one state simultaneously if transitions branch.",
   "opts": [
    {
     "ar": "خطأ: لأن الـ DFA بحكم تعريفه الحتمي (Deterministic) يمتلك مساراً واحداً وحيداً لكل رمز، وبالتالي تستقر الآلة دائماً في حالة واحدة فقط لا غير عند نهاية السلسلة.",
     "en": "False: Because a DFA by its deterministic definition has exactly one unique transition per symbol, so the machine always halts in exactly one state at the end of the string.",
     "ok": true,
     "why": "صحيح: الحتمية تعني عدم وجود تفرع أو خيارات؛ دالة الانتقال δ(q, a) ترجع عنصراً واحداً فقط من Q."
    },
    {
     "ar": "صحيح: يمكن للآلة أن تتفرع وتتواجد في عدة حالات بالتوازي مثل NFA.",
     "en": "True: The machine can branch and exist in multiple states in parallel like an NFA.",
     "ok": false,
     "why": "خطأ: التواجد في عدة حالات بالتوازي هو خاصية تميز الآلة غير الحتمية (NFA) وتمنعها تماماً قواعد الـ DFA."
    }
   ],
   "ref": "L2-S012",
   "tip": "كلمة Deterministic تعني: نفس المدخل من نفس الحالة يؤدي حتماً إلى مخرج واحد معروف ومحدد مسبقاً دون أي عشوائية أو تفرع."
  },
  {
   "n": 18,
   "type": "mcq",
   "q_ar": "باستخدام خوارزمية بناء طومسون (Thompson's Construction) لتحويل التعبير النمطي r = 'ab' إلى NFA، كيف يتم ربط الآلتين الأساسيتين الممثلتين للرمزين 'a' و 'b'؟",
   "q_en": "Using Thompson's Construction to convert the regular expression r = 'ab' into an NFA, how are the two base automata for symbols 'a' and 'b' connected?",
   "opts": [
    {
     "ar": "دمج حالة القبول للآلة الأولى مع حالة البداية للآلة الثانية، أو ربطهما بانتقال فارغ ε-transition من حالة قبول الآلة الأولى إلى حالة بداية الآلة الثانية.",
     "en": "Merge the accept state of the first machine with the start state of the second, or connect them with an ε-transition from the first machine's accept state to the second machine's start state.",
     "ok": true,
     "why": "صحيح: عملية الدمج (Concatenation) في بناء طومسون تصل نهاية الآلة الأولى M1 ببداية الآلة الثانية M2 إما مباشرة أو عبر سهم ε، لتصبح حالة البداية الكلية هي بداية M1 وحالة القبول الكلية هي قبول M2."
    },
    {
     "ar": "إنشاء حالة بداية جديدة وحالة قبول جديدة وتوصيل أسهم ε متوازية لكلا الآلتين.",
     "en": "Create a new start state and new accept state and connect parallel ε-arrows to both machines.",
     "ok": false,
     "why": "خطأ: هذا هو تركيب عملية الاتحاد (Union / r1 + r2) وليس عملية الدمج (Concatenation / r1 r2)."
    },
    {
     "ar": "إضافة سهم ε راجع من نهاية الآلة الثانية إلى بداية الآلة الأولى.",
     "en": "Add a backward ε-transition from the second machine's accept state to the first machine's start state.",
     "ok": false,
     "why": "خطأ: الأسهم الراجعة تُستخدم في نجمة كلين (Kleene Star / r*) للتكرار، وليس في الدمج المتتالي."
    },
    {
     "ar": "عكس جميع الأسهم في الآلة الأولى ثم وصلها بالآلة الثانية.",
     "en": "Reverse all arrows in the first machine then connect it to the second machine.",
     "ok": false,
     "why": "خطأ: عكس الأسهم يُستخدم لحساب معكوس اللغة (Reversal) وليس في بناء طومسون القياسي."
    }
   ],
   "ref": "L4-S016",
   "tip": "في بناء طومسون: الدمج (Concatenation) يتم بالتسلسل (Sequential connection)، بينما الاتحاد (Union) يتم بالتوازي (Parallel branching مع نقطتي تفرع وتجمع)."
  },
  {
   "n": 19,
   "type": "mcq",
   "q_ar": "عند تطبيق بناء طومسون لتنفيذ نجمة كلين للتعبير النمطي r = 'a*' انطلاقاً من الآلة الأساسية NFA(a) ذات الحالتين (1 --a--> 2)، كم عدد حالات الـ NFA الناتج وما هي الانتقالات الفارغة (ε-transitions) المضافة؟",
   "q_en": "When applying Thompson's construction for Kleene star on regex r = 'a*' starting from base NFA(a) with two states (1 --a--> 2), how many states are in the resulting NFA and what ε-transitions are added?",
   "opts": [
    {
     "ar": "4 حالات (حالة بداية جديدة q_start وحالة قبول جديدة q_accept)، مع 4 انتقالات ε: من q_start إلى 1، ومن 2 إلى q_accept، وسهم راجع من 2 إلى 1 (للتكرار)، وسهم مباشر من q_start إلى q_accept (لقبول λ).",
     "en": "4 states (new start state q_start and new accept state q_accept), with 4 ε-transitions: q_start→1, 2→q_accept, feedback 2→1 (for loop), and bypass q_start→q_accept (to accept λ).",
     "ok": true,
     "why": "صحيح: بناء طومسون القياسي للـ Star يضيف حالتين جديدتين و4 أسهم ε لضمان عزل الحالات وقبول السلسلة الفارغة λ عند عدم التكرار."
    },
    {
     "ar": "حالتان فقط مع إضافة دوران ذاتي بالرمز 'a' على حالة البداية.",
     "en": "Only 2 states with a self-loop on 'a' at the start state.",
     "ok": false,
     "why": "خطأ: هذا تبسيط غير قياسي في بناء طومسون؛ البناء الصوري يتطلب إضافة حالتي بداية وقبول جديدتين مع أسهم ε لمنع التداخل عند التركيب اللاحق."
    },
    {
     "ar": "3 حالات مع سهم ε واحد فقط من حالة القبول إلى حالة البداية.",
     "en": "3 states with only one ε-transition from accept state to start state.",
     "ok": false,
     "why": "خطأ: يفتقر هذا البناء لسهم التجاوز المباشر (Bypass) من البداية للقبول لتوليد السلسلة الفارغة عند n=0."
    },
    {
     "ar": "4 حالات دون أي أسهم راجعة للتكرار.",
     "en": "4 states without any feedback loop arrows.",
     "ok": false,
     "why": "خطأ: بدون السهم الراجع من 2 إلى 1 يستحيل تكرار قراءة 'a' لأكثر من مرة واحدة (a* تتطلب التكرار اللانهائي)."
    }
   ],
   "ref": "L4-S019",
   "tip": "تذكر الأركان الأربعة لنجمة كلين في طومسون: 1) حالة بداية جديدة، 2) حالة قبول جديدة، 3) سهم راجع للتكرار (Loop-back)، 4) سهم تجاوز لتوليد λ (Bypass)."
  },
  {
   "n": 20,
   "type": "mcq",
   "q_ar": "في بناء طومسون للتعبير النمطي r = '(a + b)'، لدينا آلتان أساسيتان: M_a بـ (1 --a--> 2) و M_b بـ (3 --b--> 4). ما هو الهيكل الصوري للـ NFA الناتج؟",
   "q_en": "In Thompson's construction for regex r = '(a + b)', with base machines M_a (1 --a--> 2) and M_b (3 --b--> 4), what is the formal structure of the resulting NFA?",
   "opts": [
    {
     "ar": "إنشاء حالة بداية جديدة q0 بأسهم ε إلى 1 و 3، وإنشاء حالة قبول نهائية جديدة qf بأسهم ε من 2 و 4 إلى qf (إجمالي 6 حالات).",
     "en": "Create a new start state q0 with ε-arrows to 1 and 3, and a new final accept state qf with ε-arrows from 2 and 4 to qf (total 6 states).",
     "ok": true,
     "why": "صحيح: بناء الاتحاد القياسي لطومسون يتطلب تفريعاً غير حتمي بـ ε من حالة بداية جديدة إلى بدايتي الآلتين، وتجميعاً بـ ε من نهايتي الآلتين إلى حالة قبول نهائية موحدة."
    },
    {
     "ar": "دمج الحالة 2 مع الحالة 3 بمسار تسلسلي مباشر.",
     "en": "Merge state 2 with state 3 in a direct sequential path.",
     "ok": false,
     "why": "خطأ: هذا البناء التسلسلي يمثل الدمج 'ab' وليس الاتحاد 'a + b'."
    },
    {
     "ar": "حذف الآلة M_b واستبدالها بسهم 'b' موازٍ على نفس الآلة M_a.",
     "en": "Delete machine M_b and replace it with a parallel 'b' arrow on the same M_a machine.",
     "ok": false,
     "why": "خطأ: بناء طومسون هو خوارزمية تركيبية تعتمد على عزل البنى المستقلة وتوصيلها بأسهم ε دون دمج الحالات الداخلية."
    },
    {
     "ar": "4 حالات فقط بحيث تكون الحالتان 2 و 4 هما حالتي قبول معاً دون إضافة qf.",
     "en": "Only 4 states where both states 2 and 4 are accept states without adding qf.",
     "ok": false,
     "why": "خطأ: بناء طومسون القياسي يضمن دائماً وجود حالة قبول نهائية وحيدة (Single accept state) لتسهيل العمليات المركبة اللاحقة."
    }
   ],
   "ref": "L4-S023",
   "tip": "ميزة بناء طومسون الأساسية: كل NFA جزئي أو كلي يمتلك دائماً حالة بداية وحيدة وحالة قبول نهائية وحيدة (Single start and single accept state)."
  },
  {
   "n": 21,
   "type": "mcq",
   "q_ar": "عند بناء NFA للتعبير النمطي r = 'a*b*' بدمج الآلتين NFA(a*) و NFA(b*)، ما هو أصغر مسار يؤدي لقبول السلسلة الفارغة λ في الآلة المركبة؟",
   "q_en": "When constructing an NFA for regex r = 'a*b*' by concatenating NFA(a*) and NFA(b*), what is the shortest path that accepts the empty string λ in the composite machine?",
   "opts": [
    {
     "ar": "مسار مكون من انتقالات ε متتابعة بالكامل تعبر عبر أسهم التجاوز (Bypass) لكلا الجزأين من حالة البداية الكلية إلى حالة القبول النهائية دون قراءة أي رمز.",
     "en": "A path composed entirely of consecutive ε-transitions bypassing both sub-automata from the global start state to the final accept state without consuming any symbols.",
     "ok": true,
     "why": "صحيح: بما أن a* تقبل λ عبر سهم التجاوز ε و b* تقبل λ عبر سهم التجاوز ε، فإن السلسلة الفارغة λ تعبر الآلتين عبر مسار ε خالص لتصل إلى حالة القبول."
    },
    {
     "ar": "قراءة الرمز 'a' ثم إلغاؤه بقراءة الرمز 'b'.",
     "en": "Read symbol 'a' then cancel it by reading symbol 'b'.",
     "ok": false,
     "why": "خطأ: في نظرية الأوتوماتا لا يوجد إلغاء للرموز المقروءة؛ قراءة أي رمز تستهلكه وتزيد طول السلسلة."
    },
    {
     "ar": "لا يمكن للآلة المركبة قبول λ لأنها تتطلب رمزين على الأقل.",
     "en": "The composite machine cannot accept λ because it requires at least two symbols.",
     "ok": false,
     "why": "خطأ: التعبير a*b* يقبل السلسلة الفارغة λ عند اختيار 0 تكرارات لـ a و 0 تكرارات لـ b (حيث λ ∈ L(a*b*))."
    },
    {
     "ar": "الدوران الذاتي في حالة البداية 3 مرات.",
     "en": "Self-looping in the start state 3 times.",
     "ok": false,
     "why": "خطأ: المسار يجب أن يصل إلى حالة القبول النهائية للقبول، والدوران الذاتي في البداية لا يحقق ذلك."
    }
   ],
   "ref": "L4-S025",
   "tip": "أي مسار يبدأ من حالة البداية ويصل لحالة القبول باستخدام أسهم ε فقط يثبت رياضياً أن السلسلة الفارغة λ مقبولة في الآلة."
  },
  {
   "n": 22,
   "type": "mcq",
   "q_ar": "في NFA يحتوي على الحالات {q0, q1, q2, q3} وانتقالات إبسلون التالية: δ(q0, ε) = {q1}, δ(q1, ε) = {q2}, δ(q2, a) = {q3}, δ(q2, ε) = ∅. ما هي قيمة الإغلاق الإبسلوني ε-closure(q0)؟",
   "q_en": "In an NFA with states {q0, q1, q2, q3} and ε-transitions: δ(q0, ε)={q1}, δ(q1, ε)={q2}, δ(q2, a)={q3}, δ(q2, ε)=∅. What is the value of ε-closure(q0)?",
   "opts": [
    {
     "ar": "{q0, q1, q2}",
     "en": "{q0, q1, q2}",
     "ok": true,
     "why": "صحيح: بحسب التعريف، ε-closure(q0) تحتوي على q0 نفسها دائماً (صفر خطوة ε)، بالإضافة لـ q1 (خطوة واحدة)، و q2 (خطوتان عبر q1). الحالة q3 لا تنتمي لأن الوصول إليها يتطلب قراءة الحرف 'a'."
    },
    {
     "ar": "{q1, q2}",
     "en": "{q1, q2}",
     "ok": false,
     "why": "خطأ: نسيان تضمين الحالة الأصلية q0؛ فالإغلاق الإبسلوني يحتوي دائماً على الحالة نفسها افتراضياً."
    },
    {
     "ar": "{q0, q1, q2, q3}",
     "en": "{q0, q1, q2, q3}",
     "ok": false,
     "why": "خطأ: الحالة q3 يتم الوصول إليها عبر انتقال بالرمز 'a' وليس عبر مسار فارغ من انتقالات ε."
    },
    {
     "ar": "{q0}",
     "en": "{q0}",
     "ok": false,
     "why": "خطأ: هذا يتجاهل وجود انتقالات ε المتاحة من q0 إلى q1 ومن q1 إلى q2."
    }
   ],
   "ref": "L4-S014",
   "tip": "قاعدة حساب ε-closure(q): 1) ابدأ بـ {q} دائماً. 2) اتبع أي أسهم ε متتالية وأضف الحالات التي تصل إليها حتى لا تجد أسهم ε جديدة. 3) لا تعبر أي سهم يحمل رمزاً أبجدياً."
  },
  {
   "n": 23,
   "type": "mcq",
   "q_ar": "ليكن لدينا NFA به حلقة إبسلون: δ(q0, ε) = {q1}, δ(q1, ε) = {q0}, δ(q1, a) = {q2}. ما هي قيمة ε-closure({q0, q1})؟",
   "q_en": "Given an NFA with an ε-loop: δ(q0, ε)={q1}, δ(q1, ε)={q0}, δ(q1, a)={q2}. What is ε-closure({q0, q1})?",
   "opts": [
    {
     "ar": "{q0, q1}",
     "en": "{q0, q1}",
     "ok": true,
     "why": "صحيح: من q0 نصل إلى q0 و q1 عبر ε، ومن q1 نصل إلى q1 و q0 عبر ε؛ اتحاد الحالات التي يمكن الوصول إليها دون استهلاك أي رمز هو {q0, q1} فقط."
    },
    {
     "ar": "{q0, q1, q2}",
     "en": "{q0, q1, q2}",
     "ok": false,
     "why": "خطأ: الوصول إلى q2 يتطلب استهلاك الرمز 'a'، وبالتالي لا تدخل في الإغلاق الإبسلوني."
    },
    {
     "ar": "غير معرفة بسبب وجود حلقة لانهائية (Infinite loop).",
     "en": "Undefined due to an infinite loop.",
     "ok": false,
     "why": "خطأ: المجموعات في نظرية الحوسبة لا تتكرر فيها العناصر؛ وجود حلقة إبسلون يعني ببساطة أن الحالات المتصلة بالحلقة تنتمي جميعها لنفس الإغلاق."
    },
    {
     "ar": "{q0}",
     "en": "{q0}",
     "ok": false,
     "why": "خطأ: الانتقال من q0 إلى q1 بـ ε يجعل q1 جزءاً لا يتجزأ من الإغلاق."
    }
   ],
   "ref": "L4-S014",
   "tip": "حلقات ε لا تسبب خطأ حسابياً؛ إنها تعني فقط أن الحالتين q0 و q1 متكافئتان فورياً في الوصول وتدخلان معاً في نفس المجموعة."
  },
  {
   "n": 24,
   "type": "tf",
   "q_ar": "لأي حالة q في أي آلة NFA، تكون المجموعة ε-closure(q) غير فارغة دائماً وتحتوي على عنصر واحد على الأقل وهو الحالة q نفسها.",
   "q_en": "For any state q in any NFA, the set ε-closure(q) is always non-empty and contains at least one element, which is state q itself.",
   "opts": [
    {
     "ar": "صحيح: لأن أي حالة يمكن الوصول إليها من نفسها في صفر من انتقالات ε، وبالتالي q ∈ ε-closure(q) دائماً.",
     "en": "True: Because any state is reachable from itself in zero ε-transitions, so q ∈ ε-closure(q) always holds.",
     "ok": true,
     "why": "صحيح: التعريف الرياضي للإغلاق الإبسلوني هو إغلاق انعكاسي متعدٍ (Reflexive Transitive Closure)، وخاصية الانعكاس تضمن احتواء الحالة لنفسها دائماً."
    },
    {
     "ar": "خطأ: إذا لم يكن هناك أي سهم ε خارج من الحالة q، فإن ε-closure(q) = ∅.",
     "en": "False: If there are no outgoing ε-arrows from state q, then ε-closure(q) = ∅.",
     "ok": false,
     "why": "خطأ: حتى لو لم يكن هناك أي سهم ε خارج، فإن ε-closure(q) = {q} وليست المجموعة الخالية ∅."
    }
   ],
   "ref": "L4-S014",
   "tip": "احذر الفخ: إذا سُئلت ما هو ε-closure(q) لحالة ليس لها أي أسهم ε، فالإجابة هي {q} (مجموعة أحادية العنصر) وليست ∅."
  },
  {
   "n": 25,
   "type": "mcq",
   "q_ar": "عند تحويل NFA إلى DFA باستخدام خوارزمية بناء المجموعات الجزئية (Subset Construction)، إذا كان للـ NFA عدد N = 4 حالات، فما هو أقصى عدد نظري ممكن للحالات في الـ DFA المكافئ الناتج؟",
   "q_en": "When converting an NFA to a DFA using Subset Construction, if the NFA has N = 4 states, what is the maximum theoretical number of states in the resulting equivalent DFA?",
   "opts": [
    {
     "ar": "16 حالة (أي 2^4 = 2^N).",
     "en": "16 states (i.e., 2^4 = 2^N).",
     "ok": true,
     "why": "صحيح: كل حالة في الـ DFA تمثل مجموعة جزئية من حالات الـ NFA، ومجموعة القوى P(Q) لمجموعة بها 4 عناصر تحتوي على 2^4 = 16 مجموعة جزئية ممكنة."
    },
    {
     "ar": "8 حالات (2 × N).",
     "en": "8 states (2 × N).",
     "ok": false,
     "why": "خطأ: التحويل يتبع النمو الأسي 2^N وليس الخطي 2N."
    },
    {
     "ar": "4 حالات فقط.",
     "en": "Only 4 states.",
     "ok": false,
     "why": "خطأ: قد يتطابق عدد الحالات في حالات خاصة، لكن السؤال يطلب الحد الأقصى النظري لأسوأ حالة (Worst-case bound)."
    },
    {
     "ar": "عدد غير محدود (Infinite).",
     "en": "Infinite states.",
     "ok": false,
     "why": "خطأ: عدد حالات الـ DFA الناتج من NFA منتهٍ يجب أن يكون منتهياً حتماً ومحصوراً بـ 2^N."
    }
   ],
   "ref": "L2-S013",
   "tip": "في أسوأ الحالات (Worst-case complexity)، عدد حالات الـ DFA المكافئ لـ NFA ذي N من الحالات هو 2^N (Subset Construction Theorem)."
  },
  {
   "n": 26,
   "type": "mcq",
   "q_ar": "في خوارزمية بناء المجموعات الجزئية لتحويل NFA إلى DFA، لدينا الحالة المركبة A = {q0, q1}. إذا كانت انتقالات الـ NFA هي: δ(q0, 0) = {q0, q1}، δ(q1, 0) = {q2}، فما هو انتقال الـ DFA من الحالة A عند قراءة الرمز '0'؟",
   "q_en": "In subset construction from NFA to DFA, we have composite state A = {q0, q1}. If NFA transitions are δ(q0, 0)={q0, q1} and δ(q1, 0)={q2}, what is the DFA transition δ_DFA(A, 0)?",
   "opts": [
    {
     "ar": "δ_DFA({q0, q1}, 0) = {q0, q1, q2}",
     "en": "δ_DFA({q0, q1}, 0) = {q0, q1, q2}",
     "ok": true,
     "why": "صحيح: انتقال المجموعة الجزئية في DFA هو اتحاد انتقالات جميع عناصرها: δ_DFA({q0, q1}, 0) = δ(q0, 0) ∪ δ(q1, 0) = {q0, q1} ∪ {q2} = {q0, q1, q2}."
    },
    {
     "ar": "δ_DFA({q0, q1}, 0) = {q0, q1}",
     "en": "δ_DFA({q0, q1}, 0) = {q0, q1}",
     "ok": false,
     "why": "خطأ: هذا يتجاهل الانتقال الصادر من الحالة q1 بالرمز '0' إلى q2."
    },
    {
     "ar": "δ_DFA({q0, q1}, 0) = {q2}",
     "en": "δ_DFA({q0, q1}, 0) = {q2}",
     "ok": false,
     "why": "خطأ: هذا يتجاهل الانتقالات الصادرة من q0."
    },
    {
     "ar": "δ_DFA({q0, q1}, 0) = ∅",
     "en": "δ_DFA({q0, q1}, 0) = ∅",
     "ok": false,
     "why": "خطأ: المجموعة الخالية تنتج فقط إذا لم يكن لأي من الحالات انتقال بالرمز المعطى."
    }
   ],
   "ref": "L2-S013",
   "tip": "قاعدة انتقال الحالات المركبة في DFA: δ_DFA(S, a) = ⋃_{q ∈ S} δ(q, a)، ثم يُحسب الإغلاق الإبسلوني للناتج إذا وجدت انتقالات ε."
  },
  {
   "n": 27,
   "type": "mcq",
   "q_ar": "عند إتمام بناء الـ DFA من NFA مجموعة حالات قبوله هي F_NFA = {q3}، أي من الحالات التالية في الـ DFA تُعتبر حالة قبول نهائية (Final / Accept state)؟",
   "q_en": "When completing the DFA from an NFA whose accept states set is F_NFA = {q3}, which of the following states in the DFA is designated as a final accept state?",
   "opts": [
    {
     "ar": "أي حالة مركبة S ⊆ Q_NFA تحتوي على الحالة q3 كعنصر فيها (أي S ∩ F_NFA ≠ ∅)، مثل {q0, q3} أو {q1, q2, q3}.",
     "en": "Any composite state S ⊆ Q_NFA that contains state q3 as an element (i.e., S ∩ F_NFA ≠ ∅), such as {q0, q3} or {q1, q2, q3}.",
     "ok": true,
     "why": "صحيح: في بناء المجموعات الجزئية، تكون الحالة المركبة في DFA مقبولة إذا وفقط إذا احتوت على حالة قبول واحدة على الأقل من حالات قبول الـ NFA الأصلي."
    },
    {
     "ar": "فقط الحالة المفردة {q3} وحدها دون سواها.",
     "en": "Only the singleton state {q3} and nothing else.",
     "ok": false,
     "why": "خطأ: أي مجموعة تحتوي على q3 إلى جانب حالات أخرى تعتبر حالة قبول أيضاً في DFA."
    },
    {
     "ar": "فقط الحالات التي تتكون حصراً من حالات القبول دون أي حالة غير مقبولة.",
     "en": "Only states consisting exclusively of accept states with no non-accept states.",
     "ok": false,
     "why": "خطأ: يكفي وجود حالة قبول واحدة داخل المجموعة (Existential acceptance)."
    },
    {
     "ar": "الحالة الابتدائية للـ DFA دائماً بغض النظر عن محتواها.",
     "en": "The initial state of the DFA always, regardless of its contents.",
     "ok": false,
     "why": "خطأ: الحالة الابتدائية تكون مقبولة فقط إذا احتوى إغلاقها الإبسلوني على q3."
    }
   ],
   "ref": "L2-S013",
   "tip": "قاعدة حالات قبول DFA بعد التحويل: F_DFA = { S ⊆ Q_NFA | S ∩ F_NFA ≠ ∅ }."
  },
  {
   "n": 28,
   "type": "mcq",
   "q_ar": "في خوارزمية تقليل حالات DFA (State Minimization / Table-Filling Algorithm)، ما هي الخطوة الابتدائية الأولى لتقسيم الحالات إلى مجموعات (Initial Partition P0)؟",
   "q_en": "In the DFA state minimization algorithm (Table-Filling / Partitioning), what is the initial first step for partitioning states (Initial Partition P0)?",
   "opts": [
    {
     "ar": "تقسيم جميع الحالات Q إلى مجموعتين منفصلتين: مجموعة الحالات غير النهائية (Q \\ F) ومجموعة حالات القبول النهائية (F).",
     "en": "Partition all states Q into two disjoint groups: the set of non-final states (Q \\ F) and the set of final accept states (F).",
     "ok": true,
     "why": "صحيح: أي حالة قبول نهائية يمكن تمييزها فوراً في صفر خطوة (بالسلسلة الفارغة λ) عن أي حالة غير نهائية، لذا ينطلق التقسيم دائماً من P0 = {Q \\ F, F}."
    },
    {
     "ar": "وضع كل حالة في مجموعة مستقلة بمفردها ثم دمجها تدريجياً.",
     "en": "Place each state in an independent group by itself then merge them gradually.",
     "ok": false,
     "why": "خطأ: الخوارزمية تبدأ من التقسيم الشامل (Coarse partition) وتقوم بتجزيئه (Refinement)، وليس العكس."
    },
    {
     "ar": "حذف جميع حالات القبول والاحتفاظ بالحالات غير النهائية فقط.",
     "en": "Delete all accept states and keep only non-final states.",
     "ok": false,
     "why": "خطأ: حذف حالات القبول يلغي لغة الآلة بالكامل ويمنع تصغيرها بشكل صحيح."
    },
    {
     "ar": "دمج الحالات التي لها نفس الحروف الابتدائية.",
     "en": "Merge states having the same initial letters.",
     "ok": false,
     "why": "خطأ: المعيار الأولي للتمييز هو القبول مقابل عدم القبول (Final vs Non-final) وليس الرموز."
    }
   ],
   "ref": "L3-S004",
   "tip": "في جدول التمييز (Table Filling): أول علامة تمييز (X) نضعها بين كل زوج (p, q) يكون فيه أحدهما حالة قبول والآخر حالة رفض (p ∈ F و q ∉ F)."
  },
  {
   "n": 29,
   "type": "mcq",
   "q_ar": "لدينا حالتان p و q في نفس المجموعة غير النهائية لـ DFA على الأبجدية {a, b}. إذا كان δ(p, a) = r1 و δ(q, a) = r2، حيث r1 حالة غير نهائية بينما r2 حالة قبول نهائية. ماذا نستنتج بخصوص الحالتين p و q؟",
   "q_en": "Two states p and q belong to the same non-final group in a DFA over {a, b}. If δ(p, a)=r1 and δ(q, a)=r2, where r1 is non-final while r2 is final accept, what do we conclude about p and q?",
   "opts": [
    {
     "ar": "الحالتان p و q قابلتان للتمييز (Distinguishable / 1-step distinguishable) بواسطة الرمز 'a'، ويجب فصلهما في مجموعتين مختلفتين.",
     "en": "States p and q are distinguishable (1-step distinguishable) by symbol 'a', and must be split into different partition groups.",
     "ok": true,
     "why": "صحيح: السلسلة w = 'a' تجعل الآلة تنتهي في حالة رفض عند البدء من p بينما تنتهي في حالة قبول عند البدء من q، مما يثبت أنهما غير متكافئتين ويجب فصلهما."
    },
    {
     "ar": "الحالتان متكافئتان تماماً (Equivalent) ويجب دمجهما في حالة واحدة.",
     "en": "States p and q are completely equivalent and must be merged into a single state.",
     "ok": false,
     "why": "خطأ: انتقال أحدهما لحالة قبول والآخر لحالة رفض بالرمز نفسه يثبت عدم تكافئهما بشكل قاطع."
    },
    {
     "ar": "لا يمكن الحكم عليهما حتى نفحص انتقالات الرمز 'b' أيضاً.",
     "en": "Cannot decide until we also inspect transitions on symbol 'b'.",
     "ok": false,
     "why": "خطأ: يكفي وجود رمز إدخال واحد يفصل بين الحالتين للحكم بتمييزهما فوراً دون الحاجة لفحص باقي الرموز."
    },
    {
     "ar": "يجب تحويل الحالة r1 إلى حالة قبول نهائية لإزالة التعارض.",
     "en": "State r1 must be converted to an accept state to remove conflict.",
     "ok": false,
     "why": "خطأ: خوارزمية التقليل لا تعدل تصنيف حالات الآلة الأصلية بل تعيد هيكلة وتجميع الحالات فقط."
    }
   ],
   "ref": "L3-S004",
   "tip": "شرط التمييز بخطوة واحدة: الحالتان p و q متمايزتان إذا وُجد رمز a ∈ Σ بحيث δ(p, a) و δ(q, a) تقعان في مجموعتين مفصولتين مسبقاً."
  },
  {
   "n": 30,
   "type": "tf",
   "q_ar": "الحالات غير القابلة للوصول (Unreachable / Inaccessible States) من حالة البداية q0 يجب حذفها بالكامل قبل أو أثناء عملية تقليل الـ DFA لأنها لا تؤثر إطلاقاً على اللغة المقبولة L(M).",
   "q_en": "Unreachable (inaccessible) states from start state q0 must be completely eliminated before or during DFA minimization because they have no effect whatsoever on the accepted language L(M).",
   "opts": [
    {
     "ar": "صحيح: أي حالة لا يوجد مسار إليها انطلاقاً من q0 يستحيل أن تزورها الآلة أثناء معالجة أي سلسلة، فحذفها يصغر حجم الآلة دون تغيير L(M).",
     "en": "True: Any state with no path from q0 can never be visited during string processing, so removing it reduces machine size without altering L(M).",
     "ok": true,
     "why": "صحيح: الحالات غير القابلة للوصول (Dead/Unreachable states) تعد حالات زائدة ويشترط في الـ Minimal DFA أن تكون جميع حالاته قابلة للوصول من حالة البداية."
    },
    {
     "ar": "خطأ: حذف الحالات غير القابلة للوصول يغير دالة الانتقال ويجعل الـ DFA غير كامل.",
     "en": "False: Removing unreachable states alters the transition function and makes the DFA incomplete.",
     "ok": false,
     "why": "خطأ: الحالات غير القابلة للوصول وانتقالاتها معزولة تماماً عن مسارات العمل الحقيقية، وإزالتها هو الخطوة القياسية الأولى في التقليل."
    }
   ],
   "ref": "L3-S004",
   "tip": "خطوة رقم 0 في تقليل DFA: ابحث عن الحالات التي لا يدخل إليها أي سهم من اتجاه q0 واحذفها فوراً مع كافة أسهمها الخارجة."
  },
  {
   "n": 31,
   "type": "mcq",
   "q_ar": "بالنظر للقواعد الصورية (Grammar): S → aSb | λ، تتبع خطوات الاشتقاق التفصيلية لإنتاج الكلمة 'aabb'. ما هو تسلسل الاشتقاق الصحيح؟",
   "q_en": "Given the formal grammar: S → aSb | λ, trace the step-by-step derivation to generate the string 'aabb'. What is the correct derivation sequence?",
   "opts": [
    {
     "ar": "S ⇒ aSb ⇒ aaSbb ⇒ aabb",
     "en": "S ⇒ aSb ⇒ aaSbb ⇒ aabb",
     "ok": true,
     "why": "صحيح: الخطوة 1: تطبيق S → aSb ينتج aSb؛ الخطوة 2: تطبيق S → aSb على S الداخلية ينتج aaSbb؛ الخطوة 3: تطبيق S → λ لاستبدال S بالفراغ ينتج aabb."
    },
    {
     "ar": "S ⇒ aSb ⇒ aabb",
     "en": "S ⇒ aSb ⇒ aabb",
     "ok": false,
     "why": "خطأ: الانتقال من aSb مباشرة إلى aabb يتطلب قاعدة S → ab، وهي غير موجودة في القواعد المعطاة."
    },
    {
     "ar": "S → aSb → aaSbb → aabb",
     "en": "S → aSb → aaSbb → aabb",
     "ok": false,
     "why": "خطأ: استخدام السهم المفرد (→) خاطئ؛ السهم المفرد يُستخدم لكتابة قواعد الإنتاج، بينما خطوات الاشتقاق الفعلي تتطلب السهم المزدوج (⇒)."
    },
    {
     "ar": "S ⇒ aaSbb ⇒ aabb",
     "en": "S ⇒ aaSbb ⇒ aabb",
     "ok": false,
     "why": "خطأ: هذا يتجاوز خطوة الاشتقاق الأولى S ⇒ aSb، فالاشتقاق في خطوة واحدة لا يمكنه إضافة زوجين دفعة واحدة."
    }
   ],
   "ref": "L5-S004",
   "tip": "فرّق في الامتحان بين: سهم الإنتاج '→' (Production Rule في القواعد) وسهم الاشتقاق '⇒' (Derivation Step أثناء التوليد)."
  },
  {
   "n": 32,
   "type": "mcq",
   "q_ar": "ليكن لدينا القواعد الخطية اليمينية (Right-Linear Grammar) المعرفة بـ: S → 0S | 1A، و A → 0A | λ. ما هو التعبير النمطي (Regular Expression) واللغة التي تولدها هذه القواعد؟",
   "q_en": "Given the Right-Linear Grammar: S → 0S | 1A, and A → 0A | λ. What is the regular expression and language generated by this grammar?",
   "opts": [
    {
     "ar": "0*10* (أي لغة السلاسل التي تحتوي على رمز '1' واحد بالضبط محاط بأي عدد من الأصفار).",
     "en": "0*10* (the language of strings containing exactly one '1' surrounded by any number of zeros).",
     "ok": true,
     "why": "صحيح: S يكرر '0' أي عدد من المرات (0*) ثم يولد إجبارياً رمز '1' وينتقل إلى A (0*1)، و A يكرر '0' أي عدد من المرات (0*) ثم ينتهي بـ λ، فيكون الناتج 0*10*."
    },
    {
     "ar": "(0 + 1)* (أي جميع السلاسل الثنائية الممكنة).",
     "en": "(0 + 1)* (all possible binary strings).",
     "ok": false,
     "why": "خطأ: لا يمكن لهذه القواعد توليد سلاسل تحتوي على أكثر من رمز '1' واحد (مثل 11)، لأن A لا يعود إلى S ولا يولد 1."
    },
    {
     "ar": "0*1* (أي أصفار تليها واحدات).",
     "en": "0*1* (zeros followed by ones).",
     "ok": false,
     "why": "خطأ: الرمز 1 يتبعه أصفار ناتجة عن A وليس واحدات."
    },
    {
     "ar": "10*",
     "en": "10*",
     "ok": false,
     "why": "خطأ: هذا يتجاهل إمكانية تكرار الصفر في البداية عبر S → 0S."
    }
   ],
   "ref": "L5-S022",
   "tip": "لتحليل لغة Right-Linear Grammar: تتبع دور كل متغير: S هو الحالة الابتدائية، والانتقال 1A يعني قراءة 1 والانتقال للمتغير A، وقاعدة λ تعني حالة قبول."
  },
  {
   "n": 33,
   "type": "mcq",
   "q_ar": "عند تحويل الـ Right-Linear Grammar التالية إلى NFA: S → aA | bS | λ، و A → aS | bA. ما هي حالة البداية وما هي حالات القبول في الـ NFA المكافئ؟",
   "q_en": "When converting the Right-Linear Grammar: S → aA | bS | λ, and A → aS | bA into an NFA, what is the start state and what are the accept states in the equivalent NFA?",
   "opts": [
    {
     "ar": "حالة البداية هي S، وحالة القبول هي S (لأن S → λ)، بالإضافة إلى حالة قبول نهائية عامة إذا وُجدت قواعد إنهاء بحروف مفردة.",
     "en": "Start state is S, and accept state is S (due to S → λ), plus a general accept state if single-terminal terminations exist.",
     "ok": true,
     "why": "صحيح: في خوارزمية التحويل من Right-Linear Grammar إلى NFA، رمز البداية S يقابل الحالة الابتدائية، وأي متغير يحتوي على قاعدة إنتاج إلى λ (مثل S → λ) يُعين مباشرة كحالة قبول نهائية."
    },
    {
     "ar": "حالة البداية هي A وحالة القبول هي S.",
     "en": "Start state is A and accept state is S.",
     "ok": false,
     "why": "خطأ: رمز البداية للقواعد هو S دائماً وبالتالي يجب أن يقابله الحالة الابتدائية S في الآلة."
    },
    {
     "ar": "كلا الحالتين S و A هما حالتا قبول نهائيتان.",
     "en": "Both states S and A are final accept states.",
     "ok": false,
     "why": "خطأ: المتغير A لا يحتوي على قاعدة A → λ ولا يؤدي لإنهاء مباشر بـ λ، فلا يكون حالة قبول تلقائياً."
    },
    {
     "ar": "الـ NFA لا يحتوي على أي حالة قبول لأن القواعد تكرارية.",
     "en": "The NFA contains no accept states because the grammar is recursive.",
     "ok": false,
     "why": "خطأ: وجود S → λ يحدد حالة قبول صريحة ويسمح بإنهاء الاشتقاقات وقبول السلاسل."
    }
   ],
   "ref": "L6-S057",
   "tip": "في التحويل من Right-Linear Grammar إلى NFA: المتغير X يكون حالة قبول (Final State) إذا وفقط إذا احتوت قواعده على X → λ."
  }
 ]
});

window.TOC_MODELS.push({
 "id": "m3",
 "kind": "نظري",
 "title_ar": "نموذج محاكي نظري شامل (L1-L6)",
 "origin_ar": "بنك أسئلة نظري شامل مولّد ومطوّر بالذكاء الاصطناعي من واقع سلايدات المنهج النظري (يشمل تغطية معمقة لمحاضرتي القواعد واللغات L5 وL6 وهرم تشومسكي) مع تدقيق علمي وتفسير لكل خيار.",
 "questions": [
  {
   "n": 1,
   "type": "tf",
   "q_ar": "اللغات المنتظمة (Regular Languages) تمثل المستوى الأدنى (Type-3) في هرم تشومسكي، ويمكن وصف أي لغة منتظمة بأي من النماذج المتكافئة: DFA، NFA، ε-NFA، التعبيرات النمطية (RegEx)، والقواعد الخطية المنتظمة (Regular Grammars).",
   "q_en": "Regular Languages represent Type-3 in the Chomsky hierarchy, and any regular language can be described by any of the equivalent models: DFA, NFA, ε-NFA, Regular Expressions (RegEx), and Regular Grammars.",
   "opts": [
    {
     "ar": "صحيح",
     "en": "True",
     "ok": true,
     "why": "صحيح: هذه النماذج الخمسة متكافئة تماماً من حيث القدرة التعبيرية الحسابية، وتحدد جميعها فئة اللغات المنتظمة (Type-3 في تصنيف تشومسكي)."
    },
    {
     "ar": "خطأ",
     "en": "False",
     "ok": false,
     "why": "غير صحيح: العبارة صحيحة تماماً وتلخص جوهر نظرية اللغات المنتظمة وتكافؤ تمثيلاتها الرياضية."
    }
   ],
   "ref": "L4-S002",
   "tip": "قاعدة التكافؤ الشامل: DFA ≡ NFA ≡ ε-NFA ≡ RegEx ≡ Regular Grammar (Right-Linear or Left-Linear)."
  },
  {
   "n": 2,
   "type": "mcq",
   "q_ar": "في نظرية اللغات الصورية، ما هو التمثيل الرياضي الصوري الدقيق للقواعد الصورية (Formal Grammar) كرباعي مرتب G = (V, T, S, P) وماذا يمثل كل عنصر؟",
   "q_en": "In formal language theory, what is the exact formal mathematical representation of a Grammar as a 4-tuple G = (V, T, S, P), and what does each component represent?",
   "opts": [
    {
     "ar": "V مجموعة منتهية من المتغيرات (Non-terminals)، و T مجموعة منتهية من الرموز الطرفية (Terminals)، و S رمز البداية (Start symbol ∈ V)، و P مجموعة منتهية من قواعد الإنتاج (Production rules).",
     "en": "V is a finite set of variables (non-terminals), T is a finite set of terminal symbols, S is the start symbol (S ∈ V), and P is a finite set of production rules.",
     "ok": true,
     "why": "صحيح: هذا هو التعريف الرياضي القياسي للرباعي الممثل للقواعد الصورية؛ حيث تفصل المتغيرات القابلة للاستبدال (V) عن الحروف الطرفية النهائية (T) وتنطلق من رمز البداية S عبر قواعد الإنتاج P."
    },
    {
     "ar": "V مجموعة الحالات (States)، و T الأبجدية، و S حالة البداية، و P مصفوفة الانتقالات.",
     "en": "V is the set of states, T is the alphabet, S is start state, and P is the transition matrix.",
     "ok": false,
     "why": "خطأ: هذا خلط بين تعريف الأوتوماتون المنتهي (Automaton) وتعريف القواعد الصورية (Grammar)؛ فالقواعد لا تحتوي على حالات بل على متغيرات وقواعد إنتاج."
    },
    {
     "ar": "V مجموعة الكلمات المقبولة، و T مجموعة الكلمات المرفوضة، و S طول أطول كلمة، و P دالة الاحتمالات.",
     "en": "V is accepted words, T is rejected words, S is max string length, and P is probability function.",
     "ok": false,
     "why": "خطأ: القواعد الصورية هي نظام توليدي بنيوي وليست نموذجاً تصنيفياً أو احتماليا."
    },
    {
     "ar": "V مجموعة الرموز الطرفية، و T مجموعة المتغيرات غير الطرفية، و S السلسلة الفارغة λ، و P جدول التمييز.",
     "en": "V is terminal symbols, T is non-terminals, S is empty string λ, and P is distinguishability table.",
     "ok": false,
     "why": "خطأ: تم عكس دلالة V و T، كما أن رمز البداية S يجب أن يكون متغيراً ينتمي إلى V وليس السلسلة الفارغة."
    }
   ],
   "ref": "L5-S007",
   "tip": "احفظ رباعي القواعد الصورية: G = (V, T, S, P) حيث V = Variables, T = Terminals, S = Start symbol ∈ V, P = Productions."
  },
  {
   "n": 3,
   "type": "tf",
   "q_ar": "في أي قواعد صورية صالحة G = (V, T, S, P)، يجب أن تكون مجموعة المتغيرات (V) ومجموعة الرموز الطرفية (T) مجموعتين منفصلتين تماماً (Disjoint sets)، أي أن تقاطعهما V ∩ T = ∅.",
   "q_en": "In any valid formal grammar G = (V, T, S, P), the set of variables (V) and the set of terminals (T) must be strictly disjoint sets, meaning V ∩ T = ∅.",
   "opts": [
    {
     "ar": "صحيح: لأن المتغيرات هي رموز وسيطة مؤقتة تُستبدل أثناء الاشتقاق، بينما الرموز الطرفية هي الحروف النهائية المكونة للكلمات ولا يمكن استبدالها، ولا يجوز لرمز أن يجمع الصفتين.",
     "en": "True: Because variables are temporary intermediate symbols to be replaced, while terminals are final alphabet symbols that cannot be replaced, so a symbol cannot be both.",
     "ok": true,
     "why": "صحيح: الشرط V ∩ T = ∅ أساسي في نظرية اللغات لمنع اللبس والتناقض بين ما يمكن اشتقاقه وما يمثل مخرجاً نهائياً."
    },
    {
     "ar": "خطأ: يمكن لأي رمز طرفي أن يعمل كمتغير في الطرف الأيسر من قواعد الإنتاج عند الحاجة.",
     "en": "False: Any terminal symbol can act as a variable on the left-hand side of production rules when needed.",
     "ok": false,
     "why": "خطأ: الرموز الطرفية لا تظهر بمفردها كطرف أيسر للاشتقاق في القواعد الخالية من السياق، ولا يُسمح بتداخل المجموعتين إطلاقاً."
    }
   ],
   "ref": "L5-S008",
   "tip": "قاعدة صورية جوهرية: V ∩ T = ∅ دائماً وأبداً. المتغيرات تُستبدل، والرموز الطرفية تظهر في الناتج النهائي فقط."
  },
  {
   "n": 4,
   "type": "mcq",
   "q_ar": "ما هو الفرق الدقيق في نظرية القواعد الصورية بين 'الصيغة الجملية' (Sentential Form) و 'الجملة' (Sentence)؟",
   "q_en": "In formal grammar theory, what is the exact difference between a 'Sentential Form' and a 'Sentence'?",
   "opts": [
    {
     "ar": "الصيغة الجملية هي أي سلسلة α ∈ (V ∪ T)* يمكن اشتقاقها من رمز البداية (S ⇒* α) وقد تحتوي على متغيرات، بينما الجملة هي صيغة جملية خاصة تتكون حصراً من رموز طرفية (w ∈ T*).",
     "en": "A sentential form is any string α ∈ (V ∪ T)* derivable from start symbol (S ⇒* α) and may contain variables, whereas a sentence is a special sentential form containing exclusively terminal symbols (w ∈ T*).",
     "ok": true,
     "why": "صحيح: كل جملة (Sentence) هي بالضرورة صيغة جملية وصلت لمرحلتها النهائية بخلوها التام من أي متغيرات غير طرفية (أي أن الجمل هي مجموعة جزئية من الصيغ الجملية)."
    },
    {
     "ar": "الصيغة الجملية تتكون من حروف طرفية فقط، بينما الجملة تحتوي على متغيرات وقواعد إنتاج.",
     "en": "A sentential form contains terminals only, while a sentence contains variables and productions.",
     "ok": false,
     "why": "خطأ: التعريف معكوس تماماً؛ فالصيغة الجملية هي التي قد تحتوي على متغيرات وسيطة."
    },
    {
     "ar": "الصيغة الجملية هي قاعدة الإنتاج المفردة P، بينما الجملة هي شجرة الإعراب الكاملة.",
     "en": "Sentential form is a single production rule P, while sentence is the complete parse tree.",
     "ok": false,
     "why": "خطأ: الصيغة الجملية والجملة كلاهما سلاسل ناتجة عن خطوات الاشتقاق وليستا قواعد أو أشجار إعراب."
    },
    {
     "ar": "لا يوجد أي فرق بينهما وهما اسمان مترادفان لنفس المفهوم في جميع أنواع القواعد.",
     "en": "There is no difference and they are completely synonymous terms in all grammar types.",
     "ok": false,
     "why": "خطأ: هناك فارق جوهري؛ وجود متغير واحد فقط في السلسلة يجعلها Sentential Form ويمنع تسميتها Sentence."
    }
   ],
   "ref": "L5-S010",
   "tip": "تذكر: إذا احتوت السلسلة المشتقة على أي Variable (حرف كبير مثلاً S, A) فهي Sentential Form، وإذا أصبحت خالية تماماً من المتغيرات (Terminals only) تسمى Sentence."
  },
  {
   "n": 5,
   "type": "mcq",
   "q_ar": "في علاقات الاشتقاق للقواعد الصورية، ما هو الفرق الرياضي الدقيق بين سهم الاشتقاق في خطوة واحدة (⇒) وسهم الاشتقاق في صفر أو أكثر من الخطوات (⇒*)؟",
   "q_en": "In formal grammar derivations, what is the exact mathematical difference between single-step derivation (⇒) and derivation in zero or more steps (⇒*)?",
   "opts": [
    {
     "ar": "العلاقة (⇒) تمثل تطبيق قاعدة إنتاج واحدة فقط في خطوة مباشرة، بينما (⇒*) هي الإغلاق الانعكاسي المتعدي (Reflexive Transitive Closure) وتمثل سلسلة من 0 أو 1 أو أكثر من خطوات الاشتقاق (حيث w ⇒* w دائماً بصفر خطوات).",
     "en": "(⇒) represents applying exactly one production rule in a single direct step, while (⇒*) is the Reflexive Transitive Closure representing 0, 1, or more derivation steps (where w ⇒* w holds for 0 steps).",
     "ok": true,
     "why": "صحيح: العلاقة ⇒* تعبر عن الوصول بعد أي عدد من التطبيقات المتتابعة لقواعد الإنتاج، وخاصية الانعكاس تضمن أن أي صيغة تشتق نفسها في صفر خطوة."
    },
    {
     "ar": "العلاقة (⇒) مخصصة للقواعد المنتظمة فقط، بينما (⇒*) مخصصة لآلات تورنغ والقواعد غير المقيدة.",
     "en": "(⇒) is exclusively for regular grammars, while (⇒*) is for Turing machines and unrestricted grammars.",
     "ok": false,
     "why": "خطأ: كلا الرمزين يُستخدمان في جميع مستويات القواعد الصورية لوصف خطوات الاشتقاق الفردية والمتتابعة."
    },
    {
     "ar": "العلاقة (⇒*) تشترط تطبيق 10 خطوات اشتقاق على الأقل ولا تصح لما دون ذلك.",
     "en": "(⇒*) requires applying at least 10 derivation steps and is invalid otherwise.",
     "ok": false,
     "why": "خطأ: الرمز (*) في نظرية الحوسبة يعني دائماً 'صفر أو أكثر' (Zero or more steps)."
    },
    {
     "ar": "العلاقة (⇒) تستبدل جميع المتغيرات دفعة واحدة، بينما (⇒*) تستبدل متغيراً واحداً في كل خطوة.",
     "en": "(⇒) replaces all variables simultaneously, while (⇒*) replaces one variable per step.",
     "ok": false,
     "why": "خطأ: خطوة الاشتقاق الفردية (⇒) تستبدل متغيراً واحداً فقط بتطبيق قاعدة واحدة."
    }
   ],
   "ref": "L5-S012",
   "tip": "دلالة الرموز: u ⇒ v (اشتقاق في خطوة واحدة مباشرة)، u ⇒* v (اشتقاق عبر مسار من صفر أو أكثر من الخطوات: u ⇒ ... ⇒ v)."
  },
  {
   "n": 6,
   "type": "mcq",
   "q_ar": "ما هو التعريف الرياضي الدقيق للغة التي تولدها القواعد الصورية G = (V, T, S, P)، والتي يُرمز لها بـ L(G)؟",
   "q_en": "What is the exact mathematical definition of the language generated by a formal grammar G = (V, T, S, P), denoted by L(G)?",
   "opts": [
    {
     "ar": "L(G) = { w ∈ T* | S ⇒* w }",
     "en": "L(G) = { w ∈ T* | S ⇒* w }",
     "ok": true,
     "why": "صحيح: لغة القواعد L(G) هي مجموعة كل السلاسل المكونة حصراً من رموز طرفية (w ∈ T*) والتي يمكن اشتقاقها من رمز البداية S في صفر أو أكثر من الخطوات."
    },
    {
     "ar": "L(G) = { w ∈ V* | S ⇒ w }",
     "en": "L(G) = { w ∈ V* | S ⇒ w }",
     "ok": false,
     "why": "خطأ: لغة القواعد يجب أن تتكون من حروف طرفية T* وليس متغيرات V*، وتكون مشتقة عبر أي عدد من الخطوات ⇒* وليس خطوة واحدة فقط."
    },
    {
     "ar": "L(G) = { w ∈ (V ∪ T)* | w ⇒* S }",
     "en": "L(G) = { w ∈ (V ∪ T)* | w ⇒* S }",
     "ok": false,
     "why": "خطأ: الاشتقاق ينطلق من رمز البداية S ليصل إلى الكلمة w (أي S ⇒* w) وليس العكس، والكلمات تنتمي لـ T*."
    },
    {
     "ar": "L(G) = { P | P ⊆ V × T }",
     "en": "L(G) = { P | P ⊆ V × T }",
     "ok": false,
     "why": "خطأ: هذا تعبير يشير لمجموعة القواعد وليس لمجموعة السلاسل الطرفية المولدة."
    }
   ],
   "ref": "L5-S016",
   "tip": "التعريف الحاسم: لغة أي قواعد L(G) هي حصراً مجموعة الجمل الطرفية المشتقة من رمز البداية S: L(G) = { w ∈ T* | S ⇒* w }."
  },
  {
   "n": 7,
   "type": "mcq",
   "q_ar": "في النظرية العامة للغات والحوسبة، ما هو الفارق الوظيفي الجوهري بين 'القواعد الصورية' (Formal Grammars) و 'الآلات الذاتية' (Automata)؟",
   "q_en": "In the general theory of languages and computation, what is the fundamental functional difference between Formal Grammars and Automata?",
   "opts": [
    {
     "ar": "القواعد تعمل كمولدات للغة (Generators) تقوم باشتقاق وبناء السلاسل انطلاقاً من رمز البداية، بينما الآلات تعمل كأدوات تمييز وفحص (Recognizers / Acceptors) تقرأ سلسلة مدخلة وتحدد قبولها أو رفضها.",
     "en": "Grammars act as language generators deriving strings from the start symbol, while automata act as language recognizers/acceptors reading an input string to accept or reject it.",
     "ok": true,
     "why": "صحيح: هذا هو التمايز الوظيفي الكلاسيكي؛ فالقواعد نظام إنتاجي توليدي (Generative)، والآلات المنتهية نظام اختباري تدقيقي (Recognition device)."
    },
    {
     "ar": "القواعد تفحص وتقبل السلاسل فقط، بينما الآلات تولد نصوصاً عشوائية.",
     "en": "Grammars test and accept strings only, while automata generate random text.",
     "ok": false,
     "why": "خطأ: الأدوار مقلوبة تماماً؛ فالأوتوماتا هي التي تفحص وتقبل، والقواعد هي التي تولد وتشتق."
    },
    {
     "ar": "القواعد تُستخدم فقط مع اللغات الطبيعية الإنسانية، بينما الآلات تُستخدم فقط في الدوائر الإلكترونية.",
     "en": "Grammars are used only with human natural languages, while automata are used only in electronic circuits.",
     "ok": false,
     "why": "خطأ: كلاهما نماذج رياضية صورية تُستخدم لتحديد نفس فئات اللغات الصورية وهندسة المترجمات (Compilers)."
    },
    {
     "ar": "لا يوجد أي فرق وظيفي وكلاهما ينفذ نفس خوارزمية الانتقال بالحالات.",
     "en": "There is no functional difference and both execute the exact same state transition algorithm.",
     "ok": false,
     "why": "خطأ: القواعد لا تمتلك مفهوم الحالات أو جدول الانتقال بل تمتلك متغيرات وقواعد إنتاج واستبدال."
    }
   ],
   "ref": "L6-S012",
   "tip": "التمييز الجوهري: Grammars = Generators (توليد من S إلى الكلمات)، Automata = Recognizers/Acceptors (فحص الكلمة وقبولها/رفضها)."
  },
  {
   "n": 8,
   "type": "mcq",
   "q_ar": "ما هو الشرط البنيوي الصارم الذي يحدد القواعد الخالية من السياق (Context-Free Grammar - CFG) في هرم تشومسكي؟",
   "q_en": "What is the strict structural condition that defines a Context-Free Grammar (CFG) in the Chomsky hierarchy?",
   "opts": [
    {
     "ar": "أن يكون الطرف الأيسر (LHS) لكل قاعدة إنتاج عبارة عن متغير غير طرفي مفرد فقط (أي بصيغة A → α حيث A ∈ V و α ∈ (V ∪ T)*).",
     "en": "The left-hand side (LHS) of every production rule must consist of a single non-terminal variable (i.e., of the form A → α where A ∈ V and α ∈ (V ∪ T)*).",
     "ok": true,
     "why": "صحيح: سُميت 'خالية من السياق' لأن المتغير A يمكن استبداله بالصيغة α في أي موضع يظهر فيه وبشكل مستقل تماماً عن الرموز المحيطة به (دون اشتراط سياق قبله أو بعده)."
    },
    {
     "ar": "أن يحتوي الطرف الأيسر على سلسلة من الرموز الطرفية المحاطة بمتغيرات.",
     "en": "The left-hand side must contain a string of terminals surrounded by variables.",
     "ok": false,
     "why": "خطأ: القواعد الخالية من السياق تمنع تماماً وجود أي رموز طرفية أو أكثر من متغير في الطرف الأيسر."
    },
    {
     "ar": "أن لا يزيد طول الطرف الأيمن عن رمز واحد فقط.",
     "en": "The right-hand side length must not exceed exactly one symbol.",
     "ok": false,
     "why": "خطأ: الطرف الأيمن α في CFG يمكن أن يكون بأي طول، بما في ذلك السلسلة الفارغة λ."
    },
    {
     "ar": "أن تكون جميع قواعد الإنتاج محتوية على السلسلة الفارغة λ حصراً.",
     "en": "All production rules must contain the empty string λ exclusively.",
     "ok": false,
     "why": "خطأ: قواعد λ اختيارية ومسموحة وليست شرطاً لجميع القواعد."
    }
   ],
   "ref": "L6-S022",
   "tip": "شرط الـ CFG البسيط: الطرف الأيسر دائمًا متغير واحد فقط (Single Non-terminal): A → α."
  },
  {
   "n": 9,
   "type": "mcq",
   "q_ar": "ما هو التوصيف الرياضي للقواعد الخطية (Linear Grammar) في نظرية اللغات الصورية؟",
   "q_en": "What is the mathematical specification of a Linear Grammar in formal language theory?",
   "opts": [
    {
     "ar": "هي قواعد خالية من السياق (CFG) يحتوي الطرف الأيمن (RHS) في كل قاعدة من قواعد إنتاجها على متغير غير طرفي واحد كحد أقصى (At most one variable).",
     "en": "A CFG where the right-hand side (RHS) of every production rule contains at most one non-terminal variable.",
     "ok": true,
     "why": "صحيح: في القواعد الخطية، يُسمح بوجود متغير واحد على الأكثر في الطرف الأيمن، ويمكن أن يقع هذا المتغير في أقصى اليمين، أو أقصى اليسار، أو في المنتصف محاطاً بحروف طرفية (مثل A → w1 B w2 أو A → w)."
    },
    {
     "ar": "قواعد يجب أن يظهر فيها متغيران على الأقل في الطرف الأيمن لكل قاعدة.",
     "en": "Grammar where at least two variables must appear on the RHS of every rule.",
     "ok": false,
     "why": "خطأ: وجود أكثر من متغير في الطرف الأيمن (مثل S → AB) يجعل القواعد غير خطية (Non-linear CFG)."
    },
    {
     "ar": "قواعد لا تحتوي على أي رموز طرفية إطلاقاً في جميع مراحل الاشتقاق.",
     "en": "Grammar that contains no terminal symbols whatsoever at any derivation stage.",
     "ok": false,
     "why": "خطأ: الرموز الطرفية أساسية لتكوين الكلمات في القواعد الخطية."
    },
    {
     "ar": "قواعد تقتصر أطوال كلماتها على علاقات خطية من الدرجة الأولى في زمن التنفيذ فقط.",
     "en": "Grammar whose string lengths are restricted to first-degree linear equations in execution time only.",
     "ok": false,
     "why": "خطأ: الخطية هنا توصيف لبنية قواعد الإنتاج (أحادي المتغير في اليمين) وليست تعقيداً زمنياً."
    }
   ],
   "ref": "L5-S020",
   "tip": "القواعد الخطية (Linear): الطرف الأيمن يحتوي على متغير واحد على الأكثر (At most one Variable) في أي موقع (A → u B v أو A → u)."
  },
  {
   "n": 10,
   "type": "tf",
   "q_ar": "يمكن للقواعد الخطية (Linear Grammars) العامة توليد لغات غير منتظمة (Non-regular languages) تعجز آلات الـ Finite Automata عن التعرف عليها، مثل اللغة الشهيرة L = { aⁿbⁿ | n ≥ 0 }.",
   "q_en": "General Linear Grammars can generate non-regular languages that Finite Automata cannot recognize, such as the famous language L = { aⁿbⁿ | n ≥ 0 }.",
   "opts": [
    {
     "ar": "صحيح: لأن وجود المتغير في المنتصف محاطاً بحروف طرفية (مثل القاعدة S → aSb | λ) يسمح للقواعد بإجراء عدّ متطابق ومتزامن لحروف a و b معاً، وهو ما لا تملكه اللغات المنتظمة.",
     "en": "True: Because having the variable in the center surrounded by terminals (e.g., S → aSb | λ) allows the grammar to perform balanced simultaneous counting of 'a's and 'b's, which regular languages cannot do.",
     "ok": true,
     "why": "صحيح: القواعد الخطية العامة أقوى تعبيرياً من القواعد المنتظمة؛ فالقاعدة S → aSb تولد بالتناظر aⁿbⁿ وهي لغة خالية من السياق وغير منتظمة (Non-regular CFL)."
    },
    {
     "ar": "خطأ: القواعد الخطية تولد حصراً وفقط اللغات المنتظمة التي يقبلها DFA.",
     "en": "False: Linear grammars generate exclusively and only the regular languages accepted by DFAs.",
     "ok": false,
     "why": "خطأ: القواعد التي تولد اللغات المنتظمة حصراً هي القواعد الخطية اليمينية (Right-Linear) أو اليسارية (Left-Linear)، بينما الخطية العامة تشمل لغات أوسع مثل aⁿbⁿ."
    }
   ],
   "ref": "L5-S021",
   "tip": "انتبه: القواعد الخطية العامة (Linear) تولد لغات غير منتظمة مثل S → aSb | λ (تولد aⁿbⁿ)، أما القواعد المنتظمة (Regular) فهي حالة خاصة مقيدة (يمينية فقط أو يسارية فقط)."
  },
  {
   "n": 11,
   "type": "mcq",
   "q_ar": "ما هي الصيغة البنيوية القياسية المحددة لقواعد الإنتاج في القواعد الخطية اليمينية (Right-Linear Grammar)؟",
   "q_en": "What is the standard structural form of production rules in a Right-Linear Grammar?",
   "opts": [
    {
     "ar": "تكون جميع القواعد بصيغة A → xB أو A → x (حيث A, B ∈ V و x ∈ T*، أي أن المتغير الوحيد يقع دائماً في أقصى يمين الطرف الأيمن).",
     "en": "All productions are of the form A → xB or A → x (where A, B ∈ V and x ∈ T*, so the single variable is strictly at the far right of the RHS).",
     "ok": true,
     "why": "صحيح: في القواعد الخطية اليمينية، يُشترط أن يظهر المتغير غير الطرفي في نهاية الصيغة على اليمين مسبوقاً بسلسلة من الرموز الطرفية x (أو بدون متغير عند الإنهاء)."
    },
    {
     "ar": "تكون القواعد بصيغة A → Bx دائماً حيث المتغير في أقصى اليسار.",
     "en": "Productions are always of the form A → Bx with the variable at the far left.",
     "ok": false,
     "why": "خطأ: هذه صيغة القواعد الخطية اليسارية (Left-Linear) وليست اليمينية."
    },
    {
     "ar": "تكون القواعد بصيغة A → xBy حيث يقع المتغير محصوراً بين حروف طرفية من الجانبين.",
     "en": "Productions are of the form A → xBy with the variable trapped between terminals on both sides.",
     "ok": false,
     "why": "خطأ: هذه قواعد خطية عامة (General Linear) وليست خطية يمينية."
    },
    {
     "ar": "تكون القواعد خالية تماماً من أي رموز طرفية T.",
     "en": "Productions are completely devoid of any terminal symbols T.",
     "ok": false,
     "why": "خطأ: الرموز الطرفية هي أساس تكوين الكلمات في القواعد الخطية اليمينية."
    }
   ],
   "ref": "L5-S022",
   "tip": "Right-Linear: المتغير في أقصى اليمين (A → xB أو A → x). Left-Linear: المتغير في أقصى اليسار (A → Bx أو A → x)."
  },
  {
   "n": 12,
   "type": "mcq",
   "q_ar": "ما هي الصيغة البنيوية القياسية لقواعد الإنتاج في القواعد الخطية اليسارية (Left-Linear Grammar)؟",
   "q_en": "What is the standard structural form of production rules in a Left-Linear Grammar?",
   "opts": [
    {
     "ar": "تكون جميع القواعد بصيغة A → Bx أو A → x (حيث A, B ∈ V و x ∈ T*، أي أن المتغير الوحيد يقع دائماً في أقصى يسار الطرف الأيمن).",
     "en": "All productions are of the form A → Bx or A → x (where A, B ∈ V and x ∈ T*, so the single variable is strictly at the far left of the RHS).",
     "ok": true,
     "why": "صحيح: في القواعد الخطية اليسارية، يبدأ الطرف الأيمن بالمتغير B متبوعاً بحروف طرفية x (أو حروف طرفية فقط)، مما يجعل نمو السلسلة يتم من اليمين بإضافة لاحقات."
    },
    {
     "ar": "تكون القواعد بصيغة A → xB حصراً.",
     "en": "Productions are strictly of the form A → xB.",
     "ok": false,
     "why": "خطأ: هذه هي القواعد الخطية اليمينية (Right-Linear)."
    },
    {
     "ar": "تكون القواعد بصيغة AB → x حيث يتواجد متغيران في الطرف الأيسر.",
     "en": "Productions are of the form AB → x with two variables on the LHS.",
     "ok": false,
     "why": "خطأ: وجود أكثر من رمز في الطرف الأيسر يخرج القواعد عن تصنيف القواعد الخالية من السياق ويجعلها حساسة للسياق (Context-Sensitive)."
    },
    {
     "ar": "قواعد لا تسمح بالاشتقاق المنتهي بالسلسلة الفارغة λ.",
     "en": "Grammar that forbids any derivation ending with the empty string λ.",
     "ok": false,
     "why": "خطأ: السلسلة الفارغة مسموحة عند x = λ (أي A → λ)."
    }
   ],
   "ref": "L5-S023",
   "tip": "في القواعد الخطية اليسارية (Left-Linear): المتغير B يقف أولاً في الطرف الأيمن (A → Bx)."
  },
  {
   "n": 13,
   "type": "mcq",
   "q_ar": "ما هو التعريف الدقيق للقواعد المنتظمة (Regular Grammar) في نظرية اللغات الصورية؟",
   "q_en": "What is the precise definition of a Regular Grammar in formal language theory?",
   "opts": [
    {
     "ar": "هي قواعد تكون جميع قواعد إنتاجها خطية يمينية بالكامل (All Right-Linear)، أو جميعها خطية يسارية بالكامل (All Left-Linear)، دون أي خلط بين النمطين في نفس القواعد.",
     "en": "A grammar where all production rules are strictly all Right-Linear, or strictly all Left-Linear, with no mixing of the two types in the same grammar.",
     "ok": true,
     "why": "صحيح: القواعد المنتظمة تشترط اتساق اتجاه الخطية في كامل القواعد (إما خطية يمينية صرفة أو خطية يسارية صرفة)؛ وتولد هذه الفئة اللغات المنتظمة بالضبط."
    },
    {
     "ar": "هي أي قواعد خطية تخلط بحرية بين القواعد اليمينية واليسارية في نفس مجموعة الإنتاج P.",
     "en": "Any linear grammar that freely mixes right-linear and left-linear rules within the same production set P.",
     "ok": false,
     "why": "خطأ: خلط القواعد اليمينية واليسارية معاً داخل نفس القواعد يخرجها من فئة القواعد المنتظمة ويحولها لقواعد خطية عامة تولد لغات غير منتظمة."
    },
    {
     "ar": "هي القواعد التي تولد فقط سلاسل متساوية الطول.",
     "en": "A grammar that generates only strings of equal lengths.",
     "ok": false,
     "why": "خطأ: القواعد المنتظمة تولد لغات منتظمة عامة بسلاسل ذات أطوال متغيرة ولانهائية."
    },
    {
     "ar": "هي قواعد لغات البرمجة C++ وجافا فقط.",
     "en": "A grammar for programming languages C++ and Java exclusively.",
     "ok": false,
     "why": "خطأ: معظم لغات البرمجة تُبنى بقواعد خالية من السياق (CFG) عامة بسبب الأقواس المتداخلة والتركيبات غير المنتظمة."
    }
   ],
   "ref": "L5-S025",
   "tip": "شرط القواعد المنتظمة (Regular Grammar): إما كلها Right-Linear فقط، أو كلها Left-Linear فقط. ممنوع الخلط!"
  },
  {
   "n": 14,
   "type": "mcq",
   "q_ar": "تأمّل القواعد الصورية التالية: P = { S → aA, A → Sb | λ }. ما هو التصنيف الدقيق لهذه القواعد، ولماذا لا تُعد قواعد منتظمة (Not Regular Grammar)؟",
   "q_en": "Consider the grammar: P = { S → aA, A → Sb | λ }. What is the exact classification of this grammar, and why is it NOT a Regular Grammar?",
   "opts": [
    {
     "ar": "هي قواعد خطية عامة (Linear CFG) وليست منتظمة، لأنها خلطت بين قاعدة خطية يمينية (S → aA) وقاعدة خطية يسارية (A → Sb)، وتولد اللغة غير المنتظمة { aⁿbⁿ | n ≥ 0 }.",
     "en": "It is a general Linear CFG and not regular because it mixes a right-linear rule (S → aA) with a left-linear rule (A → Sb), generating the non-regular language { aⁿbⁿ | n ≥ 0 }.",
     "ok": true,
     "why": "صحيح: القاعدة الأولى S → aA تضع المتغير في اليمين، بينما الثانية A → Sb تضع المتغير في اليسار، هذا الخلط بين النمطين يولد بالتتابع a و b على الأطراف لينتج aⁿbⁿ وهي لغة غير منتظمة."
    },
    {
     "ar": "هي قواعد منتظمة تماماً لأن كل قاعدة تحتوي على متغير واحد فقط في اليمين.",
     "en": "It is perfectly regular because each rule contains only one variable on the right.",
     "ok": false,
     "why": "خطأ: احتواء كل قاعدة على متغير واحد يجعلها 'خطية' (Linear)، لكن اختلاف موقع المتغير (يمين في الأولى ويسار في الثانية) يمنع تصنيفها كـ 'منتظمة'."
    },
    {
     "ar": "هي قواعد غير مقيدة (Unrestricted) لآلات تورنغ.",
     "en": "It is an unrestricted grammar for Turing machines.",
     "ok": false,
     "why": "خطأ: الطرف الأيسر يحوي متغيراً واحداً مفرداً، فهي ضمن القواعد الخالية من السياق (Type 2)."
    },
    {
     "ar": "هي قواعد غير صالحة وتحتوي على حلقة ميتة لا يمكن اشتقاق أي كلمة منها.",
     "en": "It is an invalid grammar with a dead loop that cannot derive any word.",
     "ok": false,
     "why": "خطأ: القواعد صالحة تماماً وتشتق كلمات صحيحة مثل S ⇒ aA ⇒ a(λ) = a (عند تعديل بسيط) أو S ⇒ aA ⇒ aSb ⇒ aaAb ⇒ aabb."
    }
   ],
   "ref": "L6-S029",
   "tip": "فخ امتحاني كلاسيكي: إذا رأيت قواعد فيها قاعدة Right (مثل S → aA) وأخرى Left (مثل A → Sb)، فالقواعد Linear وليست Regular وتولد {aⁿbⁿ}!"
  },
  {
   "n": 15,
   "type": "tf",
   "q_ar": "تنص مبرهنة التكافؤ للغات المنتظمة على أن اللغة L هي لغة منتظمة (Regular Language) إذا وفقط إذا وُجدت قواعد منتظمة G (سواء خطية يمينية أو يسارية) تولد هذه اللغة (أي L = L(G)).",
   "q_en": "The Equivalence Theorem for regular languages states that a language L is regular if and only if there exists a Regular Grammar G (either right-linear or left-linear) such that L = L(G).",
   "opts": [
    {
     "ar": "صحيح: لأن القواعد المنتظمة متكافئة رياضياً تماماً في قدرتها التعبيرية مع آلات DFA و NFA والتعبيرات النمطية (RegEx).",
     "en": "True: Because regular grammars are completely equivalent in expressive power to DFAs, NFAs, and Regular Expressions (RegEx).",
     "ok": true,
     "why": "صحيح: هذه إحدى المبرهنات الأساسية في نظرية الحوسبة؛ فالتحويل ثنائي الاتجاه ممكن دائماً بين Regular Grammars و Finite Automata."
    },
    {
     "ar": "خطأ: القواعد المنتظمة تولد لغات تفوق قدرة DFA و NFA.",
     "en": "False: Regular grammars generate languages beyond the capabilities of DFAs and NFAs.",
     "ok": false,
     "why": "خطأ: القواعد المنتظمة محصورة بدقة في فئة اللغات المنتظمة (Type 3) ولا تتجاوزها."
    }
   ],
   "ref": "L5-S028",
   "tip": "مبرهنة التكافؤ: اللغة L منتظمة (Regular) ⇔ توجد Regular Grammar تولدها (L = L(G)) ⇔ يقبلها DFA/NFA."
  },
  {
   "n": 16,
   "type": "mcq",
   "q_ar": "عند تحويل قواعد خطية يمينية (Right-Linear Grammar) إلى آلة NFA مكافئة، كيف تُمثَّل عناصر القواعد في الآلة الناتجة؟",
   "q_en": "When converting a Right-Linear Grammar into an equivalent NFA, how are the grammar components represented in the resulting automaton?",
   "opts": [
    {
     "ar": "يُمثَّل كل متغير V بحالة في الأوتوماتون (ومتغير البداية S هو حالة البداية)، والقاعدة A → aB تُمثَّل بانتقال من A إلى B بالرمز a، بينما القاعدة A → a تُمثَّل بانتقال بالرمز a من A إلى حالة قبول نهائية مضافة VF.",
     "en": "Each variable V corresponds to a state (start symbol S is start state), rule A → aB becomes a transition from A to B on symbol a, and rule A → a becomes a transition on a from A to an added final accept state VF.",
     "ok": true,
     "why": "صحيح: هذا هو الإجراء الرياضي القياسي للتحويل؛ المتغيرات تناظر الحالات، وتوليد الحرف مع استدعاء متغير آخر يناظر الانتقال بين الحالات، والإنهاء بحرف طرفي خالص يناظر الوصول لحالة القبول النهائية."
    },
    {
     "ar": "تُمثَّل الرموز الطرفية بالحالات، وتُمثَّل المتغيرات بأسهم الانتقال، وتكون جميع الحالات حالات بداية.",
     "en": "Terminal symbols become states, variables become transition arrows, and all states are start states.",
     "ok": false,
     "why": "خطأ: المتغيرات هي التي تتحول إلى حالات، والرموز الطرفية هي ملصقات أسهم الانتقال (Transition labels)."
    },
    {
     "ar": "يتم دمج جميع القواعد في حالة واحدة فقط، وتُلغى المتغيرات دون إنشاء أي حالات إضافية.",
     "en": "All rules are merged into a single state, and variables are deleted without creating any extra states.",
     "ok": false,
     "why": "خطأ: خوارزمية البناء تنشئ حالة لكل متغير مستقل بالإضافة إلى حالة قبول نهائية موحدة."
    },
    {
     "ar": "القاعدة A → aB تُمثَّل بحلقة ذاتية (Self-loop) دائماً على الحالة A بغض النظر عن المتغير B.",
     "en": "The rule A → aB is always represented as a self-loop on state A regardless of variable B.",
     "ok": false,
     "why": "خطأ: الحلقة الذاتية تحدث فقط عندما B = A (أي A → aA)، أما إذا كان B مختلفاً فالانتقال يتجه للحالة B."
    }
   ],
   "ref": "L6-S043",
   "tip": "خوارزمية G → NFA: كل Non-terminal هو State، متغير البداية S هو Start State، والقاعدة A → aB تعني سهماً من A إلى B بحرف a، والقاعدة A → a تذهب لحالة القبول VF."
  },
  {
   "n": 17,
   "type": "mcq",
   "q_ar": "عند تحويل آلة DFA M = (Q, Σ, δ, q₀, F) إلى قواعد خطية يمينية مكافئة G = (V, T, S, P)، ما هي القواعد المضافة لمجموعة P لكل انتقال δ(qᵢ, a) = qⱼ ولكل حالة قبول q_f ∈ F؟",
   "q_en": "When converting a DFA M = (Q, Σ, δ, q₀, F) into an equivalent Right-Linear Grammar G = (V, T, S, P), what rules are added to P for each transition δ(qᵢ, a) = qⱼ and for each accept state q_f ∈ F?",
   "opts": [
    {
     "ar": "لكل انتقال δ(qᵢ, a) = qⱼ تُضاف القاعدة qᵢ → a qⱼ، ولكل حالة نهائية q_f ∈ F تُضاف قاعدة الإنهاء q_f → λ.",
     "en": "For each transition δ(qᵢ, a) = qⱼ add the production qᵢ → a qⱼ, and for each final state q_f ∈ F add the terminating rule q_f → λ.",
     "ok": true,
     "why": "صحيح: هذه هي الخوارزمية القياسية لتحويل DFA إلى Right-Linear Grammar؛ فقراءة رمز والانتقال لحالة يقابلها توليد الرمز والانتقال للمتغير التالي، والوصول لحالة القبول يسمح بإنهاء الاشتقاق عبر λ."
    },
    {
     "ar": "لكل انتقال δ(qᵢ, a) = qⱼ تُضاف القاعدة qⱼ → a qᵢ، ولكل حالة نهائية تُضاف q₀ → λ.",
     "en": "For each transition δ(qᵢ, a) = qⱼ add the production qⱼ → a qᵢ, and for each final state add q₀ → λ.",
     "ok": false,
     "why": "خطأ: هذا يعكس اتجاه الانتقال، كما أن تفريغ λ يجب أن يضاف لحالات القبول النهائية q_f وليس لحالة البداية q₀ (إلا إذا كانت q₀ نهائية)."
    },
    {
     "ar": "تُضاف القاعدة qᵢ → qⱼ a في أقصى اليسار لإنشاء قواعد خطية يسارية فقط.",
     "en": "Add the production qᵢ → qⱼ a on the left to create left-linear rules only.",
     "ok": false,
     "why": "خطأ: الخوارزمية القياسية تحول إلى Right-Linear Grammar بصيغة qᵢ → a qⱼ."
    },
    {
     "ar": "تُحذف جميع الحالات النهائية ولا يُسمح بإضافة أي قاعدة تحوي λ.",
     "en": "All final states are deleted and no rules containing λ are allowed.",
     "ok": false,
     "why": "خطأ: بدون قواعد q_f → λ لن يتمكن الاشتقاق من التخلص من المتغير الأخير وإنتاج جملة طرفية خالصة."
    }
   ],
   "ref": "L6-S046",
   "tip": "خوارزمية DFA → Grammar: لكل انتقال δ(qᵢ, a) = qⱼ ضع qᵢ → a qⱼ، ولكل حالة نهائية q_f ∈ F ضع q_f → λ."
  },
  {
   "n": 18,
   "type": "mcq",
   "q_ar": "تُحدد اللغات المنتظمة (Regular Languages) بثلاث طرق صورية متكافئة رياضياً. ما هي هذه النماذج الثلاثة وما هو الدور الوظيفي لكل منها؟",
   "q_en": "Regular Languages are specified by three mathematically equivalent formal approaches. What are these three models and their respective functional roles?",
   "opts": [
    {
     "ar": "الآلات المنتهية (DFA/NFA) تقبل (Accept)، التعبيرات المنتظمة (Regular Expressions) تصف (Describe)، والقواعد المنتظمة (Regular Grammars) تولّد (Generate).",
     "en": "Finite Automata (DFA/NFA) accept, Regular Expressions describe, and Regular Grammars generate regular languages.",
     "ok": true,
     "why": "صحيح: هذا هو الثالوث المتكافئ للغات المنتظمة؛ فالآلات تعمل كـ Acceptors/Recognizers، والتعبيرات النمطية تقدم وصفاً إعلانيا دقيقاً، والـ Regular Grammars توفر آلية توليد واشتقاق خطوة بخطوة."
    },
    {
     "ar": "آلات تورنغ تصف، لغات C++ تقبل، ومترجمات جافا تولّد اللغات المنتظمة.",
     "en": "Turing machines describe, C++ languages accept, and Java compilers generate regular languages.",
     "ok": false,
     "why": "خطأ: هذه ليست النماذج الصورية الثلاثة المكافئة لتحديد اللغات المنتظمة في نظرية الحوسبة."
    },
    {
     "ar": "القواعد الخالية من السياق تقبل، القواعد الحساسة للسياق تصف، والآلات غير المنتهية تولّد.",
     "en": "Context-Free grammars accept, Context-Sensitive grammars describe, and Infinite automata generate.",
     "ok": false,
     "why": "خطأ: القواعد الخالية من السياق تولد لغات CFL الأعم من المنتظمة، والآلات المنتهية هي التي تقبل اللغات المنتظمة."
    },
    {
     "ar": "النماذج الثلاثة تؤدي نفس الوظيفة الحسابية كأدوات فحص واختبار فقط دون أي قدرة على التوليد.",
     "en": "All three models perform the exact same computational role as testing filters only without generative capacity.",
     "ok": false,
     "why": "خطأ: لكل نموذج دور متميز (Accepting vs Describing vs Generating) مع تكافؤ قوتها التعبيرية."
    }
   ],
   "ref": "L6-S051",
   "tip": "ثالوث اللغات المنتظمة: الآلات (FA) تقبل (Accept)، التعبيرات (RegEx) تصف (Describe)، والقواعد المنتظمة (Regular Grammars) تولّد (Generate)."
  },
  {
   "n": 19,
   "type": "mcq",
   "q_ar": "وفقاً لتسلسل تشومسكي الهرمي (Chomsky Hierarchy) للغات والقواعد الصورية، ما هو الترتيب الصحيح لعلاقات الاحتواء بين أصناف اللغات الأربعة (من الأضيق والأكثر تقييداً إلى الأعم)؟",
   "q_en": "According to the Chomsky Hierarchy for formal grammars and languages, what is the correct strict containment order among the four language classes (from most restricted to most general)?",
   "opts": [
    {
     "ar": "Type-3 (المنتظمة Regular) ⊂ Type-2 (الخالية من السياق Context-Free) ⊂ Type-1 (الحساسة للسياق Context-Sensitive) ⊂ Type-0 (غير المقيدة / المحسوبة Unrestricted).",
     "en": "Type-3 (Regular) ⊂ Type-2 (Context-Free) ⊂ Type-1 (Context-Sensitive) ⊂ Type-0 (Unrestricted / Recursively Enumerable).",
     "ok": true,
     "why": "صحيح: هذا هو التدرج الهرمي القياسي لتشومسكي؛ فاللغات المنتظمة هي المجموعة الجزئية الفعلية الأبسط، محتواة داخل اللغات الخالية من السياق، والتي بدورها محتواة في الحساسة للسياق ثم اللغات غير المقيدة لآلات تورنغ."
    },
    {
     "ar": "Type-0 (المنتظمة) ⊂ Type-1 (الخالية من السياق) ⊂ Type-2 (الحساسة للسياق) ⊂ Type-3 (غير المقيدة).",
     "en": "Type-0 (Regular) ⊂ Type-1 (Context-Free) ⊂ Type-2 (Context-Sensitive) ⊂ Type-3 (Unrestricted).",
     "ok": false,
     "why": "خطأ: ترقيم المستويات معكوس؛ فـ Type-3 هو الأكثر تقييداً (Regular) و Type-0 هو الأعم (Unrestricted)."
    },
    {
     "ar": "Type-2 (Context-Free) ⊂ Type-3 (Regular) ⊂ Type-0 (Unrestricted) ⊂ Type-1 (Context-Sensitive).",
     "en": "Type-2 (Context-Free) ⊂ Type-3 (Regular) ⊂ Type-0 (Unrestricted) ⊂ Type-1 (Context-Sensitive).",
     "ok": false,
     "why": "خطأ: اللغات المنتظمة Type-3 محتواة داخل Type-2 وليس العكس؛ فكل لغة منتظمة هي CFG ولكن ليست كل CFG منتظمة."
    },
    {
     "ar": "جميع هذه الأصناف الأربعة متطابقة ومتساوية تماماً في القوة التوليدية وتولد نفس اللغات.",
     "en": "All four classes are completely equivalent and identical in generative power, generating the exact same languages.",
     "ok": false,
     "why": "خطأ: توجد فروق جوهرية واحتواء صارم (Strict subsets)؛ فهناك لغات تقبلها مستويات أعلى تعجز عنها المستويات الأدنى."
    }
   ],
   "ref": "L6-S004",
   "tip": "هرم تشومسكي: Type 3 (Regular) ⊂ Type 2 (CFG) ⊂ Type 1 (CSG) ⊂ Type 0 (Unrestricted)."
  },
  {
   "n": 20,
   "type": "mcq",
   "q_ar": "في القواعد الصورية، ما الفرق بين الاشتقاق من أقصى اليسار (Leftmost Derivation) والاشتقاق من أقصى اليمين (Rightmost Derivation) عند بناء شجرة الإعراب (Parse Tree)؟",
   "q_en": "In formal grammars, what is the difference between Leftmost Derivation and Rightmost Derivation when constructing a Parse Tree?",
   "opts": [
    {
     "ar": "في الاشتقاق من أقصى اليسار يتم استبدال المتغير غير الطرفي الواقع في أقصى يسار الـ Sentential Form أولاً في كل خطوة، بينما في أقصى اليمين يُستبدل المتغير الواقع في أقصى اليمين أولاً، وكلاهما ينتجان نفس شجرة الإعراب إذا كانت القواعد غير غامضة.",
     "en": "In Leftmost Derivation the leftmost non-terminal in the sentential form is replaced first at each step, while in Rightmost Derivation the rightmost non-terminal is replaced first, and both yield the identical parse tree for unambiguous grammars.",
     "ok": true,
     "why": "صحيح: ترتيب الاشتقاق يحدد فقط أي متغير نبدأ باستبداله عند تعدد المتغيرات في الصيغة الجملية؛ فـ Leftmost يستبدل المتغير الأيسر أولاً، و Rightmost يستبدل الأيمن أولاً، وتطابق شجرة الإعراب يعكس البنية النحوية للكلمة."
    },
    {
     "ar": "الاشتقاق من أقصى اليسار يولد كلمات معكوسة تبدأ من اليمين، بينما الاشتقاق من أقصى اليمين يولد كلمات عادية.",
     "en": "Leftmost derivation generates reversed words starting from the right, while rightmost derivation generates normal words.",
     "ok": false,
     "why": "خطأ: كلاهما يشتق نفس الكلمة الأصلية بنفس ترتيب حروفها، والاختلاف هو فقط في ترتيب استبدال المتغيرات الوسيطة."
    },
    {
     "ar": "الاشتقاق من أقصى اليسار يُستخدم فقط للغات المنتظمة، بينما الاشتقاق من أقصى اليمين يُستخدم حصراً لآلات تورنغ.",
     "en": "Leftmost derivation is used only for regular languages, while rightmost derivation is used exclusively for Turing machines.",
     "ok": false,
     "why": "خطأ: كلا نوعي الاشتقاق ينطبقان على جميع القواعد الصورية وخاصة القواعد الخالية من السياق (CFG) في تصميم المترجمات."
    },
    {
     "ar": "الاشتقاق من أقصى اليسار يلغي قواعد الإنتاج التي تحتوي على السلسلة الفارغة λ.",
     "en": "Leftmost derivation disables production rules that contain the empty string λ.",
     "ok": false,
     "why": "خطأ: قواعد الإنهاء بـ λ تُطبق بحرية تامة في كلا نوعي الاشتقاق متى ما كان المتغير المستهدف مستحقاً للاستبدال."
    }
   ],
   "ref": "L6-S011",
   "tip": "Leftmost Derivation يستبدل المتغير غير الطرفي الأيسر أولاً في كل خطوة، و Rightmost Derivation يستبدل المتغير الأيمن أولاً."
  },
  {
   "n": 21,
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
   "n": 22,
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
   "n": 23,
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
   "n": 24,
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
   "n": 25,
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
   "n": 26,
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
   "n": 27,
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
   "n": 28,
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
   "n": 29,
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
   "n": 30,
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
   "n": 31,
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
   "n": 32,
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
   "n": 33,
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
   "n": 34,
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
 ]
});
