# PULSE — Next-Gen Guided Fitness Intelligence & Form-Feedback System

> **Batch Mini Project**  
> A zero-backend, client-side guided workout web application featuring real-time state machines, native Web Audio frequency synthesis, Web Speech API virtual coaching, dynamic SVG vector animation rigging, and persistent browser storage.

---

## 🚀 Key Highlights & Enhancements (v2.5)

1. **Multiple Targeted Workout Routines**:
   - ⚡ **Full-Body Circuit** (~12 mins, All Levels, 6 exercises)
   - 💪 **Upper Body Blast** (~10 mins, Intermediate, 4 exercises)
   - 🔥 **Core & Abs Shredder** (~9 mins, Intense, 4 exercises)
   - 🦵 **Legs & Glutes Power** (~11 mins, Intermediate, 4 exercises)
2. **Native Web Audio Synthesizer**:
   - Zero external audio files or MP3 dependencies.
   - Real-time waveform oscillator synthesis (`sine`, `triangle`) generating countdown ticks, rep clicks, target hit chimes, and victory fanfares.
3. **Web Speech API Virtual Coach**:
   - Hands-free auditory instruction via native browser speech synthesis ("Starting Push-ups", "Halfway there", "Rest now").
4. **Physiological MET Calorie Calculation Engine**:
   - Real-time calorie burn modeling using clinical Metabolic Equivalent of Task (MET) ratings mapped to each exercise:
     $$\text{Calories Burned} = \frac{\text{MET} \times 3.5 \times \text{Weight (70 kg)}}{200 \times 60} \times \text{Seconds Active}$$
5. **Interactive Controls**:
   - Workout pause/resume mechanism.
   - Quick +5 / Hit Target rep shortcuts.
   - Hold timer pause, reset, and early completion capabilities.
   - Dynamic rest time adjustments (+15s / -10s).
   - Skip previous / next exercise controls.
6. **Bilingual Coaching Feedback (EN / Hinglish)**:
   - Instant form feedback toasts with actionable biomechanical tips.
7. **Complete LocalStorage History & Analytics Modal**:
   - Full persistence across browser refreshes via `window.localStorage`.
   - Aggregates lifetime sessions, total lifetime reps, and cumulative calories burned.
   - Detailed session timeline cards with clear-history options.
8. **HTML5 Canvas Particle Physics (Celebration Confetti)**:
   - Native GPU-friendly 2D canvas particle explosion upon routine completion.

---

## 📁 File Structure & Responsibilities

| File | Type | Purpose |
| :--- | :--- | :--- |
| [**`index.html`**](index.html) | Markup | Semantic structure for 4 dynamic screens (Start, Player, Rest, Summary), top bar, and interactive modals. |
| [**`style.css`**](style.css) | Styling | Cyber-athletic glassmorphism design tokens, responsive layouts, SVG circular timer rings, and 12 custom vector keyframe animations. |
| [**`data.js`**](data.js) | Data & Logic | In-memory routine catalogue, MET ratings, target metrics, and deterministic heuristic form/rest feedback rules. |
| [**`icons.js`**](icons.js) | Vector Art | Modular SVG stick-figure rigging with joints, limbs, and torso vectors designed for CSS matrix animation. |
| [**`app.js`**](app.js) | Controller | State machine, Web Audio synthesizer, Web Speech coach, timers, localStorage CRUD, and canvas particle engine. |

---

## 🖥️ How to Run & Present

### Option 1: Direct Offline Launch (No Install Required)
- Simply double-click [`index.html`](index.html) in any modern web browser (Google Chrome, Microsoft Edge, Brave, Firefox, or Safari).
- Works 100% offline with zero dependencies or internet access required.

### Option 2: Live Server (Recommended for IDE Demos)
1. Open this folder in VS Code.
2. Right-click `index.html` → **"Open with Live Server"**.
3. Browse to `http://127.0.0.1:5500`.

---

## 🎓 Faculty Presentation & Viva Guide

### Q1: Why is this project designed with "Zero Backend"?
> **Answer**: 
> - **Data Privacy**: Workout and biometric data never leave the user's local machine.
> - **Zero Latency**: State transitions, audio synthesis, and timer countdowns execute with zero network lag or API rate limits.
> - **Offline Capability**: Can be deployed on any static web host, local intranet, or used offline as a Progressive Web App (PWA).

### Q2: How does the LocalStorage persistence work?
> **Answer**: 
> - The browser provides `window.localStorage` which offers key-value storage persisting across sessions and page reloads.
> - In `app.js`, when a workout finishes, session metrics (routine name, date, reps, sets, time, calories) are added to a JavaScript array, serialized via `JSON.stringify()`, and stored under the key `"pulse_sessions"`.
> - The History Modal retrieves this string via `localStorage.getItem("pulse_sessions")`, deserializes it with `JSON.parse()`, and renders the historical timeline.

### Q3: How do the audio sounds work without MP3 files?
> **Answer**: 
> - We utilize the browser's native **Web Audio API** (`AudioContext`).
> - An oscillator node (`OscillatorNode`) generates mathematical sound frequencies (e.g., 440 Hz for ticks, 1046 Hz for chimes) using sine/triangle waveforms, coupled with a `GainNode` for exponential decay volume envelopes. This ensures instant playback without external network requests or audio file loading lag.

### Q4: How are the exercises animated?
> **Answer**: 
> - Rather than using heavy video files or GIFs, all exercises are lightweight SVG vector graphics defined in `icons.js`.
> - Keyframe animations in `style.css` apply hardware-accelerated transforms (`translateY`, `scaleY`, `rotate`) to specific limb elements (`.limb-knee`, `.tap-hand`, `.raise-legs`), yielding high-DPI scaling at minimal CPU and memory footprints.
