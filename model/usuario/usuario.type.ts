import { TOrder, TSelect, TWhere } from "../../types";
import { TField } from "../../types/model";
//#region import
import { TCurrentUser } from "../../types";
import { TRpcContext } from "../../types/rpc";
//#endregion
export interface TUsuarioPk {
  usuario_id?: number;
}
export interface TUsuario extends TUsuarioPk {
  nome_login?: string;
  email?: string;
  empregado_id?: number;
  is_ativo?: number;
  hash?: string;
  nome?: string;
  setor?: string;
  nivel?: number;
  group_id?: string;
}

export type TUsuarioFields = keyof Required<TUsuario>;

export type TUsuarioIds = {
  [pk in keyof Required<TUsuarioPk>]: any;
};
export type TUsuarioSelect = TSelect<TUsuarioFields>;
export type TUsuarioWhere = TWhere<TUsuarioFields>;
export type TUsuarioOrder = TOrder<TUsuarioFields>;

export type TUsuarioSchema = () => Promise<TField[]>;
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

export type TUsuarioCreate = (args: {
  data: TUsuario;
  select?: TSelect<TUsuarioFields>;
}) => Promise<TUsuario>;
export type TUsuarioUpdate = (args: {
  id: TUsuarioIds;
  data: TUsuario;
  select?: TSelect<TUsuarioFields>;
}) => Promise<TUsuario>;
export type TUsuarioDel = (args: { id: TUsuarioIds }) => Promise<number>;

//#region def
export type TUsuarioLogin = (args: {
  user: string;
  password: string;
}) => Promise<TCurrentUser>;
export type TUsuarioLogout = () => Promise<boolean>;
export type TUsuarioMe = (_?: void, ctx?: TRpcContext) => Promise<TCurrentUser>;
//#endregion

export type TUsuarioCrud = {
  query: {
    schema: TUsuarioSchema;
    clear: TUsuarioClear;
    list: TUsuarioList;
    read: TUsuarioRead;
  };
  mutation: {
    create: TUsuarioCreate;
    update: TUsuarioUpdate;
    del: TUsuarioDel;
  };
};

export type TUsuarioModel = TUsuarioCrud & {
  //#region query

  //#endregion
  //#region mutation

  //#endregion
  //#region type
  query: {
    me: TUsuarioMe;
  };
  mutation: {
    login: TUsuarioLogin;
    logout: TUsuarioLogout;
  };
  //#endregion
};

export type TUsuarioRpc = TUsuarioModel;
