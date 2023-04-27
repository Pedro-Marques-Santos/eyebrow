import { Container, Img, WelcomeIntroduction, TagIntroduction } from "./styles";

import imgIntroduction from "../../../assets/img-new-introduction.svg";
import Image from "next/image";

export function Introduction() {
  return (
    <Container>
      <WelcomeIntroduction>
        <TagIntroduction>
          Venha deixar seu <strong>autoestima</strong> lá em cima com as
          sobrancelhas maravilhosas
        </TagIntroduction>
        <button>Contatos</button>
      </WelcomeIntroduction>
      <Img style={{ position: "relative" }}>
        <Image src={imgIntroduction} alt="" fill={true} />
      </Img>
    </Container>
  );
}
