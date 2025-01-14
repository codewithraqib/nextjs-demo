import Head from "next/head";
import styles from "../styles/Home.module.css";
import HotelItem from "../components/hotel-item";
import { useState } from "react";

export default function Home() {
  const [hotels, setHotels] = useState([
    {
      id: 0,
      name: "Udaipur, India",
      distance: "551 kilometers away",
      date: "19 -25 jan",
      rate: "₹15,525",
      rating: 5,
      guest_fav: 0,
      can_be_fav: 1,
      images: [
        { url: "/assets/images/hotel1.avif" },
        { url: "/assets/images/heart.png" },
        { url: "/assets/images/hotel1.avif" },
        { url: "/assets/images/hotel1.avif" },
        { url: "/assets/images/hotel1.avif" },
      ],
    },
    {
      id: 1,
      name: "kashmir, India",
      distance: "551 kilometers away",
      date: "19 -25 jan",
      rate: "₹15,525",
      guest_fav: 0,
      can_be_fav: 1,
    },
    {
      id: 2,
      name: "Goa, India",
      distance: "1,200 kilometers away",
      date: "10 - 15 Feb",
      rate: "₹20,000",
      rating: 5,
      guest_fav: 1,
      can_be_fav: 0,
    },
    {
      id: 3,
      name: "Manali, India",
      distance: "800 kilometers away",
      date: "5 - 10 Mar",
      rate: "₹12,000",
      guest_fav: 1,
      can_be_fav: 1,
    },
    {
      id: 4,
      name: "Jaipur, India",
      distance: "300 kilometers away",
      date: "1 - 5 Apr",
      rate: "₹10,000",
      rating: 4,
      guest_fav: 0,
      can_be_fav: 1,
    },
    {
      id: 5,
      name: "Shimla, India",
      distance: "400 kilometers away",
      date: "15 - 20 May",
      rate: "₹18,000",
      guest_fav: 0,
      can_be_fav: 1,
    },
    {
      id: 6,
      name: "Agra, India",
      distance: "200 kilometers away",
      date: "10 - 15 Jun",
      rate: "₹8,000",
      rating: 4,
      guest_fav: 1,
      can_be_fav: 1,
    },
    {
      id: 7,
      name: "Mumbai, India",
      distance: "1,400 kilometers away",
      date: "20 - 25 Jul",
      rate: "₹25,000",
      rating: 5,
      guest_fav: 0,
      can_be_fav: 1,
    },
    {
      id: 8,
      name: "Delhi, India",
      distance: "300 kilometers away",
      date: "1 - 5 Aug",
      rate: "₹15,000",
      rating: 4,
      guest_fav: 1,
      can_be_fav: 0,
    },
    {
      id: 9,
      name: "Chennai, India",
      distance: "2,000 kilometers away",
      date: "10 - 15 Sep",
      rate: "₹22,000",
      rating: 5,
      guest_fav: 0,
      can_be_fav: 1,
    },
    {
      id: 10,
      name: "Bangalore, India",
      distance: "1,800 kilometers away",
      date: "20 - 25 Oct",
      rate: "₹20,000",
      rating: 4,
      guest_fav: 1,
      can_be_fav: 1,
    },
    {
      id: 11,
      name: "Hyderabad, India",
      distance: "1,500 kilometers away",
      date: "1 - 5 Nov",
      rate: "₹18,000",
      rating: 5,
      guest_fav: 0,
      can_be_fav: 1,
    },
    {
      id: 12,
      name: "Pune, India",
      distance: "1,300 kilometers away",
      date: "10 - 15 Dec",
      rate: "₹16,000",
      rating: 4,
      guest_fav: 1,
      can_be_fav: 0,
    },
    {
      id: 13,
      name: "Kolkata, India",
      distance: "1,600 kilometers away",
      date: "20 - 25 Jan",
      rate: "₹19,000",
      rating: 5,
      guest_fav: 0,
      can_be_fav: 1,
    },
    {
      id: 14,
      name: "Ahmedabad, India",
      distance: "1,000 kilometers away",
      date: "1 - 5 Feb",
      rate: "₹14,000",
      rating: 4,
      guest_fav: 1,
      can_be_fav: 1,
    },
    {
      id: 15,
      name: "Surat, India",
      distance: "1,100 kilometers away",
      date: "10 - 15 Mar",
      rate: "₹12,000",
      rating: 5,
      guest_fav: 0,
      can_be_fav: 1,
    },
  ]);

  const addToFav = (id) => {
    console.log("Added to fav", id);

    let newHotels = hotels.map((hotel) => {
      if (hotel.id === id) {
        hotel.fav = hotel?.fav ? false : true;
      }
      return hotel;
    });

    setHotels(newHotels);
  };

  console.log("hotels", hotels);
  return (
    <div className={styles.container}>
      <Head>
        <title>KashmirBNB</title>
        <link rel="stylesheet" href="../styles/global.css" />
      </Head>
      <h1>Options</h1>

      <div className={styles.hotels_wrapper}>
        {hotels.map((hotel, index) => {
          return <HotelItem key={index} hotel={hotel} addToFav={addToFav} />;
        })}
      </div>
    </div>
  );
}
