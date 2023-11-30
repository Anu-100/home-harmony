import express from "express";
import {
  deleteUserInfo,
  test,
  updateUserInfo,
  getUserListings,
  getUser
} from "../controllers/user_controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:id", verifyToken, updateUserInfo);
router.delete("/delete/:id", verifyToken, deleteUserInfo);

router.get("/user-listings/:id", verifyToken, getUserListings);
router.get("/:id", verifyToken, getUser);

export default router;
