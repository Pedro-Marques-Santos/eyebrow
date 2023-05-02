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

import Router from "next/router";

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
                Router.push(
                  "https://web.whatsapp.com/send?phone=5519998159979"
                );
              }}
            >
              WhatsApp
            </ItemMenu>
            <ItemMenu>Cursos</ItemMenu>
            <ItemMenu>Antes e depois</ItemMenu>
            <ItemMenu
              onClick={() => {
                Router.push("/contacts");
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
              Router.push("wa.me/message/F22U4T7NKDDNL1");
            }}
          >
            WhatsApp
          </ItemMenuSm>
          <ItemMenuSm>Cursos</ItemMenuSm>
          <ItemMenuSm>Antes e depois</ItemMenuSm>
          <ItemMenuSm
            onClick={() => {
              Router.push("/contacts");
            }}
          >
            Contatos
          </ItemMenuSm>
        </MenuSmall>
      </Container>
    </ContentContainer>
  );
}
