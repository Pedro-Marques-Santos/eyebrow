import { Container, Img, WelcomeIntroduction, TagIntroduction } from "./styles";

import imgIntroduction from "../../../assets/img-new-introduction.svg";
import Image from "next/image";

import Router from "next/router";

export function Introduction() {
  function handleGoPageContacts() {
    Router.push("contacts");
  }

  return (
    <Container>
      <WelcomeIntroduction>
        <TagIntroduction>
          Venha deixar seu <strong>autoestima</strong> lá em cima com as
          sobrancelhas maravilhosas
        </TagIntroduction>
        <button onClick={handleGoPageContacts}>Contatos</button>
      </WelcomeIntroduction>
      <Img style={{ position: "relative" }}>
        <Image src={imgIntroduction} alt="" fill={true} priority />
      </Img>
    </Container>
  );
}
