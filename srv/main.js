const cds = require("@sap/cds");
const logger = cds.log("capb2b");

module.exports = cds.service.impl(function () {
  logger("I am in a anonymous function");

  // this.on("READ", "Books", (req, next) => {
  //   return [
  //     {
  //       ID: cds.utils.uuid,
  //       title: "The title",
  //       author_ID: 2,
  //     },
  //   ];
  // });
  this.after("READ", "Books", (data, req) => {
    data.map((book) => (book.title += "!"));
  });
});
