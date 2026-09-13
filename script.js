/* =========================================================
   ENGINEERS' DAY // GNITS 2026
   EVENT DATA + FILTERING + MODALS + COUNTDOWN
   ========================================================= */


/* =========================================================
   EVENT DATABASE
   ========================================================= */

const events = [

  /* =======================================================
     01 — CRISISX
     ======================================================= */

  {
    id: 'crisis',

    club: 'R&D CELL',

    title: 'CrisisX — Innovate, Adapt & Respond',

    date: '16',

    category: ['mega'],

    time: '9:00 AM onwards',

    venue: 'Not stated',

    fee: '₹50 / member',

    status: 'registration',

    poster: 'assets/posters/crisis-hack.jpeg',

    desc:
      'Students identify solutions for simulated dynamic disasters through an innovation and problem-solving challenge.',

    tags: [
      'Mega Event',
      'Team challenge',
      '3–4 members'
    ],

    link:
      'https://forms.gle/2CDpC2NCNHGq2G699',

    qr:
      'assets/qr/crisis-hack.png',

    note:
      'Perks shown on the poster: e-certificate, projects with the R&D Committee and exciting gifts.'
  },


  /* =======================================================
     02 — BRAINBLITZ
     ======================================================= */

  {
    id: 'brain',

    club: 'APTUS GANA',

    title: 'BrainBlitz',

    date: '16',

    category: ['stall'],

    time: '11:00 AM - 3:00 PM',

    venue: 'I&I Basement',

    fee: '₹50',

    status: 'registration',

    poster: 'assets/posters/brain-blitz.jpeg',

    desc:
      'An interactive stall featuring fun and engaging mathematical games and puzzles designed to encourage logical thinking and problem-solving.',

    tags: [
      'Stall',
      'Math',
      'Logic'
    ],

    link:
      'https://docs.google.com/forms/d/e/1FAIpQLScswmDew8AzkGPTL1AHdeJ52vz5fYiyZWj4iHVGH5xHJqYL4w/viewform',

    qr:
      'assets/qr/brain-blitz.png',
  },


  /* =======================================================
     03 — PROMPT COMBAT
     ======================================================= */

  {
    id: 'prompt',

    club: 'ISTE',

    title: 'Prompt Combat',

    date: '16',

    category: ['stall'],

    time: '11:00 AM – 2:00 PM',

    venue: 'I&I Block · Ground Floor',

    fee: '₹50',

    status: 'registration',

    poster: 'assets/posters/prompt-combat.jpg',

    desc:
      'Two participants race against a 60-second clock to generate an exact AI output using specialized textual instructions.',

    tags: [
      'Stall',
      'AI',
      '2 participants',
      '60 sec'
    ],

    link:
      'https://docs.google.com/forms/d/e/1FAIpQLScVr6fOfsGMb1COdKAj19lmiflN97pohE2ChIfchIwx7s4wMg/viewform',

    qr:
      'assets/qr/prompt-combat.png'
  },

   /* =======================================================
     4 — CODE BREAK 180
     ======================================================= */

  {
    id: 'codebreak',

    club: 'ACM-W SIGAI',

    title: 'Code Break: 180',

    date: '16',

    category: ['stall'],

    time: '11:00 AM - 3:00 PM',

    venue: 'I&I CELL',

    fee: '₹50',

    status: 'registration',

    poster: 'assets/posters/code-break-180.jpeg',

    desc:
      'Three timed rounds involving wire matching, decoding and password solving, with each round being eliminatory.',

    tags: [
      'Stall',
      '3 rounds',
      '180 sec'
    ],

    link:
      'https://forms.gle/3mo4ch7S6F5GZMWX6',

    qr:
      'assets/qr/sigai.jpeg'
  },


  /* =======================================================
     5 — TECHNICAL TWISTER
     ======================================================= */

  {
    id: 'twister',

    club: 'IETE',

    title: 'Technical Twister',

    date: '16',

    category: ['stall'],

    time: '11:30 AM – 3:00 PM',

    venue: 'I&I Block · Ground Floor',

    fee: '₹50 / person',

    status: 'walkin',

    poster: 'assets/posters/technical-twister.jpeg',

    desc:
      'An interactive technical challenge combining quick thinking, technical knowledge and physical coordination.',

    tags: [
      'Stall',
      'Technical',
      'Reflex'
    ],

  },


  /* =======================================================
     06 — 3 SECOND CHAOS
     ======================================================= */

  {
    id: 'chaos3',

    club: 'IETE',

    title: '3-Second Chaos',

    date: '16',

    category: ['stall'],

    time: '11:30 AM – 3:00 PM',

    venue: 'I&I Block · Ground Floor',

    fee: '₹50 / person',

    status: 'walkin',

    poster: 'assets/posters/3-second-chaos.jpeg',

    desc:
      'A fast-paced challenge testing quick thinking and reflexes through songs, movies, dialogues and viral moments.',

    tags: [
      'Stall',
      'Music',
      'Movies',
      '3 sec'
    ],
  },


  /* =======================================================
     07 — TECH ARENA
     ======================================================= */

  {
    id: 'gdg',

    club: 'GDG GNITS',

    title: 'Tech Arena',

    date: '16',

    category: ['stall'],

    time: '11:00 AM - 3:00 PM',

    venue: 'GNITS',

    fee: '₹50',

    status: 'registration',

    poster: 'assets/posters/gdg-tech-arena.jpg',

    desc:
      'A gaming stall featuring Jenga, Code by Levels, Character Mix Up and Component Guessing.',

    tags: [
      'Stall',
      '4 games',
      'All branches'
    ],

    link:
      'https://docs.google.com/forms/d/e/1FAIpQLSfXxtaO53Muj91BFVGKhHUT_ZTpd7OzyvpIz7s5J-TDqRRTlA/viewform?usp=header',

    qr:
      'assets/qr/gdg.png'
  },


  /* =======================================================
     08 — CHAOS & CLUES
     ======================================================= */

  {
    id: 'csi',

    club: 'COMPUTER SOCIETY OF INDIA · GNITS',

    title: 'Chaos & Clues',

    date: '16',

    category: ['stall'],

    time: '11:00 AM - 3:00 PM',

    venue: 'I&I Block · GNITS',

    fee: '₹50 / person',

    status: 'registration',

    poster: 'assets/posters/chaos-and-clues.jpeg',

    desc:
      'Quick and engaging challenges involving codes, puzzles, 30-second tasks, YES/NO identity guessing and photo clues.',

    tags: [
      'Stall',
      '1–2 members',
      'Puzzles'
    ],

    link:
      'https://qr-codes.io/SG4I6p',

    qr:
      'assets/qr/csi.png',

    note:
      'Student coordinators: N. Siri and Azmath Zaha Shaik.'
  },


  /* =======================================================
     09 — SPIN THE ERUDITES WHEEL
     ======================================================= */

  {
    id: 'erudites',

    club: 'THE ERUDITES',

    title: 'Spin the Erudites Wheel',

    date: '16',

    category: ['stall'],

    time: '11:00 AM - 3:00 PM',

    venue: 'Not stated',

    fee: '₹50 / person',

    status: 'payment',

    poster: 'assets/posters/spin-erudites-wheel.jpg',

    desc:
      'Participants receive a task according to the wheel spin. Challenges are related to technical research, memes and logos.',

    tags: [
      'Stall',
      '1–2 members',
      'Games',
      'Goodies'
    ],


    paymentQr: 'assets/qr/erudites.png',


    note:
      'The supplied QR is a payment QR, not an application form.'
  },


  /* =======================================================
     10 — LOGO LOCK
     ======================================================= */

  {
    id: 'logo',

    club: 'I&I CELL',

    title: 'Logo Lock',

    date: '16',

    category: ['stall'],

    time: '11:00 AM – 2:00 PM',

    venue: 'Basement · I&I',

    fee: '₹50 entry',

    status: 'registration',

    poster: 'assets/posters/logo-lock.png',

    desc:
      'A two-level, time-bound brand recognition game using cropped, pixelated, zoomed-in and distorted logos.',

    tags: [
      'Stall',
      'Brand trivia',
      '60 sec'
    ],

    link:
      'https://qrfy.io/pZ_pSc9G7X',

    qr:
      'assets/qr/logo-lock.png'
  },


  /* =======================================================
     11 — GUESS IT
     ======================================================= */

  {
    id: 'guess',

    club: 'IETE',

    title: 'Guess It',

    date: '16',

    category: ['stall'],

    time: '11:30 AM – 3:00 PM',

    venue: 'I&I Block · Ground Floor',

    fee: '₹50 / person',

    status: 'walkin',

    poster: 'assets/posters/guess-it.jpeg',

    desc:
      'An interactive challenge where participants decode clues, connect hints and identify the correct answer.',

    tags: [
      'Stall',
      'Clues',
      'Guessing'
    ],
  },


  /* =======================================================
     12 — BLOCKCHAIN SESSION
     ======================================================= */

  {
    id: 'blockchain',

    club: 'ARTHACHAIN YUVA CLUB',

    title: 'Technical Session on Blockchain Technology',

    date: '15',

    category: ['mega'],

    time: '11:00 AM – 1:00 PM',

    venue: 'IT Seminar Hall · F-Block',

    fee: 'Mandatory registration',

    status: 'registration',

    poster: 'assets/posters/arthachain-blockchain.jpeg',

    desc:
      'An awareness and knowledge-building session introducing students to the fundamentals and real-world applications of Blockchain Technology.',

    tags: [
      'Mega Event',
      'Web3',
      'Career session'
    ],

    qr: 'assets/qr/arthachain.png',

    note:
      'Speaker: Mr. Sivram Shastri, Co-Founder, DAO.'
  },


  /* =======================================================
     13 — REDESIGN THIS
     ======================================================= */

  {
    id: 'redesign',

    club: 'CREOVATE',

    title: 'Redesign This!',

    date: '16',

    category: ['mega'],

    time: '11:00 AM – 2:00 PM',

    venue: 'E-Classroom · IT Block (4th Floor)',

    fee: '₹100',

    status: 'registration',

    poster: 'assets/posters/redesign-this.jpeg',

    desc:
      'Redesign vintage tickets with a modern twist and showcase your creativity.',

    tags: [
      'Mega Event',
      'Design',
      '₹100',
      'Prizes'
    ],

    link:
      'https://qrfy.io/JNNOOZpBhq',

    qr:
      'assets/qr/creovate.png',

    note:
      'Certificates for the top 2 participants and exciting prizes.'
  },


  /* =======================================================
     14 — RANGOLI PUZZLE
     ======================================================= */

  {
    id: 'rangoli',

    club: 'ISTE',

    title: 'Rangoli Puzzle',

    date: '15',

    category: ['mega'],

    time: '12:00 PM Onwards ',

    venue: 'IT Road',

    fee: '₹200/ per team',

    status: 'registration',

    poster: 'assets/posters/rangoli-puzzle.jpg',

    desc:
      'Solve a custom scrambled Rangoli puzzle, decode the design, plan the blueprint and recreate it using vibrant traditional colours.',

    tags: [
      'Mega Event',
      '3–4 members',
      'Speed + logic'
    ],

    link:
      'https://qrto.org/j8tZuV',

    qr:
      'assets/qr/rangoli.png',
  },

  /* =======================================================
     21 — ORIGIN
     ======================================================= */

  {
    id: 'origin',

    club: 'CELESTE',

    title: 'ORIGIN — An Ideathon on Space',

    date: '16',

    category: ['mega'],

    time: '11:00 AM – 2:00 PM',

    venue: 'IT Seminar Hall',

    fee: '₹200 / team',

    status: 'registration',

    poster: 'assets/posters/origin.jpeg',

    desc:
      'A 36-hour research sprint where participants read a research paper, understand and analyse it, find gaps, develop an idea and pitch it at the Ideathon.',

    tags: [
      'Mega Event',
      'Ideathon',
      'Space',
      'Research',
      '3–4 members',
      '₹200 / team'
    ],

    link:
      'https://docs.google.com/forms/d/e/1FAIpQLSefN-9wqnpZR2bihh1ni-FsLRlW0EWGXMJlWobskiWxz3tk2A/viewform?usp=publish-editor',

    qr:
      'assets/qr/origin.png',

    note:
      'Research papers from IEEE are released on 14 September at 9:00 AM. Research window: 14 September, 9:00 AM to 15 September, 11:59 PM.'
  },


  /* =======================================================
     15 — BATTLE OF ENGINEERS
     ======================================================= */

  {
    id: 'battle',

    club: 'IETE',

    title: 'Battle of Engineers',

    date: '16',

    category: [
      'mega'
    ],

    time: '11:00 AM – 2:00 PM',

    venue: 'E-Classroom · ECE Block',

    fee: '₹150 (3) / ₹200 (4)',

    status: 'registration',

    poster: 'assets/posters/IETE_Battle_of_Engineers.png',

    desc:
      'A team-based competition testing technical knowledge, problem-solving, decision-making and adaptability through three rounds.',

    tags: [
      'Mega Event',
      'Stall',
      '3 rounds',
      '3–4/team'
    ],

    link:
      'https://docs.google.com/forms/d/e/1FAIpQLSehjZ3eKtAYZeB5niwNvJih8wpwBlsLWN3OcEER_Sy4tesEDA/viewform?usp=publish-editor',

    qr:
      'assets/qr/battle-engineers.png',

    note:
      'Round 1: Engineer’s Mind · 30 min / 30 points. Round 2: Engineer Under Pressure · 40–45 min / 40 points. Round 3: Engineer the Solution · 50–60 min / 50 points.'
  },

  /* =======================================================
     17 — TECHNICAL DEBATE
     ======================================================= */

  {
  id: 'technical-debate',

  club: 'IEEE SB GNITS × ACM-W GNITS',

  title: 'Technical Debate',

  date: '16',

  category: ['mega'],

  time: '11:00 AM – 2:00 PM',

  venue: 'Main Seminar Hall',

  fee: '₹50/ per head',

  status: 'registration',

  poster: 'assets/posters/technical-debate.jpeg',

  desc:
    'An interactive technical debate where participants discuss technology-focused topics, take a FOR or AGAINST stance, defend their views, and engage in thoughtful counterarguments.',

  tags: [
    'Mega Event',
    'Debate',
    'Technical',
    'Ideas + Logic',
    'Open to students'
  ],
  link: 'https://docs.google.com/forms/d/e/1FAIpQLSfiJshf8C7zyENk8AiSBVReAPGyq_A4EIdQ2d47w9djoQLQJw/viewform',

  qr: 'assets/qr/technical-debate.png',

  note:
    'E-certificates will be given to all participants. Certificates will be given to the winner and runner-up, and goodies will be provided to all participants.'
},

  /* =======================================================
    CTRL + THINK
  ======================================================= */

  {
    id: 'ctrl-think',

    club: 'IEEE SB GNITS',

    title: 'CTRL + THINK: The Ultimate Technical Challenge',

    date: '16',

    category: ['stall'],

    time: '11:00 AM – 3:00 PM',

    venue: 'I&I Block · Basement',

    fee: '₹50 / person',

    status: 'registration',

    poster: 'assets/posters/ctrl-think.jpeg',

    desc:
      'An adrenaline-pumping 3-round interactive stall featuring three independent mini-games designed to test observation, logical thinking and AI awareness.',

    tags: [
      'Stall',
      'Individual',
      '3 mini-games',
      'Logic',
      'AI Awareness',
      '₹50'
    ],

    link:
      'https://docs.google.com/forms/d/e/1FAIpQLSfswp5IvZ2LUNKE8JvBHk3vRPzRlmwiNE-KzTwah9jB_o7TAQ/viewform',

    qr: 'assets/qr/ctrl-think.jpeg',

    note:
      'Exciting goodies will be awarded to winners, with as many winners as registrations allow.'
  },

  /* =======================================================
     18 — MEME CHALLENGE
     ======================================================= */

    {
      id: 'meme-challenge',

      club: 'ACM-W',

      title: 'Meme Challenge',

      date: '16',

      category: ['stall'],

      time: '9:00 AM - 4:00 PM',

      venue: 'I&I Ground Floor',

      fee: '50(for one game)- total 150(per team), ₹100(for both games)-300(per team)',

      status: 'walkin',

      poster: 'assets/posters/tech-meme.jpeg',

      link: 'https://docs.google.com/forms/d/e/1FAIpQLSdF3j7cgL5egdGIry2rsj5IFo40hdt6xtMEv9KiU5PHya3qbw/viewform',
      
      qr: 'assets/qr/tech-meme.png',

      desc:
        'Participants are shown tech-related memes and identify the technical term or concept that best matches each meme.',

      tags: [
        'Stall',
        'Memes',
        'Tech'
      ],
    },

    /* =======================================================
      19 — TECH TAC TOE
      ======================================================= */

    {
    id: 'tech-tac-toe',

    club: 'ACM-W GNITS',

    title: 'Tech Tac Toe',

    date: '16',

    category: ['stall'],

    time: '11:00 AM - 3:00 PM',

    venue: 'I&I Block',

    fee: '₹50(for one game)- ₹total 150(per team), ₹100(for both games)-300(per team)',

    status: 'registration',

    poster: 'assets/posters/tech-tac-toe.jpeg',

    desc:
      'A fun team challenge combining Tic-Tac-Toe with bottle flipping. Successfully flip the bottle to earn a chance to claim a square and line up three.',

    tags: [
      'Stall',
      'Team of 3–4',
      '₹50 / person',
      'Game'
    ],

    link:
      'https://docs.google.com/forms/d/e/1FAIpQLSdF3j7cgL5egdGIry2rsj5IFo40hdt6xtMEv9KiU5PHya3qbw/viewform',

    qr:
      'assets/qr/tech-tac-toe.png',

    note:
      'Open to everyone. Exciting prizes are available.'
  },


  /* =======================================================
     20 — SPACE QUEST
     ======================================================= */

  {
    id: 'space-quest',

    club: 'Celeste',

    title: 'Space Quest',

    date: '16',

    category: ['stall'],

    time: '11:00 AM - 3:00 PM',

    venue: 'I&I Block',

    fee: '₹50 / person',

    status: 'walkin',

    poster: 'assets/posters/space-quest.jpeg',

    qr: 'assets/qr/space-quest.png',

    desc:
      'A stall experience themed around the Space Quest concept.',

    tags: [
      'Stall'
    ],
  },

  /* =======================================================
     16 — BRAINY DOODLES + HEADPHONE CHALLENGE
     ======================================================= */

  {
    id: 'brainy-doodles',

    club: 'IEI',

    title: 'Brainy Doodles + Headphone Challenge',

    date: '16',

    category: ['stall'],

    time: '11:00 AM - 3:00 PM',

    venue: 'I&I Block',

    fee: 'Not stated',

    status: 'walkin',

    /*
      ==============================================
      ADD POSTER HERE
      ==============================================

      Example:

      poster:
        'assets/posters/brainy-doodles.jpg',

      ==============================================
    */

    poster: '',

    desc:
      'One teammate dictates ten objects while the other quickly draws them. In the headphone challenge, one participant wears headphones while their teammate says tongue twisters and they try to guess what is being said.',

    tags: [
      'Stall',
      'Drawing',
      'Headphones'
    ],

    note:
      'Poster, date, venue and fee to be added.'
  }
];


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const grid =
  document.getElementById('eventGrid');

