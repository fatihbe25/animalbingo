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
  tr: {
    title: "🐾 Hayvan Bingo",
    howto: "📋 Nasıl Oynanır?",
    what1: "Oyun başladığında her seferinde listeden rastgele bir hayvan çıkar",
    what2: "Hayvan sesini dinle",
    what3: "Fiziksel kartında o hayvanı bul ve üzerine tahta piyon koy",
    what4: "Sonraki .. tusuna bas, sıradaki hayvan gelsin",
    what5: "Tüm 20 hayvan çekilene kadar devam et!",
    startbtn: "🎲 Oyunu Başlat!",
    maindrawbtn: "🎲 Sıradaki Hayvanı Çek",
    progresslabel: "hayvan çekildi",
    ready: "Hazır olduğunda başlat!",
    currentLabel: "ŞU AN ÇEKİLEN HAYVAN",
    callertitle: "📋 Bingo Caller Card — Tüm Hayvanlar",
    end1: "Tebrikler!",
    end2: "Tüm 20 hayvan çekildi!<br>Oyun bitti — kazanan kim? 🥳",
    btnrestart: "🔄 Tekrar Oyna"
  },
  en: {
    title: "🐾 Animal Bingo",
    howto: "📋 How to Play?",
    what1: "Each time the game starts, a random animal appears from the list",
    what2: "Listen to the animal sound",
    what3: "Find that animal on your physical card and place a wooden marker",
    what4: "Press the Next button for the next animal to appear",
    what5: "Continue until all 20 animals are drawn!",
    startbtn: "🎲 Start Game!",
    maindrawbtn: "🎲 Draw Next Animal",
    progresslabel: "animals drawn",
    ready: "Start when you are ready!",
    currentLabel: "CURRENT ANIMAL",
    callertitle: "📋 Bingo Caller Card — All Animals",
    end1: "Congratulations!",
    end2: "All 20 animals drawn!<br>Game over — who is the winner? 🥳",
    btnrestart: "🔄 Play Again"
  },
  nl: {
    title: "🐾 Dieren Bingo",
    howto: "📋 Hoe te spelen?",
    what1: "Elke keer dat het spel begint, verschijnt er een willekeurig dier uit de lijst",
    what2: "Luister naar het dierengeluid",
    what3: "Vind dat dier op je fysieke kaart en plaats een houten pion",
    what4: "Druk op de knop Volgende voor het volgende dier",
    what5: "Ga door totdat alle 20 dieren zijn getrokken!",
    startbtn: "🎲 Start Spel!",
    maindrawbtn: "🎲 Volgende Dier Trekken",
    progresslabel: "dieren getrokken",
    ready: "Start wanneer je klaar bent!",
    currentLabel: "HUIDIG DIER",
    callertitle: "📋 Bingo Caller Card — Alle Dieren",
    end1: "Gefeliciteerd!",
    end2: "Alle 20 dieren zijn getrokken!<br>Spel voorbij — wie is de winnaar? 🥳",
    btnrestart: "🔄 Opnieuw Spelen"
  },
  fr: {
    title: "🐾 Bingo des Animaux",
    howto: "📋 Comment jouer ?",
    what1: "Chaque fois que le jeu commence, un animal aléatoire apparaît",
    what2: "Écoutez le cri de l'animal",
    what3: "Trouvez cet animal sur votre carte et placez un jeton en bois",
    what4: "Appuyez sur le bouton Suivant pour l'animal suivant",
    what5: "Continuez jusqu'à ce que les 20 animaux soient tirés !",
    startbtn: "🎲 Commencer le jeu !",
    maindrawbtn: "🎲 Tirer l'animal suivant",
    progresslabel: "animaux tirés",
    ready: "Commencez quand vous êtes prêt !",
    currentLabel: "ANIMAL ACTUEL",
    callertitle: "📋 Carte d'appel du Bingo — Tous les animaux",
    end1: "Félicitations !",
    end2: "Les 20 animaux ont été tirés !<br>Fin du jeu — qui est le gagnant ? 🥳",
    btnrestart: "🔄 Rejouer"
  },
  de: {
    title: "🐾 Tier-Bingo",
    howto: "📋 Wie man spielt?",
    what1: "Jedes Mal, wenn das Spiel beginnt, erscheint ein zufälliges Tier",
    what2: "Hören Sie sich das Tiergeräusch an",
    what3: "Finden Sie das Tier auf Ihrer Karte ve legen Sie einen Holzmarker ab",
    what4: "Drücken Sie die Weiter-Taste für das nächste Tier",
    what5: "Fahren Sie fort, bis alle 20 Tiere gezogen sind!",
    startbtn: "🎲 Spiel starten!",
    maindrawbtn: "🎲 Nächstes Tier ziehen",
    progresslabel: "Tiere gezogen",
    ready: "Starten Sie, wenn Sie bereit sind!",
    currentLabel: "AKTUELLES TIER",
    callertitle: "📋 Bingo-Anruferkarte — Alle Tiere",
    end1: "Herzlichen Glückwunsch!",
    end2: "Alle 20 Tiere wurden gezogen!<br>Spiel vorbei — wer hat gewonnen? 🥳",
    btnrestart: "🔄 Noch einmal spielen"
  }
};



let currentLang = navigator.language.split('-')[0]; 

if (!UI_TEXTS[currentLang]) currentLang = 'en';

// ── STATE ──
let shuffled = [];
let currentIndex = -1;
let calledIds = new Set();


function applyLanguage() {
 
  const currentTranslations = UI_TEXTS[currentLang];

  // Sözlükteki her bir anahtar (key) için döngü başlatıyoruz
  Object.keys(currentTranslations).forEach(key => {
    // ID'yi oluşturuyoruz (Örn: ui-title, ui-how-to)
    // Eğer bazı butonların başında 'ui-' yoksa (örneğin 'main-draw-btn'), 
    // onu kontrol eden küçük bir mantık ekleyebiliriz.
    const elementId = 'ui-' + key;
    const element = document.getElementById(elementId);

    if (element) {

      // Eğer metin HTML (br etiketi vs) içeriyorsa innerHTML, içermiyorsa textContent
      if (currentTranslations[key].includes('<')) {
        element.innerHTML = currentTranslations[key];
      } else {
        element.textContent = currentTranslations[key];
      }
    }
  });

 
  updateProgress();
}

function changeLang(lang) {
  currentLang = lang;
  
  applyLanguage();
  
  buildCallerGrid();  
}


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
  <div id="spotlight-label">${UI_TEXTS[currentLang].currentLabel}</div>
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
  document.getElementById('main-draw-btn').textContent = texts.nextBtn;

}


function updateProgress() {
    const done = calledIds.size;
    const total = ANIMALS.length;
    const fillElem = document.getElementById('progressfill');  
    const labelElem = document.getElementById('ui-progresslabel');  
    
    if (fillElem) {
        fillElem.style.width = (done / total * 100) + '%';
    }

    
    if (labelElem) {
        const text = UI_TEXTS[currentLang].progresslabel;
        labelElem.textContent = `${done} / ${total} ${text}`;
    }
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

window.onload = () => {
  applyLanguage();
};
