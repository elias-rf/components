import logo from '../assets/images/logo.svg'

export function Home() {
  return (
    <div className="flex items-center justify-center h-full">
      <img
        src={logo}
        alt="logo"
        width={'100%'}
      />
    </div>
  )
}
