/* ============================================================
   app.js — PULSE Fitness Intelligence & Workout State Machine
   ------------------------------------------------------------
   Zero-Backend Client-Side Engine:
     1. Web Audio Synthesizer (real-time waveform generation)
     2. Web Speech API (hands-free vocal coaching)
     3. Metabolic Equivalent of Task (MET) Calorie Calculator
     4. Dynamic Routine Switching & Muscle Cue Engine
     5. HTML5 Canvas Confetti Particle Physics
     6. Client-Side Persistent History via Web Storage API (localStorage)
   ============================================================ */

// ---------------- App State ----------------
const state = {
  selectedRoutineKey: "full_body",
  currentExerciseIndex: 0,
  currentSet: 1,
  currentReps: 0,
  holdSecondsLeft: 0,
  holdInterval: null,
  holdRunning: false,
  restSecondsLeft: 0,
  restInterval: null,
  restTotalSeconds: 30,
  restStartedAt: null,
  sessionStartTime: null,
  activeSeconds: 0,
  activeTimerInterval: null,
  isPaused: false,
  soundEnabled: true,
  voiceEnabled: true,
  lang: "en", // "en" | "hi"
  caloriesBurned: 0,
  log: [], // { exerciseId, exerciseName, set, reps, isHold, durationSec, met }
  feedbackTimeout: null,
};

// ---------------- DOM References ----------------
const screens = {
  start: document.getElementById("screen-start"),
  player: document.getElementById("screen-player"),
  rest: document.getElementById("screen-rest"),
  summary: document.getElementById("screen-summary"),
};

function showScreen(name) {
  Object.values(screens).forEach((s) => {
    if (s.classList.contains("active")) {
      s.classList.remove("active");
    }
  });
  screens[name].classList.add("active");
}

// ---------------- Web Audio API Synthesizer ----------------
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function playSynthTone(freq, type = "sine", duration = 0.12, gainLevel = 0.15) {
  if (!state.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(gainLevel, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // AudioContext blocked or not supported
  }
}

// Sound effects
function soundRepClick() {
  playSynthTone(580, "triangle", 0.08, 0.2);
}
function soundTargetHit() {
  playSynthTone(784, "sine", 0.18, 0.25);
  setTimeout(() => playSynthTone(1046, "sine", 0.22, 0.25), 90);
}
function soundCountdownTick() {
  playSynthTone(440, "sine", 0.06, 0.18);
}
function soundGoChime() {
  playSynthTone(523, "sine", 0.12, 0.2);
  setTimeout(() => playSynthTone(659, "sine", 0.15, 0.25), 100);
  setTimeout(() => playSynthTone(1046, "sine", 0.3, 0.3), 220);
}
function soundVictoryFanfare() {
  const notes = [523, 659, 784, 1046];
  notes.forEach((note, idx) => {
    setTimeout(() => playSynthTone(note, "triangle", 0.25, 0.25), idx * 130);
  });
}

// ---------------- Web Speech API (Voice Coach) ----------------
function speakCoach(text) {
  if (!state.voiceEnabled || !window.speechSynthesis) return;
  try {
    window.speechSynthesis.cancel(); // cancel previous utterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.05;
    utterance.pitch = 1.0;
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  } catch (e) {
    // Voice speech fail-safe
  }
}

// ---------------- Routine Helper ----------------
function getActiveRoutine() {
  return WORKOUT_ROUTINES[state.selectedRoutineKey] || WORKOUT_ROUTINES.full_body;
}

function getActiveExercises() {
  return getActiveRoutine().exercises;
}

function currentExercise() {
  const list = getActiveExercises();
  return list[state.currentExerciseIndex] || list[0];
}

// ---------------- START SCREEN LOGIC ----------------
function renderStartScreen() {
  const routine = getActiveRoutine();

  document.getElementById("start-routine-title").innerHTML = routine.name.replace(" ", "<br/>");
  document.getElementById("start-routine-sub").textContent = routine.tagline;

  document.getElementById("meta-level").textContent = `⚡ ${routine.level}`;
  document.getElementById("meta-duration").textContent = `⏱️ ${routine.durationEst}`;
  document.getElementById("meta-calories").textContent = `🔥 ${routine.calorieEst}`;
  document.getElementById("meta-count").textContent = `📋 ${routine.exercises.length} Exercises`;

  const list = document.getElementById("start-exercise-list");
  list.innerHTML = routine.exercises
    .map((ex) => {
      const detail = ex.isHold ? `${ex.holdSeconds}s hold` : `${ex.targetReps} reps`;
      return `
        <li>
          <span>${ex.name}</span>
          <span class="ex-detail">${detail} &bull; ${ex.targetSets} sets</span>
          <span class="ex-muscle">${ex.muscle}</span>
        </li>
      `;
    })
    .join("");
}

// Routine tab switching
document.querySelectorAll(".routine-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".routine-tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    state.selectedRoutineKey = tab.dataset.routine;
    renderStartScreen();
    playSynthTone(480, "sine", 0.08, 0.12);
  });
});

