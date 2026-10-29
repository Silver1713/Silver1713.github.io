---
name: Jia Hao Yeo — Engineering Wayfinding
description: A precise, flat portfolio system with broad headlines and directional
  project links.
colors:
  ground: '#e8eff4'
  work: '#e8f3f7'
  ink: '#081d28'
  muted: '#314956'
  bodycopy: '#323d4b'
  techcopy: '#223343'
  signal: '#f8d846'
  rule: '#738995'
  focus: '#1555a6'
  dark-ground: '#102a35'
  dark-work: '#15323f'
  dark-ink: '#edf3f7'
  dark-muted: '#c2d6e0'
  dark-bodycopy: '#d3e0e7'
  dark-techcopy: '#b8d2df'
  dark-rule: '#75909e'
  dark-focus: '#79c6f4'
  background-panel: '#102d3a'
  background-meta: '#bdd0db'
  field-border: '#5d5830'
  button-hover: '#203b48'
typography:
  display:
    fontFamily: Epilogue, Barlow, sans-serif
    fontSize: 9.05vw
    fontWeight: 700
    lineHeight: 0.91
    letterSpacing: -.04em
  headline:
    fontFamily: Barlow, sans-serif
    fontSize: 7.2vw
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: -.045em
  destination-title:
    fontFamily: Barlow, sans-serif
    fontSize: 6.4vw
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: -.045em
  body:
    fontFamily: Barlow, sans-serif
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.5
  project-body:
    fontFamily: Barlow, sans-serif
    fontSize: 1.3vw
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: Barlow, sans-serif
    fontSize: 1.1vw
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: .16em
  technology:
    fontFamily: Barlow, sans-serif
    fontSize: 1.12vw
    letterSpacing: .14em
rounded:
  square: '0'
spacing:
  inset: 3.05vw
  inset-tablet: 24px
  inset-mobile: 20px
  gap-small: .5rem
  gap: 1rem
  gap-medium: 1.5rem
  gap-large: 2rem
components:
  button-primary:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.signal}'
    rounded: '{rounded.square}'
    padding: .8rem 1.2rem
  button-primary-hover:
    backgroundColor: '{colors.button-hover}'
  button-theme:
    textColor: '{colors.ink}'
    rounded: '{rounded.square}'
    padding: .45rem .75rem
  button-theme-hover:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.ground}'
  input:
    textColor: '{colors.ink}'
    rounded: '{rounded.square}'
    padding: .65rem .75rem
    width: 100%
  destination:
    backgroundColor: '{colors.signal}'
    textColor: '{colors.ink}'
    padding: 3.1vw 0 3.4vw
  navigation:
    textColor: '{colors.ink}'
  technology:
    typography: '{typography.technology}'
  text-link:
    width: 17.9vw
    textColor: '{colors.ink}'
---

# Design System: Jia Hao Yeo

## Overview

**Creative North Star: "Engineering Wayfinding"**

Engineering Wayfinding pairs broad, compact headlines with narrower body text and large, flat color fields. Its confidence comes from scale, alignment, and visible destinations. Recruiters can scan engineering work without waiting for entrance effects.

The system is precise and readable, with restrained motion and square controls. Light and dark themes share the yellow destinations and contact field, maintaining a clear point of recognition.

**Key Characteristics:**

- Flat pale-blue, deep-ink, and yellow fields.
- Self-hosted Epilogue display type with Barlow titles and body.
- Directional links, hairline rules, and square controls.
- Responsive reading order with visible content from first paint.

## Colors

A cool, pale-blue ground and deep ink support a committed yellow signal field. The frontmatter records the source CSS values; semantic tokens switch by theme.

### Primary

- **Signal Yellow** (`signal`): current-project destinations, contact field, and primary-button lettering. It stays yellow in both themes.

### Neutral

