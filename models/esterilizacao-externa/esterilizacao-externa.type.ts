import {
  TConnection,
  TFieldDef,
  TOrder,
  TSelect,
  TTableDef,
  TWhere,
} from "../../types";
//#region import
//#endregion
export interface TEsterilizacaoExternaPk {
  esterilizacao_externa_id?: number;
}
export interface TEsterilizacaoExterna extends TEsterilizacaoExternaPk {
  data_envio?: string;
  data_retorno?: string;
  quantidade?: number;
  quantidade_caixa?: number;
  eh_fechado?: number;
  resultado?: string;
  usuario_id?: number;
  observacao?: string;
  lote?: string;
}

export type TEsterilizacaoExternaFields = keyof Required<TEsterilizacaoExterna>;

export type TEsterilizacaoExternaIds = {
  [pk in keyof Required<TEsterilizacaoExternaPk>]: any;
};
export type TEsterilizacaoExternaSelect = TSelect<TEsterilizacaoExternaFields>;
export type TEsterilizacaoExternaWhere = TWhere<TEsterilizacaoExternaFields>;
export type TEsterilizacaoExternaOrder = TOrder<TEsterilizacaoExternaFields>;

export type TEsterilizacaoExternaSchema = () => Promise<TFieldDef[]>;
export type TEsterilizacaoExternaClear = () => Promise<TEsterilizacaoExterna>;
export type TEsterilizacaoExternaList = (args: {
  where?: TWhere<TEsterilizacaoExternaFields>[];
  order?: TOrder<TEsterilizacaoExternaFields>[];
  limit?: number;
  select?: TSelect<TEsterilizacaoExternaFields>;
}) => Promise<TEsterilizacaoExterna[]>;
export type TEsterilizacaoExternaRead = (args: {
  id: TEsterilizacaoExternaIds;
  select?: TSelect<TEsterilizacaoExternaFields>;
}) => Promise<TEsterilizacaoExterna>;

export type TEsterilizacaoExternaCreate = (args: {
  data: TEsterilizacaoExterna;
  select?: TSelect<TEsterilizacaoExternaFields>;
}) => Promise<TEsterilizacaoExterna>;
export type TEsterilizacaoExternaUpdate = (args: {
  id: TEsterilizacaoExternaIds;
  data: TEsterilizacaoExterna;
  select?: TSelect<TEsterilizacaoExternaFields>;
}) => Promise<TEsterilizacaoExterna>;
export type TEsterilizacaoExternaDel = (args: {
  id: TEsterilizacaoExternaIds;
}) => Promise<number>;

//#region def
export type TEsterilizacaoExternaDiario = (args: {
  inicio: string;
  fim: string;
}) => Promise<{ dia: string; dia_semana: string; quantidade: number }[]>;

export type TEsterilizacaoExternaMensal = (args: {
  mes: string;
}) => Promise<{ mes: string; quantidade: number }[]>;

export type TEsterilizacaoExternaModelo = (args: {
  data: string;
  produto: string;
}) => Promise<{ modelo: string; quantidade: number }[]>;

export type TEsterilizacaoExternaProduto = (args: {
  data: string;
}) => Promise<{ produto: string; quantidade: number }[]>;

export type TEsterilizacaoExternaModel = {
  connection: TConnection;
  table: TTableDef;
  query: {
    list: TEsterilizacaoExternaList;
    read: TEsterilizacaoExternaRead;
    diario: TEsterilizacaoExternaDiario;
    mensal: TEsterilizacaoExternaMensal;
    modelo: TEsterilizacaoExternaModelo;
    produto: TEsterilizacaoExternaProduto;
  };
  mutation: {
    create: TEsterilizacaoExternaCreate;
    update: TEsterilizacaoExternaUpdate;
    del: TEsterilizacaoExternaDel;
  };
};
