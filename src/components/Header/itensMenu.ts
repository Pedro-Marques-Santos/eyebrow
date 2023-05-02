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

export { openWhatsApp, openContacts };