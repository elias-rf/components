export function trimAll(str: string, ch: string) {
  let start = 0;
  let end = str.length;
  const step = ch.length;

  while (start < end && str.substring(start, start + step) === ch)
    start += step;

  while (end > start && str.substring(end - step, end) === ch) end -= step;

  return start > 0 || end < str.length ? str.substring(start, end) : str;
}
