export const compose = (...functions) => {
  return (value) => {
    return functions.reduceRight(
      (currentValue, currentFunction) => currentFunction(currentValue),
      value
    )
  }
}

export const isInfinite = (value) => !isFinite(value)

export const isInvalid = (value) => /^$|^-?\d*\.$|^-$/.test(value)

export const numberify = (value) => Number(value)

export const stringify = (value) => String(value)
