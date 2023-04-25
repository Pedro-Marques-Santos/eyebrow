import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;

  h1 {
    text-align: center;
    font-size: 28px;
    font-weight: 400;
    line-height: 37px;
    letter-spacing: -0.02em;
  }

  p {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 12px;
    color: var(--gray-500);

    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -0.02em;
    margin-bottom: 70px;
  }

  iframe {
    border: none;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
`;
