import { useRef, useState, useEffect } from 'react'

export default function useWidth() {
  const containerRef = useRef(null)
  const [width, setWidth] = useState(0)
  useEffect(() => {
    containerRef.current && setWidth(containerRef.current.offsetWidth)
  }, [null])
  return { containerRef, width }
}
