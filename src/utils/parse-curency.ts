export function parseCurrency(value: string, precision = 2) {
  const numberVal = Number(value);

  if (!precision || !numberVal) {
    return value;
  }

  const cutoffIndex = value.length - precision;
  const initialSubstring = value.substring(0, cutoffIndex);
  const endingSubstring = value.substring(cutoffIndex, value.length);

  return `${initialSubstring || 0}.${
    endingSubstring.length < 2 ? `0${endingSubstring}` : endingSubstring
  }`;
}
