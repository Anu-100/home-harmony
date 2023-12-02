import React from "react";

const Search = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
        <form className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">Search Term:</label>
            <input
              type="text"
              placeholder="Search here..."
              id="searchTerm"
              className="border w-full rounded-lg p-3 focus:outline-none"
            />
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-semibold">Type:</label>
            <div className="flex gap-2">
                <input type="checkbox" className="w-5" id="all"/>
                <span>All</span>
            </div>
            <div className="flex gap-2">
                <input type="checkbox" className="w-5" id="rent"/>
                <span>Rent</span>
            </div>
            <div className="flex gap-2">
                <input type="checkbox" className="w-5" id="sale"/>
                <span>Sale</span>
            </div>
            <div className="flex gap-2">
                <input type="checkbox" className="w-5" id="offer"/>
                <span>Offer</span>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-semibold">Amenities:</label>
            <div className="flex gap-2">
                <input type="checkbox" className="w-5" id="parking"/>
                <span>Parking Spot</span>
            </div>
            <div className="flex gap-2">
                <input type="checkbox" className="w-5" id="furnished"/>
                <span>Funished</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <label className="font-semibold">Sort :</label>
            <select id="sort_order" className="rounded-lg border p-2 focus:outline-none">
              <option>Price: High to Low</option>
              <option>Price: Low to High</option>
              <option>Latest</option>
              <option>Oldest</option>
            </select>
          </div>
          <button className="bg-slate-700 text-white rounded-lg w-full p-3">Search</button>
        </form>
      </div>
      <div className="">
        <h1 className="border-b p-3 font-semibold text-3xl">Listing results:</h1>
      </div>
    </div>
  );
};

export default Search;
