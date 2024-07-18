const cds = require("@sap/cds");

module.exports = cds.service.impl(function () {
  console.log("I am in a anonymous function");

  this.on("READ", "Books", (req, next) => {
    return [
      {
        ID: cds.utils.uuid,
        title: "The title",
        author_ID: 2,
      },
    ];
  });
});
