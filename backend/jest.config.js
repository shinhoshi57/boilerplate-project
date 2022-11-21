module.exports = {
  testEnvironment: 'node',
  "roots": [
      "./src"
  ],
  transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper:{
      '@backend': '<rootDir>/src/index.ts',
      '@frontend':'<rootDir>/src/index.ts'
    }
};
