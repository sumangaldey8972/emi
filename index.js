const express = require("express");
const cors = require("cors");
const Connect = require("./db/db");
const userRouter = require("./routes/user.routes");
const emiRouter = require("./routes/emi.routes");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/emi", emiRouter);

app.get("/", (req, res) => {
  res.json("Welcome to Masai EMI Calculator");
});

app.listen(PORT, async () => {
  await Connect();
  console.log(`Server started on port ${PORT}`);
});
