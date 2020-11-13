const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "public")));


app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


// setup server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
