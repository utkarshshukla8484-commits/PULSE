/* ============================================================
   data.js — PULSE Fitness Intelligence & Workout Library
   ------------------------------------------------------------
   Zero-Backend Architecture:
   This file acts as the client-side data store & rule-based
   feedback engine. All routine definitions, MET calorie factors,
   and dynamic coaching analytics execute directly in browser memory.
   ============================================================ */

const WORKOUT_ROUTINES = {
  full_body: {
    id: "full_body",
    name: "Full-Body Circuit",
    tagline: "Total strength & metabolic conditioning",
    level: "All Levels",
    durationEst: "~12 mins",
    calorieEst: "~95 kcal",
    exercises: [
      {
        id: "pushups",
        name: "Push-Ups",
        icon: "pushup",
        targetReps: 12,
        targetSets: 3,
        restSeconds: 30,
        met: 8.0,
        muscle: "Chest & Triceps",
        instructions: "Place hands shoulder-width apart, keep body in a rigid plank line. Lower chest until it hovers just above the ground and drive up explosively.",
        cues: ["Elbows at 45° angle", "Squeeze glutes & core", "Exhale on press"]
      },
      {
        id: "squats",
        name: "Air Squats",
        icon: "squat",
        targetReps: 15,
        targetSets: 3,
        restSeconds: 30,
        met: 7.5,
        muscle: "Quads & Glutes",
        instructions: "Stand with feet shoulder-width apart. Send hips back and down like sitting into a low chair, keep chest upright, and stand up.",
        cues: ["Knees track over toes", "Weight in heels & mid-foot", "Full hip extension"]
      },
      {
        id: "lunges",
        name: "Alternating Lunges",
        icon: "lunge",
        targetReps: 12,
        targetSets: 3,
        restSeconds: 30,
        met: 7.0,
        muscle: "Hamstrings & Balance",
        instructions: "Step forward with one leg, lower hips until both knees are bent at roughly 90 degrees. Push back up through front heel.",
        cues: ["Torso tall & upright", "Front knee behind toe", "Light tap of rear knee"]
      },
      {
        id: "plank",
        name: "Plank Hold",
        icon: "plank",
        targetReps: 1,
        targetSets: 3,
        restSeconds: 20,
        isHold: true,
        holdSeconds: 40,
        met: 4.5,
        muscle: "Core Stability",
        instructions: "Rest on forearms and toes. Maintain a straight horizontal line from shoulders to ankles without sagging hips.",
        cues: ["Pull belly button to spine", "Don't let hips arch", "Breathe steadily"]
      },
      {
        id: "jjacks",
        name: "Jumping Jacks",
        icon: "jack",
        targetReps: 25,
        targetSets: 3,
        restSeconds: 25,
        met: 8.5,
        muscle: "Cardio & Calves",
        instructions: "Jump feet wide while raising arms overhead, then instantly jump back to starting position in a brisk rhythm.",
        cues: ["Land softly on balls of feet", "Synchronize arms & legs", "Steady breathing"]
      },
      {
        id: "crunches",
        name: "Bicycle Crunches",
        icon: "crunch",
        targetReps: 16,
        targetSets: 3,
        restSeconds: 25,
        met: 6.5,
        muscle: "Obliques & Lower Abs",
        instructions: "Lie back, rotate opposite elbow to touch opposite knee while extending the other leg out straight in a fluid bicycle pedal motion.",
        cues: ["Rotate from core, not neck", "Extend opposite leg 45°", "Slow controlled tempo"]
      }
    ]
  },

  upper_body: {
    id: "upper_body",
    name: "Upper Body Blast",
    tagline: "Hypertrophy for chest, shoulders & arms",
    level: "Intermediate",
    durationEst: "~10 mins",
    calorieEst: "~85 kcal",
    exercises: [
      {
        id: "pushups",
        name: "Standard Push-Ups",
        icon: "pushup",
        targetReps: 14,
        targetSets: 3,
        restSeconds: 30,
        met: 8.0,
        muscle: "Chest & Shoulders",
        instructions: "Shoulder-width grip, full depth chest to floor, drive lock-out at top.",
        cues: ["Core locked", "Neutral cervical spine", "Controlled descent"]
      },
      {
        id: "shouldertap",
        name: "Plank Shoulder Taps",
        icon: "shouldertap",
        targetReps: 20,
        targetSets: 3,
        restSeconds: 25,
        met: 6.5,
        muscle: "Shoulders & Anti-Rotation",
        instructions: "In high plank position, tap left shoulder with right hand, then switch sides while preventing hips from swaying.",
        cues: ["Wide feet base for stability", "Zero hip rocking", "Solid hand push"]
      },
      {
        id: "plank",
        name: "Isometric Forearm Plank",
        icon: "plank",
        targetReps: 1,
        targetSets: 3,
        restSeconds: 20,
        isHold: true,
        holdSeconds: 45,
        met: 4.5,
        muscle: "Core & Shoulder Girdle",
        instructions: "Pack shoulders down, engage lats, and hold firm neutral posture.",
        cues: ["Active shoulder protraction", "Breathe into ribcage", "Squeeze quads"]
      },
      {
        id: "armcircles",
        name: "Deltoid Arm Rotations",
        icon: "armcircles",
        targetReps: 30,
        targetSets: 3,
        restSeconds: 20,
        met: 5.0,
        muscle: "Shoulder Endurance",
        instructions: "Arms held straight out at T-position, draw tight circular rotations forward and reverse.",
        cues: ["Keep arms parallel to ground", "Pinch shoulder blades", "No sagging"]
      }
    ]
  },

  core_abs: {
    id: "core_abs",
    name: "Core & Abs Shredder",
    tagline: "Targeted abdominal stability & flexion",
    level: "Intense",
    durationEst: "~9 mins",
    calorieEst: "~75 kcal",
    exercises: [
      {
        id: "plank",
        name: "High Plank Hold",
        icon: "plank",
        targetReps: 1,
        targetSets: 3,
        restSeconds: 20,
        isHold: true,
        holdSeconds: 50,
        met: 5.0,
        muscle: "Transverse Abdominis",
        instructions: "Lock in full core bracing, distribute weight evenly through palms and toes.",
        cues: ["Tuck pelvis slightly", "Push floor away", "Firm glute squeeze"]
      },
      {
        id: "crunches",
        name: "Bicycle Crunches",
        icon: "crunch",
        targetReps: 20,
        targetSets: 3,
        restSeconds: 25,
        met: 7.0,
        muscle: "Internal/External Obliques",
        instructions: "Slow, focused rotation bringing elbow toward contralateral knee.",
        cues: ["Pause at peak contraction", "Do not pull cervical spine", "Full extension"]
      },
      {
        id: "legraise",
        name: "Lying Leg Raises",
        icon: "legraise",
        targetReps: 12,
        targetSets: 3,
        restSeconds: 30,
        met: 6.0,
        muscle: "Lower Abdominals",
        instructions: "Lie flat with hands under glutes. Lift straight legs to 90 degrees and lower slowly without touching floor.",
        cues: ["Lower back pressed to floor", "Controlled descent", "Toes pointed up"]
      },
      {
        id: "climber",
        name: "Mountain Climbers",
        icon: "climber",
        targetReps: 24,
        targetSets: 3,
        restSeconds: 25,
        met: 8.5,
        muscle: "Metabolic Core & Hip Flexors",
        instructions: "From high plank, drive knees forward toward chest in an alternating rapid sprint pace.",
        cues: ["Hips stay low and level", "Explosive knee drive", "Rhythmic breathing"]
      }
    ]
  },

  lower_body: {
    id: "lower_body",
    name: "Legs & Glutes Power",
    tagline: "Quad, hamstring and posterior chain focus",
    level: "Intermediate",
    durationEst: "~11 mins",
    calorieEst: "~90 kcal",
    exercises: [
      {
        id: "squats",
        name: "Deep Tempo Squats",
        icon: "squat",
        targetReps: 16,
        targetSets: 3,
        restSeconds: 30,
        met: 7.8,
        muscle: "Quads & Glute Max",
        instructions: "3 seconds down, 1 second pause at bottom parallel depth, explode upward.",
        cues: ["Chest proud", "Drive knees outward", "Drive through ground"]
      },
      {
        id: "lunges",
        name: "Walking / Stationary Lunges",
        icon: "lunge",
        targetReps: 14,
        targetSets: 3,
        restSeconds: 30,
        met: 7.5,
        muscle: "Glutes & Hamstrings",
        instructions: "Deep 90-degree bend with front shin nearly vertical, power through front heel.",
        cues: ["Keep core braced", "Vertical torso angle", "Explosive rebound"]
      },
      {
        id: "wallsit",
        name: "Wall Sit Hold",
        icon: "wallsit",
        targetReps: 1,
        targetSets: 3,
        restSeconds: 25,
        isHold: true,
        holdSeconds: 40,
        met: 5.5,
        muscle: "Isometric Quad Burn",
        instructions: "Back flat against wall, slide down until thighs are parallel to ground at 90 degrees.",
        cues: ["Hands off thighs", "Knees above ankles", "Breathe through burn"]
      },
      {
        id: "highknees",
        name: "High Knee Sprint",
        icon: "highknees",
        targetReps: 30,
        targetSets: 3,
        restSeconds: 25,
        met: 9.0,
        muscle: "Calves & Explosive Power",
        instructions: "Drive knees up to waist height rapidly while pumping opposite arms.",
        cues: ["Spring on balls of feet", "Keep chest upright", "Sprint pace"]
      }
    ]
  }
};

