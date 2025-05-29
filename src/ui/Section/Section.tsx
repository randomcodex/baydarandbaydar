import React from 'react'
import './Section.scss'

export interface SectionProps {
  className?: string
  background?: 'primary' | 'secondary' | 'white' | 'gray' | 'transparent'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
}

export const Section = ({ 
  className = '', 
  background = 'transparent',
  padding = 'lg',
  children 
}: SectionProps) => {
  const classes = [
    'section', 
    `section--bg-${background}`, 
    `section--padding-${padding}`,
    className
  ].filter(Boolean).join(' ')
  
  return (
    <section className={classes}>
      {children}
    </section>
  )
}
