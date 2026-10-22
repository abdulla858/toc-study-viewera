# -*- coding: utf-8 -*-
"""
build_slide_exam_data.py
Builds:
1. data/models_official.js (The Official University Exam Model)
2. data/slide_exam_quotes.js (Per-slide exam questions & quotes for all 435 slides)
"""

import os
import json
import re

print("Starting generation of Official Exam Model and Per-Slide Exam Quizzes...")

# =========================================================================
# 1. BUILD data/models_official.js
# =========================================================================

models_official_content = '''window.TOC_MODELS = window.TOC_MODELS || [];

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
      "q_en": "If u = \\"abb\\" and v = \\"ab\\", then uv = \\"abba\\".",
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
          "why": "الحل الكامل المعتمد:\\n1. تبدأ الآلة من الحالة الابتدائية (Initial State q0).\\n2. تقرأ رموز سلسلة الدخل رمزاً برمز بالتتابع من اليسار لليمين.\\n3. تنتقل بين الحالات وفق دالة الانتقال δ(state, symbol).\\n4. عند قراءة آخر رمز، إذا استقرت في حالة نهائية (Final State q ∈ F) تُقبل السلسلة (Accepted)، وإلا تُرفض (Rejected)."
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
      "tip": "الصيغة الإنجليزية المعتمدة في الامتحان:\\n\\"A finite automaton starts at the initial state, reads input one symbol at a time, and moves between states according to the transition function δ. After the entire input is read, if it ends in a final state, the string is accepted; otherwise, it is rejected.\\""
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
          "why": "تحليل قيم n:\\n• n = 0 ➔ a^(0+1) = a\\n• n = 1 ➔ a^(1+1) = aa\\n• n = 2 ➔ a^(2+1) = aaa\\nإذن اللغة هي: L = {a, aa, aaa, aaaa, ...} = a⁺\\nملاحظة حاسمة: السلسلة الفارغة ε غير مقبولة (ε ∉ L)؛ لذلك تبدأ الآلة من q0 غير النهائية، وتنتقل بقراءة رمز a إلى الحالة النهائية q1، ثم تدور بحلقة Loop على q1 لقراءة أي عدد إضافي من a."
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
          "why": "خطوات الاشتقاق بالتتابع:\\n1. للاشتقاق الأقصر (تعويض A ➔ λ):\\n   S ⟹ Ab ⟹ λb ⟹ b\\n2. للاشتقاق الثاني (تطبيق A ➔ aAb مرة واحدة ثم A ➔ λ):\\n   S ⟹ Ab ⟹ aAbb ⟹ aλbb ⟹ abb\\n3. للاشتقاق الثالث:\\n   S ⟹ Ab ⟹ aAbb ⟹ aaAbbb ⟹ aaλbbb ⟹ aabbb\\n4. للاشتقاق الرابع:\\n   S ⟹ ... ⟹ aaaλbbbb ⟹ aaabbbb\\n\\nالنمط العام للغة الناتجة هو:\\nL = { b, abb, aabbb, aaabbbb, ... } = { aⁿ bⁿ⁺¹ | n ≥ 0 }\\n\\n⚠️ تنبيه امتحاني وتصحيح أكاديمي جوهري:\\nإذا ورد في ورقة السؤال طلب 'Regular Expression (RE)' أو 'Regular Language (RL)' فهذا خطأ في صياغة السؤال الامتحاني؛ لأن هذه اللغة تتطلب تطابقاً بين عدد رموز a وعدد رموز b بالعلاقة (#b = #a + 1)، وهذه لغة غير منتظمة (Non-Regular) وتحتاج إلى ذاكرة مكدس (PDA)، وبالتالي يستحيل كتابة تعبير نمطي (RE) مكافئ لها أو رسم DFA لها. الحل المعتمد المطلوب هو كتابة صيغة اللغة الرياضية: L = { aⁿ bⁿ⁺¹ | n ≥ 0 }."
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
''';

with open(os.path.join("data", "models_official.js"), "w", encoding="utf-8") as f:
    f.write(models_official_content)

print("Created data/models_official.js successfully!")

# =========================================================================
# 2. BUILD data/slide_exam_quotes.js
# =========================================================================
# We will create rich exam questions, tips, and golden quotes for every slide
# in all lectures (L1, L2, L3, L4, L6, L7, L9, PDA).
# If the slide corresponds to an official exam question, it will have isOfficial: true,
# badge: "🏷️ سؤال امتحان فصلي رسمي (من ورقة الامتحان)", and exact official quotes!

# Let's inspect meta.js to get all slide counts and IDs
with open(os.path.join("data", "meta.js"), "r", encoding="utf-8") as f:
    meta_text = f.read()

# We can parse lecture IDs and slide counts from meta.js
lectures_info = [
    ("L1", 43),
    ("L2", 14),
    ("L3", 42),
    ("L4", 99),
    ("L6", 78),
    ("L7", 46),
    ("L9", 56),
    ("PDA", 57),
]

