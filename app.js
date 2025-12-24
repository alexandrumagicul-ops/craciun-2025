/**
 * 1. CONFIGURARE DATE & PROGRAM
 */
const DATA_INCEPUT = new Date("2025-12-24T19:30:00");
const DATA_INCHIDERE = new Date("2025-12-25T06:00:00");

// LINK-URILE TALE
const LINK_UPLOAD = "https://www.dropbox.com/request/CzqENkIYh8ThxrjZTHeH"; 
const LINK_VIZUALIZARE = "https://www.dropbox.com/scl/fo/b6rauhq15dt84rbyeqn1q/AIwZgObjp3tZVehirvEMZM0?rlkey=bg59tgjsrmg2l5q41mnluml9w&st=vawugpnm&dl=0";

const program = [
    { start: "2025-12-24T19:30:00", end: "2025-12-24T21:00:00", nume: "Fam. Colcea", adresa: "Cârjiți, nr. 17", link: "https://maps.app.goo.gl/xagFzSkYZqUTj3yt5?g_st=iw" },
    { start: "2025-12-24T21:00:00", end: "2025-12-24T22:00:00", nume: "Fam. Mates", adresa: "Str. Privighetorilor nr. 2B", link: "https://maps.app.goo.gl/GrBvK8NHvBZauYr98" },
    { start: "2025-12-24T22:00:00", end: "2025-12-24T22:30:00", nume: "Buni Lia", adresa: "Str. Trandafirilor, bl. 4", link: "https://maps.app.goo.gl/bmyXFL4xv6nNeENH7" },
    { start: "2025-12-24T22:30:00", end: "2025-12-25T00:00:00", nume: "Fam. Sorescu", adresa: "Str. Izvorului nr. 16", link: "https://maps.app.goo.gl/F5m755tay38zMSkH7" },
    { start: "2025-12-25T00:00:00", end: "2025-12-25T01:00:00", nume: "Fam. Gabor", adresa: "Str. Zăvoi", link: "https://maps.app.goo.gl/BSbVC3CSpavtXHjs5" },
    { start: "2025-12-25T01:00:00", end: "2025-12-25T06:00:00", nume: "Fam. Petruse", adresa: "Str. Pescărușului", link: "https://maps.app.goo.gl/PQcN9WXbrjxzSMiR6" }
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
    
    if (acum > DATA_INCHIDERE) {
        afiseazaMesajFinal();
        return;
    }

    const timeDisp = document.getElementById('current-time');
    if(timeDisp) timeDisp.innerText = acum.toLocaleTimeString('ro-RO');

    const statusElement = document.getElementById('current-location');
    const timeLeftElement = document.getElementById('time-left');

    if (acum < DATA_INCEPUT) {
        statusElement.innerHTML = `<div style="color: #ff4d4d; font-weight: bold; font-size: 1.1rem;">Ne pregătim de plecare, FĂRĂ ÎNTÂRZIERI! 😤</div>`;
        timeLeftElement.innerText = "Încă nu am pornit la drum...";
        return;
    }

    const intervalCurent = program.find(p => {
        const start = new Date(p.start);
        const end = new Date(p.end);
        return acum >= start && acum < end;
    });

    if (statusElement && intervalCurent) {
        const dEnd = new Date(intervalCurent.end);
        statusElement.innerHTML = `<div style="font-size: 1.1rem; font-weight: bold;">${intervalCurent.nume}</div><div style="font-size: 0.8rem; color: #ffd700;">${intervalCurent.adresa || '📍'}</div>`;
        
        const diffMs = dEnd - acum;
        const dMin = Math.floor(diffMs / 60000);
        const dSec = Math.floor((diffMs % 60000) / 1000);
        if(timeLeftElement) timeLeftElement.innerHTML = `<span style="color:#ffd700;">Rămas: ${dMin}m ${dSec}s</span>`;
    } else {
        statusElement.innerHTML = "Crăciun fericit!";
        timeLeftElement.innerText = "";
    }
}

