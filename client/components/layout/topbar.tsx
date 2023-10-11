export const Topbar = ({ onClick }: { onClick: (to: string) => void }) => {
  return (
    <div
      className="font-2xl"
      onClick={() => onClick('/')}
    >
      Intranet Visiontech
    </div>
  )
}
