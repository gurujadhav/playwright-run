import { BrowserContextOptions, LaunchOptions } from 'playwright';
import { envConfig } from './.envConfigrc';
import { dataConfig } from './.dataConfigrc';

export const launchOptions: LaunchOptions = {
  headless: envConfig.headless,
  slowMo:   envConfig.slowMo,
  args:     ['--no-sandbox', '--disable-setuid-sandbox'],
};

export const contextOptions: BrowserContextOptions = {
  viewport:           { width: 1280, height: 720 },
  ignoreHTTPSErrors:  true,
  locale:             'en-GB',
  timezoneId:         'Europe/London',
  acceptDownloads:    true,
};

export const timeouts = {
  default:    dataConfig.testSettings.defaultTimeout,
  navigation: dataConfig.testSettings.navigationTimeout,
};