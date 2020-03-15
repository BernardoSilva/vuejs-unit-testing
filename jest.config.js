module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,vue}", "!**/node_modules/**"],
  coverageReporters: ["text-summary", "lcov"],
  testResultsProcessor: "jest-sonar-reporter"
};
