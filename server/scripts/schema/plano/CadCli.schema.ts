import { TTableDef } from "@/types/model";

export const CadCli: TTableDef = {
  database: "plano",
  table: "CadCli",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CadCli_id",
      typeField: "float",

      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "RzSocial",
      label: "RzSocial",
      name: "RzSocial",
      typeField: "string",

    },
    {
      field: "Endereco",
      label: "Endereco",
      name: "Endereco",
      typeField: "string",

    },
    {
      field: "Bairro",
      label: "Bairro",
      name: "Bairro",
      typeField: "string",

    },
    {
      field: "Cidade",
      label: "Cidade",
      name: "Cidade",
      typeField: "string",

    },
    {
      field: "Uf",
      label: "Uf",
      name: "Uf",
      typeField: "string",

    },
    {
      field: "Cep",
      label: "Cep",
      name: "Cep",
      typeField: "float",

      scale: 4,
    },
    {
      field: "EMail",
      label: "EMail",
      name: "EMail",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CGC",
      label: "CGC",
      name: "CGC",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumIdentidade",
      label: "NumIdentidade",
      name: "NumIdentidade",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "InscEst",
      label: "InscEst",
      name: "InscEst",
      typeField: "string",

    },
    {
      field: "Telefone",
      label: "Telefone",
      name: "Telefone",
      typeField: "string",

    },
    {
      field: "Fax",
      label: "Fax",
      name: "Fax",
      typeField: "string",

    },
    {
      field: "CxPostal",
      label: "CxPostal",
      name: "CxPostal",
      typeField: "int",

    },
    {
      field: "CdVendedor",
      label: "CdVendedor",
      name: "CdVendedor",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Classificacao",
      label: "Classificacao",
      name: "Classificacao",
      typeField: "string",

    },
    {
      field: "Credito",
      label: "Credito",
      name: "Credito",
      typeField: "string",

    },
    {
      field: "CidadeCob",
      label: "CidadeCob",
      name: "CidadeCob",
      typeField: "string",

    },
    {
      field: "BairroCob",
      label: "BairroCob",
      name: "BairroCob",
      typeField: "string",

    },
    {
      field: "UfCob",
      label: "UfCob",
      name: "UfCob",
      typeField: "string",

    },
    {
      field: "CepCob",
      label: "CepCob",
      name: "CepCob",
      typeField: "float",

      scale: 4,
    },
    {
      field: "BairroTrab",
      label: "BairroTrab",
      name: "BairroTrab",
      typeField: "string",

    },
    {
      field: "CepTrab",
      label: "CepTrab",
      name: "CepTrab",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CapSocial",
      label: "CapSocial",
      name: "CapSocial",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Cargo1",
      label: "Cargo1",
      name: "Cargo1",
      typeField: "string",

    },
    {
      field: "Cargo2",
      label: "Cargo2",
      name: "Cargo2",
      typeField: "string",

    },
    {
      field: "Cargo3",
      label: "Cargo3",
      name: "Cargo3",
      typeField: "string",

    },
    {
      field: "Cota1",
      label: "Cota1",
      name: "Cota1",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Cota2",
      label: "Cota2",
      name: "Cota2",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Cota3",
      label: "Cota3",
      name: "Cota3",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CartPro",
      label: "CartPro",
      name: "CartPro",
      typeField: "string",

    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

    },
    {
      field: "CGCConjugue",
      label: "CGCConjugue",
      name: "CGCConjugue",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DiaLimiteFaturamento",
      label: "DiaLimiteFaturamento",
      name: "DiaLimiteFaturamento",
      typeField: "int",

    },
    {
      field: "DtAdmissao",
      label: "DtAdmissao",
      name: "DtAdmissao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtConsulta",
      label: "DtConsulta",
      name: "DtConsulta",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtFundacao",
      label: "DtFundacao",
      name: "DtFundacao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtMaiorCompra",
      label: "DtMaiorCompra",
      name: "DtMaiorCompra",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtNascConjugue",
      label: "DtNascConjugue",
      name: "DtNascConjugue",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtPriCompra",
      label: "DtPriCompra",
      name: "DtPriCompra",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtResidencia",
      label: "DtResidencia",
      name: "DtResidencia",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtUltRetorno",
      label: "DtUltRetorno",
      name: "DtUltRetorno",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "EnderecoCob",
      label: "EnderecoCob",
      name: "EnderecoCob",
      typeField: "string",

    },
    {
      field: "EnderecoRef1",
      label: "EnderecoRef1",
      name: "EnderecoRef1",
      typeField: "string",

    },
    {
      field: "EnderecoRef2",
      label: "EnderecoRef2",
      name: "EnderecoRef2",
      typeField: "string",

    },
    {
      field: "EnderecoRef3",
      label: "EnderecoRef3",
      name: "EnderecoRef3",
      typeField: "string",

    },
    {
      field: "EnderecoTrab",
      label: "EnderecoTrab",
      name: "EnderecoTrab",
      typeField: "string",

    },
    {
      field: "EstadoCivil",
      label: "EstadoCivil",
      name: "EstadoCivil",
      typeField: "string",

    },
    {
      field: "Experiencia",
      label: "Experiencia",
      name: "Experiencia",
      typeField: "string",

    },
    {
      field: "FgBloqueio",
      label: "FgBloqueio",
      name: "FgBloqueio",
      typeField: "string",

    },
    {
      field: "FgContribuinte",
      label: "FgContribuinte",
      name: "FgContribuinte",
      typeField: "string",

    },
    {
      field: "FgFaturamento",
      label: "FgFaturamento",
      name: "FgFaturamento",
      typeField: "string",

    },
    {
      field: "FgPropria",
      label: "FgPropria",
      name: "FgPropria",
      typeField: "string",

    },
    {
      field: "Fidelidade",
      label: "Fidelidade",
      name: "Fidelidade",
      typeField: "string",

    },
    {
      field: "FoneRec",
      label: "FoneRec",
      name: "FoneRec",
      typeField: "string",

    },
    {
      field: "FoneRef1",
      label: "FoneRef1",
      name: "FoneRef1",
      typeField: "string",

    },
    {
      field: "FoneRef2",
      label: "FoneRef2",
      name: "FoneRef2",
      typeField: "string",

    },
    {
      field: "FoneRef3",
      label: "FoneRef3",
      name: "FoneRef3",
      typeField: "string",

    },
    {
      field: "FoneTrabalho",
      label: "FoneTrabalho",
      name: "FoneTrabalho",
      typeField: "string",

    },
    {
      field: "Funcao",
      label: "Funcao",
      name: "Funcao",
      typeField: "string",

    },
    {
      field: "HabPgtoAnt",
      label: "HabPgtoAnt",
      name: "HabPgtoAnt",
      typeField: "string",

    },
    {
      field: "HabPgtoAtu",
      label: "HabPgtoAtu",
      name: "HabPgtoAtu",
      typeField: "string",

    },
    {
      field: "LocalTrabalho",
      label: "LocalTrabalho",
      name: "LocalTrabalho",
      typeField: "string",

    },
    {
      field: "NmFantasia",
      label: "NmFantasia",
      name: "NmFantasia",
      typeField: "string",

    },
    {
      field: "NmMae",
      label: "NmMae",
      name: "NmMae",
      typeField: "string",

    },
    {
      field: "NmPai",
      label: "NmPai",
      name: "NmPai",
      typeField: "string",

    },
    {
      field: "NomeConjugue",
      label: "NomeConjugue",
      name: "NomeConjugue",
      typeField: "string",

    },
    {
      field: "NomeRef1",
      label: "NomeRef1",
      name: "NomeRef1",
      typeField: "string",

    },
    {
      field: "NomeRef2",
      label: "NomeRef2",
      name: "NomeRef2",
      typeField: "string",

    },
    {
      field: "NomeRef3",
      label: "NomeRef3",
      name: "NomeRef3",
      typeField: "string",

    },
    {
      field: "NumDepend",
      label: "NumDepend",
      name: "NumDepend",
      typeField: "int",

    },
    {
      field: "NumRetorno",
      label: "NumRetorno",
      name: "NumRetorno",
      typeField: "int",

    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",

    },
    {
      field: "OutrosRen",
      label: "OutrosRen",
      name: "OutrosRen",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Pagto",
      label: "Pagto",
      name: "Pagto",
      typeField: "int",

    },
    {
      field: "PercComissaoPrazo",
      label: "PercComissaoPrazo",
      name: "PercComissaoPrazo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercComissaoVista",
      label: "PercComissaoVista",
      name: "PercComissaoVista",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PrazoFaturamento",
      label: "PrazoFaturamento",
      name: "PrazoFaturamento",
      typeField: "int",

    },
    {
      field: "RamalTrab",
      label: "RamalTrab",
      name: "RamalTrab",
      typeField: "string",

    },
    {
      field: "Regiao",
      label: "Regiao",
      name: "Regiao",
      typeField: "string",

    },
    {
      field: "RenFam",
      label: "RenFam",
      name: "RenFam",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Responsavel",
      label: "Responsavel",
      name: "Responsavel",
      typeField: "string",

    },
    {
      field: "RG",
      label: "RG",
      name: "RG",
      typeField: "string",

    },
    {
      field: "RGConjugue",
      label: "RGConjugue",
      name: "RGConjugue",
      typeField: "string",

    },
    {
      field: "Salario",
      label: "Salario",
      name: "Salario",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Serasa",
      label: "Serasa",
      name: "Serasa",
      typeField: "string",

    },
    {
      field: "SerieCartPro",
      label: "SerieCartPro",
      name: "SerieCartPro",
      typeField: "string",

    },
    {
      field: "Sexo",
      label: "Sexo",
      name: "Sexo",
      typeField: "string",

    },
    {
      field: "Socio1",
      label: "Socio1",
      name: "Socio1",
      typeField: "string",

    },
    {
      field: "Socio2",
      label: "Socio2",
      name: "Socio2",
      typeField: "string",

    },
    {
      field: "Socio3",
      label: "Socio3",
      name: "Socio3",
      typeField: "string",

    },
    {
      field: "Spc",
      label: "Spc",
      name: "Spc",
      typeField: "string",

    },
    {
      field: "TempoResposta",
      label: "TempoResposta",
      name: "TempoResposta",
      typeField: "int",

    },
    {
      field: "TempoSolucao",
      label: "TempoSolucao",
      name: "TempoSolucao",
      typeField: "int",

    },
    {
      field: "TipoFaturamento",
      label: "TipoFaturamento",
      name: "TipoFaturamento",
      typeField: "string",

    },
    {
      field: "TipoPreco",
      label: "TipoPreco",
      name: "TipoPreco",
      typeField: "string",

    },
    {
      field: "Unidade",
      label: "Unidade",
      name: "Unidade",
      typeField: "string",

    },
    {
      field: "VideoCheque",
      label: "VideoCheque",
      name: "VideoCheque",
      typeField: "string",

    },
    {
      field: "VlLimite",
      label: "VlLimite",
      name: "VlLimite",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlMaiorCompra",
      label: "VlMaiorCompra",
      name: "VlMaiorCompra",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlPriCompra",
      label: "VlPriCompra",
      name: "VlPriCompra",
      typeField: "float",

      scale: 4,
    },
    {
      field: "VlUltCompra",
      label: "VlUltCompra",
      name: "VlUltCompra",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdTipo",
      label: "CdTipo",
      name: "CdTipo",
      typeField: "int",

    },
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      typeField: "int",

    },
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "CdAgencia",
      typeField: "int",

    },
    {
      field: "NmCobranca",
      label: "NmCobranca",
      name: "NmCobranca",
      typeField: "string",

    },
    {
      field: "DtNasc",
      label: "DtNasc",
      name: "DtNasc",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",

    },
    {
      field: "DtUltAtraso",
      label: "DtUltAtraso",
      name: "DtUltAtraso",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "VlMaiorAtraso",
      label: "VlMaiorAtraso",
      name: "VlMaiorAtraso",
      typeField: "int",

    },
    {
      field: "QtdeAtraso",
      label: "QtdeAtraso",
      name: "QtdeAtraso",
      typeField: "int",

    },
    {
      field: "NroDiasAtraso",
      label: "NroDiasAtraso",
      name: "NroDiasAtraso",
      typeField: "int",

    },
    {
      field: "DtUltCompra",
      label: "DtUltCompra",
      name: "DtUltCompra",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "TipoCobranca",
      label: "TipoCobranca",
      name: "TipoCobranca",
      typeField: "string",

    },
    {
      field: "CidadeTrab",
      label: "CidadeTrab",
      name: "CidadeTrab",
      typeField: "string",

    },
    {
      field: "UfTrab",
      label: "UfTrab",
      name: "UfTrab",
      typeField: "string",

    },
    {
      field: "NumMatricula",
      label: "NumMatricula",
      name: "NumMatricula",
      typeField: "float",

    },
    {
      field: "DtAprovacaoCadastro",
      label: "DtAprovacaoCadastro",
      name: "DtAprovacaoCadastro",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "FgFichaCadastro",
      label: "FgFichaCadastro",
      name: "FgFichaCadastro",
      typeField: "string",

    },
    {
      field: "Nacionalidade",
      label: "Nacionalidade",
      name: "Nacionalidade",
      typeField: "string",

    },
    {
      field: "Profissao",
      label: "Profissao",
      name: "Profissao",
      typeField: "string",

    },
    {
      field: "NumCartPlanoSaude",
      label: "NumCartPlanoSaude",
      name: "NumCartPlanoSaude",
      typeField: "string",

    },
    {
      field: "LocalTrabalhoConjuge",
      label: "LocalTrabalhoConjuge",
      name: "LocalTrabalhoConjuge",
      typeField: "string",

    },
    {
      field: "AcrescimoCusto",
      label: "AcrescimoCusto",
      name: "AcrescimoCusto",
      typeField: "string",

    },
    {
      field: "FgBancoHoras",
      label: "FgBancoHoras",
      name: "FgBancoHoras",
      typeField: "string",

    },
    {
      field: "Peso",
      label: "Peso",
      name: "Peso",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Altura",
      label: "Altura",
      name: "Altura",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Alergia",
      label: "Alergia",
      name: "Alergia",
      typeField: "string",

    },
    {
      field: "NmContatoCliente",
      label: "NmContatoCliente",
      name: "NmContatoCliente",
      typeField: "string",

    },
    {
      field: "CdRamoAtividade",
      label: "CdRamoAtividade",
      name: "CdRamoAtividade",
      typeField: "int",

    },
    {
      field: "CdCidade",
      label: "CdCidade",
      name: "CdCidade",
      typeField: "int",

    },
    {
      field: "PercAcrescimoAtacado",
      label: "PercAcrescimoAtacado",
      name: "PercAcrescimoAtacado",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DiaLimiteFaturamento2",
      label: "DiaLimiteFaturamento2",
      name: "DiaLimiteFaturamento2",
      typeField: "int",

    },
    {
      field: "DiaVencimento",
      label: "DiaVencimento",
      name: "DiaVencimento",
      typeField: "int",

    },
    {
      field: "DiaVencimento2",
      label: "DiaVencimento2",
      name: "DiaVencimento2",
      typeField: "int",

    },
    {
      field: "VlCredito",
      label: "VlCredito",
      name: "VlCredito",
      typeField: "float",

      scale: 4,
    },
    {
      field: "ModeloArquivo",
      label: "ModeloArquivo",
      name: "ModeloArquivo",
      typeField: "string",

    },
    {
      field: "TelefoneAdicional",
      label: "TelefoneAdicional",
      name: "TelefoneAdicional",
      typeField: "string",

    },
    {
      field: "NumCartaoFidelidade",
      label: "NumCartaoFidelidade",
      name: "NumCartaoFidelidade",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumEndereco",
      label: "NumEndereco",
      name: "NumEndereco",
      typeField: "int",

    },
    {
      field: "NmPaciente",
      label: "NmPaciente",
      name: "NmPaciente",
      typeField: "string",

    },
    {
      field: "DtInicioFidelidade",
      label: "DtInicioFidelidade",
      name: "DtInicioFidelidade",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "FgOptanteSimples",
      label: "FgOptanteSimples",
      name: "FgOptanteSimples",
      typeField: "string",

    },
    {
      field: "Complemento",
      label: "Complemento",
      name: "Complemento",
      typeField: "string",

    },
    {
      field: "FgAmiVida",
      label: "FgAmiVida",
      name: "FgAmiVida",
      typeField: "string",

    },
    {
      field: "CdConvAssociado",
      label: "CdConvAssociado",
      name: "CdConvAssociado",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdTipoContrato",
      label: "CdTipoContrato",
      name: "CdTipoContrato",
      typeField: "int",

    },
    {
      field: "TempoLib",
      label: "TempoLib",
      name: "TempoLib",
      typeField: "int",

    },
    {
      field: "DtValidade",
      label: "DtValidade",
      name: "DtValidade",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Tolerancia",
      label: "Tolerancia",
      name: "Tolerancia",
      typeField: "string",

    },
    {
      field: "FgBloqueioCadastro",
      label: "FgBloqueioCadastro",
      name: "FgBloqueioCadastro",
      typeField: "string",

    },
    {
      field: "CdTecnico",
      label: "CdTecnico",
      name: "CdTecnico",
      typeField: "float",

    },
    {
      field: "EndBuscaReceita",
      label: "EndBuscaReceita",
      name: "EndBuscaReceita",
      typeField: "string",

    },
    {
      field: "FgIsentoICMS",
      label: "FgIsentoICMS",
      name: "FgIsentoICMS",
      typeField: "string",

    },
    {
      field: "CdTipoLiberacao",
      label: "CdTipoLiberacao",
      name: "CdTipoLiberacao",
      typeField: "int",

    },
    {
      field: "DtMaiorAtraso",
      label: "DtMaiorAtraso",
      name: "DtMaiorAtraso",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "PercComissaoVarejoVista",
      label: "PercComissaoVarejoVista",
      name: "PercComissaoVarejoVista",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercComissaoAtacadoVista",
      label: "PercComissaoAtacadoVista",
      name: "PercComissaoAtacadoVista",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercComissaoVarejoPrazo",
      label: "PercComissaoVarejoPrazo",
      name: "PercComissaoVarejoPrazo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "PercComissaoAtacadoPrazo",
      label: "PercComissaoAtacadoPrazo",
      name: "PercComissaoAtacadoPrazo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NumLicencas",
      label: "NumLicencas",
      name: "NumLicencas",
      typeField: "int",

    },
    {
      field: "CdVendedorExtra",
      label: "CdVendedorExtra",
      name: "CdVendedorExtra",
      typeField: "float",

      scale: 4,
    },
    {
      field: "DtValidadeLicencaSanitaria",
      label: "DtValidadeLicencaSanitaria",
      name: "DtValidadeLicencaSanitaria",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "DtValidadeBalanco",
      label: "DtValidadeBalanco",
      name: "DtValidadeBalanco",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "CdAlternativo",
      label: "CdAlternativo",
      name: "CdAlternativo",
      typeField: "string",

    },
    {
      field: "EmailCobranca",
      label: "EmailCobranca",
      name: "EmailCobranca",
      typeField: "string",

    },
    {
      field: "DtMaiorAcumulo",
      label: "DtMaiorAcumulo",
      name: "DtMaiorAcumulo",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "VlMaiorAcumulo",
      label: "VlMaiorAcumulo",
      name: "VlMaiorAcumulo",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgObrigaNotaFiscal",
      label: "FgObrigaNotaFiscal",
      name: "FgObrigaNotaFiscal",
      typeField: "string",

    },
    {
      field: "CdPais",
      label: "CdPais",
      name: "CdPais",
      typeField: "float",

      scale: 4,
    },
    {
      field: "NmPais",
      label: "NmPais",
      name: "NmPais",
      typeField: "string",

    },
    {
      field: "NumContaReceita",
      label: "NumContaReceita",
      name: "NumContaReceita",
      typeField: "int",

    },
    {
      field: "InscMunicipal",
      label: "InscMunicipal",
      name: "InscMunicipal",
      typeField: "string",

    },
    {
      field: "EmailProcNfe",
      label: "EmailProcNfe",
      name: "EmailProcNfe",
      typeField: "string",

    },
    {
      field: "CdClienteAgrupador",
      label: "CdClienteAgrupador",
      name: "CdClienteAgrupador",
      typeField: "int",

    },
    {
      field: "CNAE",
      label: "CNAE",
      name: "CNAE",
      typeField: "string",

    },
    {
      field: "PercCargaTributariaMedia",
      label: "PercCargaTributariaMedia",
      name: "PercCargaTributariaMedia",
      typeField: "float",

      scale: 4,
    },
    {
      field: "FgConsumidorFinal",
      label: "FgConsumidorFinal",
      name: "FgConsumidorFinal",
      typeField: "string",

    },
    {
      field: "CPFAssociado",
      label: "CPFAssociado",
      name: "CPFAssociado",
      typeField: "float",

      scale: 4,
    },
    {
      field: "InscSuframa",
      label: "InscSuframa",
      name: "InscSuframa",
      typeField: "string",

    },
    {
      field: "CdEnderecoEntregaPadrao",
      label: "CdEnderecoEntregaPadrao",
      name: "CdEnderecoEntregaPadrao",
      typeField: "int",

    },
    {
      field: "LocalEntregaAnterior",
      label: "LocalEntregaAnterior",
      name: "LocalEntregaAnterior",
      typeField: "string",

    },
    {
      field: "ProximidadesAnterior",
      label: "ProximidadesAnterior",
      name: "ProximidadesAnterior",
      typeField: "string",

    },
    {
      field: "FgInformarICMSSTAnterior",
      label: "FgInformarICMSSTAnterior",
      name: "FgInformarICMSSTAnterior",
      typeField: "string",

    },
    {
      field: "FgTipoPessoa",
      label: "FgTipoPessoa",
      name: "FgTipoPessoa",
      typeField: "string",

    },
    {
      field: "DtCadastro",
      label: "DtCadastro",
      name: "DtCadastro",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Proximidades",
      label: "Proximidades",
      name: "Proximidades",
      typeField: "string",

    },
    {
      field: "IdentificacaoEstrangeiro",
      label: "IdentificacaoEstrangeiro",
      name: "IdentificacaoEstrangeiro",
      typeField: "string",

    },
    {
      field: "CdTipoVenda",
      label: "CdTipoVenda",
      name: "CdTipoVenda",
      typeField: "int",

    },
    {
      field: "FgDifalPorDentro",
      label: "FgDifalPorDentro",
      name: "FgDifalPorDentro",
      typeField: "string",

    },
    {
      field: "TipoDocumento",
      label: "TipoDocumento",
      name: "TipoDocumento",
      typeField: "string",

    },
    {
      field: "TipoTributacaoIPI",
      label: "TipoTributacaoIPI",
      name: "TipoTributacaoIPI",
      typeField: "string",

    },
    {
      field: "FgClubeCompras",
      label: "FgClubeCompras",
      name: "FgClubeCompras",
      typeField: "string",

    },
  ],
};
