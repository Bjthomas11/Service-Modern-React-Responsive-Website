import React from "react";
import styled from "styled-components";
import Footer from "../../Footer/Footer";
import Navbar from "../../Nav/Navbar";
import { InnerPageContainer, PageContainer } from "../../pageContainer";

const Access = () => {
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer></InnerPageContainer>
      <Footer />
    </PageContainer>
  );
};

export default Access;
