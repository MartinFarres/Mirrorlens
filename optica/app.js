const express = require("express");
const path = require("path");
const app = express();
const rutasMain = require("./routers/main");

const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));
app.set("view engine", "ejs");

app.listen(process.env.PORT || 3000, () => console.log("Esto fue exitoso"));

app.use("/", rutasMain);

//localhost:3000/
