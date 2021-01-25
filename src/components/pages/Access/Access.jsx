import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import AccountBox from "../../AccountBox/AccountBox";
import Footer from "../../Footer/Footer";
import Navbar from "../../Nav/Navbar";
import { InnerPageContainer, PageContainer } from "../../pageContainer";

const InnerContainer = styled(InnerPageContainer)`
  margin-top: 4rem;
`;

const Access = () => {
  const { action } = useParams();

  return (
    <PageContainer>
      <Navbar />
      <InnerContainer>
        <AccountBox initialActive={action} />
      </InnerContainer>
      <Footer />
    </PageContainer>
  );
};

export default Access;
