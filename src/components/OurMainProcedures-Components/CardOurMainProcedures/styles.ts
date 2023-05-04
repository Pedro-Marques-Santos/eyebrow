import styled from "styled-components";

export const ContainerContent = styled.div`
  width: 100%;
  max-width: 320px;
  background: var(--yellow-100);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  h1 {
    font-size: 22px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -0.02em;
    min-height: 60px;
  }

  h2 {
    margin-bottom: 15px;
    font-size: 15px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.02em;
    height: 18px;
  }

  p {
    margin-top: 22px;
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: -0.02em;
    text-align: justify;
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
