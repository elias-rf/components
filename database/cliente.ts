import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class Cliente extends ModelBase {
  static tableName = "CadCli";
  static idColumn = "CdCliente";

  CdCliente!: number;
  RzSocial!: string;
  Endereco!: string;
  Bairro!: string;
  Cidade!: string;
  Uf!: string;
  Cep!: number;
  EMail!: string;
  CGC!: number;
  NumIdentidade!: string;
  InscEst!: string;
  Telefone!: string;
  Fax!: string;
  CxPostal!: number;
  CdVendedor!: number;
  Classificacao!: string;
  Credito!: string;
  CidadeCob!: string;
  BairroCob!: string;
  UfCob!: string;
  CepCob!: number;
  BairroTrab!: string;
  CepTrab!: number;
  CapSocial!: number;
  Cargo1!: string;
  Cargo2!: string;
  Cargo3!: string;
  Cota1!: number;
  Cota2!: number;
  Cota3!: number;
  CartPro!: string;
  CdFilial!: number;
  CGCConjugue!: number;
  DiaLimiteFaturamento!: number;
  DtAdmissao!: Date;
  DtConsulta!: Date;
  DtFundacao!: Date;
  DtMaiorCompra!: Date;
  DtNascConjugue!: Date;
  DtPriCompra!: Date;
  DtResidencia!: Date;
  DtUltAlteracao!: Date;
  DtUltRetorno!: Date;
  EnderecoCob!: string;
  EnderecoRef1!: string;
  EnderecoRef2!: string;
  EnderecoRef3!: string;
  EnderecoTrab!: string;
  EstadoCivil!: string;
  Experiencia!: string;
  FgBloqueio!: string;
  FgContribuinte!: string;
  FgFaturamento!: string;
  FgPropria!: string;
  Fidelidade!: string;
  FoneRec!: string;
  FoneRef1!: string;
  FoneRef2!: string;
  FoneRef3!: string;
  FoneTrabalho!: string;
  Funcao!: string;
  HabPgtoAnt!: string;
  HabPgtoAtu!: string;
  LocalTrabalho!: string;
  NmFantasia!: string;
  NmMae!: string;
  NmPai!: string;
  NomeConjugue!: string;
  NomeRef1!: string;
  NomeRef2!: string;
  NomeRef3!: string;
  NumDepend!: number;
  NumRetorno!: number;
  Observacao!: string;
  OutrosRen!: number;
  Pagto!: number;
  PercComissaoPrazo!: number;
  PercComissaoVista!: number;
  PrazoFaturamento!: number;
  RamalTrab!: string;
  Regiao!: string;
  RenFam!: number;
  Responsavel!: string;
  RG!: string;
  RGConjugue!: string;
  Salario!: number;
  Serasa!: string;
  SerieCartPro!: string;
  Sexo!: string;
  Socio1!: string;
  Socio2!: string;
  Socio3!: string;
  Spc!: string;
  TempoResposta!: number;
  TempoSolucao!: number;
  TipoFaturamento!: string;
  TipoPreco!: string;
  Unidade!: string;
  VideoCheque!: string;
  VlLimite!: number;
  VlMaiorCompra!: number;
  VlPriCompra!: number;
  VlUltCompra!: number;
  CdTipo!: number;
  CdBanco!: number;
  CdAgencia!: number;
  NmCobranca!: string;
  DtNasc!: Date;
  FgAtivo!: string;
  DtUltAtraso!: Date;
  VlMaiorAtraso!: number;
  QtdeAtraso!: number;
  NroDiasAtraso!: number;
  DtUltCompra!: Date;
  TipoCobranca!: string;
  CidadeTrab!: string;
  UfTrab!: string;
  NumMatricula!: number;
  DtAprovacaoCadastro!: Date;
  FgFichaCadastro!: string;
  Nacionalidade!: string;
  Profissao!: string;
  NumCartPlanoSaude!: string;
  LocalTrabalhoConjuge!: string;
  AcrescimoCusto!: string;
  FgBancoHoras!: string;
  Peso!: number;
  Altura!: number;
  Alergia!: string;
  NmContatoCliente!: string;
  CdRamoAtividade!: number;
  CdCidade!: number;
  PercAcrescimoAtacado!: number;
  DiaLimiteFaturamento2!: number;
  DiaVencimento!: number;
  DiaVencimento2!: number;
  VlCredito!: number;
  ModeloArquivo!: string;
  TelefoneAdicional!: string;
  NumCartaoFidelidade!: number;
  NumEndereco!: number;
  NmPaciente!: string;
  DtInicioFidelidade!: Date;
  FgOptanteSimples!: string;
  Complemento!: string;
  FgAmiVida!: string;
  CdConvAssociado!: number;
  CdTipoContrato!: number;
  TempoLib!: number;
  DtValidade!: Date;
  Tolerancia!: string;
  FgBloqueioCadastro!: string;
  CdTecnico!: number;
  EndBuscaReceita!: string;
  FgIsentoICMS!: string;
  CdTipoLiberacao!: number;
  DtMaiorAtraso!: Date;
  PercComissaoVarejoVista!: number;
  PercComissaoAtacadoVista!: number;
  PercComissaoVarejoPrazo!: number;
  PercComissaoAtacadoPrazo!: number;
  NumLicencas!: number;
  CdVendedorExtra!: number;
  DtValidadeLicencaSanitaria!: Date;
  DtValidadeBalanco!: Date;
  CdAlternativo!: string;
  EmailCobranca!: string;
  DtMaiorAcumulo!: Date;
  VlMaiorAcumulo!: number;
  FgObrigaNotaFiscal!: string;
  CdPais!: number;
  NmPais!: string;
  NumContaReceita!: number;
  InscMunicipal!: string;
  EmailProcNfe!: string;
  CdClienteAgrupador!: number;
  CNAE!: string;
  PercCargaTributariaMedia!: number;
  FgConsumidorFinal!: string;
  CPFAssociado!: number;
  InscSuframa!: string;
  CdEnderecoEntregaPadrao!: number;
  LocalEntregaAnterior!: string;
  ProximidadesAnterior!: string;
  FgInformarICMSSTAnterior!: string;
  FgTipoPessoa!: string;
  DtCadastro!: Date;
  Proximidades!: string;
  IdentificacaoEstrangeiro!: string;
  CdTipoVenda!: number;
  FgDifalPorDentro!: string;
  TipoDocumento!: string;
  TipoTributacaoIPI!: string;
  FgClubeCompras!: string;
  IdWeb!: number;
  FgProdutorRural!: string;

  static getFields() {
    return [
      "CdCliente",
      "RzSocial",
      "Endereco",
      "Bairro",
      "Cidade",
      "Uf",
      "Cep",
      "EMail",
      "CGC",
      "NumIdentidade",
      "InscEst",
      "Telefone",
      "Fax",
      "CxPostal",
      "CdVendedor",
      "Classificacao",
      "Credito",
      "CidadeCob",
      "BairroCob",
      "UfCob",
      "CepCob",
      "BairroTrab",
      "CepTrab",
      "CapSocial",
      "Cargo1",
      "Cargo2",
      "Cargo3",
      "Cota1",
      "Cota2",
      "Cota3",
      "CartPro",
      "CdFilial",
      "CGCConjugue",
      "DiaLimiteFaturamento",
      "DtAdmissao",
      "DtConsulta",
      "DtFundacao",
      "DtMaiorCompra",
      "DtNascConjugue",
      "DtPriCompra",
      "DtResidencia",
      "DtUltAlteracao",
      "DtUltRetorno",
      "EnderecoCob",
      "EnderecoRef1",
      "EnderecoRef2",
      "EnderecoRef3",
      "EnderecoTrab",
      "EstadoCivil",
      "Experiencia",
      "FgBloqueio",
      "FgContribuinte",
      "FgFaturamento",
      "FgPropria",
      "Fidelidade",
      "FoneRec",
      "FoneRef1",
      "FoneRef2",
      "FoneRef3",
      "FoneTrabalho",
      "Funcao",
      "HabPgtoAnt",
      "HabPgtoAtu",
      "LocalTrabalho",
      "NmFantasia",
      "NmMae",
      "NmPai",
      "NomeConjugue",
      "NomeRef1",
      "NomeRef2",
      "NomeRef3",
      "NumDepend",
      "NumRetorno",
      "Observacao",
      "OutrosRen",
      "Pagto",
      "PercComissaoPrazo",
      "PercComissaoVista",
      "PrazoFaturamento",
      "RamalTrab",
      "Regiao",
      "RenFam",
      "Responsavel",
      "RG",
      "RGConjugue",
      "Salario",
      "Serasa",
      "SerieCartPro",
      "Sexo",
      "Socio1",
      "Socio2",
      "Socio3",
      "Spc",
      "TempoResposta",
      "TempoSolucao",
      "TipoFaturamento",
      "TipoPreco",
      "Unidade",
      "VideoCheque",
      "VlLimite",
      "VlMaiorCompra",
      "VlPriCompra",
      "VlUltCompra",
      "CdTipo",
      "CdBanco",
      "CdAgencia",
      "NmCobranca",
      "DtNasc",
      "FgAtivo",
      "DtUltAtraso",
      "VlMaiorAtraso",
      "QtdeAtraso",
      "NroDiasAtraso",
      "DtUltCompra",
      "TipoCobranca",
      "CidadeTrab",
      "UfTrab",
      "NumMatricula",
      "DtAprovacaoCadastro",
      "FgFichaCadastro",
      "Nacionalidade",
      "Profissao",
      "NumCartPlanoSaude",
      "LocalTrabalhoConjuge",
      "AcrescimoCusto",
      "FgBancoHoras",
      "Peso",
      "Altura",
      "Alergia",
      "NmContatoCliente",
      "CdRamoAtividade",
      "CdCidade",
      "PercAcrescimoAtacado",
      "DiaLimiteFaturamento2",
      "DiaVencimento",
      "DiaVencimento2",
      "VlCredito",
      "ModeloArquivo",
      "TelefoneAdicional",
      "NumCartaoFidelidade",
      "NumEndereco",
      "NmPaciente",
      "DtInicioFidelidade",
      "FgOptanteSimples",
      "Complemento",
      "FgAmiVida",
      "CdConvAssociado",
      "CdTipoContrato",
      "TempoLib",
      "DtValidade",
      "Tolerancia",
      "FgBloqueioCadastro",
      "CdTecnico",
      "EndBuscaReceita",
      "FgIsentoICMS",
      "CdTipoLiberacao",
      "DtMaiorAtraso",
      "PercComissaoVarejoVista",
      "PercComissaoAtacadoVista",
      "PercComissaoVarejoPrazo",
      "PercComissaoAtacadoPrazo",
      "NumLicencas",
      "CdVendedorExtra",
      "DtValidadeLicencaSanitaria",
      "DtValidadeBalanco",
      "CdAlternativo",
      "EmailCobranca",
      "DtMaiorAcumulo",
      "VlMaiorAcumulo",
      "FgObrigaNotaFiscal",
      "CdPais",
      "NmPais",
      "NumContaReceita",
      "InscMunicipal",
      "EmailProcNfe",
      "CdClienteAgrupador",
      "CNAE",
      "PercCargaTributariaMedia",
      "FgConsumidorFinal",
      "CPFAssociado",
      "InscSuframa",
      "CdEnderecoEntregaPadrao",
      "LocalEntregaAnterior",
      "ProximidadesAnterior",
      "FgInformarICMSSTAnterior",
      "FgTipoPessoa",
      "DtCadastro",
      "Proximidades",
      "IdentificacaoEstrangeiro",
      "CdTipoVenda",
      "FgDifalPorDentro",
      "TipoDocumento",
      "TipoTributacaoIPI",
      "FgClubeCompras",
      "IdWeb",
      "FgProdutorRural",
    ];
  }
}

Cliente.knex(connections.plano);

export type TCliente = ModelObject<Cliente>;
