export function PrinterHead({ report, filter, user, date }) {
  return (
    <>
      <div className="print:hidden">Visualize a impressão</div>
      <div className="hidden print:block">
        <div className="text-center text-2xl">{report}</div>
        <div className="text-right">
          <div className="">Usuário: {user}</div>
          <div>Data: {date}</div>
        </div>
        <div>Parâmetros: {filter}</div>
      </div>
    </>
  )
}
