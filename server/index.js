const express = require("express")
const dotEnv = require("dotenv");
const app = express();
const tastRoute = require("./routes/Tasks");
const cors = require('cors');
dotEnv.config();
// importing
require(`./db/connect`);
app.use(cors());
app.use(express.json())

app.use("/API", tastRoute);

const port = 5000;
app.listen(port, console.log(`server is listening port ${port}....`));
