import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

const ListingCard = ({ listing }) => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[355px] ">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={listing.imageURLs[0]}
          alt="cover photo"
          className="h-[320px] sm:h-[200px] w-full hover:scale-105 transition-scale duration-300"
        />
        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="truncate font-semibold text-slate-700">{listing.name}</p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-700"/>
            <p className="text-sm text-gray-700 truncate w-full">{listing.address}</p>
          </div>
          <div className="">
            <p className="text-sm text-gray-600 line-clamp-2">{listing.description}</p>
            <p className="text-slate-500 mt-2 font-semibold flex items-center">
              ₹{" "}
              {listing.offer ? listing.discountedPrice.toLocaleString("en-IN") : listing.regularPrice.toLocaleString("en-IN")}
              {listing.type === "rent" && " / month"}
            </p>
            <div className="text-slate-700 flex gap-3 mt-2">
              <div className="font-bold text-xs">
                {listing.bedrooms > 1 ? `${listing.bedrooms} beds` : `${listing.bedrooms} bed`}
              </div>
              <div className="font-bold text-xs">
                {listing.bathrooms > 1 ? `${listing.bathrooms} baths` : `${listing.bathrooms} bath`}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingCard;
