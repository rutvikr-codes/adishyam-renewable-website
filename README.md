# Adishyam Renewable Private Limited — Corporate Website

A production-quality corporate website for **Adishyam Renewable Private Limited**, a renewable energy engineering partner specializing in wind turbine erection, mechanical installation, on-site project execution, and infrastructure support.

---

## 1. Technology Architecture

- **Framework**: Next.js (App Router, Turbopack, React 19, TypeScript)
- **Styling**: Tailwind CSS v4 with custom color tokens:
  - Deep Forest Green: `#123D2A`
  - Renewable Green: `#27864A`
  - Fresh Lime Accent: `#A7D96C`
  - Warm Off-White: `#F7F8F3`
  - Charcoal: `#17231D`
  - Crisp White: `#FFFFFF`
- **Icons**: Lucide React
- **API Engine**: Next.js Server Route (`/api/contact`) with payload validation, anti-spam honeypot defense, and structured inquiry processing.
- **SEO & Discovery**: Dynamic XML Sitemap (`/sitemap.xml`), Robots (`/robots.txt`), Web App Manifest (`/manifest.webmanifest`), OpenGraph meta tags, and JSON-LD Corporation Schema.
- **Accessibility**: Built to WCAG 2.2 AA standards (visible focus rings, skip-to-content links, ARIA dialogues, and mobile touch targets).

---

## 2. Directory Structure

```text
adishyam/
├── public/
│   ├── images/              # High-resolution wind turbine & site photography
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── api/contact/     # Backend POST API for contact inquiry validation
│   │   ├── about/           # Company profile, mission, vision, philosophy, QHSE
│   │   ├── services/        # 6 core wind turbine infrastructure services
│   │   ├── projects/        # Filterable project portfolio with detail modal
│   │   ├── process/         # 5-stage project execution lifecycle
│   │   ├── contact/         # Interactive consultation form & office info
│   │   ├── privacy-policy/  # Project confidentiality & NDA standards
│   │   ├── terms/           # Terms of engagement & demo data notices
│   │   ├── sitemap.ts       # Dynamic XML sitemap generator
│   │   ├── robots.ts        # Search crawler directives
│   │   ├── manifest.ts      # Progressive Web App manifest
│   │   ├── globals.css      # Design tokens, grid patterns, and keyframe animations
│   │   ├── layout.tsx       # Root layout with Schema.org JSON-LD & banner
│   │   └── page.tsx         # Complete corporate homepage
│   ├── components/
│   │   ├── ui/
│   │   │   ├── BrandLogo.tsx       # Vector turbine emblem with clean typography
│   │   │   ├── SectionHeading.tsx  # Unified heading with badge & accent line
│   │   │   └── DemoDataBanner.tsx  # Verifiability notice banner
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Fixed navbar with scroll transparency & mobile drawer
│   │   │   ├── Footer.tsx          # Multi-column corporate footer with links & disclaimer
│   │   │   └── ContactCTASection.tsx # Reusable high-impact call-to-action
│   │   ├── home/
│   │   │   ├── Hero.tsx            # Cinematic hero with accessible dark overlay
│   │   │   ├── CompanyIntro.tsx    # Split layout with field team photography
│   │   │   ├── ServicesOverview.tsx# 6 service capability cards
│   │   │   ├── WhyChooseUs.tsx     # 6 operational value proposition pillars
│   │   │   ├── ProcessSteps.tsx    # 5-step project execution workflow
│   │   │   ├── ProjectShowcase.tsx # Showcase gallery with category filters & modal
│   │   │   └── SustainabilitySection.tsx # Renewable infrastructure stewardship
│   │   └── contact/
│   │       ├── ContactForm.tsx     # Validated form with real submission & status feedback
│   │       └── ContactInfoCard.tsx # Direct phone, email, and office coordinates
│   └── data/
│       ├── siteConfig.ts   # Centralized brand, phone, email, address, and notices
│       ├── services.ts     # Detailed service descriptions, scopes, and approaches
│       ├── projects.ts     # Project showcase profiles with sample indicators
│       ├── process.ts      # 5-phase project execution lifecycle steps
│       └── company.ts      # Mission, vision, core philosophy, and QHSE stages
```

---

## 3. Getting Started

### Prerequisites
- Node.js `v20+` or `v24+`
- npm `10+` or `11+`

### Installation & Local Run
```bash
# 1. Clone repository & install dependencies
npm install

# 2. Run local development server
npm run dev

# The site will be available at http://localhost:3000
```

### Production Build & Launch
```bash
# Test compile and build production assets
npm run build

# Start production server
npm run start
```

---

## 4. Centralized Content Configuration

All company details, contact records, service categories, and portfolio items are decoupled from layout code and located in `src/data/`:

| File | Purpose |
| :--- | :--- |
| `src/data/siteConfig.ts` | Update official phone number, registered office address, company email, and toggle the demo notice banner (`isDemoData: false`). |
| `src/data/services.ts` | Adjust service titles, scopes of work, execution approaches, and technical considerations. |
| `src/data/projects.ts` | Replace illustrative sample projects with verified corporate achievements, real capacities, and completed wind farm photographs. |
| `src/data/process.ts` | Customize the 5-phase execution lifecycle and safety gates to match company operating procedures. |
| `src/data/company.ts` | Update executive profiles, leadership team bios, and quality audit stages. |

---

## 5. Contact Form Backend & Email Integration

The contact form submits to `/api/contact` with:
- Client-side validation for instant user feedback.
- Server-side validation enforcing non-empty fields, valid email structures, and minimum descriptions.
- Anti-spam honeypot defense that discards automated bot submissions.
- Structured console logging of all inquiries.

To connect real email forwarding (e.g. via Resend, AWS SES, or SMTP), add the desired credentials to `.env.local`:
```env
SMTP_HOST=smtp.your-mail-provider.com
SMTP_PORT=587
SMTP_USER=inquiries@adishyamrenewable.com
SMTP_PASS=your_secure_password
CONTACT_RECIPIENT_EMAIL=contact@adishyamrenewable.com
```

---

## 6. Pre-Publication Client Checklist

Prior to public deployment, **Adishyam Renewable Private Limited** should supply and confirm:

1. **Official Logo Asset**: Replace `BrandLogo.tsx` SVG with the registered high-resolution corporate vector logo if already created.
2. **Official Contact Information**:
   - Registered Corporate Office Address (replace placeholder in `siteConfig.ts`).
   - Official Corporate Telephone and Inbound Email.
   - Corporate Identification Number (CIN) and GSTIN if required on invoice/footer.
3. **Verified Project Records**: Replace the 6 representative demo profiles in `projects.ts` with verified company installations, client logos (where NDA permits), and actual MW capacities.
4. **Leadership Profiles**: Add names, executive bios, and professional headshots for key directors and site managers in `company.ts`.
5. **Turn off Demo Banner**: Set `notice.isDemoData: false` in `siteConfig.ts` once verified data is populated.
