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
        "@constants": "./src/constants",
        "@http": "./src/http",
        "@img": "./src/assets/img",
        "@src": "./src",
        "@store": "./src/store",
        "@utils": "./src/utils"
      }      
    }]
  ]
}