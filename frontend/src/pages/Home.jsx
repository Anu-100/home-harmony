import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingCard from "../components/ListingCard";

const Home = () => {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(saleListings);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/all?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/all?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/all?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-10 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-800 font-bold text-3xl lg:text-6xl">
          Find your next <span className="text-gray-500">perfect</span>
          <br />
          place with ease.
        </h1>
        <div className="text-xs sm:text-sm text-slate-600 font-bold">
          HomeHarmony creates digital platforms that bring your properties to
          life, providing an immersive experience for your clients.
          <br /> We transform physical spaces into virtual experiences, making
          property exploration accessible from anywhere.
        </div>
        <Link
          to={"/search"}
          className="text-blue-800 text-xs sm:text-sm hover:underline font-bold"
        >
          Let's get started...
        </Link>
      </div>

      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageURLs[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="mx-auto p-3 flex flex-col my-10 ml-[125px]">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-bold">Recent Offers</h2>
              <Link className="font-bold text-blue-800 hover:underline" to={"/search?offer=true"}>Show more offers</Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-3">
              {offerListings.map((listing) => (
                <ListingCard listing={listing} key={listing._id}/>
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl mt-5 font-bold">Recent places for rent</h2>
              <Link className="font-bold text-blue-800 hover:underline" to={"/search?type=rent"}>Show more places for rent</Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-3">
              {rentListings.map((listing) => (
                <ListingCard listing={listing} key={listing._id}/>
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl mt-5 font-bold">Recent places for sale</h2>
              <Link className="font-bold text-blue-800 hover:underline" to={"/search?type=sale"}>Show more places for sale</Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-3">
              {saleListings.map((listing) => (
                <ListingCard listing={listing} key={listing._id}/>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
