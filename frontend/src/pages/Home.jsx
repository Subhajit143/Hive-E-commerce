import React from "react";
import NewArrival from "./NewArrival";
import Banner from "../components/Banner";
import Container from "../components/Container";
import CategoryHome from "./CategoryHome";

const Home = () => {
  return (
    <main>
      {/* Banner Section */}
      <Banner />

      {/* New Arrival Section */}
      <Container className="w-screen flex flex-col justify-center items-center px-10">
        <NewArrival />
      </Container>

      {/* Category Home Section */}
      <div className="mt-10 bg-gray-100 py-10"> {/* Add background color and padding */}
        <CategoryHome />
      </div>
    </main>
  );
};

export default Home;