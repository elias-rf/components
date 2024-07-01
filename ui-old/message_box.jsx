import PropTypes from 'prop-types'
import { Button } from '../button/button.jsx'
import { Modal } from './modal/modal.jsx'

/**
 * Renders a modal message box component with optional buttons.
 *
 * @param {Object} props - The properties for the message box.
 * @param {React.ReactNode} props.children - The content of the message box.
 * @param {string} props.title - The title of the message box.
 * @param {string} [props.option1] - The text for the first optional button.
 * @param {string} [props.option2] - The text for the second optional button.
 * @param {string} [props.option3] - The text for the third optional button.
 * @param {function} props.onClick - The function to call when a button is clicked.
 * @return {React.ReactElement} The rendered message box component.
 */
export function MessageBox({
  children,
  title,
  option1,
  option2,
  option3,
  onClick,
}) {
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

MessageBox.propTypes = {
  title: PropTypes.string,
  option1: PropTypes.string,
  option2: PropTypes.string,
  option3: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
}
