import { useState } from 'react'

type Value = string

export const useToggleValues = (
  initialValues: Value[] = [],
): [Value[], (value: Value) => void] => {
  const [values, setValues] = useState(initialValues)

  const toggleValue = (value: Value) => {
    setValues((prev) => {
      if (!prev.includes(value)) {
        return [...prev, value]
      }

      return prev.filter((filter) => filter !== value)
    })
  }

  return [values, toggleValue]
}
