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

import logo from "../../assets/logo.svg";

import { MdOutlineDensitySmall } from "react-icons/md";
import { useState } from "react";

export function Header() {
  const [progressBar, setProgressBar] = useState(false);

  return (
    <ContentContainer>
      <Container>
        <Menu>
          <Image src={logo} width={100} height={66} alt="" />
          <PagesXl>
            <ItemMenu>WhatsApp</ItemMenu>
            <ItemMenu>Cursos</ItemMenu>
            <ItemMenu>Antes e depois</ItemMenu>
            <ItemMenu>Contatos</ItemMenu>
          </PagesXl>
          <i onClick={() => setProgressBar(!progressBar)}>
            <MdOutlineDensitySmall />
          </i>
        </Menu>
        <MenuSmall stateProgressBar={progressBar}>
          <ItemMenuSm>WhatsApp</ItemMenuSm>
          <ItemMenuSm>Cursos</ItemMenuSm>
          <ItemMenuSm>Antes e depois</ItemMenuSm>
          <ItemMenuSm>Contatos</ItemMenuSm>
        </MenuSmall>
      </Container>
    </ContentContainer>
  );
}
