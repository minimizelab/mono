const withTM = require("next-transpile-modules")(["@minimizelab/ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