// Language switcher
document.getElementById("lang-en").addEventListener("click", () => {
  state.lang = "en";
  document.getElementById("lang-en").classList.add("active");
  document.getElementById("lang-hi").classList.remove("active");
});
document.getElementById("lang-hi").addEventListener("click", () => {
  state.lang = "hi";
  document.getElementById("lang-hi").classList.add("active");
  document.getElementById("lang-en").classList.remove("active");
});

// Topbar Sound & Voice Toggles
const btnSound = document.getElementById("btn-toggle-sound");
btnSound.addEventListener("click", () => {
  state.soundEnabled = !state.soundEnabled;
  btnSound.classList.toggle("active", state.soundEnabled);
  document.getElementById("sound-icon").textContent = state.soundEnabled ? "🔊" : "🔇";
  if (state.soundEnabled) playSynthTone(660, "sine", 0.1, 0.15);
});

const btnVoice = document.getElementById("btn-toggle-voice");
btnVoice.addEventListener("click", () => {
  state.voiceEnabled = !state.voiceEnabled;
  btnVoice.classList.toggle("active", state.voiceEnabled);
  if (state.voiceEnabled) speakCoach("Voice coach enabled.");
});

// Start Workout Button
document.getElementById("btn-start-workout").addEventListener("click", () => {
  getAudioContext(); // prime audio on user gesture
  const routine = getActiveRoutine();
  WORKOUT_ROUTINE = routine.exercises; // align backward compatibility

  state.sessionStartTime = Date.now();
  state.activeSeconds = 0;
  state.caloriesBurned = 0;
  state.currentExerciseIndex = 0;
  state.currentSet = 1;
  state.log = [];
  state.isPaused = false;

  startActiveTimer();
  loadExercise();
  showScreen("player");

  soundGoChime();
  speakCoach(`Starting ${routine.name}. First exercise is ${currentExercise().name}.`);
});

// ---------------- ACTIVE WORKOUT TIMER & CALORIE METER ----------------
function startActiveTimer() {
  clearInterval(state.activeTimerInterval);
  state.activeTimerInterval = setInterval(() => {
    if (state.isPaused) return;

    state.activeSeconds++;
    document.getElementById("val-active-time").textContent = formatTime(state.activeSeconds);

    // Dynamic MET calorie calculation:
    // kcal per sec = (MET * 3.5 * 70kg / 200) / 60
    const ex = currentExercise();
    const met = ex && ex.met ? ex.met : 7.0;
    const calsPerSec = (met * 3.5 * 70) / (200 * 60);
    state.caloriesBurned += calsPerSec;
    document.getElementById("val-calories").textContent = Math.round(state.caloriesBurned);
  }, 1000);
}

// Pause / Resume Workout
const btnPause = document.getElementById("btn-pause-workout");
btnPause.addEventListener("click", () => {
  state.isPaused = !state.isPaused;
  btnPause.textContent = state.isPaused ? "▶️ Resume" : "⏸️ Pause";
  btnPause.style.color = state.isPaused ? "var(--warn)" : "var(--text-dim)";
  if (state.isPaused) {
    speakCoach("Workout paused.");
  } else {
    speakCoach("Resuming workout.");
  }
});

