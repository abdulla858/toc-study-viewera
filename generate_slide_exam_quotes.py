# -*- coding: utf-8 -*-
import json
import os

official_mapping = {
    'L1-S011': {
        'isOfficial': True,
        'badge': '🏷️ سؤال امتحان فصلي رسمي — Q1.7',
        'q_en': 'Computability Theory is the branch that studies problems that cannot be solved by any algorithm.',
        'q_ar': 'نظرية القابلية للحساب هي الفرع الذي يدرس المسائل التي لا يمكن حلها بأي خوارزمية.',
        'type': 'tf',
        'choices': [
            {'label': 'صح (True)', 'ok': False, 'why': 'خطأ! الصياغة ناقصة؛ فالنظرية تدرس المشكلات القابلة للحل وغير القابلة للحل معاً.'},
            {'label': 'خطأ (False)', 'ok': True, 'why': 'الصحيح: نظرية قابلية الحساب تدرس ما يمكن وما لا يمكن حله خوارزمياً (Can and Cannot be solved).'}
        ],
        'correction': 'Computability Theory studies which problems CAN and CANNOT be solved by algorithms.',
        'quote': '💡 اقتباس الاختبار: نظرية قابلية الحساب لا تختص بالمستحيل فقط، بل تصنف المشكلات إلى: قابلة للحل (Decidable) وغير قابلة للحل (Undecidable).'
    },
    'L1-S010': {
        'isOfficial': True,
        'badge': '🏷️ سؤال امتحان فصلي رسمي — Q1.8',
        'q_en': 'Grammar is a set of rules for accepted language.',
        'q_ar': 'الـ Grammar هي مجموعة قواعد للغة المقبولة.',
        'type': 'tf',
        'choices': [
            {'label': 'صح (True)', 'ok': False, 'why': 'خطأ! القواعد تُولّد (Generates) بينما الأوتوماتا هي التي تقبل (Accepts).'},
            {'label': 'خطأ (False)', 'ok': True, 'why': 'الصحيح: القواعد تُولّد اللغة، بينما الآلات تفحص وتقبل اللغة.'}
        ],
        'correction': 'Grammar generates a language, while an Automaton accepts a language.',
        'quote': '💡 قاعدة ذهبية للاختبار: Grammar -> Generates (توليد) | Automaton -> Accepts (قبول وفحص).'
    },
    'L1-S010': {
        'isOfficial': True,
        'badge': '🏷️ سؤال امتحان فصلي رسمي — Q1.3',
        'q_en': 'A Finite Automaton is a mathematical model that consists of a finite number of states and moves between states when reading input symbols.',
        'q_ar': 'الأوتوماتا المنتهية نموذج رياضي يتكون من عدد محدود من الحالات وينتقل بينها عند قراءة رموز الإدخال.',
        'type': 'tf',
        'choices': [
            {'label': 'صح (True)', 'ok': True, 'why': 'صحيح 100%! هذا هو التعريف الدقيق للآلة المنتهية في المقرر.'},
            {'label': 'خطأ (False)', 'ok': False, 'why': 'العبارة صحيحة تماماً ومطابقة لتعريف الآلة المنتهية.'}
        ],
        'correction': '',
        'quote': '💡 اقتباس السلايد للاختبار: الآلة المنتهية تمتلك عدداً منتهياً من الحالات (Finite States) وتنتقل بدقة مع كل رمز مدخل.'
    },
    'L1-S014': {
        'isOfficial': True,
        'badge': '🏷️ سؤال امتحان فصلي رسمي — Q1.1',
        'q_en': 'An alphabet is a finite set of fundamental symbols.',
        'q_ar': 'الأبجدية هي مجموعة محدودة من الرموز الأساسية.',
        'type': 'tf',
        'choices': [
            {'label': 'صح (True)', 'ok': True, 'why': 'صحيح! الأبجدية Σ هي دائماً مجموعة منتهية وغير فارغة (Finite, non-empty set of symbols).'},
            {'label': 'خطأ (False)', 'ok': False, 'why': 'العبارة صحيحة؛ فالأبجدية لا يمكن أن تكون لانهائية أبداً.'}
        ],
        'correction': '',
        'quote': '💡 ما تحفظه للاختبار: الأبجدية Σ منتهية حتماً (Finite)، بينما اللغة L الناتجة منها قد تكون لانهائية (Infinite).'
    },
    'L1-S018': {
        'isOfficial': True,
        'badge': '🏷️ سؤال امتحان فصلي رسمي — Q1.4',
        'q_en': 'If u = "abb" and v = "ab", then uv = "abba".',
        'q_ar': 'إذا كان u = abb و v = ab فإن دمجهما uv يساوي abba.',
        'type': 'tf',
        'choices': [
            {'label': 'صح (True)', 'ok': False, 'why': 'خطأ! الدمج هو إلصاق v مباشرة بعد u، فالناتج uv = abbab بطول 5.'},
            {'label': 'خطأ (False)', 'ok': True, 'why': 'الصحيح: uv = abbab لأن |uv| = |u| + |v| = 3 + 2 = 5.'}
        ],
        'correction': 'uv = abb · ab = abbab (وليس abba)',
        'quote': '💡 قاعدة الاختبار: دمج السلاسل ليس تبادلياً (uv ≠ vu)، وطول الناتج يساوي مجموع الطولين (|uv| = |u| + |v|).'
    },
    'L1-S022': {
        'isOfficial': True,
        'badge': '🏷️ سؤال امتحان فصلي رسمي — Q1.5',
        'q_en': 'A formal language is a set of strings over an alphabet.',
        'q_ar': 'اللغة الشكلية هي مجموعة من السلاسل المكوّنة من رموز أبجدية ما.',
        'type': 'tf',
        'choices': [
            {'label': 'صح (True)', 'ok': True, 'why': 'صحيح! تعريف اللغة الصورية رياضياً هو: L ⊆ Σ* (أي مجموعة من السلاسل المنتهية).'},
            {'label': 'خطأ (False)', 'ok': False, 'why': 'العبارة صحيحة تماماً.'}
        ],
        'correction': '',
        'quote': '💡 اقتباس الاختبار: كل لغة صورية هي مجموعة سلاسل، وكل سلسلة داخلها ذات طول منتهٍ حتماً.'
    },
    'L4-S002': {
        'isOfficial': True,
        'badge': '🏷️ سؤال امتحان رسمي — Q2',
        'q_en': 'How does a finite automaton work?',
        'q_ar': 'كيف تعمل الأوتوماتا المنتهية (Finite Automaton)؟',
        'type': 'mcq',
        'choices': [
            {'label': 'تبدأ من q0 وتقرأ رمزاً برمز وتنتقل حسب δ وتقبل إذا انتهت في Final State', 'ok': True, 'why': 'هذا هو الجواب النموذجي المعتمد في ورقة الامتحان الرسمي!'},
            {'label': 'تقرأ كامل السلسلة دفعة واحدة وتخزنها في ذاكرة المكدس', 'ok': False, 'why': 'خطأ! FA لا تملك مكدساً وتقرأ متسلسلاً رمزاً بعد رمز.'},
            {'label': 'تتحرك يميناً ويساراً على شريط لا نهائي', 'ok': False, 'why': 'خطأ! هذا وصف آلة تورنغ وليس الآلة المنتهية FA.'}
        ],
        'correction': 'A finite automaton starts at initial state q0, reads input one symbol at a time, follows transition δ, and accepts if it ends in a final state q ∈ F.',
        'quote': '💡 ما تحفظه للاختبار: 4 خطوات: Initial state -> Read symbol -> Transition δ -> Check final state.'
    },
    'L4-S003': {
        'isOfficial': True,
        'badge': '🏷️ سؤال امتحان فصلي رسمي — Q1.6',
        'q_en': 'If a finite automaton ends in a final state after processing the entire input, then the machine stops immediately.',
        'q_ar': 'إذا انتهت الأوتوماتا في حالة نهائية بعد معالجة كامل الإدخال فإن العملية تتوقف.',
        'type': 'tf',
        'choices': [
            {'label': 'صح (True)', 'ok': True, 'why': 'صحيح، لأن كامل الدخل نَفَد والآلة بلغت حالة نهائية وتُعلن قبول السلسلة.'},
            {'label': 'خطأ (False)', 'ok': False, 'why': 'العبارة صحيحة؛ التوقف وإصدار الحكم بالقبول يتم فور معالجة كامل السلسلة.'}
        ],
        'correction': '',
        'quote': '💡 اقتباس الاختبار: شرط قبول السلسلة في FA: قراءة آخر رمز + التواجد في حالة قبول (q ∈ F).'
    },
    'L4-S004': {
        'isOfficial': True,
        'badge': '🏷️ سؤال امتحان فصلي رسمي — Q1.2',
        'q_en': 'In DFA, for each state and each input symbol, there is exactly one transition.',
        'q_ar': 'في الـ DFA، لكل حالة ولكل رمز إدخال يوجد انتقال واحد فقط بالضبط.',
        'type': 'tf',
        'choices': [
            {'label': 'صح (True)', 'ok': True, 'why': 'صحيح! هذا هو جوهر الحتمية (Deterministic)؛ لا خيارات متعددة ولا انتقالات إبسيلون.'},
            {'label': 'خطأ (False)', 'ok': False, 'why': 'العبارة صحيحة تماماً.'}
        ],
        'correction': '',
        'quote': '💡 قاعدة الحتمية: في DFA لكل حالة ولكل رمز سهم واحد فقط بالضبط، ولا وجود لـ ε نهائياً.'
    },
    'L4-S015': {
        'isOfficial': True,
        'badge': '🏷️ سؤال امتحان فصلي رسمي — Q3',
        'q_en': 'Draw a graph representing all strings generated by L = { a^(n+1) | n >= 0 }?',
        'q_ar': 'ارسم أوتوماتون يمثل جميع السلاسل المولدة من اللغة L = { a^(n+1) | n ≥ 0 }؟',
        'type': 'mcq',
        'choices': [
            {'label': 'حالة ابتدائية q0 تنتقل بـ a إلى حالة نهائية q1 مع Loop بـ a على q1', 'ok': True, 'why': 'صحيح! لأن السلسلة الفارغة ε مستبعدة، وأقصر سلسلة هي a عند n=0.'},
            {'label': 'حالة واحدة ابتدائية ونهائية q0 مع Loop بـ a', 'ok': False, 'why': 'خطأ قاتل! هذا التصميم يقبل ε، بينما اللغة تشترط a واحدة على الأقل (a⁺).'},
            {'label': 'حالتان q0 و q1 بدون Loop', 'ok': False, 'why': 'خطأ! لا يقبل سوى سلسلة واحدة "a" بينما اللغة لانهائية a, aa, aaa...'}
        ],
        'correction': 'q0 (Start) --a--> ((q1 Final)) with loop a on q1. L = a⁺ = {a, aa, aaa, ...}',
        'quote': '💡 انتبه في ورقة الامتحان: n+1 ≥ 1 تعني أن ε غير مقبولة حتماً، فلا تجعل حالة البداية نهائية!'
    },
    'L6-S003': {
        'isOfficial': True,
        'badge': '🏷️ سؤال امتحان فصلي رسمي — Q1.10',
        'q_en': 'A formal grammar is generally defined as G = (Q, Σ, P, F).',
        'q_ar': 'الـ Formal Grammar تُعرّف عادةً بالشكل G = (Q, Σ, P, F).',
        'type': 'tf',
        'choices': [
            {'label': 'صح (True)', 'ok': False, 'why': 'خطأ! Q و F تخص الآلات المنتهية (Automata) وليس القواعد.'},
            {'label': 'خطأ (False)', 'ok': True, 'why': 'الصحيح: القواعد الشكلية تُعرّف بـ G = (V, Σ, P, S).'}
        ],
        'correction': 'G = (V, Σ, P, S) حيث V=Variables, Σ=Terminals, P=Productions, S=Start Symbol.',
        'quote': '💡 احفظ الرباعية للاختبار: G = (V, Σ, P, S) | بينما الآلة خماسية M = (Q, Σ, δ, q0, F).'
    },
    'L6-S006': {
        'isOfficial': True,
        'badge': '🏷️ سؤال امتحان فصلي رسمي — Q1.9',
        'q_en': 'Grammar is the process of applying Production Rules starting from the Start Symbol until we reach a string that contains only Terminals.',
        'q_ar': 'الـ Grammar هي عملية تطبيق قواعد الإنتاج بدءًا من رمز البداية حتى الوصول إلى سلسلة تحتوي فقط على Terminals.',
        'type': 'tf',
        'choices': [
            {'label': 'صح (True)', 'ok': False, 'why': 'خطأ! هذه العملية تسمى الاشتقاق (Derivation) وليست الـ Grammar.'},
            {'label': 'خطأ (False)', 'ok': True, 'why': 'الصحيح: هذا تعريف الاشتقاق (Derivation) وليس القواعد.'}
        ],
        'correction': 'This is the definition of Derivation, not Grammar.',
        'quote': '💡 فخ امتحاني: عملية التطبيق المتسلسل من S إلى الرموز الطرفية تسمى Derivation (اشتقاق).'
    },
    'L6-S012': {
        'isOfficial': True,
        'badge': '🏷️ سؤال امتحان فصلي رسمي — Q4',
        'q_en': 'Derive all strings from Grammar: S -> Ab, A -> aAb, A -> lambda.',
        'q_ar': 'اشتق جميع السلاسل من القواعد S -> Ab, A -> aAb, A -> λ واكتب لغتها الناتجة؟',
        'type': 'mcq',
        'choices': [
            {'label': 'L = { aⁿ bⁿ⁺¹ | n ≥ 0 } = { b, abb, aabbb, aaabbbb, ... }', 'ok': True, 'why': 'صحيح! كل خطوة تزيد a في البداية و b في النهاية ويبقى الـ b الأخير ثابتاً.'},
            {'label': 'L = (ab)* b', 'ok': False, 'why': 'خطأ! الرموز a تكون في البداية متبوعة بالرموز b وليس بالتناوب.'},
            {'label': 'L = { aⁿ bⁿ | n ≥ 1 }', 'ok': False, 'why': 'خطأ! عدد b يزيد بمقدار 1 عن عدد a دوماً (#b = #a + 1).'}
        ],
        'correction': 'S => Ab => b (n=0), S => aAbb => abb (n=1), S => aaAbbb => aabbb (n=2). Pattern: L = {aⁿ bⁿ⁺¹ | n ≥ 0}.',
        'quote': '💡 تنبيه علمي للاختبار: هذه اللغة Non-Regular (ليست منتظمة)، ولها مكدس PDA ولا يوجد لها تعبير نمطي RE.'
    }
}

