import { Page } from "../components";

import logo from "../assets/images/logo.svg";

export function Home() {
  return (
    <Page>
      <img
        src={logo}
        alt="logo"
      />
    </Page>
  );
}