// ---------------- PLAYER SCREEN LOGIC ----------------
function loadExercise() {
  const ex = currentExercise();
  const routine = getActiveRoutine();
  state.currentReps = 0;

  document.getElementById("player-routine-indicator").textContent = routine.name;
  document.getElementById("exercise-name").textContent = ex.name;
  document.getElementById("exercise-muscle").textContent = `Target: ${ex.muscle}`;
  document.getElementById("exercise-instructions").textContent = ex.instructions;
  document.getElementById("exercise-icon").innerHTML = EXERCISE_ICONS[ex.icon] || "";

  // Render coaching cues
  const cuesContainer = document.getElementById("cue-chips");
  if (ex.cues && ex.cues.length) {
    cuesContainer.innerHTML = ex.cues.map((c) => `<span class="cue-chip">🎯 ${c}</span>`).join("");
  } else {
    cuesContainer.innerHTML = "";
  }

  // Set & progress labels
  const totalExercises = getActiveExercises().length;
  document.getElementById("exercise-index-label").textContent = `Exercise ${state.currentExerciseIndex + 1} / ${totalExercises}`;
  document.getElementById("set-index-label").textContent = `Set ${state.currentSet} / ${ex.targetSets}`;

  // Progress Bar
  const progressPct = ((state.currentExerciseIndex + (state.currentSet - 1) / ex.targetSets) / totalExercises) * 100;
  document.getElementById("player-progress-fill").style.width = `${progressPct}%`;

  hideFeedback();

  if (ex.isHold) {
    document.getElementById("rep-mode").style.display = "none";
    document.getElementById("hold-mode").style.display = "flex";
    setupHoldMode(ex);
  } else {
    document.getElementById("rep-mode").style.display = "flex";
    document.getElementById("hold-mode").style.display = "none";
    document.getElementById("rep-counter").textContent = "0";
    document.getElementById("rep-target").textContent = `Target: ${ex.targetReps}`;
    resetRepCounterColor();
  }
}

// Rep buttons
document.getElementById("btn-rep-plus").addEventListener("click", () => {
  state.currentReps++;
  bumpRepCounter();
  soundRepClick();
});

document.getElementById("btn-rep-minus").addEventListener("click", () => {
  state.currentReps = Math.max(0, state.currentReps - 1);
  bumpRepCounter();
  soundRepClick();
});

// Quick action buttons
document.getElementById("btn-rep-quick-target").addEventListener("click", () => {
  const ex = currentExercise();
  state.currentReps = ex.targetReps;
  bumpRepCounter();
  soundTargetHit();
});
document.getElementById("btn-rep-quick-plus5").addEventListener("click", () => {
  state.currentReps += 5;
  bumpRepCounter();
  soundRepClick();
});

function resetRepCounterColor() {
  const el = document.getElementById("rep-counter");
  el.style.color = "var(--accent)";
  el.style.textShadow = "0 0 36px rgba(205,251,70,0.35)";
}

function bumpRepCounter() {
  const el = document.getElementById("rep-counter");
  el.textContent = state.currentReps;
  el.classList.remove("bump");
  void el.offsetWidth;
  el.classList.add("bump");

  const ex = currentExercise();
  if (!ex.isHold && state.currentReps >= ex.targetReps) {
    el.style.color = "var(--good)";
    el.style.textShadow = "0 0 40px rgba(111,227,163,0.5)";
    if (state.currentReps === ex.targetReps) {
      soundTargetHit();
    }
  } else {
    resetRepCounterColor();
  }
}

// Skip exercise navigation
document.getElementById("btn-prev-exercise").addEventListener("click", () => {
  if (state.currentExerciseIndex > 0) {
    state.currentExerciseIndex--;
    state.currentSet = 1;
    loadExercise();
    playSynthTone(400, "sine", 0.08, 0.15);
  }
});
document.getElementById("btn-next-exercise").addEventListener("click", () => {
  const total = getActiveExercises().length;
  if (state.currentExerciseIndex < total - 1) {
    state.currentExerciseIndex++;
    state.currentSet = 1;
    loadExercise();
    playSynthTone(500, "sine", 0.08, 0.15);
  }
});

// Hold mode handling
function setupHoldMode(ex) {
  clearInterval(state.holdInterval);
  state.holdRunning = false;
  state.holdSecondsLeft = ex.holdSeconds;
  document.getElementById("btn-hold-toggle").textContent = "Start Hold";
  updateHoldRing(1);
  document.getElementById("hold-ring-time").textContent = formatTime(state.holdSecondsLeft);
}

document.getElementById("btn-hold-toggle").addEventListener("click", () => {
  const ex = currentExercise();
  if (state.holdRunning) {
    // Pause hold
    clearInterval(state.holdInterval);
    state.holdRunning = false;
    document.getElementById("btn-hold-toggle").textContent = "Resume Hold";
    return;
  }

  state.holdRunning = true;
  document.getElementById("btn-hold-toggle").textContent = "Holding… (Pause)";
  speakCoach(`Hold for ${state.holdSecondsLeft} seconds.`);

  state.holdInterval = setInterval(() => {
    if (state.isPaused) return;

    state.holdSecondsLeft--;
    const fraction = state.holdSecondsLeft / ex.holdSeconds;
    updateHoldRing(fraction);
    document.getElementById("hold-ring-time").textContent = formatTime(state.holdSecondsLeft);

    if (state.holdSecondsLeft <= 3 && state.holdSecondsLeft > 0) {
      soundCountdownTick();
    }

    if (state.holdSecondsLeft <= 0) {
      clearInterval(state.holdInterval);
      state.holdRunning = false;
      state.currentReps = 1; // Completed
      document.getElementById("btn-hold-toggle").textContent = "Hold Complete ✓";
      soundGoChime();
      speakCoach("Great hold!");
    }
  }, 1000);
});

