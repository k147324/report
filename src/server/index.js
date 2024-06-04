import express from "express";

import cors from "cors";

import router from "./route/route.js";
const app = express();

app.use(express.json());

app.use(cors());

app.use(router);

app.listen(3000, () => {
  console.log("Server running successfully");
});