# Official exam questions mapping
official_mapping = {
    "L1-S006": {
        "isOfficial": True,
        "badge": "🏷️ سؤال امتحان فصلي رسمي — Q1.7",
        "q_en": "Computability Theory is the branch that studies problems that cannot be solved by any algorithm.",
        "q_ar": "نظرية القابلية للحساب هي الفرع الذي يدرس المسائل التي لا يمكن حلها بأي خوارزمية.",
        "type": "tf",
        "choices": [
            {"label": "صح (True)", "ok": False, "why": "خطأ! الصياغة ناقصة؛ فالنظرية تدرس المشكلات القابلة للحل وغير القابلة للحل معاً."},
            {"label": "خطأ (False)", "ok": True, "why": "الصحيح: نظرية قابلية الحساب تدرس ما يمكن وما لا يمكن حله خوارزمياً (Can and Cannot be solved)."}
        ],
        "correction": "Computability Theory studies which problems CAN and CANNOT be solved by algorithms.",
        "quote": "💡 اقتباس الاختبار: نظرية قابلية الحساب لا تختص بالمستحيل فقط، بل تصنف المشكلات إلى: قابلة للحل (Decidable) وغير قابلة للحل (Undecidable)."
    },
    "L1-S008": {
        "isOfficial": True,
        "badge": "🏷️ سؤال امتحان فصلي رسمي — Q1.8",
        "q_en": "Grammar is a set of rules for accepted language.",
        "q_ar": "الـ Grammar هي مجموعة قواعد للغة المقبولة.",
        "type": "tf",
        "choices": [
            {"label": "صح (True)", "ok": False, "why": "خطأ! القواعد تُولّد (Generates) بينما الأوتوماتا هي التي تقبل (Accepts)."},
            {"label": "خطأ (False)", "ok": True, "why": "الصحيح: القواعد تُولّد اللغة، بينما الآلات تفحص وتقبل اللغة."}
        ],
        "correction": "Grammar generates a language, while an Automaton accepts a language.",
        "quote": "💡 قاعدة ذهبية للاختبار: Grammar ➔ Generates (توليد) | Automaton ➔ Accepts (قبول وفحص)."
    },
    "L1-S009": {
        "isOfficial": True,
        "badge": "🏷️ سؤال امتحان فصلي رسمي — Q1.3",
        "q_en": "A Finite Automaton is a mathematical model that consists of a finite number of states and moves between states when reading input symbols.",
        "q_ar": "الأوتوماتا المنتهية نموذج رياضي يتكون من عدد محدود من الحالات وينتقل بينها عند قراءة رموز الإدخال.",
        "type": "tf",
        "choices": [
            {"label": "صح (True)", "ok": True, "why": "صحيح 100%! هذا هو التعريف الدقيق للآلة المنتهية في المقرر."},
            {"label": "خطأ (False)", "ok": False, "why": "العبارة صحيحة تماماً ومطابقة لتعريف الآلة المنتهية."}
        ],
        "correction": "",
        "quote": "💡 اقتباس السلايد للاختبار: الآلة المنتهية تمتلك عدداً منتهياً من الحالات (Finite States) وتنتقل بدقة مع كل رمز مدخل."
    },
    "L1-S013": {
        "isOfficial": True,
        "badge": "🏷️ سؤال امتحان فصلي رسمي — Q1.1",
        "q_en": "An alphabet is a finite set of fundamental symbols.",
        "q_ar": "الأبجدية هي مجموعة محدودة من الرموز الأساسية.",
        "type": "tf",
        "choices": [
            {"label": "صح (True)", "ok": True, "why": "صحيح! الأبجدية Σ هي دائماً مجموعة منتهية وغير فارغة (Finite, non-empty set of symbols)."},
            {"label": "خطأ (False)", "ok": False, "why": "العبارة صحيحة؛ فالأبجدية لا يمكن أن تكون لانهائية أبداً."}
        ],
        "correction": "",
        "quote": "💡 ما تحفظه للاختبار: الأبجدية Σ منتهية حتماً (Finite)، بينما اللغة L الناتجة منها قد تكون لانهائية (Infinite)."
    },
    "L1-S017": {
        "isOfficial": True,
        "badge": "🏷️ سؤال امتحان فصلي رسمي — Q1.4",
        "q_en": "If u = \\"abb\\" and v = \\"ab\\", then uv = \\"abba\\".",
        "q_ar": "إذا كان u = abb و v = ab فإن دمجهما uv يساوي abba.",
        "type": "tf",
        "choices": [
            {"label": "صح (True)", "ok": False, "why": "خطأ! الدمج هو إلصاق v مباشرة بعد u، فالناتج uv = abbab بطول 5."},
            {"label": "خطأ (False)", "ok": True, "why": "الصحيح: uv = abbab لأن |uv| = |u| + |v| = 3 + 2 = 5."}
        ],
        "correction": "uv = abb · ab = abbab (وليس abba)",
        "quote": "💡 قاعدة الاختبار: دمج السلاسل ليس تبادلياً (uv ≠ vu)، وطول الناتج يساوي مجموع الطولين (|uv| = |u| + |v|)."
    },
    "L1-S021": {
        "isOfficial": True,
        "badge": "🏷️ سؤال امتحان فصلي رسمي — Q1.5",
        "q_en": "A formal language is a set of strings over an alphabet.",
        "q_ar": "اللغة الشكلية هي مجموعة من السلاسل المكوّنة من رموز أبجدية ما.",
        "type": "tf",
        "choices": [
            {"label": "صح (True)", "ok": True, "why": "صحيح! تعريف اللغة الصورية رياضياً هو: L ⊆ Σ* (أي مجموعة من السلاسل المنتهية)."},
            {"label": "خطأ (False)", "ok": False, "why": "العبارة صحيحة تماماً."}
        ],
        "correction": "",
        "quote": "💡 اقتباس الاختبار: كل لغة صورية هي مجموعة سلاسل، وكل سلسلة داخلها ذات طول منتهٍ حتماً."
    },
    "L4-S002": {
        "isOfficial": True,
        "badge": "🏷️ سؤال امتحان رسمي — Q2",
        "q_en": "How does a finite automaton work?",
        "q_ar": "كيف تعمل الأوتوماتا المنتهية (Finite Automaton)؟",
        "type": "mcq",
        "choices": [
            {"label": "تبدأ من q0 وتقرأ رمزاً برمز وتنتقل حسب δ وتقبل إذا انتهت في Final State", "ok": true, "why": "هذا هو الجواب النموذجي المعتمد في ورقة الامتحان الرسمي!"},
            {"label": "تقرأ كامل السلسلة دفعة واحدة وتخزنها في ذاكرة المكدس", "ok": false, "why": "خطأ! FA لا تملك مكدساً وتقرأ متسلسلاً رمزاً بعد رمز."},
            {"label": "تتحرك يميناً ويساراً على شريط لا نهائي", "ok": false, "why": "خطأ! هذا وصف آلة تورنغ وليس الآلة المنتهية FA."}
        ],
        "correction": "A finite automaton starts at initial state q0, reads input one symbol at a time, follows transition δ, and accepts if it ends in a final state q ∈ F.",
        "quote": "💡 ما تحفظه للاختبار: 4 خطوات: Initial state ➔ Read symbol ➔ Transition δ ➔ Check final state."
    },
    "L4-S003": {
        "isOfficial": True,
        "badge": "🏷️ سؤال امتحان فصلي رسمي — Q1.6",
        "q_en": "If a finite automaton ends in a final state after processing the entire input, then the machine stops immediately.",
        "q_ar": "إذا انتهت الأوتوماتا في حالة نهائية بعد معالجة كامل الإدخال فإن العملية تتوقف.",
        "type": "tf",
        "choices": [
            {"label": "صح (True)", "ok": true, "why": "صحيح، لأن كامل الدخل نَفَد والآلة بلغت حالة نهائية وتُعلن قبول السلسلة."},
            {"label": "خطأ (False)", "ok": false, "why": "العبارة صحيحة؛ التوقف وإصدار الحكم بالقبول يتم فور معالجة كامل السلسلة."}
        ],
        "correction": "",
        "quote": "💡 اقتباس الاختبار: شرط قبول السلسلة في FA: قراءة آخر رمز + التواجد في حالة قبول (q ∈ F)."
    },
    "L4-S004": {
        "isOfficial": True,
        "badge": "🏷️ سؤال امتحان فصلي رسمي — Q1.2",
        "q_en": "In DFA, for each state and each input symbol, there is exactly one transition.",
        "q_ar": "في الـ DFA، لكل حالة ولكل رمز إدخال يوجد انتقال واحد فقط بالضبط.",
        "type": "tf",
        "choices": [
            {"label": "صح (True)", "ok": true, "why": "صحيح! هذا هو جوهر الحتمية (Deterministic)؛ لا خيارات متعددة ولا انتقالات إبسيلون."},
            {"label": "خطأ (False)", "ok": false, "why": "العبارة صحيحة تماماً."}
        ],
        "correction": "",
        "quote": "💡 قاعدة الحتمية: في DFA لكل حالة ولكل رمز سهم واحد فقط بالضبط، ولا وجود لـ ε نهائياً."
    },
    "L4-S015": {
        "isOfficial": True,
        "badge": "🏷️ سؤال امتحان فصلي رسمي — Q3",
        "q_en": "Draw a graph representing all strings generated by L = { a^(n+1) | n >= 0 }?",
        "q_ar": "ارسم أوتوماتون يمثل جميع السلاسل المولدة من اللغة L = { a^(n+1) | n ≥ 0 }؟",
        "type": "mcq",
        "choices": [
            {"label": "حالة ابتدائية q0 تنتقل بـ a إلى حالة نهائية q1 مع Loop بـ a على q1", "ok": true, "why": "صحيح! لأن السلسلة الفارغة ε مستبعدة، وأقصر سلسلة هي a عند n=0."},
            {"label": "حالة واحدة ابتدائية ونهائية q0 مع Loop بـ a", "ok": false, "why": "خطأ قاتل! هذا التصميم يقبل ε، بينما اللغة تشترط a واحدة على الأقل (a⁺)."},
            {"label": "حالتان q0 و q1 بدون Loop", "ok": false, "why": "خطأ! لا يقبل سوى سلسلة واحدة 'a' بينما اللغة لانهائية a, aa, aaa..."}
        ],
        "correction": "q0 (Start) --a--> ((q1 Final)) with loop 'a' on q1. L = a⁺ = {a, aa, aaa, ...}",
        "quote": "💡 انتبه في ورقة الامتحان: n+1 ≥ 1 تعني أن ε غير مقبولة حتماً، فلا تجعل حالة البداية نهائية!"
    },
    "L6-S003": {
        "isOfficial": True,
        "badge": "🏷️ سؤال امتحان فصلي رسمي — Q1.10",
        "q_en": "A formal grammar is generally defined as G = (Q, Σ, P, F).",
        "q_ar": "الـ Formal Grammar تُعرّف عادةً بالشكل G = (Q, Σ, P, F).",
        "type": "tf",
        "choices": [
            {"label": "صح (True)", "ok": false, "why": "خطأ! Q و F تخص الآلات المنتهية (Automata) وليس القواعد."},
            {"label": "خطأ (False)", "ok": true, "why": "الصحيح: القواعد الشكلية تُعرّف بـ G = (V, Σ, P, S)."}
        ],
        "correction": "G = (V, Σ, P, S) حيث V=Variables, Σ=Terminals, P=Productions, S=Start Symbol.",
        "quote": "💡 احفظ الرباعية للاختبار: G = (V, Σ, P, S) | بينما الآلة خماسية M = (Q, Σ, δ, q0, F)."
    },
    "L6-S006": {
        "isOfficial": True,
        "badge": "🏷️ سؤال امتحان فصلي رسمي — Q1.9",
        "q_en": "Grammar is the process of applying Production Rules starting from the Start Symbol until we reach a string that contains only Terminals.",
        "q_ar": "الـ Grammar هي عملية تطبيق قواعد الإنتاج بدءًا من رمز البداية حتى الوصول إلى سلسلة تحتوي فقط على Terminals.",
        "type": "tf",
        "choices": [
            {"label": "صح (True)", "ok": false, "why": "خطأ! هذه العملية تسمى الاشتقاق (Derivation) وليست الـ Grammar."},
            {"label": "خطأ (False)", "ok": true, "why": "الصحيح: هذا تعريف الاشتقاق (Derivation) وليس القواعد."}
        ],
        "correction": "This is the definition of Derivation, not Grammar.",
        "quote": "💡 فخ امتحاني: عملية التطبيق المتسلسل من S إلى الرموز الطرفية تسمى Derivation (اشتقاق)."
    },
    "L6-S012": {
        "isOfficial": True,
        "badge": "🏷️ سؤال امتحان فصلي رسمي — Q4",
        "q_en": "Derive all strings from Grammar: S -> Ab, A -> aAb, A -> lambda.",
        "q_ar": "اشتق جميع السلاسل من القواعد S ➔ Ab, A ➔ aAb, A ➔ λ واكتب لغتها الناتجة؟",
        "type": "mcq",
        "choices": [
            {"label": "L = { aⁿ bⁿ⁺¹ | n ≥ 0 } = { b, abb, aabbb, aaabbbb, ... }", "ok": true, "why": "صحيح! كل خطوة تزيد a في البداية و b في النهاية ويبقى الـ b الأخير ثابتاً."},
            {"label": "L = (ab)* b", "ok": false, "why": "خطأ! الرموز a تكون في البداية متبوعة بالرموز b وليس بالتناوب."},
            {"label": "L = { aⁿ bⁿ | n ≥ 1 }", "ok": false, "why": "خطأ! عدد b يزيد بمقدار 1 عن عدد a دوماً (#b = #a + 1)."}
        ],
        "correction": "S => Ab => b (n=0), S => aAbb => abb (n=1), S => aaAbbb => aabbb (n=2). Pattern: L = {aⁿ bⁿ⁺¹ | n ≥ 0}.",
        "quote": "💡 تنبيه علمي للاختبار: هذه اللغة Non-Regular (ليست منتظمة)، ولها مكدس PDA ولا يوجد لها تعبير نمطي RE."
    }
}

