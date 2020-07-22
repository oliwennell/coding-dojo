/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutator: "javascript",
  packageManager: "npm",
  reporters: ["clear-text", "progress"],
  testRunner: "mocha",
  transpilers: [],
  testFramework: "mocha",
  coverageAnalysis: "perTest",
};
