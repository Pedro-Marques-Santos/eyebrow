import { LocationGoogleMaps } from "../LocationGoogleMaps";
import {
  ContactAndLocation,
  Container,
  ContainerContactAndLocation,
  ContentContainer,
  Title,
} from "./styles";

export function Footer() {
  return (
    <ContentContainer>
      <Container>
        <Title>Contatos e Localização</Title>
        <p>entre em contato conosco para marcar um horário</p>
        <ContainerContactAndLocation>
          <ContactAndLocation>
            <h1>Endereço do estudio:</h1>
            <h2>Rua Avelino stivao jardim São Paulo 274</h2>
          </ContactAndLocation>
          <ContactAndLocation>
            <h1>Telefone(WhatsApp):</h1>
            <h2>(19)998159979</h2>
          </ContactAndLocation>
        </ContainerContactAndLocation>
        <LocationGoogleMaps />
      </Container>
    </ContentContainer>
  );
}
