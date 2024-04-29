use Visiontech

/*
nfSaida_transferenciaDiario
*/
select CONVERT(CHAR(10),[MestreNota].[DtEmissao],120) AS dia, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade
from NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)
where MestreNota.CdFilial = 1 and NatOpe.Nop = 5151 and MestreNota.NotadeComplemento = 'N' and MestreNota.Tipo <> 'C' and MestreNota.DtEmissao between '2022-01-01' and '2022-01-31'
group by MestreNota.DtEmissao, CategPro.NmCategoria
order by MestreNota.DtEmissao desc;