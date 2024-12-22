import React from "react";
import NewArrival from "./NewArrival";
import Banner from "../components/Banner";
import Container from "../components/Container";

const Home = () => {
  return (
    <main>
      <Banner />
      <Container className="w-screen  flex  justify-center items-center px-10">
      
  <NewArrival />
</Container>



    </main>
  );
};

export default Home;
