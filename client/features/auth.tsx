import { trpc } from "@mono/utils/trpc/trpc";
import React from "react";
import { Authorization } from "../components/authorization";

export function Auth({ children }: { children: React.ReactNode }) {
  const currentUser = trpc.usuario.me.useQuery();
  const can = trpc.groupSubject.can.useQuery({
    id: {
      group_id: currentUser.data.group_id || "unknow",
      subject_id: location.pathname,
    },
  });

  return <Authorization can={can.data}>{children}</Authorization>;
}
