import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TEsterilizacaoExternaPk = {
  esterilizacao_externa_id?: number;
};
export type TEsterilizacaoExternaCol = {
  data_envio?: string;
  data_retorno?: string;
  quantidade?: number;
  quantidade_caixa?: number;
  is_fechado?: number;
  resultado?: string;
  usuario_id?: number;
  observacao?: string;
  lote?: string;
};
export type TEsterilizacaoExterna =
  | TEsterilizacaoExternaPk
  | TEsterilizacaoExternaCol;

export type TEsterilizacaoExternaFields =
  | keyof Required<TEsterilizacaoExternaPk>
  | keyof Required<TEsterilizacaoExternaCol>;

export type TEsterilizacaoExternaIds = {
  [pk in keyof Required<TEsterilizacaoExternaPk>]: any;
};
export type TEsterilizacaoExternaSelect = TSelect<TEsterilizacaoExternaFields>;
export type TEsterilizacaoExternaWhere = TWhere<TEsterilizacaoExternaFields>;
export type TEsterilizacaoExternaOrder = TOrder<TEsterilizacaoExternaFields>;

export type TEsterilizacaoExternaSchema = () => Promise<TFieldClient[]>;
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
}) => Promise<TEsterilizacaoExterna>;
export type TEsterilizacaoExternaUpdate = (args: {
  id: TEsterilizacaoExternaIds;
  data: TEsterilizacaoExterna;
}) => Promise<TEsterilizacaoExterna>;
export type TEsterilizacaoExternaDel = (args: {
  id: TEsterilizacaoExternaIds;
}) => Promise<number>;

export type TEsterilizacaoExternaRpc = {
  query: {
    schema: TEsterilizacaoExternaSchema;
    clear: TEsterilizacaoExternaClear;
    list: TEsterilizacaoExternaList;
    read: TEsterilizacaoExternaRead;
    schemaDiario(): Promise<TFieldClient[]>;
    schemaMensal(): Promise<TFieldClient[]>;
    schemaProduto(): Promise<TFieldClient[]>;
    schemaModelo(): Promise<TFieldClient[]>;
    diario(args: { inicio: string; fim: string }): Promise<any[]>;
    mensal(args: { mes: string }): Promise<any[]>;
    modelo(args: { data: string; produto: string }): Promise<any[]>;
    produto(args: { data: string }): Promise<any[]>;
  };
  mutation: {
    create: TEsterilizacaoExternaCreate;
    update: TEsterilizacaoExternaUpdate;
    del: TEsterilizacaoExternaDel;
  };
};
