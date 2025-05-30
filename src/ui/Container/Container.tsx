import React from 'react'
import './Container.scss'

export interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  className?: string
  children: React.ReactNode
}

export const Container = ({ 
  size = '2xl', // Changed default from 'xl' to '2xl' for better screen utilization
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
