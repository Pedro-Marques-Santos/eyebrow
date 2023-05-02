import Image from "next/image";
import {
  Container,
  ContentContainer,
  ItemMenu,
  ItemMenuSm,
  Menu,
  MenuSmall,
  PagesXl,
} from "./styles";

import logo from "../../assets/logo.png";

import { MdOutlineDensitySmall } from "react-icons/md";
import { useState } from "react";
import { openContacts, openWhatsApp } from "./itensMenu";

export function Header() {
  const [progressBar, setProgressBar] = useState(false);

  return (
    <ContentContainer>
      <Container>
        <Menu>
          <Image src={logo} width={139} height={65} quality={100} alt="" />
          <PagesXl>
            <ItemMenu
              onClick={() => {
                openWhatsApp({ setProgressBar });
              }}
            >
              WhatsApp
            </ItemMenu>
            <ItemMenu>Cursos</ItemMenu>
            <ItemMenu>Antes e depois</ItemMenu>
            <ItemMenu
              onClick={() => {
                openContacts({ setProgressBar });
              }}
            >
              Contatos
            </ItemMenu>
          </PagesXl>
          <i onClick={() => setProgressBar(!progressBar)}>
            <MdOutlineDensitySmall />
          </i>
        </Menu>
        <MenuSmall stateProgressBar={progressBar}>
          <ItemMenuSm
            onClick={() => {
              openWhatsApp({ setProgressBar });
            }}
          >
            WhatsApp
          </ItemMenuSm>
          <ItemMenuSm>Cursos</ItemMenuSm>
          <ItemMenuSm>Antes e depois</ItemMenuSm>
          <ItemMenuSm
            onClick={() => {
              openContacts({ setProgressBar });
            }}
          >
            Contatos
          </ItemMenuSm>
        </MenuSmall>
      </Container>
    </ContentContainer>
  );
}
