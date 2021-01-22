import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../Button/Button";
import { Marginer } from "../../marginer";
import ServiceCard from "../../service-card/ServiceCard";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-weight: 600;
  color: #333;
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const WarningText = styled.h3`
  color: rgb(100, 100, 100);
  font-weight: 500;
  margin-top: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 3rem 0;
`;

const RecServices = () => {
  const [offeredServices, setOfferedServices] = useState([]);
  const [loading, setLoading] = useState(false);

  const isEmpty =
    !offeredServices || (offeredServices && offeredServices.length === 0);

  const fetchServices = async () => {
    setLoading(true);
    const res = await axios
      .get("http://localhost:9000/services")
      .catch((error) => {
        console.log(`Error: ${error}`);
      });

    if (res) {
      setOfferedServices(res.data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchServices();
  }, []);
  return (
    <Container>
      <Marginer direction="vertical" margin={20} />
      <Title>Services & More</Title>
      <Marginer direction="vertical" margin={20} />
      <ServicesContainer>
        {isEmpty && !loading && (
          <WarningText>No Services right now.</WarningText>
        )}

        {loading && <WarningText>Loading...</WarningText>}
        {!isEmpty &&
          !loading &&
          offeredServices.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
      </ServicesContainer>
      <ButtonContainer>
        <Link to="/">
          <Button size={20} padding={1}>
            View more
          </Button>
        </Link>
      </ButtonContainer>
    </Container>
  );
};

export default RecServices;
