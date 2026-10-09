import mark from '../giglib-mark.svg';

type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export type LegalPageConfig = {
  path: string;
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  sections: LegalSection[];
};

const legalPages: Record<string, LegalPageConfig> = {
  '/impressum': {
    path: '/impressum',
    slug: 'impressum',
    title: 'Impressum',
    eyebrow: 'ANGABEN ZUM ANBIETER',
    summary: 'Informationen zum Anbieter und zur Kontaktaufnahme.',
    seoTitle: 'Impressum - Anbieterinformationen von GigLib',
    seoDescription: 'Impressum und Anbieterinformationen von GigLib. Die gekennzeichneten Unternehmens- und Kontaktdaten müssen vor Veröffentlichung ergänzt werden.',
    sections: [
      {
        heading: 'Anbieter',
        paragraphs: [
          '[Vollständiger rechtlicher Name oder Firmenname]',
          '[Rechtsform und Land der Registrierung]',
          '[Straße und Hausnummer]',
          '[Postleitzahl, Ort, Land]',
        ],
      },
      {
        heading: 'Vertretung',
        paragraphs: ['[Vor- und Nachname der vertretungsberechtigten Person]'],
      },
      {
        heading: 'Kontakt',
        paragraphs: ['E-Mail: [Kontakt-E-Mail ergänzen]', 'Telefon: [Telefonnummer ergänzen oder diesen Eintrag entfernen]'],
      },
      {
        heading: 'Register und Umsatzsteuer',
        paragraphs: [
          '[Registergericht und Registernummer, falls vorhanden]',
          '[Umsatzsteuer-Identifikationsnummer, falls vorhanden]',
        ],
      },
      {
        heading: 'Verantwortlich für den Inhalt',
        paragraphs: ['[Name und vollständige ladungsfähige Anschrift ergänzen]'],
      },
    ],
  },
  '/datenschutz': {
    path: '/datenschutz',
    slug: 'datenschutz',
    title: 'Datenschutz',
    eyebrow: 'DEINE DATEN. DEIN VERTRAUEN.',
    summary: 'Hinweise zum Umgang mit personenbezogenen Daten bei GigLib.',
    seoTitle: 'Datenschutz bei GigLib - Datenschutzhinweise',
    seoDescription: 'Datenschutzhinweise für GigLib. Verantwortliche Stelle, Datenverarbeitung, Dienstleister, Speicherdauer und Betroffenenrechte müssen noch ergänzt werden.',
    sections: [
      {
        heading: 'Verantwortliche Stelle',
        paragraphs: [
          '[Vollständiger rechtlicher Name, Anschrift und Datenschutz-Kontakt eintragen.]',
        ],
      },
      {
        heading: 'Welche Daten verarbeitet werden',
        paragraphs: [
          '[Tatsächlich verarbeitete Daten aufführen, zum Beispiel Konto-, Kontakt-, Buchungs-, Event-, Zahlungs- und technische Daten. Nicht zutreffende Angaben entfernen.]',
        ],
      },
      {
        heading: 'Zwecke und Rechtsgrundlagen',
        paragraphs: [
          '[Für jeden Verarbeitungszweck erklären, warum die Daten benötigt werden und welche Rechtsgrundlage gilt.]',
        ],
      },
      {
        heading: 'Dienstleister und Empfänger',
        paragraphs: [
          '[Alle tatsächlichen Anbieter aufführen, die Daten erhalten oder speichern: Hosting, Datenbank, Anmeldung, Zahlungsabwicklung, E-Mail, Analyse und weitere Dienste. Länder und jeweilige Aufgaben ergänzen.]',
        ],
      },
      {
        heading: 'Speicherdauer und Sicherheit',
        paragraphs: [
          '[Aufbewahrungsfristen, Löschabläufe, Backups und relevante Schutzmaßnahmen beschreiben.]',
        ],
      },
      {
        heading: 'Cookies und ähnliche Technologien',
        paragraphs: [
          '[Verwendete Cookies, lokale Speicherung, Analyse- oder Werbedienste sowie die Einwilligungsverwaltung vollständig und passend zum tatsächlichen Verhalten angeben.]',
        ],
      },
      {
        heading: 'Rechte und Kontakt',
        paragraphs: [
          '[Betroffenenrechte, Kontakt für Datenschutzanfragen und zuständige Aufsichtsbehörde anhand des tatsächlichen Unternehmenssitzes ergänzen.]',
        ],
      },
      {
        heading: 'Änderungen und weitere Angaben',
        paragraphs: [
          '[Mindestalter, Umgang mit Daten Minderjähriger und Verfahren für Aktualisierungen dieser Hinweise ergänzen.]',
        ],
      },
    ],
  },
  '/agb': {
    path: '/agb',
    slug: 'agb',
    title: 'Allgemeine Geschäftsbedingungen',
    eyebrow: 'NUTZUNG VON GIGLIB',
    summary: 'Vertragsbedingungen für die Nutzung von GigLib.',
    seoTitle: 'AGB von GigLib - Nutzungs- und Vertragsbedingungen',
    seoDescription: 'Allgemeine Geschäftsbedingungen für GigLib. Leistungsumfang, Preise, Laufzeit, Kündigung und weitere Vertragsbedingungen müssen noch geprüft und ergänzt werden.',
    sections: [
      {
        heading: '1. Anbieter und Geltungsbereich',
        paragraphs: ['[Anbieter, Zielgruppe und Geltungsbereich dieser Bedingungen beschreiben.]'],
      },
      {
        heading: '2. Leistungsumfang',
        paragraphs: ['[GigLib und die tatsächlich verfügbaren Funktionen verbindlich beschreiben.]'],
      },
      {
        heading: '3. Konto und Nutzung',
        paragraphs: [
          '[Voraussetzungen für ein Konto, Pflichten der Nutzerinnen und Nutzer, Mindestalter und zulässige Nutzung festlegen.]',
        ],
      },
      {
        heading: '4. Preise und Zahlung',
        paragraphs: [
          '[Preise, Steuern, Zahlungsdienstleister, Abrechnungszeitraum, Probezeit und automatische Verlängerung anhand des echten Angebots eintragen.]',
        ],
      },
      {
        heading: '5. Laufzeit und Kündigung',
        paragraphs: [
          '[Vertragsbeginn, Kündigungsweg und -frist, Ablauf einer Probezeit sowie Folgen der Kündigung festlegen.]',
        ],
      },
      {
        heading: '6. Verfügbarkeit und Änderungen',
        paragraphs: [
          '[Wartung, Support, Verfügbarkeit und Umgang mit wesentlichen Änderungen des Dienstes beschreiben.]',
        ],
      },
      {
        heading: '7. Inhalte und Rechte',
        paragraphs: [
          '[Rechte an GigLib sowie an von Nutzerinnen und Nutzern eingegebenen Inhalten und Daten beschreiben.]',
        ],
      },
      {
        heading: '8. Haftung und Gewährleistung',
        paragraphs: ['[Haftungs- und Gewährleistungsregelungen rechtlich prüfen und ergänzen.]'],
      },
      {
        heading: '9. Schlussbestimmungen',
        paragraphs: [
          '[Anwendbares Recht, Gerichtsstand, Streitbeilegung und Verfahren für Änderungen der AGB rechtlich prüfen und ergänzen.]',
        ],
      },
    ],
  },
  '/kontakt': {
    path: '/kontakt',
    slug: 'kontakt',
    title: 'Kontakt',
    eyebrow: 'WIR SIND FÜR DICH DA',
    summary: 'Fragen zu GigLib? Hier findest du den passenden Kontakt.',
    seoTitle: 'Kontakt zu GigLib - Fragen und Anliegen',
    seoDescription: 'Nimm Kontakt mit GigLib auf. Ergänze hier die gültige Kontakt-E-Mail und die Anschrift des Anbieters.',
    sections: [
      {
        heading: 'E-Mail',
        paragraphs: ['Schreib uns bei Fragen zu GigLib, deinem Konto oder einer Buchung.'],
      },
      {
        heading: 'Anschrift',
        paragraphs: ['[Postanschrift des Anbieters ergänzen, falls für den Kontakt relevant.]'],
      },
    ],
  },
};

