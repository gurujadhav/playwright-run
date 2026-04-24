import { config } from '@dotenvx/dotenvx';
config();

export const envConfig = {
  baseUrl:     process.env.BASE_URL  || 'https://www.saucedemo.com',
  environment: process.env.ENV       || 'dev',
  browser:     process.env.BROWSER   || 'chromium',
  headless:    process.env.HEADLESS  !== 'false',
  slowMo:      parseInt(process.env.SLOW_MO || '0', 10),
  username:    process.env.USERNAME  || '',
  password:    process.env.PASSWORD  || '',
};
