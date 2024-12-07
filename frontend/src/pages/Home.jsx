import React from "react";
import NewArrival from "./NewArrival";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <main>
      <Banner />
      <div className="w-screen  flex justify-center items-center">
  <NewArrival />
</div>



    </main>
  );
};

export default Home;
