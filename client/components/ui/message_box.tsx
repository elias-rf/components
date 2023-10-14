import React from 'react'
import { Button } from './button'
import { Modal } from './modal'

export type TMessageBoxProps = {
  children: React.ReactNode
  title: string
  option1: string
  option2: string
  option3: string
  onClick: (event: 'option1' | 'option2' | 'option3') => void
}

export function MessageBox({
  children,
  title,
  option1,
  option2,
  option3,
  onClick,
}: TMessageBoxProps) {
  return (
    <>
      <Modal
        show={children !== ''}
        title={title}
        closeable={false}
      >
        {/*content*/}
        <div className="flex flex-col w-full bg-white rounded-lg shadow-lg outline-none border-1 focus:outline-none">
          {/*body*/}
          <div className="flex-auto p-2">{children}</div>
          {/*footer*/}
          <div className="flex items-center justify-end p-2 space-x-2">
            {option1 ? (
              <Button onClick={() => onClick('option1')}>{option1}</Button>
            ) : null}
            {option2 ? (
              <Button onClick={() => onClick('option2')}>{option2}</Button>
            ) : null}
            {option3 ? (
              <Button onClick={() => onClick('option3')}>{option3}</Button>
            ) : null}
          </div>
        </div>
      </Modal>
    </>
  )
}
