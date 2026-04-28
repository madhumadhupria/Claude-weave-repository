/**
 * Text Component
 * Base text element with semantic styling
 */

import React from 'react'
import styled from 'styled-components'

const TextElement = styled.span<{ as?: string; variant?: 'body' | 'caption' | 'label' }>`
  font-family: ${props => {
    if (props.variant === 'label') {
      return props.theme.tokens.typography.fonts.artifaktElement
    }
    return props.theme.tokens.typography.fonts.body
  }};
  font-size: ${props => {
    if (props.variant === 'caption') {
      return props.theme.tokens.typography.sizes.xs
    }
    if (props.variant === 'label') {
      return props.theme.tokens.typography.sizes.fixed.m
    }
    return props.theme.tokens.typography.sizes.md
  }};
  font-weight: ${props => {
    if (props.variant === 'label') {
      return props.theme.tokens.typography.weights.medium
    }
    return props.theme.tokens.typography.weights.normal
  }};
  color: ${props => props.theme.tokens.colors.text.default};
  line-height: 1.5;
  margin: 0;
`

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: string
  variant?: 'body' | 'caption' | 'label'
  children: React.ReactNode
  className?: string
  dataNodeId?: string
}

export const Text: React.FC<TextProps> = ({
  as,
  variant = 'body',
  children,
  className,
  dataNodeId,
  ...props
}) => {
  return (
    <TextElement
      as={as as any}
      variant={variant}
      className={className}
      data-node-id={dataNodeId}
      {...props}
    >
      {children}
    </TextElement>
  )
}
