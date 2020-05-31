import { useContext } from 'react'
import UserContext from '../utils/UserContext'

const useUserContext = () => {
  const userContext = useContext(UserContext)
  const [user, setUser] = userContext
  return [user, setUser]
}

export default useUserContext
