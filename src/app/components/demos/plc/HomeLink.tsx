'use client'

// HomeLink component to replace standard links
export function HomeLink({ children, className }: { children: React.ReactNode; className?: string }) {
  const baseUrl = "lawnlogic.agency/portfolio/porcupinelawncare"
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.location.href = `https://${baseUrl}`
  }

  return (
    <a 
      href={`https://${baseUrl}`}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  )
}

// HomeButton component to replace standard buttons
export function HomeButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const baseUrl = "lawnlogic.agency/portfolio/porcupinelawncare"
  
  const handleClick = () => {
    window.location.href = `https://${baseUrl}`
  }

  return (
    <button 
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  )
}