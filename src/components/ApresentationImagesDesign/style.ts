import styled from "styled-components";

interface ContainerProps {
  mt?: string;
  mb?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const ContentTitle = styled.div`
  /* box-shadow: 4px 4px 4px 0px var(--box-shadow-header); */
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    width: 280px;
    font-size: 26px;
    font-weight: 500;
    line-height: 42px;
    letter-spacing: -0.02em;
    text-align: center;
    margin-bottom: 10px;
    @media (max-width: 700px) {
      width: 100%;
      max-width: 350px;
      font-size: 21px;
    }
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--gray-500);
    @media (max-width: 700px) {
      font-size: 17px;
    }
  }
  @media (max-width: 700px) {
    width: 100%;
    order: 1;
  }
`;

export const Img = styled.div`
  max-width: 433px;
  min-height: 341px;
  margin: 0 auto;

  img {
    height: 100%;
    width: 100%;
    border-radius: 100px;
  }
`;

export const ContentImg = styled.div`
  width: 50%;
  @media (max-width: 700px) {
    width: 100%;
    order: 0;
    margin-bottom: 15px;
  }
`;
