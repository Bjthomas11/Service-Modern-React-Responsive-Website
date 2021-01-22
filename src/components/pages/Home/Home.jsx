import React from "react";
import styled from "styled-components";
import Navbar from "../../Nav/Navbar";
import { InnerPageContainer, PageContainer } from "../../pageContainer/index";
import RecServices from "./RecServices";
import TopSection from "./TopSection";
import { deviceSize } from "../../responsive/responsive";
import Button from "../../Button/Button";
import { Marginer } from "../../marginer";

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
        <Navbar />
      </TopSection>
      <InnerPageContainer>
        <ContentContainer>
          <RecServices />
        </ContentContainer>
      </InnerPageContainer>
    </PageContainer>
  );
};

export default Home;
