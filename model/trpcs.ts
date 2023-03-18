// import { mergeRouters } from "../server/trpc";
import { router } from "../server/trpc";
import { agendaTelefoneRouter } from "./agenda-telefone/agenda-telefone.trpc";
import { groupSubjectRouter } from "./group-subject/group-subject.trpc";
import { usuarioRouter } from "./usuario/usuario.trpc";

export const routers = router({
  agendaTelefone: agendaTelefoneRouter,
  groupSubject: groupSubjectRouter,
  usuario: usuarioRouter,
});

export type TRpcs = typeof routers;