const search =
  document.getElementById('search');

const modal =
  document.getElementById('eventModal');

const modalContent =
  document.getElementById('modalContent');


/* =========================================================
   CURRENT FILTER
   ========================================================= */

let filter = 'all';


/* =========================================================
   HTML ESCAPE FUNCTION
   Prevents event text from breaking the HTML.
   ========================================================= */

function esc(value) {

  return String(value ?? '')
    .replace(/[&<>"']/g, character => {

      const replacements = {

        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'

      };

      return replacements[character];

    });

}


/* =========================================================
   EVENT CATEGORY LABEL
   ========================================================= */

function getCategoryLabel(event) {

  if (
    event.category.includes('mega') &&
    event.category.includes('stall')
  ) {
    return 'MEGA + STALL';
  }

  if (event.category.includes('mega')) {
    return 'MEGA EVENT';
  }

  return 'STALL';

}


/* =========================================================
   EVENT CARD
   ========================================================= */

function card(event, index) {

  const posterHTML = event.poster

    ? `
      <img
        src="${esc(event.poster)}"
        alt="${esc(event.title)} poster"
        loading="lazy"
      >
    `

    : `
      <div class="poster-placeholder">

        <span>POSTER</span>

        <small>
          TO BE ADDED
        </small>

      </div>
    `;


  let statusLabel = 'REGISTER';

  if (event.status === 'walkin') {
    statusLabel = 'WALK-IN';
  }

  if (event.status === 'payment') {
    statusLabel = 'PAYMENT';
  }


  const dateLabel =
    event.date === '15'
      ? '15 Sep'
      : event.date === '16'
        ? '16 Sep'
        : 'Date TBA';


  return `

    <article
      class="event-card"
      data-date="${esc(event.date)}"
      data-category="${esc(event.category.join(' '))}"
      data-text="${esc(
        (
          event.title +
          ' ' +
          event.club +
          ' ' +
          event.desc +
          ' ' +
          event.tags.join(' ')
        ).toLowerCase()
      )}"
    >


      <!-- POSTER -->

      <div class="poster">

        <span class="designator">
          EVT.${String(index + 1).padStart(2, '0')}
        </span>

        ${posterHTML}

        <span
          class="status ${
            event.status === 'walkin'
              ? 'walkin'
              : event.status === 'payment'
                ? 'payment'
                : 'qr'
          }"
        >
          ${statusLabel}
        </span>

      </div>


      <!-- CARD CONTENT -->

      <div class="card-body">


        <div class="club">
          ${esc(event.club)}
        </div>


        <div class="event-category">
          ${esc(getCategoryLabel(event))}
        </div>


        <h3>
          ${esc(event.title)}
        </h3>


        <p class="desc">
          ${esc(event.desc)}
        </p>


        <div class="chips">

          ${event.tags
            .map(
              tag =>
                `<span class="chip-tag">
                  ${esc(tag)}
                </span>`
            )
            .join('')}

        </div>


        <!-- DETAILS -->

        <div class="details">


          <div class="detail">

            <b>Date</b>

            <span>
              ${dateLabel}
            </span>

          </div>


          <div class="detail">

            <b>Time</b>

            <span>
              ${esc(event.time)}
            </span>

          </div>


          <div class="detail">

            <b>Venue</b>

            <span>
              ${esc(event.venue)}
            </span>

          </div>


          <div class="detail">

            <b>Fee</b>

            <span>
              ${esc(event.fee)}
            </span>

          </div>


        </div>


        <!-- ACTIONS -->

        <div class="card-actions">


          <button
            type="button"
            onclick="openEvent('${event.id}')"
          >
            VIEW DETAILS
          </button>


          ${
            event.link

              ? `
                <a
                  class="register-btn"
                  href="${esc(event.link)}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  REGISTER ↗
                </a>
              `

              : event.paymentQr

                ? `
                  <button
                    type="button"
                    class="register-btn"
                    onclick="openEvent('${event.id}')"
                  >
                    PAY / INFO
                  </button>
                `

                : ''
          }


        </div>

      </div>

    </article>

  `;

}


