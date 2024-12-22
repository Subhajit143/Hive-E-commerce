import React from "react";
import NewArrival from "./NewArrival";
import Banner from "../components/Banner";
import Container from "../components/Container";
import CategoryHome from "./CategoryHome";

const Home = () => {
  return (
    <main>
      <Banner />
      <Container className="w-screen  flex flex-col  justify-center items-center px-10">
      
  <NewArrival />
  <CategoryHome />
</Container>



    </main>
  );
};

export default Home;
