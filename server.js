const express = require("express");
const app = express();
app.use(express.json());
const dotenv = require("dotenv");
dotenv.config();

require("./Config/Database");

// Router import
const AuthRouter = require("./Routes/AuthRouter");

// Router USe

app.use("/signup", AuthRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server working on:   http://localhost:${PORT}`);
});
