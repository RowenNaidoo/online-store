import styled from "styled-components";

export default {
  ProductList: styled.ul`
    list-style-type: none;
    flex: 1 1 auto;
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0 10px 10px;
    transition: all 0.2s ease;

    & > li {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex: 1 1 auto;
      margin-right: 10px;
      margin-bottom: 10px;

      @media (min-width: 768px) {
        flex: 0 1 32%;
      }
    }
  `,
};
