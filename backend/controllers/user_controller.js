import bcryptjs from "bcryptjs";
import error_handler from "../utils/error.js";
import User from "../models/user_model.js";
import Listing from "../models/listing_model.js";

export const test = (req, res) => {
  res.json({ message: "Happy Coding..." });
};

export const updateUserInfo = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(error_handler(401, "You can only update your own account!"));
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );
    const { password, ...other_info } = updatedUser._doc;
    res.status(200).json(other_info);
  } catch (error) {
    next(error);
  }
};

export const deleteUserInfo = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(error_handler(401, "You can only delete your own account!"));
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token");
    res.status(200).json("User has been deleted successfully!");
  } catch (error) {
    next(error);
  }
};

export const getUserListings = async (req, res, next) => {
  if (req.user.id === req.params.id) {
    try {
      const listings = await Listing.find({ userRef: req.params.id });
      res.status(200).json(listings);
    } catch (error) {
      next(error);
    }
  } else {
    return next(error_handler(401, "You are unauthorized!"));
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if(!user){
      return next(error_handler(404, "User not found!"));
    }
    const { password: pass, ...other_info } = user._doc;
    res.status(200).json(other_info);
  } catch (error) {
    next(error);
  }
}