- **Pale Blue Ground** (`ground`) and **Work Blue** (`work`): page and project-detail fields.
- **Deep Ink** (`ink`): primary text and filled contact button; **Muted Slate**, **Body Slate**, and **Technical Slate** (`muted`, `bodycopy`, `techcopy`) distinguish secondary copy and technology labels.
- **Slate Rule** (`rule`): section dividers, header boundary, and theme-button border.
- **Deep Background Panel** (`background-panel`): education and experience; uses `dark-ink` for headings, `dark-bodycopy` for body copy, `background-meta` for metadata, and `dark-rule` for dividers in either theme.
- **Dark theme tokens**: `dark-ground`, `dark-work`, `dark-ink`, `dark-muted`, `dark-bodycopy`, `dark-techcopy`, `dark-rule`, and `dark-focus` replace their corresponding light values. `signal` does not change.
- **Focus Blue** (`focus`, `dark-focus`): keyboard outline. Yellow fields explicitly retain light-theme focus blue and deep ink text.
- **Olive Field Border** (`field-border`) and **Button Hover Ink** (`button-hover`): contact form boundaries and primary-button hover state.

**The Signal Rule.** Yellow marks prominent destination and contact fields; keep dark ink text on these fields in both themes.

## Typography

**Display Font:** Epilogue, with Barlow and sans-serif fallbacks. **Body Font:** Barlow, with sans-serif fallback. The shipped font assets cover Epilogue 700 and Barlow 400, 700, and 800; `font-display: swap` keeps content visible.

**Character:** Epilogue gives the opening headline a broad, emphatic voice; Barlow keeps project titles, technical labels, and long copy direct and economical. Frontmatter typography describes desktop roles; responsive overrides follow below.

### Hierarchy

- **Display:** three explicit lines, tightened tracking; each line is horizontally scaled (`scaleX(.87)`) with a compensating width (`114.94%`) and left transform origin.
- **Headline / destination title:** extra-bold Barlow with tight tracking. Background section title returns to Epilogue (`clamp(3rem,6vw,6rem)`, line-height `1.02`).
- **Body:** base Barlow; desktop introduction uses `1.64vw` and line-height `1.32`, with a `46ch` measure. Project paragraphs use `65ch`; notes use `60ch`.
- **Label:** uppercase, widely tracked. Technology lists are unboxed uppercase text with vertical separators, rather than pill badges.
- **Earlier-project title:** `clamp(1.8rem,3vw,3rem)`, weight 800, line-height `1.15`, tracking `-.025em`.

## Layout

The page uses full-width flat sections and a common inset (`spacing.inset`). The opening splits into `53.33% / 46.67%` columns. Project rows repeat that ratio inside the inset container; their description column has left padding (`5.05vw`) and a one-pixel rule. Background and contact use equal columns with a `6vw` gap. Skills use a `1fr / 2fr` row with a `2rem` gap.

The header is sticky (`top:0`, `z-index:5`), with minimum height `5.45vw`, vertical padding `1vw`, and a bottom rule. Desktop anchor clearance is `calc(5.45vw + 1.5rem)`. Sections use approximately `3–5vw` vertical padding. Earlier-project rows are deliberately denser (`2.5vw` vertical padding), divided by rules.

At **900px and below**, the inset becomes 24px; opening, project, background, skills, and contact grids stack. The header has 76px minimum height and 16px vertical padding; anchor clearance becomes `8rem`. Introduction padding is 40px vertically; project rows use 40px, and background/contact use 48px. Project description dividers disappear. Body paragraphs become 20px with line-height `1.5`, notes 18px; display becomes `clamp(4.5rem,13.5vw,7rem)` with line-height `.95`. Project headlines become `clamp(3rem,8vw,4.5rem)`. Technology lists wrap.

At **480px and below**, the inset becomes 20px and navigation occupies a second full-width header row. Display becomes `15vw`, destination titles 42px, project titles 48px, introduction and project body 18px. The name/email form row stacks; contact title is 48px and email 24px with arbitrary wrapping allowed.

At **1800px and above**, body width is capped at 1800px and centered, inset is 55px, header minimum height is 98px, and selected opening typography is capped: display 163px, destination title 115px, destination subtitle 44px, profile/text link 36px, intro copy 29px, technology 20px. Other viewport-based measurements retain their source behavior.