/**
 * 3. NAVIGARE & PAGINI
 */
function initApp() {
    if (new Date() > DATA_INCHIDERE) {
        afiseazaMesajFinal();
        return;
    }
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
        const wrapper = document.createElement('div');
        wrapper.style.cssText = "display: flex; flex-direction: column; align-items: center; gap: 15px; margin-top: 30px; padding-bottom: 50px;";
        
        const pozeBtn = document.createElement('button');
        pozeBtn.innerText = "📸 Albumul Nostru (Poze)";
        pozeBtn.style.cssText = "background: #165b33; border: 2px solid white; color: white; padding: 15px 25px; border-radius: 30px; font-weight: bold; width: 85%; max-width: 300px; cursor: pointer; font-size: 1.1rem;";
        pozeBtn.onclick = showPhotosInfoPage;
        
        const orarBtn = document.createElement('button');
        orarBtn.innerText = "🗓️ Vezi Orar Complet";
        orarBtn.style.cssText = "background: none; border: 1px solid #ffd700; color: #ffd700; padding: 12px 25px; border-radius: 30px; font-weight: bold; width: 85%; max-width: 300px; cursor: pointer;";
        orarBtn.onclick = showProgramPage;
        
        wrapper.appendChild(pozeBtn);
        wrapper.appendChild(orarBtn);
        songList.after(wrapper);
    }
    document.getElementById('next-song').onclick = () => { currentSongIndex = (currentSongIndex + 1) % colinde.length; showLyrics(currentSongIndex); };
    document.getElementById('prev-song').onclick = () => { currentSongIndex = (currentSongIndex - 1 + colinde.length) % colinde.length; showLyrics(currentSongIndex); };
    document.getElementById('go-home').onclick = () => {
        document.getElementById('main-content').classList.remove('hidden');
        document.getElementById('lyrics-page').classList.add('hidden');
        document.getElementById('main-header').classList.remove('hidden');
    };
}

function showLyrics(index) {
    currentSongIndex = index;
    document.getElementById('main-content').classList.add('hidden');
    document.getElementById('lyrics-page').classList.remove('hidden');
    document.getElementById('main-header').classList.add('hidden');
    document.getElementById('song-title').innerText = colinde[index].titlu;
    document.getElementById('song-text').innerText = colinde[index].versuri;
    window.scrollTo(0, 0);
}

function showPhotosInfoPage() {
    document.getElementById('main-content').classList.add('hidden');
    document.getElementById('main-header').classList.add('hidden');
    let pg = document.getElementById('photo-page');
    if(!pg) {
        pg = document.createElement('div');
        pg.id = 'photo-page';
        pg.style.cssText = "padding: 60px 20px; text-align: center; min-height: 100vh; background: #001529;";
        document.body.appendChild(pg);
    }
    pg.classList.remove('hidden');
    pg.innerHTML = `
        <h1 style="color:var(--gold); font-size: 2.2rem; margin-bottom: 20px;">📸 Albumul Nostru</h1>
        
        <div style="font-size: 1.15rem; margin: 30px 0; line-height: 1.6; background: rgba(255,255,255,0.05); padding: 25px; border-radius: 20px; color: white;">
            <p>Seara de colindat trece repede, dar amintirile rămân pentru totdeauna! ✨</p>
            <p>Te invităm să adaugi în folderul nostru comun toate pozele și momentele video surprinse în această seară.</p>
            <p style="font-style: italic; color: #4dff88;">Așa ne vom putea bucura cu toții de ele și le vom putea descărca oricând, ca să ne amintim cu drag de această seară minunată.</p>
        </div>

        <div class="grid-songs" style="display: flex; flex-direction: column; gap: 15px; align-items: center;">
            <button class="song-btn" style="width: 85%; max-width: 300px;" onclick="window.open('${LINK_UPLOAD}', '_blank')">⬆️ Adaugă poze și video</button>
            <button class="song-btn" style="width: 85%; max-width: 300px;" onclick="window.open('${LINK_VIZUALIZARE}', '_blank')">📥 Vezi și descarcă</button>
        </div>

        <button onclick="document.getElementById('photo-page').classList.add('hidden'); document.getElementById('main-content').classList.remove('hidden'); document.getElementById('main-header').classList.remove('hidden');" style="background:none; border:1px solid white; color:white; padding:10px 25px; border-radius:10px; margin-top: 40px; cursor: pointer;">Înapoi</button>
    `;
}

