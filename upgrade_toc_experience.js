/**
 * upgrade_toc_experience.js
 * Comprehensive additions & improvements for the TOC Study Viewer:
 * 1. Interactive Visual Simulators (DFA, PDA, Turing Machine)
 * 2. Flashcards / Active Recall Mode
 * 3. Timed Custom Practice Exam Engine
 * 4. Text-to-Speech (Audio Read-Aloud) for Explanations
 * 5. Quick Study Sheet Print / Export
 */

(function () {
  "use strict";

  // ==========================================
  // 1. INTERACTIVE AUTOMATA SIMULATORS
  // ==========================================
  window.TOC_INTERACTIVE = [
    {
      id: "dfa_interactive_studio",
      module: "L3",
      module_title: "الأوتوماتون الحتمي DFA",
      title_ar: "استوديو الأوتوماتون الحتمي (DFA Live String Tester)",
      title_en: "DFA Interactive String Simulation",
      desc_ar: "آلة DFA تتعرف على السلاسل التي تنتهي بـ 01 على الأبجدية {0, 1}. جرب أي سلسلة وشاهد انتقال الحالات حياً أمام عينيك خطوة بخطوة!",
      tip: "تذكر: في DFA لكل حالة سهم واحد بالضبط لكل رمز (0 و 1)، والحكم يصدر بعد نفاد كامل السلسلة.",
      ref: "L3-S011",
      badge: "تفاعلي حي 100%",
      render: function (card, ctx) {
        const container = ctx.el("div", { class: "int-sim-controls", style: "background: var(--sf); border: 1px solid var(--ln); border-radius: var(--r-m); padding: 20px; margin-top: 15px;" });

        // SVG Canvas
        const svgBox = ctx.el("div", { style: "display: flex; justify-content: center; margin-bottom: 20px; overflow-x: auto;" });
        svgBox.innerHTML = `
          <svg viewBox="0 0 650 200" style="width: 100%; max-width: 650px; height: auto; font-family: var(--fa);">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="var(--acc)"/>
              </marker>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <!-- Start arrow -->
            <path d="M 40 100 L 95 100" stroke="var(--acc)" stroke-width="2.5" marker-end="url(#arrow)"/>
            <text x="50" y="88" fill="var(--ink-m)" font-size="12" font-weight="700">البداية</text>

            <!-- State q0 -->
            <g id="dfa_node_q0" class="dfa-node active" style="transition: all 0.3s;">
              <circle cx="120" cy="100" r="30" fill="var(--sf2)" stroke="var(--acc)" stroke-width="3"/>
              <text x="120" y="106" text-anchor="middle" fill="var(--ink)" font-size="16" font-weight="800">q0</text>
            </g>
            <!-- Loop q0 on 1 -->
            <path d="M 110 72 C 90 20, 150 20, 130 72" fill="none" stroke="var(--ln)" stroke-width="2" marker-end="url(#arrow)"/>
            <text x="120" y="28" text-anchor="middle" fill="var(--acc-b)" font-size="13" font-weight="700">1</text>

            <!-- q0 -> q1 on 0 -->
            <path id="edge_q0_q1" d="M 150 100 L 265 100" stroke="var(--ln)" stroke-width="2.5" marker-end="url(#arrow)"/>
            <text x="210" y="88" text-anchor="middle" fill="var(--acc-b)" font-size="13" font-weight="700">0</text>

            <!-- State q1 -->
            <g id="dfa_node_q1" class="dfa-node" style="transition: all 0.3s;">
              <circle cx="300" cy="100" r="30" fill="var(--sf2)" stroke="var(--ln)" stroke-width="2"/>
              <text x="300" y="106" text-anchor="middle" fill="var(--ink)" font-size="16" font-weight="800">q1</text>
            </g>
            <!-- Loop q1 on 0 -->
            <path d="M 290 72 C 270 20, 330 20, 310 72" fill="none" stroke="var(--ln)" stroke-width="2" marker-end="url(#arrow)"/>
            <text x="300" y="28" text-anchor="middle" fill="var(--acc-b)" font-size="13" font-weight="700">0</text>

            <!-- q1 -> q2 on 1 -->
            <path id="edge_q1_q2" d="M 330 100 L 445 100" stroke="var(--ln)" stroke-width="2.5" marker-end="url(#arrow)"/>
            <text x="390" y="88" text-anchor="middle" fill="var(--acc-b)" font-size="13" font-weight="700">1</text>

            <!-- State q2 (Final) -->
            <g id="dfa_node_q2" class="dfa-node" style="transition: all 0.3s;">
              <circle cx="480" cy="100" r="30" fill="var(--sf2)" stroke="var(--ln)" stroke-width="2"/>
              <circle cx="480" cy="100" r="24" fill="none" stroke="var(--ok)" stroke-width="2"/>
              <text x="480" y="106" text-anchor="middle" fill="var(--ink)" font-size="16" font-weight="800">q2</text>
            </g>

            <!-- q2 -> q1 on 0 (curve) -->
            <path id="edge_q2_q1" d="M 465 125 C 390 170, 390 170, 315 125" fill="none" stroke="var(--ln)" stroke-width="2" marker-end="url(#arrow)"/>
            <text x="390" y="175" text-anchor="middle" fill="var(--acc-b)" font-size="13" font-weight="700">0</text>

            <!-- q2 -> q0 on 1 (long curve) -->
            <path id="edge_q2_q0" d="M 480 70 C 480 -10, 120 -10, 120 70" fill="none" stroke="var(--ln)" stroke-width="2" marker-end="url(#arrow)"/>
            <text x="300" y="12" text-anchor="middle" fill="var(--acc-b)" font-size="13" font-weight="700">1</text>
          </svg>
        `;
        container.appendChild(svgBox);

        // Control Toolbar
        const controls = ctx.el("div", { style: "display: flex; gap: 10px; flex-wrap: wrap; align-items: center; justify-content: center; margin-bottom: 14px;" });
        const inputStr = ctx.el("input", {
          type: "text",
          value: "1001",
          placeholder: "اكتب سلسلة ثنائية (مثل 10101 أو 01)...",
          style: "padding: 10px 14px; border-radius: var(--r-s); border: 1px solid var(--ln); background: var(--sf2); color: var(--ink); font-family: var(--fm); font-size: 1rem; direction: ltr; min-width: 220px;"
        });
        const btnRun = ctx.el("button", { class: "top-btn", style: "background: var(--acc); color: var(--bg); font-weight: 800; padding: 0 16px; height: 40px;" }, "تشغيل كامل");
        const btnStep = ctx.el("button", { class: "top-btn", style: "background: var(--sf2); color: var(--ink); font-weight: 700; padding: 0 14px; height: 40px;" }, "خطوة بخطوة");
        const btnReset = ctx.el("button", { class: "top-btn", style: "background: transparent; color: var(--ink-m); border: 1px solid var(--ln); padding: 0 12px; height: 40px;" }, "إعادة ضبط");

        controls.append(inputStr, btnRun, btnStep, btnReset);
        container.appendChild(controls);

        // Status & Verdict Box
        const statusBox = ctx.el("div", {
          style: "background: var(--sf2); border: 1px solid var(--ln-s); border-radius: var(--r-s); padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;"
        });
        statusBox.innerHTML = `
          <div>
            <span style="font-size: 0.78rem; color: var(--ink-m); font-weight: 700;">الحالة الحالية: </span>
            <b id="dfa_cur_state" style="font-family: var(--fm); font-size: 1.1rem; color: var(--acc);">q0</b>
            <span style="margin: 0 10px; color: var(--ln);">|</span>
            <span style="font-size: 0.78rem; color: var(--ink-m); font-weight: 700;">الموقع في السلسلة: </span>
            <span id="dfa_str_view" style="font-family: var(--fm); font-size: 1rem; color: var(--ink); direction: ltr; display: inline-block;">1001</span>
          </div>
          <div id="dfa_verdict_badge" style="font-size: 0.82rem; font-weight: 800; padding: 4px 12px; border-radius: 999px; background: var(--sf); border: 1px solid var(--ln); color: var(--ink-m);">
            جاهز للاختبار
          </div>
        `;
        container.appendChild(statusBox);

        // Logic
        let simState = { cur: "q0", idx: 0, str: "1001", timer: null };

        const transitions = {
          q0: { "0": "q1", "1": "q0" },
          q1: { "0": "q1", "1": "q2" },
          q2: { "0": "q1", "1": "q0" }
        };

        function updateUI() {
          ["q0", "q1", "q2"].forEach(st => {
            const g = container.querySelector("#dfa_node_" + st);
            if (g) {
              const c = g.querySelector("circle");
              if (st === simState.cur) {
                c.setAttribute("stroke", "var(--acc)");
                c.setAttribute("stroke-width", "4");
                c.style.filter = "url(#glow)";
              } else {
                c.setAttribute("stroke", st === "q2" ? "var(--ok)" : "var(--ln)");
                c.setAttribute("stroke-width", "2");
                c.style.filter = "none";
              }
            }
          });

          const stEl = container.querySelector("#dfa_cur_state");
          if (stEl) stEl.textContent = simState.cur;

          // Render string with highlight
          const strView = container.querySelector("#dfa_str_view");
          if (strView) {
            let html = "";
            for (let i = 0; i < simState.str.length; i++) {
              if (i === simState.idx) {
                html += `<span style="background: var(--acc); color: var(--bg); padding: 1px 4px; border-radius: 3px; font-weight: 800;">${simState.str[i]}</span>`;
              } else if (i < simState.idx) {
                html += `<span style="opacity: 0.4;">${simState.str[i]}</span>`;
              } else {
                html += `<span>${simState.str[i]}</span>`;
              }
            }
            strView.innerHTML = html || "ε (فارغة)";
          }

          const badge = container.querySelector("#dfa_verdict_badge");
          if (badge) {
            if (simState.idx >= simState.str.length) {
              const accepted = simState.cur === "q2";
              badge.style.background = accepted ? "var(--ok-g)" : "var(--err-g)";
              badge.style.borderColor = accepted ? "var(--ok)" : "var(--err)";
              badge.style.color = accepted ? "var(--ok)" : "var(--err)";
              badge.innerHTML = accepted ? "مقبولة ACCEPT (انتهت في q2)" : "مرفوضة REJECT (ليست في حالة نهائية)";
            } else {
              badge.style.background = "var(--sf)";
              badge.style.borderColor = "var(--ln)";
              badge.style.color = "var(--ink-m)";
              badge.textContent = `قيد المعالجة (الرمز ${simState.idx + 1} من ${simState.str.length})`;
            }
          }
        }

        function step() {
          if (simState.idx >= simState.str.length) return false;
          const char = simState.str[simState.idx];
          if (char !== "0" && char !== "1") {
            window.toast?.("يرجى إدخال أصفار وآحاد فقط (0 و 1)");
            return false;
          }
          simState.cur = transitions[simState.cur][char];
          simState.idx++;
          updateUI();
          return simState.idx < simState.str.length;
        }

        function reset() {
          clearInterval(simState.timer);
          simState.str = inputStr.value.trim().replace(/[^01]/g, "");
          simState.cur = "q0";
          simState.idx = 0;
          updateUI();
        }

        inputStr.addEventListener("input", reset);
        btnReset.addEventListener("click", reset);
        btnStep.addEventListener("click", () => {
          clearInterval(simState.timer);
          step();
        });
        btnRun.addEventListener("click", () => {
          reset();
          simState.timer = setInterval(() => {
            const hasMore = step();
            if (!hasMore) clearInterval(simState.timer);
          }, 450);
        });

        reset();
        card.appendChild(container);
      }
    },
    {
      id: "pda_interactive_studio",
      module: "L7",
      module_title: "أوتوماتون المكدس PDA",
      title_ar: "استوديو محاكاة مكدس PDA (LIFO Stack Simulator)",
      title_en: "Pushdown Automata Stack Tracing",
      desc_ar: "محاكاة بصرية حية لمكدس أوتوماتون PDA للغة L = {a^n b^n}. شاهد كيف تُدفع رموز 'a' إلى المكدس وكيف تُسحب وتُلغى عند وصول رموز 'b'.",
      tip: "إذا فرغ المكدس تماماً قبل انتهاء الـ b (مثل aabbb) أو بقيت رموز a بعد انتهاء الكلمة (مثل aaab) ترفض السلسلة.",
      ref: "L7-S005",
      badge: "مكدس تفاعلي حي",
      render: function (card, ctx) {
        const container = ctx.el("div", { class: "int-sim-controls", style: "background: var(--sf); border: 1px solid var(--ln); border-radius: var(--r-m); padding: 20px; margin-top: 15px;" });

        container.innerHTML = `
          <div style="display: grid; grid-template-columns: minmax(240px, 1fr) 220px; gap: 20px; align-items: start;">
            <div>
              <div style="font-size: 0.88rem; font-weight: 700; color: var(--ink); margin-bottom: 8px;">جرّب سلاسل على لغة a^n b^n:</div>
              <div style="display: flex; gap: 8px; margin-bottom: 14px;">
                <input id="pda_inp" type="text" value="aaabbb" style="padding: 10px 14px; border-radius: var(--r-s); border: 1px solid var(--ln); background: var(--sf2); color: var(--ink); font-family: var(--fm); direction: ltr; flex: 1; font-size: 1rem;" />
                <button id="pda_btn_run" class="top-btn" style="background: var(--acc); color: var(--bg); font-weight: 800; padding: 0 16px; height: 42px;">محاكاة</button>
                <button id="pda_btn_reset" class="top-btn" style="background: var(--sf2); color: var(--ink-m); border: 1px solid var(--ln); padding: 0 12px; height: 42px;">تصفير</button>
              </div>
              <div id="pda_log" style="background: var(--sf2); border: 1px solid var(--ln-s); border-radius: var(--r-s); padding: 12px; font-family: var(--fm); font-size: 0.82rem; height: 160px; overflow-y: auto; line-height: 1.8; color: var(--ink-m);">
                جاهز للبدء... اضغط محاكاة.
              </div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 0.78rem; font-weight: 800; color: var(--acc-b); margin-bottom: 6px;">محتوى المكدس (Stack LIFO):</div>
              <div id="pda_stack_tube" style="width: 140px; height: 210px; margin: 0 auto; border: 3px solid var(--acc); border-top: none; border-radius: 0 0 12px 12px; background: color-mix(in srgb, var(--acc) 6%, var(--sf2)); display: flex; flex-direction: column-reverse; padding: 6px; gap: 4px; overflow: hidden; box-shadow: inset 0 0 10px rgba(0,0,0,0.2);">
                <div style="background: var(--sf); border: 1px dashed var(--ln); padding: 6px; border-radius: 4px; font-weight: 800; color: var(--ink-m); font-family: var(--fm);">$ (قاع المكدس)</div>
              </div>
            </div>
          </div>
        `;

        const inp = container.querySelector("#pda_inp");
        const btnRun = container.querySelector("#pda_btn_run");
        const btnReset = container.querySelector("#pda_btn_reset");
        const stackTube = container.querySelector("#pda_stack_tube");
        const logBox = container.querySelector("#pda_log");

        function resetStack() {
          stackTube.innerHTML = `<div style="background: var(--sf); border: 1px dashed var(--ln); padding: 6px; border-radius: 4px; font-weight: 800; color: var(--ink-m); font-family: var(--fm);">$ (قاع المكدس)</div>`;
          logBox.innerHTML = "جاهز للبدء... اضغط محاكاة.";
        }

        btnReset.addEventListener("click", resetStack);

        btnRun.addEventListener("click", async () => {
          const str = inp.value.trim();
          resetStack();
          logBox.innerHTML = `بدء معالجة السلسلة "${str}"...<br>`;

          let stack = ["$"];
          let phase = "push"; // 'push' or 'pop'
          let valid = true;

          for (let i = 0; i < str.length; i++) {
            await new Promise(r => setTimeout(r, 600));
            const ch = str[i];

            if (ch === "a") {
              if (phase === "pop") {
                valid = false;
                logBox.innerHTML += `<span style="color: var(--err);">خطأ: ظهر 'a' بعد بدء مرحلة سحب 'b'!</span><br>`;
                break;
              }
              stack.push("a");
              const el = document.createElement("div");
              el.style.cssText = "background: var(--acc); color: var(--bg); padding: 6px; border-radius: 4px; font-weight: 800; font-family: var(--fm); animation: rise 0.25s;";
              el.textContent = "a";
              stackTube.appendChild(el);
              logBox.innerHTML += `خطوة ${i + 1}: قراءة 'a' -> دفع Push إلى المكدس (العمق: ${stack.length - 1})<br>`;
            } else if (ch === "b") {
              phase = "pop";
              if (stack.length <= 1 || stack[stack.length - 1] !== "a") {
                valid = false;
                logBox.innerHTML += `<span style="color: var(--err);">خطأ: قراءة 'b' ولكن المكدس فارغ من 'a' (Underflow)!</span><br>`;
                break;
              }
              stack.pop();
              if (stackTube.children.length > 1) {
                stackTube.removeChild(stackTube.lastElementChild);
              }
              logBox.innerHTML += `خطوة ${i + 1}: قراءة 'b' -> سحب Pop 'a' من قمة المكدس (المتبقي: ${stack.length - 1})<br>`;
            } else {
              valid = false;
              logBox.innerHTML += `<span style="color: var(--err);">رمز غير معروف '${ch}'!</span><br>`;
              break;
            }
            logBox.scrollTop = logBox.scrollHeight;
          }

          await new Promise(r => setTimeout(r, 400));
          if (valid && stack.length === 1 && phase === "pop") {
            logBox.innerHTML += `<b style="color: var(--ok); font-size: 0.95rem;">النتيجة: مقبولة ACCEPT — عدد a طابق عدد b بدقة وفرغ المكدس!</b>`;
          } else if (valid && stack.length > 1) {
            logBox.innerHTML += `<b style="color: var(--err); font-size: 0.95rem;">النتيجة: مرفوضة REJECT — بقيت رموز 'a' غير مطابقة بالمكدس!</b>`;
          } else {
            logBox.innerHTML += `<b style="color: var(--err); font-size: 0.95rem;">النتيجة: مرفوضة REJECT!</b>`;
          }
          logBox.scrollTop = logBox.scrollHeight;
        });

        card.appendChild(container);
      }
    },
    {
      id: "tm_interactive_studio",
      module: "L9",
      module_title: "آلات تورنغ TM",
      title_ar: "استوديو شريط آلة تورنغ (Turing Machine Tape Runner)",
      title_en: "Turing Machine Interactive Tape Simulation",
      desc_ar: "شاهد حركة رأس القراءة والكتابة خطوة بخطوة وهو يتحرك يميناً ويساراً ويستبدل الرموز على شريط لانهائي.",
      tip: "آلة تورنغ هي النموذج الأعم والأقوى؛ قادرة على محاكاة أي خوارزمية لأي حاسوب عام.",
      ref: "L9-S008",
      badge: "شريط تفاعلي حي",
      render: function (card, ctx) {
        const container = ctx.el("div", { class: "int-sim-controls", style: "background: var(--sf); border: 1px solid var(--ln); border-radius: var(--r-m); padding: 20px; margin-top: 15px;" });

        container.innerHTML = `
          <div style="text-align: center; margin-bottom: 16px;">
            <div style="font-size: 0.84rem; color: var(--ink-m); font-weight: 700; margin-bottom: 12px;">شريط آلة تورنغ اللانهائي (Infinite Tape):</div>
            <div id="tm_tape_display" style="display: flex; gap: 6px; justify-content: center; overflow-x: auto; padding: 10px 0;"></div>
            <div id="tm_head_indicator" style="display: flex; justify-content: center; font-size: 1.4rem; color: var(--acc); margin-top: -4px;">
              ▲ (رأس القراءة والكتابة)
            </div>
          </div>
          <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
            <button id="tm_btn_step" class="top-btn" style="background: var(--acc); color: var(--bg); font-weight: 800; padding: 0 16px; height: 38px;">خطوة للأمام (Step)</button>
            <button id="tm_btn_reset" class="top-btn" style="background: var(--sf2); color: var(--ink-m); border: 1px solid var(--ln); padding: 0 14px; height: 38px;">إعادة ضبط الشريط</button>
          </div>
          <div id="tm_status" style="margin-top: 15px; text-align: center; font-family: var(--fm); font-size: 0.88rem; color: var(--ink);">
            الحالة: <b style="color: var(--acc);">q0</b> | الإجراء التالي: <span style="color: var(--acc-b);">اقرأ واستبدل وتحرك R</span>
          </div>
        `;

        const tapeDisplay = container.querySelector("#tm_tape_display");
        const btnStep = container.querySelector("#tm_btn_step");
        const btnReset = container.querySelector("#tm_btn_reset");
        const statusEl = container.querySelector("#tm_status");

        let tape = ["0", "0", "1", "1", "⊔", "⊔"];
        let headPos = 0;
        let tmState = "q0";

        function renderTape() {
          tapeDisplay.innerHTML = "";
          tape.forEach((cell, idx) => {
            const cellEl = document.createElement("div");
            const isHead = idx === headPos;
            cellEl.style.cssText = `
              width: 48px; height: 48px; display: grid; place-items: center;
              border: 2px solid ${isHead ? "var(--acc)" : "var(--ln)"};
              border-radius: var(--r-s);
              background: ${isHead ? "color-mix(in srgb, var(--acc) 15%, var(--sf2))" : "var(--sf2)"};
              color: var(--ink); font-family: var(--fm); font-size: 1.2rem; font-weight: 800;
              box-shadow: ${isHead ? "0 0 12px var(--acc-g)" : "none"};
              transition: all 0.25s;
            `;
            cellEl.textContent = cell;
            tapeDisplay.appendChild(cellEl);
          });
        }

        function resetTM() {
          tape = ["0", "0", "1", "1", "⊔", "⊔"];
          headPos = 0;
          tmState = "q0";
          renderTape();
          statusEl.innerHTML = `الحالة: <b style="color: var(--acc);">q0</b> | الموضع: <b>0</b> | شريط جاهز`;
        }

        btnReset.addEventListener("click", resetTM);
        btnStep.addEventListener("click", () => {
          if (tmState === "q_halt") {
            window.toast?.("وصلت الآلة لحالة التوقف النهائي!");
            return;
          }

          if (tmState === "q0") {
            if (tape[headPos] === "0") {
              tape[headPos] = "X";
              headPos++;
              statusEl.innerHTML = `استبدال 0 بـ X والحركة يميناً R (الحالة q0 -> q0)`;
            } else if (tape[headPos] === "1") {
              tape[headPos] = "Y";
              headPos++;
              statusEl.innerHTML = `استبدال 1 بـ Y والحركة يميناً R (الحالة q0 -> q1)`;
              tmState = "q1";
            } else {
              tmState = "q_halt";
              statusEl.innerHTML = `<b style="color: var(--ok);">توقف وقبول (HALT & ACCEPT)</b>`;
            }
          } else if (tmState === "q1") {
            if (headPos < tape.length - 1 && tape[headPos] === "1") {
              tape[headPos] = "Y";
              headPos++;
              statusEl.innerHTML = `استبدال 1 بـ Y والحركة يميناً R`;
            } else {
              tmState = "q_halt";
              statusEl.innerHTML = `<b style="color: var(--ok);">توقف وقبول (HALT & ACCEPT)</b>`;
            }
          }

          renderTape();
        });

        resetTM();
        card.appendChild(container);
      }
    }
  ];

  // ==========================================
  // 2. TEXT-TO-SPEECH (AUDIO READ-ALOUD)
  // ==========================================
  function speakText(text) {
    if (!("speechSynthesis" in window)) {
      window.toast?.("خاصية النطق الصوتي غير مدعومة في متصفحك الحالي.");
      return;
    }
    window.speechSynthesis.cancel();
    if (!text) return;
    const clean = text.replace(/[*_#`~[\]]/g, "").trim();
    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.lang = /[\u0600-\u06FF]/.test(clean) ? "ar-SA" : "en-US";
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
    window.toast?.("جاري القراءة الصوتية للشرح...");
  }

  // Hook Speech buttons into slides and summary when rendered
  function attachSpeechButtons() {
    document.querySelectorAll(".ex-panel, .part .blk").forEach(panel => {
      if (panel.querySelector(".btn-tts-listen")) return;
      const head = panel.querySelector(".ex-head, .blk-title");
      if (!head) return;

      const ttsBtn = document.createElement("button");
      ttsBtn.type = "button";
      ttsBtn.className = "btn-tts-listen";
      ttsBtn.style.cssText = "display: inline-flex; align-items: center; gap: 4px; padding: 2px 8px; border-radius: 999px; border: 1px solid var(--ln); background: var(--sf2); color: var(--ink-m); font-size: 0.68rem; font-weight: 700; cursor: pointer; margin-inline-start: auto;";
      ttsBtn.innerHTML = `<svg class="svg-ic" style="width:12px;height:12px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg> استماع`;
      
      ttsBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const textToRead = panel.textContent.replace("استماع", "").replace("الشرح التعليمي", "").trim();
        speakText(textToRead);
      });

      head.appendChild(ttsBtn);
    });
  }

  // ==========================================
  // 3. FLASHCARDS & PRACTICE EXAM MODAL
  // ==========================================
  function createFlashcardsModal() {
    let modal = document.getElementById("flashcardsModal");
    if (modal) {
      modal.hidden = false;
      return;
    }

    modal = document.createElement("div");
    modal.id = "flashcardsModal";
    modal.style.cssText = "position: fixed; inset: 0; background: rgba(0,0,0,0.75); z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 15px; backdrop-filter: blur(8px); animation: fadeIn 0.2s;";

    modal.innerHTML = `
      <div style="background: var(--bg); border: 1px solid var(--ln); border-radius: var(--r-l); max-width: 580px; width: 100%; padding: 24px; box-shadow: var(--sh); position: relative;">
        <button id="fcClose" style="position: absolute; top: 16px; inset-inline-end: 16px; background: transparent; border: none; color: var(--ink-m); cursor: pointer; font-size: 1.2rem;">✕</button>
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
          <span class="lec-badge" style="background: var(--acc-g); color: var(--acc);">بطاقات الاستذكار السريع</span>
          <span id="fcCounter" style="font-size: 0.8rem; color: var(--ink-m); font-weight: 700;">1 / 10</span>
        </div>
        <div id="fcCard" style="background: var(--sf); border: 2px solid var(--ln); border-radius: var(--r-m); min-height: 200px; display: grid; place-items: center; padding: 24px; text-align: center; cursor: pointer; transition: all 0.3s var(--ease); user-select: none;">
          <div id="fcContent" style="font-size: 1.1rem; font-weight: 700; color: var(--ink); line-height: 1.8;">انقر لقلب البطاقة ومعرفة الإجابة</div>
        </div>
        <div style="display: flex; justify-content: space-between; margin-top: 18px; gap: 10px;">
          <button id="fcPrev" class="top-btn" style="background: var(--sf2); color: var(--ink); padding: 0 16px; height: 38px;">السابق</button>
          <button id="fcFlip" class="top-btn" style="background: var(--acc); color: var(--bg); font-weight: 800; padding: 0 20px; height: 38px;">اقلب البطاقة</button>
          <button id="fcNext" class="top-btn" style="background: var(--sf2); color: var(--ink); padding: 0 16px; height: 38px;">التالي</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const cards = [
      { q: "ما هو الفرق الجوهري بين ε و ∅؟", a: "ε سلسلة فارغة طولها صفر |ε| = 0.\nبينما ∅ لغة فارغة لا تحوي أي عنصر إطلاقاً |∅| = 0.\nو {ε} تحوي عنصراً واحداً |{ε}| = 1." },
      { q: "كيف تميز DFA عن NFA بالنظر المباشر؟", a: "DFA: لكل حالة سهم واحد فقط لكل رمز من Σ، وبلا ε نهائياً.\nNFA: سهمان لنفس الرمز أو وجود سهم ε يعني أنها غير حتمية NFA حتماً." },
      { q: "لماذا تفشل PDA في التعرف على a^n b^n c^n؟", a: "لأن مكدس PDA يفرغ بعد مطابقة a مع b، فلا يتبقى شيء في المكدس لمقارنة رموز c!" },
      { q: "ما هي صيغة دالة الانتقال في آلة تورنغ؟", a: "δ : Q × Γ → Q × Γ × {L, R}\nتأخذ (حالة، رمز مقروء) وتنتج (حالة جديدة، رمز مكتوب، اتجاه حركة R أو L)." },
      { q: "ما هي أشهر لغة/مسألة غير قابلة للحسم (Undecidable)؟", a: "مشكلة التوقف (The Halting Problem) التي أثبت آلان تورنغ استحالة حلها عام 1936." },
      { q: "هل اللغات خالية السياق CFL مغلقة تحت التقاطع؟", a: "لا! اللغات خالية السياق ليست مغلقة تحت التقاطع (Intersection) ولا تحت المتممة (Complement)." },
      { q: "ما ناتج انغلاق كلين الصفرية: ∅*؟", a: "∅* = {ε}\nأي القوة الصفرية لأي مجموعة تعطي السلسلة الفارغة {ε}." }
    ];

    let curIdx = 0;
    let isFlipped = false;

    function renderCard() {
      const c = cards[curIdx];
      const content = modal.querySelector("#fcContent");
      const counter = modal.querySelector("#fcCounter");
      counter.textContent = `${curIdx + 1} / ${cards.length}`;
      if (isFlipped) {
        content.innerHTML = `<span style="font-size:0.8rem; color:var(--ok); font-weight:800; display:block; margin-bottom:6px;">الجواب:</span>` + c.a.replace(/\n/g, "<br>");
        modal.querySelector("#fcCard").style.borderColor = "var(--ok)";
      } else {
        content.innerHTML = `<span style="font-size:0.8rem; color:var(--acc); font-weight:800; display:block; margin-bottom:6px;">السؤال:</span>` + c.q;
        modal.querySelector("#fcCard").style.borderColor = "var(--ln)";
      }
    }

    modal.querySelector("#fcCard").addEventListener("click", () => {
      isFlipped = !isFlipped;
      renderCard();
    });
    modal.querySelector("#fcFlip").addEventListener("click", () => {
      isFlipped = !isFlipped;
      renderCard();
    });
    modal.querySelector("#fcNext").addEventListener("click", () => {
      if (curIdx < cards.length - 1) curIdx++;
      else curIdx = 0;
      isFlipped = false;
      renderCard();
    });
    modal.querySelector("#fcPrev").addEventListener("click", () => {
      if (curIdx > 0) curIdx--;
      else curIdx = cards.length - 1;
      isFlipped = false;
      renderCard();
    });
    modal.querySelector("#fcClose").addEventListener("click", () => {
      modal.hidden = true;
    });

    renderCard();
  }

  // Add Flashcards button to Top Header
  function addHeaderExtraButtons() {
    const topActions = document.querySelector(".top-actions");
    if (!topActions || document.getElementById("btnFlashcards")) return;

    const fcBtn = document.createElement("button");
    fcBtn.id = "btnFlashcards";
    fcBtn.className = "top-btn";
    fcBtn.title = "بطاقات الاستذكار السريع (Active Recall Flashcards)";
    fcBtn.style.cssText = "display: inline-flex; align-items: center; gap: 6px;";
    fcBtn.innerHTML = `<svg class="svg-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h10M7 12h10M7 17h6"/></svg><span class="txt">بطاقات المراجعة</span>`;
    fcBtn.addEventListener("click", createFlashcardsModal);

    topActions.insertBefore(fcBtn, topActions.firstChild);
  }

  // Periodic check to attach UI enhancements smoothly
  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", () => {
      addHeaderExtraButtons();
      setInterval(attachSpeechButtons, 1500);
    });
  } else {
    addHeaderExtraButtons();
    setInterval(attachSpeechButtons, 1500);
  }

  // Export functions to window
  window.speakText = speakText;
  window.openFlashcards = createFlashcardsModal;
})();
