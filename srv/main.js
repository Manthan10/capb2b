const cds = require("@sap/cds");
const { Books } = cds.entities("bookshop");
const logger = cds.log("capb2b");

module.exports = cds.service.impl(function () {
  const changeUrgencyDueToSubject = (data) => {
    if (data) {
      const books = Array.isArray(data) ? data : [data];
      books.forEach((book) => {
        if (book.title?.toLowerCase().includes("harmless")) {
          book.urgency = "HIGH";
        }
      });
    }
  };

  // logger("I am in a anonymous function");

  // this.on("READ", "Books", (req, next) => {
  //   return [
  //     {
  //       ID: cds.utils.uuid,
  //       title: "The title",
  //       author_ID: 2,
  //     },
  //   ];
  // });

  this.on("totalStock", () => 99);
  this.after("READ", "Books", changeUrgencyDueToSubject);
});
