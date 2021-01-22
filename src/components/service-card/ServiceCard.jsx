import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 300px;
  min-height: 250px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  margin: 0.5em;
  margin-bottom: 1.3em;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
`;

const ServiceThumbnail = styled.div`
  width: 100%;
  height: 11em;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  padding: 15px 10px;
`;

const BottomContainer = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(15, 15, 15, 0.2);
  padding: 0 10px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 0;
  font-weight: 500;
  color: #333;
`;

const SpecialistName = styled.h3`
  margin: 0;
  color: rgba(151, 151, 151, 1);
  font-size: 14px;
  font-weight: 400;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  color: yellow;
`;

const StartingAtText = styled.h6`
  margin: 0;
  color: rgba(161, 161, 161, 1);
  font-weight: 400;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
`;

const PriceText = styled.h4`
  margin-left: 3px;
  color: #2a9d8f;
  font-weight: 500;
`;

const ServiceCard = ({ title, thumbnailUrl, rate, rating, specialist }) => {
  return (
    <Container>
      <TopContainer>
        <ServiceThumbnail>
          <img src={thumbnailUrl} alt={title} />
        </ServiceThumbnail>
      </TopContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <Marginer direction="vertical" margin={10} />
        <SpecialistName>{specialist.fullName}</SpecialistName>
      </ContentContainer>
      <BottomContainer>
        <RatingContainer>
          <FontAwesomeIcon icon={faStar} size="sm" />
          {rating}
        </RatingContainer>
        <PriceContainer>
          <StartingAtText>STARTING AT:</StartingAtText>
          <PriceText>${rate}/hr</PriceText>
        </PriceContainer>
      </BottomContainer>
    </Container>
  );
};

export default ServiceCard;
