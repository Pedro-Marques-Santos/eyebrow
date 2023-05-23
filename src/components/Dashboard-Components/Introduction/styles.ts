import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const WelcomeIntroduction = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 25px;
    height: 43px;
    width: 150px;
    border-radius: 60px;
    padding: 16px 32px 16px 32px;
    background: #c8458c;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);

    font-size: 15px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: +0.05em;
  }

  h5 {
    margin-top: 9px;
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: -0.02em;
  }

  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

export const TagIntroduction = styled.div`
  text-align: center;
  max-width: 400px;
  font-size: 23px;
  font-weight: 500;
  line-height: 42px;
  letter-spacing: -0.02em;

  strong {
    color: #c8458c;
  }

  @media (max-width: 700px) {
    font-size: 21px;
  }
`;

export const Img = styled.div`
  width: 50%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  border-radius: 21px;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
