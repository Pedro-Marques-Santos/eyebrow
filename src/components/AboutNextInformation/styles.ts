import styled from "styled-components";

export const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #f4f3d2;
  color: #928c04;

  h1 {
    padding-left: 8px;
    padding-right: 8px;
    font-size: 26px;
    font-weight: 500;
    line-height: 42px;
    letter-spacing: -0.02em;
    @media (max-width: 700px) {
      font-size: 20px;
      text-align: center;
    }
  }

  h2 {
    padding-left: 8px;
    padding-right: 8px;
    font-size: 17px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: -0.02em;
    @media (max-width: 700px) {
      font-size: 15px;
      text-align: center;
      margin-top: 8px;
    }
  }
`;
