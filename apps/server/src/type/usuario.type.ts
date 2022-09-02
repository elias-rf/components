export type TUsuario = {
  usuario_id?: number;
  nome_login?: string;
  fkGrupo?: number;
  email?: string;
  empregado_id?: number;
  is_ativo?: number;
  hash?: string;
  nome?: string;
  setor?: string;
  nivel?: number;
  grupo_id?: string;
}