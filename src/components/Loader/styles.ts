import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export default {
  Loader: styled.div`
    margin: 60px auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(27, 69, 229, 0.2);
    border-right: 1.1em solid rgba(27, 69, 229, 0.2);
    border-bottom: 1.1em solid rgba(27, 69, 229, 0.2);
    border-left: 1.1em solid #178841;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: ${rotate} 1.1s infinite linear;
    animation: ${rotate} 1.1s infinite linear;
    transition: all 0.2s ease;
    border-radius: 50%;
    width: 10em;
    height: 10em;

    &:after {
      border-radius: 50%;
      width: 10em;
      height: 10em;
    }
  `,
};
