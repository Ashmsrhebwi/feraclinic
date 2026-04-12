import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function Services() {
  const navigate = useNavigate()
  
  useEffect(() => {
    // Redirect to treatments page
    navigate('/treatments', { replace: true })
  }, [navigate])

  return null
}