## Elevation & Depth

There are no box shadows. Flat, opaque section fills, one-pixel dividers, and strong type-size differences establish hierarchy. Sticky positioning is functional rather than a floating-card effect.

**The Flat Field Rule.** Use color fields, rules, and type hierarchy to separate content; do not add decorative shadows.

## Shapes

Controls and fields are square (`rounded.square`). Layout is rectilinear, with open edges and thin rules. Arrows are inline, unfilled SVG strokes; they are directional affordances rather than decorative raster images. No shipping raster imagery is used; concept and review PNGs are internal evidence only.

## Components

### Buttons

The primary contact action uses fixed deep ink and yellow, square corners, a one-pixel ink border, and the frontmatter padding. Hover uses `button-hover`. The footer theme button is transparent with a semantic rule border; hover inverts semantic ink and ground. Both use native button behavior and visible keyboard focus. Theme-button text describes the next action; `aria-pressed` reflects dark mode, and `localStorage` retains the choice under `theme`. The initial default is light when no stored dark preference exists.

### Inputs / Fields

Transparent contact fields sit directly on yellow, with an olive one-pixel border, square corners, 1.1rem body text and the recorded padding. Textarea minimum height is 130px and resize is vertical. Visible labels, autocomplete, required fields, and native email validation remain available. The form opens the visitor's email app through `mailto:` and says so next to the submit action; it is not a backend submission flow.

### Navigation

Brand and links are Barlow, with no enclosing pills. Links use weight 700 and desktop `clamp(1rem,1.5vw,1.5rem)`. Hover and active section receive underlines; `aria-current="location"` is updated through an IntersectionObserver with root margin `-15% 0px -65% 0px`. Native anchor links continue to work without JavaScript. The brand and footer offer back-to-top links.

### Technology labels

A wrapping flex list uses tracked uppercase text, with a one-pixel vertical separator and padding before subsequent items. It carries informational text, not interactive chip behavior. Tablet and small-mobile sizes are 13px and 12px; project detail labels use 14px at the tablet breakpoint.

### Project destination and text link

Large destinations are full-block anchors on yellow, separated by current-color rules. Their title, subtitle, technology list, and arrow form a single target. The Explore projects link has a thin bottom rule and aligned arrow. On hover and keyboard focus, arrows translate right by `.2em` over `.25s` using `cubic-bezier(.16,1,.3,1)`. Do not add hidden entrance states.

### Project and background rows

Current projects have oversized headings and separate descriptive columns; earlier projects use compact rows and smaller titles. Education and experience entries share a dark field, with simple heading rules and lighter metadata. These are content structures, not hover cards.

### Accessibility and evidence

All links and controls receive a three-pixel focus outline with a five-pixel offset. A focus-revealed skip link targets the main content. Decorative arrows are hidden from assistive technology; outbound contact links announce their new-tab behavior. Smooth scrolling and arrow transitions are disabled under `prefers-reduced-motion: reduce`.

Source authority: `assets/style.css`, `assets/main.js`, and `index.html`. Approved visual direction: `.impeccable/mocks/comp-a.png`. Finish review disposition: **SHIP**, no material findings. Review evidence: `.impeccable/review/desktop.png`, `mobile.png`, `desktop-dark.png`, `mobile-dark.png`, `width-1280.png`, and `width-360.png`. Detector cramped-padding warnings were reviewed as false positives. This records the review outcome; it does not assert a separate automated accessibility certification.

## Do's and Don'ts

### Do:

- Do use the existing light and dark semantic color assignments.
- Do preserve readable source order when columns stack.
- Do include visible keyboard focus and honor reduced motion.
- Do retain the distinction between large current-project titles and compact earlier-project rows.

### Don't:

- Don't introduce rounded cards or decorative shadows into this flat system.
- Don't hide essential content behind entrance animation.
- Don't replace the self-hosted type pairing with a generic font stack.
- Don't invent project screenshots, metrics, or external project links.
