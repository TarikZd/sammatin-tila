# Accessibility Checklist

## Semantic HTML

- [ ] Page uses `<nav>` for navigation
- [ ] Page uses `<main>` for primary content
- [ ] Page uses `<footer>` for footer
- [ ] Each section is wrapped in `<section>` with an `id`
- [ ] Headings follow hierarchy: h1 → h2 → h3 (no skipping)
- [ ] Exactly one `<h1>` per page (hero title)
- [ ] Lists use `<ul>` / `<ol>` / `<li>` properly
- [ ] Form inputs are inside `<form>` with `<label>` elements

## Keyboard Navigation

- [ ] Skip-to-content link is first tabbable element
- [ ] Tab order matches visual order
- [ ] All interactive elements reachable via Tab
- [ ] Escape key closes: mobile menu, lightbox, modals
- [ ] Arrow keys navigate: lightbox prev/next
- [ ] Enter/Space activates buttons and links
- [ ] No keyboard traps

## ARIA

- [ ] Icon-only buttons have `aria-label`
- [ ] Lightbox has `role="dialog"` and `aria-modal="true"`
- [ ] Mobile menu toggle has `aria-label` (updates when open/closed)
- [ ] Decorative images are `aria-hidden="true"` or have `role="none"`
- [ ] Social media icons have `aria-label` with platform name
- [ ] Form error messages have `role="alert"`

## Focus Indicators

- [ ] All interactive elements have visible focus styles
- [ ] Focus indicator contrast ratio ≥ 3:1 against background
- [ ] Skip-to-content link visible on focus
- [ ] No `outline: none` without replacement
- [ ] Focus order is logical when elements appear/disappear

## Color & Contrast

- [ ] Body text contrast ratio ≥ 4.5:1 against background
- [ ] Large text (≥18px bold or ≥24px) contrast ≥ 3:1
- [ ] Link text distinguishable from body text
- [ ] No information conveyed by color alone
- [ ] Focus indicators have sufficient contrast

## Motion

- [ ] Animations respect `prefers-reduced-motion`
- [ ] Framer Motion defaults handle reduced motion (built-in)
- [ ] No auto-playing video or continuous animation
- [ ] Scroll-triggered animations are subtle

## Forms

- [ ] All inputs have visible `<label>` elements
- [ ] Required fields are indicated (visually and via `required` attribute)
- [ ] Error messages are clear and descriptive
- [ ] Success state is visually distinct from error state
- [ ] Form is navigable and submittable via keyboard

## Screen Reader

- [ ] Page title is descriptive
- [ ] Language changes are announced (`<html lang>` update)
- [ ] Lightbox content is announced when opened
- [ ] No content hidden from screen readers that is visually present
- [ ] No content visible to screen readers that is hidden visually
