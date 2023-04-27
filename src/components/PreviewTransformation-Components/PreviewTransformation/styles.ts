import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  :first-child {
    margin-bottom: 60px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    :first-child {
      margin-bottom: 0px;
    }
  }
`;
