# NYABIX Website (React + Vite)

## Run it
```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm run build    # production build in /dist
npm run preview  # preview the production build
```

## Change the content
All text, numbers, services, FAQs, team, case studies and testimonials live in one file:

**`src/data/content.js`**

Items marked `TODO` are placeholders: phone, email, address, booking link, stats, leadership, case studies and testimonials. Replace them with your real details. Testimonials should be genuine reviews from your clients.

## Add your own images
- **Logo:** `src/assets/nyabix-logo.png`
- **Leadership photos:** in `src/components/Leadership.jsx`, replace the initials with `<img src="..." />`
- **CTA office photo:** in `src/components/CtaBand.jsx`, replace `.cta__art` with an `<img>`
- **Service visuals:** in `src/components/Services.jsx`, the left panel can hold a `<video>` or an image

## Structure
```
src/
  App.jsx                 page sections in order
  data/content.js         all site content
  styles/global.css       brand colors, buttons, animations
  hooks/                  useInView (scroll reveal), useCountUp (number counters)
  components/
    Navbar        sticky nav, dropdown + mega menu, mobile drawer
    Hero          rotating headline, animated code window, floating chips
    Proof         client logo marquee, counters, team, awards
    Stats         count-up stats, spinning globe, media marquee
    Services      auto-playing tabbed carousel
    Engagement    sticky stacking cards
    WhyUs         spotlight hover cards
    Process       animated 5-step timeline
    Leadership    team cards
    CaseStudies   drag-to-scroll carousel
    Testimonials  two-row infinite marquee
    CtaBand       call-to-action banner
    Faq           accordion
    Contact       form with floating labels and budget picker
    Footer        newsletter, links, back-to-top button
```

The contact and newsletter forms show a success message but don't send anything yet. Connect them to your backend or a service like Formspree or EmailJS. The `onSubmit` functions in `Contact.jsx` and `Footer.jsx` are where that goes.
