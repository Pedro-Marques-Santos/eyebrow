import { Container } from "./styles";

interface AboutNextInformationProps {
  tag1: string;
  tag2: string;
}

export function AboutNextInformation({
  tag1,
  tag2,
}: AboutNextInformationProps) {
  return (
    <Container>
      <h1>{tag1}</h1>
      <h2>{tag2}</h2>
    </Container>
  );
}
