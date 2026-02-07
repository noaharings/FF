// Modal content data
const modalData = {
    woningen: {
        icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
        title: 'Betaalbare Woningen',
        content: `
            <p>Wonen is een grondrecht. Iedereen in onze gemeente moet kunnen rekenen op een betaalbare, veilige en kwalitatief goede woning. We zien echter dat dit voor steeds meer mensen een probleem wordt.</p>
            
            <h4>Onze concrete plannen</h4>
            <ul>
                <li><strong>Meer sociale huurwoningen:</strong> Jaarlijks minimaal 100 nieuwe betaalbare huurwoningen realiseren, speciaal gericht op starters, jonge gezinnen en senioren.</li>
                <li><strong>Huurprijzen reguleren:</strong> Maximale huurprijs koppelen aan lokaal inkomen, zodat niemand meer dan 30% van hun salaris kwijt is aan woonlasten.</li>
                <li><strong>Leegstand bestrijden:</strong> Streng leegstandsbeleid invoeren en leegstaande panden omzetten naar betaalbare woningen.</li>
                <li><strong>Startersleningen uitbreiden:</strong> Extra ondersteuning en voorrang voor jongeren bij het kopen van hun eerste woning.</li>
                <li><strong>Duurzaam bouwen:</strong> Alle nieuwbouw moet energieneutraal zijn om woonlasten structureel te verlagen.</li>
            </ul>

            <h4>Waarom is dit zo belangrijk?</h4>
            <p>Een goede woning is de basis voor een stabiel leven. Zonder betaalbaar wonen kunnen mensen niet goed werken, studeren of een gezin stichten. Door te investeren in woningen investeren we in de toekomst van al onze inwoners en de stabiliteit van onze gemeenschap.</p>
        `
    },
    groen: {
        icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
        title: 'Leefbare Dorpen',
        content: `
            <p>Onze dorpen moeten groene, gezonde plekken blijven om te wonen. Door te investeren in groen, natuurbehoud en duurzaamheid zorgen we voor een betere leefomgeving voor huidige en toekomstige generaties.</p>
            
            <h4>Onze concrete plannen</h4>
            <ul>
                <li><strong>1000 nieuwe bomen:</strong> In de komende raadsperiode 1000 extra bomen planten in onze dorpen voor verkoeling, biodiversiteit en luchtkwaliteit.</li>
                <li><strong>Natuurgebieden beschermen:</strong> Geen nieuwe bebouwing in beschermde gebieden en actief beheer van bestaande natuur.</li>
                <li><strong>Groen in wijken:</strong> Meer groene speelplekken, parkjes en bomenrijen in woonwijken.</li>
                <li><strong>Duurzame energie stimuleren:</strong> Subsidies voor zonnepanelen en andere vormen van duurzame energie op woningen en bedrijven.</li>
                <li><strong>Afval reduceren:</strong> Programma's om plastic gebruik te verminderen en circulaire economie te bevorderen.</li>
            </ul>

            <h4>Waarom is dit zo belangrijk?</h4>
            <p>We hebben maar één aarde en onze natuurlijke omgeving is de basis van ons bestaan. Door nu te investeren in groen en duurzaamheid zorgen we ervoor dat Gulpen-Wittem leefbaar blijft en dat we een mooie gemeente doorgeven aan de volgende generaties.</p>
        `
    },
    onderwijs: {
        icon: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
        title: 'Onderwijs & Jeugd',
        content: `
            <p>Onze kinderen en jongeren verdienen het beste onderwijs en de beste kansen. Goed onderwijs is de sleutel tot een succesvolle toekomst, zowel voor het individu als voor onze gemeenschap.</p>
            
            <h4>Onze concrete plannen</h4>
            <ul>
                <li><strong>Kleinere klassen:</strong> Maximaal 20 leerlingen per klas in het basisonderwijs voor meer persoonlijke aandacht en begeleiding.</li>
                <li><strong>Moderne faciliteiten:</strong> Renovatie van verouderde scholen en investering in moderne voorzieningen zoals ICT en sportfaciliteiten.</li>
                <li><strong>Extra ondersteuning:</strong> Meer budget voor begeleiding van kinderen die extra hulp nodig hebben, van hoogbegaafdheid tot leerproblemen.</li>
                <li><strong>Veilige schoolroutes:</strong> Alle routes naar school voorzien van veilige oversteekplaatsen, zebrapaden en goede verlichting.</li>
                <li><strong>Jeugdactiviteiten:</strong> Steun voor jeugdverenigingen, sportclubs en culturele activiteiten voor jongeren.</li>
            </ul>

            <h4>Waarom is dit zo belangrijk?</h4>
            <p>Investeren in onderwijs en jeugd is investeren in de toekomst van onze gemeente. Goed onderwijs biedt kinderen kansen, ontwikkelt talenten en zorgt voor een sterke, sociale gemeenschap waarin iedereen zich kan ontplooien.</p>
        `
    },
    verkeer: {
        icon: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
        title: 'Mobiliteit & Bereikbaarheid',
        content: `
            <p>Iedereen moet zich veilig en gemakkelijk kunnen verplaatsen door onze gemeente, of je nu fietst, loopt, de bus neemt of met de auto rijdt. Goede bereikbaarheid is essentieel voor werk, school en sociale contacten.</p>
            
            <h4>Onze concrete plannen</h4>
            <ul>
                <li><strong>Veilige fietspaden:</strong> Alle doorgaande wegen voorzien van gescheiden, goed verlichte fietspaden.</li>
                <li><strong>Openbaar vervoer verbeteren:</strong> Meer busverbindingen en betere aansluiting op regionale knooppunten.</li>
                <li><strong>30 km zones:</strong> Alle woonwijken worden 30 km zones voor veiligheid van kinderen en fietsers.</li>
                <li><strong>Parkeeroplossingen:</strong> Voldoende parkeerplaatsen bij voorzieningen en betaalbaar parkeren in het centrum.</li>
                <li><strong>Laadinfrastructuur:</strong> Uitbreiding van laadpalen voor elektrische voertuigen en fietsen.</li>
            </ul>

            <h4>Waarom is dit zo belangrijk?</h4>
            <p>Goede mobiliteit verbindt mensen met hun werk, voorzieningen en sociale contacten. Door te investeren in veilige wegen en goed openbaar vervoer maken we onze gemeente toegankelijk en leefbaar voor iedereen.</p>
        `
    },
    economie: {
        icon: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
        title: 'Lokale Economie',
        content: `
            <p>Een bloeiende lokale economie zorgt voor werkgelegenheid, welvaart en een levendige gemeenschap. We ondersteunen ondernemers en zorgen dat iedereen kansen heeft op de arbeidsmarkt.</p>
            
            <h4>Onze concrete plannen</h4>
            <ul>
                <li><strong>MKB ondersteunen:</strong> Subsidies en lage huren voor startende ondernemers die zich in Gulpen-Wittem vestigen.</li>
                <li><strong>Winkelcentra versterken:</strong> Investeren in aantrekkelijke winkelstraten met goede voorzieningen en parkeren.</li>
                <li><strong>Stageplekken creëren:</strong> Samenwerking tussen scholen en bedrijven voor stage- en leerwerkplekken voor jongeren.</li>
                <li><strong>Toerisme bevorderen:</strong> Marketing van onze gemeente als toeristische bestemming met evenementen en attracties.</li>
                <li><strong>Leegstand aanpakken:</strong> Creatieve herbestemming van leegstaande bedrijfspanden.</li>
            </ul>

            <h4>Waarom is dit zo belangrijk?</h4>
            <p>Werk geeft mensen inkomen, waardigheid en toekomstperspectief. Een sterke lokale economie zorgt ervoor dat onze gemeente levendig en aantrekkelijk blijft en dat jong en oud hier kunnen blijven wonen en werken.</p>
        `
    },
    cultuur: {
        icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
        title: 'Cultuur & Tradities',
        content: `
            <p>Onze lokale cultuur, tradities en het verenigingsleven zijn de ziel van Gulpen-Wittem. Ze verbinden mensen, geven identiteit en maken onze gemeente uniek. Het behoud en de versterking hiervan staat centraal in ons programma.</p>
            
            <h4>Onze concrete plannen</h4>
            <ul>
                <li><strong>Verenigingen ondersteunen:</strong> Structurele subsidies voor sportverenigingen, muziekverenigingen, schutterijen en andere culturele verenigingen.</li>
                <li><strong>Evenementen faciliteren:</strong> Ondersteuning voor lokale festivals, optochten, carnaval en andere traditiestempels.</li>
                <li><strong>Cultureel erfgoed behouden:</strong> Restauratie en onderhoud van historische gebouwen, kapelletjes en monumenten.</li>
                <li><strong>Dialectbehoud:</strong> Programma's om het Limburgs dialect levend te houden, vooral onder jongeren.</li>
                <li><strong>Ontmoetingsplekken:</strong> Investeren in dorpshuizen en gemeenschapscentra waar mensen samenkomen.</li>
            </ul>

            <h4>Waarom is dit zo belangrijk?</h4>
            <p>Onze cultuur en tradities zijn wat Gulpen-Wittem bijzonder maken. Ze zorgen voor sociale cohesie, identiteit en gemeenschapszin. Door hier in te investeren behouden we wat ons uniek maakt en geven we dit door aan volgende generaties.</p>
        `
    },
    zorg: {
        icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>',
        title: 'Zorg & Welzijn',
        content: `
            <p>Goede zorg is een mensenrecht. Iedereen in onze gemeente moet kunnen rekenen op toegankelijke, betaalbare en kwalitatief goede zorg, ongeacht leeftijd of inkomen.</p>
            
            <h4>Onze concrete plannen</h4>
            <ul>
                <li><strong>Huisartsenzorg versterken:</strong> Werven van extra huisartsen om wachttijden te verkorten en beschikbaarheid te garanderen.</li>
                <li><strong>Thuiszorg uitbreiden:</strong> Meer capaciteit voor wijkverpleging zodat ouderen langer zelfstandig thuis kunnen blijven wonen.</li>
                <li><strong>Jeugdzorg verbeteren:</strong> Snellere hulp voor gezinnen en jongeren met kortere wachtlijsten en meer preventie.</li>
                <li><strong>Mantelzorgers ondersteunen:</strong> Respijtzorg en financiële ondersteuning voor mensen die zorgen voor hun naasten.</li>
                <li><strong>GGZ toegankelijker:</strong> Geen wachtlijsten voor acute geestelijke gezondheidszorg en meer laagdrempelige hulp.</li>
            </ul>

            <h4>Waarom is dit zo belangrijk?</h4>
            <p>Gezondheid is de basis voor alles. Zonder goede zorg kunnen mensen niet werken, leren of genieten van het leven. We investeren in zorg omdat we vinden dat iedereen recht heeft op een gezond en waardig leven.</p>
        `
    },
    recreatie: {
        icon: '<circle cx="12" cy="12" r="3"></circle><path d="M12 1v6m0 6v6m5.2-14.2l-4.2 4.2m0 0l-4.2-4.2m8.4 8.4l-4.2-4.2m0 0l-4.2 4.2M23 12h-6m-6 0H5"></path>',
        title: 'Recreatie & Toerisme',
        content: `
            <p>Fractie Franssen is vanaf het eerste moment duidelijk geweest: wij zijn vóór zwemwater in Gulpen-Wittem. Mosaqua heeft groot maatschappelijk belang en leszwemmen is van levensbelang.</p>
            
            <h4>Onze concrete plannen</h4>
            <ul>
                <li><strong>Mosaqua behouden:</strong> Zwemwater blijft beschikbaar in onze gemeente voor doelgroepzwemmen en zwemlessen.</li>
                <li><strong>Toerisme ontwikkelen:</strong> Investeren in wandel- en fietspaden, bewegwijzering en toeristische voorzieningen.</li>
                <li><strong>Evenementen faciliteren:</strong> Ondersteuning voor lokale evenementen die bezoekers naar onze gemeente trekken.</li>
                <li><strong>Horeca ondersteunen:</strong> Samenwerking met horecaondernemers om de gastvrijheid in onze dorpen te versterken.</li>
                <li><strong>Natuurrecreatie bevorderen:</strong> Toegankelijke natuurgebieden met goede faciliteiten voor wandelaars en fietsers.</li>
            </ul>

            <h4>Waarom is dit zo belangrijk?</h4>
            <p>Recreatie en toerisme zijn belangrijk voor onze lokale economie en de leefbaarheid van onze dorpen. Zwemwater heeft bovendien groot maatschappelijk belang - leszwemmen kan levens redden. Door hier in te investeren houden we onze gemeente aantrekkelijk voor bewoners en bezoekers.</p>
        `
    }
};

// Create modals dynamically
function createModals() {
    const modalsContainer = document.getElementById('modals-container');
    
    Object.keys(modalData).forEach(key => {
        const data = modalData[key];
        const modal = document.createElement('div');
        modal.id = `modal-${key}`;
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <button class="modal-close">&times;</button>
                    <div class="modal-icon-box">
                        <svg viewBox="0 0 24 24">${data.icon}</svg>
                    </div>
                    <h2 class="modal-title">${data.title}</h2>
                </div>
                <div class="modal-body">
                    ${data.content}
                </div>
            </div>
        `;
        modalsContainer.appendChild(modal);
    });
}

// Initialize modals
createModals();

// Modal functionality
const standpuntCards = document.querySelectorAll('.standpunt-card');
const modals = document.querySelectorAll('.modal');

standpuntCards.forEach(card => {
    card.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = 'modal-' + card.dataset.modal;
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close button functionality
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-close')) {
        const modal = e.target.closest('.modal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Click outside to close
modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modals.forEach(modal => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
});
