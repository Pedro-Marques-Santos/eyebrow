import {
  Container,
  ContentImgAndDescription,
  Description,
  Img,
} from "./styles";
import Image from "next/image";

interface CardContactRedeNetWorkProps {
  img: string;
  description1: string;
  description2?: string;
  network: string;
  link: string;
}

export function CardContactRedeNetWork({
  img,
  description1,
  description2,
  network,
  link,
}: CardContactRedeNetWorkProps) {
  return (
    <Container href={link} target="_blank">
      <ContentImgAndDescription>
        <Img style={{ position: "relative" }}>
          <Image src={img} alt="" fill={true} />
        </Img>
        <Description>
          <h1>{description1}</h1>
          <h2>{description2}</h2>
        </Description>
      </ContentImgAndDescription>
      <i>{network}</i>
    </Container>
  );
}
