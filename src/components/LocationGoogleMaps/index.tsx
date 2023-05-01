import { Container } from "./styles";

export function LocationGoogleMaps() {
  return (
    <Container>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.6539986044457!2d-47.16664613047555!3d-22.330358158195306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c867c80d0eb105%3A0xa0aed1e249e0c285!2sR.%20Avelino%20Stivao%2C%20274%20-%20S%C3%A3o%20Paulo%2C%20Conchal%20-%20SP%2C%2013835-000!5e0!3m2!1spt-BR!2sbr!4v1682359891695!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        loading="lazy"
      ></iframe>
    </Container>
  );
}
