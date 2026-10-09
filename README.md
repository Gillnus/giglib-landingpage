# GigLib Landingpage

Deutschsprachige, responsive Landingpage für GigLib, das Event- & Booking-CRM für DJs.

Der aktuelle Stand enthält die Landingpage, die Early-Bird-Preiskarte, den Kalender-Screenshot für Juli 2027 und die Unterseiten Impressum, Datenschutz, AGB und Kontakt.

## Projektstruktur

- `artifacts/giglib-landing/`: die eigentliche Website mit React, Vite und TypeScript
- `lib/`, `scripts/`, `artifacts/api-server/`: mitgelieferte Workspace-Basis und gemeinsame Pakete
- `artifacts/giglib-landing/public/images/`: öffentlich eingebundene Bilder

Für die Landingpage wird kein laufender API-Server und keine Datenbank benötigt.

## Lokal starten

Voraussetzungen: Node.js 22.12 oder neuer und pnpm 10.

Im Terminal im Hauptordner dieses Repositorys:

```sh
pnpm install --frozen-lockfile
PORT=4173 BASE_PATH=/ pnpm --filter @workspace/giglib-landing run dev
```

Die Seite ist anschließend unter `http://localhost:4173` erreichbar.

## Für IONOS bauen

Im Terminal im Hauptordner:

```sh
PORT=4173 BASE_PATH=/ pnpm --filter @workspace/giglib-landing run build
```

Die fertigen Dateien findest du unter:

```text
artifacts/giglib-landing/dist/public/
```

Lade **den Inhalt dieses Ordners** über SFTP oder den Dateimanager deines IONOS-Webhostings in den Zielordner deiner Domain. Die `index.html` muss direkt in diesem Zielordner liegen. Der Quellcode und `node_modules` gehören nicht in den öffentlich erreichbaren Webordner.

Die Unterseiten werden in React gerendert. Damit auch direkte Aufrufe wie `/impressum` funktionieren, benötigt der Webserver eine Weiterleitung auf `index.html`. Bei Apache mit aktivem `mod_rewrite` kannst du im Zielordner eine `.htaccess` mit folgendem Inhalt anlegen:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

Diese Anleitung gilt für eine Domain, deren Website im Hauptverzeichnis liegt. Für die Installation in einem Unterordner müssen `BASE_PATH` und die Rewrite-Regeln angepasst werden.

## Vor dem Livegang

- Die Rechtstexte sind Vorlagen mit Platzhaltern. Ersetze die markierten Angaben und lasse die Texte prüfen.
- Konfiguriere `VITE_KONTAKT_EMAIL` mit der gewünschten öffentlichen Kontaktadresse.
- Konfiguriere `VITE_STRIPE_PAYMENT_LINK` mit dem echten Checkout-Link. Ohne diesen Link führen die Start-Buttons zur Preissektion, nicht zu einer Registrierung oder Zahlung.
- Vite übernimmt diese Einstellungen beim Build. Nach einer Änderung muss die Website neu gebaut werden.
- Trage niemals geheime API-Schlüssel in `VITE_`-Variablen ein: Diese Werte sind im Browser öffentlich.

Weitere Hinweise findest du in `artifacts/giglib-landing/README.md`.

## Öffentliches Repository

Dieses Repository enthält einen bereinigten Projektstand ohne lokale Secrets, interne Notizen, Canvas-Entwürfe oder ursprüngliche Upload-Dateien. Das im Webauftritt verwendete Kalenderbild ist enthalten.

Die Veröffentlichung auf GitHub allein stellt die Website noch nicht auf deiner Domain online. Spätere Änderungen in Replit werden nicht automatisch mit diesem Repository synchronisiert.
