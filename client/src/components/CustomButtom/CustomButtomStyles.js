import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButton = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const googleSignIn = css`
  background-color: #4285f4;
  color: #fff;
  border: none;

  &:hover {
    background-color: #357ae8;
  }
`;

const getButtonStyle = (props) => {
  if (props.isGoogle) {
    return googleSignIn;
  }

  return props.inverted ? invertedButton : buttonStyles;
};

export const CustomButtomContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${getButtonStyle}
`;
