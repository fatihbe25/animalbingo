// ── DATA ──

const ANIMALS = [
  { id: 1,  sound: 'bee',        img: 'images/bee.jpg',        translations: { en: 'Bee', tr: 'Arı', nl: 'Bij', fr: 'Abeille', de: 'Biene' } },
  { id: 2,  sound: 'cat',        img: 'images/cat.jpg',        translations: { en: 'Cat', tr: 'Kedi', nl: 'Kat', fr: 'Chat', de: 'Katze' } },
  { id: 3,  sound: 'rooster',    img: 'images/rooster.jpg',    translations: { en: 'Rooster', tr: 'Horoz', nl: 'Haan', fr: 'Coq', de: 'Hahn' } },
  { id: 4,  sound: 'cow',        img: 'images/cow.jpg',        translations: { en: 'Cow', tr: 'İnek', nl: 'Koe', fr: 'Vache', de: 'Kuh' } },
  { id: 5,  sound: 'dog',        img: 'images/dog.jpg',        translations: { en: 'Dog', tr: 'Köpek', nl: 'Hond', fr: 'Chien', de: 'Hund' } },
  { id: 6,  sound: 'duck',       img: 'images/duck.jpg',       translations: { en: 'Duck', tr: 'Ördek', nl: 'Eend', fr: 'Canard', de: 'Ente' } },
  { id: 7,  sound: 'eagle',      img: 'images/eagle.jpg',      translations: { en: 'Eagle', tr: 'Kartal', nl: 'Adelaar', fr: 'Aigle', de: 'Adler' } },
  { id: 8,  sound: 'elephant',   img: 'images/elephant.jpg',   translations: { en: 'Elephant', tr: 'Fil', nl: 'Olifant', fr: 'Éléphant', de: 'Elefant' } },
  { id: 9,  sound: 'frog',       img: 'images/frog.jpg',       translations: { en: 'Frog', tr: 'Kurbağa', nl: 'Kikker', fr: 'Grenouille', de: 'Frosch' } },
  { id: 10, sound: 'horse',      img: 'images/horse.jpg',      translations: { en: 'Horse', tr: 'At', nl: 'Paard', fr: 'Cheval', de: 'Pferd' } },
  { id: 11, sound: 'lion',       img: 'images/lion.jpg',       translations: { en: 'Lion', tr: 'Aslan', nl: 'Leeuw', fr: 'Lion', de: 'Löwe' } },
  { id: 12, sound: 'monkey',     img: 'images/monkey.jpg',     translations: { en: 'Monkey', tr: 'Maymun', nl: 'Aap', fr: 'Singe', de: 'Affe' } },
  { id: 13, sound: 'owl',        img: 'images/owl.jpg',        translations: { en: 'Owl', tr: 'Baykuş', nl: 'Uil', fr: 'Hibou', de: 'Eule' } },
  { id: 14, sound: 'parrot',     img: 'images/parrot.jpg',     translations: { en: 'Parrot', tr: 'Papağan', nl: 'Papegaai', fr: 'Perroquet', de: 'Papagei' } },
  { id: 15, sound: 'pig',        img: 'images/pig.jpg',        translations: { en: 'Pig', tr: 'Domuz', nl: 'Varken', fr: 'Cochon', de: 'Schwein' } },
  { id: 16, sound: 'seagull',    img: 'images/seagull.jpg',    translations: { en: 'Seagull', tr: 'Martı', nl: 'Meeuw', fr: 'Mouette', de: 'Möwe' } },
  { id: 17, sound: 'sheep',      img: 'images/sheep.jpg',      translations: { en: 'Sheep', tr: 'Koyun', nl: 'Schaap', fr: 'Mouton', de: 'Schaf' } },
  { id: 18, sound: 'snake',      img: 'images/snake.jpg',      translations: { en: 'Snake', tr: 'Yılan', nl: 'Slang', fr: 'Serpent', de: 'Schlange' } },
  { id: 19, sound: 'wolf',       img: 'images/wolf.jpg',       translations: { en: 'Wolf', tr: 'Kurt', nl: 'Wolf', fr: 'Loup', de: 'Wolf' } },
  { id: 20, sound: 'woodpecker', img: 'images/woodpecker.jpg', translations: { en: 'Woodpecker', tr: 'Ağaçkakan', nl: 'Specht', fr: 'Pic', de: 'Specht' } },
];


const SOUND_URLS = {
  bee:        'sounds/bee.mp3',
  cat:        'sounds/cat.mp3',
  rooster:    'sounds/rooster.mp3',
  cow:        'sounds/cow.mp3',
  dog:        'sounds/dog.mp3',
  duck:       'sounds/duck.mp3',
  eagle:      'sounds/eagle.mp3',
  elephant:   'sounds/elephant.mp3',
  frog:       'sounds/frog.mp3',
  horse:      'sounds/horse.mp3',
  lion:       'sounds/lion.mp3',
  monkey:     'sounds/monkey.mp3',
  owl:        'sounds/owl.mp3',
  parrot:     'sounds/parrot.mp3',
  pig:        'sounds/pig.mp3',
  seagull:    'sounds/seagull.mp3',
  sheep:      'sounds/sheep.mp3',
  snake:      'sounds/snake.mp3',
  wolf:       'sounds/wolf.mp3',
  woodpecker: 'sounds/woodpecker.mp3',
};

