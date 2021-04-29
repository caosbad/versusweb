var NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
var drops = require("./drops");
var testdrops = require("./testdrops");
var path = require("path");

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

exports.createPages = ({ page, actions }) => {
  const { createPage } = actions;
  let items = [];
  if (process.env.ENV === "production") items = drops;
  else items = testdrops;
  items.forEach((d) => {
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

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/profile/)) {
    page.matchPath = "/profile/*";
    createPage(page);
  }
};
