var NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
var drops = require("./drops");
var path = require("path");
var fcl = require("@onflow/fcl");

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    plugins: [new NodePolyfillPlugin()],
  });
};

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  drops.forEach((d) => {
    console.log(d);
    createPage({
      path: `/artist/drops/${d.id}`,
      component: path.resolve("./src/templates/artist/drops.js"),
      context: d,
    });
    createPage({
      path: `/artist/${d.id}`,
      component: path.resolve("./src/templates/artist/profile.js"),
      context: d,
    });
  });
};
