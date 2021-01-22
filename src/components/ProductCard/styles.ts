import styled from "styled-components";

export default {
  Container: styled.div`
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    background: #fff;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0;
    min-height: 275px;
  `,
  Name: styled.section`
    flex: 0 0 auto;
    font-weight: bold;
    margin: 1rem 0 0.5rem 0;
    min-height: 40px;
  `,
  Price: styled.section`
    font-weight: bold;
    flex: 0 0 auto;
    margin-bottom: 1rem;
  `,
  Description: styled.section`
    flex: 1 0 auto;
    margin: 1rem;
  `,
  ButtonContainer: styled.section`
    flex: 0 0 auto;
    margin-bottom: 1rem;
  `,
};