/* =========================================================
   FILTER + SEARCH
   ========================================================= */

function render() {

  const query =
    search.value
      .trim()
      .toLowerCase();


  const filteredEvents =
    events.filter(event => {


      /* -----------------------------------------
         FILTER
         ----------------------------------------- */

      const matchesFilter =
        filter === 'all' ||

        filter === event.date ||

        event.category.includes(filter);


      /* -----------------------------------------
         SEARCH
         ----------------------------------------- */

      const searchableText = (

        event.title +
        ' ' +
        event.club +
        ' ' +
        event.desc +
        ' ' +
        event.tags.join(' ')

      ).toLowerCase();


      const matchesSearch =
        !query ||
        searchableText.includes(query);


      return (
        matchesFilter &&
        matchesSearch
      );

    });


  /* -----------------------------------------
     EMPTY STATE
     ----------------------------------------- */

  if (!filteredEvents.length) {

    grid.innerHTML = `

      <div class="empty-state">

        NO EVENTS MATCH
        THAT SEARCH.

      </div>

    `;

    return;

  }


  /* -----------------------------------------
     RENDER CARDS
     ----------------------------------------- */

  grid.innerHTML =
    filteredEvents
      .map((event, index) => card(event, index))
      .join('');

}


/* =========================================================
   FILTER BUTTONS
   ========================================================= */

