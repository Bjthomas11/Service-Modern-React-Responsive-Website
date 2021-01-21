import React from "react";
import Navbar from "../../Nav/Navbar";
import { PageContainer } from "../../pageContainer/index";
import TopSection from "./TopSection";

const Home = (props) => {
  return (
    <PageContainer>
      <TopSection>
        <Navbar />
      </TopSection>
    </PageContainer>
  );
};

export default Home;
