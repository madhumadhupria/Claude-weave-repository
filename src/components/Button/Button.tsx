/**
 * Button Component
 * Provides primary way for customers to take action or trigger changes
 */

import React from 'react'
import styled from 'styled-components'

const ButtonRoot = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.tokens.borderRadius.variable.l};
  min-height: 44px;
  padding: ${props => props.theme.tokens.spacing.fixed.xs}
    ${props => props.theme.tokens.spacing.fixed.m};
  background-color: ${props => props.theme.tokens.colors.background.surface[100]};
  border: none;
  border-radius: ${props => props.theme.tokens.borderRadius.variable.m};
  cursor: pointer;
  font-family: ${props => props.theme.tokens.typography.fonts.artifaktElement};
  font-size: ${props => props.theme.tokens.typography.sizes.fixed.m};
  font-weight: ${props => props.theme.tokens.typography.weights.bold};
  color: ${props => props.theme.tokens.colors.text.medium};
  transition: all 0.2s ease-in-out;

  &:hover:not(:disabled) {
    background-color: ${props => props.theme.tokens.colors.background.surface[250]};
  }

  &:active:not(:disabled) {
    background-color: ${props => props.theme.tokens.colors.background.surface[350]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const ButtonIcon = styled.img`
  width: 16px;
  height: 16px;
  display: block;
`

const ButtonLabel = styled.span`
  white-space: nowrap;
`

interface ButtonProps {
  children: React.ReactNode
  icon?: string
  onClick?: () => void
  disabled?: boolean
  className?: string
  dataNodeId?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  onClick,
  disabled = false,
  className,
  dataNodeId,
}) => {
  return (
    <ButtonRoot
      onClick={onClick}
      disabled={disabled}
      className={className}
      data-node-id={dataNodeId}
    >
      {icon && <ButtonIcon src={icon} alt="" />}
      <ButtonLabel>{children}</ButtonLabel>
    </ButtonRoot>
  )
}
