import { Container, Img, ContentTitle, ContentImg } from "./style";
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

  return (
    <Container mt={mt} mb={mb}>
      {typeDesign === "padrao" && (
        <>
          <ContentImg>
            <Img style={{ position: "relative", overflow: "hidden" }}>
              <Image
                style={{ objectFit: "cover" }}
                src={img}
                alt=""
                fill={true}
              />
            </Img>
          </ContentImg>
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
          <ContentImg>
            <Img style={{ position: "relative", overflow: "hidden" }}>
              <Image
                style={{ objectFit: "cover" }}
                src={img}
                alt=""
                fill={true}
              />
            </Img>
          </ContentImg>
        </>
      )}
    </Container>
  );
}
