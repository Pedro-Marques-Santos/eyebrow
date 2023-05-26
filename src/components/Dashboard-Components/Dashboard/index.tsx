import { AboutNextInformation } from "../../AboutNextInformation";
import { Introduction } from "../Introduction";
import { Container, ContentContainer } from "./styles";
import { PreviewTransformation } from "../../PreviewTransformation-Components/PreviewTransformation";
import { Footer } from "../../Footer";
import { OurMainProcedures } from "../../OurMainProcedures-Components/OurMainProcedures";
import { AboutMe } from "../../AboutMe";
import { MyCursos } from "../../Mycursos";

export function Dashboard() {
  return (
    <ContentContainer>
      <Container>
        <Introduction />
      </Container>
      <AboutNextInformation tag1="Nossos Principais Procedimentos" />
      <Container>
        <OurMainProcedures />
      </Container>
      <AboutNextInformation tag1="Cursos disponíveis" />
      <Container>
        <MyCursos />
      </Container>
      <AboutNextInformation tag1="Transformações incríveis" />
      <Container>
        <PreviewTransformation />
      </Container>
      <AboutNextInformation
        tag1="Aprecie a beleza dos seus olhos"
        tag2="Com serviços e produtos de alta qualidade"
      />
      <Container>
        <AboutMe />
      </Container>
      <Footer />
    </ContentContainer>
  );
}
