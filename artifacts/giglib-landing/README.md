# GigLib Landingpage

Responsive German-language marketing page for GigLib, the DJ gig organizer. Built with the existing React + Vite setup, Framer Motion and lucide-react. No backend or external imagery is required.

## Configuration

Set frontend variables in `artifacts/giglib-landing/.env` (Vite exposes only `VITE_` variables):

```dotenv
VITE_STRIPE_PAYMENT_LINK=https://buy.stripe.com/your-real-payment-link
VITE_KONTAKT_EMAIL=your-real-contact-address@example.com
```

`VITE_STRIPE_PAYMENT_LINK` is intentionally optional: when unset, all start CTAs scroll to the pricing section instead of opening a mock checkout.

The public legal pages are `/impressum`, `/datenschutz`, `/agb`, and `/kontakt`. The legal pages are structured templates with clearly marked placeholders, not final legal documents. Replace every bracketed item, configure the real contact email, and get the texts reviewed before publishing. No company identity, data-processing practices, or legal terms have been invented.

Run `pnpm --filter @workspace/giglib-landing dev` for development, `pnpm --filter @workspace/giglib-landing build` for production build, and `pnpm --filter @workspace/giglib-landing typecheck` for TypeScript checks.