document
  .querySelectorAll('.filter')
  .forEach(button => {

    button.addEventListener(
      'click',
      () => {

        /* Remove active state */
        document
          .querySelectorAll('.filter')
          .forEach(item => {
            item.classList.remove('active');
          });


        /* Activate selected filter */
        button.classList.add('active');


        /* Save filter */
        filter =
          button.dataset.filter;


        /* Re-render */
        render();

      }
    );

  });


/* =========================================================
   SEARCH
   ========================================================= */

search.addEventListener(
  'input',
  render
);


/* =========================================================
   OPEN EVENT MODAL
   ========================================================= */

function openEvent(id) {

  const event =
    events.find(item => item.id === id);


  if (!event) {
    return;
  }


  const category =
    getCategoryLabel(event);


  const dateLabel =
    event.date === '15'

      ? '15 September 2026'

      : event.date === '16'

        ? '16 September 2026'

        : 'Date to be confirmed';


  /* =======================================================
     QR SECTION
     ======================================================= */

  let qrSection = '';


  /*
    REGISTRATION QR
  */

  if (event.qr) {

    qrSection = `

      <div class="qrbox">

        <img
          src="${esc(event.qr)}"
          alt="Registration QR for ${esc(event.title)}"
        >

        <p>
          SCAN TO REGISTER
        </p>

      </div>

    `;

  }


  /*
    PAYMENT QR
  */

  else if (event.paymentQr) {

    qrSection = `

      <div class="qrbox">

        <img
          src="${esc(event.paymentQr)}"
          alt="Payment QR for ${esc(event.title)}"
        >

        <p>
          SCAN TO PAY
        </p>

      </div>

    `;

  }


  /*
    NO QR
  */

  else {

    qrSection = `

      <div class="notice">

        No QR code has been added for this event yet.

      </div>

    `;

  }


  /* =======================================================
     MODAL CONTENT
     ======================================================= */

  modalContent.innerHTML = `

    <div class="modal-inner">


      <!-- POSTER -->

      <div class="modal-poster">

        ${
          event.poster

            ? `
              <img
                src="${esc(event.poster)}"
                alt="${esc(event.title)} poster"
              >
            `

            : `
              <div class="poster-placeholder">

                <span>POSTER</span>

                <small>
                  TO BE ADDED
                </small>

              </div>
            `
        }

      </div>


      <!-- EVENT INFORMATION -->

      <div class="modal-info">


        <div class="club">
          ${esc(event.club)}
        </div>


        <div class="event-category modal-category">
          ${esc(category)}
        </div>


        <h3>
          ${esc(event.title)}
        </h3>


        <p>
          ${esc(event.desc)}
        </p>


        <!-- DETAILS -->

        <div class="modal-details">


          <div class="detail">

            <b>Date</b>

            <span>
              ${dateLabel}
            </span>

          </div>


          <div class="detail">

            <b>Time</b>

            <span>
              ${esc(event.time)}
            </span>

          </div>


          <div class="detail">

            <b>Venue</b>

            <span>
              ${esc(event.venue)}
            </span>

          </div>


          <div class="detail">

            <b>Fee</b>

            <span>
              ${esc(event.fee)}
            </span>

          </div>


        </div>


        <!-- NOTE -->

        ${
          event.note

            ? `
              <div class="notice">

                ${esc(event.note)}

              </div>
            `

            : ''
        }


        <!-- QR -->

        ${qrSection}


        <!-- REGISTRATION BUTTON -->

        ${
          event.link

            ? `
              <a
                class="btn primary"
                style="
                  width:100%;
                  margin-top:15px;
                  text-align:center;
                "
                href="${esc(event.link)}"
                target="_blank"
                rel="noopener noreferrer"
              >
                OPEN REGISTRATION ↗
              </a>
            `

            : ''
        }


      </div>

    </div>

  `;


  /* Open dialog */

  modal.showModal();

}


