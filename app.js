/**
 * 1. CONFIGURARE DATA START & PROGRAM
 */
const DATA_START = new Date('2025-12-24T00:00:00'); 

const program = [
    { start: "19:30", end: "21:00", nume: "Fam. Colcea", adresa: "Cârjiți, nr. 17", link: "https://maps.app.goo.gl/xagFzSkYZqUTj3yt5?g_st=iw", tip: "familie" },
    { start: "21:00", end: "22:00", nume: "Fam. Mates", adresa: "Str. Privighetorilor nr. 2B", link: "https://maps.app.goo.gl/GrBvK8NHvBZauYr98", tip: "familie" },
    { start: "22:00", end: "22:30", nume: "Buni Lia", adresa: "Str. Trandafirilor, bl. 4", link: "https://maps.app.goo.gl/bmyXFL4xv6nNeENH7", tip: "familie" },
    { start: "22:30", end: "00:00", nume: "Fam. Sorescu", adresa: "Str. Izvorului nr. 16", link: "https://maps.app.goo.gl/F5m755tay38zMSkH7", tip: "familie" },
    { start: "00:00", end: "01:00", nume: "Fam. Gabor", adresa: "Str. Zăvoi", link: "https://maps.app.goo.gl/BSbVC3CSpavtXHjs5", tip: "familie" },
    { start: "01:00", end: "06:00", nume: "Fam. Petruse", adresa: "Str. Pescărușului", link: "https://maps.app.goo.gl/PQcN9WXbrjxzSMiR6", tip: "familie" }
];

const colinde = [
    { id: 0, titlu: "O, Ce Veste Minunată", versuri: "O, ce veste minunată!\nÎn Betleem ni s-arată\nCă a născut Mesia\nÎn țara Galileea." },
    { id: 1, titlu: "Domn, Domn să-nălțăm", versuri: "Am plecat să colindăm\nDomn, Domn să-nălțăm\nCând boierii nu-s acasă\nDomn, Domn să-nălțăm." }
];

let currentSongIndex = 0;
let lastNotifTime = "";

/**
 * 2. VERIFICARE DATĂ (PAGINA DE AȘTEPTARE)
 */
function checkEventDate() {
    const acum = new Date();
    if (acum < DATA_START) {
        document.body.innerHTML = `
            <div class="waiting-page" style="text-align: center; padding: 20px; color: white; font-family: sans-serif; background: #2c3e50; min-height: 100vh;">
                <div class="snowflakes"></div>
                <h1 style="font-size: 3rem; margin-bottom: 10px;">🎄</h1>
                <h2 style="margin-bottom: 20px;">Program Colindători</h2>
                
                <div class="info-box" style="background: rgba(255,255,255,0.1); margin: 0 auto; width: 100%; max-width: 450px; padding: 20px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
                    <p style="color: #ffd700; font-weight: bold; font-size: 1.2rem; margin-bottom: 20px;">Orar și Locații:</p>
                    <div style="text-align: left;">
                        ${program.map(p => `
                            <a href="${p.link}" target="_blank" style="text-decoration: none; color: white; display: block; padding: 12px; margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.2); border-radius: 10px;">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <strong style="color: #4dff88;">${p.start} - ${p.end}</strong>
                                    <span style="font-size: 1.2rem;">📍</span>
                                </div>
                                <div style="font-size: 1.1rem; font-weight: bold; margin-top: 5px;">${p.nume}</div>
                                <div style="font-size: 0.85rem; opacity: 0.8; color: #ffd700;">${p.adresa}</div>
                            </a>
                        `).join('')}
                    </div>
                </div>
                
                <div style="margin-top: 30px; font-style: italic; opacity: 0.8;">
                    🎅 Site-ul se activează automat în ziua plecării!
                </div>
            </div>
        `;
        createSnowflakes();
        return true;
    }
    return false;
}

