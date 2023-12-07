const express = require("express");
const application = require("./application");
const userInfo = require("./userInformation");

const app = express();
const port = process.env.PORT || 3000;


app.use("/user", userInfo);
app.use("/", application);

//we ca set some thing in all of a application, separertly it can be main app, or subapp
/*const go = (req, res, next) => {
    console.log('go to next');
    next()
}
application.get('*', go)
*/
// app.all('/hello', (req, res) => {
//     res.send(`josd`)
// })



app.listen(port, () => {
    console.log(`listening on ${port}`);
});
