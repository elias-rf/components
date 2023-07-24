import { useAuth } from "@/client/store/auth";
import { trpc } from "@/utils/trpc/trpc";
import React from "react";
import { Authorization } from "../components/authorization";

export function Auth({ children }: { children: React.ReactNode }) {
  const currentUser = useAuth((state) => state.user);
  const can = trpc.groupSubject.can.useQuery({
    id: {
      group_id: currentUser.group_id || "unknow",
      subject_id: location.pathname,
    },
  });

  return <Authorization can={can.data}>{children}</Authorization>;
}
