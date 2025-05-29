import React from 'react'
import './Grid.scss'

export interface GridProps {
  columns?: 1 | 2 | 3 | 4 | 5 | 6
  gap?: 'sm' | 'md' | 'lg'
  responsive?: boolean
  className?: string
  children: React.ReactNode
}

export const Grid = ({ 
  columns = 3, 
  gap = 'md', 
  responsive = true,
  className = '', 
  children 
}: GridProps) => {
  const classes = [
    'grid',
    `grid--columns-${columns}`,
    `grid--gap-${gap}`,
    responsive ? 'grid--responsive' : '',
    className
  ].filter(Boolean).join(' ')
  
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export interface GridItemProps {
  span?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  children: React.ReactNode
}

export const GridItem = ({ 
  span = 1,
  className = '', 
  children 
}: GridItemProps) => {
  const classes = [
    'grid__item',
    `grid__item--span-${span}`,
    className
  ].filter(Boolean).join(' ')
  
  return (
    <div className={classes}>
      {children}
    </div>
  )
}
