import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  border: 1px solid #2a9d8f;
  outline: none;
  color: #fff;

  padding: ${({ padding }) => (padding ? padding + "rem" : "1rem 1.5rem")};
  font-size: ${({ size }) => (size ? size + "px" : " 1rem")};
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  background-color: #2a9d8f;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #2a9d8f;
    background-color: #fff;
    border: 1px solid #2a9d8f;
  }

  &:focus {
    outline: none;
  }
`;

const Button = ({ children, size, padding }) => {
  return (
    <ButtonContainer size={size} padding={padding}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
