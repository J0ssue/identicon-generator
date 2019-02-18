const express = require("express"),
  app = express(),
  port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(index.html);
});

app.listen(port, () => {
  console.log("listening on localhost:" + port);
});
