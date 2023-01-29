import {
  TCurrentUser,
  TFieldClient,
  TOrder,
  TRpcContext,
  TSelect,
  TWhere,
} from ".";

export type TUsuarioPk = {
  usuario_id?: number;
};
export type TUsuarioCol = {
  nome_login?: string;
  email?: string;
  empregado_id?: number;
  is_ativo?: number;
  hash?: string;
  nome?: string;
  setor?: string;
  nivel?: number;
  group_id?: string;
};
export type TUsuario = TUsuarioPk & TUsuarioCol;

export type TUsuarioFields =
  | keyof Required<TUsuarioPk>
  | keyof Required<TUsuarioCol>;

export type TUsuarioIds = {
  [pk in keyof Required<TUsuarioPk>]: any;
};
export type TUsuarioSelect = TSelect<TUsuarioFields>;
export type TUsuarioWhere = TWhere<TUsuarioFields>;
export type TUsuarioOrder = TOrder<TUsuarioFields>;

export type TUsuarioSchema = () => Promise<TFieldClient[]>;
export type TUsuarioClear = () => Promise<TUsuario>;
export type TUsuarioList = (args: {
  where?: TWhere<TUsuarioFields>[];
  order?: TOrder<TUsuarioFields>[];
  limit?: number;
  select?: TSelect<TUsuarioFields>;
}) => Promise<TUsuario[]>;
export type TUsuarioRead = (args: {
  id: TUsuarioIds;
  select?: TSelect<TUsuarioFields>;
}) => Promise<TUsuario>;

export type TUsuarioCreate = (args: { data: TUsuario }) => Promise<TUsuario>;
export type TUsuarioUpdate = (args: {
  id: TUsuarioIds;
  data: TUsuario;
}) => Promise<TUsuario>;
export type TUsuarioDel = (args: { id: TUsuarioIds }) => Promise<number>;

export type TUsuarioRpc = {
  query: {
    schema: TUsuarioSchema;
    clear: TUsuarioClear;
    list: TUsuarioList;
    read: TUsuarioRead;
    me: (_?: void, ctx?: TRpcContext) => Promise<TCurrentUser>;
  };
  mutation: {
    create: TUsuarioCreate;
    update: TUsuarioUpdate;
    del: TUsuarioDel;
    login: (args: { user: string; password: string }) => Promise<TCurrentUser>;
    logout: () => Promise<boolean>;
  };
};
