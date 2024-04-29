import { Button } from '../../../components/button/button.jsx'

export function Modal({
  show = false,
  title,
  closeable = true,
  children,
  onClose,
}) {
  if (!show) {
    return null
  }
  return (
    <>
      <div
        id="defaultModal"
        tabIndex={-1}
        className="fixed left-0 right-0 top-0 z-50 grid h-[calc(100%-1rem)] max-h-full w-full place-content-center justify-center overflow-y-auto overflow-x-hidden p-4 backdrop-blur md:inset-0"
      >
        <div className="relative w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              {closeable ? (
                <Button
                  color="ghost"
                  onClick={onClose}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </Button>
              ) : null}
            </div>
            {/* <!-- Modal body --> */}
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
