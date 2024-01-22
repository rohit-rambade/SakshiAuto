import React from "react";

const Hero = () => {
  return (
    <>
      <section className="body-font bg-banImage bg-cover flex justify-center items-center bg-center">
        <div className="container  py-24 mx-auto rounded-md">
          <div className="flex flex-col lg:text-center w-full ">
            <div className="font-poppins uppercase  rounded-3xl font-semibold text-5xl p-2 bg-gradient-to-r from-red-600">
              <h1 className="sm:text-6xl   font-medium  mb-4 text-white  ">
                CRAFTING QUALITY
              </h1>
              <h1 className="sm:text-6xl font-medium  mb-4 text-white ">
                DELIVERING PERFORMANCE
              </h1>
            </div>
            <p className="p-2 font-poppins font-bold  pt-10 pb-10  mx-auto backdrop-blur-sm  text-gray-200 text-2xl">
              Welcome to Sakshi Auto Parts Pvt. Ltd. - Your trusted partner in
              non-ferrous metals for over 35 years. Specializing in lead
              recycling and battery manufacturing, we provide high-quality
              solutions for Automotive, Solar, and E-Vehicles. With 12 strategic
              manufacturing units across India, we deliver excellence to meet
              diverse market needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
