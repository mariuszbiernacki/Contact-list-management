import styled from "styled-components";

export const Title = styled.h1`
  background-image: linear-gradient(to left, #20a58e, #61b0c2);
  color: white;
  font-size: 20px;
  padding: 10px;
  text-align: center;
`;

export const Input = styled.input`
  margin: 10px;
  padding: 10px 15px;
  border: none;
  outline: none;
  border-bottom: 1px solid transparent;
  :focus {
    border-color: #20a58e;
  }
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
`;
