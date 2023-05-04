import { Container, ContainerContent, Img } from "./styles";
import Image from "next/image";

import img from "../../../assets/ourmainprocedures/img-ournprocedures-1.svg";

interface ICardOurMainProceduresProps {
  tag1: string;
  tag2: string;
  tag3: string;
}

export function CardOurMainProcedures({
  tag1,
  tag2,
  tag3,
}: ICardOurMainProceduresProps) {
  return (
    <ContainerContent>
      <Container>
        <h1>{tag1}</h1>
        <h2>Técnica: {tag2}</h2>
        <Img style={{ position: "relative" }}>
          <Image src={img} alt="" fill={true} />
        </Img>
        <p>{tag3}</p>
      </Container>
    </ContainerContent>
  );
}
