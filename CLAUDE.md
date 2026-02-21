# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A choir harmony practice app for "Vippes kör" — lets choir members listen to individual vocal parts (soprano, alto, tenor) for songs they're learning. Audio files are hosted on Cloudinary.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

No test runner is configured (jest is in devDependencies but no jest.config or test files exist yet).

## Architecture

**Next.js 14 App Router** with TypeScript and Tailwind CSS (Tailwind imports are commented out in globals.css — currently using plain CSS).

### Two pages, two approaches

- **`/` (main page)** — Simple HTML `<audio>` elements for each harmony track. Server-renderable components. Song data from `src/database.tsx`.
- **`/mumma`** — Advanced client-side player using Web Audio API (`AudioContext`, `AudioBuffer`, `GainNode`) with per-track volume control. Song data from `src/app/mumma/database.tsx`.

### Data layer

Song data lives in two static TypeScript files (no database):

- `src/database.tsx` — Main song catalog. Exports `pageData` array with type `pageDataT[]`. Each song has harmonies (type + Cloudinary URL) and original links (YouTube embed URL, Spotify link).
- `src/app/mumma/database.tsx` — Separate data for the advanced player. Uses `AudioDataT<harmonyT, audioContextT>` generic type with `BaseHarmonyT` / `PopulatedHarmonyT` (extended with `audioBuffer` and `gainNode` at runtime).

### Key files

- `src/app/audioUtils.tsx` — Web Audio API utilities: fetches MP3s from Cloudinary, decodes to `AudioBuffer`, creates `GainNode` per track. Used only by the `/mumma` page.
- `src/app/components/` — Components for the main page: `Harmonies`, `SongCard` (audio players), `Originals`, `OriginalCard` (YouTube embeds + Spotify links).

### Adding a new song (main page)

Add an entry to the `pageData` array in `src/database.tsx` following the existing pattern. Songs display in reverse order (newest first).

### Path alias

`@/*` maps to `./src/*` (configured in tsconfig.json), though existing code uses relative imports.
