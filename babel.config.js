module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    ['@babel/preset-react']
  ],
  plugins: [
    ["module-resolver", {
      "root": ["./"],
      "alias": {
        "@components": "./src/components",
        "@img": "./src/assets/img",
        "@constants": "./src/constants",
        "@http": "./src/http",
        "@store": "./src/store",
        "@src": "./src",
        "@utils": "./src/utils"
      }
    }]
  ]
}