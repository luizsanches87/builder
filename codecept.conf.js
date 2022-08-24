exports.config = {
  output: './output',
  helpers: {
    Appium: {
      app: 'C:\\Users\\Felipe\\Desktop\\Builders\\challenge-qa.apk',
      platform: 'Android',
      device: 'emulator'
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/cellPhonePage_steps.js',
      './step_definitions/homePage_steps.js',
      './step_definitions/fullNamePage_steps.js',
      './step_definitions/locationPage_steps.js']
  },
  plugins: {
    allure: {},
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
    pattern: 'wait.*',
    timeout: 0
  },
  {
    pattern: 'amOnPage',
    timeout: 0
  }
  ],
  tests: './tests/*_test.js',
  name: 'Builders'
}