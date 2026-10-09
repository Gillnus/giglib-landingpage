import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown, ArrowRight, BellRing, CalendarDays, Check, ChevronDown, ClipboardList,
  FileText, Headphones, ListChecks, Menu, Music2, Plus, Route, SlidersHorizontal, Users, X,
} from 'lucide-react';
import mark from './giglib-mark.svg';
import LegalPage, { getLegalPage } from './pages/legal-pages';

const checkoutUrl = import.meta.env.VITE_STRIPE_PAYMENT_LINK || '#preise';
const features = [
  { icon: CalendarDays, number: '01', title: 'Kalender & Termine', text: 'Alle Gigs, Anfragen und privaten Termine im Blick. Damit sich nichts mehr überschneidet - und du rechtzeitig weißt, was ansteht.' },
  { icon: Users, number: '02', title: 'Buchungen & Kunden', text: 'Kontakte, Absprachen und Eventdetails gehören zusammen. Statt zwischen Chats, Notizen und Postfächern zu suchen.' },
  { icon: FileText, number: '03', title: 'Angebote & Rechnungen', text: 'Mach aus einer Anfrage ein klares Angebot. Und aus dem gespielten Gig eine fertige Rechnung - direkt im selben Tool.' },
  { icon: SlidersHorizontal, number: '04', title: 'Gagen & Technikoptionen', text: 'Halte deine Preise und Technikpakete fest. Wähle passende Optionen für den Gig, statt jedes Angebot bei null zu schreiben.' },
  { icon: Music2, number: '05', title: 'Musikwunschlisten', text: 'Wünsche und No-Gos für den Abend gesammelt an einem Ort. Gut vorbereitet ankommen, statt vor Ort überrascht werden.' },
  { icon: Route, number: '06', title: 'Fahrzeit & Zwischenstopps', text: 'Berechne deine Fahrzeit inklusive geplanter Zwischenstopps und behalte Anfahrt und Ankunft für jeden Gig im Blick.' },
  { icon: ListChecks, number: '07', title: 'Individuelle Checklisten', text: 'Stelle für jedes Event deine eigene Checkliste zusammen und hake die Vorbereitung Schritt für Schritt ab.' },
  { icon: BellRing, number: '08', title: 'Reminder für Vor- & Nachbereitung', text: 'Lass dich rechtzeitig an wichtige Aufgaben vor und nach jedem Gig erinnern, damit nichts untergeht.' },
];
const faqs = [
  ['Ist GigLib auch für DJs geeignet, die gerade erst anfangen?', 'Ja. GigLib ist bewusst übersichtlich aufgebaut. Du kannst mit deinem nächsten Termin starten und Buchungen, Kundendaten und Angebote nach und nach ergänzen.'],
  ['Kann ich meine bestehenden Buchungen importieren?', 'Derzeit kannst du deine Termine und Buchungsdetails direkt in GigLib anlegen. Wenn du Fragen zu deinem Umstieg hast, nutze bitte den Kontakt-Link im Footer.'],
  ['Gibt es eine native App für iOS oder Android?', 'GigLib ist als Web-Anwendung gedacht und auf Smartphone, Tablet und Desktop nutzbar. Eine native App ist aktuell nicht Bestandteil des Angebots.'],
  ['Wie funktionieren die Early-Bird-Konditionen?', 'Die ersten 100 Nutzer erhalten 20 % Rabatt auf den Monatspreis. Der Early-Bird-Preis beträgt 5,99 € pro Monat statt 7,49 €. Du kannst das Abo jederzeit kündigen.'],
];
const reveal = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: .55, ease: 'easeOut' as const } } };

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const legalPage = getLegalPage(window.location.pathname);

  useEffect(() => {
    if (!legalPage) return;

    document.title = legalPage.seoTitle;
    const metaContent = [
      ['meta[name="description"]', legalPage.seoDescription],
      ['meta[property="og:title"]', legalPage.seoTitle],
      ['meta[property="og:description"]', legalPage.seoDescription],
      ['meta[name="twitter:title"]', legalPage.seoTitle],
      ['meta[name="twitter:description"]', legalPage.seoDescription],
    ] as const;

    for (const [selector, content] of metaContent) {
      const tag = document.querySelector<HTMLMetaElement>(selector);
      if (tag) tag.content = content;
    }
  }, [legalPage]);

  const handleCta = () => {
    if (!import.meta.env.VITE_STRIPE_PAYMENT_LINK) document.querySelector('#preise')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (legalPage) return <LegalPage page={legalPage} />;
  return (
    <div className="page-grain min-h-[100dvh] overflow-hidden">
      <a className="skip-link" href="#inhalt">Zum Inhalt springen</a>
      <header className="site-header">
        <div className="header-inner">
          <a href="#start" className="brand" aria-label="GigLib - zur Startseite" data-testid="link-brand">
            <img src={mark} width="38" height="38" alt="" /><span>giglib</span>
          </a>
          <nav className="desktop-nav" aria-label="Hauptnavigation">
            <a href="#funktionen" data-testid="link-nav-features">Funktionen</a>
            <a href="#ablauf" data-testid="link-nav-how">So geht’s</a>
            <a href="#preise" data-testid="link-nav-pricing">Preise</a>
            <a href="#faq" data-testid="link-nav-faq">FAQ</a>
          </nav>
          <a className="button button-small header-cta" href={checkoutUrl} onClick={handleCta} data-testid="link-nav-cta">Jetzt starten <ArrowRight size={16} /></a>
          <button className="mobile-menu-button" type="button" aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)} data-testid="button-mobile-menu">
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
        {mobileOpen && <nav className="mobile-nav" aria-label="Mobile Navigation">
          {['funktionen', 'ablauf', 'preise', 'faq'].map((item) => <a key={item} href={`#${item}`} onClick={() => setMobileOpen(false)}>{({ funktionen: 'Funktionen', ablauf: 'So geht’s', preise: 'Preise', faq: 'FAQ' } as Record<string, string>)[item]}</a>)}
          <a className="button" href={checkoutUrl} onClick={(event) => { handleCta(); setMobileOpen(false); }} data-testid="link-mobile-cta">Jetzt starten <ArrowRight size={16} /></a>
        </nav>}
      </header>

      <main id="inhalt">
        <section id="start" className="hero">
          <div className="hero-grid">
            <motion.div className="hero-copy" initial="hidden" animate="show" variants={reveal}>
              <div className="eyebrow"><span className="eyebrow-dot" /> DAS EVENT- &amp; BOOKING-CRM FÜR DJS</div>
              <h1>Damit du immer<br />alles <span>an einem</span><br />Platz hast.</h1>
              <p className="hero-lead">Kalender, Buchungen, Angebote, Gagen und Technikoptionen - verwalte deinen DJ-Alltag an einem Ort. Erstelle Angebote und Rechnungen direkt im selben Tool.</p>
              <div className="hero-actions">
                <a className="button button-yellow" href={checkoutUrl} onClick={handleCta} data-testid="link-hero-cta">Jetzt starten und exklusiven<br className="mobile-break" /> Early-Bird-Rabatt sichern <ArrowRight size={18} /></a>
                <a className="text-link" href="#funktionen" data-testid="link-hero-features">GigLib entdecken <ArrowDown size={15} /></a>
              </div>
              <div className="hero-reassurance"><span><Check size={15} /> 14 Tage kostenlos testen</span><span><Check size={15} /> Keine Kreditkarte nötig</span></div>
            </motion.div>
            <motion.div className="hero-visual" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .15 }}>
              <div className="visual-sticker">DEIN GIG.<br />DEIN ÜBERBLICK.</div>
              <img className="app-window calendar-image" src={`${import.meta.env.BASE_URL}images/giglib-kalender-juli-2027.webp`} width="3200" height="2160" alt="GigLib-Kalender für Juli 2027 mit geplanten Events" />
              <div className="floating-note"><span className="note-check"><Check size={16} /></span><span><b>Alles dabei.</b><small>Wünsche, Ablauf, Technik</small></span></div>
              <span className="visual-orbit orbit-one" /><span className="visual-orbit orbit-two" />
            </motion.div>
          </div>
          <div className="hero-bottom"><span>FÜR HOCHZEITEN, CLUBS &amp; EVENTS</span><div className="soundwave" aria-hidden="true">{Array.from({ length: 30 }, (_, i) => <i key={i} style={{ height: `${14 + ((i * 17) % 28)}px` }} />)}</div><span>VON EINEM DJ FÜR DJS</span></div>
        </section>

        <section className="manifesto">
          <div className="manifesto-inner">
            <p className="eyebrow">WENIGER SUCHEN. MEHR AUFLEGEN.</p>
            <h2>Dein Kopf ist für<br /><span>die Musik da.</span></h2>
            <p className="manifesto-text">Anfrage hier. Kundeninfo dort. Und irgendwo war doch noch die Wunschliste. GigLib bringt deinen DJ-Alltag zusammen - damit du vor dem Gig an alles denkst und auf dem Gig ganz bei der Musik bist.</p>
            <div className="manifesto-index"><span>01 / 08</span><span className="manifesto-line" /><span>DER ÜBERBLICK, DER FEHLTE</span></div>
          </div>
          <div className="manifesto-stamp" aria-hidden="true"><Headphones size={30} /><span>READY<br />FOR THE<br />NEXT GIG</span></div>
        </section>

        <section id="funktionen" className="features section-pad">
          <div className="section-heading">
            <div><p className="eyebrow">ALLES AM RICHTIGEN PLATZ</p><h2>Dein Gig. <span>Dein Plan.</span></h2></div>
            <p>Von der ersten Anfrage bis zum letzten Musikwunsch: die Dinge, die du als DJ wirklich brauchst - ohne den Rest.</p>
          </div>
          <div className="feature-list">
            {features.map(({ icon: Icon, number, title, text }) => <motion.article className="feature-row" key={number} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: .25 }}>
              <span className="feature-number">{number}</span><span className="feature-icon"><Icon size={23} strokeWidth={1.8} /></span>
              <div className="feature-copy"><h3>{title}</h3><p>{text}</p></div><ArrowRight className="feature-arrow" size={20} aria-hidden="true" />
            </motion.article>)}
          </div>
          <div className="feature-note"><span className="note-star" aria-hidden="true"><Plus size={16} strokeWidth={1.8} /></span><p><b>Ein Tool statt fünf Zettel.</b> Weil gute Vorbereitung nicht kompliziert sein muss.</p></div>
        </section>

        <section id="ablauf" className="steps-section">
          <div className="steps-head"><p className="eyebrow">IN DREI SCHRITTEN STARTKLAR</p><h2>Einrichten. Planen.<br /><span>Auflegen.</span></h2></div>
          <div className="steps-grid">
            <article className="step-card"><span className="step-num">01</span><div className="step-mark"><CalendarDays /></div><h3>Leg deinen Gig an</h3><p>Termin, Location und Anlass eintragen. Ab jetzt ist dein Kalender nicht mehr nur ein Kalender.</p></article>
            <article className="step-card step-highlight"><span className="step-num">02</span><div className="step-mark"><Users /></div><h3>Pack alles dazu</h3><p>Kundeninfos, Absprachen, Gage, Technik und Musikwünsche - direkt im richtigen Gig.</p></article>
            <article className="step-card"><span className="step-num">03</span><div className="step-mark"><Music2 /></div><h3>Komm vorbereitet an</h3><p>Ablauf im Kopf, Musik im Gepäck.<br />Der Abend kann kommen.</p></article>
          </div>
          <div className="steps-tail"><span>DEIN WORKFLOW. NUR ENDLICH ZUSAMMEN.</span><span className="tail-lines">━━━━━━━━━━━━━━━━</span></div>
        </section>

        <section id="preise" className="pricing section-pad">
          <div className="pricing-intro"><p className="eyebrow">FAIRER PREIS. VOLLER ÜBERBLICK.</p><h2>Ein Gig. Ein Tool.<br /><span>Ein guter Deal.</span></h2><p>Alles drin, was du für deinen DJ-Alltag brauchst. Ohne Kleingedrucktes im Feature-Menü.</p></div>
          <div className="price-card">
            <div className="price-card-offer">
              <div className="price-card-head"><span>GIGLIB EARLY-BIRD</span><span className="limited-pill">DEIN PREISVORTEIL</span></div>
              <h3 className="price-card-title">Jetzt starten.<br /><span>20 % sparen.</span></h3>
              <div className="price"><strong>5,99 €</strong><span>/ Monat</span></div>
              <p className="price-was">statt <s>7,49 € / Monat</s></p>
              <div className="early-note"><span className="early-spark" aria-hidden="true"><Plus size={16} strokeWidth={1.8} /></span><p><b>Dein Early-Bird-Rabatt.</b><br />Für die ersten 100 Nutzer.</p></div>
            </div>
            <div className="price-card-body">
              <a href={checkoutUrl} onClick={handleCta} className="button pricing-cta" data-testid="link-pricing-cta"><span className="pricing-cta-label"><strong>Jetzt 14 Tage kostenlos testen</strong><small>20 % Early-Bird-Rabatt sichern</small></span><ArrowRight size={24} aria-hidden="true" /></a>
              <div className="trust-row"><span><Check size={14} /> Keine Kreditkarte nötig</span><span><Check size={14} /> Jederzeit kündbar</span></div>
              <p className="included-heading">Alles drin für deinen nächsten Gig</p>
              <ul className="included-list">
                {['Kalender & Termine', 'Buchungen & Kunden', 'Angebote & Rechnungen', 'Gagen & Technikoptionen', 'Musikwunschlisten', 'Fahrzeit & Zwischenstopps', 'Individuelle Checklisten', 'Reminder für Vor- & Nachbereitung'].map((item) => <li key={item}><Check size={16} />{item}</li>)}
              </ul>
            </div>
          </div>
          <p className="pricing-footnote">Alle aktuellen Funktionen inklusive. Jederzeit kündbar.</p>
        </section>

        <section id="faq" className="faq-section">
          <div className="faq-heading"><p className="eyebrow">GUTE FRAGE.</p><h2>Bevor du<br /><span>den nächsten Gig planst.</span></h2><p>Noch etwas offen? Hier sind die Antworten auf das, was DJs uns zuerst fragen.</p></div>
          <div className="faq-list">
            {faqs.map(([q, answer], i) => <article className={`faq-item ${openFaq === i ? 'is-open' : ''}`} key={q}>
              <button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} className="faq-question" data-testid={`button-faq-${i}`}><span><i>0{i + 1}</i>{q}</span><ChevronDown size={19} /></button>
              {openFaq === i && <div className="faq-answer"><p>{answer}</p></div>}
            </article>)}
          </div>
        </section>

        <section className="closing-cta">
          <div className="closing-inner"><div className="closing-spark" aria-hidden="true">GL<span>.</span></div><p className="eyebrow">DER NÄCHSTE GIG KOMMT BESTIMMT.</p><h2>Mach’s dir<br />einfacher.</h2><p>Alle Gigs und Buchungen an einem Ort.<br />Mehr Zeit für das, was zählt: deine Musik.</p>
            <a className="button button-navy" href={checkoutUrl} onClick={handleCta} data-testid="link-final-cta">Jetzt starten und exklusiven Early-Bird-Rabatt sichern <ArrowRight size={18} /></a>
            <span className="closing-trust">14 Tage kostenlos testen <i /> Keine Kreditkarte nötig <i /> Jederzeit kündbar</span></div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main"><a href="#start" className="brand footer-brand" data-testid="link-footer-brand"><img src={mark} width="38" height="38" alt="" /><span>giglib</span></a><p className="footer-tagline">DAS EVENT- &amp; BOOKING-CRM FÜR DJS</p>
          <nav aria-label="Footernavigation" className="footer-links">
            <a href="/impressum" data-testid="link-impressum">Impressum</a>
            <a href="/datenschutz" data-testid="link-datenschutz">Datenschutz</a>
            <a href="/agb" data-testid="link-agb">AGB</a>
            <a href="/kontakt" data-testid="link-kontakt">Kontakt</a>
          </nav>
          <p className="footer-config-note">Die rechtlichen Inhalte enthalten noch Platzhalter und müssen vor Veröffentlichung ergänzt und geprüft werden.</p>
        </div>
        <div className="footer-bottom" id="kontakt"><span>© {new Date().getFullYear()} GigLib</span><span>Mit Liebe gemacht für den nächsten Gig</span><a href="#start" data-testid="link-back-to-top">Nach oben ↑</a></div>
      </footer>
    </div>
  );
}

export default App;
