const express = require("express");
const app = express();
const port = process.env.PORT || 3500;

//In same process we can create middleware for sub application also, just instead of "app" write sub application name'
/**app.use((req, res, next) => {
  req.decoder = `${new Date(Date.now()).toLocaleString()} - ${
    req.originalUrl
  } - ${req.method}`;
  next();
});
*/

// we can get out data if middleaware
function getData(option) {
  return (req, res, next) => {
    if (option === true) {
      req.decoder = `${new Date(Date.now()).toLocaleString()} - ${
        req.originalUrl
      } - ${req.method}`;
      next();
    } else {
      throw new Error(`option is false`);
    }
  };
}

app.use(getData(false));

app.get("/", (req, res) => {
  res.json({
    name: req.decoder,
  });
});

// error handling middleware, this middle ware should have 4 parameter
const arrHandler = (err, req, res, next) => {
  console.log(err.message);
  res.send("ther was an error in server side");
};

app.use(arrHandler);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
