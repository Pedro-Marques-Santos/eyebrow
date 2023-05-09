import { CardOurMainProcedures } from "../CardOurMainProcedures";
import { Container } from "./styles";

export function OurMainProcedures() {
  return (
    <Container>
      <CardOurMainProcedures
        tag1={"Micropigmentação Fio a Fio"}
        tag2={"Fio a Fio"}
        tag3={"Preenchimento de falhas e dar naturalidade a sobrancelhas"}
      />
      <CardOurMainProcedures
        tag1={"Micropigmentação Shadow"}
        tag2={"Shadow"}
        tag3={"Sobrancelhas mais preenchidas com efeito de Henna ou Sombra"}
      />
      <CardOurMainProcedures
        tag1={"Henna"}
        tag2={"efeito temporário"}
        tag3={
          "A sobrancelha de Henna é uma técnica utilizada para pessoas que gostam de sobrancelhas bem preenchidas e mais definidas"
        }
      />
      <CardOurMainProcedures
        tag1={"Design Simples"}
        tag2={"design natural"}
        tag3={
          "Uma técnica usada para pessoas que querem sobrancelhas mais naturais, porém bem desenhadas"
        }
      />
      <CardOurMainProcedures
        tag1={"Limpeza de pele"}
        tag2={"design natural"}
        tag3={
          "Uma técnica usada para pessoas que querem sobrancelhas mais naturais, porém bem desenhadas"
        }
      />
    </Container>
  );
}
