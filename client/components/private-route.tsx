import { useAuth } from "@/client/store/auth";
import { Navigate, useLocation } from "react-router-dom";

export function PrivateRoute({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isAuthenticated = useAuth((state) => state.isAuthenticated);

  return isAuthenticated() ? (
    <>{children}</>
  ) : (
    <Navigate
      replace={true}
      to="/login"
      state={{ from: `${location.pathname}${location.search}` }}
    />
  );
}
