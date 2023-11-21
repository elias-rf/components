import pg404 from '../assets/images/404.gif'
import { Anchor } from '../components/anchor.js'

export default function Page404() {
  return (
    <div className={'flex items-center justify-center w-screen h-screen'}>
      <div className={'text-3xl text-center'}>
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
