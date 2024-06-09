const { findMean, findMedian, findMode } = require("./helpers");

describe("#findMedian", function () {
  it("finds the median of an even set", function () {
    expect(findMedian([1, -1, 4, 2])).toEqual(1.5);
  });
});
describe("#findMean", function () {
  it("finds the mean of an empty array", function () {
    expect(findMean([])).toEqual(0);
  });
});

describe("#findMode", function () {
  it("finds the mode", function () {
    expect(findMode([1, 1, 1, 1, 2, 3, 3])).toEqual(1);
  });
});