document.getElementById("btn-hold-reset").addEventListener("click", () => {
  const ex = currentExercise();
  setupHoldMode(ex);
});

function updateHoldRing(fraction) {
  const circumference = 440;
  document.getElementById("hold-ring-fg").style.strokeDashoffset = circumference * (1 - fraction);
}

// Log set button
document.getElementById("btn-log-set").addEventListener("click", () => {
  const ex = currentExercise();

  if (ex.isHold && state.currentReps === 0 && state.holdSecondsLeft > ex.holdSeconds * 0.5) {
    showFeedback({
      tone: "warn",
      message: "Complete at least half of the hold before logging!",
      messageHi: "Hold timer thoda aur pura karo set log karne ke liye."
    });
    return;
  }

  state.log.push({
    exerciseId: ex.id,
    exerciseName: ex.name,
    set: state.currentSet,
    reps: ex.isHold ? 1 : state.currentReps,
    isHold: !!ex.isHold,
    met: ex.met || 7.0,
  });

  const feedback = ex.isHold
    ? {
        tone: "good",
        message: "Hold logged! Outstanding core brace and stability.",
        messageHi: "Hold complete — core strong rakhi!"
      }
    : getFormFeedback(ex, state.currentReps);

  showFeedback(feedback);

  if (state.voiceEnabled && feedback.tone === "great") {
    speakCoach("Outstanding set!");
  }

  clearInterval(state.holdInterval);
  setTimeout(() => goToRestOrNext(ex), 850);
});

function goToRestOrNext(ex) {
  const totalExercises = getActiveExercises().length;
  const isLastSetOfExercise = state.currentSet >= ex.targetSets;
  const isLastExercise = state.currentExerciseIndex >= totalExercises - 1;

  if (isLastSetOfExercise && isLastExercise) {
    finishSession();
    return;
  }

  startRest(ex);
}

// ---------------- REST SCREEN LOGIC ----------------
function startRest(ex) {
  state.restTotalSeconds = ex.restSeconds || 30;
  state.restSecondsLeft = state.restTotalSeconds;
  state.restStartedAt = Date.now();

  const circumference = 660;
  document.getElementById("rest-ring-fg").style.strokeDasharray = circumference;
  document.getElementById("rest-ring-fg").style.strokeDashoffset = 0;
  document.getElementById("rest-ring-time").textContent = formatTime(state.restSecondsLeft);

  const isLastSetOfExercise = state.currentSet >= ex.targetSets;
  let nextLabel;
  const exercises = getActiveExercises();
  if (isLastSetOfExercise) {
    const nextEx = exercises[state.currentExerciseIndex + 1];
    nextLabel = `Next: ${nextEx.name} — Set 1 of ${nextEx.targetSets}`;
  } else {
    nextLabel = `Next: ${ex.name} — Set ${state.currentSet + 1} of ${ex.targetSets}`;
  }
  document.getElementById("rest-next-label").textContent = nextLabel;

  showScreen("rest");
  speakCoach(`Take a ${state.restTotalSeconds} second rest.`);

  clearInterval(state.restInterval);
  state.restInterval = setInterval(() => {
    if (state.isPaused) return;

    state.restSecondsLeft--;
    const fraction = 1 - state.restSecondsLeft / state.restTotalSeconds;
    document.getElementById("rest-ring-fg").style.strokeDashoffset = circumference * fraction;
    document.getElementById("rest-ring-time").textContent = formatTime(state.restSecondsLeft);

    if (state.restSecondsLeft <= 3 && state.restSecondsLeft > 0) {
      soundCountdownTick();
    }

    if (state.restSecondsLeft <= 0) {
      endRest(ex);
    }
  }, 1000);
}

