var slugify = require("slugify");

const title = slugify("some string lorem ipsum", "*");

console.log(title);
