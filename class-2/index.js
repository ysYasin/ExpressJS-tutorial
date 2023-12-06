const express = require("express");
// const handler = require("./handler");
/**I wrote this on handler.js page
 *   const handler = (req, res) => {
    res.send(req.app.locals.APPNAME);
    };

*   module.exports = handler;
 */
const port = process.env.PORT || 3000;
const app = express();

// @EXPLAINING example of app.local

// app.locals.APPNAME = "yasin-practice project";

// app.get("/", handler);

// @EXPLAINING example of sub app

// const app = express(); // @MAIN APP
const admin = express(); // @SUB APP who will contain admin routes
// // to initialize admin app with mail app it shoude be used
// app.use("/admin", admin);

// /**main apps route */
// app.get("/", (req, res) => {
//   res.json("Hello Babae=ra koi zaw? | main route e?");
// });

// /**sub / addmin routes route */

// admin.get("/", (req, res) => {
//   res.send("this is addmin panel");
// });

// EXPLORATION of mountpath
// by mount path we can know which app or subapp is defied by that we are!
//fore example

// admin.get("/dashboard", (req, res) => {
//   res.send(admin.mountpath);
// });

// @EXPLAINING mounth evet
// mouth event will fired whene ever calling mounted app , The parent app is passed to the callback function.

// admin.on("mount", (parent) => {
//   console.log(parent);
// });
// app.use("/admin", admin);

// admin.get("/dashboard", (req, res) => {
//   res.send(admin.mountpath);
// });

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
