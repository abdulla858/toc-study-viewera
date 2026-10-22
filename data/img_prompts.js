window.TOC_IMG_PROMPTS = [
 {
  "id": "m2#1",
  "ref": "L3-S016",
  "title_ar": "تتبع مسار السلسلة 1001 على DFA وقرار القبول",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, crisp black ink textbook diagram style, no shading, no gradients, 4:3 aspect ratio. At the top, render this question text exactly (small clear font): 'For the DFA shown below over Σ = {0, 1}, what is the full execution trace and final decision for input w = \"1001\"?'. In the center, draw a deterministic finite automaton with 3 circular states arranged horizontally: q0 (left), q1 (center), and q2 (right). q0 has an incoming start arrow from the left. q2 is drawn with a concentric double circle as the accepting state. Transitions: q0 has a self-loop labeled '1' and a forward arrow to q1 labeled '0'; q1 has a self-loop labeled '0' and a forward arrow to q2 labeled '1'; q2 has a backward curved arrow to q1 labeled '0' and a long backward curved arrow to q0 labeled '1'. At the bottom, render the answer options exactly as: 'A) Trace: q0 --1--> q0 --0--> q1 --0--> q1 --1--> q2 (ACCEPT)  B) Trace: q0 --1--> q1 --0--> q1 --0--> q2 --1--> q0 (REJECT)  C) Trace: q0 --1--> q0 --0--> q2 --0--> q1 --1--> q2 (REJECT)  D) Path halts at q1 on duplicate 0 (REJECT)'."
 },
 {
  "id": "m2#2",
  "ref": "L3-S020",
  "title_ar": "تتبع السلسلة 0110 وتحديد الحالة النهائية وقرار القبول",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, crisp black ink textbook diagram style, no shading, no gradients, 4:3 aspect ratio. At the top, render this question text exactly (small clear font): 'Given the DFA shown below with accept state F = {q2}, trace execution on string w = \"0110\". Which state does it end in and what is the decision?'. In the center, draw a state transition diagram of the DFA with 3 states labeled q0, q1, and q2 in circles laid out horizontally. State q0 is on the left with an incoming start arrow. State q1 is in the center. State q2 is on the right, drawn with a double circle as the accepting state. Transitions: q0 has a self-loop labeled '1' and a directed edge to q1 labeled '0'; q1 has a self-loop labeled '0' and a forward directed edge to q2 labeled '1'; q2 has a backward directed edge to q1 labeled '0' and a curved backward edge to q0 labeled '1'. At the bottom, render the answer options exactly as: 'A) Ends at state q1 and REJECTS  B) Ends at state q2 and ACCEPTS  C) Ends at state q0 and REJECTS  D) Ends at an undefined trap state'."
 },
 {
  "id": "m2#3",
  "ref": "L3-S009",
  "title_ar": "استنتاج لغة DFA التي تقبل السلاسل المنتهية بـ ab",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, crisp black ink textbook diagram style, no shading, no gradients, 4:3 aspect ratio. At the top, render this question text exactly (small clear font): 'What is the exact language L(M) accepted by the DFA shown below over Σ = {a, b}?'. In the center, draw a deterministic finite automaton diagram with 3 states q0, q1, q2 arranged left to right: q0 is the start state with an incoming arrow, q1 is an intermediate state, and q2 is an accepting state with a double circle. Transitions: q0 has a self-loop labeled 'b' and an edge to q1 labeled 'a'; q1 has a self-loop labeled 'a' and an edge to q2 labeled 'b'; q2 has a backward edge to q1 labeled 'a' and a backward edge to q0 labeled 'b'. Alongside the diagram, render a transition table with rows q0, q1, q2 and columns a, b showing δ(q0,a)=q1, δ(q0,b)=q0; δ(q1,a)=q1, δ(q1,b)=q2; δ(q2,a)=q1, δ(q2,b)=q0. At the bottom, render the answer options exactly as: 'A) Strings ending with \"ab\"  B) Strings starting with \"ab\"  C) Strings with an even number of \"a\"s  D) Strings that do not contain \"bb\"'."
 },
 {
  "id": "m2#4",
  "ref": "L3-S014",
  "title_ar": "سلوك آلة DFA والانتقال لحالة المصيدة DEAD عند الخطأ",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, crisp black ink textbook diagram style, no shading, no gradients, 4:3 aspect ratio. At the top, render this question text exactly (small clear font): 'A DFA recognizes only \"abba\". From start state A, the target path is A --a--> B --b--> C --b--> D --a--> [Accept]. If the machine is at state C and reads \"a\" instead of \"b\", where must it transition?'. In the center, draw a state machine diagram showing states A, B, C, D, [Accept] in a horizontal row and a separate DEAD (trap) state below them. State A has an incoming start arrow. The main chain shows: A directed to B labeled 'a', B directed to C labeled 'b', C directed to D labeled 'b', D directed to [Accept] labeled 'a'. From state C, show a highlighted transition arrow labeled 'a' pointing downward directly into a state labeled 'DEAD'. The DEAD state has a self-loop labeled 'a, b'. At the bottom, render the answer options exactly as: 'A) Transitions to DEAD (trap) state and loops on itself forever  B) Returns to start state A to retry  C) Remains in state C waiting for symbol \"b\"  D) Transitions directly to accept state D'."
 },
 {
  "id": "m2#6",
  "ref": "L3-S037",
  "title_ar": "حساب دالة الانتقال الممتدة للسلسلة ababa على DFA",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, crisp black ink textbook diagram style, no shading, no gradients, 4:3 aspect ratio. At the top, render this question text exactly (small clear font): 'Given DFA M = (Q, Σ, δ, q0, F) with Σ = {a, b}, what is the value of the extended transition function δ*(q0, \"ababa\")?'. In the center, draw a deterministic finite automaton with 2 circular states: q0 on the left and q1 on the right. q0 has an incoming start arrow from the left. q1 is drawn with a distinct concentric double circle indicating accept state F = {q1}. Transitions: q0 has a self-loop labeled 'b' and a directed forward arrow to q1 labeled 'a'. q1 has a self-loop labeled 'b' and a directed backward arrow to q0 labeled 'a'. Below the diagram, render a clean transition table with rows q0, q1 and columns a, b showing δ(q0,a)=q1, δ(q0,b)=q0 and δ(q1,a)=q0, δ(q1,b)=q1. At the bottom, render the answer options exactly as: 'A) q1 (accepted since q1 ∈ F)  B) q0 (rejected since q0 ∉ F)  C) {q0, q1} simultaneously  D) Undefined because string ends with \"a\"'."
 },
 {
  "id": "m2#7",
  "ref": "L3-S035",
  "title_ar": "قبول السلسلة الفارغة عندما تكون حالة البداية حالة قبول",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, crisp black ink textbook diagram style, no shading, no gradients, 4:3 aspect ratio. At the top, render this question text exactly (small clear font): 'True or False: In any DFA, if the start state q0 is also an accept state (q0 ∈ F), then the empty string λ (or ε) is necessarily accepted.'. In the center, draw an illustrative abstract DFA diagram highlighting a single initial state labeled q0 drawn simultaneously with an incoming start arrow from the left AND a concentric double circle indicating it is an accepting state (q0 ∈ F). Show arbitrary outgoing transition arrows labeled '0, 1' leading to other generic states q1, q2. Next to the diagram, display the formal equation: δ*(q0, λ) = q0 ∈ F ⇒ λ ∈ L(M). At the bottom, render the answer options exactly as: 'A) True: Processing λ stays at start state δ*(q0, λ) = q0 ∈ F so it is accepted  B) False: Accepting λ requires an explicit λ-transition to a separate accept state'."
 },
 {
  "id": "m2#11",
  "ref": "L3-S018",
  "title_ar": "تحديد لغة آلة DFA تنتهي بالرمزين 00",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, crisp black ink textbook diagram style, no shading, no gradients, 4:3 aspect ratio. At the top, render this question text exactly (small clear font): 'What is the language recognized by the given DFA over Σ = {0, 1}?' In the center, draw a clean finite automaton with 3 states labeled q0, q1, q2 arranged in a horizontal line from left to right. State q0 is on the left with an incoming start arrow from the left and a self-loop labeled '1'. A forward directed arrow labeled '0' goes from q0 to q1. State q1 is in the center, with a forward directed arrow labeled '0' going from q1 to q2, and a backward curved arrow labeled '1' returning from q1 to q0. State q2 on the right is drawn with a distinct double circle (accepting state), having a self-loop labeled '0', and a long backward curved arrow labeled '1' returning from q2 to q0. At the bottom, render the answer options exactly as: 'A) All strings ending with at least two zeros (00)  B) All strings containing exactly two zeros in total  C) All strings starting with 00  D) All strings that contain no 1s'."
 },
 {
  "id": "m2#13",
  "ref": "L3-S028",
  "title_ar": "تحديد السلسلة المرفوضة في DFA يحتوي المقطع 01",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, crisp black ink textbook diagram style, no shading, no gradients, 4:3 aspect ratio. At the top, render this question text exactly (small clear font): 'Which of the following input strings will be REJECTED by this DFA?' In the center, draw a deterministic finite automaton with 3 circular states labeled q0, q1, q2 arranged horizontally from left to right. State q0 has an incoming start arrow from the left, a self-loop labeled '1', and a forward arrow labeled '0' to state q1. State q1 in the middle has a self-loop labeled '0' and a forward arrow labeled '1' to state q2. State q2 on the right is an accept state drawn with a double circle, featuring a self-loop labeled '0, 1'. At the bottom, render the answer options exactly as: 'A) 111000  B) 101  C) 00010  D) 01'."
 },
 {
  "id": "m2#16",
  "ref": "L3-S042",
  "title_ar": "استنتاج التعبير النمطي لـ DFA بعدد زوجي من b",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, crisp black ink textbook diagram style, no shading, no gradients, 4:3 aspect ratio. At the top, render this question text exactly (small clear font): 'What is the equivalent Regular Expression for the language accepted by this DFA?' In the center, draw a clean 2-state DFA with states labeled q0 and q1 placed side by side horizontally. State q0 on the left is both the start state (indicated by an incoming arrow from the left) and an accept state (drawn as a double circle), with a self-loop labeled 'a'. A top curved arrow labeled 'b' goes from q0 to q1. State q1 on the right is a single circle (non-accepting state) with a self-loop labeled 'a', and a bottom curved arrow labeled 'b' returning from q1 to q0. At the bottom, render the answer options exactly as: 'A) a*(ba*b)*a*  B) b*(ab*a)*b*  C) (a + b)*b  D) (ab)*'."
 },
 {
  "id": "m2#18",
  "ref": "L4-S016",
  "title_ar": "بناء طومسون لعملية الدمج التسلسلي للتعبير ab",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, crisp black ink textbook diagram style, no shading, no gradients, 4:3 aspect ratio. At the top, render this question text exactly (small clear font): 'In Thompson\\'s Construction for regex r = ab, how are the base automata for a and b connected?' In the center, draw a clear Thompson concatenation NFA diagram consisting of 4 circular states in a horizontal sequence: state 1 has an incoming start arrow from the left and a forward transition arrow labeled 'a' to state 2. State 2 is connected to state 3 via a forward transition arrow labeled 'ε'. State 3 has a forward transition arrow labeled 'b' to state 4, which is drawn as a double circle (final accept state). The sub-automata M(a) and M(b) are clearly indicated. At the bottom, render the answer options exactly as: 'A) Connect accept state of M(a) to start state of M(b) via an ε-transition  B) Create new start and accept states with parallel ε-arrows to both machines  C) Add a backward ε-transition from M(b) to M(a)  D) Reverse all arrows in M(a) then connect to M(b)'."
 },
 {
  "id": "m2#19",
  "ref": "L4-S019",
  "title_ar": "بناء طومسون لنجمة كلين والحالات والانتقالات المضافة",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, crisp black ink textbook diagram style, no shading, no gradients, 4:3 aspect ratio. At the top, render this question text exactly (small clear font): 'In Thompson\\'s construction for Kleene star r = a* from base NFA(a), what is the resulting structure?' In the center, draw a standard Thompson Kleene star NFA with 4 states arranged horizontally: q_start on the far left, inner states 1 and 2 in the middle, and q_accept on the far right. State q_start has an incoming start arrow from the left. An ε-transition arrow goes from q_start to state 1. Between inner states, an arrow labeled 'a' goes from state 1 to state 2. An ε-transition arrow goes from state 2 to q_accept. State q_accept is drawn as a double circle (accept state). Below the states, a curved backward feedback arrow labeled 'ε' goes from state 2 to state 1. Above the states, a long curved forward bypass arrow labeled 'ε' goes directly from q_start to q_accept. At the bottom, render the answer options exactly as: 'A) 4 states (q_start, 1, 2, q_accept) with 4 ε-transitions: q_start→1, 2→q_accept, feedback 2→1, and bypass q_start→q_accept  B) Only 2 states with a self-loop on a at start state  C) 3 states with only one ε-transition from accept to start state  D) 4 states without any feedback loop arrows'."
 },
 {
  "id": "m2#20",
  "ref": "L4-S023",
  "title_ar": "بناء طومسون لعملية الاتحاد للتعبير a زائد b",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, crisp black ink textbook diagram style, no shading, no gradients, 4:3 aspect ratio. At the top, render this question text exactly (small clear font): 'In Thompson\\'s construction for union r = (a + b), what is the formal structure of the resulting NFA?' In the center, draw a standard Thompson union NFA with 6 circular states arranged in a diamond layout. On the left is a new start state q0 with an incoming start arrow. State q0 splits into two branches with two forward ε-transition arrows: one going diagonally up to state 1, and one going diagonally down to state 3. In the top branch, a transition arrow labeled 'a' goes from state 1 to state 2. In the bottom branch, a transition arrow labeled 'b' goes from state 3 to state 4. On the right, a new single final accept state qf is drawn with a double circle, receiving two converging forward ε-transition arrows: one from state 2 and one from state 4. At the bottom, render the answer options exactly as: 'A) New start state q0 with ε-transitions to 1 and 3, and new accept state qf with ε-transitions from 2 and 4 (6 states total)  B) Merge state 2 with state 3 in a direct sequential path  C) Delete M_b and add a parallel b arrow on M_a  D) 4 states where states 2 and 4 are both accept states without adding qf'."
 },
 {
  "id": "m2#22",
  "ref": "L4-S014",
  "title_ar": "حساب الإغلاق الإبسلوني في NFA",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, crisp black ink textbook diagram style, no shading, no gradients, 4:3 aspect ratio. At the top, render this question text exactly (small clear font): 'Given an NFA with states {q0, q1, q2, q3} and transitions δ(q0, ε)={q1}, δ(q1, ε)={q2}, δ(q2, a)={q3}, what is ε-closure(q0)?' In the center, draw a clean horizontal NFA state diagram: start state q0 with incoming arrow from left, transition arrow to q1 labeled 'ε', transition arrow from q1 to q2 labeled 'ε', transition arrow from q2 to double-circle accept state q3 labeled 'a'. Crisp black ink circles and directed arrows. At the bottom, render the answer options exactly as: 'A) {q0, q1, q2}  B) {q1, q2}  C) {q0, q1, q2, q3}  D) {q0}'."
 },
 {
  "id": "m2#23",
  "ref": "L4-S014",
  "title_ar": "حساب الإغلاق الإبسلوني مع حلقة إبسلون",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, crisp black ink textbook diagram style, no shading, no gradients, 4:3 aspect ratio. At the top, render this question text exactly (small clear font): 'Given an NFA with an ε-loop: δ(q0, ε)={q1}, δ(q1, ε)={q0}, δ(q1, a)={q2}. What is ε-closure({q0, q1})?' In the center, draw an NFA transition diagram with 3 states: start state q0 with incoming arrow, state q1 in middle, and double-circle accept state q2 on right. Show curved forward arrow from q0 to q1 labeled 'ε' and curved return arrow from q1 to q0 labeled 'ε' forming a mutual loop. Draw directed arrow from q1 to q2 labeled 'a'. Crisp black lines on white background. At the bottom, render the answer options exactly as: 'A) {q0, q1}  B) {q0, q1, q2}  C) Undefined (infinite loop)  D) {q0}'."
 },
 {
  "id": "m2#24",
  "ref": "L4-S014",
  "title_ar": "خاصية احتواء الحالة في إغلاقها الإبسلوني",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, crisp black ink textbook diagram style, no shading, no gradients, 4:3 aspect ratio. At the top, render this question text exactly (small clear font): 'True or False: For any state q in any NFA, the set ε-closure(q) is always non-empty and contains at least state q itself.' In the center, illustrate the reflexive property of epsilon-closure: draw a circular state q enclosed inside a dashed group bubble labeled 'ε-closure(q)'. Include an annotation note showing '0-step reachability: q ∈ ε-closure(q)' with a small looped arc from q to itself labeled 'ε^0 = λ', indicating self-containment holds even with no outgoing transitions. At the bottom, render the answer options exactly as: 'A) True: Always non-empty because q is reachable from itself in 0 steps  B) False: Empty if state q has no outgoing ε-transitions'."
 },
 {
  "id": "m2#25",
  "ref": "L2-S013",
  "title_ar": "أقصى عدد نظري لحالات DFA من NFA",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, crisp black ink textbook diagram style, no shading, no gradients, 4:3 aspect ratio. At the top, render this question text exactly (small clear font): 'When converting an NFA with N = 4 states to an equivalent DFA using Subset Construction, what is the maximum theoretical number of states in the DFA?' In the center, draw a conceptual textbook diagram: on the left, an outline box titled 'NFA State Set Q (N = 4 states)' containing {q0, q1, q2, q3}; in the center, a bold horizontal conversion arrow labeled 'Power Set P(Q) (Subset Construction)'; on the right, an outline box titled 'DFA States |P(Q)| = 2^N' depicting state bubbles (∅, {q0}, {q1}, ..., {q0,q1,q2,q3}). At the bottom, render the answer options exactly as: 'A) 16 states (i.e., 2^4 = 2^N)  B) 8 states (2 * N)  C) Only 4 states  D) Infinite states'."
 },
 {
  "id": "m2#26",
  "ref": "L2-S013",
  "title_ar": "انتقال الحالة المركبة في بناء المجموعات الجزئية",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, crisp black ink textbook diagram style, no shading, no gradients, 4:3 aspect ratio. At the top, render this question text exactly (small clear font): 'In Subset Construction from NFA to DFA with composite state A = {q0, q1}, if δ(q0, 0) = {q0, q1} and δ(q1, 0) = {q2}, what is the DFA transition δ_DFA({q0, q1}, 0)?' In the center, draw a subset transition diagram: on the left, a large circular composite state labeled '{q0, q1}' with branching annotations δ(q0,0)={q0,q1} and δ(q1,0)={q2}; a directed arrow labeled '0' points right to a target state bubble labeled 'δ_DFA(A, 0) = δ(q0,0) ∪ δ(q1,0) = ?'. Crisp black ink textbook diagram. At the bottom, render the answer options exactly as: 'A) δ_DFA({q0, q1}, 0) = {q0, q1, q2}  B) δ_DFA({q0, q1}, 0) = {q0, q1}  C) δ_DFA({q0, q1}, 0) = {q2}  D) δ_DFA({q0, q1}, 0) = ∅'."
 },
 {
  "id": "m2#29",
  "ref": "L3-S004",
  "title_ar": "تمييز الحالات وتجزيء المجموعات في تقليل DFA",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, crisp black ink textbook diagram style, no shading, no gradients, 4:3 aspect ratio. At the top, render this question text exactly (small clear font): 'In DFA minimization, states p and q are in the same non-final group. If δ(p, a) = r1 (non-final) and δ(q, a) = r2 (accepting final state), what is concluded about p and q?' In the center, draw a state minimization partition refinement diagram: top partition block contains states 'p' and 'q'; from 'p', draw an arrow labeled 'a' to a single-circle state 'r1 (Non-Final)'; from 'q', draw an arrow labeled 'a' to a double-circle accept state 'r2 (Final Accept)'. A vertical dashed cut line separates p and q with label '1-step distinguishable by a → Split Group'. Crisp textbook diagram. At the bottom, render the answer options exactly as: 'A) p and q are distinguishable by \\'a\\' and must be split into different partition groups  B) p and q are completely equivalent and must be merged  C) Cannot decide until inspecting symbol \\'b\\'  D) State r1 must be converted to an accept state'."
 },
 {
  "id": "m4#16",
  "ref": "L3-S009",
  "title_ar": "بالنظر إلى الرسم الموضح لآلة الـ DFA، الآلة تقبل السلسلة w =",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, black ink textbook style. Top: the question text rendered exactly as: 'Determine if the DFA accepts w = bba and rejects w = bab'. Center: a deterministic finite automaton diagram with 2 states labeled q0 and q1 drawn as circles, the start state q0 marked with an incoming arrow from the left, state q1 drawn as a double circle (accept state), transition arrows: self-loop on q0 with label 'b', forward arrow from q0 to q1 labeled 'a', self-loop on q1 with label 'a', backward curved arrow from q1 to q0 labeled 'b'. Bottom: answer options rendered exactly as: 'True / False'. Crisp 1.5px lines, no shading, 4:3 aspect ratio."
 },
 {
  "id": "m4#17",
  "ref": "L3-S014",
  "title_ar": "آلة الـ DFA الموضحة في الرسم تقبل فقط السلاسل التي تبدأ بالر",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, black ink textbook style. Top: the question text rendered exactly as: 'Does this DFA accept the language of all strings starting with 0?'. Center: a deterministic finite automaton diagram with 3 states labeled q0, q1, q2 drawn as circles, start state q0 with incoming arrow from left, accept state q1 drawn as double circle, dead state q2 drawn as single circle, transition arrow from q0 to q1 labeled '0', arrow from q0 to q2 labeled '1', self-loop on q1 labeled '0, 1', self-loop on q2 labeled '0, 1'. Bottom: answer options rendered exactly as: 'True / False'. Crisp 1.5px lines, no shading, 4:3 aspect ratio."
 },
 {
  "id": "m4#18",
  "ref": "L4-S019",
  "title_ar": "الرسم يمثل بناء طومسون (Thompson's Construction) لأوتوماتون ",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, black ink textbook style. Top: the question text rendered exactly as: 'Identify if this NFA corresponds to the regular expression a* via Thompson construction'. Center: an NFA diagram with 4 states labeled q0, q1, q2, q3 drawn as circles, start state q0 with incoming arrow from left, final state q3 drawn as double circle, transitions: epsilon-arrow from q0 to q1, labeled arrow 'a' from q1 to q2, epsilon-arrow from q2 to q1 (loopback), epsilon-arrow from q2 to q3, and top curved epsilon-arrow from q0 to q3 bypassing the submachine. Bottom: answer options rendered exactly as: 'True / False'. Crisp 1.5px lines, no shading, 4:3 aspect ratio."
 },
 {
  "id": "m4#19",
  "ref": "L5-S003",
  "title_ar": "شجرة الاشتقاق (Parse Tree) الموضحة تمثل اشتقاقاً صحيحاً للسل",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, black ink textbook style. Top: the question text rendered exactly as: 'Verify if the parse tree derives the string aabb from S -> aSb | epsilon'. Center: a parse tree diagram with root node labeled S, branching into three child nodes labeled 'a', 'S', 'b'; the middle child S branches into three child nodes labeled 'a', 'S', 'b'; the second middle child S branches into a single child node labeled 'epsilon'; leaves read from left to right yield a-a-epsilon-b-b. Bottom: answer options rendered exactly as: 'True / False'. Crisp 1.5px lines, no shading, 4:3 aspect ratio."
 },
 {
  "id": "m4#20",
  "ref": "L6-S057",
  "title_ar": "مخطط الانتقال الموضح يمثل آلة NFA المكافئة للقواعد الخطية ال",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, black ink textbook style. Top: the question text rendered exactly as: 'Is this transition graph the exact NFA for grammar S -> aA, A -> bS | c?'. Center: a transition graph with 3 states labeled S, A, F drawn as circles, start state S marked with incoming arrow from left, accepting state F drawn as a double circle, directed edge from S to A labeled 'a', directed edge from A to S labeled 'b', directed edge from A to F labeled 'c'. Bottom: answer options rendered exactly as: 'True / False'. Crisp 1.5px lines, no shading, 4:3 aspect ratio."
 },
 {
  "id": "m4#28",
  "ref": "L3-S009",
  "title_ar": "صمم وارسم أوتوماتون حالة منتهية حتمي (DFA) يقبل لغة جميع الس",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, black ink textbook style. Top: the question text rendered exactly as: 'Design a minimal DFA that accepts all binary strings ending in 01'. Center: a deterministic finite automaton diagram with 3 states labeled q0, q1, q2 drawn horizontally as circles, incoming arrow into start state q0 from left, state q2 drawn as double circle (accept state), transitions: self-loop on q0 labeled '1', directed arrow from q0 to q1 labeled '0', self-loop on q1 labeled '0', directed arrow from q1 to q2 labeled '1', backward curved arrow from q2 to q1 labeled '0', long backward curved arrow from q2 to q0 labeled '1'. Bottom: answer options rendered exactly as: 'States: q0 (start), q1 (seen 0), q2 (accept, seen 01)'. Crisp 1.5px lines, no shading, 4:3 aspect ratio."
 },
 {
  "id": "m4#29",
  "ref": "L4-S023",
  "title_ar": "باستخدام خوارزمية بناء طومسون (Thompson's Construction)، ارس",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, black ink textbook style. Top: the question text rendered exactly as: 'Thompson Construction NFA for regular expression: a + b c*'. Center: an NFA diagram with start state q0 on the far left with an incoming arrow, branching with two epsilon arrows into top and bottom paths: top path has state q1 transition 'a' to q2 followed by epsilon to final state q8; bottom path has state q3 transition 'b' to q4, then epsilon to submachine for c* (states q5, q6, q7 with loopback and bypass epsilon transitions), then epsilon to double-circle accept state q8. Bottom: answer options rendered exactly as: 'Complete Thompson NFA with union and Kleene star submachines'. Crisp 1.5px lines, no shading, 4:3 aspect ratio."
 },
 {
  "id": "m4#30",
  "ref": "L5-S005",
  "title_ar": "لتكن القواعد الصورية المعرفة بقواعد الإنتاج التالية:\nS → aSb",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, black ink textbook style. Top: the question text rendered exactly as: 'Parse tree for deriving string aaccb from S -> aSb | A, A -> cA | epsilon'. Center: a hierarchical parse tree diagram with root labeled S branching into children labeled 'a', 'S', 'b'; the middle node S branches to a single child labeled 'A'; that node A branches into 'c' and 'A'; the second node A branches into 'c' and 'A'; the lowest node A branches into leaf 'epsilon'; leaves read from left to right: a, c, c, epsilon, b yielding string aaccb. Bottom: answer options rendered exactly as: 'Parse Tree Yield: aaccb'. Crisp 1.5px lines, no shading, 4:3 aspect ratio."
 },
 {
  "id": "m4#31",
  "ref": "L6-S057",
  "title_ar": "حوّل القواعد الخطية اليمنى (Right-Linear Grammar) التالية إل",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, black ink textbook style. Top: the question text rendered exactly as: 'NFA transition diagram constructed from Right-Linear Grammar'. Center: a transition diagram with 4 states labeled S, A, B, F drawn as circles, start state S with incoming arrow from left, accepting states B and F drawn as double circles, directed arrow from S to A labeled 'a', directed arrow from S to B labeled 'b', self-loop on A labeled 'a', directed arrow from A to S labeled 'b', directed arrow from A to F labeled 'a', self-loop on B labeled 'b'. Bottom: answer options rendered exactly as: 'States: S (start), A, B (final), F (final)'. Crisp 1.5px lines, no shading, 4:3 aspect ratio."
 },
 {
  "id": "m4#32",
  "ref": "L6-S078",
  "title_ar": "لدينا آلة DFA بحالات غير مبسطة تحتوي على حالات متكافئة وحالة",
  "lang": "en",
  "prompt": "Clean educational exam figure on pure white background, black ink textbook style. Top: the question text rendered exactly as: 'Minimized DFA with 2 equivalent/merged states'. Center: a minimal deterministic finite automaton diagram with 2 states labeled q02 and q1 drawn as circles, incoming arrow into start state q02 from left, accept state q1 drawn as double circle, transitions: self-loop on q02 labeled 'b', directed forward arrow from q02 to q1 labeled 'a', self-loop on q1 labeled 'a', directed backward arrow from q1 to q02 labeled 'b'. Bottom: answer options rendered exactly as: 'Minimized 2-state DFA (q3 removed, q0 and q2 merged)'. Crisp 1.5px lines, no shading, 4:3 aspect ratio."
 }
];
