// Scroll to top without adding #hero to the URL, and clear any existing hash
function scrollToTop(e) {
  if (e) e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }
}

// LANGUAGE TOGGLE (EN default / IT)
const translations = {
  en: {
    "nav.home": "Home", "nav.about": "About", "nav.research": "Research",
    "nav.output": "Scientific Output", "nav.field": "Field", "nav.experience": "Experience",
    "nav.education": "Education", "nav.academia": "Academia", "nav.affiliations": "Affiliations",
    "nav.skills": "Skills", "nav.dive": "Dive", "nav.contact": "Contact", "nav.more": "More",

    "hero.label": "Researcher · Bioinformatician · Astrobiologist",
    "hero.tagline": "Bridging microbial ecology, metagenomics and space science — from deep-sea hydrothermal vents to Martian analogues.",
    "hero.position": "→ Research Fellow, CNR-IRSA — Roma Montelibretti",
    "hero.scroll": "Scroll to explore",

    "about.label": "// 00 — About", "about.title": "Who I Am",
    "about.p1": "I am a computational biologist driven by a single question: how does life adapt to the most extreme conditions on Earth — and what does that tell us about the possibility of life elsewhere? I build bioinformatic tools and pipelines to decode microbial communities, then apply them to environments that push biology to its limits — from deep-sea hydrothermal vents to hypersaline planetary analogues.",
    "about.p2": "Currently a Research Fellow at CNR, my work combines field campaigns — including a dive at 2,518 metres aboard the HOV Alvin — with high-performance computational analysis. I am also increasingly interested in the theoretical principles that govern how microbial communities sustain cooperation and stability under extreme energetic constraints.",

    "research.label": "// 01 — Research", "research.title": "Research Areas",
    "research.card1.title": "Environmental Metagenomics",
    "research.card1.desc": "Characterising microbial communities in extreme and aquatic environments — from constructed wetlands and coastal aquifers to deep-sea hydrothermal vents — using 16S rRNA sequencing and whole-metagenome approaches.",
    "research.card2.title": "Astrobiology & Planetary Analogues",
    "research.card2.desc": "Investigating hypersaline and geochemically extreme environments as analogues for Mars and other planetary bodies, with a focus on biosignature formation and the potential for life in extreme conditions.",
    "research.card3.title": "Bioinformatics Tool Development",
    "research.card3.desc": "Designing and maintaining flexible, reproducible pipelines and R packages for metagenomic analysis, spatial transcriptomics, and biological network visualisation — built for scientists without deep computational backgrounds.",
    "research.card4.title": "Earth Observation & Space Data",
    "research.card4.desc": "Applying satellite remote sensing, geospatial analysis and climate system monitoring to environmental research, integrating orbital data with ground-truth biological and geochemical observations.",

    "output.label": "// 02 — Scientific Output", "output.title": "Scientific Output",
    "output.publications": "Publications", "output.published": "Published", "output.tools": "Tools & Packages",
    "output.forthcoming": "Forthcoming", "output.peerReview": "Peer Review", "output.inPrep": "In Preparation",
    "output.internalReview": "Internal Review",
    "output.correspondingNote": "*Corresponding author",
    "output.tool1.desc": "A flexible metagenomic pipeline combining read-based analysis, assemblies and MAGs with downstream biological and geochemical data integration. Designed for reproducibility and ease of use without deep bioinformatic expertise.",
    "output.tool2.desc": "An R package for multivariate data range visualisation, displaying 3–6 variables simultaneously with min/max and mean for each — ideal for comparing environmental profiles across sampling sites.",
    "output.tool3.desc": "An R/Bioconductor wrapper for the SpatialDE Python library, enabling identification of spatially variable genes in spatial transcriptomics data directly from R with a native Bioconductor interface.",
    "output.tool4.desc": "A web application for interactive visualisation of biological regulatory networks, combining multiple layout algorithms and network types to highlight functional modules within biological pathways.",
    "output.tool5.desc": "An expression knowledgebase at single cell and nucleus level for the discovery of coding–noncoding RNA functional interactions in skeletal muscle, integrating miRNA, lncRNA and mRNA co-regulation networks.",

    "field.label": "// 03 — Field", "field.title": "Field Experience",
    "field.item1.desc": "Participated as starboard observer aboard the deep-submergence vehicle HOV Alvin for an 8-hour dive to sample hydrothermal vent fluids and biofilms at the Tica and Biovent sites.",
    "field.item2.desc": "31-day NSF-funded oceanographic cruise aboard the WHOI research vessel Atlantis. Sampled high- and low-temperature hydrothermal vent fluids at 2,500 m depth using titanium syringe samplers at sites Tica, Biovent, Bio9, L-Vent and V-Vent.",
    "field.item3.desc": "Participated in the International Continental Drilling Program campaign, responsible for collection, processing and preservation of rock core samples from the lower continental crust exposed at the Ivrea-Verbano Zone.",
    "field.item4.desc": "Multiple sampling campaigns across 2025 to characterise the natural geochemical background of groundwater and soil in the Sacco River national interest site (SIN), in collaboration with CNR-IRSA and ARPA Lazio.",

    "experience.label": "// 04 — Experience", "experience.title": "Experience",
    "experience.item1.title": "Postdoctoral Research Fellow",
    "experience.item1.desc": "Research on microbial communities in extreme and aquatic environments, with a focus on metagenomics, antibiotic resistance genomics, and astrobiology. Development and maintenance of open-source bioinformatic tools and pipelines.<br><span class=\"field-pi\">PI: Dr. Stefano Amalfitano</span>",
    "experience.item2.title": "Postdoctoral Research Fellow",
    "experience.item2.desc": "Development of new bioinformatic tools for the analysis of microbial diversity in extreme environments using metagenomic approaches. Participation in international field expeditions including the NSF-funded AT50-20 oceanographic cruise aboard R/V Atlantis.<br><span class=\"field-pi\">PI: Prof. Donato Giovannelli</span>",
    "experience.item3.title": "Research Fellow",
    "experience.item3.desc": "Development of computational methods for the reconstruction and analysis of gene interaction networks between protein-coding genes, microRNAs and lncRNAs in relation to metabolic changes in skeletal muscle fibre types.<br><span class=\"field-pi\">PI: Dr. Gabriele Sales</span>",

    "education.label": "// 05 — Education", "education.title": "Education",
    "education.item1.degree": "International Master's programme in Space Missions Science, Design and Applications (SPICES)",
    "education.item1.thesis": "Microbial community structure and biosignature potential in a hypersaline planetary field analogue: insights from the Kudiakam Pan, Makgadikgadi Basin (Botswana)",
    "education.item2.degree": "PhD in Biosciences — Genetics, Genomics & Bioinformatics",
    "education.item2.thesis": "Exploring biological signals: from pathway visualization to spatial transcriptomics",
    "education.item3.degree": "MSc in Bioinformatics",
    "education.item3.thesis": "Analysis of gene expression variation based on associations between DNA:DNA:ncRNA triple helices and epigenetic signals",
    "education.item4.degree": "BSc in Computer Science",
    "education.item4.thesis": "Analysis of secondary structure prediction stability as a function of flanking sequences in non-coding RNAs",

    "academia.label": "// 06 — Academia", "academia.title": "Academia", "academia.teaching": "Teaching",
    "academia.teach1.title": "Microbial Colonization of Terrestrial Analogs and Habitability",
    "academia.teach1.desc": "Teaching assistant. Course held by Prof. Donato Giovannelli. Topics covered microbial colonization strategies in extreme terrestrial environments and their implications for planetary habitability research.",
    "academia.teach2.title": "Molecular Genetics",
    "academia.teach2.desc": "Teaching assistant for three consecutive academic years. Course held by Prof. Gabriele Sales. Supported students in understanding molecular genetics principles and their computational applications.",
    "academia.teach3.title": "Omic Data: Analysis and Experimental Design",
    "academia.teach3.desc": "Teaching assistant for two academic years. Course held by Prof. Chiara Romualdi and Prof. Gabriele Sales. Covered experimental design and computational analysis of multi-omic datasets including RNA-seq and related technologies.",
    "academia.conferences": "Conferences & Talks", "academia.workshops": "Workshops & Training",

    "affiliations.label": "// 07 — Affiliations", "affiliations.title": "Affiliations & Initiatives",
    "affiliations.mira.title": "Co-founder & Bioinformatics Lead — MIRA Biotech",
    "affiliations.mira.desc": "Deep-tech spin-off (CNR / Università della Tuscia) — Microbiome Intelligence platform turning complex microbial data into predictive insight for environmental, industrial, agricultural and space applications · <a href=\"https://www.mirabiotech.it\" class=\"pub-doi\" target=\"_blank\">Website →</a>",
    "affiliations.microbeco.title": "Member — MicrobEco",
    "affiliations.microbeco.desc": "Scientific association of microbial ecologists — outreach, training (e.g. ICME Series) and international collaboration · <a href=\"https://www.microbeco.org\" class=\"pub-doi\" target=\"_blank\">Website →</a>",

    "skills.label": "// 08 — Skills", "skills.title": "Technical Skills",
    "skills.cat1": "Bioinformatics & Genomics", "skills.cat2": "Programming Languages",
    "skills.cat3": "Infrastructure & DevOps", "skills.cat4": "Data & Visualisation",
    "skills.cat5": "Development", "skills.cat6": "Space & Earth Sciences",

    "contact.label": "// 09 — Contact", "contact.title": "Get in Touch",
    "contact.p1": "I am open to research collaborations, consulting opportunities in bioinformatics and space science, and invitations to speak or teach. If you are working on something at the intersection of computational biology, microbial ecology, or astrobiology — I would love to hear from you.",
    "contact.copied": "Copied!", "contact.sendEmail": "Send an Email",
    "contact.diveTeaser": "One more thing, 2,518 m down ↓",

    "dive.label": "// 10 — 2,518 M", "dive.title": "Alvin Dive on the East Pacific Rise", "dive.surface": "Surface",

    "misc.lastUpdated": "Last updated: Nov 16, 2026"
  },
  it: {
    "nav.home": "Home", "nav.about": "Chi sono", "nav.research": "Ricerca",
    "nav.output": "Produzione Scientifica", "nav.field": "Sul Campo", "nav.experience": "Esperienza",
    "nav.education": "Formazione", "nav.academia": "Accademia", "nav.affiliations": "Affiliazioni",
    "nav.skills": "Competenze", "nav.dive": "Immersione", "nav.contact": "Contatti", "nav.more": "Altro",

    "hero.label": "Ricercatore · Bioinformatico · Astrobiologo",
    "hero.tagline": "Un ponte tra ecologia microbica, metagenomica e scienze spaziali — dalle sorgenti idrotermali degli abissi agli analoghi marziani.",
    "hero.position": "→ Assegnista di Ricerca, CNR-IRSA — Roma Montelibretti",
    "hero.scroll": "Scorri per esplorare",

    "about.label": "// 00 — Chi sono", "about.title": "Chi Sono",
    "about.p1": "Sono un biologo computazionale mosso da una domanda sola: come si adatta la vita alle condizioni più estreme della Terra — e cosa ci dice questo sulla possibilità di vita altrove? Costruisco strumenti e pipeline bioinformatiche per decifrare le comunità microbiche, e le applico ad ambienti che spingono la biologia ai suoi limiti — dalle sorgenti idrotermali degli abissi agli analoghi planetari ipersalini.",
    "about.p2": "Attualmente Assegnista di Ricerca al CNR, il mio lavoro unisce campagne sul campo — tra cui un'immersione a 2.518 metri a bordo dell'HOV Alvin — ad analisi computazionali ad alte prestazioni. Sono inoltre sempre più interessato ai principi teorici che regolano come le comunità microbiche mantengano cooperazione e stabilità in condizioni di forte vincolo energetico.",

    "research.label": "// 01 — Ricerca", "research.title": "Aree di Ricerca",
    "research.card1.title": "Metagenomica Ambientale",
    "research.card1.desc": "Caratterizzazione delle comunità microbiche in ambienti estremi e acquatici — da zone umide artificiali e acquiferi costieri fino alle sorgenti idrotermali degli abissi — tramite sequenziamento 16S rRNA e approcci whole-metagenome.",
    "research.card2.title": "Astrobiologia & Analoghi Planetari",
    "research.card2.desc": "Studio di ambienti ipersalini e geochimicamente estremi come analoghi di Marte e di altri corpi planetari, con particolare attenzione alla formazione di biosignature e al potenziale per la vita in condizioni estreme.",
    "research.card3.title": "Sviluppo di Strumenti Bioinformatici",
    "research.card3.desc": "Progettazione e manutenzione di pipeline flessibili e riproducibili e di pacchetti R per l'analisi metagenomica, la trascrittomica spaziale e la visualizzazione di reti biologiche — pensati per ricercatori senza un background computazionale avanzato.",
    "research.card4.title": "Osservazione della Terra & Dati Spaziali",
    "research.card4.desc": "Applicazione di telerilevamento satellitare, analisi geospaziale e monitoraggio del sistema climatico alla ricerca ambientale, integrando dati orbitali con osservazioni biologiche e geochimiche di verità a terra.",

    "output.label": "// 02 — Produzione Scientifica", "output.title": "Produzione Scientifica",
    "output.publications": "Pubblicazioni", "output.published": "Pubblicato", "output.tools": "Strumenti & Pacchetti",
    "output.forthcoming": "In arrivo", "output.peerReview": "Peer Review", "output.inPrep": "In preparazione",
    "output.internalReview": "Revisione Interna",
    "output.correspondingNote": "*Autore corrispondente",
    "output.tool1.desc": "Una pipeline metagenomica flessibile che combina analisi read-based, assembly e MAGs con l'integrazione a valle di dati biologici e geochimici. Progettata per essere riproducibile e utilizzabile senza competenze bioinformatiche avanzate.",
    "output.tool2.desc": "Un pacchetto R per la visualizzazione di intervalli di dati multivariati, che mostra da 3 a 6 variabili contemporaneamente con minimo, massimo e media per ciascuna — ideale per confrontare profili ambientali tra diversi siti di campionamento.",
    "output.tool3.desc": "Un wrapper R/Bioconductor per la libreria Python SpatialDE, che consente di identificare geni spazialmente variabili in dati di trascrittomica spaziale direttamente da R, con un'interfaccia Bioconductor nativa.",
    "output.tool4.desc": "Un'applicazione web per la visualizzazione interattiva di reti regolatorie biologiche, che combina diversi algoritmi di layout e tipologie di rete per evidenziare i moduli funzionali all'interno dei pathway biologici.",
    "output.tool5.desc": "Una knowledgebase di espressione a livello di singola cellula e nucleo per la scoperta di interazioni funzionali tra RNA codificanti e non codificanti nel muscolo scheletrico, che integra reti di co-regolazione tra miRNA, lncRNA e mRNA.",

    "field.label": "// 03 — Sul Campo", "field.title": "Esperienza sul Campo",
    "field.item1.desc": "Ho partecipato come osservatore di dritta a bordo del veicolo per immersioni profonde HOV Alvin, in un'immersione di 8 ore per campionare fluidi idrotermali e biofilm nei siti Tica e Biovent.",
    "field.item2.desc": "Spedizione oceanografica di 31 giorni finanziata dalla NSF a bordo della nave da ricerca WHOI Atlantis. Campionamento di fluidi idrotermali ad alta e bassa temperatura a 2.500 m di profondità con campionatori a siringa in titanio nei siti Tica, Biovent, Bio9, L-Vent e V-Vent.",
    "field.item3.desc": "Ho partecipato alla campagna dell'International Continental Drilling Program, occupandomi della raccolta, elaborazione e conservazione di carote di roccia della crosta continentale inferiore affiorante nella Zona Ivrea-Verbano.",
    "field.item4.desc": "Diverse campagne di campionamento nel corso del 2025 per caratterizzare il fondo geochimico naturale delle acque sotterranee e del suolo nel sito di interesse nazionale (SIN) del Fiume Sacco, in collaborazione con CNR-IRSA e ARPA Lazio.",

    "experience.label": "// 04 — Esperienza", "experience.title": "Esperienza",
    "experience.item1.title": "Assegnista di Ricerca",
    "experience.item1.desc": "Ricerca sulle comunità microbiche in ambienti estremi e acquatici, con particolare attenzione a metagenomica, genomica della resistenza agli antibiotici e astrobiologia. Sviluppo e manutenzione di strumenti e pipeline bioinformatiche open-source.<br><span class=\"field-pi\">Responsabile scientifico: Dott. Stefano Amalfitano</span>",
    "experience.item2.title": "Assegnista di Ricerca",
    "experience.item2.desc": "Sviluppo di nuovi strumenti bioinformatici per l'analisi della diversità microbica in ambienti estremi tramite approcci metagenomici. Partecipazione a spedizioni internazionali sul campo, tra cui la crociera oceanografica AT50-20 finanziata dalla NSF a bordo della R/V Atlantis.<br><span class=\"field-pi\">Responsabile scientifico: Prof. Donato Giovannelli</span>",
    "experience.item3.title": "Assegnista di Ricerca",
    "experience.item3.desc": "Sviluppo di metodi computazionali per la ricostruzione e l'analisi di reti di interazione genica tra geni codificanti proteine, microRNA e lncRNA in relazione ai cambiamenti metabolici nei diversi tipi di fibre muscolari scheletriche.<br><span class=\"field-pi\">Responsabile scientifico: Dott. Gabriele Sales</span>",

    "education.label": "// 05 — Formazione", "education.title": "Formazione",
    "education.item1.degree": "Master Internazionale in Space Missions Science, Design and Applications (SPICES)",
    "education.item1.thesis": "Microbial community structure and biosignature potential in a hypersaline planetary field analogue: insights from the Kudiakam Pan, Makgadikgadi Basin (Botswana)",
    "education.item2.degree": "Dottorato di Ricerca in Bioscienze — Genetica, Genomica e Bioinformatica",
    "education.item2.thesis": "Exploring biological signals: from pathway visualization to spatial transcriptomics",
    "education.item3.degree": "Laurea Magistrale in Bioinformatica",
    "education.item3.thesis": "Analisi della variazione dell'espressione genica sulla base di associazioni fra triple eliche DNA:DNA:ncRNA e segnali epigenetici",
    "education.item4.degree": "Laurea Triennale in Informatica",
    "education.item4.thesis": "Analisi della stabilità di predizione della struttura secondaria al variare di sequenze flanking",

    "academia.label": "// 06 — Accademia", "academia.title": "Accademia", "academia.teaching": "Didattica",
    "academia.teach1.title": "Colonizzazione Microbica di Analoghi Terrestri e Abitabilità",
    "academia.teach1.desc": "Assistente alla didattica. Corso tenuto dal Prof. Donato Giovannelli. Argomenti trattati: strategie di colonizzazione microbica in ambienti terrestri estremi e loro implicazioni per la ricerca sull'abitabilità planetaria.",
    "academia.teach2.title": "Genetica Molecolare",
    "academia.teach2.desc": "Assistente alla didattica per tre anni accademici consecutivi. Corso tenuto dal Prof. Gabriele Sales. Supporto agli studenti nella comprensione dei principi di genetica molecolare e delle loro applicazioni computazionali.",
    "academia.teach3.title": "Dati Omici: Analisi e Disegno Sperimentale",
    "academia.teach3.desc": "Assistente alla didattica per due anni accademici. Corso tenuto dalla Prof.ssa Chiara Romualdi e dal Prof. Gabriele Sales. Argomenti trattati: disegno sperimentale e analisi computazionale di dataset multi-omici, incluso RNA-seq e tecnologie correlate.",
    "academia.conferences": "Conferenze & Interventi", "academia.workshops": "Workshop & Formazione",

    "affiliations.label": "// 07 — Affiliazioni", "affiliations.title": "Affiliazioni & Iniziative",
    "affiliations.mira.title": "Co-fondatore & Responsabile Bioinformatica — MIRA Biotech",
    "affiliations.mira.desc": "Spin-off deep-tech (CNR / Università della Tuscia) — piattaforma di Microbiome Intelligence che trasforma dati microbici complessi in insight predittivi per applicazioni ambientali, industriali, agricole e spaziali · <a href=\"https://www.mirabiotech.it\" class=\"pub-doi\" target=\"_blank\">Sito web →</a>",
    "affiliations.microbeco.title": "Membro — MicrobEco",
    "affiliations.microbeco.desc": "Associazione scientifica di ecologi microbici — divulgazione, formazione (es. ICME Series) e collaborazione internazionale · <a href=\"https://www.microbeco.org\" class=\"pub-doi\" target=\"_blank\">Sito web →</a>",

    "skills.label": "// 08 — Competenze", "skills.title": "Competenze Tecniche",
    "skills.cat1": "Bioinformatica & Genomica", "skills.cat2": "Linguaggi di Programmazione",
    "skills.cat3": "Infrastruttura & DevOps", "skills.cat4": "Dati & Visualizzazione",
    "skills.cat5": "Sviluppo", "skills.cat6": "Scienze Spaziali & della Terra",

    "contact.label": "// 09 — Contatti", "contact.title": "Contattami",
    "contact.p1": "Sono aperto a collaborazioni di ricerca, opportunità di consulenza in bioinformatica e scienze spaziali, e inviti a tenere seminari o lezioni. Se stai lavorando su qualcosa all'intersezione tra biologia computazionale, ecologia microbica o astrobiologia — scrivimi, mi farebbe piacere sentirti.",
    "contact.copied": "Copiato!", "contact.sendEmail": "Invia una Email",
    "contact.diveTeaser": "Un'ultima cosa, 2.518 m più giù ↓",

    "dive.label": "// 10 — 2.518 M", "dive.title": "Immersione Alvin sulla Dorsale del Pacifico Orientale", "dive.surface": "Superficie",

    "misc.lastUpdated": "Ultimo aggiornamento: 16 Nov 2026"
  }
};

function applyLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = translations[lang][key];
    if (value === undefined) return;
    if (el.getAttribute('data-i18n-html') === 'true') {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });
  document.documentElement.setAttribute('lang', lang);
  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.querySelector('.lang-en').classList.toggle('active', lang === 'en');
    toggle.querySelector('.lang-it').classList.toggle('active', lang === 'it');
  }
  localStorage.setItem('lang', lang);
}

(function initLanguage() {
  const toggle = document.getElementById('lang-toggle');
  if (!toggle) return;
  let currentLang = localStorage.getItem('lang') || 'en';
  applyLanguage(currentLang);
  toggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'it' : 'en';
    applyLanguage(currentLang);
  });
})();

// COPY EMAIL
function copyEmail(btn) {
  const email = 'davide.corso@irsa.cnr.it';
  const showCopied = () => {
    btn.classList.add('copied');
    setTimeout(() => btn.classList.remove('copied'), 1500);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(showCopied).catch(() => {
      fallbackCopy(email);
      showCopied();
    });
  } else {
    fallbackCopy(email);
    showCopied();
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try { document.execCommand('copy'); } catch (e) {}
  document.body.removeChild(textarea);
}

// STARFIELD
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let stars = [];
let W, H;

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}

let isLight = false;

function initStars() {
  stars = [];
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.2 + 0.2,
      opacity: Math.random() * 0.45 + 0.1,
      speed: Math.random() * 0.12 + 0.02,
      pulse: Math.random() * Math.PI * 2
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, W, H);
  stars.forEach(s => {
    s.pulse += 0.008;
    const o = Math.max(0, s.opacity + Math.sin(s.pulse) * 0.1);
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = isLight
      ? `rgba(60,80,120,${o * 0.55})`
      : `rgba(0,200,255,${o})`;
    ctx.fill();
    s.y -= s.speed;
    if (s.y < -5) { s.y = H + 5; s.x = Math.random() * W; }
  });
  requestAnimationFrame(drawStars);
}

