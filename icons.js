/* ============================================================
   icons.js — Modern Illustrated Athletic Avatars (v3.0)
   ------------------------------------------------------------
   Flat-design athletic characters with clothing, sneakers,
   headbands, and exercise mats. Biomechanically coordinated
   for smooth frame-by-frame exercise loops in style.css.
   ============================================================ */

const EXERCISE_ICONS = {
  // 1. PUSH-UPS
  pushup: `
    <g class="avatar avatar-pushup">
      <!-- Ground Floor Mat -->
      <rect x="15" y="152" width="170" height="6" rx="3" fill="#141c14" stroke="#253523" stroke-width="1.5" />
      <ellipse cx="100" cy="154" rx="65" ry="4" fill="rgba(0,0,0,0.45)" class="anim-pushup-shadow" />

      <g class="pushup-body-rig">
        <!-- Back leg & sneaker -->
        <g class="pushup-leg-back">
          <line x1="125" y1="124" x2="160" y2="148" stroke="#121812" stroke-width="11" stroke-linecap="round" />
          <!-- Sneaker back -->
          <path d="M156,144 L168,149 L165,153 L152,151 Z" fill="#ffffff" />
          <path d="M157,144 L166,148 L163,149 L154,147 Z" fill="#202420" />
          <circle cx="166" cy="149" r="2" fill="#cdfb46" />
        </g>

        <!-- Torso & Athletic Tank Top -->
        <g class="pushup-torso">
          <line x1="62" y1="110" x2="128" y2="126" stroke="#1b2419" stroke-width="20" stroke-linecap="round" />
          <!-- Neon Tank Stripe -->
          <line x1="72" y1="108" x2="118" y2="122" stroke="#cdfb46" stroke-width="2.5" stroke-linecap="round" />
        </g>

        <!-- Front leg & sneaker -->
        <g class="pushup-leg-front">
          <line x1="122" y1="126" x2="155" y2="150" stroke="#182218" stroke-width="12" stroke-linecap="round" />
          <!-- Athletic Shorts -->
          <line x1="120" y1="125" x2="135" y2="134" stroke="#0e140d" stroke-width="15" stroke-linecap="round" />
          <!-- Sneaker front -->
          <path d="M151,146 L164,151 L161,155 L147,153 Z" fill="#ffffff" />
          <path d="M152,146 L162,150 L159,151 L149,149 Z" fill="#202420" />
          <circle cx="162" cy="151" r="2.2" fill="#cdfb46" />
        </g>

        <!-- Head, Hair & Headband -->
        <g class="pushup-head">
          <circle cx="48" cy="98" r="14" fill="#ffcfab" />
          <!-- Stylish Hair -->
          <path d="M38,98 Q42,84 56,86 Q62,88 62,98 Q54,92 44,95 Z" fill="#232b21" />
          <!-- Neon Headband -->
          <path d="M40,94 Q50,91 58,95 L59,99 Q49,95 40,98 Z" fill="#cdfb46" />
        </g>

        <!-- Arms (Hands planted on mat) -->
        <g class="pushup-arms">
          <!-- Back Arm -->
          <polyline points="65,114 62,134 60,152" fill="none" stroke="#e0ac82" stroke-width="8.5" stroke-linecap="round" stroke-linejoin="round" class="pushup-arm-back" />
          <!-- Front Arm (Bending) -->
          <polyline points="72,112 70,135 68,152" fill="none" stroke="#ffcfab" stroke-width="9.5" stroke-linecap="round" stroke-linejoin="round" class="pushup-arm-front" />
          <!-- Wristband -->
          <circle cx="68.5" cy="148" r="4.5" fill="#cdfb46" />
        </g>
      </g>
    </g>
  `,

  // 2. AIR SQUATS
  squat: `
    <g class="avatar avatar-squat">
      <!-- Ground Shadow -->
      <ellipse cx="100" cy="172" rx="46" ry="6" fill="rgba(0,0,0,0.4)" class="anim-squat-shadow" />

      <!-- Head & Hair -->
      <g class="squat-head">
        <circle cx="100" cy="50" r="15" fill="#ffcfab" />
        <path d="M88,48 Q94,32 110,34 Q116,36 116,48 Q106,42 94,45 Z" fill="#232b21" />
        <path d="M89,45 Q100,42 111,46 L111,50 Q100,46 89,49 Z" fill="#cdfb46" />
      </g>

      <!-- Torso in Athletic Compression Shirt -->
      <g class="squat-torso">
        <path d="M84,66 L116,66 L110,110 L90,110 Z" fill="#1b2419" rx="4" />
        <line x1="100" y1="68" x2="100" y2="108" stroke="#cdfb46" stroke-width="2.5" />
      </g>

      <!-- Counterbalance Arms (Extending forward) -->
      <g class="squat-arms">
        <polyline points="87,74 72,92 60,94" fill="none" stroke="#ffcfab" stroke-width="8" stroke-linecap="round" class="squat-arm-l" />
        <polyline points="113,74 128,92 140,94" fill="none" stroke="#ffcfab" stroke-width="8" stroke-linecap="round" class="squat-arm-r" />
        <circle cx="60" cy="94" r="5" fill="#ffcfab" />
        <circle cx="140" cy="94" r="5" fill="#ffcfab" />
        <rect x="66" y="90" width="4" height="6" rx="2" fill="#cdfb46" />
        <rect x="130" y="90" width="4" height="6" rx="2" fill="#cdfb46" />
      </g>

      <!-- Shorts & Pelvis -->
      <g class="squat-pelvis">
        <path d="M86,106 L114,106 L118,124 L82,124 Z" fill="#121812" />
        <line x1="83" y1="123" x2="117" y2="123" stroke="#cdfb46" stroke-width="2" />
      </g>

      <!-- Legs & Sneakers -->
      <g class="squat-legs">
        <!-- Left Leg -->
        <g class="squat-leg-l">
          <polyline points="88,120 80,144 80,166" fill="none" stroke="#ffcfab" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" class="squat-knee-l" />
          <!-- Left Sneaker -->
          <path d="M68,166 L86,166 L85,172 L66,172 Z" fill="#ffffff" />
          <path d="M72,163 L84,163 L83,167 L69,167 Z" fill="#202420" />
          <circle cx="75" cy="165" r="2" fill="#cdfb46" />
        </g>

        <!-- Right Leg -->
        <g class="squat-leg-r">
          <polyline points="112,120 120,144 120,166" fill="none" stroke="#ffcfab" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" class="squat-knee-r" />
          <!-- Right Sneaker -->
          <path d="M114,166 L132,166 L134,172 L115,172 Z" fill="#ffffff" />
          <path d="M116,163 L128,163 L131,167 L117,167 Z" fill="#202420" />
          <circle cx="125" cy="165" r="2" fill="#cdfb46" />
        </g>
      </g>
    </g>
  `,

  // 3. ALTERNATING LUNGES
  lunge: `
    <g class="avatar avatar-lunge">
      <!-- Ground Shadow -->
      <ellipse cx="100" cy="172" rx="60" ry="5" fill="rgba(0,0,0,0.4)" class="anim-lunge-shadow" />

      <g class="lunge-rig">
        <!-- Back Leg (Dropping knee) -->
        <g class="lunge-back-leg">
          <polyline points="94,115 62,142 58,165" fill="none" stroke="#e0ac82" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" class="lunge-back-knee" />
          <!-- Back Sneaker on ball of foot -->
          <path d="M52,164 L64,166 L62,172 L50,170 Z" fill="#ffffff" />
          <path d="M54,163 L62,165 L60,167 L53,166 Z" fill="#202420" />
          <circle cx="61" cy="166" r="2" fill="#cdfb46" />
        </g>

        <!-- Torso & Athletic Top -->
        <g class="lunge-torso">
          <rect x="88" y="66" width="26" height="46" rx="6" fill="#1b2419" />
          <line x1="101" y1="68" x2="101" y2="110" stroke="#cdfb46" stroke-width="2.5" />
          <!-- Head -->
          <circle cx="101" cy="46" r="14" fill="#ffcfab" />
          <path d="M91,44 Q97,30 111,32 Q117,34 117,46 Q107,40 96,43 Z" fill="#232b21" />
          <path d="M92,42 Q102,39 112,43 L112,47 Q102,43 92,46 Z" fill="#cdfb46" />
        </g>

        <!-- Athletic Shorts -->
        <path d="M86,108 L116,108 L114,124 L86,124 Z" fill="#121812" />

        <!-- Front Leg (Bending to 90°) -->
        <g class="lunge-front-leg">
          <polyline points="106,116 138,136 138,166" fill="none" stroke="#ffcfab" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" class="lunge-front-knee" />
          <!-- Front Sneaker flat on floor -->
          <path d="M126,166 L148,166 L146,172 L124,172 Z" fill="#ffffff" />
          <path d="M130,163 L144,163 L143,167 L127,167 Z" fill="#202420" />
          <circle cx="141" cy="165" r="2" fill="#cdfb46" />
        </g>

        <!-- Arms in runner's sprint posture -->
        <g class="lunge-arms">
          <polyline points="92,76 76,96 82,110" fill="none" stroke="#e0ac82" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" class="lunge-arm-l" />
          <polyline points="110,76 128,88 122,104" fill="none" stroke="#ffcfab" stroke-width="8.5" stroke-linecap="round" stroke-linejoin="round" class="lunge-arm-r" />
          <circle cx="82" cy="110" r="4.5" fill="#e0ac82" />
          <circle cx="122" cy="104" r="5" fill="#ffcfab" />
        </g>
      </g>
    </g>
  `,

  // 4. PLANK HOLD
  plank: `
    <g class="avatar avatar-plank">
      <!-- Ground Mat & Glow -->
      <rect x="18" y="152" width="164" height="6" rx="3" fill="#141c14" stroke="#253523" stroke-width="1.5" />
      <ellipse cx="100" cy="154" rx="66" ry="4.5" fill="rgba(0,0,0,0.5)" />

      <!-- Isometric Core Aura -->
      <ellipse cx="96" cy="118" rx="28" ry="12" fill="rgba(205,251,70,0.15)" class="anim-plank-core-glow" />

      <g class="plank-body-rig">
        <!-- Back leg & Sneaker -->
        <line x1="124" y1="120" x2="162" y2="148" stroke="#121812" stroke-width="11" stroke-linecap="round" />
        <path d="M158,145 L170,149 L167,153 L154,151 Z" fill="#ffffff" />
        <circle cx="168" cy="149" r="2" fill="#cdfb46" />

        <!-- Torso & Athletic Wear -->
        <line x1="58" y1="114" x2="128" y2="120" stroke="#1b2419" stroke-width="21" stroke-linecap="round" />
        <line x1="68" y1="112" x2="120" y2="117" stroke="#cdfb46" stroke-width="2.5" />

        <!-- Front Leg & Sneaker -->
        <line x1="122" y1="122" x2="158" y2="150" stroke="#182218" stroke-width="12" stroke-linecap="round" />
        <!-- Shorts -->
        <line x1="120" y1="121" x2="134" y2="127" stroke="#0e140d" stroke-width="15" stroke-linecap="round" />
        <path d="M154,147 L166,151 L163,155 L150,153 Z" fill="#ffffff" />
        <circle cx="164" cy="151" r="2.2" fill="#cdfb46" />

        <!-- Head & Headband -->
        <circle cx="44" cy="106" r="14" fill="#ffcfab" />
        <path d="M34,106 Q38,92 52,94 Q58,96 58,106 Q50,100 40,103 Z" fill="#232b21" />
        <path d="M36,102 Q46,99 54,103 L55,107 Q45,103 36,106 Z" fill="#cdfb46" />

        <!-- Forearms flat on mat -->
        <polyline points="60,118 60,150 42,150" fill="none" stroke="#ffcfab" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="60" cy="142" r="4.5" fill="#cdfb46" />
      </g>
    </g>
  `,

  // 5. JUMPING JACKS
  jack: `
    <g class="avatar avatar-jack">
      <!-- Ground Shadow that expands/contracts -->
      <ellipse cx="100" cy="172" rx="42" ry="6" fill="rgba(0,0,0,0.4)" class="anim-jack-shadow" />

      <g class="jack-char-rig">
        <!-- Head, Hair, Headband -->
        <g class="jack-head">
          <circle cx="100" cy="46" r="14" fill="#ffcfab" />
          <path d="M89,44 Q95,30 110,32 Q116,34 116,46 Q106,40 95,43 Z" fill="#232b21" />
          <path d="M90,42 Q101,39 111,43 L111,47 Q101,43 90,46 Z" fill="#cdfb46" />
        </g>

        <!-- Torso in Athletic Compression Top -->
        <g class="jack-torso">
          <rect x="88" y="62" width="24" height="42" rx="5" fill="#1b2419" />
          <line x1="100" y1="64" x2="100" y2="102" stroke="#cdfb46" stroke-width="2.5" />
        </g>

        <!-- Athletic Shorts -->
        <path d="M86,102 L114,102 L116,118 L84,118 Z" fill="#121812" />

        <!-- Arms (Swinging from sides to overhead V) -->
        <g class="jack-arms">
          <line x1="88" y1="70" x2="68" y2="98" stroke="#ffcfab" stroke-width="8" stroke-linecap="round" class="jack-arm-l" />
          <line x1="112" y1="70" x2="132" y2="98" stroke="#ffcfab" stroke-width="8" stroke-linecap="round" class="jack-arm-r" />
          <circle cx="68" cy="98" r="4.5" fill="#cdfb46" class="jack-wrist-l" />
          <circle cx="132" cy="98" r="4.5" fill="#cdfb46" class="jack-wrist-r" />
        </g>

        <!-- Legs (Jumping together and apart) -->
        <g class="jack-legs">
          <!-- Left Leg -->
          <g class="jack-leg-l">
            <line x1="90" y1="116" x2="80" y2="164" stroke="#ffcfab" stroke-width="11" stroke-linecap="round" />
            <path d="M68,164 L86,164 L84,170 L66,170 Z" fill="#ffffff" />
            <circle cx="75" cy="165" r="2" fill="#cdfb46" />
          </g>

          <!-- Right Leg -->
          <g class="jack-leg-r">
            <line x1="110" y1="116" x2="120" y2="164" stroke="#ffcfab" stroke-width="11" stroke-linecap="round" />
            <path d="M114,164 L132,164 L134,170 L116,170 Z" fill="#ffffff" />
            <circle cx="125" cy="165" r="2" fill="#cdfb46" />
          </g>
        </g>
      </g>
    </g>
  `,

  // 6. BICYCLE CRUNCHES
  crunch: `
    <g class="avatar avatar-crunch">
      <!-- Ground Mat -->
      <rect x="20" y="152" width="160" height="6" rx="3" fill="#141c14" stroke="#253523" stroke-width="1.5" />

      <g class="crunch-rig">
        <!-- Torso on mat with shoulders raised -->
        <g class="crunch-torso-group">
          <line x1="60" y1="134" x2="114" y2="138" stroke="#1b2419" stroke-width="20" stroke-linecap="round" />
          <line x1="68" y1="130" x2="108" y2="133" stroke="#cdfb46" stroke-width="2.5" />
          <!-- Head elevated -->
          <circle cx="48" cy="120" r="13" fill="#ffcfab" />
          <path d="M38,120 Q42,108 54,110 Q60,112 60,120 Q52,115 42,117 Z" fill="#232b21" />
          <!-- Hands behind head -->
          <polyline points="66,132 50,116 46,122" fill="none" stroke="#ffcfab" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round" class="crunch-elbow-l" />
        </g>

        <!-- Shorts / Pelvis -->
        <circle cx="114" cy="138" r="11" fill="#121812" />

        <!-- Cycling Legs (Pedaling in air) -->
        <g class="crunch-legs">
          <!-- Left Leg (Crunching in towards elbow) -->
          <g class="crunch-leg-left">
            <polyline points="114,136 94,112 120,96" fill="none" stroke="#ffcfab" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
            <!-- Sneaker -->
            <path d="M116,92 L128,98 L125,103 L113,97 Z" fill="#ffffff" />
            <circle cx="127" cy="98" r="2" fill="#cdfb46" />
          </g>

          <!-- Right Leg (Extending out straight) -->
          <g class="crunch-leg-right">
            <polyline points="114,138 142,128 170,122" fill="none" stroke="#e0ac82" stroke-width="9.5" stroke-linecap="round" stroke-linejoin="round" />
            <!-- Sneaker -->
            <path d="M166,118 L178,122 L176,127 L164,123 Z" fill="#ffffff" />
            <circle cx="177" cy="122" r="2" fill="#cdfb46" />
          </g>
        </g>
      </g>
    </g>
  `,

  // 7. MOUNTAIN CLIMBERS
  climber: `
    <g class="avatar avatar-climber">
      <!-- Ground Mat & Shadow -->
      <rect x="15" y="152" width="170" height="6" rx="3" fill="#141c14" stroke="#253523" stroke-width="1.5" />
      <ellipse cx="100" cy="154" rx="65" ry="4.5" fill="rgba(0,0,0,0.5)" />

      <g class="climber-body-rig">
        <!-- Planted Arms -->
        <g class="climber-arms">
          <polyline points="58,110 54,152" stroke="#ffcfab" stroke-width="10" stroke-linecap="round" />
          <circle cx="54" cy="146" r="4.5" fill="#cdfb46" />
        </g>

        <!-- Torso & Athletic Top -->
        <line x1="56" y1="110" x2="120" y2="114" stroke="#1b2419" stroke-width="21" stroke-linecap="round" />
        <line x1="66" y1="108" x2="114" y2="112" stroke="#cdfb46" stroke-width="2.5" />

        <!-- Head -->
        <circle cx="44" cy="100" r="14" fill="#ffcfab" />
        <path d="M34,100 Q38,86 52,88 Q58,90 58,100 Q50,94 40,97 Z" fill="#232b21" />
        <path d="M35,96 Q45,93 53,97 L54,101 Q44,97 35,100 Z" fill="#cdfb46" />

        <!-- Shorts -->
        <circle cx="120" cy="114" r="11" fill="#121812" />

        <!-- Sprinting Legs -->
        <g class="climber-legs">
          <!-- Front Driving Knee (Rapid sprint forward) -->
          <g class="climber-sprint-knee">
            <polyline points="120,114 84,126 94,146" fill="none" stroke="#ffcfab" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M90,144 L102,148 L99,153 L87,149 Z" fill="#ffffff" />
            <circle cx="101" cy="148" r="2" fill="#cdfb46" />
          </g>

          <!-- Back Extended Leg -->
          <g class="climber-back-leg">
            <polyline points="120,114 144,132 166,148" fill="none" stroke="#e0ac82" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M162,145 L174,149 L171,154 L159,150 Z" fill="#ffffff" />
            <circle cx="173" cy="149" r="2" fill="#cdfb46" />
          </g>
        </g>
      </g>
    </g>
  `,

  // 8. WALL SIT
  wallsit: `
    <g class="avatar avatar-wallsit">
      <!-- Brick Textured Wall on Left -->
      <line x1="38" y1="20" x2="38" y2="175" stroke="#2a3528" stroke-width="8" stroke-linecap="round" />
      <line x1="34" y1="20" x2="34" y2="175" stroke="#cdfb46" stroke-width="1.5" stroke-dasharray="6,4" />

      <!-- Floor Shadow -->
      <ellipse cx="88" cy="172" rx="44" ry="5" fill="rgba(0,0,0,0.4)" />

      <!-- Isometric Quad Burning Aura -->
      <ellipse cx="84" cy="116" rx="22" ry="10" fill="rgba(205,251,70,0.2)" class="anim-wallsit-quad-glow" />

      <g class="wallsit-body">
        <!-- Back and Shoulders pressed flat to wall -->
        <rect x="42" y="66" width="22" height="50" rx="4" fill="#1b2419" />
        <line x1="53" y1="68" x2="53" y2="114" stroke="#cdfb46" stroke-width="2.5" />

        <!-- Head leaning back against wall -->
        <circle cx="53" cy="48" r="14" fill="#ffcfab" />
        <path d="M43,46 Q49,32 63,34 Q69,36 69,48 Q59,42 48,45 Z" fill="#232b21" />
        <path d="M44,44 Q54,41 64,45 L65,49 Q55,45 44,48 Z" fill="#cdfb46" />

        <!-- Arms calmly crossed over chest -->
        <polyline points="46,76 68,88 56,96" fill="none" stroke="#ffcfab" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="56" cy="96" r="4" fill="#cdfb46" />

        <!-- Shorts & Thighs (Perfect 90° Horizontal Chair Pose) -->
        <path d="M42,112 L64,112 L96,112 L96,126 L42,126 Z" fill="#121812" />
        <line x1="64" y1="116" x2="98" y2="116" stroke="#ffcfab" stroke-width="12" stroke-linecap="round" />

        <!-- Calves (Vertical down from knees to sneakers) -->
        <line x1="98" y1="120" x2="98" y2="166" stroke="#ffcfab" stroke-width="11" stroke-linecap="round" />

        <!-- Sneakers flat on floor -->
        <path d="M88,166 L112,166 L110,172 L86,172 Z" fill="#ffffff" />
        <path d="M92,163 L108,163 L107,167 L89,167 Z" fill="#202420" />
        <circle cx="106" cy="165" r="2.2" fill="#cdfb46" />
      </g>
    </g>
  `,

  // 9. HIGH KNEES
  highknees: `
    <g class="avatar avatar-highknees">
      <!-- Ground Shadow that bobs with sprint -->
      <ellipse cx="100" cy="172" rx="42" ry="5" fill="rgba(0,0,0,0.4)" class="anim-highknees-shadow" />

      <g class="highknees-rig">
        <!-- Head -->
        <circle cx="100" cy="44" r="14" fill="#ffcfab" />
        <path d="M89,42 Q95,28 110,30 Q116,32 116,44 Q106,38 95,41 Z" fill="#232b21" />
        <path d="M90,40 Q101,37 111,41 L111,45 Q101,41 90,44 Z" fill="#cdfb46" />

        <!-- Torso in Athletic Compression Top -->
        <rect x="88" y="60" width="24" height="44" rx="5" fill="#1b2419" />
        <line x1="100" y1="62" x2="100" y2="102" stroke="#cdfb46" stroke-width="2.5" />

        <!-- Shorts -->
        <path d="M86,102 L114,102 L116,118 L84,118 Z" fill="#121812" />

        <!-- Running Arms Pumping -->
        <g class="highknees-arms">
          <polyline points="88,68 70,86 78,102" fill="none" stroke="#e0ac82" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" class="highknees-arm-l" />
          <polyline points="112,68 128,82 122,98" fill="none" stroke="#ffcfab" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" class="highknees-arm-r" />
          <circle cx="78" cy="102" r="4.5" fill="#cdfb46" />
          <circle cx="122" cy="98" r="4.5" fill="#cdfb46" />
        </g>

        <!-- High Knee Running Legs -->
        <g class="highknees-legs">
          <!-- Raised Knee (Driven to 90° waist height) -->
          <g class="highknee-up">
            <polyline points="92,116 72,112 72,142" fill="none" stroke="#ffcfab" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M62,142 L78,142 L76,148 L60,148 Z" fill="#ffffff" />
            <circle cx="74" cy="144" r="2" fill="#cdfb46" />
          </g>

          <!-- Standing Ground Leg (Springing on ball of foot) -->
          <g class="highknee-down">
            <polyline points="108,116 112,142 112,166" fill="none" stroke="#e0ac82" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M104,166 L122,166 L120,172 L102,172 Z" fill="#ffffff" />
            <circle cx="118" cy="168" r="2" fill="#cdfb46" />
          </g>
        </g>
      </g>
    </g>
  `,

  // 10. PLANK SHOULDER TAPS
  shouldertap: `
    <g class="avatar avatar-shouldertap">
      <!-- Ground Mat & Shadow -->
      <rect x="15" y="152" width="170" height="6" rx="3" fill="#141c14" stroke="#253523" stroke-width="1.5" />
      <ellipse cx="100" cy="154" rx="66" ry="4.5" fill="rgba(0,0,0,0.5)" />

      <g class="tap-body-rig">
        <!-- Back leg & Sneaker -->
        <line x1="122" y1="116" x2="160" y2="148" stroke="#121812" stroke-width="11" stroke-linecap="round" />
        <path d="M156,145 L168,149 L165,153 L152,151 Z" fill="#ffffff" />
        <circle cx="166" cy="149" r="2" fill="#cdfb46" />

        <!-- Torso & Athletic Top -->
        <line x1="58" y1="110" x2="124" y2="118" stroke="#1b2419" stroke-width="21" stroke-linecap="round" />
        <line x1="68" y1="108" x2="116" y2="115" stroke="#cdfb46" stroke-width="2.5" />

        <!-- Front leg & Sneaker -->
        <line x1="120" y1="118" x2="156" y2="150" stroke="#182218" stroke-width="12" stroke-linecap="round" />
        <path d="M152,147 L164,151 L161,155 L148,153 Z" fill="#ffffff" />
        <circle cx="162" cy="151" r="2.2" fill="#cdfb46" />

        <!-- Head -->
        <circle cx="44" cy="98" r="14" fill="#ffcfab" />
        <path d="M34,98 Q38,84 52,86 Q58,88 58,98 Q50,92 40,95 Z" fill="#232b21" />
        <path d="M35,94 Q45,91 53,95 L54,99 Q44,95 35,98 Z" fill="#cdfb46" />

        <!-- Left Arm planted on mat -->
        <polyline points="62,114 62,152" stroke="#ffcfab" stroke-width="9.5" stroke-linecap="round" />
        <circle cx="62" cy="146" r="4.5" fill="#cdfb46" />

        <!-- Right Arm (Lifting to tap opposite shoulder) -->
        <polyline points="72,112 56,122 66,112" fill="none" stroke="#ffcfab" stroke-width="8.5" stroke-linecap="round" stroke-linejoin="round" class="tap-hand-motion" />
        <circle cx="66" cy="112" r="4" fill="#cdfb46" />
      </g>
    </g>
  `,

  // 11. LYING LEG RAISES
  legraise: `
    <g class="avatar avatar-legraise">
      <!-- Ground Mat -->
      <rect x="15" y="152" width="170" height="6" rx="3" fill="#141c14" stroke="#253523" stroke-width="1.5" />

      <!-- Isometric Lower Abs Glow -->
      <ellipse cx="106" cy="138" rx="18" ry="10" fill="rgba(205,251,70,0.2)" class="anim-legraise-abs-glow" />

      <g class="legraise-body">
        <!-- Head flat on mat -->
        <circle cx="44" cy="142" r="13" fill="#ffcfab" />
        <path d="M34,142 Q38,130 50,132 Q56,134 56,142 Q48,137 38,139 Z" fill="#232b21" />
        <circle cx="44" cy="136" r="3" fill="#cdfb46" />

        <!-- Torso flat on mat -->
        <line x1="56" y1="144" x2="114" y2="144" stroke="#1b2419" stroke-width="18" stroke-linecap="round" />
        <line x1="64" y1="140" x2="108" y2="140" stroke="#cdfb46" stroke-width="2.5" />

        <!-- Arms by sides for support -->
        <line x1="68" y1="146" x2="108" y2="148" stroke="#ffcfab" stroke-width="7" stroke-linecap="round" />

        <!-- Shorts / Pelvis -->
        <circle cx="114" cy="144" r="10" fill="#121812" />

        <!-- Legs lifting from horizontal to 90° vertical -->
        <g class="legraise-legs-rig">
          <line x1="114" y1="144" x2="114" y2="76" stroke="#ffcfab" stroke-width="11" stroke-linecap="round" />
          <!-- Sneakers pointing up -->
          <path d="M106,76 L122,76 L120,68 L104,68 Z" fill="#ffffff" />
          <path d="M108,74 L120,74 L119,70 L107,70 Z" fill="#202420" />
          <circle cx="114" cy="72" r="2.2" fill="#cdfb46" />
        </g>
      </g>
    </g>
  `,

  // 12. DELTOID ARM CIRCLES
  armcircles: `
    <g class="avatar avatar-armcircles">
      <!-- Ground Shadow -->
      <ellipse cx="100" cy="172" rx="44" ry="5.5" fill="rgba(0,0,0,0.4)" />

      <!-- Orbital Particle Trail Rings around hands -->
      <circle cx="34" cy="72" r="16" fill="none" stroke="rgba(205,251,70,0.4)" stroke-width="1.5" stroke-dasharray="4,4" class="anim-arm-ring-l" />
      <circle cx="166" cy="72" r="16" fill="none" stroke="rgba(205,251,70,0.4)" stroke-width="1.5" stroke-dasharray="4,4" class="anim-arm-ring-r" />

      <!-- Head, Hair, Headband -->
      <circle cx="100" cy="46" r="14" fill="#ffcfab" />
      <path d="M89,44 Q95,30 110,32 Q116,34 116,46 Q106,40 95,43 Z" fill="#232b21" />
      <path d="M90,42 Q101,39 111,43 L111,47 Q101,43 90,46 Z" fill="#cdfb46" />

      <!-- Torso in Athletic Compression Top -->
      <rect x="88" y="62" width="24" height="44" rx="5" fill="#1b2419" />
      <line x1="100" y1="64" x2="100" y2="104" stroke="#cdfb46" stroke-width="2.5" />

      <!-- Athletic Shorts -->
      <path d="M86,104 L114,104 L116,120 L84,120 Z" fill="#121812" />

      <!-- Standing Legs & Sneakers -->
      <line x1="92" y1="118" x2="88" y2="166" stroke="#ffcfab" stroke-width="11" stroke-linecap="round" />
      <line x1="108" y1="118" x2="112" y2="166" stroke="#ffcfab" stroke-width="11" stroke-linecap="round" />
      <path d="M78,166 L98,166 L96,172 L76,172 Z" fill="#ffffff" />
      <path d="M102,166 L122,166 L124,172 L104,172 Z" fill="#ffffff" />
      <circle cx="88" cy="167" r="2" fill="#cdfb46" />
      <circle cx="112" cy="167" r="2" fill="#cdfb46" />

      <!-- Arms extended in horizontal T-Pose (Rotating in tight circles) -->
      <g class="armcircles-rig">
        <!-- Left Arm -->
        <g class="armcircle-arm-l">
          <line x1="88" y1="72" x2="36" y2="72" stroke="#ffcfab" stroke-width="8.5" stroke-linecap="round" />
          <circle cx="36" cy="72" r="5" fill="#ffcfab" />
          <rect x="44" y="69" width="4" height="6" rx="2" fill="#cdfb46" />
        </g>

        <!-- Right Arm -->
        <g class="armcircle-arm-r">
          <line x1="112" y1="72" x2="164" y2="72" stroke="#ffcfab" stroke-width="8.5" stroke-linecap="round" />
          <circle cx="164" cy="72" r="5" fill="#ffcfab" />
          <rect x="152" y="69" width="4" height="6" rx="2" fill="#cdfb46" />
        </g>
      </g>
    </g>
  `
};
