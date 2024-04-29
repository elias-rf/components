import pg404 from '../assets/images/404.gif'
import { Anchor } from '../components_/anchor.jsx'

export default function Page404() {
  return (
    <div className={'flex h-screen w-screen items-center justify-center'}>
      <div className={'text-center text-3xl'}>
        Não encontrei a página!{' '}
        <Anchor
          className={'text-blue-500'}
          href="/"
        >
          Voltar ao início
        </Anchor>
        <div>
          <img
            src={pg404}
            width={677}
            height={342}
            alt={'Página não encontrada'}
          />
        </div>
      </div>
    </div>
  )
}
