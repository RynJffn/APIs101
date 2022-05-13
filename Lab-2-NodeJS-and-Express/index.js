const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send('Hello, world!');
});

app.get("/:you", (req, res) => {
    res.send(`Hello, ${req.params.you}!`);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});