/* =========================================================
   MAKE FUNCTION AVAILABLE TO INLINE BUTTONS
   ========================================================= */

window.openEvent = openEvent;


/* =========================================================
   CLOSE MODAL
   ========================================================= */

document
  .querySelector('.modal-close')
  .addEventListener(
    'click',
    () => {
      modal.close();
    }
  );


/* =========================================================
   CLOSE WHEN CLICKING OUTSIDE MODAL
   ========================================================= */

modal.addEventListener(
  'click',
  event => {

    if (event.target === modal) {
      modal.close();
    }

  }
);


/* =========================================================
   ESC KEY CLOSE
   ========================================================= */

document.addEventListener(
  'keydown',
  event => {

    if (
      event.key === 'Escape' &&
      modal.open
    ) {
      modal.close();
    }

  }
);


/* =========================================================
   SCHEDULE
   ========================================================= */


/*
  We separate:
  15 SEP
  16 SEP
  DATE TBA
*/

const day15 =
  events.filter(
    event => event.date === '15'
  );

const day16 =
  events.filter(
    event => event.date === '16'
  );

const dateTBA =
  events.filter(
    event =>
      event.date !== '15' &&
      event.date !== '16'
  );


/* =========================================================
   TIMELINE EVENT
   ========================================================= */

function timelineEvent(event) {

  return `

    <div class="time-event">

      <div class="time">
        ${esc(event.time)}
      </div>

      <h4>
        ${esc(event.title)}
      </h4>

      <p>
        ${esc(event.club)}
        ·
        ${esc(event.venue)}
      </p>

    </div>

  `;

}


