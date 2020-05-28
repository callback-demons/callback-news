import { useState, useEffect } from 'react'

export default function useLoading() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const initLoading = async () => {
      await setTimeout(() => {
        setIsLoading(false)
      }, 0)
      setIsLoading(true)
    }
    initLoading()
  }, [null])

  return [isLoading, setIsLoading]
}
