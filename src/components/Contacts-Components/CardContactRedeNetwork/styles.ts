import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  justify-content: space-between;
  background: var(--green-100);
  padding: 10px;

  i {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "Inter";
    font-style: normal;
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }
  cursor: pointer;

  text-decoration: none;
  color: black;
`;

export const Img = styled.div`
  width: 45px;
  height: 45px;
`;

export const ContentImgAndDescription = styled.div`
  display: flex;
  align-items: center;
`;

export const Description = styled.div`
  margin-left: 10px;
  h1 {
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }
  h2 {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
