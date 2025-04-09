  import express from "express";
  import path from "path";  // Import path module
  import products from "../data/products.js"; // Import products data

  const app = express();
  const router = express.Router();

  // Serve static images from the "data/img" directory
  app.use("/data/img", express.static(path.join(__dirname, "../data/img")));

  // Route to get all products
  router.get("/", (req, res) => {
    res.json(products);
  });

  // Route to get a specific product by ID
  router.get("/:id", (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  });

  app.use("/api/products", router);

  // Start server
  const port = 5000;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