if (!checkEventDate()) {
    
    // 3. GESTIUNE NOTIFICĂRI (REPARAT)
    const overlay = document.getElementById('notif-overlay');
    const btnDa = document.getElementById('btn-da');
    const btnNu = document.getElementById('btn-nu');

    if(overlay && btnDa && btnNu) {
        btnDa.addEventListener('click', async () => {
            overlay.style.display = 'none';
            if ("Notification" in window) {
                try { 
                    const permission = await Notification.requestPermission();
                    if(permission === 'granted') {
                        new Notification("Notificări activate!", { body: "Vei primi alerte cu 10 minute înainte de plecare." });
                    }
                } catch (err) { console.error(err); }
            }
        });
        btnNu.addEventListener('click', () => { 
            overlay.style.display = 'none'; 
        });
    }

    /**
     * 4. LOGICA STATUS & BARA DE PROGRES
     */
    function updateStatus() {
        const acum = new Date();
        const oraAcum = acum.getHours();
        const minutAcum = acum.getMinutes();
        const minuteTotaleAcum = oraAcum * 60 + minutAcum;
        const PRAG = 8 * 60;
        const timpCompAcum = (minuteTotaleAcum < PRAG) ? minuteTotaleAcum + 1440 : minuteTotaleAcum;
        
        const timeDisplay = document.getElementById('current-time');
        if(timeDisplay) timeDisplay.innerText = acum.toLocaleTimeString('ro-RO');

        const intervalCurent = program.find(p => {
            const [hS, mS] = p.start.split(':').map(Number);
            const [hE, mE] = p.end.split(':').map(Number);
            let minS = hS * 60 + mS;
            let minE = hE * 60 + mE;
            if (minS < PRAG) minS += 1440;
            if (minE <= PRAG) minE += 1440;
            return timpCompAcum >= minS && timpCompAcum < minE;
        });

        const statusElement = document.getElementById('current-location');
        const timeLeftElement = document.getElementById('time-left');

        if (statusElement) {
            if (intervalCurent) {
                const [hS, mS] = intervalCurent.start.split(':').map(Number);
                const [hE, mE] = intervalCurent.end.split(':').map(Number);
                const dStart = new Date(); dStart.setHours(hS, mS, 0);
                const dEnd = new Date(); 
                if (hE * 60 + mE <= hS * 60 + mS) dEnd.setDate(dEnd.getDate() + 1);
                dEnd.setHours(hE, mE, 0);
                
                const totalMs = dEnd - dStart;
                const trecutMs = acum - dStart;
                const procent = Math.min(100, Math.max(0, (trecutMs / totalMs) * 100));

                statusElement.innerHTML = `
                    <a href="${intervalCurent.link}" target="_blank" style="text-decoration:none; color:inherit; display:block;">
                        <div style="font-size: 1.4rem; font-weight: bold;">${intervalCurent.nume}</div>
                        <div style="font-size: 0.85rem; opacity: 0.8; color: #ffd700; margin: 4px 0 10px 0;">${intervalCurent.adresa} 📍</div>
                        <div style="width: 100%; height: 8px; background: rgba(255,255,255,0.2); border-radius: 10px; overflow: hidden;">
                            <div style="width: ${procent}%; height: 100%; background: #ffd700; transition: width 1s linear;"></div>
                        </div>
                    </a>
                `;

                const diffMs = dEnd - acum;
                const dMin = Math.floor(diffMs / 60000);
                const dSec = Math.floor((diffMs % 60000) / 1000);
                
                if(timeLeftElement) {
                    timeLeftElement.innerHTML = `<span style="color: #ffd700; font-weight: bold;">Rămas: ${dMin}m ${dSec}s</span>`;
                }

                // Notificare la 10 minute
                const oraMinutString = `${oraAcum}:${minutAcum}`;
                if (dMin === 10 && lastNotifTime !== oraMinutString) {
                    sendNotification("Pregătiți de plecare!", `Mai sunt 10 minute la ${intervalCurent.nume}.`);
                    lastNotifTime = oraMinutString;
                }
            } else {
                statusElement.innerText = "În afara programului";
                if(timeLeftElement) timeLeftElement.innerText = "--:--";
            }
        }
    }

    /**
     * 5. PAGINA PROGRAM (ORAR COMPLET)
     */
    window.showProgramPage = function() {
        const acum = new Date();
        const minuteTotaleAcum = acum.getHours() * 60 + acum.getMinutes();
        const PRAG = 8 * 60;
        const timpCompAcum = (minuteTotaleAcum < PRAG) ? minuteTotaleAcum + 1440 : minuteTotaleAcum;

        document.getElementById('main-content').classList.add('hidden');
        let pg = document.getElementById('full-program-page');
        if(!pg) {
            pg = document.createElement('div');
            pg.id = 'full-program-page';
            pg.className = 'container';
            document.body.appendChild(pg);
        }
        pg.classList.remove('hidden');

        pg.innerHTML = `
            <h2 style="color: #ffd700;">🗓️ Orar Colindat</h2>
            <div class="info-box" style="text-align: left; background: rgba(0,0,0,0.6); max-height: 60vh; overflow-y: auto; padding: 15px; border-radius: 10px;">
                ${program.map(p => {
                    const [hE, mE] = p.end.split(':').map(Number);
                    let minE = hE * 60 + mE;
                    if (minE <= PRAG) minE += 1440;
                    const aTrecut = timpCompAcum >= minE;
                    const stil = aTrecut ? 'text-decoration: line-through; color: #ff4d4d; opacity: 0.5;' : 'color: #4dff88; font-weight: bold;';
                    return `
                        <div style="margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; ${stil}">
                            <div style="display: flex; justify-content: space-between;">
                                <strong>${p.start} - ${p.end}</strong>
                                <span>${aTrecut ? '✅' : '⏳'}</span>
                            </div>
                            <div style="font-size: 1.1rem;">${p.nume}</div>
                        </div>
                    `;
                }).join('')}
            </div>
            <button class="song-btn" style="margin-top: 20px; background: #c0392b;" onclick="closeProgramPage()">🏠 Înapoi</button>
        `;
    }

    window.closeProgramPage = function() {
        document.getElementById('full-program-page').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
    }

    /**
     * 6. INIȚIALIZARE COLINDE
     */
    function initSongList() {
        const list = document.getElementById('song-list');
        if(!list) return;
        list.innerHTML = "";
        colinde.forEach((c, index) => {
            const btn = document.createElement('button');
            btn.className = 'song-btn';
            btn.innerText = c.titlu;
            btn.onclick = () => showLyrics(index);
            list.appendChild(btn);
        });

        const orarBtn = document.createElement('button');
        orarBtn.innerText = "🗓️ Vezi Orar Complet";
        orarBtn.style.cssText = "background: none; border: 1px solid #ffd700; color: #ffd700; margin-top: 20px; padding: 12px; width: 100%; border-radius: 20px; cursor: pointer; font-weight: bold;";
        orarBtn.onclick = showProgramPage;
        list.appendChild(orarBtn);
    }

    function showLyrics(index) {
        currentSongIndex = index;
        document.getElementById('main-content').classList.add('hidden');
        document.getElementById('lyrics-page').classList.remove('hidden');
        document.getElementById('song-title').innerText = colinde[index].titlu;
        document.getElementById('song-text').innerText = colinde[index].versuri;
        window.scrollTo(0, 0);
    }

    const gh = document.getElementById('go-home');
    if(gh) gh.onclick = () => {
        document.getElementById('main-content').classList.remove('hidden');
        document.getElementById('lyrics-page').classList.add('hidden');
    };

    function sendNotification(titlu, text) {
        if (Notification.permission === 'granted') new Notification(titlu, { body: text });
    }

    setInterval(updateStatus, 1000);
    updateStatus();
    initSongList();
}

/**
 * 7. EFECT ZĂPADĂ
 */
function createSnowflakes() {
    const container = document.body;
    for (let i = 0; i < 15; i++) {
        const flake = document.createElement('div');
        flake.innerHTML = "❄";
        flake.style.cssText = `position: fixed; left: ${Math.random()*100}%; top: -20px; font-size: ${Math.random()*20+10}px; opacity: ${Math.random()}; color: white; pointer-events: none; animation: fall ${Math.random()*5+5}s linear infinite; z-index: 9999;`;
        container.appendChild(flake);
    }
}
createSnowflakes();

