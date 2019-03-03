module.exports = {
  coverageDirectory: "./coverage/",
  collectCoverage: true,
  transform: {
    ".(ts|tsx)": "ts-jest"
  },
  testEnvironment: "node",
  bail: true,
  moduleFileExtensions: ["ts", "js"],
  testMatch: ["<rootDir>/src/**/*.(test|spec).(ts|js)"]
};
