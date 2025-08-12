import React from 'react'
import { motion } from 'framer-motion'
import { cardScrollReveal } from '../../animations'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './Card.scss'

export interface CardProps {
  variant?: 'default' | 'wine' | 'feature' | 'outline' | 'elevated'
  className?: string
  children: React.ReactNode
  enableScrollAnimation?: boolean
  isStaggerChild?: boolean
  onClick?: () => void
  style?: React.CSSProperties
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

export interface CardContainerProps {
  className?: string
  children: React.ReactNode
  enableStagger?: boolean
}

export const Card = ({ variant = 'default', className = '', children, enableScrollAnimation = true, isStaggerChild = false, onClick, style }: CardProps) => {
  const classes = ['card', `card--${variant}`, className].filter(Boolean).join(' ')
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

  if (enableScrollAnimation) {
    if (isStaggerChild) {
      return (
        <motion.div
          className={classes}
          variants={cardScrollReveal}
          onClick={onClick}
          style={style}
        >
          {children}
        </motion.div>
      )
    }

    return (
      <motion.div
        ref={ref}
        className={classes}
        variants={cardScrollReveal}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        onClick={onClick}
        style={style}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={classes} onClick={onClick} style={style}>
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

export const CardContainer = ({ className = '', children, enableStagger = true }: CardContainerProps) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
  const classes = ['card-container', className].filter(Boolean).join(' ')

  if (enableStagger) {
    return (
      <motion.div
        ref={ref}
        className={classes}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.1,
            },
          },
        }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={classes}>
      {children}
    </div>
  )
}
