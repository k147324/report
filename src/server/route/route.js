import express from "express";

import {
  showData,
  addTransaction,
  deleteTransaction,
  showDataById,
} from "../controllers/product.js";

const router = express.Router();

router.get("/products", showData);
router.get("/products/:id", showDataById);
router.post("/products", addTransaction);
router.delete("/products/:id", deleteTransaction);

export default router;
