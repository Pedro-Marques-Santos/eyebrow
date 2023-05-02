import { CardContactRedeNetWork } from "../CardContactRedeNetwork";
import { CardTitleContacts } from "../CardTitleContacts";
import { Container, ContentContainer } from "./styles";

import imgIntagram from "../../../assets/contacts/contactinstagram.svg";
import imgWhatsApp from "../../../assets/contacts/contactwhatszapp.svg";
import imgFacebook from "../../../assets/contacts/contactfacebook.svg";

export function CardContacts() {
  return (
    <>
      <Container>
        <CardTitleContacts />
        <ContentContainer>
          <CardContactRedeNetWork
            img={imgIntagram}
            description1={"jeniffer_sardeli"}
            description2={"@jeniffer_sardeli"}
            network={"Instagram"}
            link="https://www.instagram.com/jeniffer_sardeli/"
          />
          <CardContactRedeNetWork
            img={imgWhatsApp}
            description1={"Jeniffer Sardeli"}
            description2={"(19)998159979"}
            network={"WhatsApp"}
            link="https://api.whatsapp.com/message/F22U4T7NKDDNL1?autoload=1&app_absent=0"
          />
          <CardContactRedeNetWork
            img={imgFacebook}
            description1={"Jeniffer Sardeli"}
            network={"Facebook"}
            link="https://www.facebook.com/jeniffe.otte1"
          />
        </ContentContainer>
      </Container>
    </>
  );
}
