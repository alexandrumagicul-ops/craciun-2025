/**
 * 1. CONFIGURARE DATE & PROGRAM
 */
const program = [
    { start: "12:00", end: "19:30", nume: "Ne pregatim sa plecam, FARA INTARZIERI!!!" },
    { start: "19:30", end: "21:00", nume: "Fam. Colcea", adresa: "Cârjiți, nr. 17", link: "https://maps.app.goo.gl/xagFzSkYZqUTj3yt5?g_st=iw" },
    { start: "21:00", end: "22:00", nume: "Fam. Mates", adresa: "Str. Privighetorilor nr. 2B", link: "https://maps.app.goo.gl/GrBvK8NHvBZauYr98" },
    { start: "22:00", end: "22:30", nume: "Buni Lia", adresa: "Str. Trandafirilor, bl. 4", link: "https://maps.app.goo.gl/bmyXFL4xv6nNeENH7" },
    { start: "22:30", end: "00:00", nume: "Fam. Sorescu", adresa: "Str. Izvorului nr. 16", link: "https://maps.app.goo.gl/F5m755tay38zMSkH7" },
    { start: "00:00", end: "01:00", nume: "Fam. Gabor", adresa: "Str. Zăvoi", link: "https://maps.app.goo.gl/BSbVC3CSpavtXHjs5" },
    { start: "01:00", end: "06:00", nume: "Fam. Petruse", adresa: "Str. Pescărușului", link: "https://maps.app.goo.gl/PQcN9WXbrjxzSMiR6" }
];

const colinde = [
  { id: 0, titlu: "Domn, Domn să-nălțăm", versuri: "Am plecat să colindăm\nDomn, Domn să-nălțăm\nCând boierii nu-s acasă\nDomn, Domn să-nălțăm\n\nȘi-au plecat la vânătoare\nDomn, Domn să-nălțăm\nSă vâneze căprioare\nDomn, Domn să-nălțăm\n\nCaprioare n-au vânat\nDomn, Domn să-nălțăm\nȘi-au vânat un iepuraș\nDomn, Domn să-nălțăm\n\nSă facă din blana lui\nDomn, Domn să-nălțăm\nVeșmânt frumos Domnului\nDomn, Domn să-nălțăm" },
  { id: 1, titlu: "O, ce veste minunată", versuri: "I.\nO, ce veste minunată!\nÎn Betleem ni s-arată\nAstăzi s-a născut\nCel făr' de-nceput\nCum au zis prorocii.\n\nII.\nCă la Betleem Maria\nSăvârşind călătoria,\nÎntr-un mic sălaş,\nLângă-acel oraş,\nA născut pe Mesia.\n\nIII.\nPe fiul în al Său nume,\nTatăl L-a trimis în lume,\nSă se nască\nŞi să crească,\nSă ne mântuiască." },
  { id: 2, titlu: "Deschide ușa, creștine", versuri: "Deschide ușa, creștine\nDeschide ușa, creștine\nCă venim din nou la tine\nLa mulți ani, mulți ani cu bine\n\nDrumu-i lung și-am obosit\nDrumu-i lung și-am obosit\nDe departe am venit\nLa mulți ani, mulți ani cu bine\n\nNoi la Viflaim am fost\nNoi la Viflaim am fost\nUnde S-a născut Hristos\nLa mulți ani, mulți ani cu bine\n\nȘi-am văzut și pe-a Sa mamă\nȘi-am văzut și pe-a Sa mamă\nPe care Maria o chema\nLa mulți ani, mulți ani cu bine\n\nCum umbla din casă-n casă\nCum umbla din casă-n casă\nCa pe Fiul ei să-L nască\nLa mulți ani, mulți ani cu bine\n\nUmbla-n jos și umbla-n sus\nUmbla-n jos și umbla-n sus\nCa să-L nască pe Iisus\nLa mulți ani, mulți ani cu bine\n\nCare cu puterea Sa\nCare cu puterea Sa\nMântui-va lumea\nȘi de-acum până-n vecie mila Domnului să fie\nLa mulți ani, mulți ani cu bine" },
  { id: 3, titlu: "Trei păstori se întâlniră", versuri: "Trei păstori se întâlniră\nRaza soarelui, floarea soarelui\nȘi așa se sfătuiră\n\nHaideți, fraților, să mergem\nHaideți, fraților, să mergem\nRaza soarelui, floarea soarelui\nFloricele să culegem\n\nȘi să facem o cunună\nȘi să facem o cunună\nRaza soarelui, floarea soarelui\nS-o-mpletim cu voie bună\n\nȘi s-o ducem lui Hristos\nȘi s-o ducem lui Hristos\nRaza soarelui, floarea soarelui\nSa ne fie de folos" },
  { id: 4, titlu: "Hoi-la", versuri: "Sloboază-ne, gazdă-n casă\nNu ne ține la fereastră\nHoi-la, hoi-la, la-la\nHoi-la, hoi-la, la-la\n\nSloboază-ne, gazdă-n tindă\nSă vă zicem o colindă\nHoi-la, hoi-la, la-la\nHoi-la, hoi-la, la-la\n\nCă umblăm a colinda\nDe la o casă la alta\nHoi-la, hoi-la, la-la\nHoi-la, hoi-la, la-la\n\nS-om mere la lelea Floare\nCă stă colea mai la vale\nHoi-la, hoi-la, la-la\nHoi-la, hoi-la, la-la\n\nLelea Floare nu ne lasă\nC-i facem tină în casă\nHoi-la, hoi-la, la-la\nHoi-la, hoi-la, la-la\n\nS-om mere la domn' primaru'\nDa' nu ne dă niciun banu'\nHoi-la, hoi-la, la-la\nHoi-la, hoi-la, la-la\n\nS-am venit la dumneavoastră\nCă sunteți gazdă aleasă\nHoi-la, hoi-la, la-la\nHoi-la, hoi-la, la-la\n\nMulțămim că ne-ați primit\nȘi frumos ne-ați omenit\nHoi-la, hoi-la, la-la\nHoi-la, hoi-la, la-la\n\nAmu merem mai departe\nRămâneți cu sănătate\nHoi-la, hoi-la, la-la\nHoi-la, hoi-la, la-la\n\nȘi la anu' om colinda\nNumai dacă ne-ți chema\nHoi-la, hoi-la, la-la\nHoi-la, hoi-la, la-la" }
];
let currentSongIndex = 0;

