import { TEntity } from "@er/types/*";

export const CadCli: TEntity =
  {
  "database": "plano",
  "table": "CadCli",
  "fields": [
    {
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "CadCli_id",
      "type": "float",
      "size": 8,
      "scale": 4,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "RzSocial",
      "label": "RzSocial",
      "name": "RzSocial",
      "type": "string",
      "size": 70
    },
    {
      "field": "Endereco",
      "label": "Endereco",
      "name": "Endereco",
      "type": "string",
      "size": 70
    },
    {
      "field": "Bairro",
      "label": "Bairro",
      "name": "Bairro",
      "type": "string",
      "size": 30
    },
    {
      "field": "Cidade",
      "label": "Cidade",
      "name": "Cidade",
      "type": "string",
      "size": 40
    },
    {
      "field": "Uf",
      "label": "Uf",
      "name": "Uf",
      "type": "string",
      "size": 2
    },
    {
      "field": "Cep",
      "label": "Cep",
      "name": "Cep",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "EMail",
      "label": "EMail",
      "name": "EMail",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "CGC",
      "label": "CGC",
      "name": "CGC",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NumIdentidade",
      "label": "NumIdentidade",
      "name": "NumIdentidade",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "InscEst",
      "label": "InscEst",
      "name": "InscEst",
      "type": "string",
      "size": 18
    },
    {
      "field": "Telefone",
      "label": "Telefone",
      "name": "Telefone",
      "type": "string",
      "size": 20
    },
    {
      "field": "Fax",
      "label": "Fax",
      "name": "Fax",
      "type": "string",
      "size": 20
    },
    {
      "field": "CxPostal",
      "label": "CxPostal",
      "name": "CxPostal",
      "type": "int",
      "size": 4
    },
    {
      "field": "CdVendedor",
      "label": "CdVendedor",
      "name": "CdVendedor",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Classificacao",
      "label": "Classificacao",
      "name": "Classificacao",
      "type": "string",
      "size": 1
    },
    {
      "field": "Credito",
      "label": "Credito",
      "name": "Credito",
      "type": "string",
      "size": 1
    },
    {
      "field": "CidadeCob",
      "label": "CidadeCob",
      "name": "CidadeCob",
      "type": "string",
      "size": 40
    },
    {
      "field": "BairroCob",
      "label": "BairroCob",
      "name": "BairroCob",
      "type": "string",
      "size": 30
    },
    {
      "field": "UfCob",
      "label": "UfCob",
      "name": "UfCob",
      "type": "string",
      "size": 2
    },
    {
      "field": "CepCob",
      "label": "CepCob",
      "name": "CepCob",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "BairroTrab",
      "label": "BairroTrab",
      "name": "BairroTrab",
      "type": "string",
      "size": 30
    },
    {
      "field": "CepTrab",
      "label": "CepTrab",
      "name": "CepTrab",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CapSocial",
      "label": "CapSocial",
      "name": "CapSocial",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Cargo1",
      "label": "Cargo1",
      "name": "Cargo1",
      "type": "string",
      "size": 20
    },
    {
      "field": "Cargo2",
      "label": "Cargo2",
      "name": "Cargo2",
      "type": "string",
      "size": 20
    },
    {
      "field": "Cargo3",
      "label": "Cargo3",
      "name": "Cargo3",
      "type": "string",
      "size": 20
    },
    {
      "field": "Cota1",
      "label": "Cota1",
      "name": "Cota1",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Cota2",
      "label": "Cota2",
      "name": "Cota2",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Cota3",
      "label": "Cota3",
      "name": "Cota3",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CartPro",
      "label": "CartPro",
      "name": "CartPro",
      "type": "string",
      "size": 15
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 2
    },
    {
      "field": "CGCConjugue",
      "label": "CGCConjugue",
      "name": "CGCConjugue",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DiaLimiteFaturamento",
      "label": "DiaLimiteFaturamento",
      "name": "DiaLimiteFaturamento",
      "type": "int",
      "size": 4
    },
    {
      "field": "DtAdmissao",
      "label": "DtAdmissao",
      "name": "DtAdmissao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtConsulta",
      "label": "DtConsulta",
      "name": "DtConsulta",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtFundacao",
      "label": "DtFundacao",
      "name": "DtFundacao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtMaiorCompra",
      "label": "DtMaiorCompra",
      "name": "DtMaiorCompra",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtNascConjugue",
      "label": "DtNascConjugue",
      "name": "DtNascConjugue",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtPriCompra",
      "label": "DtPriCompra",
      "name": "DtPriCompra",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtResidencia",
      "label": "DtResidencia",
      "name": "DtResidencia",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtUltRetorno",
      "label": "DtUltRetorno",
      "name": "DtUltRetorno",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "EnderecoCob",
      "label": "EnderecoCob",
      "name": "EnderecoCob",
      "type": "string",
      "size": 140
    },
    {
      "field": "EnderecoRef1",
      "label": "EnderecoRef1",
      "name": "EnderecoRef1",
      "type": "string",
      "size": 50
    },
    {
      "field": "EnderecoRef2",
      "label": "EnderecoRef2",
      "name": "EnderecoRef2",
      "type": "string",
      "size": 50
    },
    {
      "field": "EnderecoRef3",
      "label": "EnderecoRef3",
      "name": "EnderecoRef3",
      "type": "string",
      "size": 50
    },
    {
      "field": "EnderecoTrab",
      "label": "EnderecoTrab",
      "name": "EnderecoTrab",
      "type": "string",
      "size": 50
    },
    {
      "field": "EstadoCivil",
      "label": "EstadoCivil",
      "name": "EstadoCivil",
      "type": "string",
      "size": 1
    },
    {
      "field": "Experiencia",
      "label": "Experiencia",
      "name": "Experiencia",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgBloqueio",
      "label": "FgBloqueio",
      "name": "FgBloqueio",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgContribuinte",
      "label": "FgContribuinte",
      "name": "FgContribuinte",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgFaturamento",
      "label": "FgFaturamento",
      "name": "FgFaturamento",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgPropria",
      "label": "FgPropria",
      "name": "FgPropria",
      "type": "string",
      "size": 1
    },
    {
      "field": "Fidelidade",
      "label": "Fidelidade",
      "name": "Fidelidade",
      "type": "string",
      "size": 1
    },
    {
      "field": "FoneRec",
      "label": "FoneRec",
      "name": "FoneRec",
      "type": "string",
      "size": 20
    },
    {
      "field": "FoneRef1",
      "label": "FoneRef1",
      "name": "FoneRef1",
      "type": "string",
      "size": 20
    },
    {
      "field": "FoneRef2",
      "label": "FoneRef2",
      "name": "FoneRef2",
      "type": "string",
      "size": 20
    },
    {
      "field": "FoneRef3",
      "label": "FoneRef3",
      "name": "FoneRef3",
      "type": "string",
      "size": 20
    },
    {
      "field": "FoneTrabalho",
      "label": "FoneTrabalho",
      "name": "FoneTrabalho",
      "type": "string",
      "size": 20
    },
    {
      "field": "Funcao",
      "label": "Funcao",
      "name": "Funcao",
      "type": "string",
      "size": 20
    },
    {
      "field": "HabPgtoAnt",
      "label": "HabPgtoAnt",
      "name": "HabPgtoAnt",
      "type": "string",
      "size": 40
    },
    {
      "field": "HabPgtoAtu",
      "label": "HabPgtoAtu",
      "name": "HabPgtoAtu",
      "type": "string",
      "size": 40
    },
    {
      "field": "LocalTrabalho",
      "label": "LocalTrabalho",
      "name": "LocalTrabalho",
      "type": "string",
      "size": 40
    },
    {
      "field": "NmFantasia",
      "label": "NmFantasia",
      "name": "NmFantasia",
      "type": "string",
      "size": 70
    },
    {
      "field": "NmMae",
      "label": "NmMae",
      "name": "NmMae",
      "type": "string",
      "size": 40
    },
    {
      "field": "NmPai",
      "label": "NmPai",
      "name": "NmPai",
      "type": "string",
      "size": 40
    },
    {
      "field": "NomeConjugue",
      "label": "NomeConjugue",
      "name": "NomeConjugue",
      "type": "string",
      "size": 50
    },
    {
      "field": "NomeRef1",
      "label": "NomeRef1",
      "name": "NomeRef1",
      "type": "string",
      "size": 20
    },
    {
      "field": "NomeRef2",
      "label": "NomeRef2",
      "name": "NomeRef2",
      "type": "string",
      "size": 20
    },
    {
      "field": "NomeRef3",
      "label": "NomeRef3",
      "name": "NomeRef3",
      "type": "string",
      "size": 20
    },
    {
      "field": "NumDepend",
      "label": "NumDepend",
      "name": "NumDepend",
      "type": "int",
      "size": 4
    },
    {
      "field": "NumRetorno",
      "label": "NumRetorno",
      "name": "NumRetorno",
      "type": "int",
      "size": 4
    },
    {
      "field": "Observacao",
      "label": "Observacao",
      "name": "Observacao",
      "type": "string",
      "size": 1024
    },
    {
      "field": "OutrosRen",
      "label": "OutrosRen",
      "name": "OutrosRen",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Pagto",
      "label": "Pagto",
      "name": "Pagto",
      "type": "int",
      "size": 4
    },
    {
      "field": "PercComissaoPrazo",
      "label": "PercComissaoPrazo",
      "name": "PercComissaoPrazo",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercComissaoVista",
      "label": "PercComissaoVista",
      "name": "PercComissaoVista",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PrazoFaturamento",
      "label": "PrazoFaturamento",
      "name": "PrazoFaturamento",
      "type": "int",
      "size": 4
    },
    {
      "field": "RamalTrab",
      "label": "RamalTrab",
      "name": "RamalTrab",
      "type": "string",
      "size": 4
    },
    {
      "field": "Regiao",
      "label": "Regiao",
      "name": "Regiao",
      "type": "string",
      "size": 10
    },
    {
      "field": "RenFam",
      "label": "RenFam",
      "name": "RenFam",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Responsavel",
      "label": "Responsavel",
      "name": "Responsavel",
      "type": "string",
      "size": 20
    },
    {
      "field": "RG",
      "label": "RG",
      "name": "RG",
      "type": "string",
      "size": 20
    },
    {
      "field": "RGConjugue",
      "label": "RGConjugue",
      "name": "RGConjugue",
      "type": "string",
      "size": 20
    },
    {
      "field": "Salario",
      "label": "Salario",
      "name": "Salario",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Serasa",
      "label": "Serasa",
      "name": "Serasa",
      "type": "string",
      "size": 1
    },
    {
      "field": "SerieCartPro",
      "label": "SerieCartPro",
      "name": "SerieCartPro",
      "type": "string",
      "size": 15
    },
    {
      "field": "Sexo",
      "label": "Sexo",
      "name": "Sexo",
      "type": "string",
      "size": 1
    },
    {
      "field": "Socio1",
      "label": "Socio1",
      "name": "Socio1",
      "type": "string",
      "size": 40
    },
    {
      "field": "Socio2",
      "label": "Socio2",
      "name": "Socio2",
      "type": "string",
      "size": 40
    },
    {
      "field": "Socio3",
      "label": "Socio3",
      "name": "Socio3",
      "type": "string",
      "size": 40
    },
    {
      "field": "Spc",
      "label": "Spc",
      "name": "Spc",
      "type": "string",
      "size": 1
    },
    {
      "field": "TempoResposta",
      "label": "TempoResposta",
      "name": "TempoResposta",
      "type": "int",
      "size": 4
    },
    {
      "field": "TempoSolucao",
      "label": "TempoSolucao",
      "name": "TempoSolucao",
      "type": "int",
      "size": 4
    },
    {
      "field": "TipoFaturamento",
      "label": "TipoFaturamento",
      "name": "TipoFaturamento",
      "type": "string",
      "size": 1
    },
    {
      "field": "TipoPreco",
      "label": "TipoPreco",
      "name": "TipoPreco",
      "type": "string",
      "size": 1
    },
    {
      "field": "Unidade",
      "label": "Unidade",
      "name": "Unidade",
      "type": "string",
      "size": 40
    },
    {
      "field": "VideoCheque",
      "label": "VideoCheque",
      "name": "VideoCheque",
      "type": "string",
      "size": 1
    },
    {
      "field": "VlLimite",
      "label": "VlLimite",
      "name": "VlLimite",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlMaiorCompra",
      "label": "VlMaiorCompra",
      "name": "VlMaiorCompra",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlPriCompra",
      "label": "VlPriCompra",
      "name": "VlPriCompra",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "VlUltCompra",
      "label": "VlUltCompra",
      "name": "VlUltCompra",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdTipo",
      "label": "CdTipo",
      "name": "CdTipo",
      "type": "int",
      "size": 2
    },
    {
      "field": "CdBanco",
      "label": "CdBanco",
      "name": "CdBanco",
      "type": "int",
      "size": 2
    },
    {
      "field": "CdAgencia",
      "label": "CdAgencia",
      "name": "CdAgencia",
      "type": "int",
      "size": 2
    },
    {
      "field": "NmCobranca",
      "label": "NmCobranca",
      "name": "NmCobranca",
      "type": "string",
      "size": 40
    },
    {
      "field": "DtNasc",
      "label": "DtNasc",
      "name": "DtNasc",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "FgAtivo",
      "label": "FgAtivo",
      "name": "FgAtivo",
      "type": "string",
      "size": 1
    },
    {
      "field": "DtUltAtraso",
      "label": "DtUltAtraso",
      "name": "DtUltAtraso",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "VlMaiorAtraso",
      "label": "VlMaiorAtraso",
      "name": "VlMaiorAtraso",
      "type": "int",
      "size": 2
    },
    {
      "field": "QtdeAtraso",
      "label": "QtdeAtraso",
      "name": "QtdeAtraso",
      "type": "int",
      "size": 2
    },
    {
      "field": "NroDiasAtraso",
      "label": "NroDiasAtraso",
      "name": "NroDiasAtraso",
      "type": "int",
      "size": 2
    },
    {
      "field": "DtUltCompra",
      "label": "DtUltCompra",
      "name": "DtUltCompra",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "TipoCobranca",
      "label": "TipoCobranca",
      "name": "TipoCobranca",
      "type": "string",
      "size": 15
    },
    {
      "field": "CidadeTrab",
      "label": "CidadeTrab",
      "name": "CidadeTrab",
      "type": "string",
      "size": 40
    },
    {
      "field": "UfTrab",
      "label": "UfTrab",
      "name": "UfTrab",
      "type": "string",
      "size": 2
    },
    {
      "field": "NumMatricula",
      "label": "NumMatricula",
      "name": "NumMatricula",
      "type": "float",
      "size": 8
    },
    {
      "field": "DtAprovacaoCadastro",
      "label": "DtAprovacaoCadastro",
      "name": "DtAprovacaoCadastro",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "FgFichaCadastro",
      "label": "FgFichaCadastro",
      "name": "FgFichaCadastro",
      "type": "string",
      "size": 1
    },
    {
      "field": "Nacionalidade",
      "label": "Nacionalidade",
      "name": "Nacionalidade",
      "type": "string",
      "size": 25
    },
    {
      "field": "Profissao",
      "label": "Profissao",
      "name": "Profissao",
      "type": "string",
      "size": 30
    },
    {
      "field": "NumCartPlanoSaude",
      "label": "NumCartPlanoSaude",
      "name": "NumCartPlanoSaude",
      "type": "string",
      "size": 20
    },
    {
      "field": "LocalTrabalhoConjuge",
      "label": "LocalTrabalhoConjuge",
      "name": "LocalTrabalhoConjuge",
      "type": "string",
      "size": 50
    },
    {
      "field": "AcrescimoCusto",
      "label": "AcrescimoCusto",
      "name": "AcrescimoCusto",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgBancoHoras",
      "label": "FgBancoHoras",
      "name": "FgBancoHoras",
      "type": "string",
      "size": 1
    },
    {
      "field": "Peso",
      "label": "Peso",
      "name": "Peso",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Altura",
      "label": "Altura",
      "name": "Altura",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "Alergia",
      "label": "Alergia",
      "name": "Alergia",
      "type": "string",
      "size": 1024
    },
    {
      "field": "NmContatoCliente",
      "label": "NmContatoCliente",
      "name": "NmContatoCliente",
      "type": "string",
      "size": 25
    },
    {
      "field": "CdRamoAtividade",
      "label": "CdRamoAtividade",
      "name": "CdRamoAtividade",
      "type": "int",
      "size": 4
    },
    {
      "field": "CdCidade",
      "label": "CdCidade",
      "name": "CdCidade",
      "type": "int",
      "size": 4
    },
    {
      "field": "PercAcrescimoAtacado",
      "label": "PercAcrescimoAtacado",
      "name": "PercAcrescimoAtacado",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DiaLimiteFaturamento2",
      "label": "DiaLimiteFaturamento2",
      "name": "DiaLimiteFaturamento2",
      "type": "int",
      "size": 4
    },
    {
      "field": "DiaVencimento",
      "label": "DiaVencimento",
      "name": "DiaVencimento",
      "type": "int",
      "size": 4
    },
    {
      "field": "DiaVencimento2",
      "label": "DiaVencimento2",
      "name": "DiaVencimento2",
      "type": "int",
      "size": 4
    },
    {
      "field": "VlCredito",
      "label": "VlCredito",
      "name": "VlCredito",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "ModeloArquivo",
      "label": "ModeloArquivo",
      "name": "ModeloArquivo",
      "type": "string",
      "size": 10
    },
    {
      "field": "TelefoneAdicional",
      "label": "TelefoneAdicional",
      "name": "TelefoneAdicional",
      "type": "string",
      "size": 20
    },
    {
      "field": "NumCartaoFidelidade",
      "label": "NumCartaoFidelidade",
      "name": "NumCartaoFidelidade",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NumEndereco",
      "label": "NumEndereco",
      "name": "NumEndereco",
      "type": "int",
      "size": 4
    },
    {
      "field": "NmPaciente",
      "label": "NmPaciente",
      "name": "NmPaciente",
      "type": "string",
      "size": 40
    },
    {
      "field": "DtInicioFidelidade",
      "label": "DtInicioFidelidade",
      "name": "DtInicioFidelidade",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "FgOptanteSimples",
      "label": "FgOptanteSimples",
      "name": "FgOptanteSimples",
      "type": "string",
      "size": 1
    },
    {
      "field": "Complemento",
      "label": "Complemento",
      "name": "Complemento",
      "type": "string",
      "size": 60
    },
    {
      "field": "FgAmiVida",
      "label": "FgAmiVida",
      "name": "FgAmiVida",
      "type": "string",
      "size": 1
    },
    {
      "field": "CdConvAssociado",
      "label": "CdConvAssociado",
      "name": "CdConvAssociado",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "CdTipoContrato",
      "label": "CdTipoContrato",
      "name": "CdTipoContrato",
      "type": "int",
      "size": 2
    },
    {
      "field": "TempoLib",
      "label": "TempoLib",
      "name": "TempoLib",
      "type": "int",
      "size": 2
    },
    {
      "field": "DtValidade",
      "label": "DtValidade",
      "name": "DtValidade",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Tolerancia",
      "label": "Tolerancia",
      "name": "Tolerancia",
      "type": "string",
      "size": 20
    },
    {
      "field": "FgBloqueioCadastro",
      "label": "FgBloqueioCadastro",
      "name": "FgBloqueioCadastro",
      "type": "string",
      "size": 1
    },
    {
      "field": "CdTecnico",
      "label": "CdTecnico",
      "name": "CdTecnico",
      "type": "float",
      "size": 9
    },
    {
      "field": "EndBuscaReceita",
      "label": "EndBuscaReceita",
      "name": "EndBuscaReceita",
      "type": "string",
      "size": 70
    },
    {
      "field": "FgIsentoICMS",
      "label": "FgIsentoICMS",
      "name": "FgIsentoICMS",
      "type": "string",
      "size": 1
    },
    {
      "field": "CdTipoLiberacao",
      "label": "CdTipoLiberacao",
      "name": "CdTipoLiberacao",
      "type": "int",
      "size": 9
    },
    {
      "field": "DtMaiorAtraso",
      "label": "DtMaiorAtraso",
      "name": "DtMaiorAtraso",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "PercComissaoVarejoVista",
      "label": "PercComissaoVarejoVista",
      "name": "PercComissaoVarejoVista",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercComissaoAtacadoVista",
      "label": "PercComissaoAtacadoVista",
      "name": "PercComissaoAtacadoVista",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercComissaoVarejoPrazo",
      "label": "PercComissaoVarejoPrazo",
      "name": "PercComissaoVarejoPrazo",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "PercComissaoAtacadoPrazo",
      "label": "PercComissaoAtacadoPrazo",
      "name": "PercComissaoAtacadoPrazo",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NumLicencas",
      "label": "NumLicencas",
      "name": "NumLicencas",
      "type": "int",
      "size": 2
    },
    {
      "field": "CdVendedorExtra",
      "label": "CdVendedorExtra",
      "name": "CdVendedorExtra",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "DtValidadeLicencaSanitaria",
      "label": "DtValidadeLicencaSanitaria",
      "name": "DtValidadeLicencaSanitaria",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "DtValidadeBalanco",
      "label": "DtValidadeBalanco",
      "name": "DtValidadeBalanco",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "CdAlternativo",
      "label": "CdAlternativo",
      "name": "CdAlternativo",
      "type": "string",
      "size": 32
    },
    {
      "field": "EmailCobranca",
      "label": "EmailCobranca",
      "name": "EmailCobranca",
      "type": "string",
      "size": 128
    },
    {
      "field": "DtMaiorAcumulo",
      "label": "DtMaiorAcumulo",
      "name": "DtMaiorAcumulo",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "VlMaiorAcumulo",
      "label": "VlMaiorAcumulo",
      "name": "VlMaiorAcumulo",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgObrigaNotaFiscal",
      "label": "FgObrigaNotaFiscal",
      "name": "FgObrigaNotaFiscal",
      "type": "string",
      "size": 1
    },
    {
      "field": "CdPais",
      "label": "CdPais",
      "name": "CdPais",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "NmPais",
      "label": "NmPais",
      "name": "NmPais",
      "type": "string",
      "size": 64
    },
    {
      "field": "NumContaReceita",
      "label": "NumContaReceita",
      "name": "NumContaReceita",
      "type": "int",
      "size": 9
    },
    {
      "field": "InscMunicipal",
      "label": "InscMunicipal",
      "name": "InscMunicipal",
      "type": "string",
      "size": 18
    },
    {
      "field": "EmailProcNfe",
      "label": "EmailProcNfe",
      "name": "EmailProcNfe",
      "type": "string",
      "size": 256
    },
    {
      "field": "CdClienteAgrupador",
      "label": "CdClienteAgrupador",
      "name": "CdClienteAgrupador",
      "type": "int",
      "size": 9
    },
    {
      "field": "CNAE",
      "label": "CNAE",
      "name": "CNAE",
      "type": "string",
      "size": 16
    },
    {
      "field": "PercCargaTributariaMedia",
      "label": "PercCargaTributariaMedia",
      "name": "PercCargaTributariaMedia",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "FgConsumidorFinal",
      "label": "FgConsumidorFinal",
      "name": "FgConsumidorFinal",
      "type": "string",
      "size": 1
    },
    {
      "field": "CPFAssociado",
      "label": "CPFAssociado",
      "name": "CPFAssociado",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "InscSuframa",
      "label": "InscSuframa",
      "name": "InscSuframa",
      "type": "string",
      "size": 16
    },
    {
      "field": "CdEnderecoEntregaPadrao",
      "label": "CdEnderecoEntregaPadrao",
      "name": "CdEnderecoEntregaPadrao",
      "type": "int",
      "size": 5
    },
    {
      "field": "LocalEntregaAnterior",
      "label": "LocalEntregaAnterior",
      "name": "LocalEntregaAnterior",
      "type": "string",
      "size": 80
    },
    {
      "field": "ProximidadesAnterior",
      "label": "ProximidadesAnterior",
      "name": "ProximidadesAnterior",
      "type": "string",
      "size": 80
    },
    {
      "field": "FgInformarICMSSTAnterior",
      "label": "FgInformarICMSSTAnterior",
      "name": "FgInformarICMSSTAnterior",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgTipoPessoa",
      "label": "FgTipoPessoa",
      "name": "FgTipoPessoa",
      "type": "string",
      "size": 1
    },
    {
      "field": "DtCadastro",
      "label": "DtCadastro",
      "name": "DtCadastro",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "Proximidades",
      "label": "Proximidades",
      "name": "Proximidades",
      "type": "string",
      "size": 80
    },
    {
      "field": "IdentificacaoEstrangeiro",
      "label": "IdentificacaoEstrangeiro",
      "name": "IdentificacaoEstrangeiro",
      "type": "string",
      "size": 20
    },
    {
      "field": "CdTipoVenda",
      "label": "CdTipoVenda",
      "name": "CdTipoVenda",
      "type": "int",
      "size": 5
    },
    {
      "field": "FgDifalPorDentro",
      "label": "FgDifalPorDentro",
      "name": "FgDifalPorDentro",
      "type": "string",
      "size": 1
    },
    {
      "field": "TipoDocumento",
      "label": "TipoDocumento",
      "name": "TipoDocumento",
      "type": "string",
      "size": 3
    },
    {
      "field": "TipoTributacaoIPI",
      "label": "TipoTributacaoIPI",
      "name": "TipoTributacaoIPI",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgClubeCompras",
      "label": "FgClubeCompras",
      "name": "FgClubeCompras",
      "type": "string",
      "size": 1
    }
  ]
}
