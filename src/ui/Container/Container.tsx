import React from 'react'
import './Container.scss'

export interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  className?: string
  children: React.ReactNode
}

export const Container = ({ 
  size = 'xl', 
  className = '', 
  children 
}: ContainerProps) => {
  const classes = ['container', `container--${size}`, className].filter(Boolean).join(' ')
  
  return (
    <div className={classes}>
      {children}
    </div>
  )
}
