import styled from "styled-components";

export const ContainerContent = styled.div`
  width: 100%;
  max-width: 320px;
  background: var(--yellow-100);

  h1 {
    font-size: 22px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -0.02em;
  }

  h2 {
    margin-top: 8px;
    margin-bottom: 15px;
    font-size: 15px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.02em;
  }

  p {
    margin-top: 40px;
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: -0.02em;
    text-align: justified;
  }

  @media (max-width: 900px) {
    margin-bottom: 50px;
    :last-child {
      margin-bottom: 0px;
    }
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 14px;
  margin-bottom: 14px;
  max-width: 280px;
`;

export const Img = styled.div`
  min-height: 256.92px;
`;