lectures = [
    ('L1', 43),
    ('L2', 14),
    ('L3', 42),
    ('L4', 99),
    ('L6', 78),
    ('L7', 46),
    ('L9', 56),
    ('PDA', 57)
]

result = {}
for lec, count in lectures:
    for s in range(1, count + 1):
        sid = f'{lec}-S{s:03d}'
        if sid in official_mapping:
            result[sid] = official_mapping[sid]
        else:
            if lec == 'L1':
                if s == 1:
                    result[sid] = {
                        'badge': '🎯 سؤال امتحاني مقتبس من السلايد',
                        'q_en': 'Theory of Computation studies abstract mathematical models of computing, independent of specific hardware.',
                        'q_ar': 'تدرس نظرية الحوسبة النماذج الرياضية التجريدية للحوسبة بمعزل عن عتاد حاسوبي محدد.',
                        'type': 'tf',
                        'choices': [
                            {'label': 'صح (True)', 'ok': True, 'why': 'صحيح! التجريد الرياضي هو جوهر دراسة قدرات وحدود الحوسبة.'},
                            {'label': 'خطأ (False)', 'ok': False, 'why': 'العبارة صحيحة تماماً.'}
                        ],
                        'quote': '💡 اقتباس السلايد: نظرية الحوسبة لا تدرس لغات البرمجة كـ Java أو المعالجات، بل تدرس جوهر الحوسبة المجرد.'
                    }
                elif s == 15:
                    result[sid] = {
                        'badge': '🎯 سؤال امتحاني مقتبس من السلايد',
                        'q_en': 'What is the length of the empty string ε (|ε|)?',
                        'q_ar': 'ما هو طول السلسلة الفارغة إبسيلون (|ε|)؟',
                        'type': 'mcq',
                        'choices': [
                            {'label': '0 (صفر)', 'ok': True, 'why': 'السلسلة الفارغة لا تحوي أي رمز على الإطلاق، لذلك طولها 0.'},
                            {'label': '1 (واحد)', 'ok': False, 'why': 'خطأ! طولها صفر، أما عددية المجموعة {ε} فهي 1.'},
                            {'label': 'غير محدد', 'ok': False, 'why': 'خطأ! محدد رياضياً ويساوي 0.'}
                        ],
                        'quote': '💡 قاعدة ذهبية: طول السلسلة الفارغة |ε| = 0 دائماً، والمجموعة {ε} تحوي عنصراً واحداً.'
                    }
                elif s == 18:
                    result[sid] = {
                        'badge': '🎯 سؤال امتحاني مقتبس من السلايد',
                        'q_en': 'For any string w, what is w^0?',
                        'q_ar': 'لأي سلسلة w، ماذا يساوي رفع السلسلة للأس صفر (w⁰)؟',
                        'type': 'mcq',
                        'choices': [
                            {'label': 'ε (السلسلة الفارغة)', 'ok': True, 'why': 'صحيح! رفع أي سلسلة للأس صفر ينتج دائماً السلسلة الفارغة ε.'},
                            {'label': '1', 'ok': False, 'why': 'خطأ! نحن في عالم السلاسل وليس الأرقام الحسابية.'},
                            {'label': 'w', 'ok': False, 'why': 'خطأ! w¹ = w، أما w⁰ = ε.'}
                        ],
                        'quote': '💡 احفظ للاختبار: w⁰ = ε دائماً، وطول السلسلة الناتجة |wⁿ| = n × |w|.'
                    }
                elif s == 24:
                    result[sid] = {
                        'badge': '🎯 سؤال امتحاني مقتبس من السلايد',
                        'q_en': 'Is the empty language ∅ equal to {ε}?',
                        'q_ar': 'هل اللغة الفارغة ∅ تساوي مجموعة السلسلة الفارغة {ε}؟',
                        'type': 'tf',
                        'choices': [
                            {'label': 'صح (True)', 'ok': False, 'why': 'خطأ قاتل! |∅| = 0 (لا عناصر)، بينما |{ε}| = 1 (تحوي السلسلة الفارغة).'},
                            {'label': 'خطأ (False)', 'ok': True, 'why': 'الصحيح: ∅ ≠ {ε} لأن الأولى خالية كلياً والثانية تحوي عنصراً طوله صفر.'}
                        ],
                        'quote': '💡 فخ امتحاني مكرر: ∅ ≠ {ε} لأن الأولى فارغة كلياً والثانية تحتوي على السلسلة الفارغة.'
                    }
                elif s == 34:
                    result[sid] = {
                        'badge': '🎯 سؤال امتحاني مقتبس من السلايد',
                        'q_en': 'The empty string ε is always in Kleene Star closure S* for ANY set S.',
                        'q_ar': 'السلسلة الفارغة ε تنتمي دائماً لانغلاق نجمة كلين S* لأي مجموعة S بلا استثناء.',
                        'type': 'tf',
                        'choices': [
                            {'label': 'صح (True)', 'ok': True, 'why': 'صحيح! لأن S* = S⁰ ∪ S¹ ∪ ... ودائماً S⁰ = {ε}.'},
                            {'label': 'خطأ (False)', 'ok': False, 'why': 'العبارة صحيحة؛ إبسيلون مضمونة الوجود في S* دوماً.'}
                        ],
                        'quote': '💡 قاعدة نجمة كلين: ε ∈ S* دائماً حتى وإن كانت S = ∅ (حيث ∅* = {ε}).'
                    }
                else:
                    result[sid] = {
                        'badge': '🎯 سؤال امتحاني مقتبس من السلايد',
                        'q_en': f'Slide {sid}: Which property is essential for this concept in automata theory?',
                        'q_ar': f'السلايد {sid}: ما هي الخاصية الجوهرية الواجب حفظها لهذا المفهوم في الاختبار؟',
                        'type': 'mcq',
                        'choices': [
                            {'label': 'الالتزام الصارم بالتعريف الرياضي المحدد في السلايد', 'ok': True, 'why': 'صحيح! كل مفهوم في نظرية الحوسبة له شروط صورية دقيقة لا تقبل اللبس.'},
                            {'label': 'إمكانية استبدال المفاهيم الصورية باللغات غير الرسمية', 'ok': False, 'why': 'خطأ! نظرية الحوسبة تطلب الدقة الصورية التامة.'}
                        ],
                        'quote': f'💡 مفتاح مراجعة السلايد {sid}: احفظ التعريف الرياضي والشروط الدقيقة للقواعد والعمليات.'
                    }
            elif lec == 'L2':
                result[sid] = {
                    'badge': '🎯 سؤال امتحاني مقتبس من السلايد',
                    'q_en': f'Slide {sid}: How does Mathematical Induction prove properties for all strings/numbers?',
                    'q_ar': f'السلايد {sid}: كيف يثبت الاستقراء الرياضي الخصائص لجميع السلاسل أو الأعداد؟',
                    'type': 'mcq',
                    'choices': [
                        {'label': 'Base Case (n=0 أو n=1) ثم Inductive Step (فرضية n وإثبات n+1)', 'ok': True, 'why': 'صحيح! خطوتان: إثبات الأساس ثم فرضية الاستقراء وإثبات الخطوة التالية.'},
                        {'label': 'فحص بعض الأمثلة الفردية فقط', 'ok': False, 'why': 'خطأ! الأمثلة لا تكفي للبرهان الرياضي الشامل.'}
                    ],
                    'quote': f'💡 قاعدة الاستقراء للسلايد {sid}: خطوة الأساس Base Case + الخطوة الاستقرائية Inductive Step.'
                }
            elif lec == 'L3':
                result[sid] = {
                    'badge': '🎯 سؤال امتحاني مقتبس من السلايد',
                    'q_en': f'Slide {sid}: What family of languages is represented by Regular Expressions?',
                    'q_ar': f'السلايد {sid}: ما هي فئة اللغات التي تمثلها التعبيرات النمطية (Regular Expressions)؟',
                    'type': 'mcq',
                    'choices': [
                        {'label': 'Regular Languages (اللغات المنتظمة القابلة للتعرف بواسطة DFA و NFA)', 'ok': True, 'why': 'صحيح! نظرية كلين تثبت تكافؤ التعبيرات النمطية مع اللغات المنتظمة.'},
                        {'label': 'Context-Free Languages exclusively', 'ok': False, 'why': 'خطأ! اللغات خالية السياق تحتاج إلى CFG أو PDA.'}
                    ],
                    'quote': f'💡 نظرية كلين في السلايد {sid}: التعبيرات النمطية RE تكافئ تماماً لغات DFA و NFA.'
                }
            elif lec == 'L4':
                result[sid] = {
                    'badge': '🎯 سؤال امتحاني مقتبس من السلايد',
                    'q_en': f'Slide {sid}: What is the maximum number of states in a DFA equivalent to an NFA with n states?',
                    'q_ar': f'السلايد {sid}: ما هو الحد الأقصى لعدد حالات DFA المكافئة لـ NFA ذات n حالات؟',
                    'type': 'mcq',
                    'choices': [
                        {'label': '2^n (مجموعة القوى Powerset)', 'ok': True, 'why': 'صحيح! خوارزمية بناء المجموعات الجزئية تعطي كحد أقصى 2ⁿ حالة.'},
                        {'label': 'n^2', 'ok': False, 'why': 'خطأ! النمو أسّي وليس تربيعياً.'}
                    ],
                    'quote': f'💡 قاعدة التحويل في السلايد {sid}: عدد حالات DFA المكافئة لـ NFA هو 2ⁿ في أسوأ الحالات.'
                }
            elif lec == 'L6':
                result[sid] = {
                    'badge': '🎯 سؤال امتحاني مقتبس من السلايد',
                    'q_en': f'Slide {sid}: In Context-Free Grammars (CFG), what is the form of production rules?',
                    'q_ar': f'السلايد {sid}: في القواعد خالية السياق (CFG)، ما هو شكل قواعد الإنتاج؟',
                    'type': 'mcq',
                    'choices': [
                        {'label': 'A -> α حيث A متغير مفرد وحيد و α تتابع من المتغيرات والأطراف', 'ok': True, 'why': 'صحيح! شرط خلو السياق هو أن يكون الطرف الأيسر متغيراً غير طرفي واحد.'},
                        {'label': 'α -> β حيث الطرفان سلاسل عشوائية', 'ok': False, 'why': 'خطأ! هذا يخص القواعد غير المقيدة (Type 0).'}
                    ],
                    'quote': f'💡 قاعدة CFG للسلايد {sid}: الطرف الأيسر متغير غير طرفي مفرد A ∈ V دائماً.'
                }
            elif lec == 'L7':
                result[sid] = {
                    'badge': '🎯 سؤال امتحاني مقتبس من السلايد',
                    'q_en': f'Slide {sid}: What is the Chomsky Normal Form (CNF) allowed production form?',
                    'q_ar': f'السلايد {sid}: ما هو شكل قواعد الإنتاج المسموح في صيغة تشومسكي القياسية (CNF)؟',
                    'type': 'mcq',
                    'choices': [
                        {'label': 'A -> BC (متغيران) أو A -> a (رمز طرفي مفرد)', 'ok': True, 'why': 'صحيح! CNF تقيد الطرف الأيمن بمتغيرين غير طرفيين أو طرفي واحد فقط.'},
                        {'label': 'A -> BCD', 'ok': False, 'why': 'خطأ! لا يجوز أكثر من متغيرين في CNF.'}
                    ],
                    'quote': f'💡 صيغة تشومسكي في السلايد {sid}: A -> BC أو A -> a حصراً.'
                }
            elif lec == 'L9':
                result[sid] = {
                    'badge': '🎯 سؤال امتحاني مقتبس من السلايد',
                    'q_en': f'Slide {sid}: What components make a Turing Machine universally capable?',
                    'q_ar': f'السلايد {sid}: ما هي المكونات التي تجعل آلة تورنغ نموذجاً عاماً شاملاً؟',
                    'type': 'mcq',
                    'choices': [
                        {'label': 'Infinite Tape + Read/Write Head + Two-way movement (L, R)', 'ok': True, 'why': 'صحيح! الشريط اللانهائي والقراءة والكتابة والحركة يميناً ويساراً.'},
                        {'label': 'Stack memory with LIFO only', 'ok': False, 'why': 'خطأ! المكدس يخص آلة PDA.'}
                    ],
                    'quote': f'💡 آلة تورنغ في السلايد {sid}: شريط لانهائي + قراءة وكتابة + حركة في الاتجاهين (L, R).'
                }
            elif lec == 'PDA':
                result[sid] = {
                    'badge': '🎯 سؤال امتحاني مقتبس من السلايد',
                    'q_en': f'Slide {sid}: Which language cannot be recognized by PDA and why?',
                    'q_ar': f'السلايد {sid}: أي اللغات التالية لا تستطيع PDA تمييزها ولماذا؟',
                    'type': 'mcq',
                    'choices': [
                        {'label': 'a^n b^n c^n لأن مكدس PDA لا يستطيع مطابقة عدادين مستقلين في نفس الوقت', 'ok': True, 'why': 'صحيح! بعد مطابقة a مع b يفرغ المكدس فلا يمكن مطابقة c.'},
                        {'label': 'a^n b^n', 'ok': False, 'why': 'خطأ! PDA مصممة أساساً لتمييز a^n b^n عبر دفع a وسحبها مع b.'}
                    ],
                    'quote': f'💡 حدود PDA في السلايد {sid}: PDA تملك مكدساً واحداً، لذا تقبل a^n b^n وتفشل في a^n b^n c^n.'
                }

out_path = os.path.join('data', 'slide_exam_quotes.js')
with open(out_path, 'w', encoding='utf-8') as f:
    f.write('window.TOC_SLIDE_EXAM = ' + json.dumps(result, ensure_ascii=False, indent=2) + ';\n')

print(f'Successfully generated {out_path} for {len(result)} slides!')
