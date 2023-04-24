import styled from "styled-components";

interface ContainerProps {
  mt?: string;
  mb?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};
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
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--gray-500);
  }
`;

export const Img = styled.div`
  border: 1px solid red;

  width: 50%;
  min-height: 300px;
`;
