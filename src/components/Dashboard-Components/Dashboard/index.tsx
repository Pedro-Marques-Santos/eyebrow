import { AboutNextInformation } from "../../AboutNextInformation";
import { ApresentationImagesDesign } from "../../ApresentationImagesDesign";
import { Introduction } from "../Introduction";
import { Container, ContentContainer } from "./styles";

import imgApresentation1 from "../../../assets/img-apresentation1.svg";
import imgApresentation2 from "../../../assets/img-apresentation2.svg";
import { PreviewTransformation } from "../../PreviewTransformation-Components/PreviewTransformation";
import { LocationGoogleMaps } from "../../LocationGoogleMaps";
import { Footer } from "../../Footer";
import { OurMainProcedures } from "../../OurMainProcedures-Components/OurMainProcedures";
import { AboutMe } from "../../AboutMe";

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
      <AboutNextInformation
        tag1="Transformações incríveis"
        tag2="faça o curso e deixe os seus clientes satifeitos"
      />
      <Container>
        <PreviewTransformation />
      </Container>
      <AboutNextInformation
        tag1="Aprecie a beleza dos seus olhos"
        tag2="Com serviços e produtos de alta qualidade"
      />
      <Container>
        <AboutMe />
        <LocationGoogleMaps />
        <Footer />
      </Container>
    </ContentContainer>
  );
}
