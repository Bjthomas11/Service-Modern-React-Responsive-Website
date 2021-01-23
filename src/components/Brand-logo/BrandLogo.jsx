import React from "react";
import styled from "styled-components";
import Logo from "../../assets/images/logos/logo.png";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
  width: ${({ logoSize }) => (logoSize ? logoSize + "px" : "4em")};
  height: ${({ logoSize }) => (logoSize ? logoSize + "px" : "4em")};

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoTitle = styled.h2`
  margin: 0;
  font-size: ${({ textSize }) => (textSize ? textSize + "px" : "35px")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-weight: 600;
  margin-left: 0.5rem;
`;

const BrandLogo = ({ logoSize, textSize, color, hideLogo }) => {
  return (
    <Container>
      {!hideLogo && (
        <LogoImage logoSize={logoSize}>
          <img src={Logo} alt="logo" />
        </LogoImage>
      )}

      <LogoTitle textSize={textSize} color={color}>
        Serviced
      </LogoTitle>
    </Container>
  );
};

export default BrandLogo;