resize();
initStars();
drawStars();
window.addEventListener('resize', () => { resize(); initStars(); });

// THEME TOGGLE
const themeToggle = document.getElementById('theme-toggle');

const iconOn = `<path d="M9 21h6M12 3a6 6 0 0 1 4 10.5V17H8v-3.5A6 6 0 0 1 12 3z"/><line x1="12" y1="17" x2="12" y2="21"/>`;
const iconOff = `<path d="M9 21h6M12 3a6 6 0 0 1 4 10.5V17H8v-3.5A6 6 0 0 1 12 3z" stroke-dasharray="4 2" opacity="0.5"/><line x1="4" y1="4" x2="20" y2="20"/><line x1="12" y1="17" x2="12" y2="21"/>`;

function setIcon(light) {
  const svg = document.getElementById('toggle-icon');
  svg.innerHTML = light ? iconOff : iconOn;
}

function setVentIcon(light) {
  const vent = document.getElementById('vent-icon');
  if (!vent) return;
  vent.src = light ? 'img/hydrothermal_vent_light_bg.gif' : 'img/hydrothermal_vent_dark_bg.gif';
}

themeToggle.addEventListener('click', () => {
  isLight = !isLight;
  document.body.classList.toggle('light', isLight);
  setIcon(isLight);
  setVentIcon(isLight);
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Restore saved preference
if (localStorage.getItem('theme') === 'light') {
  isLight = true;
  document.body.classList.add('light');
  setIcon(true);
  setVentIcon(true);
}

// CENTER NAV LOGO PRECISELY
(function() {
  const logo = document.querySelector('.nav-logo');
  if (!logo) return;
  // Use canvas to measure actual text width
  const canvas = document.createElement('canvas');
  const ctx2 = canvas.getContext('2d');
  const style = window.getComputedStyle(logo);
  ctx2.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
  const text = 'D·C';
  const measured = ctx2.measureText(text);
  // letter-spacing adds space after last char — compensate by shifting left half that amount
  const ls = parseFloat(style.letterSpacing) || 0;
  logo.style.paddingRight = '0';
  logo.style.paddingLeft = `0`;
  // No letter-spacing so just ensure flex centering is exact
  logo.style.justifyContent = 'center';
})();

// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('nav-drawer');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  drawer.classList.toggle('open');
});
function closeDrawer() {
  hamburger.classList.remove('open');
  drawer.classList.remove('open');
}
// Click outside modal closes it
drawer.addEventListener('click', (e) => {
  if (e.target === drawer) closeDrawer();
});

