import express from "express";

const app = express();

app.listen(4000, (req, res) => {
  console.log("server iss tareted in the port 4000");
});
