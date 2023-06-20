//#region import

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

export type TUsuarioIds = {
  [pk in keyof Required<TUsuarioPk>]: any;
};
