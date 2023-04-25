import styled from "styled-components";

export const Container = styled.footer`
  a {
    color: black;
  }
  margin-bottom: 100px;
  h1 {
    font-family: "Oswald";
    font-size: 25px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: -0.02em;
  }

  h2 {
    margin-top: 5px;
    font-size: 20px;
    font-style: italic;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: -0.02em;
  }

  h3 {
    margin-top: 40px;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: -0.02em;
    color: #494ec9;
  }
  margin-top: 100px;
`;

export const ContainerIcons = styled.div`
  margin-top: 15px;
  i {
    cursor: pointer;
    font-size: 25px;
    margin-right: 20px;
    a {
      color: var(--yellow);
    }
  }
`;
