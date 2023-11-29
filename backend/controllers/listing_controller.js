import Listing from "../models/listing_model.js";
import error_handler from "../utils/error.js";

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const deleleListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(error_handler(404, "Listing not found!"));
  }
  if (req.user.id !== listing.userRef) {
    return next(error_handler(401, "You are unauthorized!!"));
  }
  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json("Listing has been deleted successfully.");
  } catch (error) {
    next(error);
  }
};

export const updateListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if(!listing) return next(error_handler(404, "Listing not found"));
    if(req.user.id !== listing.userRef) return next(error_handler(401, "Unauthorized access!"));

    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true}
    );
    return res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};

export const getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if(!listing){
      return next(error_handler(404, "Listing not found!"));
    }
    return res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
}
