import { AboutNextInformation } from "../../AboutNextInformation";
import { ApresentationImagesDesign } from "../../ApresentationImagesDesign";
import { Introduction } from "../Introduction";
import { Container, ContentContainer } from "./styles";

import imgApresentation1 from "../../../assets/img-apresentation1.svg";
import imgApresentation2 from "../../../assets/img-apresentation2.svg";

export function Dashboard() {
  return (
    <ContentContainer>
      <Container>
        <Introduction />
      </Container>
      <AboutNextInformation
        tag1="Aprecie a beleza dos seus olhos"
        tag2="Com serviços e produtos de alta qualidade"
      />
      <Container>
        <ApresentationImagesDesign
          typeDesign={"padrao"}
          img={imgApresentation1}
        />
        <ApresentationImagesDesign
          typeDesign={"onetext"}
          mt="80px"
          img={imgApresentation2}
        />
      </Container>
      <AboutNextInformation
        tag1="Transformações incríveis"
        tag2="faça o curso e deixe os seus clientes satifeitos"
      />
    </ContentContainer>
  );
}
