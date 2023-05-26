import { Container, ContainerContent, Img, Price } from "./styles";
import Image from "next/image";

interface ICardOurMainProceduresProps {
  tag1: string;
  tag2: string;
  tag3: string;
  img: string;
  price: number;
}

export function CardOurMainProcedures({
  tag1,
  tag2,
  tag3,
  img,
  price,
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
        <Price>
          <h3>
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>
        </Price>
      </Container>
    </ContainerContent>
  );
}
