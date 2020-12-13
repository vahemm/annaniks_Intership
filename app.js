const express = require("express");
const app = express();
const config = require("config");
const PORT = config.get("port");
const rout_classe = require("./routes/rout_classe");
const rout_student = require("./routes/rout_student");
const bodyParser = require("body-parser");

app.use(express.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/classes", rout_classe);
app.use("/students", rout_student);

app.listen(PORT, () => {
  console.log(`Test app listening at http://localhost:${PORT}`);
});
