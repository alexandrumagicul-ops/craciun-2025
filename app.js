/**
 * 1. CONFIGURARE PROGRAM & COLINDE
 */
const program = [
    { start: "18:00", end: "19:00", nume: "Familia Popescu", tip: "familie" },
    { start: "19:00", end: "19:15", nume: "Pe drum", tip: "drum" },
    { start: "19:15", end: "20:00", nume: "Familia Ionescu", tip: "familie" },
    { start: "20:00", end: "20:10", nume: "Pe drum", tip: "drum" },
    { start: "20:10", end: "05:00", nume: "Familia Vasilescu", tip: "familie" }
];

const colinde = [
    { id: 0, titlu: "O, Ce Veste Minunată", versuri: "O, ce veste minunată!\nÎn Betleem ni s-arată\nCă a născut Mesia\nÎn țara Galileea." },
    { id: 1, titlu: "Domn, Domn să-nălțăm", versuri: "Am plecat să colindăm\nDomn, Domn să-nălțăm\nCând boierii nu-s acasă\nDomn, Domn să-nălțăm." },
    { id: 2, titlu: "Astăzi s-a născut Hristos", versuri: "Astăzi s-a născut Hristos\nMesia chip luminos\nLăudați și cântați\nȘi vă bucurați!" }
];

let currentSongIndex = 0;
let lastNotifTime = "";

/**
 * 2. GESTIUNE NOTIFICĂRI (REPARAT)
 */
const overlay = document.getElementById('notif-overlay');

document.getElementById('btn-da').addEventListener('click', async () => {
    // Ascundem overlay-ul INSTANT pentru a oferi feedback utilizatorului
    overlay.style.display = 'none';
    
    if ("Notification" in window) {
        try {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                new Notification("Sistem Activat! 🎄", { 
                    body: "Vei primi alerte automate în timpul colindului.",
                    icon: "https://cdn-icons-png.flaticon.com/512/3501/3501255.png"
                });
            }
        } catch (err) {
            console.error("Eroare la permisiune:", err);
        }
    }
});

document.getElementById('btn-nu').addEventListener('click', () => {
    // Reîncărcăm pagina pentru a păstra blocajul conform cerinței
    location.reload();
});

/**
 * 3. LOGICA DE TIMP ȘI STATUS
 */
function updateStatus() {
    const acum = new Date();
    const ora = acum.getHours().toString().padStart(2, '0');
    const minut = acum.getMinutes().toString().padStart(2, '0');
    const oraMinutCurenta = `${ora}:${minut}`;
    
    document.getElementById('current-time').innerText = acum.toLocaleTimeString('ro-RO');

    const intervalCurent = program.find(p => oraMinutCurenta >= p.start && oraMinutCurenta < p.end);

    if (intervalCurent) {
        const statusElement = document.getElementById('current-location');
        const timeLeftElement = document.getElementById('time-left');

        statusElement.innerText = (intervalCurent.tip === 'drum') ? "Suntem pe drum spre următoarea familie." : intervalCurent.nume;
        statusElement.style.color = (intervalCurent.tip === 'drum') ? "#ffd700" : "#ffffff";

        const [hEnd, mEnd] = intervalCurent.end.split(':').map(Number);
        const dataEnd = new Date();
        dataEnd.setHours(hEnd, mEnd, 0);
        
        const diffMs = dataEnd - acum;
        const diffMin = Math.max(0, Math.floor(diffMs / 60000));
        const diffSec = Math.max(0, Math.floor((diffMs % 60000) / 1000));
        
        timeLeftElement.innerText = `Timp rămas: ${diffMin}m ${diffSec}s`;

        // Notificări automate
        if (intervalCurent.tip === 'familie' && lastNotifTime !== oraMinutCurenta) {
            if (diffMin === 10) {
                sendNotification("Pregătiți de plecare? 🎄", "Ne-am simțit bine, dar o colindă necântată e ca o seară neterminată.");
                lastNotifTime = oraMinutCurenta;
            } else if (diffMin === 5) {
                sendNotification("Doar 5 minute! ⏱️", "Vă rog să vă îmbrăcați și să ne pregătim de drum.");
                lastNotifTime = oraMinutCurenta;
            }
        }
    } else {
        document.getElementById('current-location').innerText = "În afara programului";
        document.getElementById('time-left').innerText = "--:--";
    }
}

function sendNotification(titlu, text) {
    if (Notification.permission === 'granted') {
        new Notification(titlu, { body: text });
    }
}

/**
 * 4. NAVIGARE COLINDE
 */
function initSongList() {
    const list = document.getElementById('song-list');
    list.innerHTML = "";
    colinde.forEach((c, index) => {
        const btn = document.createElement('button');
        btn.className = 'song-btn';
        btn.innerText = c.titlu;
        btn.onclick = () => showLyrics(index);
        list.appendChild(btn);
    });
}

function showLyrics(index) {
    currentSongIndex = index;
    document.getElementById('main-content').classList.add('hidden');
    document.getElementById('lyrics-page').classList.remove('hidden');
    document.getElementById('song-title').innerText = colinde[index].titlu;
    document.getElementById('song-text').innerText = colinde[index].versuri;
    window.scrollTo(0, 0);
}

document.getElementById('go-home').onclick = () => {
    document.getElementById('main-content').classList.remove('hidden');
    document.getElementById('lyrics-page').classList.add('hidden');
};

document.getElementById('next-song').onclick = () => {
    currentSongIndex = (currentSongIndex + 1) % colinde.length;
    showLyrics(currentSongIndex);
};

document.getElementById('prev-song').onclick = () => {
    currentSongIndex = (currentSongIndex - 1 + colinde.length) % colinde.length;
    showLyrics(currentSongIndex);
};

/**
 * 5. EFECT ZĂPADĂ
 */
function createSnowflakes() {
    const header = document.querySelector('.snowflakes');
    if(!header) return;
    for (let i = 0; i < 15; i++) {
        const flake = document.createElement('div');
        flake.innerHTML = "❄";
        flake.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: -20px;
            font-size: ${Math.random() * 15 + 10}px;
            opacity: ${Math.random()};
            color: white;
            pointer-events: none;
            animation: fall ${Math.random() * 5 + 5}s linear infinite;
        `;
        header.appendChild(flake);
    }
}

// Stilul pentru animația de cădere (se adaugă din JS ca să fii sigur că există)
const style = document.createElement('style');
style.innerHTML = `@keyframes fall { to { transform: translateY(100vh) rotate(360deg); } }`;
document.head.appendChild(style);

// INITIALIZARE
setInterval(updateStatus, 1000);
updateStatus();
initSongList();
createSnowflakes();