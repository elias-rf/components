import { TTableDef } from "@/types/model";

export const ConfiguracaoNFeSe: TTableDef = {
  database: "plano",
  table: "ConfiguracaoNFeSe",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "ConfiguracaoNFeSe_id",
      typeField: "float",

      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "VersaoXML",
      label: "VersaoXML",
      name: "VersaoXML",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Ambiente",
      label: "Ambiente",
      name: "Ambiente",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CaminhoNfeSe",
      label: "CaminhoNfeSe",
      name: "CaminhoNfeSe",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CertificadoNfeSe",
      label: "CertificadoNfeSe",
      name: "CertificadoNfeSe",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "UsuarioNfeSe",
      label: "UsuarioNfeSe",
      name: "UsuarioNfeSe",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SenhaNfeSe",
      label: "SenhaNfeSe",
      name: "SenhaNfeSe",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ProxyNfeSe",
      label: "ProxyNfeSe",
      name: "ProxyNfeSe",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "LicencaNfeSe",
      label: "LicencaNfeSe",
      name: "LicencaNfeSe",
      typeField: "string",

      allowNull: false,
    },
  ],
};
