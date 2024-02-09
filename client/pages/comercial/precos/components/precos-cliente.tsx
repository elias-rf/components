import { inteiro, moeda } from '@/client/lib/text-box-formats.js'
import { cn } from '@/client/lib/utils.js'
import React from 'react'
import { PrecosVendedor, TGrupos } from './precos-vendedor.js'
import { Textbox } from './textbox.js'
import { usePrecosState } from './use-precos.state.js'

const produtos: { grupo: TGrupos; label: string }[] = [
  { grupo: 'hilite', label: 'HiLite' },
  { grupo: 'liteflex', label: 'LiteFlex' },
  { grupo: 'metil', label: 'Metil...' },
  { grupo: 'enlite', label: 'Enlite' },
]

const style = {
  produto: 'px-3 py-2 text-xl font-bold text-left text-white bg-blue-900',
  quantidade:
    'text-xl pr-1 w-32 font-bold text-right bg-blue-100 border-transparent ',
  tabela: 'text-xl pr-1 w-40 text-right bg-yellow-50 border-transparent',
  ofertado:
    'text-xl pr-1 w-40 font-bold text-right bg-yellow-400 border-transparent',
  combo:
    'text-2xl pr-1 w-40 font-bold text-right bg-yellow-400 border-transparent',
}

function Produto({
  produto,
  recalc,
  snap,
}: {
  produto: any
  snap: any
  recalc: (args: any) => void
}) {
  document.title = 'VT - Preços'

  return (
    <React.Fragment key={produto.grupo}>
      <tr className="border border-black">
        <td className={style.produto}>{produto.label}</td>
        <td className="bg-blue-100">
          <Textbox
            className={style.quantidade}
            value={inteiro.format(snap[produto.grupo].quantidade)}
            field={`${produto.grupo}.quantidade`}
            format={inteiro}
            onChange={recalc}
            autoComplete={'off'}
          />
        </td>
        <td className="bg-yellow-50">
          <Textbox
            onDoubleClick={() =>
              recalc({
                field: `${produto.grupo}.tabela`,
                value: moeda.format(snap[produto.grupo].precoPadrao),
              })
            }
            className={style.tabela}
            value={moeda.format(snap[produto.grupo].tabela)}
            field={`${produto.grupo}.tabela`}
            onChange={recalc}
            format={moeda}
            autoComplete={'off'}
          />
        </td>
        <td className="text-xl font-bold bg-yellow-400">
          <Textbox
            onDoubleClick={() =>
              recalc({
                field: `${produto.grupo}.ofertado`,
                value: moeda.format(snap[produto.grupo].precoMinimo),
              })
            }
            className={style.ofertado}
            value={moeda.format(snap[produto.grupo].ofertado)}
            field={`${produto.grupo}.ofertado`}
            onChange={recalc}
            format={moeda}
            autoComplete={'off'}
          />
        </td>
      </tr>
      <tr>
        <td
          colSpan={4}
          className="py-1 border-0 border-t-2 border-gray-400 border-solid"
        />
      </tr>
    </React.Fragment>
  )
}

export function PrecosCliente({ className }: { className?: string }) {
  const [snap, setValue] = usePrecosState() as any

  function recalc({ field, value }: { field: string; value: any }) {
    const [group, item] = field.split('.')
    setValue(group, item, value)
  }

  return (
    <>
      <div className={cn('flex flex-col', className)}>
        <p className="dark:text-gray-100">
          <span className="text-2xl font-bold text-blue-600 ">Combos</span>
          {' >>> Lentes + Metilcelulose + Injetores'}
        </p>
        <p className={'text-lg font-bold dark:text-gray-100'}>
          Descontos por quantidades e pacotes
        </p>
        <div className="p-4 my-2 bg-gray-100 border border-black border-solid w-min">
          <table className="text-right">
            <tbody>
              <tr>
                <td
                  colSpan={2}
                  className="py-1 pr-2"
                >
                  Qt.
                </td>
                <td className="px-2">Tabela</td>
                <td className="px-2 font-bold">Ofertado</td>
                <td
                  rowSpan={11}
                  className="px-2"
                ></td>
                <td
                  className="min-w-[150px] border-2 border-solid border-gray-400 bg-white px-4 text-center align-top font-bold"
                  rowSpan={9}
                >
                  <p className="mt-1 mb-3 text-xl">Combo 1</p>
                  <p className="text-sm">
                    {snap.hilite.quantidade > 0
                      ? 'HiLite'
                      : snap.liteflex.quantidade > 0
                        ? 'LiteFlex'
                        : ''}
                  </p>
                  <p className="text-sm">{'+ Metil'}</p>
                  <p className="text-sm">{'+ Enlite'}</p>
                  <p className="mt-4 text-4xl text-blue-700">
                    {moeda.format(snap.combo1.tabela)}
                  </p>
                  <p className="mt-4 text-lg">x {snap.combo1.quantidade}</p>
                  <p className="mt-2 text-2xl text-blue-700">
                    {moeda.format(snap.combo1.totalTabela)}
                  </p>
                </td>
                <td
                  rowSpan={9}
                  className="px-2"
                ></td>
                <td
                  className="w-96 min-w-[150px] border-2 border-solid border-gray-400 bg-white px-4 text-center align-top font-bold"
                  rowSpan={9}
                >
                  <p className="mt-1 mb-3 text-xl">Combo 2</p>
                  <p className="text-sm">
                    {snap.hilite.quantidade > 0
                      ? 'HiLite'
                      : snap.liteflex.quantidade > 0
                        ? 'LiteFlex'
                        : ''}
                  </p>
                  <p className="text-sm">{'+ Enlite'}</p>
                  <p className="text-sm">
                    <br />
                  </p>
                  <p className="mt-4 text-4xl text-blue-700">
                    {moeda.format(snap.combo2.tabela)}
                  </p>
                  <p className="mt-4 text-lg">x {snap.combo2.quantidade}</p>
                  <p className="mt-2 text-2xl text-blue-700">
                    {moeda.format(snap.combo2.totalTabela)}
                  </p>
                </td>
              </tr>
              {produtos.map((produto) => (
                <Produto
                  key={produto.label}
                  produto={produto}
                  recalc={recalc}
                  snap={snap}
                />
              ))}

              <tr>
                <td
                  colSpan={2}
                  className="py-2 pr-2"
                >
                  Totais
                </td>
                <td className="px-2 font-bold border border-black bg-yellow-50">
                  {moeda.format(snap.total.tabela)}
                </td>
                <td className="px-2 text-xl font-bold text-white bg-yellow-600 border border-black">
                  {moeda.format(snap.total.ofertado)}
                </td>
                <td
                  colSpan={3}
                  className="mt-2 text-2xl font-bold text-center text-blue-700 bg-white border-2 border-gray-400"
                >
                  {moeda.format(
                    snap.combo1.totalTabela + snap.combo2.totalTabela
                  )}
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className="py-2 pr-3"
                >
                  Desconto
                  {' >'}
                </td>
                <td className="px-2 text-xl font-bold text-white line-through bg-gray-600 border border-black">
                  {moeda.format(snap.desconto.ofertado)}
                </td>
                <td
                  colSpan={3}
                  className="px-2 text-xl font-bold text-center text-white line-through bg-gray-600 border border-black"
                >
                  {moeda.format(
                    snap.total.tabela -
                      (snap.combo1.totalTabela + snap.combo2.totalTabela)
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="print:hidden">
          <div className="">
            <div className="px-4 pb-4 my-2 bg-gray-300 border border-black w-min">
              <PrecosVendedor
                dados={snap}
                produtos={produtos}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
