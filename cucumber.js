module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'shared-objects/world.ts',
      'shared-objects/hooks.ts',
      'step-definitions/**/*.ts'
    ],
    paths: ['features/**/*.feature'],
    format: [
      'progress-bar',
      'html:reports/report.html',
      'json:reports/report.json'
    ],
    formatOptions: { snippetInterface: 'async-await' },
    timeout: 30000,
    parallel: 2,
  },
  smoke: {
    requireModule: ['ts-node/register'],
    require: [
      'shared-objects/world.ts',
      'shared-objects/hooks.ts',
      'step-definitions/**/*.ts'
    ],
    paths: ['features/**/*.feature'],
    tags: '@smoke',
    format: ['progress-bar'],
    formatOptions: { snippetInterface: 'async-await' },
    timeout: 30000,
  }
};
