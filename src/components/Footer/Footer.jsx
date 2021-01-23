import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BrandLogo from "../Brand-logo/BrandLogo";
import { SiFacebook, SiLinkedin, SiTwitter } from "react-icons/si";

const Container = styled.footer`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 3rem;
  border-top: 1px solid #333;
`;

const InnerFooterTop = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-right: 4rem;
  }
`;

const BottomContainer = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #333;
`;

const BottomLeftContainer = styled.div`
  display: flex;
  align-items: baseline;
  width: 100%;
`;

const BottomRightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  svg {
    margin-left: 1rem;
    font-size: 2rem;
    color: #8a8a8a;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
  }
  svg.facebook {
    &:hover {
      color: #0d8cf1;
    }
  }

  svg.linkedIn {
    &:hover {
      color: #0966c2;
    }
  }

  svg.twitter {
    &:hover {
      color: #1991da;
    }
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 1rem;
  color: #333;
  font-weight: 600;
  font-size: 2rem;
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: #6f6f6f;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #2a9d8f;
  }
`;

const CopyrightText = styled.h4`
  color: #828282;
  font-size: 14px;
  margin-left: 1rem;
  font-weight: 400;
`;

const Footer = () => {
  return (
    <Container>
      <InnerFooterTop>
        <ContentContainer>
          <Title>Categories</Title>
          <FooterLink>Car Repair</FooterLink>
          <FooterLink>Carpentry</FooterLink>
          <FooterLink>Cleaning</FooterLink>
          <FooterLink>Demolition</FooterLink>
          <FooterLink>Home Improvment</FooterLink>
          <FooterLink>Landscaping</FooterLink>
          <FooterLink>Moving</FooterLink>
          <FooterLink>Other</FooterLink>
        </ContentContainer>
        <ContentContainer>
          <Title>Access</Title>
          <FooterLink to="/login">Login</FooterLink>
          <FooterLink to="/register">Join us</FooterLink>
          <FooterLink to="/login">Login as Specialist</FooterLink>
          <FooterLink to="/register">Become a Specialist</FooterLink>
        </ContentContainer>
      </InnerFooterTop>
      <BottomContainer>
        <BottomLeftContainer>
          <BrandLogo logoSize={30} textSize={23} hideLogo color="#2a9d8f" />
          <CopyrightText>
            All Rights Reserved&copy; {new Date().getFullYear()}
          </CopyrightText>
        </BottomLeftContainer>
        <BottomRightContainer>
          <SiFacebook className="facebook" />
          <SiLinkedin className="linkedIn" />
          <SiTwitter className="twitter" />
        </BottomRightContainer>
      </BottomContainer>
    </Container>
  );
};

export default Footer;
