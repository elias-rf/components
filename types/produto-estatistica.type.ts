import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TProdutoEstatisticaPk = {
  filial_id?: number;
  ano?: number;
  mes?: number;
  produto_plano_id?: string;
};
export type TProdutoEstatisticaCol = {
  inicial?: number;
  entrada?: number;
  saida?: number;
  ajuste?: number;
  quantidade_compra?: number;
  quantidade_medio?: number;
  quantidade_venda?: number;
  valor_custo?: number;
  valor_dedio?: number;
  valor_vendas?: number;
  valor_custo_medio?: number;
  valor_venda?: number;
  valor_atacado?: number;
  inicial_psico?: number;
};
export type TProdutoEstatistica =
  | TProdutoEstatisticaPk
  | TProdutoEstatisticaCol;

export type TProdutoEstatisticaFields =
  | keyof Required<TProdutoEstatisticaPk>
  | keyof Required<TProdutoEstatisticaCol>;

export type TProdutoEstatisticaIds = {
  [pk in keyof Required<TProdutoEstatisticaPk>]: any;
};
export type TProdutoEstatisticaSelect = TSelect<TProdutoEstatisticaFields>;
export type TProdutoEstatisticaWhere = TWhere<TProdutoEstatisticaFields>;
export type TProdutoEstatisticaOrder = TOrder<TProdutoEstatisticaFields>;

export type TProdutoEstatisticaSchema = () => Promise<TFieldClient[]>;
export type TProdutoEstatisticaClear = () => Promise<TProdutoEstatistica>;
export type TProdutoEstatisticaList = (args: {
  where?: TWhere<TProdutoEstatisticaFields>[];
  order?: TOrder<TProdutoEstatisticaFields>[];
  limit?: number;
  select?: TSelect<TProdutoEstatisticaFields>;
}) => Promise<TProdutoEstatistica[]>;
export type TProdutoEstatisticaRead = (args: {
  id: TProdutoEstatisticaIds;
  select?: TSelect<TProdutoEstatisticaFields>;
}) => Promise<TProdutoEstatistica>;

export type TProdutoEstatisticaCreate = (args: {
  data: TProdutoEstatistica;
}) => Promise<TProdutoEstatistica>;
export type TProdutoEstatisticaUpdate = (args: {
  id: TProdutoEstatisticaIds;
  data: TProdutoEstatistica;
}) => Promise<TProdutoEstatistica>;
export type TProdutoEstatisticaDel = (args: {
  id: TProdutoEstatisticaIds;
}) => Promise<number>;

export type TProdutoEstatisticaRpc = {
  query: {
    schema: TProdutoEstatisticaSchema;
    clear: TProdutoEstatisticaClear;
    list: TProdutoEstatisticaList;
    read: TProdutoEstatisticaRead;
  };
  mutation: {
    create: TProdutoEstatisticaCreate;
    update: TProdutoEstatisticaUpdate;
    del: TProdutoEstatisticaDel;
    increment({
      id,
      quantidade,
    }: {
      id: TProdutoEstatisticaIds;
      quantidade: number;
    }): Promise<TProdutoEstatistica>;
  };
};
