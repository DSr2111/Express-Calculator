const express = require("express");
const app = express();

app.get("/mean", function (req, res, next) {
  let numsAsStrings = req.query.nums.split(",");
});

app.get("/median", function (req, res, next) {
  let numsAsStrings = req.query.nums.split(",");
});

app.get("/mode", function (req, res, next) {
  let numsAsStrings = req.query.nums.split(",");
});

app.listen(3000, function () {
  console.log(`Server started on port 3000`);
});