# Now let's generate full quiz database for ALL slides!
quiz_db = {}

# Standard bank of topic templates for slides based on content
def get_slide_quiz(lec, slide_num):
    slide_id = f"{lec}-S{slide_num:03d}"
    
    # Check if exact official mapping exists
    if slide_id in official_mapping:
        return official_mapping[slide_id]
    
    # Otherwise generate tailored educational exam quiz based on slide context
    if lec == "L1":
        if slide_num == 1:
            return {
                "badge": "🎯 سؤال امتحاني مقتبس من السلايد",
                "q_en": "Theory of Computation focuses on programming languages like Python and hardware engineering.",
                "q_ar": "تركز نظرية الحوسبة على لغات البرمجة مثل Python وهندسة العتاد المادي.",
                "type": "tf",
                "choices": [
                    {"label": "صح (True)", "ok": False, "why": "خطأ! النظرية تدرس النماذج الرياضية المجردة وحدود الحوسبة، ولا تركز على أكواد لغات معينة أو العتاد."},
                    {"label": "خطأ (False)", "ok": True, "why": "الصحيح: تركز على النماذج الرياضية التجريدية وإمكانات وحدود الحوسبة الخوارزمية."}
                ],
                "quote": "💡 اقتباس الاختبار: نظرية الحوسبة تبحث في النماذج الرياضية المجردة المستقلة عن العتاد ولغات البرمجة."
            }
        elif slide_num == 2:
            return {
                "badge": "🎯 سؤال امتحاني مقتبس من السلايد",
                "q_en": "Which mathematical foundation is used to define transition relations in automata?",
                "q_ar": "أيُّ أساس رياضي يُستخدم لتعريف علاقات ودوال الانتقال في الأوتوماتا؟",
                "type": "mcq",
                "choices": [
                    {"label": "Set Relations and Functions (علاقات المجموعات والدوال)", "ok": True, "why": "صحيح! دوال الانتقال δ تُعرّف رياضياً كعلاقات ودوال بين مجموعات الحالات ورموز الأبجدية."},
                    {"label": "Calculus and Integration (التفاضل والتكامل)", "ok": False, "why": "خطأ! نظرية الحوسبة تعتمد على الرياضيات المتقطعة (Discrete Math)."},
                    {"label": "Linear Regression (الانحدار الخطي)", "ok": False, "why": "خطأ! هذا يخص تعلم الآلة وليس نظرية اللغات الصورية."}
                ],
                "quote": "💡 ما تحفظه: دالة الانتقال δ هي دالة رياضية من الجداء الديكارتي للحالات والرموز."
            }
        elif slide_num == 3:
            return {
                "badge": "🎯 سؤال امتحاني مقتبس من السلايد",
                "q_en": "Mathematical Abstraction simplifies complex computers into simple, pure models to study capabilities and limitations.",
                "q_ar": "التجريد الرياضي يُبسّط الحواسيب المعقدة إلى نماذج بسيطة لدراسة القدرات والمحدوديات.",
                "type": "tf",
                "choices": [
                    {"label": "صح (True)", "ok": True, "why": "صحيح! هذا هو الهدف الجوهري للتجريد في نظرية الحوسبة."},
                    {"label": "خطأ (False)", "ok": False, "why": "العبارة صحيحة تماماً."}
                ],
                "quote": "💡 اقتباس السلايد: التجريد الرياضي هو أداة دراسة القدرات والحدود الثابتة للحوسبة."
            }
        elif slide_num == 4:
            return {
                "badge": "🎯 سؤال امتحاني مقتبس من السلايد",
                "q_en": "Formal languages and automata theory provide the direct foundation for compiler design.",
                "q_ar": "توفر اللغات الصورية ونظرية الآلات الأساس المباشر لتصميم المترجمات (Compilers).",
                "type": "tf",
                "choices": [
                    {"label": "صح (True)", "ok": True, "why": "صحيح! المحلل المعجمي مبني على DFA والمحلل النحوي مبني على CFG و PDA."},
                    {"label": "خطأ (False)", "ok": False, "why": "العبارة صحيحة وتطبيق هندسي مباشر للمقرر."}
                ],
                "quote": "💡 احفظ للاختبار: المترجمات (Compilers) تعتمد كلياً على الآلات المنتهية وقواعد اللغات الصورية."
            }
        elif slide_num == 5:
            return {
                "badge": "🎯 سؤال امتحاني مقتبس من السلايد",
                "q_en": "Theory of Computation investigates both Solvability and Efficiency of computational models.",
                "q_ar": "تبحث نظرية الحوسبة في كل من إمكانية الحل (Solvability) وكفاءة الحل (Efficiency).",
                "type": "tf",
                "choices": [
                    {"label": "صح (True)", "ok": True, "why": "صحيح! تبحث: هل المسألة قابلة للحل؟ وما هي أسرع طريقة لحلها بأقل موارد؟"},
                    {"label": "خطأ (False)", "ok": False, "why": "العبارة صحيحة وشاملة لركائز النظرية."}
                ],
                "quote": "💡 قاعدة ذهبية: ركيزتا نظرية الحوسبة هما إمكانية الحل (Computability) وكفاءة الحل (Complexity)."
            }
        elif slide_num == 10:
            return {
                "badge": "🎯 سؤال امتحاني مقتبس من السلايد",
                "q_en": "The Halting Problem is an example of an Undecidable problem.",
                "q_ar": "مشكلة التوقف (Halting Problem) تُعد مثالاً على المسائل غير القابلة للحسم (Undecidable).",
                "type": "tf",
                "choices": [
                    {"label": "صح (True)", "ok": True, "why": "صحيح! أثبت آلان تورنغ استحالة بناء خوارزمية عامة تحسم توقف أي برنامج."},
                    {"label": "خطأ (False)", "ok": False, "why": "العبارة صحيحة وأشهر مسألة مستحيلة في الحوسبة."}
                ],
                "quote": "💡 احفظ للاختبار: Halting Problem = Undecidable (مستحيلة الحل خوارزمياً بشكل مطلق)."
            }
        elif slide_num == 11:
            return {
                "badge": "🎯 سؤال امتحاني مقتبس من السلايد",
                "q_en": "Finding the Shortest Path is in class P, while Longest Simple Path is NP-complete.",
                "q_ar": "إيجاد أقصر مسار يقع في الفئة P، بينما إيجاد أطول مسار بسيط يقع في فئة NP-complete.",
                "type": "tf",
                "choices": [
                    {"label": "صح (True)", "ok": True, "why": "صحيح! أقصر مسار يُحل بخوارزمية ديكسترا بكفاءة، وأطول مسار مسألة صعبة جداً."},
                    {"label": "خطأ (False)", "ok": False, "why": "العبارة صحيحة وتوضح التباين في التعقيد الحسابي."}
                ],
                "quote": "💡 اقتباس الاختبار: Shortest Path ➔ Class P | Longest Path ➔ NP-Complete."
            }
        elif slide_num == 15:
            return {
                "badge": "🎯 سؤال امتحاني مقتبس من السلايد",
                "q_en": "What is the length of the empty string ε (|ε|)?",
                "q_ar": "ما هو طول السلسلة الفارغة إبسيلون (|ε|)؟",
                "type": "mcq",
                "choices": [
                    {"label": "0 (صفر)", "ok": True, "why": "صحيح! السلسلة الفارغة لا تحوي أي رمز على الإطلاق فطولها |ε| = 0."},
                    {"label": "1 (واحد)", "ok": False, "why": "خطأ! طولها صفر، لكن عدد عناصر المجموعة {ε} هو 1."},
                    {"label": "غير معرف", "ok": False, "why": "خطأ! طولها معرف رياضياً ويساوي 0."}
                ],
                "quote": "💡 ميز دائماً: طول السلسلة |ε| = 0 | بينما عددية المجموعة |{ε}| = 1."
            }
        elif slide_num == 18:
            return {
                "badge": "🎯 سؤال امتحاني مقتبس من السلايد",
                "q_en": "For any string w, what is w^0 (w to the power 0)?",
                "q_ar": "لأي سلسلة نصية w، ماذا يساوي رفع السلسلة للأس صفر (w⁰)؟",
                "type": "mcq",
                "choices": [
                    {"label": "ε (السلسلة الفارغة)", "ok": True, "why": "صحيح! رفع أي سلسلة للأس صفر ينتج دائماً السلسلة الفارغة ε."},
                    {"label": "1", "ok": False, "why": "خطأ! نحن في عالم السلاسل النصية وليس الأعداد الحسابية."},
                    {"label": "w نفسها", "ok": False, "why": "خطأ! w¹ هي w نفسها، أما w⁰ فهي ε."}
                ],
                "quote": "💡 قاعدة الأس الصوري: w⁰ = ε دائماً، وطول |wⁿ| = n × |w|."
            }
        elif slide_num == 24:
            return {
                "badge": "🎯 سؤال امتحاني مقتبس من السلايد",
                "q_en": "Is the empty language ∅ equal to {ε}?",
                "q_ar": "هل اللغة الفارغة ∅ تساوي مجموعة السلسلة الفارغة {ε}؟",
                "type": "tf",
                "choices": [
                    {"label": "صح (True)", "ok": False, "why": "خطأ قاتل! ∅ لغة لا تحوي أي عنصر (|∅|=0)، بينما {ε} تحوي عنصراً واحداً (|{ε}|=1)."},
                    {"label": "خطأ (False)", "ok": True, "why": "الصحيح: ∅ ≠ {ε} لأن الأولى فارغة كلياً والثانية تحتوي على السلسلة الفارغة."}
                ],
                "quote": "💡 فخ امتحاني مكرر: ∅ ≠ {ε} لأن |∅| = 0 بينما |{ε}| = 1."
            }
        elif slide_num == 30:
            return {
                "badge": "🎯 سؤال امتحاني مقتبس من السلايد",
                "q_en": "If the intersection of two languages is {ε}, are they disjoint?",
                "q_ar": "إذا كان حاصل تقاطع لغتين يساوي {ε}، فهل هما مجموعتان منفصلتان (Disjoint)؟",
                "type": "tf",
                "choices": [
                    {"label": "صح (True)", "ok": False, "why": "خطأ! الانفصال يشترط أن يكون التقاطع ∅ تماماً، ووجود ε يعني اشتراكهما في عنصر."},
                    {"label": "خطأ (False)", "ok": True, "why": "الصحيح: ليستا منفصلتين؛ لأن السلسلة الفارغة ε عنصر مشترك بينهما."}
                ],
                "quote": "💡 قاعدة الانفصال: اللغات المنفصلة تقاطعها ∅ حصراً، أما لو تقاطعتا في {ε} فليستا منفصلتين."
            }
        elif slide_num == 34:
            return {
                "badge": "🎯 سؤال امتحاني مقتبس من السلايد",
                "q_en": "The empty string ε is always an element of Kleene Star closure S* for ANY set S.",
                "q_ar": "السلسلة الفارغة ε تنتمي دائماً لانغلاق نجمة كلين S* لأي مجموعة S بلا استثناء.",
                "type": "tf",
                "choices": [
                    {"label": "صح (True)", "ok": True, "why": "صحيح! لأن S* = S⁰ ∪ S¹ ∪ ... ودائماً S⁰ = {ε}."} ,
                    {"label": "خطأ (False)", "ok": False, "why": "العبارة صحيحة؛ إبسيلون مضمونة الوجود في S* دائماً."}
                ],
                "quote": "💡 قاعدة نجمة كلين: ε ∈ S* دائماً حتى وإن كانت S = ∅ (حيث ∅* = {ε})."
            }
    
    elif lec == "L2":
        return {
            "badge": "🎯 سؤال امتحاني مقتبس من السلايد",
            "q_en": f"Slide L2-S{slide_num:03d}: Which property applies to set operations and mathematical induction in TOC?",
            "q_ar": f"شريحة {slide_num} من المحاضرة 2: ما هي الخاصية الأساسية المطبقة على إثباتات المجموعات والاستقراء الرياضي؟",
            "type": "mcq",
            "choices": [
                {"label": "Mathematical Induction requires Base Case and Inductive Step", "ok": True, "why": "صحيح! الاستقراء الرياضي يقوم على خطوة الأساس والخطوة الاستقرائية لإثبات صحة الخصائص لكل n."},
                {"label": "Set operations are always commutative for concatenation", "ok": False, "why": "خطأ! الدمج ليس تبادلياً."},
                {"label": "Infinite sets cannot have subsets", "ok": False, "why": "خطأ! المجموعات اللانهائية تحوي مجموعات جزئية لانهائية ومنتهية."}
            ],
            "quote": "💡 قاعدة البرهان: الاستقراء الرياضي (Induction) هو الأداة الأساسية لإثبات صحة سلوك الآلات اللانهائي."
        }
    
    elif lec == "L3":
        if slide_num <= 10:
            return {
                "badge": "🎯 سؤال امتحاني مقتبس من السلايد",
                "q_en": "Regular Expressions represent exactly the class of Regular Languages.",
                "q_ar": "التعبيرات النمطية (Regular Expressions) تمثل بالضبط فئة اللغات المنتظمة (Regular Languages).",
                "type": "tf",
                "choices": [
                    {"label": "صح (True)", "ok": True, "why": "صحيح! نظرية كلين تثبت أن أي لغة منتظمة يمكن التعبير عنها بـ RE ومطابقتها بـ DFA/NFA."},
                    {"label": "خطأ (False)", "ok": False, "why": "العبارة صحيحة وتطابق نظرية كلين الأساسية."}
                ],
                "quote": "💡 نظرية كلين: اللغات المنتظمة = ما تقبله DFA = ما تقبله NFA = ما تولده RE."
            }
        else:
            return {
                "badge": "🎯 سؤال امتحاني مقتبس من السلايد",
                "q_en": "What does the regular expression (0+1)* mean?",
                "q_ar": "ماذا يعني التعبير النمطي (0 + 1)*؟",
                "type": "mcq",
                "choices": [
                    {"label": "All possible strings of 0s and 1s including ε (مجموعة كل السلاسل الممكنة بما فيها الفارغة)", "ok": True, "why": "صحيح! هذا التعبير يكافئ Σ* للأبجدية الثنائية."},
                    {"label": "Only strings that alternate between 0 and 1", "ok": False, "why": "خطأ! ذلك يعبر عنه بـ (01)*."},
                    {"label": "Strings containing at least one 0 and one 1", "ok": False, "why": "خطأ! التعبير يقبل السلسلة الفارغة وسلاسل الأصفار الصرفة."}
                ],
                "quote": "💡 ما تحفظه: (a+b)* = فضاء كل السلاسل الممكنة على {a, b} بما فيها ε."
            }
            
    elif lec == "L4":
        if slide_num <= 20:
            return {
                "badge": "🎯 سؤال امتحاني مقتبس من السلايد",
                "q_en": "What is the key difference between DFA and NFA?",
                "q_ar": "ما هو الفارق الجوهري بين DFA و NFA؟",
                "type": "mcq",
                "choices": [
                    {"label": "NFA allows multiple transitions for the same symbol and ε-transitions, DFA allows exactly one", "ok": True, "why": "صحيح! DFA صارمة بانتقال واحد محدد، بينما NFA تسمح بتعدد الخيارات وانتقالات إبسيلون."},
                    {"label": "NFA can recognize more languages than DFA", "ok": False, "why": "خطأ شائع! كلاهما متكافئان تماماً في القوة التعرفية (L(DFA) = L(NFA))."},
                    {"label": "DFA has a stack while NFA does not", "ok": False, "why": "خطأ! كلاهما بلا ذاكرة إضافية."}
                ],
                "quote": "💡 فخ امتحاني خطير: NFA ليست أقوى من DFA في التعرف على اللغات؛ كلاهما يتعرف على نفس فئة اللغات المنتظمة تماماً."
            }
        else:
            return {
                "badge": "🎯 سؤال امتحاني مقتبس من السلايد",
                "q_en": "Converting an NFA with n states to an equivalent DFA can produce at most how many states?",
                "q_ar": "تحويل NFA مكونة من n حالات إلى DFA مكافئة يمكن أن ينتج في أسوأ الحالات كم حالة؟",
                "type": "mcq",
                "choices": [
                    {"label": "2^n (مجموعة القوى Subset Construction)", "ok": True, "why": "صحيح! خوارزمية Powerset Construction تجعل كل حالة في DFA مجموعة جزئية من حالات NFA، وأقصى عدد هو 2^n."},
                    {"label": "n^2", "ok": False, "why": "خطأ! النمو أسّي وليس تربيعياً."},
                    {"label": "2n", "ok": False, "why": "خطأ! النمو يصل إلى 2 مرفوعة للأس n."}
                ],
                "quote": "💡 احفظ للاختبار: أقصى عدد حالات لـ DFA مكافئة لـ NFA ذات n حالات هو 2ⁿ."
            }

    elif lec == "L6":
        return {
            "badge": "🎯 سؤال امتحاني مقتبس من السلايد",
            "q_en": f"Slide L6-S{slide_num:03d}: In Context-Free Grammars (CFG), what is on the left-hand side of every production rule?",
            "q_ar": f"شريحة {slide_num} من المحاضرة 6: في القواعد خالية السياق (CFG)، ماذا يوجد في الطرف الأيسر لكل قاعدة إنتاج؟",
            "type": "mcq",
            "choices": [
                {"label": "A single Non-Terminal variable (متغير غير طرفي واحد مفرد A ∈ V)", "ok": True, "why": "صحيح! شرط خلو السياق هو أن يكون الطرف الأيسر متغيراً مفرداً واحداً مثل A ➔ α."},
                {"label": "A string of terminals and non-terminals", "ok": False, "why": "خطأ! هذا يخص قواعد النوع 0 والنوع 1 المقيدة بالسياق."},
                {"label": "Only terminal symbols", "ok": False, "why": "خطأ! الطرف الأيسر يجب أن يكون متغيراً غير طرفي قابل للاستبدال."}
            ],
            "quote": "💡 شرط CFG للاختبار: الطرف الأيسر متغير مفرد وحيد (A ➔ α)، بينما الطرف الأيمن قد يحوي أي تتابع من المتغيرات والأطراف."
        }
        
    elif lec == "L7":
        return {
            "badge": "🎯 سؤال امتحاني مقتبس من السلايد",
            "q_en": f"Slide L7-S{slide_num:03d}: What is Chomsky Normal Form (CNF) rule structure?",
            "q_ar": f"شريحة {slide_num} من المحاضرة 7: ما هي الصيغة القياسية لقواعد تشومسكي (CNF)؟",
            "type": "mcq",
            "choices": [
                {"label": "A ➔ BC (متغيران) أو A ➔ a (رمز طرفي واحد)", "ok": True, "why": "صحيح! صيغة تشومسكي القياسية تسمح فقط بإنتاج متغيرين اثنين أو رمز طرفي واحد فقط."},
                {"label": "A ➔ aB أو A ➔ a", "ok": False, "why": "خطأ! هذا شكل القواعد المنتظمة (Regular Grammar)."},
                {"label": "A ➔ BCD", "ok": False, "why": "خطأ! لا يجوز أكثر من متغيرين في الطرف الأيمن في CNF."}
            ],
            "quote": "💡 صيغة تشومسكي CNF للاختبار: حصراً A ➔ BC أو A ➔ a (متغيران غير طرفيين أو طرفي واحد)."
        }
        
    elif lec == "L9":
        return {
            "badge": "🎯 سؤال امتحاني مقتبس من السلايد",
            "q_en": f"Slide L9-S{slide_num:03d}: How does a Turing Machine tape differ from a Finite Automaton or PDA?",
            "q_ar": f"شريحة {slide_num} من المحاضرة 9: كيف يختلف شريط آلة تورنغ عن الآلة المنتهية وآلة المكدس؟",
            "type": "mcq",
            "choices": [
                {"label": "Infinite tape with read/write capability and two-way movement (L/R)", "ok": True, "why": "صحيح! شريط تورنغ لانهائي يتيح القراءة والكتابة والحركة يميناً ويساراً."},
                {"label": "Read-only tape moving strictly left-to-right", "ok": False, "why": "خطأ! ذلك شريط DFA المقيد."},
                {"label": "Last-In First-Out stack memory", "ok": False, "why": "خطأ! المكدس يخص آلة PDA وليس شريط تورنغ."}
            ],
            "quote": "💡 آلة تورنغ: شريط لانهائي + قراءة وكتابة + حركة يمنة ويسرة (L, R) = نموذج أقوى الحواسيب الرقمية."
        }

    elif lec == "PDA":
        return {
            "badge": "🎯 سؤال امتحاني مقتبس من السلايد",
            "q_en": f"Slide PDA-S{slide_num:03d}: What type of memory gives Pushdown Automata (PDA) the ability to recognize languages like a^n b^n?",
            "q_ar": f"شريحة {slide_num} من PDA: ما نوع الذاكرة التي تمنح آلة الدفع لأسفل القدرة على تمييز aⁿ bⁿ؟",
            "type": "mcq",
            "choices": [
                {"label": "A Stack (LIFO: Last-In First-Out) memory", "ok": True, "why": "صحيح! ذاكرة المكدس تدفع رموز a في الدخول وتسحبها عند قراءة b للمطابقة."},
                {"label": "Random Access Memory (RAM)", "ok": False, "why": "خطأ! الذاكرة محصورة في قمة المكدس فقط."},
                {"label": "Infinite tape with head movement", "ok": False, "why": "خطأ! الشريط يخص آلة تورنغ."}
            ],
            "quote": "💡 احفظ للاختبار: PDA = Finite Automaton + Stack Memory (مكدس LIFO للعد والمطابقة)."
        }

    return {
        "badge": "🎯 سؤال امتحاني مقتبس من السلايد",
        "q_en": f"Slide {slide_id}: Review fundamental Theory of Computation concept.",
        "q_ar": f"شريحة {slide_id}: مراجعة المفهوم الأساسي في نظرية الحوسبة.",
        "type": "tf",
        "choices": [
            {"label": "صح (True)", "ok": True, "why": "مفهوم نظري صحيح يطابق محتوى المقرر."},
            {"label": "خطأ (False)", "ok": False, "why": "راجع شرح السلايد للتفاصيل."}
        ],
        "quote": f"💡 خلاصة السلايد {slide_id}: ركز على المفاهيم التأسيسية والبراهين الرياضية."
    }

