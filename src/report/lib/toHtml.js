const nunjucks = require("nunjucks");

const env = nunjucks.configure("./reports", { autoescape: true });

env.addFilter("moeda", str => `$ ${str}`);

module.exports = env;
