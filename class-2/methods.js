// @XPLAINING importent methods of express
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

//@EXPLAINING get/set methods of express
// app.set("main", "/");

// app.get(app.get("main"), (req, res) => {
//   res.send("Hello from modules");
// });

/* ------------------------------- app.paramm ------------------------------- */


// this param will get app thi request url query by name of "id"
/**app.param("id", (req, res, next, id) => {
  const userDtls = (id === "1" && {
    id: id,
    name: "yasin arafat",
  }) || {
    id: id,
    name: "yash Rahul",
  };
  req.userDtls = userDtls;
  next();
});

app.get("/:id", (req, res) => {
  res.send(req.userDtls);
});
*/

//@EXPLAINING app.route methods of express

/** well you dont need to write same routes like this
 * app.get("about/admin", (req, res) => {
  res.send("Welcome to mthod get");
});
app.post("about/admin", (req, res) => {
  res.send("Welcome to mthod post");
});
app.put("about/admin", (req, res) => {
  res.send("Welcome to mthod put");
});
app.patch("about/admin", (req, res) => {
  res.send("Welcome to mthod patch");
});
*/

/** write by app.router method
*app
  .route("/about/admin")
  .get((req, res) => {
    res.send("Welcome to mthod get");
  })
  .post((req, res) => {
    res.send("Welcome to mthod post");
  })
  .delete((req, res) => {
    res.send("Welcome to mthod delete");
  });
*/

// //@EXPLAINING render methods of express
// const fs = require("fs");
// const path = require("path");
// app.set("view engine", "ejs");

// fs.writeFile("views/about/aboutme.ejs", "hello world", (err) => {
//   console.log(err);
// });
// app.get("/aboutme", (req, res) => {
//   res.render("/about/aboutme");
// });













app.listen(port, () => {
  console.log(`listening on ${port}`);
});
