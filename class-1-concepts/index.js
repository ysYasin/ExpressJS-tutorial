const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
app.use(
  express.static(`${__dirname}/gandu/`, {
    index: "index.txt",
  })
);

app.get("/", (req, res) => {
  res.send("Hello express waloooo, Bismillah");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("this is from express post method");
});

// app.listen(port, () => {
//   console.log(`listening on ${port}`);
// });
