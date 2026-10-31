---
name: InterviewAI
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#464554'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#767586'
  outline-variant: '#c7c4d7'
  surface-tint: '#494bd6'
  primary: '#4648d4'
  on-primary: '#ffffff'
  primary-container: '#6063ee'
  on-primary-container: '#fffbff'
  inverse-primary: '#c0c1ff'
  secondary: '#00687a'
  on-secondary: '#ffffff'
  secondary-container: '#57dffe'
  on-secondary-container: '#006172'
  tertiary: '#6b38d4'
  on-tertiary: '#ffffff'
  tertiary-container: '#8455ef'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d0bcff'
  on-tertiary-fixed: '#23005c'
  on-tertiary-fixed-variant: '#5516be'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.011em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: -0.006em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: -0.003em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-2xs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-base: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
  gutter: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 2rem
---

## Brand & Style

This design system establishes an ultra-refined, high-focus productivity interface built for technical professionals. Drawing direct inspiration from modern engineering power-tools like Linear and Raycast, the aesthetic balances sterile utility with luminous accent details. 

The emotional tone communicates precision, calm authority, and frictionless momentum. By stripping away extraneous ornamentation and grounding the interface on crisp alabaster and pure white surfaces, high-density data becomes effortless to scan. Micro-details—such as translucent surface borders, sub-pixel outlines, and targeted indigo glows—direct user focus to actionable insights and key interactive states without introducing visual noise.

## Colors

The palette is engineered for extreme typographic clarity paired with electric accents:

- **Canvas & Layering**: The primary foundation rests on an alabaster base (`#F8FAFC`), elevated with tiered sub-surfaces (`#F1F5F9`) and bright white operational cards (`#FFFFFF`).
- **Primary Accent (`#6366F1`)**: Electric Indigo anchors calls-to-action, active indicators, and high-priority states.
- **Secondary Accent (`#06B6D4`)**: Cyber Cyan introduces directional momentum, used primarily for forward-moving workflows, data telemetry, and paired gradients.
- **Tertiary Accent (`#8B5CF6`)**: Soft violet provides contextual highlights, AI prompt markers, and secondary status cues.
- **Typography & Neutrals**: Anchored by deep slate tones (`#0F172A` for primary text, `#334155` for secondary body, and `#64748B` for meta captions) to ensure strict WCAG AAA legibility.
- **Borders & Dividers**: Low-contrast, high-definition lines using `rgba(226, 232, 240, 0.8)` maintain distinct structural separation without boxing in content.

## Typography

Typography relies entirely on the technical neutrality of Inter, configured with optical tracking adjustments. Larger headlines feature tight negative tracking (`-0.02em` to `-0.03em`) to impart an authoritative, editorial finish common in modern developer interfaces.

Body typography prioritizes rhythm and scanning comfort with calibrated line heights that prevent optical crowding in split-screen views. For code snippets, metadata, and keyboard shortcuts, a secondary monospace font is paired at compact sizes to maintain strict tabular alignment.

## Layout & Spacing

This design system uses an 8px base rhythm, supplemented by 4px sub-units for tight component architecture like badges, toolbars, and input controls.

### Grid & Structure
- **Desktop (1024px+)**: A 12-column adaptive grid with `1.5rem` gutters and max container widths capped at `1440px` for high-density multi-pane views (e.g., live interview transcription alongside question prompts).
- **Tablet (768px - 1023px)**: Reflows to an 8-column layout; secondary utility panels collapse into flyout drawers or stacked tabs.
- **Mobile (< 768px)**: Single-column linear layout with dynamic safe-area insets, `1rem` margins, and edge-to-edge touch targets.

## Elevation & Depth

Depth is established through subtle physical separation and diffuse ambient light rather than harsh structural drop shadows:

- **Level 0 (Base Canvas)**: Flat `#F8FAFC` foundation.
- **Level 1 (Sub-surface Panels)**: Crisp `#FFFFFF` surfaces with a 1px perimeter outline (`rgba(226, 232, 240, 0.8)`) and a delicate shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.03), 0 1px 2px -1px rgba(15, 23, 42, 0.02)`.
- **Level 2 (Interactive Cards & Overlays)**: Glassmorphic cards with `backdrop-filter: blur(12px)`, pure white translucent backing (`rgba(255, 255, 255, 0.85)`), and diffuse dual-drop shadows: `0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -2px rgba(15, 23, 42, 0.03)`.
- **Level 3 (Modals & Command Palettes)**: Floating surfaces with `0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)`.
- **Focus Glows**: Active and AI-assisted modules use a directional soft glow: `0 0 0 1px #6366F1, 0 0 20px -4px rgba(99, 102, 241, 0.25)`.

## Shapes

The design system employs a geometric, modern rounded profile (`roundedness: 2`):

- **Interactive Micro-elements (Inputs, Badges, Buttons)**: Default `0.5rem` (8px) corner radius, providing crisp tactile feedback.
- **Cards & Content Blocks**: `1rem` (16px) corner radius, softening the overall visual hierarchy while maintaining clean vertical grid alignment.
- **Modals & Dialogs**: `1.5rem` (24px) corner radius for prominent, elevated UI layers.
- **Pills & Status Rings**: Full `9999px` rounding reserved strictly for real-time status indicators (e.g., recording beacons, candidate status pills).

## Components

### Buttons
- **Primary**: Solid Electric Indigo (`#6366F1`) with white text, micro-inset shadow (`inset 0 1px 0 rgba(255, 255, 255, 0.2)`), and smooth transition to an Indigo-to-Cyan gradient on hover.
- **Secondary**: Pure white container with `border: 1px solid rgba(226, 232, 240, 0.8)`, slate text (`#334155`), and subtle ambient lift on hover.
- **Ghost/Tertiary**: Borderless with slate-500 text, transitioning to `#F1F5F9` background on hover.

### Inputs & Search
- Standard height of `38px` for high-density forms.
- White background (`#FFFFFF`), neutral border (`#E2E8F0`), and inner micro-shadow for inset depth.
- On focus: Ring transition to Electric Indigo (`#6366F1`) paired with an ambient cyan-indigo outer halo blur. Monospace shortcut indicators (`⌘K`) anchored to the right.

### Cards & Metrics
- Pure white or translucent glass containers with fine `1px` slate-200 borders.
- Header sections include low-contrast category tags (`label-sm`), high-contrast primary values (`headline-md`), and positive/negative trend pills.

### Chips & Tags
- Compact `24px` height with `0.375rem` radius.
- Neutral states use `#F1F5F9` with `#475569` text. Dynamic states (e.g., "AI Analyzing") utilize soft tinted backgrounds (`rgba(99, 102, 241, 0.08)`) and high-chroma text.

### Selection Controls (Checkboxes & Radios)
- Square-rounded (`4px` for checkboxes) and circular radios with `#E2E8F0` outlines.
- Selected state fills with Electric Indigo and white checkmark/dot icons, featuring a 2px offset focus ring.

### Specialized AI & Interview Modules
- **Audio/Speech Visualizer**: Linear bars shifting across the Indigo-to-Cyan spectrum against a frosted alabaster strip.
- **Live Transcript Card**: Active speaker highlighted with a subtle left-border cyan accent stripe (`2px`) and soft ambient background tint.