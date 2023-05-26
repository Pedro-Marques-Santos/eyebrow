import { Dispatch, SetStateAction } from "react";

import Router from "next/router";

interface IOpenMenu {
  setProgressBar: Dispatch<SetStateAction<boolean>>;
}

function openWhatsApp({ setProgressBar }: IOpenMenu) {
  setProgressBar(false);
  Router.push("https://wa.me/19998159979");
}

function openContacts({ setProgressBar }: IOpenMenu) {
  setProgressBar(false);
  Router.push("/contacts");
}

function openPaginaInicial({ setProgressBar }: IOpenMenu) {
  setProgressBar(false);
  Router.push("/");
}

function openPageCursos({ setProgressBar }: IOpenMenu) {
  setProgressBar(false);
  Router.push("/cursos");
}

export { openWhatsApp, openContacts, openPaginaInicial, openPageCursos };
