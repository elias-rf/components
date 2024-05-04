/**
 * A React component for rendering a badge.
 *
 * @param {BadgeProps} props - The props for the badge component.
 */
export function Badge({
  /**
   * The variant of the badge. Can be 'basic' or 'normal'.
   * @typedef {('basic'|'normal')} variant
   */ variant,
  /**
   * Additional class names to apply to the badge element.
   * @param {string} className - The additional class name(s).
   */
  className,
  ...props
}: BadgeProps) {
  return <div {...props} />;
}