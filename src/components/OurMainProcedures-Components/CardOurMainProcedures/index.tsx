import { Container, ContainerContent, Img } from "./styles";
import Image from "next/image";

import img from "../../../assets/ourmainprocedures/img-ournprocedures-1.svg";

export function CardOurMainProcedures() {
  return (
    <ContainerContent>
      <Container>
        <h1>Micropigmentação de Sobrancelhas</h1>
        <h2>Técinas: Fio a Fio / Shadow</h2>
        <Img style={{ position: "relative" }}>
          <Image src={img} alt="" fill={true} />
        </Img>
        <p>
          Preenchimento e estruturação das sobrancelhas com naturalidade e
          sofisticação
        </p>
      </Container>
    </ContainerContent>
  );
}
