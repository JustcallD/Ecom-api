const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const CONNECTION = process.env.CONNECT_DB;
mongoose
  .connect(CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DataBase Connection Establish");
  })
  .catch((error) => {
    console.log(error);
  });
