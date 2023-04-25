import { CardPreviewTransformation } from "../CardPreviewTransformation";
import { Container } from "./styles";

import img1 from "../../../assets/transformations/transformation1.svg";
import img2 from "../../../assets/transformations/transformation2.svg";
import img3 from "../../../assets/transformations/transformation3.svg";

export function PreviewTransformation() {
  return (
    <Container>
      <CardPreviewTransformation img={img1} />
      <CardPreviewTransformation img={img2} />
      <CardPreviewTransformation img={img3} />
    </Container>
  );
}
