import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoNfCeDesconectada extends ModelBase {
  static tableName = "ConfiguracaoNFCeDesconectada";
  static idColumn = [];

  CdEmpresa!: number;
  Estacao!: string;
  DiretorioMovimento!: string;
  DiretorioResultado!: string;
  DiretorioProcNFe!: string;
  RetaguardaServidor!: string;
  RetaguardaUsuario!: string;
  RetaguardaSenha!: string;
  RetaguardaBancoDados!: string;
  IntervaloSincronizacao!: string;
  FgTabelasNotas!: string;
  FgTabelasCaixa!: string;
  FgTabelaPedidos!: string;
  FgTabelasContasReceber!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "Estacao",
      "DiretorioMovimento",
      "DiretorioResultado",
      "DiretorioProcNFe",
      "RetaguardaServidor",
      "RetaguardaUsuario",
      "RetaguardaSenha",
      "RetaguardaBancoDados",
      "IntervaloSincronizacao",
      "FgTabelasNotas",
      "FgTabelasCaixa",
      "FgTabelaPedidos",
      "FgTabelasContasReceber",
      ];
  }
}

ConfiguracaoNfCeDesconectada.knex(connections.plano);

export type TConfiguracaoNfCeDesconectada = ModelObject<ConfiguracaoNfCeDesconectada>;