const navigation = Object.values(legalPages);
const contactEmail = import.meta.env.VITE_KONTAKT_EMAIL?.trim() || '';

export function getLegalPage(pathname: string): LegalPageConfig | undefined {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';
  return legalPages[normalizedPath];
}

export default function LegalPage({ page }: { page: LegalPageConfig }) {
  return (
    <div className="page-grain legal-shell min-h-[100dvh]">
      <a className="skip-link" href="#legal-inhalt">Zum Inhalt springen</a>
      <header className="site-header legal-header">
        <div className="header-inner">
          <a href="/" className="brand" aria-label="GigLib - zur Startseite">
            <img src={mark} width="38" height="38" alt="" />
            <span>giglib</span>
          </a>
          <a className="button button-small legal-home-link" href="/">← Zur Landingpage</a>
        </div>
      </header>

      <main id="legal-inhalt">
        <section className="legal-hero">
          <div className="legal-hero-inner">
            <p className="eyebrow"><span className="eyebrow-dot" />{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p>{page.summary}</p>
          </div>
        </section>

        <div className="legal-main">
          <aside className="legal-sidebar">
            <p className="eyebrow">GIGLIB / UNTERSEITEN</p>
            <nav className="legal-nav" aria-label="Rechtliche Seiten">
              {navigation.map((item) => (
                <a
                  href={item.path}
                  key={item.slug}
                  aria-current={item.slug === page.slug ? 'page' : undefined}
                >
                  {item.slug === 'agb' ? 'AGB' : item.title}
                </a>
              ))}
            </nav>
            <a className="legal-sidebar-home" href="/">Zur Startseite</a>
          </aside>

          <article className="legal-document">
            <div className="legal-disclaimer" role="note">
              <strong>Entwurf - noch nicht veröffentlichen</strong>
              <p>Die rechtlichen Inhalte sind Platzhalter und keine Rechtsberatung. Ergänze alle tatsächlichen Angaben und lass die Texte vor Veröffentlichung qualifiziert prüfen.</p>
            </div>

            {page.slug === 'kontakt' && (
              <section className="legal-contact-card" aria-labelledby="legal-contact-heading">
                <h2 id="legal-contact-heading">Schreib uns</h2>
                {contactEmail ? (
                  <a className="legal-email-link" href={`mailto:${contactEmail}`}>{contactEmail}</a>
                ) : (
                  <p className="legal-placeholder">[VITE_KONTAKT_EMAIL mit der gültigen Kontaktadresse ergänzen]</p>
                )}
              </section>
            )}

            {page.sections.map((section) => (
              <section className="legal-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p className="legal-placeholder" key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            {page.slug !== 'kontakt' && (
              <p className="legal-last-updated">Stand: [Datum der letzten rechtlichen Prüfung eintragen]</p>
            )}
          </article>
        </div>
      </main>

      <footer className="legal-footer">
        <div className="legal-footer-inner">
          <a href="/" className="brand footer-brand" aria-label="GigLib - zur Landingpage">
            <img src={mark} width="38" height="38" alt="" />
            <span>giglib</span>
          </a>
          <nav className="footer-links" aria-label="Footernavigation">
            {navigation.map((item) => (
              <a href={item.path} key={item.slug}>{item.slug === 'agb' ? 'AGB' : item.title}</a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
