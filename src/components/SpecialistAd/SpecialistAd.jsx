import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BrandLogo from "../Brand-logo/BrandLogo";
import Button from "../Button/Button";
import { Marginer } from "../marginer";
import Image_2 from "../../assets/images/farming.png";

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  background-color: #264653;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Blurb = styled.h2`
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 400;
  font-size: 20px;
`;

const RightImage = styled.div`
  width: 35em;
  height: 29em;

  img {
    width: 100%;
    height: 100%;
  }
`;

const SpecialistAd = () => {
  return (
    <Container>
      <ContentContainer>
        <SloganContainer>
          <BrandLogo logoSize={60} textSize={50} />
          <Marginer direction="vertical" margin={8} />
          <Blurb>You're a Specialist, and you</Blurb>
          <Blurb>have an outstanding</Blurb>
          <Blurb>Service to offer?</Blurb>
          <Marginer direction="vertical" margin={15} />
          <Link to="/specialist">
            <Button size={20} padding={1}>
              Join as Specialist
            </Button>
          </Link>
        </SloganContainer>
        <RightImage>
          <img src={Image_2} alt="image_2" />
        </RightImage>
      </ContentContainer>
    </Container>
  );
};

export default SpecialistAd;
