function createFrequencyCounter(arr) {
  return arr.reduce(function (acc, next) {
    acc[next] = (acc[next] || 0) + 1;
    return acc;
  }, {});
}

function findMode(arr) {
  let freqCount = createFrequencyCounter(arr);

  let count = 0;
  let mostFrequent;
}

function findMedian(arr) {}

function findMean(arr) {}