// Adjust rest time
document.getElementById("btn-rest-minus10").addEventListener("click", () => {
  state.restSecondsLeft = Math.max(5, state.restSecondsLeft - 10);
  document.getElementById("rest-ring-time").textContent = formatTime(state.restSecondsLeft);
});
document.getElementById("btn-rest-plus15").addEventListener("click", () => {
  state.restSecondsLeft += 15;
  state.restTotalSeconds += 15;
  document.getElementById("rest-ring-time").textContent = formatTime(state.restSecondsLeft);
});

document.getElementById("btn-skip-rest").addEventListener("click", () => {
  const ex = currentExercise();
  endRest(ex);
});

function endRest(ex) {
  clearInterval(state.restInterval);
  const restTaken = Math.round((Date.now() - state.restStartedAt) / 1000);

  const isLastSetOfExercise = state.currentSet >= ex.targetSets;
  if (isLastSetOfExercise) {
    state.currentExerciseIndex++;
    state.currentSet = 1;
  } else {
    state.currentSet++;
  }

  loadExercise();
  showScreen("player");
  soundGoChime();

  const nextEx = currentExercise();
  speakCoach(`Set ${state.currentSet} of ${nextEx.name}. Go!`);

  const restFeedback = getRestFeedback(ex, restTaken);
  showFeedback(restFeedback);
}

// ---------------- FEEDBACK TOAST ----------------
function showFeedback(feedback) {
  const toast = document.getElementById("feedback-toast");
  const msg = document.getElementById("feedback-message");
  const icon = document.getElementById("feedback-icon");

  toast.className = "feedback-toast show tone-" + feedback.tone;
  msg.textContent = state.lang === "hi" && feedback.messageHi ? feedback.messageHi : feedback.message;

  if (feedback.tone === "warn") icon.textContent = "!";
  else if (feedback.tone === "neutral") icon.textContent = "i";
  else icon.textContent = "✓";

  clearTimeout(state.feedbackTimeout);
  state.feedbackTimeout = setTimeout(hideFeedback, 3400);
}

function hideFeedback() {
  const toast = document.getElementById("feedback-toast");
  toast.className = "feedback-toast";
}

// ---------------- SUMMARY SCREEN ----------------
function finishSession() {
  clearInterval(state.activeTimerInterval);
  const totalTimeSec = state.activeSeconds || Math.round((Date.now() - state.sessionStartTime) / 1000);
  const totalReps = state.log.reduce((sum, entry) => sum + (entry.isHold ? 0 : entry.reps), 0);
  const totalSets = state.log.length;
  const routine = getActiveRoutine();
  const totalCalories = Math.round(state.caloriesBurned) || Math.round((totalTimeSec / 60) * 8);

  document.getElementById("stat-total-reps").textContent = totalReps;
  document.getElementById("stat-total-sets").textContent = totalSets;
  document.getElementById("stat-total-time").textContent = formatTime(totalTimeSec);
  document.getElementById("stat-total-calories").textContent = totalCalories;
  document.getElementById("summary-routine-name").textContent = `You conquered the ${routine.name} with consistent discipline.`;

  renderBreakdown();
  saveSessionToLocalStorage(routine.name, totalReps, totalSets, totalTimeSec, totalCalories);

  showScreen("summary");
  soundVictoryFanfare();
  speakCoach("Workout completed! Excellent performance.");
  launchConfetti();
}

function renderBreakdown() {
  const container = document.getElementById("summary-breakdown");
  const grouped = {};
  state.log.forEach((entry) => {
    if (!grouped[entry.exerciseName]) grouped[entry.exerciseName] = 0;
    grouped[entry.exerciseName] += entry.isHold ? 1 : entry.reps;
  });

  const maxVal = Math.max(...Object.values(grouped), 1);

  container.innerHTML = Object.entries(grouped)
    .map(([name, val]) => {
      const pct = Math.round((val / maxVal) * 100);
      return `
        <div class="breakdown-row">
          <span class="breakdown-name">${name}</span>
          <span class="breakdown-bar-track">
            <span class="breakdown-bar-fill" style="width:${pct}%;"></span>
          </span>
          <span class="breakdown-value">${val}</span>
        </div>
      `;
    })
    .join("");
}

document.getElementById("btn-restart").addEventListener("click", () => {
  showScreen("start");
});
document.getElementById("btn-summary-history").addEventListener("click", () => {
  openHistoryModal();
});