// Default fallback routine pointer
let WORKOUT_ROUTINE = WORKOUT_ROUTINES.full_body.exercises;

/* ------------------------------------------------------------
   RULE-BASED FEEDBACK & COACHING ENGINE
   ------------------------------------------------------------
   Deterministic heuristic model evaluating user effort vs target.
   Provides real-time motivational cues and physiological feedback.
   ------------------------------------------------------------ */
function getFormFeedback(exercise, repsLogged) {
  const target = exercise.targetReps;
  const ratio = target > 0 ? repsLogged / target : 1;

  if (repsLogged <= 0) {
    return {
      tone: "warn",
      message: "Set skipped or 0 reps logged — even a partial set promotes muscle stimulus!",
      messageHi: "Set skip mat karo — thoda bhi try karna fayda karta hai."
    };
  }
  if (ratio < 0.6) {
    return {
      tone: "warn",
      message: `Under target (${repsLogged}/${target}). Lower tempo next set to ensure full range of motion.`,
      messageHi: "Thoda kam ho gaya — agle set mein pace slow rakh ke poore reps try karo."
    };
  }
  if (ratio < 0.9) {
    return {
      tone: "neutral",
      message: `Very close to target! Lock in your breathing and push for 1–2 more reps next set.`,
      messageHi: "Close hai target ke! Form pe focus rakhte hue 1-2 reps aur push karo."
    };
  }
  if (ratio <= 1.15) {
    return {
      tone: "good",
      message: `Solid set! Excellent execution right on target (${repsLogged} reps). Maintain this cadence!`,
      messageHi: "Solid set! Target ke bilkul aas-paas — form consistent rakho."
    };
  }
  return {
    tone: "great",
    message: `Outstanding! Exceeded target (${repsLogged}/${target} reps). Progressive overload unlocked!`,
    messageHi: "Target se zyada! Agli baar thoda difficulty badha sakte ho."
  };
}

function getRestFeedback(exercise, restTakenSeconds) {
  const recommended = exercise.restSeconds;
  if (restTakenSeconds < recommended * 0.5) {
    return {
      tone: "warn",
      message: `Rest cut short (${restTakenSeconds}s vs ${recommended}s recommended). Allow ATP-CP energy replenishment.`,
      messageHi: "Bahut jaldi wapas aa gaye — muscles ko thoda aur rest do."
    };
  }
  if (restTakenSeconds > recommended * 1.8) {
    return {
      tone: "neutral",
      message: `Extended rest (${restTakenSeconds}s). Stay warm and keep your heart rate primed for the next set!`,
      messageHi: "Lamba rest ho gaya — momentum banaye rakhne ke liye thoda jaldi shuru karo."
    };
  }
  return {
    tone: "good",
    message: `Optimal recovery timing (~${restTakenSeconds}s). Heart rate primed for peak output!`,
    messageHi: "Rest timing perfect thi — isi rhythm ko maintain rakho."
  };
}
