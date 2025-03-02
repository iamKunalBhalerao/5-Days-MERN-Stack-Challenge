const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

/*
// express.urlencoded (Parsing URL-encoded Form Data)
app.use(express.urlencoded({ extended: true }));
app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Form Body Recived!");
});
app.get("/form", (req, res) => {
  res.send(`
      <form method="POST" action="/submit">
        <input type="text" name="username" placeholder="Username">
        <input type="email" name="email" placeholder="Email">
        <button type="submit">Submit</button>
      </form>
    `);
});
*/

/*
// express.json (Parsing JSON Data)
app.post("/api/post", (req, res) => {
  console.log(req.body);
  res.status(200).json({
    message: "JSON Data Recived!",
    data: req.body,
  });
});
*/

// CORS in Depth

app.get("/data", (req, res) => {
  res.status(200).json({
    message: "Message Data From the API!",
  });
});

app.use(cors());

app.listen(3000, () => {
  console.log("server is on PORT:3000");
});
