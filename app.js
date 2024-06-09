const express = require("express");
const app = express();

const {
  convertAndValidateNumsArray,
  findMode,
  findMean,
  findMedian,
} = require("./helpers");

app.get("/mean", function (req, res, next) {
  let numsAsStrings = req.query.nums.split(",");
  let nums = convertAndValidateNumsArray(numsAsStrings);
});

app.get("/median", function (req, res, next) {
  let numsAsStrings = req.query.nums.split(",");
  let nums = convertAndValidateNumsArray(numsAsStrings);
});

app.get("/mode", function (req, res, next) {
  let numsAsStrings = req.query.nums.split(",");
  let nums = convertAndValidateNumsArray(numsAsStrings);
});

app.listen(3000, function () {
  console.log(`Server started on port 3000`);
});