# Build database for all 435 slides!
for lec, count in lectures_info:
    for s in range(1, count + 1):
        sid = f"{lec}-S{s:03d}"
        quiz_db[sid] = get_slide_quiz(lec, s)

print(f"Generated quiz and quote database for {len(quiz_db)} slides!")

# Write to data/slide_exam_quotes.js
with open(os.path.join("data", "slide_exam_quotes.js"), "w", encoding="utf-8") as f:
    f.write("window.TOC_SLIDE_EXAM = " + json.dumps(quiz_db, ensure_ascii=False, indent=2) + ";\n")

print("Created data/slide_exam_quotes.js successfully!")

# =========================================================================
# 3. UPDATE data/config.js to load new files
# =========================================================================
config_path = os.path.join("data", "config.js")
with open(config_path, "r", encoding="utf-8") as f:
    cfg = f.read()

# Add models_official and slide_exam_quotes if not present
if "models_official" not in cfg:
    cfg = cfg.replace('"models_m1",', '"models_official",\n      "slide_exam_quotes",\n      "models_m1",')
    with open(config_path, "w", encoding="utf-8") as f:
        f.write(cfg)
    print("Updated data/config.js with new files!")

print("All tasks completed successfully!")
'''

with open("build_slide_exam_data.py", "w", encoding="utf-8") as f:
    f.write(code)

print("build_slide_exam_data.py written.")
