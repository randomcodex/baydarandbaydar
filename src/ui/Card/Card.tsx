import React from 'react'
import './Card.scss'

export interface CardProps {
  variant?: 'default' | 'wine' | 'feature' | 'outline' | 'elevated'
  className?: string
  children: React.ReactNode
}

export interface CardHeaderProps {
  className?: string
  children: React.ReactNode
}

export interface CardBodyProps {
  className?: string
  children: React.ReactNode
}

export interface CardFooterProps {
  className?: string
  children: React.ReactNode
}

export const Card = ({ variant = 'default', className = '', children }: CardProps) => {
  const classes = ['card', `card--${variant}`, className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export const CardHeader = ({ className = '', children }: CardHeaderProps) => {
  const classes = ['card__header', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export const CardBody = ({ className = '', children }: CardBodyProps) => {
  const classes = ['card__body', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export const CardFooter = ({ className = '', children }: CardFooterProps) => {
  const classes = ['card__footer', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      {children}
    </div>
  )
}
