import styled, { keyframes } from "styled-components";

const transitionKeyframes = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

export default {
  Transition: styled.div`
    animation: ${transitionKeyframes} 0.5s;
  `,
  Error: styled.span`
    color: #bd161c;
    margin-top: 10rem;
  `,
};
