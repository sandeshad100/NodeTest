import express from "express";
import path from "path";
const app = express();

// to access static file
app.use(express.static(path.join(path.resolve(), "./public")));

// console.log(path.join(path.resolve(), "public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { name: "Sandesh" });
  // res.sendFile("index");
});

app.listen(5000, () => {
  console.log("Server is working");
});
