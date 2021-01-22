import styled from "styled-components";

export default {
  Container: styled.section<{ highlight: boolean }>`
    display: flex;
    align-items: flex-start;
    margin: 0.5rem 0;
    width: 100%;
    font-weight: ${(props: { highlight: any }) =>
      props.highlight ? "bold" : "normal"};
  `,
  Description: styled.div`
    flex: 1 0 80%;
  `,
  Price: styled.div`
    flex: 0 1 auto;
  `,
};
