const express = require("express");

const app = express();

app.use(express.json());

const USERS = [];

// get data of all users usign get route
app.get("/", (req, res) => {
  res.status(200).json({
    AllUsers: USERS,
  });
});

// create user using post route
app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    USERS.push({
      username,
      password,
    });
    res.status(200).json({
      mesaage: "User is Created",
    });
    console.log(USERS);
  } catch (e) {
    console.log(e);
  }
});

app.delete("/delete", (req, res) => {
  try {
    USERS.pop();
    res.status(200).json({
      message: "Last User Deleted Successfully",
    });
  } catch (e) {
    res.status(403).json({
      message: "Something went worng",
    });
  }
});

app.listen(3000, () => {
  console.log("server is on PORT:3000");
});
