import React from "react";
import styled from "styled-components";
import Navbar from "../../Nav/Navbar";
import { InnerPageContainer, PageContainer } from "../../pageContainer/index";
import ServiceCard from "../../service-card/ServiceCard";
import TopSection from "./TopSection";
import { deviceSize } from "../../responsive/responsive";

const Title = styled.h1`
  font-weight: 600;
  color: #333;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
`;

const service = {
  id: 1,
  title: "title 1",
  thumbnailUrl: "http://localhost:9000/garden.jpg",
  rate: 70,
  rating: 4,
  specialist: {
    id: 1,
    fullName: "John Doe",
  },
};

const Home = () => {
  return (
    <PageContainer>
      <TopSection>
        <Navbar />
      </TopSection>
      <InnerPageContainer>
        <ContentContainer>
          <Title>Services & More</Title>
        </ContentContainer>
        <ServiceCard {...service} />
      </InnerPageContainer>
    </PageContainer>
  );
};

export default Home;
