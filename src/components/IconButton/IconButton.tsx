/**
 * IconButton Component
 * Button containing only an icon, used where space is limited
 */

import React from 'react'
import styled from 'styled-components'

const IconButtonRoot = styled.button<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${props => props.theme.tokens.sizes.touchTarget.default};
  min-width: ${props => props.theme.tokens.sizes.touchTarget.default};
  padding: ${props => props.theme.tokens.spacing.fixed.xs};
  border: ${props => props.theme.tokens.borderWidth.fixed.s} solid
    ${props => props.theme.tokens.colors.border.transparent};
  background-color: ${props => props.theme.tokens.colors.background.input.secondary};
  border-radius: ${props => props.theme.tokens.borderRadius.variable.m};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  transition: all 0.2s ease-in-out;

  &:hover:not(:disabled) {
    background-color: ${props => props.theme.tokens.colors.background.surface[250]};
  }

  &:active:not(:disabled) {
    background-color: ${props => props.theme.tokens.colors.background.surface[350]};
  }
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
`

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`

interface IconButtonProps {
  icon: string
  onClick?: () => void
  disabled?: boolean
  className?: string
  dataNodeId?: string
  ariaLabel?: string
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  disabled = false,
  className,
  dataNodeId,
  ariaLabel = 'Icon button',
}) => {
  return (
    <IconButtonRoot
      onClick={onClick}
      disabled={disabled}
      className={className}
      data-node-id={dataNodeId}
      aria-label={ariaLabel}
    >
      <IconWrapper>
        <IconImage src={icon} alt={ariaLabel} />
      </IconWrapper>
    </IconButtonRoot>
  )
}
