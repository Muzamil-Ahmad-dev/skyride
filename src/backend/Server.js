import express from "express";
import cors from "cors";
import path from "path";
import productRoutes from "./routes/product-routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static images from the 'data/img' folder
app.use("/data/Img", express.static(path.join(path.resolve(), "data", "img")));

// Use product routes
app.use("/api/products", productRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Mock API running on http://localhost:${PORT}`);
});
