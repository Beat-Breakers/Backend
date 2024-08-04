import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import botRouter from "./V1/Routes/BotRoute.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

// Enable CORS
app.use(cors());

// Enable JSON data transfer
app.use(express.json());

// routes
app.use("/api/v1/bot", botRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on http://localhost:${PORT}`);
});
