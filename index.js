import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import paymentRoutes from "./routes/paymentRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/api/payments", paymentRoutes);

app.use(express.static("public"));

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
});