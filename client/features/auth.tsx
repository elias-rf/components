import { useAuth } from "@/client/store/auth";
import { trpc } from "@/rpc/utils/trpc";
import React from "react";
import { Authorization } from "../components/authorization";

export function Auth({ children }: { children: React.ReactNode }) {
  const currentUser = useAuth((state) => state.user);
  const can = trpc.groupSubject.can.useQuery({
    user_id: currentUser.user_id || "unknow",
    subject_id: location.pathname,
  });

  return <Authorization can={can.data}>{children}</Authorization>;
}
