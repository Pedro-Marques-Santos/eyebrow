import { Container, ContainerIcons } from "./styles";

import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";

export function Footer() {
  return (
    <Container>
      <h1>
        Venha me seguir nas redes sociais e veja mais tranformações dos meu
        clientes e alunos
      </h1>
      <h2>
        <a href="##">@jennifer_sardeli</a>
      </h2>

      <h3>MÍDIAS SOCIAIS</h3>
      <ContainerIcons>
        <i>
          <a href="">
            <BsFacebook />
          </a>
        </i>
        <i>
          <a href="">
            <AiOutlineInstagram />
          </a>
        </i>
        <i>
          <a href="">
            <AiFillLinkedin />
          </a>
        </i>
        <i>
          <a href="">
            <IoLogoTiktok />
          </a>
        </i>
      </ContainerIcons>
    </Container>
  );
}
