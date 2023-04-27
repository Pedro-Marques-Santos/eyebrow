import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;
