export const capitalize = (letter: string, locale = navigator.language) => {
  const [first, ...rest] = letter
  return first.toLocaleUpperCase(locale) + rest.join('')
}