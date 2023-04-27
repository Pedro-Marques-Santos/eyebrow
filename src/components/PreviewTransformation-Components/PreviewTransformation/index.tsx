import { CardPreviewTransformation } from "../CardPreviewTransformation";
import { Container } from "./styles";

import img1 from "../../../assets/transformations/Component 1.svg";
import img2 from "../../../assets/transformations/Component 2.svg";
import img3 from "../../../assets/transformations/Component 3.svg";
import img4 from "../../../assets/transformations/Component 4.svg";
import img5 from "../../../assets/transformations/Component 5.svg";
import img6 from "../../../assets/transformations/Component 6.svg";

export function PreviewTransformation() {
  return (
    <>
      <Container>
        <CardPreviewTransformation img={img1} />
        <CardPreviewTransformation img={img2} />
        <CardPreviewTransformation img={img3} />
      </Container>
      <Container>
        <CardPreviewTransformation img={img4} />
        <CardPreviewTransformation img={img5} />
        <CardPreviewTransformation img={img6} />
      </Container>
    </>
  );
}
