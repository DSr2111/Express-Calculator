const express = require("express");
const app = express();

app.get("/mean");

app.get("/median");

app.get("/mode");

app.listen(3000, function () {
  console.log(`Server started on port 3000`);
});
