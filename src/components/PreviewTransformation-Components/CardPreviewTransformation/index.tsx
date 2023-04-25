import Image from "next/image";
import { Container } from "./styles";

interface CardPreviewTransformationProps {
  img: string;
}

export function CardPreviewTransformation({
  img,
}: CardPreviewTransformationProps) {
  return (
    <Container style={{ position: "relative", overflow: "hidden" }}>
      <Image src={img} alt="" fill={true} style={{ objectFit: "cover" }} />
    </Container>
  );
}
