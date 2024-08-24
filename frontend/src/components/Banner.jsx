import React from "react";
import banner1 from "../../public/Banner1.png";
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Welcome here, to {" "}
              <span className="text-red-600">ZORE Auto Parts!!!</span>
            </h1>
            <p className="text-xl text-justify">
            Zore Auto Parts is a leading manufacturer of high-quality truck auto parts, offering a wide range of durable and reliable components for heavy-duty vehicles. With a commitment to excellence, Zore Auto Parts serves customers across Pakistan, providing top-notch products and services to ensure the smooth operation of trucks nationwide. Their extensive product line, coupled with expert service, makes them a trusted partner for truck owners and operators throughout the country.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input action="https://getform.io/f/azylzylb" method="POST" type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          
          <button type="submit" className="btn mt-6 bg-red-600 text-white">Confirm</button>

        </div>
        <div className="order-1 w-full pl-40 pt-20 mt-20 md:w-1/2 ">
            <img src="https://th.bing.com/th/id/OIP.QcYB-dhWm8EWCe8yg9rc3wHaE7?rs=1&pid=ImgDetMain" className="w-92 h-92" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