/* =========================================================
   TIMELINE DAY
   ========================================================= */

function timelineDay(label, eventsForDay) {

  if (!eventsForDay.length) {
    return '';
  }


  return `

    <div class="day-row">


      <div class="day-label">

        ${label}

      </div>


      <div class="day-events">

        ${
          eventsForDay
            .map(timelineEvent)
            .join('')
        }

      </div>


    </div>

  `;

}


/* =========================================================
   RENDER TIMELINE
   ========================================================= */

document.getElementById(
  'timeline'
).innerHTML =

  timelineDay(
    '15 SEP 2026',
    day15
  ) +

  timelineDay(
    '16 SEP 2026',
    day16
  ) +

  timelineDay(
    'DATE TBA',
    dateTBA
  );


/* =========================================================
   COUNTDOWN
   ========================================================= */


/*
  Countdown target:
  15 September 2026 at 9:00 AM IST
*/

(function countdown() {

  const target =
    new Date(
      '2026-09-15T09:00:00+05:30'
    ).getTime();


  const dayElement =
    document.getElementById('cd-d');

  const hourElement =
    document.getElementById('cd-h');

  const minuteElement =
    document.getElementById('cd-m');

  const secondElement =
    document.getElementById('cd-s');

  const caption =
    document.getElementById('cd-caption');


  if (!dayElement) {
    return;
  }


  const pad =
    number =>
      String(number).padStart(2, '0');


  let timer;


  function tick() {

    const difference =
      target - Date.now();


    /* -----------------------------------------
       EVENT HAS STARTED
       ----------------------------------------- */

    if (difference <= 0) {

      dayElement.textContent = '00';
      hourElement.textContent = '00';
      minuteElement.textContent = '00';
      secondElement.textContent = '00';


      caption.textContent =
        "Engineers’ Day is live on campus";


      clearInterval(timer);

      return;

    }


    const totalSeconds =
      Math.floor(
        difference / 1000
      );


    const days =
      Math.floor(
        totalSeconds / 86400
      );


    const hours =
      Math.floor(
        (totalSeconds % 86400) / 3600
      );


    const minutes =
      Math.floor(
        (totalSeconds % 3600) / 60
      );


    const seconds =
      totalSeconds % 60;


    dayElement.textContent =
      pad(days);

    hourElement.textContent =
      pad(hours);

    minuteElement.textContent =
      pad(minutes);

    secondElement.textContent =
      pad(seconds);

  }


  /* Run immediately */

  tick();


  /* Update once every second */

  timer =
    setInterval(
      tick,
      1000
    );

})();


