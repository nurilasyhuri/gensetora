# DESIGN.md

## Direction
Feel: Industrial, Authoritative, Dependable
Photo style: Authentic generator machinery, canopy detail, engineering inspection, load testing, and staging pool.
Motion profile: Subtle (micro-hover transitions, ticker marquee, clean slider interaction).
Won't do:
1. No generic neon floating gradients or SaaS illustrations.
2. No hidden pricing traps or unverifiable capacity numbers.
3. No distracting full-screen popup modals or intrusive audio.

## Tokens

### Colour
- Primary / Industrial Hijau Tosca: `#009498` (Signature Genset Tosca, hover `#007D81`)
- Deep Tosca Surface: `#0A4347` (Dark headers, hero overlay, cards)
- Deep Base Tosca: `#063336` (Trust strip, hero base, footer top)
- Tosca Card Surface: `#0D4E53` (Card dark surface)
- Border Dark Tosca: `#135D62`
- Accent Power Yellow: `#F5B82E`
- Accent Yellow Hover: `#E5A71D`
- Clean White: `#FFFFFF`
- Mist Gray Background: `#EFF8F8` (Crisp light tosca tint)
- Neutral Slate Text: `#64748B`
- Dark Text: `#0F172A`
- Border: `#E2E8F0`

### Type
- Heading: Manrope, Poppins, system-ui, sans-serif
- Body: Inter, system-ui, -apple-system, sans-serif
- Scale:
  - Hero H1: 32px (mobile) / 48px (desktop), font-extrabold, tracking-tight
  - Section H2: 24px (mobile) / 36px (desktop), font-bold
  - Card H3: 18px / 20px, font-bold
  - Body: 14px / 16px, leading-relaxed
  - Caption / Specs: 12px / 13px, font-medium, tracking-wide

### Radius
- Base button: 8px – 10px (`rounded-lg`)
- Card & container: 14px – 16px (`rounded-2xl`)
- Badge / Pill: 9999px (`rounded-full`)

### Spacing
- Base: 4px
- Section padding: 64px (mobile) / 96px (desktop)
- Container max-width: 1280px (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)

### Motion
- Transition: 200ms – 300ms ease-out
- Ticker animation: linear marquee 28s infinite (paused on hover / prefers-reduced-motion)

## Allow
allow: whatsapp-green — brand standard for WhatsApp floating customer contact in Indonesian B2B commerce
allow: hero-height — showcase machinery and power solutions hero section
allow: primary-actions — dual CTA for direct catalog view vs custom RFQ power calculation