function showProgramPage() {
    const acum = new Date();
    document.getElementById('main-content').classList.add('hidden');
    let pg = document.createElement('div');
    pg.style.cssText = "position:fixed; inset:0; background:#001529; z-index:1000; padding:20px; overflow-y:auto; padding-top:40px;";
    
    const htmlProgram = program.map(p => {
        const start = new Date(p.start);
        const end = new Date(p.end);
        let stil = "color: #4dff88;";
        let textDecor = "none";
        
        if (acum > end) {
            stil = "color: #ff4d4d; opacity: 0.6;";
            textDecor = "line-through";
        } else if (acum >= start && acum <= end) {
            stil = "color: #ffd700; font-weight: bold; border: 1px solid #ffd700; border-radius: 10px;";
        }

        const oraStart = start.getHours().toString().padStart(2, '0') + ":" + start.getMinutes().toString().padStart(2, '0');
        const oraEnd = end.getHours().toString().padStart(2, '0') + ":" + end.getMinutes().toString().padStart(2, '0');

        return `<div style="padding:15px; border-bottom:1px solid #222; text-align:center; ${stil} text-decoration: ${textDecor};">
                    <strong>${oraStart} - ${oraEnd}</strong><br>${p.nume}
                </div>`;
    }).join('');

    pg.innerHTML = `
        <h2 style="color:var(--gold)">🗓️ Orar Colindat</h2>
        ${htmlProgram}
        <button onclick="this.parentElement.remove(); document.getElementById('main-content').classList.remove('hidden');" class="song-btn" style="margin-top:30px; background:var(--christmas-red); color:white; width:100%;">Înapoi la Acasă</button>
    `;
    document.body.appendChild(pg);
}

function afiseazaMesajFinal() {
    document.body.innerHTML = `
        <div style="min-height: 100vh; background: linear-gradient(#001529, #165b33); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; text-align: center; color: white;">
            <div style="font-size: 4rem;">🌟</div>
<h1 style="color: #ffd700; font-size: 2.5rem;">A fost o seară de poveste!</h1>
            <p style="font-size: 1.3rem; max-width: 600px; line-height: 1.6; margin: 20px 0;">
                Ecourile colindelor s-au stins, dar bucuria rămâne în sufletele noastre. Vă mulțumim tuturor pentru clipele speciale.
            </p>

                Intră în albumul colectiv pentru a vedea toate pozele serii, pentru a urca amintirile tale sau pentru a descărca ce ți-a plăcut!
            </p>

            <div style="background: rgba(255,255,255,0.08); padding: 25px; border-radius: 30px; border: 1px solid rgba(255,215,0,0.3); width: 90%; max-width: 500px;">
                <h2 style="color: #ffd700; font-size: 1.2rem; margin-top: 0; margin-bottom: 20px;">📸 Amintirile Noastre</h2>
                <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
                    <button class="song-btn" style="width: 100%;" onclick="window.open('${LINK_UPLOAD}', '_blank')">⬆️ Adaugă poze/video</button>
                    <button class="song-btn" style="width: 100%;" onclick="window.open('${LINK_VIZUALIZARE}', '_blank')">📥 Vezi și descarcă</button>
                </div>
            </div>
        </div>`;
}

initApp();
setInterval(updateStatus, 1000);
updateStatus();
