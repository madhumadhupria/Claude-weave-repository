/**
 * Badge Component
 * Visual indicator that communicates status and draws attention
 */

import React from 'react'
import styled from 'styled-components'

const BadgeRoot = styled.div<{ variant?: 'status' | 'default' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${props => props.theme.tokens.sizes.dataDisplay.status.container.text.height};
  padding: 0 ${props => props.theme.tokens.spacing.fixed.m};
  border-radius: 1000px;
  background-color: ${props => {
    if (props.variant === 'status') {
      return props.theme.tokens.colors.background.feedback.status.new.light
    }
    return props.theme.tokens.colors.background.surface[100]
  }};
  border: ${props => props.theme.tokens.borderWidth.fixed.s} solid
    ${props => {
      if (props.variant === 'status') {
        return props.theme.tokens.colors.border.feedback.status.new.light
      }
      return props.theme.tokens.colors.border.light
    }};
`

const BadgeLabel = styled.p`
  font-family: ${props => props.theme.tokens.typography.fonts.artifaktElement};
  font-size: ${props => props.theme.tokens.typography.sizes.fixed.m};
  font-weight: ${props => props.theme.tokens.typography.weights.bold};
  line-height: ${props => props.theme.tokens.typography.lineHeights[16]};
  color: ${props => props.theme.tokens.colors.feedback.status.new};
  margin: 0;
  white-space: nowrap;
`

interface BadgeProps {
  children: React.ReactNode
  variant?: 'status' | 'default'
  className?: string
  dataNodeId?: string
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className,
  dataNodeId,
}) => {
  return (
    <BadgeRoot variant={variant} className={className} data-node-id={dataNodeId}>
      <BadgeLabel>{children}</BadgeLabel>
    </BadgeRoot>
  )
}
