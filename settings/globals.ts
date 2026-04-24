import { Given, When, Then } from '@cucumber/cucumber';

// ── Cucumber step keywords ────────────────────────────────────────────────────
// Assigned to globalThis so step definition files need zero imports.
// And/But are not separate exports in cucumber-js v10 — use Given/When/Then.
Object.assign(globalThis, { Given, When, Then });

// ── Playwright timeout option constants ──────────────────────────────────────
// Each constant is shaped as { timeout: n } so it drops straight into any
// Playwright method that accepts an options object, e.g.:
//   page.goto(url, DELAY_10s)
//   page.waitForSelector(sel, DELAY_5s)
export const DELAY_500ms = { timeout: 500 };
export const DELAY_1s    = { timeout: 1_000 };
export const DELAY_2s    = { timeout: 2_000 };
export const DELAY_5s    = { timeout: 5_000 };
export const DELAY_10s   = { timeout: 10_000 };
export const DELAY_20s   = { timeout: 20_000 };
export const DELAY_1m    = { timeout: 60_000 };
export const DELAY_3m    = { timeout: 180_000 };
export const DELAY_5m    = { timeout: 300_000 };

Object.assign(globalThis, {
  DELAY_500ms,
  DELAY_1s,
  DELAY_2s,
  DELAY_5s,
  DELAY_10s,
  DELAY_20s,
  DELAY_1m,
  DELAY_3m,
  DELAY_5m,
});
