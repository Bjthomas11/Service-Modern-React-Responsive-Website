import React from "react";
import styled from "styled-components";
import LandingBK from "../../../assets/images/landing-page.jpg";
import Image_1 from "../../../assets/images/Work only with the best.png";
import BrandLogo from "../../Brand-logo/BrandLogo";
import Button from "../../Button/Button";
import { Marginer } from "../../marginer/index";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 800px;
  background-image: url(${LandingBK});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  /* text-align: center; */
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(38, 70, 83, 0.8);
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ImgContainer = styled.div`
  width: 41em;
  height: 33em;

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Blurb = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 400;
  font-size: 30px;
`;

const TopSection = ({ children }) => {
  return (
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <TopSectionInnerContainer>
          <LogoContainer>
            <BrandLogo logoSize={60} textSize={50} />
            <Marginer direction="vertical" margin={8} />
            <Blurb>
              Find the right specialist. <br /> For the right job.
            </Blurb>
            <Marginer direction="vertical" margin={15} />
            <Button>Join Now</Button>
          </LogoContainer>
          <ImgContainer>
            <img src={Image_1} alt="image_1" />
          </ImgContainer>
        </TopSectionInnerContainer>
      </BackgroundFilter>
    </TopSectionContainer>
  );
};

export default TopSection;
