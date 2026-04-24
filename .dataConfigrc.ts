export const dataConfig = {
  projectName: 'OUP PLY Test Automation',

  emailAddresses: {
    reportTo: ['gurudatta.jadhav@cognizant.com'],
  },

  lambdaTest: {
    user:           process.env.LT_USERNAME   || '',
    accessKey:      process.env.LT_ACCESS_KEY || '',
    platform:       'Windows 10',
    browserVersion: 'latest',
    buildName:      'OUP PLY Build',
    projectName:    'OUP PLY',
    tunnel:         false,
    network:        true,
    console:        true,
    video:          true,
  },

  testSettings: {
    defaultTimeout:   15000,
    navigationTimeout: 30000,
    retries:          1,
  },
};