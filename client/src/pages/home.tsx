import logo from "../assets/images/logo.svg";
import { Page } from "../components";

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
