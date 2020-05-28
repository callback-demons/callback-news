import { useState } from 'react'

const useToggle = (boolean = false) => {
  const [state, setState] = useState(boolean)

  const toggle = () => {
    setState(!state)
  }

  return [
    state,
    toggle,
    setState,
  ]
}

export default useToggle
