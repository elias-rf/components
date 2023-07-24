import { useAuth } from "@/client/store/auth";
import React from "react";
import { useNavigate } from "react-router-dom";

export function Authenticated() {
  const navigate = useNavigate();
  const token = useAuth((state) => state.token);

  React.useEffect(() => {
    if (token === "") {
      navigate("/login");
    }
  }, [token, navigate]);

  return null;
}
