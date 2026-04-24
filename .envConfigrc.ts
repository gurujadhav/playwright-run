import { config } from "@dotenvx/dotenvx";
config();

export const envConfig = {
  baseUrl: {
    labs: "https://labs.testifysamples.com/",
  },
  envName: {
    labs: "test",
  },
  apiUrl: {
    labs: "https://labs.testifysamples.com/",
  },
  browser: process.env.BROWSER || "chromium",
  headless: process.env.HEADLESS === "true", // headed by default; CI sets HEADLESS=true
  slowMo: 500, // slow down by 500ms to see the actions
};
