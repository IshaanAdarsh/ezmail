import mongoDb from "./dbConnect.js";
import express from "express";
import signInRoute from "./routes/userAuth.js";
import cors from "cors";
mongoDb();

const port = 5000;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/auth", signInRoute);
// app.use("/auth/login", signInRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
