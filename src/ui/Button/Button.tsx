import React from 'react'
import './Button.scss'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  isLoading?: boolean
  children: React.ReactNode
}

export const Button = ({ 
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  children,
  className = '',
  disabled,
  ...props 
}: ButtonProps) => {
  const baseClasses = 'btn'
  const variantClass = `btn--${variant}`
  const sizeClass = `btn--${size}`
  const fullWidthClass = fullWidth ? 'btn--full-width' : ''
  const loadingClass = isLoading ? 'btn--loading' : ''
  const disabledClass = (disabled || isLoading) ? 'btn--disabled' : ''

  const classes = [
    baseClasses,
    variantClass,
    sizeClass,
    fullWidthClass,
    loadingClass,
    disabledClass,
    className
  ].filter(Boolean).join(' ')

  return (
    <button 
      className={classes}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="btn__spinner" />
      ) : children}
    </button>
  )
}
