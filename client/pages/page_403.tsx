import pg403 from '@/client/assets/images/403.gif'
import { Anchor } from '../components/anchor.js'

export default function Page403() {
  return (
    <div className={'flex h-full w-full items-center justify-center'}>
      <div className={'text-center text-3xl'}>
        Você não possui permissão!{' '}
        <Anchor
          className={'text-blue-500'}
          href="/"
        >
          Voltar ao início
        </Anchor>
        <div>
          <img
            src={pg403}
            width={720}
            height={360}
            alt={'Página não encontrada'}
          />
        </div>
      </div>
    </div>
  )
}
