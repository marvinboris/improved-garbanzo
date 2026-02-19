'use client'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  href?: string
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

export default function Button({ children, variant = 'primary', href, className = '', onClick, type = 'button' }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300'
  
  const variants = {
    primary: 'bg-eco text-white hover:bg-eco-dark hover:shadow-lg hover:scale-105',
    secondary: 'bg-white text-eco border-2 border-eco hover:bg-eco hover:text-white',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-eco'
  }

  const styles = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  )
}
