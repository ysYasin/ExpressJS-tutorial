const express = require("express");
const app = express(); // main app
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 3000;

app.use(cookieParser);
const blog = express(); // blo0g sub App
app.use("/blog/yasin", blog);

app.get("/alu/zodu/modu/:id", (req, res) => {
  /* -------------------- not same in main app and sub app -------------------- */
  //res.send(req.baseUrl); // base url for this is ''
  // res.send(req.originalUrl); // original url for this is '/alu/zodu/modu'
  // res.send(req.url); // for main app its same to originalUrl '/alu/zodu/modu'
  // res.send(req.path); // '/alu/zodu/modu'
  // res.send(req.hostname); // 'localhost'
  /* ------------------------ same in sub and main app ------------------------ */
  // res.send(req.ip); // give ip address
  // res.send(req.method); // it will give the request method in uppercase @LIKE 'GET'
  //  res.send(req.protocol); // it will return the protocol it may HTTP or HTTPS , in this case 'http'
  //   res.send(req.params); // it will retuen an object with param name and param :: LIKE :: {"id": "2"} param name is in request url you ar defined by what like in this case we defiend by : ID
  //   res.send(req.query); // it will return query name and value in requested url : in this case I showed name and my name id given me this :: {"name":"yasin"}
  // res.send(req.cookies) // @TO get cookies we need to install a middleware name 'cookie-parser'
  //   res.send(req.secure); // is send true or false result ;
});

/* -------------------------------------------------------------------------- */
/*now we are gonna talk about req.body which one we get only in pot  method                                                                          */
/* -------------------------------------------------------------------------- */
// for sendnf post request we need to diclier expree.json() before
app.use(express.json());
app.post("/apiname", (req, res) => {
  res.send(req.body); // will give a json object attached from client request
  //@NOTE : to resiving DATA from client request we need to set content-type application/json is header object
});
/* -------------------------------------------------------------------------- */
/*                         how sub app work with req.                         */
/* -------------------------------------------------------------------------- */
blog.get("/alu/zodu/modu", (req, res) => {
  // res.send(req.baseUrl); // base url for this is '/blog/yasin'
  // res.send(req.originalUrl); // original url for this '/blog/yasin/alu/zodu/modu'
  // res.send(req.url); // for sub app its defarence like '/alu/zodu/modu' :: see its like req.path
  // res.send(req.path); //  '/alu/zodu/modu'
  //res.send(req.hostname); //  'localhost' :: ist same in main app and sub app
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
