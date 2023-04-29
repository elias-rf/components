import { TFieldDef, TOrder, TSelect, TTableDef, TWhere } from "@mono/types";
import { TConnection } from "../connections";

export interface TEsterilizacaoInternaPk {
  esterilizacao_interna_id?: number;
}
export interface TEsterilizacaoInterna extends TEsterilizacaoInternaPk {
  data_envio?: string;
  eh_fechado?: number;
  resultado?: string;
  usuario_id_resultado?: number;
  observacao?: string;
  data_fechamento?: string;
  usuario_id_fechamento?: number;
  data_autoclave?: string;
}

export type TEsterilizacaoInternaFields = keyof Required<TEsterilizacaoInterna>;

export type TEsterilizacaoInternaIds = {
  [pk in keyof Required<TEsterilizacaoInternaPk>]: any;
};
export type TEsterilizacaoInternaSelect = TSelect<TEsterilizacaoInternaFields>;
export type TEsterilizacaoInternaWhere = TWhere<TEsterilizacaoInternaFields>;
export type TEsterilizacaoInternaOrder = TOrder<TEsterilizacaoInternaFields>;

export type TEsterilizacaoInternaSchema = () => Promise<TFieldDef[]>;
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
  select?: TSelect<TEsterilizacaoInternaFields>;
}) => Promise<TEsterilizacaoInterna>;
export type TEsterilizacaoInternaUpdate = (args: {
  id: TEsterilizacaoInternaIds;
  data: TEsterilizacaoInterna;
  select?: TSelect<TEsterilizacaoInternaFields>;
}) => Promise<TEsterilizacaoInterna>;
export type TEsterilizacaoInternaDel = (args: {
  id: TEsterilizacaoInternaIds;
}) => Promise<number>;

export type TEsterilizacaoInternaModel = {
  connection: TConnection;
  table: TTableDef;
  query: {
    list: TEsterilizacaoInternaList;
    read: TEsterilizacaoInternaRead;
    diario(args: {
      inicio: string;
      fim: string;
    }): Promise<{ dia: string; dia_semana: string; quantidade: number }[]>;
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