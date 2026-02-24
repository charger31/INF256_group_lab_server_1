import express from "express";
import config from "./core/config/config.js";
import mathRouter from "./routes/math.js"
import cors from "cors";

const app = express();


app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use("/math", mathRouter);

app.listen(config.server.port, () => {
  console.log("The server has started");
});
