import React from "react";
import styled from "styled-components";
import Navbar from "../../Nav/Navbar";
import { InnerPageContainer, PageContainer } from "../../pageContainer/index";
import RecServices from "./RecServices";
import TopSection from "./TopSection";
import { deviceSize } from "../../responsive/responsive";
import Button from "../../Button/Button";
import { Marginer } from "../../marginer";
import SpecialistAd from "../../SpecialistAd/SpecialistAd";
import Footer from "../../Footer/Footer";

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  return (
    <PageContainer>
      <TopSection>
        <Navbar transparent />
      </TopSection>
      <InnerPageContainer>
        <ContentContainer>
          <RecServices />
        </ContentContainer>
        <SpecialistAd />
      </InnerPageContainer>
      <Marginer direction="vertical" margin={40} />
      <Footer />
    </PageContainer>
  );
};

export default Home;
