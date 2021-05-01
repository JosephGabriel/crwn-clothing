import React from "react";

import { HomeContainer } from "./HomeStyles";

import DirectoryMenu from "../../components/DirectoryMenu/DirectoryMenu";

const Home = () => {
  return (
    <HomeContainer>
      <DirectoryMenu />
    </HomeContainer>
  );
};

export default Home;
