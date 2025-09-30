const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8080;

const MONGO_URL = "mongodb://127.0.0.1:27017/Nestify";

async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => {
    console.log("Data Base Connected...");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("New App");
});

app.listen(port, () => {
  console.log(`App listen on port ${port}`);
});
