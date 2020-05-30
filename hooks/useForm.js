import { useState } from 'react'

const useForm = (data = {}) => {
  const [state, setState] = useState(data)

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.id]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Data -->', state)
    return state
  }

  return [
    state,
    handleChange,
    handleSubmit,
  ]
}

export default useForm