const UI_TEXTS = {
  en: { title: "Animal Bingo", start: "Start Game!", next: "Draw Next Animal", restart: "Play Again", winner: "Winner!", progress: "collected", current: "CURRENT ANIMAL" },
  tr: { title: "Hayvan Bingo", start: "Oyunu Başlat!", next: "Sıradaki Hayvanı Çek", restart: "Tekrar Oyna", winner: "Tebrikler!", progress: "çekildi", current: "ŞU AN ÇEKİLEN HAYVAN" },
  nl: { title: "Dieren Bingo", start: "Start Spel!", next: "Volgende Dier", restart: "Opnieuw Spelen", winner: "Gewonnen!", progress: "verzameld", current: "HUIDIG DIER" },
  fr: { title: "Bingo des Animaux", start: "Jouer!", next: "Animal Suivant", restart: "Rejouer", winner: "Gagné!", progress: "collectés", current: "ANIMAL ACTUEL" },
  de: { title: "Tier-Bingo", start: "Spiel Starten!", next: "Nächstes Tier", restart: "Noch einmal", winner: "Gewonnen!", progress: "gesammelt", current: "AKTUELLES TIER" }
};


let currentLang = navigator.language.split('-')[0]; 

if (!UI_TEXTS[currentLang]) currentLang = 'en';

// ── STATE ──
let shuffled = [];
let currentIndex = -1;
let calledIds = new Set();



function applyLanguage() {
  const texts = UI_TEXTS[currentLang];
  document.getElementById('ui-title').textContent = texts.title;
  if(document.getElementById('ui-start-btn')) document.getElementById('ui-start-btn').textContent = texts.start;
  if(document.getElementById('main-draw-btn')) document.getElementById('main-draw-btn').textContent = texts.next;
}

function changeLang(lang) {
  currentLang = lang;
  applyLanguage();
  buildCallerGrid();  
}

window.onload = () => {
  applyLanguage();
};


function startGame() {
  shuffled = shuffle([...ANIMALS]);
  currentIndex = -1;
  calledIds.clear();
  currentAudio = null;  
  
  applyLanguage();  
  show('game-screen');
  hide('start-screen');

  buildCallerGrid();
  updateProgress();

 
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}


function buildCallerGrid() {
  const grid = document.getElementById('caller-grid');
  grid.innerHTML = '';


  ANIMALS.forEach(a => {
    const cell = document.createElement('div');
    cell.className = 'caller-cell';
    cell.id = 'cell-' + a.id;

     
    const animalName = a.translations[currentLang] || a.translations['en'];

      
    cell.innerHTML = `
        <span class="num">${a.id}</span>
        <img src="${a.img}" alt="${animalName}">
        <span class="cell-name">${animalName}</span>
    `;

    
  /*   if (calledIds.has(a.id)) {
        cell.classList.add('called');
        if (shuffled[currentIndex] && shuffled[currentIndex].id === a.id) {
            cell.classList.add('current');
        }
    } */

    grid.appendChild(cell);
  
  });
}


let currentAudio = null;

function drawNext() {
  if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; }
  currentIndex++;
  if (currentIndex >= shuffled.length) { endGame(); return; }

  const animal = shuffled[currentIndex];
  const animalName = animal.translations[currentLang] || animal.translations['en']; 
  calledIds.add(animal.id);

  document.getElementById('spotlight-content').innerHTML = `
    <div id="spotlight-label">${UI_TEXTS[currentLang].current}</div>
    <img src="${animal.img}" class="animal-img" style="width:180px; height:180px; object-fit:contain; border-radius:15px; margin: 15px 0; border: 4px solid var(--red);">
    <div id="spotlight-name" style="font-family:'Fredoka One'; font-size:2.8rem; color:var(--dark);">${animalName}</div>
  `;


  // Caller grid (kart) güncelleme
  ANIMALS.forEach(a => {
    const cell = document.getElementById('cell-' + a.id);
    if (cell) {
      cell.classList.remove('current');
      if (a.id === animal.id) {
        cell.classList.add('current');
        cell.classList.add('called'); // Anında işaretle
      } else if (calledIds.has(a.id)) {
        cell.classList.add('called');
      }
    }
  });


  const soundPath = SOUND_URLS[animal.sound];
  if (soundPath) {
    currentAudio = new Audio(soundPath);
    currentAudio.play().catch(e => console.log("Auto-play blocked"));
  }

   // Grid ve Progress güncellemeleri aynı kalıyor, sadece UI_TEXTS[currentLang].progress kullanılıyor.
  updateProgress();

   // Buton metnini güncelle (İlk seferden sonra "Sıradaki" olsun)
  //document.getElementById('main-draw-btn').textContent = "🎲 Sıradaki Hayvanı Çek";

  const texts = UI_TEXTS[currentLang];
  document.getElementById('main-draw-btn').textContent = texts.next;

}


function updateProgress() {
  const done = calledIds.size;
  const total = ANIMALS.length;
  const progressText = UI_TEXTS[currentLang].progress; 
  
  document.getElementById('progress-fill').style.width = (done / total * 100) + '%';
  document.getElementById('progress-label').textContent = `${done} / ${total} ${progressText}`;
}

function endGame() {
  hide('game-screen');
  show('end-screen');
}

function restartGame() {
  hide('end-screen');
  hide('game-screen');
  show('start-screen');
}

function show(id) { document.getElementById(id).style.display = 'block'; }
function hide(id) { document.getElementById(id).style.display = 'none'; }