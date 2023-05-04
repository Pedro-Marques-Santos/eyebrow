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
        <h1>Sobre o Studio</h1>
        <h2>
          O espaço Studio Sardeli trás a vocês o conforto de se sentir bonita e
          com vários benefícios. Já pensou em sair daqui com as sobrancelhas
          maravilhosas, unhas feitas e com uma limpeza de pele maravilhosa pode
          ter certeza que o nosso espaço tem o melhor pra oferecer.
        </h2>
      </ContainerText>
    </Container>
  );
}
