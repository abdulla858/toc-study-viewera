window.TOC_MODELS = window.TOC_MODELS || [];

window.TOC_MODELS.push({
  "id": "m_quiz_59",
  "kind": "شامل معتمد",
  "title_ar": "بنك الاختبار الشامل النظري (Theory of Computation Quiz)",
  "origin_ar": "النموذج الشامل المعتمد للاختبارات النهائية (59 سؤالاً) — يغطي كامل مفردات المنهج: DFA, NFA, RegEx, CFG, PDA, TM مع الإجابات المعتمدة",
  "origin_label": "بنك أسئلة الاختبار الشامل (Final Quiz)",
  "questions": [
    {
      "n": 1,
      "type": "mcq",
      "q_en": "L = {x ∈ Σ = {0,1} | x = 0ⁿ1ⁿ for n ≥ 1}. Can there be a DFA possible for the language?",
      "q_ar": "السؤال 1: L = {x ∈ Σ = {0,1} | x = 0ⁿ1ⁿ for n ≥ 1}. Can there be a DFA possible for the language?",
      "opts": [
        {
          "ar": "Yes",
          "en": "Yes",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "No",
          "en": "No",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        }
      ],
      "ref": "L1-S007",
      "tip": "الإجابة المعتمدة: (B) No — راجع الشريحة L1-S007 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 2,
      "type": "mcq",
      "q_en": "The complement of a language will only be defined when and only when the __________ over the language is defined.",
      "q_ar": "السؤال 2: The complement of a language will only be defined when and only when the __________ over the language is defined.",
      "opts": [
        {
          "ar": "String",
          "en": "String",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Word",
          "en": "Word",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Alphabet",
          "en": "Alphabet",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "Grammar",
          "en": "Grammar",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L1-S009",
      "tip": "الإجابة المعتمدة: (C) Alphabet — راجع الشريحة L1-S009 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 3,
      "type": "mcq",
      "q_en": "According to the 5-tuple representation i.e. FA = {Q, Σ, δ, q, F}. Statement 1: q ∈ Q'; Statement 2: F ∈ Q",
      "q_ar": "السؤال 3: According to the 5-tuple representation i.e. FA = {Q, Σ, δ, q, F}. Statement 1: q ∈ Q'; Statement 2: F ∈ Q",
      "opts": [
        {
          "ar": "Statement 1 is true, Statement 2 is false",
          "en": "Statement 1 is true, Statement 2 is false",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Statement 1 is false, Statement 2 is true",
          "en": "Statement 1 is false, Statement 2 is true",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "Statement 1 is false, Statement 2 may be true",
          "en": "Statement 1 is false, Statement 2 may be true",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Statement 1 may be true, Statement 2 is false",
          "en": "Statement 1 may be true, Statement 2 is false",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L4-S010",
      "tip": "الإجابة المعتمدة: (B) Statement 1 is false, Statement 2 is true — راجع الشريحة L4-S010 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 4,
      "type": "mcq",
      "q_en": "The maximum number of transitions which can be performed over a state in a DFA? Σ = {a, b, c}",
      "q_ar": "السؤال 4: The maximum number of transitions which can be performed over a state in a DFA? Σ = {a, b, c}",
      "opts": [
        {
          "ar": "1",
          "en": "1",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "2",
          "en": "2",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "3",
          "en": "3",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "4",
          "en": "4",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L4-S013",
      "tip": "الإجابة المعتمدة: (C) 3 — راجع الشريحة L4-S013 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 5,
      "type": "mcq",
      "q_en": "Transition function maps:",
      "q_ar": "السؤال 5: Transition function maps:",
      "opts": [
        {
          "ar": "Σ * Q → Σ",
          "en": "Σ * Q → Σ",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Q * Q → Σ",
          "en": "Q * Q → Σ",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Σ * Σ → Q",
          "en": "Σ * Σ → Q",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Q * Σ → Q",
          "en": "Q * Σ → Q",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        }
      ],
      "ref": "L4-S016",
      "tip": "الإجابة المعتمدة: (D) Q * Σ → Q — راجع الشريحة L4-S016 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 6,
      "type": "mcq",
      "q_en": "δ*(q, ya) is equivalent to:",
      "q_ar": "السؤال 6: δ*(q, ya) is equivalent to:",
      "opts": [
        {
          "ar": "δ((q, y), a)",
          "en": "δ((q, y), a)",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "δ(δ*(q, y), a)",
          "en": "δ(δ*(q, y), a)",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "δ(q, ya)",
          "en": "δ(q, ya)",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "independent from δ notation",
          "en": "independent from δ notation",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L4-S019",
      "tip": "الإجابة المعتمدة: (B) δ(δ*(q, y), a) — راجع الشريحة L4-S019 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 7,
      "type": "mcq",
      "q_en": "Languages of an automata is:",
      "q_ar": "السؤال 7: Languages of an automata is:",
      "opts": [
        {
          "ar": "If it is accepted by automata",
          "en": "If it is accepted by automata",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "If it halts",
          "en": "If it halts",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "If automata touch final state in its lifetime",
          "en": "If automata touch final state in its lifetime",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "All language are language of automata",
          "en": "All language are language of automata",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L4-S022",
      "tip": "الإجابة المعتمدة: (A) If it is accepted by automata — راجع الشريحة L4-S022 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 8,
      "type": "mcq",
      "q_en": "Regular expression for all strings starts with ab and ends with bba is:",
      "q_ar": "السؤال 8: Regular expression for all strings starts with ab and ends with bba is:",
      "opts": [
        {
          "ar": "aba*b*bba",
          "en": "aba*b*bba",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "ab(ab)*bba",
          "en": "ab(ab)*bba",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "ab(a+b)*bba",
          "en": "ab(a+b)*bba",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "All of the mentioned",
          "en": "All of the mentioned",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L4-S025",
      "tip": "الإجابة المعتمدة: (C) ab(a+b)*bba — راجع الشريحة L4-S025 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 9,
      "type": "mcq",
      "q_en": "Which of the following options is correct? Statement 1: Initial State of NFA is Initial State of DFA. Statement 2: The final state of DFA will be every combination of final state of NFA.",
      "q_ar": "السؤال 9: Which of the following options is correct? Statement 1: Initial State of NFA is Initial State of DFA. Statement 2: The final state of DFA will be every combination of final state of NFA.",
      "opts": [
        {
          "ar": "Statement 1 is true and Statement 2 is true",
          "en": "Statement 1 is true and Statement 2 is true",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "Statement 1 is true and Statement 2 is false",
          "en": "Statement 1 is true and Statement 2 is false",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Statement 1 can be true and Statement 2 is true",
          "en": "Statement 1 can be true and Statement 2 is true",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Statement 1 is false and Statement 2 is also false",
          "en": "Statement 1 is false and Statement 2 is also false",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L4-S028",
      "tip": "الإجابة المعتمدة: (A) Statement 1 is true and Statement 2 is true — راجع الشريحة L4-S028 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 10,
      "type": "mcq",
      "q_en": "What is wrong in the given definition? Def: ({q0, q1, q2}, {0,1}, δ, q3, {q3})",
      "q_ar": "السؤال 10: What is wrong in the given definition? Def: ({q0, q1, q2}, {0,1}, δ, q3, {q3})",
      "opts": [
        {
          "ar": "The definition does not satisfy 5 Tuple definition of NFA",
          "en": "The definition does not satisfy 5 Tuple definition of NFA",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "There are no transition definition",
          "en": "There are no transition definition",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Initial and Final states do not belong to the Graph",
          "en": "Initial and Final states do not belong to the Graph",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "Initial and final states can’t be same",
          "en": "Initial and final states can’t be same",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L3-S022",
      "tip": "الإجابة المعتمدة: (C) Initial and Final states do not belong to the Graph — راجع الشريحة L3-S022 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 11,
      "type": "mcq",
      "q_en": "Which of the following is a regular language?",
      "q_ar": "السؤال 11: Which of the following is a regular language?",
      "opts": [
        {
          "ar": "String whose length is a sequence of prime numbers",
          "en": "String whose length is a sequence of prime numbers",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "String with substring wwr in between",
          "en": "String with substring wwr in between",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Palindrome string",
          "en": "Palindrome string",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "String with even number of Zero’s",
          "en": "String with even number of Zero’s",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        }
      ],
      "ref": "L3-S024",
      "tip": "الإجابة المعتمدة: (D) String with even number of Zero’s — راجع الشريحة L3-S024 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 12,
      "type": "mcq",
      "q_en": "Which of the following does not represent the given language? Language: {0,01}",
      "q_ar": "السؤال 12: Which of the following does not represent the given language? Language: {0,01}",
      "opts": [
        {
          "ar": "0+01",
          "en": "0+01",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "{0} U {01}",
          "en": "{0} U {01}",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "{0} U {0}{1}",
          "en": "{0} U {0}{1}",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "{0} ^ {01}",
          "en": "{0} ^ {01}",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        }
      ],
      "ref": "L3-S026",
      "tip": "الإجابة المعتمدة: (D) {0} ^ {01} — راجع الشريحة L3-S026 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 13,
      "type": "mcq",
      "q_en": "According to the given language, which among the following expressions does it correspond to? Language L = {x ∈ {0,1} | x is of length 4 or less}",
      "q_ar": "السؤال 13: According to the given language, which among the following expressions does it correspond to? Language L = {x ∈ {0,1} | x is of length 4 or less}",
      "opts": [
        {
          "ar": "(0+1+0+1+0+1+0+1)4",
          "en": "(0+1+0+1+0+1+0+1)4",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "(0+1)4",
          "en": "(0+1)4",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "(01)4",
          "en": "(01)4",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "(0+1+ε)4",
          "en": "(0+1+ε)4",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        }
      ],
      "ref": "L3-S028",
      "tip": "الإجابة المعتمدة: (D) (0+1+ε)4 — راجع الشريحة L3-S028 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 14,
      "type": "mcq",
      "q_en": "Which among the following looks similar to the given expression? ((0+1).(0+1))*",
      "q_ar": "السؤال 14: Which among the following looks similar to the given expression? ((0+1).(0+1))*",
      "opts": [
        {
          "ar": "{x ∈ {0,1}* | x is all binary numbers with even length}",
          "en": "{x ∈ {0,1}* | x is all binary numbers with even length}",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "{x ∈ {0,1} | x is all binary numbers with even length}",
          "en": "{x ∈ {0,1} | x is all binary numbers with even length}",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "{x ∈ {0,1}* | x is all binary numbers with odd length}",
          "en": "{x ∈ {0,1}* | x is all binary numbers with odd length}",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "{x ∈ {0,1} | x is all binary numbers with odd length}",
          "en": "{x ∈ {0,1} | x is all binary numbers with odd length}",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L3-S030",
      "tip": "الإجابة المعتمدة: (A) {x ∈ {0,1}* | x is all binary numbers with even length} — راجع الشريحة L3-S030 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 15,
      "type": "mcq",
      "q_en": "Concatenation Operation refers to which of the following set operations:",
      "q_ar": "السؤال 15: Concatenation Operation refers to which of the following set operations:",
      "opts": [
        {
          "ar": "Union",
          "en": "Union",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Dot",
          "en": "Dot",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "Kleene",
          "en": "Kleene",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Two of the options are correct",
          "en": "Two of the options are correct",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L3-S032",
      "tip": "الإجابة المعتمدة: (B) Dot — راجع الشريحة L3-S032 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 16,
      "type": "mcq",
      "q_en": "Concatenation of R with Ф outputs:",
      "q_ar": "السؤال 16: Concatenation of R with Ф outputs:",
      "opts": [
        {
          "ar": "R",
          "en": "R",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Ф",
          "en": "Ф",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "R.Ф",
          "en": "R.Ф",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "None of the mentioned",
          "en": "None of the mentioned",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L3-S034",
      "tip": "الإجابة المعتمدة: (B) Ф — راجع الشريحة L3-S034 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 17,
      "type": "mcq",
      "q_en": "RR* can be expressed in which of the forms:",
      "q_ar": "السؤال 17: RR* can be expressed in which of the forms:",
      "opts": [
        {
          "ar": "R+",
          "en": "R+",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "R-",
          "en": "R-",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "R+ U R-",
          "en": "R+ U R-",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "R",
          "en": "R",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L3-S036",
      "tip": "الإجابة المعتمدة: (A) R+ — راجع الشريحة L3-S036 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 18,
      "type": "mcq",
      "q_en": "Which among the following are incorrect regular identities?",
      "q_ar": "السؤال 18: Which among the following are incorrect regular identities?",
      "opts": [
        {
          "ar": "εR = R",
          "en": "εR = R",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "ε* = ε",
          "en": "ε* = ε",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Ф* = ε",
          "en": "Ф* = ε",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "RФ = R",
          "en": "RФ = R",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        }
      ],
      "ref": "L3-S038",
      "tip": "الإجابة المعتمدة: (D) RФ = R — راجع الشريحة L3-S038 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 19,
      "type": "mcq",
      "q_en": "(0+ε)(1+ε) represents:",
      "q_ar": "السؤال 19: (0+ε)(1+ε) represents:",
      "opts": [
        {
          "ar": "{0, 1, 01, ε}",
          "en": "{0, 1, 01, ε}",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "{0, 1, ε}",
          "en": "{0, 1, ε}",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "{0, 1, 01, 11, 00, 10, ε}",
          "en": "{0, 1, 01, 11, 00, 10, ε}",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "{0, 1}",
          "en": "{0, 1}",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L3-S002",
      "tip": "الإجابة المعتمدة: (A) {0, 1, 01, ε} — راجع الشريحة L3-S002 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 20,
      "type": "mcq",
      "q_en": "Which of the following is correct? Statement 1: ε represents a single string in the set. Statement 2: Ф represents the language that consists of no string.",
      "q_ar": "السؤال 20: Which of the following is correct? Statement 1: ε represents a single string in the set. Statement 2: Ф represents the language that consists of no string.",
      "opts": [
        {
          "ar": "Statement 1 and 2 both are correct",
          "en": "Statement 1 and 2 both are correct",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "Statement 1 is false but 2 is correct",
          "en": "Statement 1 is false but 2 is correct",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Statement 1 and 2 both are false",
          "en": "Statement 1 and 2 both are false",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "There is no difference between both the statements, ε and Ф are different notation for same reason",
          "en": "There is no difference between both the statements, ε and Ф are different notation for same reason",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L3-S004",
      "tip": "الإجابة المعتمدة: (A) Statement 1 and 2 both are correct — راجع الشريحة L3-S004 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 21,
      "type": "mcq",
      "q_en": "(a + b*).c most correctly represents:",
      "q_ar": "السؤال 21: (a + b*).c most correctly represents:",
      "opts": [
        {
          "ar": "(a + b)*c",
          "en": "(a + b)*c",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "(a) + ((b)*.c)",
          "en": "(a) + ((b)*.c)",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "(a + (b*)).c",
          "en": "(a + (b*)).c",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "a + ((b*).c)",
          "en": "a + ((b*).c)",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L3-S006",
      "tip": "الإجابة المعتمدة: (C) (a + (b*)).c — راجع الشريحة L3-S006 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 22,
      "type": "mcq",
      "q_en": "Which of the following regular expressions represents the set of strings which do not contain a substring ‘rt’ if Σ = {r, t}",
      "q_ar": "السؤال 22: Which of the following regular expressions represents the set of strings which do not contain a substring ‘rt’ if Σ = {r, t}",
      "opts": [
        {
          "ar": "(rt)*",
          "en": "(rt)*",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "(tr)*",
          "en": "(tr)*",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "(r*t*)",
          "en": "(r*t*)",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "(t*r*)",
          "en": "(t*r*)",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        }
      ],
      "ref": "L3-S008",
      "tip": "الإجابة المعتمدة: (D) (t*r*) — راجع الشريحة L3-S008 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 23,
      "type": "mcq",
      "q_en": "Generate a regular expression for the given language: L(x) = {x ∈ {0,1}* | x ends with 1 and does not contain a substring 01}",
      "q_ar": "السؤال 23: Generate a regular expression for the given language: L(x) = {x ∈ {0,1}* | x ends with 1 and does not contain a substring 01}",
      "opts": [
        {
          "ar": "(0+01)*",
          "en": "(0+01)*",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "(0+01)*1",
          "en": "(0+01)*1",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "(0+01)*(1+01)",
          "en": "(0+01)*(1+01)",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "All of the mentioned",
          "en": "All of the mentioned",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L3-S010",
      "tip": "الإجابة المعتمدة: (C) (0+01)*(1+01) — راجع الشريحة L3-S010 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 24,
      "type": "mcq",
      "q_en": "Regular grammar is:",
      "q_ar": "السؤال 24: Regular grammar is:",
      "opts": [
        {
          "ar": "context free grammar",
          "en": "context free grammar",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "non context free grammar",
          "en": "non context free grammar",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "english grammar",
          "en": "english grammar",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "none of the mentioned",
          "en": "none of the mentioned",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L4-S073",
      "tip": "الإجابة المعتمدة: (A) context free grammar — راجع الشريحة L4-S073 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 25,
      "type": "mcq",
      "q_en": "State true or false? Statement: An NFA can be modified to allow transition without input alphabets, along with one or more transitions on input symbols.",
      "q_ar": "السؤال 25: State true or false? Statement: An NFA can be modified to allow transition without input alphabets, along with one or more transitions on input symbols.",
      "opts": [
        {
          "ar": "True",
          "en": "True",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "False",
          "en": "False",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L4-S076",
      "tip": "الإجابة المعتمدة: (A) True — راجع الشريحة L4-S076 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 26,
      "type": "mcq",
      "q_en": "Statement: ε (Input) does not appear on Input tape.",
      "q_ar": "السؤال 26: Statement: ε (Input) does not appear on Input tape.",
      "opts": [
        {
          "ar": "True",
          "en": "True",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "False",
          "en": "False",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L4-S079",
      "tip": "الإجابة المعتمدة: (A) True — راجع الشريحة L4-S079 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 27,
      "type": "mcq",
      "q_en": "Complement of a DFA can be obtained by:",
      "q_ar": "السؤال 27: Complement of a DFA can be obtained by:",
      "opts": [
        {
          "ar": "making starting state as final state",
          "en": "making starting state as final state",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "no trivial method",
          "en": "no trivial method",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "making final states non-final and non-final to final",
          "en": "making final states non-final and non-final to final",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "make final as a starting state",
          "en": "make final as a starting state",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L4-S082",
      "tip": "الإجابة المعتمدة: (C) making final states non-final and non-final to final — راجع الشريحة L4-S082 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 28,
      "type": "mcq",
      "q_en": "The Grammar can be defined as: G = (V, Σ, P, S). In the given definition, what does S represent?",
      "q_ar": "السؤال 28: The Grammar can be defined as: G = (V, Σ, P, S). In the given definition, what does S represent?",
      "opts": [
        {
          "ar": "Accepting State",
          "en": "Accepting State",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Starting Variable",
          "en": "Starting Variable",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "Sensitive Grammar",
          "en": "Sensitive Grammar",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "None of these",
          "en": "None of these",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L6-S008",
      "tip": "الإجابة المعتمدة: (B) Starting Variable — راجع الشريحة L6-S008 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 29,
      "type": "mcq",
      "q_en": "For S -> 0S1 | ε for Σ = {0,1}*, which of the following is wrong for the language produced?",
      "q_ar": "السؤال 29: For S -> 0S1 | ε for Σ = {0,1}*, which of the following is wrong for the language produced?",
      "opts": [
        {
          "ar": "Non regular language",
          "en": "Non regular language",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "0ⁿ1ⁿ | n ≥ 0",
          "en": "0ⁿ1ⁿ | n ≥ 0",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "0ⁿ1ⁿ | n ≥ 1",
          "en": "0ⁿ1ⁿ | n ≥ 1",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "None of the mentioned",
          "en": "None of the mentioned",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        }
      ],
      "ref": "L6-S016",
      "tip": "الإجابة المعتمدة: (D) None of the mentioned — راجع الشريحة L6-S016 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 30,
      "type": "mcq",
      "q_en": "A -> aA | a | b. The number of steps to form \\\"aab\\\":",
      "q_ar": "السؤال 30: A -> aA | a | b. The number of steps to form \\\"aab\\\":",
      "opts": [
        {
          "ar": "2",
          "en": "2",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "3",
          "en": "3",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "4",
          "en": "4",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "5",
          "en": "5",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L6-S024",
      "tip": "الإجابة المعتمدة: (B) 3 — راجع الشريحة L6-S024 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 31,
      "type": "mcq",
      "q_en": "The language accepted by Push down Automaton:",
      "q_ar": "السؤال 31: The language accepted by Push down Automaton:",
      "opts": [
        {
          "ar": "Recursive Language",
          "en": "Recursive Language",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Context free language",
          "en": "Context free language",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "Linearly Bounded language",
          "en": "Linearly Bounded language",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "All of the mentioned",
          "en": "All of the mentioned",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L6-S032",
      "tip": "الإجابة المعتمدة: (B) Context free language — راجع الشريحة L6-S032 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 32,
      "type": "mcq",
      "q_en": "Which among the following is the correct option for the given grammar? G -> X111 | G1, X -> X0 | 00",
      "q_ar": "السؤال 32: Which among the following is the correct option for the given grammar? G -> X111 | G1, X -> X0 | 00",
      "opts": [
        {
          "ar": "{0^a 1^b | a ≥ 2, b ≥ 3}",
          "en": "{0^a 1^b | a ≥ 2, b ≥ 3}",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "{0^a 1^b | a = 1, b = 5}",
          "en": "{0^a 1^b | a = 1, b = 5}",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "{0^a 1^b | a = b}",
          "en": "{0^a 1^b | a = b}",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "More than one of the mentioned is correct",
          "en": "More than one of the mentioned is correct",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L6-S040",
      "tip": "الإجابة المعتمدة: (A) {0^a 1^b | a ≥ 2, b ≥ 3} — راجع الشريحة L6-S040 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 33,
      "type": "mcq",
      "q_en": "Which of the following the given language belongs to? L = {a^m b^m c^m | m ≥ 1}",
      "q_ar": "السؤال 33: Which of the following the given language belongs to? L = {a^m b^m c^m | m ≥ 1}",
      "opts": [
        {
          "ar": "Context free language",
          "en": "Context free language",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Regular language",
          "en": "Regular language",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Context free language & Regular language",
          "en": "Context free language & Regular language",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "None of the mentioned",
          "en": "None of the mentioned",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        }
      ],
      "ref": "L6-S048",
      "tip": "الإجابة المعتمدة: (D) None of the mentioned — راجع الشريحة L6-S048 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 34,
      "type": "mcq",
      "q_en": "Every right-linear grammar generates a regular language.",
      "q_ar": "السؤال 34: Every right-linear grammar generates a regular language.",
      "opts": [
        {
          "ar": "True",
          "en": "True",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "False",
          "en": "False",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L6-S056",
      "tip": "الإجابة المعتمدة: (A) True — راجع الشريحة L6-S056 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 35,
      "type": "mcq",
      "q_en": "CFG for L = {x ∈ {0,1}* | number of zeroes = number of ones}",
      "q_ar": "السؤال 35: CFG for L = {x ∈ {0,1}* | number of zeroes = number of ones}",
      "opts": [
        {
          "ar": "S -> ε | 0S1 | 1S0 | SS",
          "en": "S -> ε | 0S1 | 1S0 | SS",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "S -> 0B | 1A | ε; A -> 0S; B -> 1S",
          "en": "S -> 0B | 1A | ε; A -> 0S; B -> 1S",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "All of the mentioned",
          "en": "All of the mentioned",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "None of the mentioned",
          "en": "None of the mentioned",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L7-S005",
      "tip": "الإجابة المعتمدة: (C) All of the mentioned — راجع الشريحة L7-S005 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 36,
      "type": "mcq",
      "q_en": "A push down automaton employs ________ data structure.",
      "q_ar": "السؤال 36: A push down automaton employs ________ data structure.",
      "opts": [
        {
          "ar": "Queue",
          "en": "Queue",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Linked List",
          "en": "Linked List",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Hash Table",
          "en": "Hash Table",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Stack",
          "en": "Stack",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        }
      ],
      "ref": "L7-S008",
      "tip": "الإجابة المعتمدة: (D) Stack — راجع الشريحة L7-S008 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 37,
      "type": "mcq",
      "q_en": "The operations of PDA never work on elements, other than the top.",
      "q_ar": "السؤال 37: The operations of PDA never work on elements, other than the top.",
      "opts": [
        {
          "ar": "True",
          "en": "True",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "False",
          "en": "False",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L7-S011",
      "tip": "الإجابة المعتمدة: (A) True — راجع الشريحة L7-S011 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 38,
      "type": "mcq",
      "q_en": "Which of the operations are eligible in PDA?",
      "q_ar": "السؤال 38: Which of the operations are eligible in PDA?",
      "opts": [
        {
          "ar": "Push",
          "en": "Push",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "Delete",
          "en": "Delete",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Insert",
          "en": "Insert",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Add",
          "en": "Add",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L7-S014",
      "tip": "الإجابة المعتمدة: (A) Push — راجع الشريحة L7-S014 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 39,
      "type": "mcq",
      "q_en": "A string is accepted by a PDA when",
      "q_ar": "السؤال 39: A string is accepted by a PDA when",
      "opts": [
        {
          "ar": "Stack is not empty",
          "en": "Stack is not empty",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Acceptance state",
          "en": "Acceptance state",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "All of the mentioned",
          "en": "All of the mentioned",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "None of the mentioned",
          "en": "None of the mentioned",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L7-S017",
      "tip": "الإجابة المعتمدة: (B) Acceptance state — راجع الشريحة L7-S017 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 40,
      "type": "mcq",
      "q_en": "The following move of a PDA is on the basis of:",
      "q_ar": "السؤال 40: The following move of a PDA is on the basis of:",
      "opts": [
        {
          "ar": "Present state",
          "en": "Present state",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Input Symbol",
          "en": "Input Symbol",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Present state and Input Symbol",
          "en": "Present state and Input Symbol",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "None of the mentioned",
          "en": "None of the mentioned",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L7-S020",
      "tip": "الإجابة المعتمدة: (C) Present state and Input Symbol — راجع الشريحة L7-S020 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 41,
      "type": "mcq",
      "q_en": "NPDA stands for",
      "q_ar": "السؤال 41: NPDA stands for",
      "opts": [
        {
          "ar": "Non-Deterministic Push Down Automata",
          "en": "Non-Deterministic Push Down Automata",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "Null Push Down Automata",
          "en": "Null Push Down Automata",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Nested Push Down Automata",
          "en": "Nested Push Down Automata",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "All of the mentioned",
          "en": "All of the mentioned",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L7-S023",
      "tip": "الإجابة المعتمدة: (A) Non-Deterministic Push Down Automata — راجع الشريحة L7-S023 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 42,
      "type": "mcq",
      "q_en": "The instantaneous PDA has the following elements",
      "q_ar": "السؤال 42: The instantaneous PDA has the following elements",
      "opts": [
        {
          "ar": "State",
          "en": "State",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Unconsumed input",
          "en": "Unconsumed input",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Stack content",
          "en": "Stack content",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "All of the mentioned",
          "en": "All of the mentioned",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        }
      ],
      "ref": "L7-S026",
      "tip": "الإجابة المعتمدة: (D) All of the mentioned — راجع الشريحة L7-S026 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 43,
      "type": "mcq",
      "q_en": "Every context free grammar can be transformed into an equivalent non-deterministic push down automata.",
      "q_ar": "السؤال 43: Every context free grammar can be transformed into an equivalent non-deterministic push down automata.",
      "opts": [
        {
          "ar": "True",
          "en": "True",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "False",
          "en": "False",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L7-S029",
      "tip": "الإجابة المعتمدة: (A) True — راجع الشريحة L7-S029 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 44,
      "type": "mcq",
      "q_en": "Which of the following are the actions that operate on stack top?",
      "q_ar": "السؤال 44: Which of the following are the actions that operate on stack top?",
      "opts": [
        {
          "ar": "Pushing",
          "en": "Pushing",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Popping",
          "en": "Popping",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Replacing",
          "en": "Replacing",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "All of the mentioned",
          "en": "All of the mentioned",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        }
      ],
      "ref": "L7-S032",
      "tip": "الإجابة المعتمدة: (D) All of the mentioned — راجع الشريحة L7-S032 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 45,
      "type": "mcq",
      "q_en": "A PDA machine configuration (p, w, y) can be correctly represented as:",
      "q_ar": "السؤال 45: A PDA machine configuration (p, w, y) can be correctly represented as:",
      "opts": [
        {
          "ar": "(current state, unprocessed input, stack content)",
          "en": "(current state, unprocessed input, stack content)",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "(unprocessed input, stack content, current state)",
          "en": "(unprocessed input, stack content, current state)",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "(current state, stack content, unprocessed input)",
          "en": "(current state, stack content, unprocessed input)",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "none of the mentioned",
          "en": "none of the mentioned",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L7-S035",
      "tip": "الإجابة المعتمدة: (A) (current state, unprocessed input, stack content) — راجع الشريحة L7-S035 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 46,
      "type": "mcq",
      "q_en": "If the PDA does not stop on an accepting state and the stack is not empty, the string is:",
      "q_ar": "السؤال 46: If the PDA does not stop on an accepting state and the stack is not empty, the string is:",
      "opts": [
        {
          "ar": "rejected",
          "en": "rejected",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "goes into loop forever",
          "en": "goes into loop forever",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "all of the mentioned",
          "en": "all of the mentioned",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "none of the mentioned",
          "en": "none of the mentioned",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L7-S038",
      "tip": "الإجابة المعتمدة: (A) rejected — راجع الشريحة L7-S038 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 47,
      "type": "mcq",
      "q_en": "Which of the following strings is not generated by the following grammar? S → SaSbS | ε",
      "q_ar": "السؤال 47: Which of the following strings is not generated by the following grammar? S → SaSbS | ε",
      "opts": [
        {
          "ar": "aabb",
          "en": "aabb",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "abab",
          "en": "abab",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "aababb",
          "en": "aababb",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "aaabbb",
          "en": "aaabbb",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        }
      ],
      "ref": "L9-S008",
      "tip": "الإجابة المعتمدة: (D) aaabbb — راجع الشريحة L9-S008 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 48,
      "type": "mcq",
      "q_en": "The regular expressions denote zero or more instances of x or y is?",
      "q_ar": "السؤال 48: The regular expressions denote zero or more instances of x or y is?",
      "opts": [
        {
          "ar": "(x+y)",
          "en": "(x+y)",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "(x+y)*",
          "en": "(x+y)*",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "(x* + y)",
          "en": "(x* + y)",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "(xy)*",
          "en": "(xy)*",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L9-S016",
      "tip": "الإجابة المعتمدة: (B) (x+y)* — راجع الشريحة L9-S016 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 49,
      "type": "mcq",
      "q_en": "A Turing machine operates over:",
      "q_ar": "السؤال 49: A Turing machine operates over:",
      "opts": [
        {
          "ar": "finite memory tape",
          "en": "finite memory tape",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "infinite memory tape",
          "en": "infinite memory tape",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "depends on the algorithm",
          "en": "depends on the algorithm",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "none of the mentioned",
          "en": "none of the mentioned",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L9-S024",
      "tip": "الإجابة المعتمدة: (B) infinite memory tape — راجع الشريحة L9-S024 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 50,
      "type": "mcq",
      "q_en": "Which of the functions are not performed by the Turing machine after reading a symbol?",
      "q_ar": "السؤال 50: Which of the functions are not performed by the Turing machine after reading a symbol?",
      "opts": [
        {
          "ar": "writes the symbol",
          "en": "writes the symbol",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "moves the tape one cell left/right",
          "en": "moves the tape one cell left/right",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "proceeds with next instruction or halts",
          "en": "proceeds with next instruction or halts",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "none of the mentioned",
          "en": "none of the mentioned",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        }
      ],
      "ref": "L9-S032",
      "tip": "الإجابة المعتمدة: (D) none of the mentioned — راجع الشريحة L9-S032 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 51,
      "type": "mcq",
      "q_en": "Which of the following a Turing machine does not consist of?",
      "q_ar": "السؤال 51: Which of the following a Turing machine does not consist of?",
      "opts": [
        {
          "ar": "input tape",
          "en": "input tape",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "head",
          "en": "head",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "state register",
          "en": "state register",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "none of the mentioned",
          "en": "none of the mentioned",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        }
      ],
      "ref": "L9-S040",
      "tip": "الإجابة المعتمدة: (D) none of the mentioned — راجع الشريحة L9-S040 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 52,
      "type": "mcq",
      "q_en": "If δ is not defined on the current state and the current tape symbol, then the machine ______",
      "q_ar": "السؤال 52: If δ is not defined on the current state and the current tape symbol, then the machine ______",
      "opts": [
        {
          "ar": "does not halt",
          "en": "does not halt",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "halts",
          "en": "halts",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "goes into loop forever",
          "en": "goes into loop forever",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "none of the mentioned",
          "en": "none of the mentioned",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L9-S048",
      "tip": "الإجابة المعتمدة: (B) halts — راجع الشريحة L9-S048 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 53,
      "type": "mcq",
      "q_en": "(a+b)* is equivalent to:",
      "q_ar": "السؤال 53: (a+b)* is equivalent to:",
      "opts": [
        {
          "ar": "b* a*",
          "en": "b* a*",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "(a*b*)*",
          "en": "(a*b*)*",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "a*b*",
          "en": "a*b*",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "none of the mentioned",
          "en": "none of the mentioned",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L3-S022",
      "tip": "الإجابة المعتمدة: (B) (a*b*)* — راجع الشريحة L3-S022 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 54,
      "type": "mcq",
      "q_en": "Regular expression for all strings starts with ab and ends with bba is:",
      "q_ar": "السؤال 54: Regular expression for all strings starts with ab and ends with bba is:",
      "opts": [
        {
          "ar": "ababbba",
          "en": "ababbba",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "ab(ab)*bba",
          "en": "ab(ab)*bba",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "ab(a+b)*bba",
          "en": "ab(a+b)*bba",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "All of the mentioned",
          "en": "All of the mentioned",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L3-S026",
      "tip": "الإجابة المعتمدة: (C) ab(a+b)*bba — راجع الشريحة L3-S026 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 55,
      "type": "mcq",
      "q_en": "Number of states required to accept string ending with 10:",
      "q_ar": "السؤال 55: Number of states required to accept string ending with 10:",
      "opts": [
        {
          "ar": "3",
          "en": "3",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "2",
          "en": "2",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "1",
          "en": "1",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "can’t be represented",
          "en": "can’t be represented",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L3-S030",
      "tip": "الإجابة المعتمدة: (A) 3 — راجع الشريحة L3-S030 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 56,
      "type": "mcq",
      "q_en": "Which of the following RE for strings with at most one pair of consecutive 1's over Σ = {0,1} is correct?",
      "q_ar": "السؤال 56: Which of the following RE for strings with at most one pair of consecutive 1's over Σ = {0,1} is correct?",
      "opts": [
        {
          "ar": "(0+10)*(1+ε)",
          "en": "(0+10)*(1+ε)",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "(0+10)*(1+ε)*",
          "en": "(0+10)*(1+ε)*",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "(0+101)*(0+ε)",
          "en": "(0+101)*(0+ε)",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "(1+010)*(1+ε)",
          "en": "(1+010)*(1+ε)",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L3-S034",
      "tip": "الإجابة المعتمدة: (A) (0+10)*(1+ε) — راجع الشريحة L3-S034 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 57,
      "type": "mcq",
      "q_en": "L1 = {w | w does not contain the string tr}, L2 = {w | w does contain the string tr}. Given Σ = {t, r}, the difference of the minimum number of states required to form L1 and L2?",
      "q_ar": "السؤال 57: L1 = {w | w does not contain the string tr}, L2 = {w | w does contain the string tr}. Given Σ = {t, r}, the difference of the minimum number of states required to form L1 and L2?",
      "opts": [
        {
          "ar": "0",
          "en": "0",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "1",
          "en": "1",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "2",
          "en": "2",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Cannot be said",
          "en": "Cannot be said",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L3-S038",
      "tip": "الإجابة المعتمدة: (A) 0 — راجع الشريحة L3-S038 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 58,
      "type": "mcq",
      "q_en": "Predict the number of transitions required to automate the following language using only 3 states: L = {w | w ends with 00}",
      "q_ar": "السؤال 58: Predict the number of transitions required to automate the following language using only 3 states: L = {w | w ends with 00}",
      "opts": [
        {
          "ar": "3",
          "en": "3",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "2",
          "en": "2",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "4",
          "en": "4",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "Cannot be said",
          "en": "Cannot be said",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L3-S042",
      "tip": "الإجابة المعتمدة: (A) 3 — راجع الشريحة L3-S042 لمزيد من التفاصيل والشرح النظري."
    },
    {
      "n": 59,
      "type": "mcq",
      "q_en": "The total number of states to build the given language using DFA: L = {w | w has exactly 2 a’s and at least 2 b’s}",
      "q_ar": "السؤال 59: The total number of states to build the given language using DFA: L = {w | w has exactly 2 a’s and at least 2 b’s}",
      "opts": [
        {
          "ar": "10",
          "en": "10",
          "ok": true,
          "why": "صحيح! هذا هو الخيار المعتمد والمطابق للتعريف الرياضي."
        },
        {
          "ar": "11",
          "en": "11",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "12",
          "en": "12",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        },
        {
          "ar": "13",
          "en": "13",
          "ok": false,
          "why": "خيار غير صحيح وفق قواعد ونظريات المادة."
        }
      ],
      "ref": "L3-S042",
      "tip": "الإجابة المعتمدة: (A) 10 — راجع الشريحة L3-S042 لمزيد من التفاصيل والشرح النظري."
    }
  ]
});
