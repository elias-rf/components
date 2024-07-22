import PropTypes from 'prop-types'
import { createContext } from 'react'
import { TagGroup as AriaTagGroup, TagList, Text } from 'react-aria-components'
import { twMerge } from 'tailwind-merge'
import { Description } from './description.jsx'
import { Label } from './label.jsx'

/** type Color = keyof typeof colors */

export const ColorContext = createContext('gray')

// export interface TagGroupProps<T> extends Omit<AriaTagGroupProps, 'children'>, Pick<TagListProps<T>, 'items' | 'children' | 'renderEmptyState'> {
//   color?: Color;
//   label?: string;
//   description?: string;
//   errorMessage?: string;
// }

// export interface TagProps extends AriaTagProps {
//   color?: Color
// }

export function TagGroup({
  label,
  description,
  errorMessage,
  items,
  children,
  renderEmptyState,
  ...props
}) {
  return (
    <AriaTagGroup
      {...props}
      className={twMerge('flex flex-col gap-1', props.className)}
    >
      <Label>{label}</Label>
      <ColorContext.Provider value={props.color || 'gray'}>
        <TagList
          items={items}
          renderEmptyState={renderEmptyState}
          className="flex flex-wrap gap-1"
        >
          {children}
        </TagList>
      </ColorContext.Provider>
      {description && <Description>{description}</Description>}
      {errorMessage && (
        <Text
          slot="errorMessage"
          className="text-sm text-red-600"
        >
          {errorMessage}
        </Text>
      )}
    </AriaTagGroup>
  )
}

TagGroup.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
  errorMessage: PropTypes.string,
  items: PropTypes.array,
  children: PropTypes.node,
  className: PropTypes.string,
  renderEmptyState: PropTypes.node,
  color: PropTypes.string,
}
