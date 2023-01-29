import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TEmpregadoPk = {
  empregado_id?: number;
};
export type TEmpregadoCol = {
  empresa_id?: number;
  nome?: string;
  identidade?: string;
  funcao?: string;
  afastado?: number;
  setor?: string;
};
export type TEmpregado = TEmpregadoPk | TEmpregadoCol;

export type TEmpregadoFields =
  | keyof Required<TEmpregadoPk>
  | keyof Required<TEmpregadoCol>;

export type TEmpregadoIds = {
  [pk in keyof Required<TEmpregadoPk>]: any;
};
export type TEmpregadoSelect = TSelect<TEmpregadoFields>;
export type TEmpregadoWhere = TWhere<TEmpregadoFields>;
export type TEmpregadoOrder = TOrder<TEmpregadoFields>;

export type TEmpregadoSchema = () => Promise<TFieldClient[]>;
export type TEmpregadoClear = () => Promise<TEmpregado>;
export type TEmpregadoList = (args: {
  where?: TWhere<TEmpregadoFields>[];
  order?: TOrder<TEmpregadoFields>[];
  limit?: number;
  select?: TSelect<TEmpregadoFields>;
}) => Promise<TEmpregado[]>;
export type TEmpregadoRead = (args: {
  id: TEmpregadoIds;
  select?: TSelect<TEmpregadoFields>;
}) => Promise<TEmpregado>;

export type TEmpregadoCreate = (args: {
  data: TEmpregado;
}) => Promise<TEmpregado>;
export type TEmpregadoUpdate = (args: {
  id: TEmpregadoIds;
  data: TEmpregado;
}) => Promise<TEmpregado>;
export type TEmpregadoDel = (args: { id: TEmpregadoIds }) => Promise<number>;

export type TEmpregadoRpc = {
  query: {
    schema: TEmpregadoSchema;
    clear: TEmpregadoClear;
    list: TEmpregadoList;
    read: TEmpregadoRead;
  };
  mutation: {
    create: TEmpregadoCreate;
    update: TEmpregadoUpdate;
    del: TEmpregadoDel;
  };
};