/* =========================================================
   STAT COUNTERS
   ========================================================= */

(function statCounters() {

  const nodes =
    document.querySelectorAll(
      '.stats b[data-count]'
    );


  if (!nodes.length) {
    return;
  }


  function animate(element) {

    const target =
      parseInt(
        element.dataset.count,
        10
      );


    const prefix =
      element.dataset.prefix || '';


    const suffix =
      element.dataset.suffix || '';


    const duration = 900;

    const start =
      performance.now();


    function step(now) {

      const progress =
        Math.min(
          1,
          (now - start) / duration
        );


      const value =
        Math.floor(
          progress * target
        );


      element.textContent =
        prefix +
        value +
        suffix;


      if (progress < 1) {

        requestAnimationFrame(step);

      } else {

        element.textContent =
          prefix +
          target +
          suffix;

      }

    }


    requestAnimationFrame(step);

  }


  /* -----------------------------------------
     Intersection Observer
     ----------------------------------------- */

  if (
    'IntersectionObserver'
    in window
  ) {

    const observer =
      new IntersectionObserver(

        entries => {

          entries.forEach(
            entry => {

              if (
                entry.isIntersecting
              ) {

                animate(
                  entry.target
                );

                observer.unobserve(
                  entry.target
                );

              }

            }
          );

        },

        {
          threshold: 0.6
        }

      );


    nodes.forEach(
      node => {
        observer.observe(node);
      }
    );

  }

  /* -----------------------------------------
     Fallback
     ----------------------------------------- */

  else {

    nodes.forEach(
      animate
    );

  }

})();


/* =========================================================
   INITIAL RENDER
   ========================================================= */

render();