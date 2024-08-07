import PropTypes from 'prop-types'
import { Form as RACForm } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'

export function Form(props) {
  return (
    <RACForm
      {...props}
      className={twMerge('flex flex-col gap-4', props.className)}
    />
  )
}

Form.propTypes = {
  className: PropTypes.string,
}
