import "dotenv/config";
import express from "express";
const app = express();

app.get("/",(req,res) => {
    res.json({message:"bienvenidos a la API REST"}
    )
})

import productsRouter from "./src/routes/products.router.js"
app.use("/api", productsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));