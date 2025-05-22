import React from "react";
import BannerSlider from "../components/BannerSlider";
import HowItWorks from "../components/HowItWorks";
import PopularServices from "../components/PopularServices";
import Newsletter from "../components/Newsletter";
import FeaturedTaskCard from "../components/FeaturedTaskCard";
import { useLoaderData } from "react-router";
import SignUpOptions from "../components/SignUpOptions";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <BannerSlider />
      <div>
        <HowItWorks />
      </div>
      <div className="w-11/12 mx-auto">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mt-5 mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">
              Tasks
            </span>
          </h2>
          <p className="text-center text-green-600 max-w-2xl mx-auto mb-12">
            Find the right freelancer for your task in minutes.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {data.map((task, index) => (
            <FeaturedTaskCard key={index} task={task} />
          ))}
        </div>
      </div>
      <PopularServices />
      <SignUpOptions/>
      <Newsletter />
    </div>
  );
};

export default Home;
