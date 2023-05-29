import { Container, Img, ContentTitle, ContentImg } from "./style";
import Image from "next/image";

interface ApresentationImagesDesignProps {
  typeDesign: string;
  title: string;
  information: string;
  price: number;
  mt?: string;
  mb?: string;
  img: string;
}

export function ApresentationImagesDesign({
  typeDesign,
  mt,
  mb,
  img,
  price,
  title,
  information,
}: ApresentationImagesDesignProps) {
  return (
    <Container mt={mt} mb={mb}>
      {typeDesign === "padrao" && (
        <>
          <ContentImg>
            <Img style={{ position: "relative", overflow: "hidden" }}>
              <Image
                style={{ objectFit: "cover" }}
                src={img}
                alt="curso vip"
                quality={70}
                priority
                fill={true}
              />
            </Img>
          </ContentImg>
          <ContentTitle>
            <h1>{title}</h1>
            <h2>{information}</h2>
            <h3>
              {price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </h3>
          </ContentTitle>
        </>
      )}
      {typeDesign === "textfirst" && (
        <>
          <ContentTitle>
            <h1>{title}</h1>
            <h2>{information}</h2>
            <h3>
              {price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </h3>
          </ContentTitle>
          <ContentImg>
            <Img style={{ position: "relative", overflow: "hidden" }}>
              <Image
                style={{ objectFit: "cover" }}
                src={img}
                alt="curso em grupo"
                fill={true}
                quality={70}
                priority
              />
            </Img>
          </ContentImg>
        </>
      )}
    </Container>
  );
}
