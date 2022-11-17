module.exports = {
    testEnvironment: 'node',
    "roots": [
        "<rootDir>/src"
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
      },
      testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
      moduleNameMapper:{
        '@common': '<rootDir>/src/common/index.ts',
        '@config': '<rootDir>/src/config/index.ts',
      }
  };
