import { MyCursos } from "../components/Mycursos";

export default function Cursos() {
  return (
    <Container>
      <ContentContainer>
        <MyCursos />
      </ContentContainer>
    </Container>
  );
}

import styled from "styled-components";

const Container = styled.div`
  :first-child {
    margin-top: 100px;
  }
  max-width: 1080px;
  min-width: 300px;
  margin: 0 auto;
  padding-left: 8px;
  padding-right: 8px;
`;

const ContentContainer = styled.div`
  margin-top: 150px;
  margin-bottom: 100px;
`;
