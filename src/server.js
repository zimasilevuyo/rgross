const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");

app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "156.155.252.14",
  user: "nxytphso_rgross",
  password: "sa2vk=40ed45",
  database: "nxytphso_rgross"
});

app.post("/api/store_data", (req, res) => {
  const { name, age } = req.body;
  connection.query("INSERT INTO users (name, age) VALUES (?,?)", [name, age], (err, results) => {
    if (err) {
      return res.status(500).send({ error: "Error storing data in database" });
    }
    res.send({ message: "Data stored successfully" });
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
