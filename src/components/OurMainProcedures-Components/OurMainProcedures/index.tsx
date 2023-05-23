import { CardOurMainProcedures } from "../CardOurMainProcedures";
import { Container } from "./styles";

import img1 from "../../../assets/ourmainprocedures/img-ournprocedures-1.svg";
import img2 from "../../../assets/ourmainprocedures/img-ournprocedures-2.svg";
import img3 from "../../../assets/ourmainprocedures/img-ournprocedures-3.svg";
import img4 from "../../../assets/ourmainprocedures/img-ournprocedures-4.svg";
import img5 from "../../../assets/ourmainprocedures/img-ournprocedures-5.svg";

export function OurMainProcedures() {
  return (
    <Container>
      <CardOurMainProcedures
        tag1={"Micropigmentação Fio a Fio"}
        tag2={"Fio a Fio"}
        tag3={"Preenchimento de falhas e dar naturalidade a sobrancelhas"}
        img={img1}
      />
      <CardOurMainProcedures
        tag1={"Micropigmentação Shadow"}
        tag2={"Shadow"}
        tag3={"Sobrancelhas mais preenchidas com efeito de Henna ou Sombra"}
        img={img2}
      />
      <CardOurMainProcedures
        tag1={"Henna"}
        tag2={"efeito temporário"}
        tag3={
          "A sobrancelha de Henna é uma técnica utilizada para pessoas que gostam de sobrancelhas bem preenchidas e mais definidas"
        }
        img={img3}
      />
      <CardOurMainProcedures
        tag1={"Design Simples"}
        tag2={"design natural"}
        tag3={
          "Uma técnica usada para pessoas que querem sobrancelhas mais naturais, porém bem desenhadas"
        }
        img={img5}
      />
      <CardOurMainProcedures
        tag1={"Limpeza de pele"}
        tag2={"produtos de alta qualidade"}
        tag3={
          "Quatro Benefícios da limpeza de pele: Remover células mortas, Controle de oleosidade, Remover cravos e espinhas, Suaviza e Uniformiza a pele"
        }
        img={img4}
      />
      <CardOurMainProcedures
        tag1={"Cílios"}
        tag2={"volume brasileiro"}
        tag3={
          "Boa aparência para todos os tipos de olhos, altamente duráveis e delicados"
        }
        img={img4}
      />
      <CardOurMainProcedures
        tag1={"Microlabial"}
        tag2={"labios contornados"}
        tag3={
          "Técnicas para mulheres e homens que querem lábios rosados e saudáveiss"
        }
        img={img4}
      />
    </Container>
  );
}
