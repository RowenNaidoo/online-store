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
  CartSummaryList: styled.ul`
    list-style-type: none;
    padding 1rem;
    background: #fff;

    & > li {
      display: flex;
      flex-direction: column;
      text-align: left;
    }
  `,
  Transition: styled.div`
    animation: ${transitionKeyframes} 0.5s;
  `,
  Success: styled.span`
    margin-top: 2rem;
    color: #178841;
  `,
  Error: styled.span`
    margin-top: 2rem;
    color: #bd161c;
  `,
};
