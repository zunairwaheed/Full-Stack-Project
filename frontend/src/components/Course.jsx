import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center ">
          <h1 className="text-2xl md:text-4xl">
            We are Happy to see you{" "}
            <span className="text-red-600">Here! :)</span>
          </h1>
          <p className="mt-12">
          Zore Auto Parts serves customers across Pakistan, providing top-notch products and services to ensure the smooth operation of trucks nationwide.
          </p>
          <Link to="/">
            <button className="mt-6 px-4 py-2 rounded-md text-white bg-red-600 hover:bg-red-950  duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
