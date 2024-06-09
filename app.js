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

  let result = {
    operation: "mean",
    result: findMean(nums),
  };

  return res.send(result);
});

app.get("/median", function (req, res, next) {
  let numsAsStrings = req.query.nums.split(",");
  let nums = convertAndValidateNumsArray(numsAsStrings);

  let result = {
    operation: "median",
    result: findMedian(nums),
  };

  return res.send(result);
});

app.get("/mode", function (req, res, next) {
  let numsAsStrings = req.query.nums.split(",");
  let nums = convertAndValidateNumsArray(numsAsStrings);

  let result = {
    operation: "mode",
    result: findMode(nums),
  };

  return res.send(result);
});

app.listen(3000, function () {
  console.log(`Server started on port 3000`);
});
