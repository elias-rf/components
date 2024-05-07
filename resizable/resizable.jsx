import { DragHandleDots2Icon } from '@radix-ui/react-icons'
import * as ResizablePrimitive from 'react-resizable-panels'
import { cn } from '../utils.mjs'

/**
 * @typedef {Object} ResizablePanelGroupProps
 * @extends {ScrollAreaPrimitive.RootProps}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<ResizablePanelGroupProps>}
 */
const ResizablePanelGroup = ({ className, ...props }) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      'flex h-full w-full data-[panel-group-direction=vertical]:flex-col',
      className
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

/**
 * @typedef {Object} ResizableHandleProps
 * @extends {ScrollAreaPrimitive.RootProps}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<ResizableHandleProps>}
 */
const ResizableHandle = ({ withHandle, className, ...props }) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      'relative flex w-px items-center justify-center bg-slate-200 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 dark:bg-slate-800 dark:focus-visible:ring-slate-300 [&[data-panel-group-direction=vertical]>div]:rotate-90',
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex items-center justify-center w-3 h-4 border rounded-sm border-slate-200 bg-slate-200 dark:border-slate-800 dark:bg-slate-800">
        <DragHandleDots2Icon className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizableHandle, ResizablePanel, ResizablePanelGroup }
