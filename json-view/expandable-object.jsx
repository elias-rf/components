import * as React from 'react'
import DataRender from './data-render.jsx'
import { useBool } from './hooks.mjs'

export function ExpandableObject({
  field,
  value,
  data,
  lastElement,
  openBracket,
  closeBracket,
  level,
  style,
  shouldExpandNode,
}) {
  const shouldExpandNodeCalledRef = React.useRef(false)
  const [expanded, toggleExpanded, setExpanded] = useBool(() =>
    shouldExpandNode(level, value, field)
  )

  React.useEffect(() => {
    if (!shouldExpandNodeCalledRef.current) {
      shouldExpandNodeCalledRef.current = true
    } else {
      setExpanded(shouldExpandNode(level, value, field))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldExpandNode])

  const expanderIconStyle = expanded ? style.collapseIcon : style.expandIcon
  const childLevel = level + 1
  const lastIndex = data.length - 1

  const onKeyDown = (e) => {
    if (e.key === ' ') {
      toggleExpanded()
    }
  }

  return (
    <div className={style.basicChildStyle} role="list">
      <span
        className={expanderIconStyle}
        role="button"
        onClick={toggleExpanded}
        onKeyDown={onKeyDown}
        tabIndex={0}
      />
      {field && <span className={style.label}>{field}:</span>}
      <span className={style.punctuation}>{openBracket}</span>
      {expanded ? (
        <div>
          {data.map((dataElement, index) => (
            <DataRender
              key={dataElement[0] || index}
              field={dataElement[0]}
              value={dataElement[1]}
              style={style}
              lastElement={index === lastIndex}
              level={childLevel}
              shouldExpandNode={shouldExpandNode}
            />
          ))}
        </div>
      ) : (
        <span
          className={style.collapsedContent}
          role="button"
          tabIndex={0}
          onClick={toggleExpanded}
          onKeyDown={onKeyDown}
        />
      )}
      <span className={style.punctuation}>{closeBracket}</span>
      {!lastElement && <span className={style.punctuation}>,</span>}
    </div>
  )
}
