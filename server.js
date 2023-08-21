const express = require("express");
const app = express();
app.use(express.json());
const dotenv = require("dotenv");
dotenv.config();

require("./Config/Database");

// Router import
const AuthRouter = require("./Routes/AuthRouter");
const userRouter = require("./Routes/userRouter");
const productRouter = require("./Routes/productRouter");

// Router USe

app.use("/api/auth", AuthRouter);
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server working on:   http://localhost:${PORT}`);
});
