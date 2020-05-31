import { createContext } from 'react'

const UserContext = createContext({
  email: 'null',
  token: null,
})

export default UserContext
