import { Page } from 'playwright';

interface TimeoutOption {
  timeout: number;
}

declare global {
  // Set in the Cucumber Before hook — available in every step and helper
  var page: Page;

  // Cucumber step keywords — assigned in settings/globals.ts
  var Given: typeof import('@cucumber/cucumber').Given;
  var When:  typeof import('@cucumber/cucumber').When;
  var Then:  typeof import('@cucumber/cucumber').Then;

  // Playwright timeout option constants — assigned in settings/globals.ts
  var DELAY_500ms: TimeoutOption;
  var DELAY_1s:    TimeoutOption;
  var DELAY_2s:    TimeoutOption;
  var DELAY_5s:    TimeoutOption;
  var DELAY_10s:   TimeoutOption;
  var DELAY_20s:   TimeoutOption;
  var DELAY_1m:    TimeoutOption;
  var DELAY_3m:    TimeoutOption;
  var DELAY_5m:    TimeoutOption;
}

export {};
