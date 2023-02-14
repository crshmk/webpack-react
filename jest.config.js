// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
}

module.exports = config

module.exports = async () => {
  return {
    verbose: true,
    testEnvironment: "jsdom",
    preset: "./jest-preset.js",
    moduleNameMapper: {
      "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
      "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/renderer/__mocks__/genericMock.js"
    }
  }
}