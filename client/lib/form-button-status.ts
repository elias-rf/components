import type { TFormStatus } from '@/types'

/**
 * Generates a response object based on the given form status.
 *
 * @param {TFormStatus} status - The status of the form ('view', 'edit', 'new', or any other value).
 * @return {Object} - The response object with the following properties:
 *   - status: The status of the form.
 *   - editDisabled: A boolean indicating whether the edit button should be shown.
 *   - createDisabled: A boolean indicating whether the create button should be shown.
 *   - delDisabled: A boolean indicating whether the delete button should be shown.
 *   - saveDisabled: A boolean indicating whether the save button should be shown.
 *   - cancelDisabled: A boolean indicating whether the cancel button should be shown.
 */
export function formButtonStatus(status: TFormStatus) {
  const response = {
    editDisabled: true,
    createDisabled: false,
    delDisabled: true,
    saveDisabled: true,
    cancelDisabled: true,
    formDisabled: true,
  }
  switch (status) {
    case 'view':
      response.editDisabled = false
      response.createDisabled = false
      response.delDisabled = false
      break
    case 'edit':
      response.saveDisabled = false
      response.cancelDisabled = false
      response.formDisabled = false
      break
    case 'new':
      response.saveDisabled = false
      response.cancelDisabled = false
      response.formDisabled = false
      break
  }
  return response
}

// [none] = edit, del, save, cancel, form
// [view] = save, cancel, form
// [edit, new] = edit, del
