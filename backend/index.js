import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import db from "./db/db.js";
import product from "./routes/product.js";
dotenv.config();

const app = express();
app.use(express.json());
//REglas de conexión entre back y front
app.use(cors());
app.use("/api/products/", product);

app.listen(process.env.PORT, () =>
  console.log("Running on port: " + process.env.PORT)
);
db.bdConnection();
