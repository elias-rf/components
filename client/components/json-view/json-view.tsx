import DataRender, { StyleProps } from './data-render'

export interface Props {
  data: any
  style?: StyleProps
  shouldExpandNode?: (level: number, value: any, field?: string) => boolean
}

export const defaultStyles: StyleProps = {
  container: 'bg-gray-100 dark:bg-gray-800 text-xs', // styles['container-light'],
  basicChildStyle: 'mx-2 p-0', // styles['basic-element-style'],
  label: 'mr-2 text-gray-400 dark:text-gray-400', // styles['label-light'],
  nullValue: 'text-red-500', // styles['value-null-light'],
  undefinedValue: 'text-red-500', // styles['value-undefined-light'],
  stringValue: 'text-green-800', // styles['value-string-light'],
  booleanValue: 'text-green-500', // styles['value-boolean-light'],
  numberValue: 'text-blue-500', // styles['value-number-light'],
  otherValue: 'text-orange-500', // styles['value-other-light'],
  punctuation: 'text-black', // styles['punctuation-light'],
  collapseIcon: 'text-black', // styles['collapse-icon-light'],
  expandIcon: 'text-black', // styles['expand-icon-light'],
  collapsedContent: 'text-black', // styles['collapsed-content-light'],
}

export const allExpanded = () => true
export const collapseAllNested = (level: number) => level < 1

export const JsonView = ({
  data,
  style = defaultStyles,
  shouldExpandNode = allExpanded,
}: Props) => {
  return (
    <div className={style.container}>
      <DataRender
        value={data}
        style={style}
        lastElement
        level={0}
        shouldExpandNode={shouldExpandNode}
      />
    </div>
  )
}
