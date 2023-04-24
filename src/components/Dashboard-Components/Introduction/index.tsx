import { Container, Img, WelcomeIntroduction, TagIntroduction } from "./styles";

import imgIntroduction from "../../../assets/introduction.svg";
import Image from "next/image";

export function Introduction() {
  return (
    <Container>
      <WelcomeIntroduction>
        <TagIntroduction>
          Venha aprender técnicas <strong>avançadas</strong> de design de
          sobrancelhas
        </TagIntroduction>
        <h5>Curso completo</h5>
        <button>Contatos</button>
      </WelcomeIntroduction>
      <Img style={{ position: "relative" }}>
        <Image src={imgIntroduction} alt="" fill={true} />
      </Img>
    </Container>
  );
}
