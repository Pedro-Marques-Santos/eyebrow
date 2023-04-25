import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
