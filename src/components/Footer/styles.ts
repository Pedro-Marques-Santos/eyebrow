import styled from "styled-components";

export const Container = styled.div`
  max-width: 1080px;
  min-width: 300px;
  margin: 0 auto;
  padding-left: 8px;
  padding-right: 8px;

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: -0.02em;
    text-align: center;
    color: black;
    @media (max-width: 700px) {
      text-align: justify;
    }
  }
`;

export const ContentContainer = styled.footer`
  background: white;
  margin-top: 100px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const Title = styled.div`
  margin-bottom: 20px;
  font-size: 23px;
  font-weight: 500;
  line-height: 37px;
  letter-spacing: -0.02em;
  text-align: center;
`;

export const ContainerContactAndLocation = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 18px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: -0.02em;
    text-align: left;
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: -0.02em;
    text-align: left;
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const ContactAndLocation = styled.div`
  width: 50%;
  @media (max-width: 700px) {
    width: 100%;
    :first-child {
      margin-bottom: 20px;
    }
  }
`;
