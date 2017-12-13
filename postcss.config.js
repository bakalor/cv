const dev = process.env.NODE_ENV !== "production";

module.exports = {
  plugins: [
    require("postcss-import")({
      path: [
        "src",
        "src/theme"
      ]
    }),
    require("postcss-mixins")(),
    require("postcss-cssnext")({
      brouserlist: ["last 2 versions"],
      features: {
        customProperties: {
          variables: {
            "main-bg-color": "#fafafa",
          }
        }
      }
    })]
}
