const cds = require("@sap/cds");

module.exports = cds.service.impl(function () {
  console.log("I am in a anonymous function");

  this.on("READ", "Books", (_, next) => {
    console.log("handling read of books");

    next();
  });
});