/**
 * 2. LOGICA STATUS & TIMP
 */
function updateStatus() {
    const acum = new Date();
    const oraAcum = acum.getHours();
    const minuteTotale = oraAcum * 60 + acum.getMinutes();
    const PRAG = 8 * 60;
    const timpComp = (minuteTotale < PRAG) ? minuteTotale + 1440 : minuteTotale;
    
    const timeDisp = document.getElementById('current-time');
    if(timeDisp) timeDisp.innerText = acum.toLocaleTimeString('ro-RO');

    const intervalCurent = program.find(p => {
        const [hS, mS] = p.start.split(':').map(Number);
        const [hE, mE] = p.end.split(':').map(Number);
        let minS = hS * 60 + mS; let minE = hE * 60 + mE;
        if (minS < PRAG) minS += 1440;
        if (minE <= PRAG) minE += 1440;
        return timpComp >= minS && timpComp < minE;
    });

    const statusElement = document.getElementById('current-location');
    const timeLeftElement = document.getElementById('time-left');

    if (statusElement && intervalCurent) {
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
            <a href="${intervalCurent.link}" target="_blank" style="text-decoration:none; color:inherit; display: block; text-align: center;">
                <div style="font-size: 1.2rem; font-weight: bold;">${intervalCurent.nume}</div>
                <div style="font-size: 0.8rem; color: #ffd700;">${intervalCurent.adresa} 📍</div>
                <div style="width: 80%; height: 6px; background: rgba(255,255,255,0.2); border-radius: 10px; margin: 5px auto; overflow:hidden;">
                    <div style="width: ${procent}%; height: 100%; background: #ffd700;"></div>
                </div>
            </a>`;
        
        const diffMs = dEnd - acum;
        const dMin = Math.floor(diffMs / 60000);
        const dSec = Math.floor((diffMs % 60000) / 1000);
        if(timeLeftElement) timeLeftElement.innerHTML = `<span style="color: #ffd700; font-weight:bold;">Rămas: ${dMin}m ${dSec}s</span>`;
    }
}

/**
 * 3. NAVIGARE & PAGINI
 */
function initApp() {
    // ELIMINĂ COMPLET OVERLAY-UL CARE BLOCAZĂ ECRANUL
    const overlay = document.getElementById('notif-overlay');
    if (overlay) {
        overlay.remove();
    }
    document.body.style.overflow = 'auto'; // Activează scroll-ul

    const songList = document.getElementById('song-list');
    if(songList) {
        songList.innerHTML = "";
        colinde.forEach((c, index) => {
            const btn = document.createElement('button');
            btn.className = 'song-btn';
            btn.innerText = c.titlu;
            btn.onclick = () => showLyrics(index);
            songList.appendChild(btn);
        });

        if (!document.getElementById('btn-orar-main')) {
            const wrapper = document.createElement('div');
            wrapper.style.cssText = "width: 100%; display: flex; justify-content: center; margin-top: 30px;";
            const orarBtn = document.createElement('button');
            orarBtn.id = "btn-orar-main";
            orarBtn.innerText = "🗓️ Vezi Orar Complet";
            orarBtn.style.cssText = "background: none; border: 2px solid #ffd700; color: #ffd700; padding: 12px 25px; border-radius: 30px; font-weight: bold; width: 80%; max-width: 300px; cursor: pointer;";
            orarBtn.onclick = showProgramPage;
            wrapper.appendChild(orarBtn);
            songList.after(wrapper);
        }
    }

    document.getElementById('next-song').onclick = () => { 
        currentSongIndex = (currentSongIndex + 1) % colinde.length; 
        showLyrics(currentSongIndex); 
    };
    document.getElementById('prev-song').onclick = () => { 
        currentSongIndex = (currentSongIndex - 1 + colinde.length) % colinde.length; 
        showLyrics(currentSongIndex); 
    };
    document.getElementById('go-home').onclick = () => { 
        document.getElementById('main-content').classList.remove('hidden'); 
        document.getElementById('lyrics-page').classList.add('hidden'); 
    };
}

function showLyrics(index) {
    currentSongIndex = index;
    document.getElementById('main-content').classList.add('hidden');
    document.getElementById('lyrics-page').classList.remove('hidden');
    document.getElementById('song-title').innerText = colinde[index].titlu;
    document.getElementById('song-text').innerText = colinde[index].versuri;
    window.scrollTo(0, 0);
}

/**
 * 4. PAGINA ORAR COMPLET
 */
function showProgramPage() {
    document.getElementById('main-content').classList.add('hidden');
    let pg = document.getElementById('full-program-page');
    if(!pg) {
        pg = document.createElement('div');
        pg.id = 'full-program-page';
        pg.style.cssText = "position: absolute; top: 0; left: 0; width: 100%; min-height: 100vh; background: #2c3e50; z-index: 1000; padding-top: 130px; display: flex; flex-direction: column; align-items: center;";
        document.body.appendChild(pg);
    }
    pg.classList.remove('hidden');

    pg.innerHTML = `
        <h2 style="color: #ffd700; text-align:center; margin-bottom: 20px;">🗓️ Orar Colindat</h2>
        <div style="width: 90%; max-width: 400px; background: rgba(0,0,0,0.8); max-height: 50vh; overflow-y: auto; padding: 20px; border-radius: 15px; border: 1px solid rgba(255,255,255,0.1);">
            ${program.map(p => `
                <div style="margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; color: #4dff88; text-align: center;">
                    <strong>${p.start} - ${p.end}</strong><br>
                    <span style="font-size: 1.1rem; color: white;">${p.nume}</span>
                </div>
            `).join('')}
        </div>
        <button class="song-btn" style="margin-top: 30px; background: #c0392b; width: 80%; max-width: 300px;" onclick="closeProgramPage()">🏠 Înapoi</button>
    `;
}

window.closeProgramPage = function() {
    document.getElementById('full-program-page').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
};

/**
 * 5. PORNIRE DIRECTĂ
 */
function start() {
    initApp();
    setInterval(updateStatus, 1000);
    updateStatus();
}

start();
