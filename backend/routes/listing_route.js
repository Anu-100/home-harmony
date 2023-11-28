import express from "express";
import {
  createListing,
  deleleListing,
  updateListing
} from "../controllers/listing_controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create-listing", verifyToken, createListing);
router.delete("/delete-listing/:id", verifyToken, deleleListing);
router.put("/update-listing/:id", verifyToken, updateListing);

export default router;
