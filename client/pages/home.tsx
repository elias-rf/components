import { useAuth } from "@/client/store/auth";
import { Navigate, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { Page } from "../components/page/page";

export function Home() {
  const location = useLocation();
  const isAuthenticated = useAuth((state) => state.isAuthenticated);

  return isAuthenticated() ? (
    <Navigate
      replace={true}
      to="/dashboard"
      state={{ from: `${location.pathname}${location.search}` }}
    />
  ) : (
    <Page>
      <img
        src={logo}
        alt="logo"
        width={`100%`}
      />
    </Page>
  );
}
