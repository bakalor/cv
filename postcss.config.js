module.exports = {
  plugins: [
    require("postcss-cssnext")({
      brouserlist: ["last 2 versions"],
      features: {
        customProperties: {
          variables: {
            "main-bg-color": "#fafafa",
          }
        }
      }
    })
  ]
}