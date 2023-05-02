import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Img = styled.div`
  width: 50%;
  min-height: 500px;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  h1 {
    font-size: 23px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: -0.02em;
    text-align: center;
  }

  h2 {
    margin-top: 15px;
    font-size: 18px;
    font-weight: 400;
    line-height: 37px;
    letter-spacing: -0.02em;
    text-align: center;
    @media (max-width: 700px) {
      text-align: justify;
    }
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;
