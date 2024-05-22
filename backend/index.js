import express from "express";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import router from "./routes/projectRoutes.js";

const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  // return response.status(200).send({ "Content-Type": "text/plain" });
});

app.use("/project", router);
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
