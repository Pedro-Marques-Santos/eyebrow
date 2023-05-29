import styled from "styled-components";

export const ContainerContent = styled.div`
  width: 100%;
  max-width: 320px;
  min-height: 500px;

  background: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  @media (max-width: 900px) {
    min-height: 500px;
    margin-bottom: 50px;
    :last-child {
      margin-bottom: 0px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 14px;
  max-width: 280px;
  height: 100%;

  h1 {
    margin-top: 8px;
    font-size: 22px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -0.02em;
    min-height: 60px;
  }

  h2 {
    margin-bottom: 9px;
    font-size: 15px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.02em;
    height: 18px;
  }

  p {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: -0.02em;
    text-align: justify;
  }

  h3 {
    font-weight: 500;
    text-align: center;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: -0.02em;
  }
`;

export const Price = styled.div`
  height: 100%;
  display: flex;
  align-items: end;
  justify-content: center;
  margin-bottom: 7px;
`;

export const Img = styled.div`
  min-height: 256.92px;
`;
