import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TEsterilizacaoInternaPk = {
  esterilizacao_interna_id?: number;
};
export type TEsterilizacaoInternaCol = {
  data_envio?: string;
  is_fechado?: number;
  resultado?: string;
  usuario_id_resultado?: number;
  observacao?: string;
  data_fechamento?: string;
  usuario_id_fechamento?: number;
  data_autoclave?: string;
};
export type TEsterilizacaoInterna =
  | TEsterilizacaoInternaPk
  | TEsterilizacaoInternaCol;

export type TEsterilizacaoInternaFields =
  | keyof Required<TEsterilizacaoInternaPk>
  | keyof Required<TEsterilizacaoInternaCol>;

export type TEsterilizacaoInternaIds = {
  [pk in keyof Required<TEsterilizacaoInternaPk>]: any;
};
export type TEsterilizacaoInternaSelect = TSelect<TEsterilizacaoInternaFields>;
export type TEsterilizacaoInternaWhere = TWhere<TEsterilizacaoInternaFields>;
export type TEsterilizacaoInternaOrder = TOrder<TEsterilizacaoInternaFields>;

export type TEsterilizacaoInternaSchema = () => Promise<TFieldClient[]>;
export type TEsterilizacaoInternaClear = () => Promise<TEsterilizacaoInterna>;
export type TEsterilizacaoInternaList = (args: {
  where?: TWhere<TEsterilizacaoInternaFields>[];
  order?: TOrder<TEsterilizacaoInternaFields>[];
  limit?: number;
  select?: TSelect<TEsterilizacaoInternaFields>;
}) => Promise<TEsterilizacaoInterna[]>;
export type TEsterilizacaoInternaRead = (args: {
  id: TEsterilizacaoInternaIds;
  select?: TSelect<TEsterilizacaoInternaFields>;
}) => Promise<TEsterilizacaoInterna>;

export type TEsterilizacaoInternaCreate = (args: {
  data: TEsterilizacaoInterna;
}) => Promise<TEsterilizacaoInterna>;
export type TEsterilizacaoInternaUpdate = (args: {
  id: TEsterilizacaoInternaIds;
  data: TEsterilizacaoInterna;
}) => Promise<TEsterilizacaoInterna>;
export type TEsterilizacaoInternaDel = (args: {
  id: TEsterilizacaoInternaIds;
}) => Promise<number>;

export type TEsterilizacaoInternaRpc = {
  query: {
    schema: TEsterilizacaoInternaSchema;
    clear: TEsterilizacaoInternaClear;
    list: TEsterilizacaoInternaList;
    read: TEsterilizacaoInternaRead;
    schemaDiario(): Promise<TFieldClient[]>;
    schemaMensal(): Promise<TFieldClient[]>;
    schemaProduto(): Promise<TFieldClient[]>;
    schemaModelo(): Promise<TFieldClient[]>;
    diario(args: {
      inicio: string;
      fim: string;
    }): Promise<{ dia: string; quantidade: number }[]>;
    mensal(args: {
      mes: string;
    }): Promise<{ mes: string; quantidade: number }[]>;
    modelo(args: {
      data: string;
      produto: string;
    }): Promise<{ modelo: string; quantidade: number }[]>;
    produto(args: {
      data: string;
    }): Promise<{ produto: string; quantidade: number }[]>;
  };
  mutation: {
    create: TEsterilizacaoInternaCreate;
    update: TEsterilizacaoInternaUpdate;
    del: TEsterilizacaoInternaDel;
  };
};
