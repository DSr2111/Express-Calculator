const { findMean, findMedian, findMode } = require("./helpers");

describe("#findMedian", function () {
  it("finds the median of an even set", function () {
    expect(findMedian([1, -1, 4, 2])).toEqual(1.5);
  });
});
