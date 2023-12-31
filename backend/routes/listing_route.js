import express from "express";
import {
  createListing,
  deleleListing,
  updateListing,
  getListing,
  getAllListings
} from "../controllers/listing_controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create-listing", verifyToken, createListing);
router.delete("/delete-listing/:id", verifyToken, deleleListing);
router.put("/update-listing/:id", verifyToken, updateListing);
router.get("/get-listing/:id", getListing);
router.get("/all", getAllListings);

export default router;
