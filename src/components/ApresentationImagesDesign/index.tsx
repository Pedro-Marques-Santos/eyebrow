import { Container, Img, ContentTitle } from "./style";
import Image from "next/image";

interface ApresentationImagesDesignProps {
  typeDesign: string;
  mt?: string;
  mb?: string;
  img: string;
}

export function ApresentationImagesDesign({
  typeDesign,
  mt,
  mb,
  img,
}: ApresentationImagesDesignProps) {
  console.log(typeDesign);

  return (
    <Container mt={mt} mb={mb}>
      {typeDesign === "padrao" && (
        <>
          <Img style={{ position: "relative" }}>
            <Image
              className="border-introduction"
              src={img}
              alt=""
              fill={true}
            />
          </Img>
          <ContentTitle>
            <h1>Design profissional de sobrancelhas</h1>
            <h2>
              Aqui temos a técnica ideal para encontrar desenhos de sobrancelhas
              que realçam a beleza natural de cada rosto.
            </h2>
          </ContentTitle>
        </>
      )}
      {typeDesign === "onetext" && (
        <>
          <ContentTitle>
            <h1>
              Aprenda técnicas avançadas de beleza e mude a vida das pessoas.
            </h1>
          </ContentTitle>
          <Img style={{ position: "relative" }}>
            <Image src={img} alt="" fill={true} />
          </Img>
        </>
      )}
    </Container>
  );
}
