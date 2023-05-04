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
import { openContacts, openPaginaInicial, openWhatsApp } from "./itensMenu";

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
            </ItemMenu>{" "}
            <ItemMenu
              onClick={() => {
                openContacts({ setProgressBar });
              }}
            >
              Contatos
            </ItemMenu>
            <ItemMenu
              onClick={() => {
                openPaginaInicial({ setProgressBar });
              }}
            >
              Página Inicial
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
          <ItemMenuSm
            onClick={() => {
              openContacts({ setProgressBar });
            }}
          >
            Contatos
          </ItemMenuSm>
          <ItemMenuSm
            onClick={() => {
              openPaginaInicial({ setProgressBar });
            }}
          >
            Página Inicial
          </ItemMenuSm>
        </MenuSmall>
      </Container>
    </ContentContainer>
  );
}