// ---------------- LOCALSTORAGE CLIENT PERSISTENCE ----------------
function saveSessionToLocalStorage(routineName, totalReps, totalSets, totalTimeSec, calories) {
  try {
    const history = JSON.parse(localStorage.getItem("pulse_sessions") || "[]");
    history.unshift({
      id: "session_" + Date.now(),
      date: new Date().toISOString(),
      routineName: routineName || "Full-Body Circuit",
      totalReps,
      totalSets,
      totalTimeSec,
      calories,
    });
    localStorage.setItem("pulse_sessions", JSON.stringify(history));
  } catch (e) {
    console.warn("Could not write to localStorage:", e);
  }
}

function getStoredSessions() {
  try {
    return JSON.parse(localStorage.getItem("pulse_sessions") || "[]");
  } catch (e) {
    return [];
  }
}

// ---------------- HISTORY MODAL LOGIC ----------------
const modalHistory = document.getElementById("modal-history");

function openHistoryModal() {
  const sessions = getStoredSessions();
  const list = document.getElementById("history-list");

  const totalWorkouts = sessions.length;
  const lifetimeReps = sessions.reduce((sum, s) => sum + (s.totalReps || 0), 0);
  const lifetimeCalories = sessions.reduce((sum, s) => sum + (s.calories || 0), 0);

  document.getElementById("hist-total-sessions").textContent = totalWorkouts;
  document.getElementById("hist-all-reps").textContent = lifetimeReps;
  document.getElementById("hist-all-calories").textContent = lifetimeCalories;

  if (sessions.length === 0) {
    list.innerHTML = `
      <div class="history-empty">
        <p>No workout sessions recorded yet.</p>
        <p style="font-size:12px; margin-top:6px; color:var(--text-muted);">
          Complete a workout session to see real-time localStorage history!
        </p>
      </div>
    `;
  } else {
    list.innerHTML = sessions
      .map((s) => {
        const d = new Date(s.date);
        const dateStr = d.toLocaleDateString(undefined, {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
        return `
          <div class="history-item">
            <div class="hist-info">
              <span class="hist-routine">${s.routineName || "Workout Routine"}</span>
              <span class="hist-date">${dateStr}</span>
            </div>
            <div class="hist-stats">
              <span class="hist-reps">${s.totalReps} Reps &bull; ${s.calories || 0} kcal</span>
              <span class="hist-time">${formatTime(s.totalTimeSec)} active &bull; ${s.totalSets} sets</span>
            </div>
          </div>
        `;
      })
      .join("");
  }

  modalHistory.classList.add("active");
}

document.getElementById("btn-open-history").addEventListener("click", openHistoryModal);
document.getElementById("btn-close-history").addEventListener("click", () => modalHistory.classList.remove("active"));
document.getElementById("btn-dismiss-history").addEventListener("click", () => modalHistory.classList.remove("active"));

document.getElementById("btn-clear-history").addEventListener("click", () => {
  if (confirm("Are you sure you want to clear your local workout history?")) {
    localStorage.removeItem("pulse_sessions");
    openHistoryModal();
  }
});

// ---------------- FACULTY / INFO MODAL LOGIC ----------------
const modalInfo = document.getElementById("modal-info");
document.getElementById("btn-open-info").addEventListener("click", () => modalInfo.classList.add("active"));
document.getElementById("btn-close-info").addEventListener("click", () => modalInfo.classList.remove("active"));
document.getElementById("btn-dismiss-info").addEventListener("click", () => modalInfo.classList.remove("active"));

// Close modals on clicking outside overlay
[modalHistory, modalInfo].forEach((m) => {
  m.addEventListener("click", (e) => {
    if (e.target === m) m.classList.remove("active");
  });
});

// ---------------- HTML5 CANVAS CONFETTI PHYSICS ----------------
function launchConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettiCount = 100;
  const confetti = [];
  const colors = ["#cdfb46", "#6fe3a3", "#ffffff", "#ff8a5c", "#60cdff"];

  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      x: canvas.width / 2 + (Math.random() * 200 - 100),
      y: canvas.height * 0.4 + (Math.random() * 100 - 50),
      w: Math.random() * 10 + 6,
      h: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.9) * 18,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 12,
      opacity: 1,
    });
  }

  let animationFrame;
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    confetti.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.45; // gravity
      p.vx *= 0.98; // air drag
      p.rotation += p.rotationSpeed;
      p.opacity -= 0.007;

      if (p.opacity > 0 && p.y < canvas.height + 20) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
    });

    if (alive) {
      animationFrame = requestAnimationFrame(update);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  update();
}

// ---------------- Helpers ----------------
function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = Math.floor(totalSeconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

// Initialize start view on boot
renderStartScreen();
