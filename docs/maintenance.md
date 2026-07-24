# Maintenance Guide

## Updating Content

All text content is in two files:

- `src/content/fi.ts` — Finnish
- `src/content/en.ts` — English

Edit the relevant strings directly. The structure mirrors `src/lib/types.ts`.

## Adding a New Section

1. Add data to both `fi.ts` and `en.ts`
2. Add TypeScript types to `src/lib/types.ts` (add to `Content` interface if needed)
3. Create the component in `src/components/`
4. Import and render it in `src/App.tsx`

## Adding Images

1. Convert to WebP format (recommended: 1200px–2400px wide)
2. Optionally create a 40px-wide placeholder version (`-placeholder.webp`)
3. Place both in `public/images/`
4. Reference the path in content files (e.g., `/images/farm-pasture.webp`)

## Adding a Language

1. Create `src/content/{code}.ts` following the `fi.ts` structure
2. Add the language to the `Lang` type in `src/lib/types.ts`
3. Add the import to `src/lib/utils.ts`
4. Add the language option to `src/content/fi.ts` and `src/content/en.ts` navigation

## Updating Dependencies

```bash
npm outdated         # check for outdated packages
npm update           # safe updates
npx npm-check-updates -u   # major version upgrades
npm install          # reinstall
npx tsc --noEmit     # verify types
npm run build        # verify build
```

## Type Safety Notes

- Framer Motion `ease` properties require `as const`: `ease: "easeOut" as const`
- `useLang()` returns a string, not an object — use `const lang = useLang()` not `const { lang } = useLang()`
- React 19 uses camelCase for `fetchPriority` (not `fetchpriority`)
