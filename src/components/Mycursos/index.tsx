import { ApresentationImagesDesign } from "@/src/components/ApresentationImagesDesign";

import img1 from "../../assets/cursos/cursos-img1.svg";
import img2 from "../../assets/cursos/cursos-img2.svg";

export function MyCursos() {
  return (
    <>
      <ApresentationImagesDesign
        typeDesign={"padrao"}
        img={img1}
        title={"Curso Vip - Design de Sobrancelhas para Iniciantes"}
        information={
          "Aqui você vai ter auxílio de materiais didáticos, modelos de aulas práticas e aulas teóricas fornecidas pelo nosso Studio. No Curso Vip de sobrancelha facial, as aulas são 90% práticas, aulas exclusivas com uma profissional de sobrancelha, revelando todos os segredos que toda profissional de sobrancelha precisa."
        }
        price={500}
      />
      <ApresentationImagesDesign
        typeDesign={"textfirst"}
        img={img2}
        title={"Curso em grupo - Design de Sobrancelhas para Iniciantes"}
        information={
          "No curso em grupo, você vai aprender todas as técnicas de uma design de sobrancelhas, as aulas em um ambiente coletivo, todos os alunos terão a sua oportunidade de fazer aulas práticas e teóricas, todos os materias didáticos serão fernecidos pelo Studio."
        }
        price={300}
        mt="40px"
      />
    </>
  );
}
