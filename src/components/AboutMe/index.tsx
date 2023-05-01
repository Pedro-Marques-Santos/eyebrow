import { Container, ContainerText, Img } from "./styles";

import Image from "next/image";

import imgAboutMe from "../../assets/about-jennifer/img-aboutme.svg";

export function AboutMe() {
  return (
    <Container>
      <Img style={{ position: "relative" }}>
        <Image src={imgAboutMe} alt="" fill={true} />
      </Img>
      <ContainerText>
        <h1>Sobre o Estudio</h1>
        <h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industries standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </h2>
      </ContainerText>
    </Container>
  );
}