// DEPTH GAUGE — fill tracks scroll through the whole page, 0 M at the
// top down to 2,518 M at the very bottom, where the HOV Alvin video is.
(function() {
  const track = document.getElementById('depth-track');
  const fill = document.getElementById('depth-fill');
  const marker = document.getElementById('depth-marker');
  if (!track || !fill) return;

  // Minor tick marks between the labeled ones, just for visual rhythm.
  [10, 30, 50, 70, 90].forEach(pct => {
    const tick = document.createElement('div');
    tick.className = 'depth-tick minor';
    tick.style.top = pct + '%';
    tick.innerHTML = '<span class="dash"></span>';
    track.appendChild(tick);
  });

  function maxScroll() {
    return Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  }

  function update() {
    const pct = Math.min(100, Math.max(0, (window.scrollY / maxScroll()) * 100));
    fill.style.height = pct + '%';
    if (marker) marker.style.top = pct + '%';
  }

  function scrollToPct(pct) {
    window.scrollTo({ top: (pct / 100) * maxScroll(), behavior: 'smooth' });
  }

  // Click a major tick to jump straight to that point in the page.
  track.querySelectorAll('.depth-tick.major').forEach(tick => {
    tick.addEventListener('click', (e) => {
      e.stopPropagation();
      const pct = parseFloat(tick.style.top);
      scrollToPct(pct);
    });
  });

  // Click anywhere on the track to seek proportionally, like a scrollbar.
  track.addEventListener('click', (e) => {
    const rect = track.getBoundingClientRect();
    const pct = ((e.clientY - rect.top) / rect.height) * 100;
    scrollToPct(Math.min(100, Math.max(0, pct)));
  });

  // Drag the marker dot up/down to scroll, like a scrollbar handle.
  if (marker) {
    let dragging = false;

    function pctFromClientY(clientY) {
      const rect = track.getBoundingClientRect();
      return Math.min(100, Math.max(0, ((clientY - rect.top) / rect.height) * 100));
    }

    marker.addEventListener('pointerdown', (e) => {
      dragging = true;
      marker.classList.add('dragging');
      marker.setPointerCapture(e.pointerId);
      e.preventDefault();
      e.stopPropagation();
    });

    marker.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const pct = pctFromClientY(e.clientY);
      fill.style.height = pct + '%';
      marker.style.top = pct + '%';
      window.scrollTo({ top: (pct / 100) * maxScroll() });
    });

    function endDrag(e) {
      if (!dragging) return;
      dragging = false;
      marker.classList.remove('dragging');
      try { marker.releasePointerCapture(e.pointerId); } catch (err) {}
    }
    marker.addEventListener('pointerup', endDrag);
    marker.addEventListener('pointercancel', endDrag);

    // Prevent a plain tap/click on the marker from also triggering the
    // track's own click-to-seek handler.
    marker.addEventListener('click', (e) => e.stopPropagation());
  }

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  window.addEventListener('load', update);
})();
