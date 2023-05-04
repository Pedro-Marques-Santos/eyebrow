import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    gap: 0px;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
