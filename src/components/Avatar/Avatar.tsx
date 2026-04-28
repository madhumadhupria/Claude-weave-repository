/**
 * Avatar Component
 * Visual representation of a customer's identity
 */

import React from 'react'
import styled from 'styled-components'

const AvatarRoot = styled.div<{ backgroundColor: string; borderColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 1000px;
  background-color: ${props => props.backgroundColor};
  border: 1px solid ${props => props.borderColor || props.theme.tokens.colors.border.light};
  flex-shrink: 0;
  overflow: hidden;
`

const AvatarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const AvatarText = styled.span<{ textColor: string }>`
  font-family: ${props => props.theme.tokens.typography.fonts.artifaktElement};
  font-size: ${props => props.theme.tokens.typography.sizes.xs};
  font-weight: ${props => props.theme.tokens.typography.weights.bold};
  color: ${props => textColor};
  text-align: center;
`

interface AvatarProps {
  initials: string
  backgroundColor?: string
  textColor?: string
  borderColor?: string
  className?: string
  dataNodeId?: string
  title?: string
}

export const Avatar: React.FC<AvatarProps> = ({
  initials,
  backgroundColor = '#f0f0f0',
  textColor = '#333333',
  borderColor,
  className,
  dataNodeId,
  title,
}) => {
  return (
    <AvatarRoot
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      className={className}
      data-node-id={dataNodeId}
      title={title}
      role="img"
      aria-label={`Avatar for ${initials}`}
    >
      <AvatarContent>
        <AvatarText textColor={textColor}>{initials.slice(0, 2).toUpperCase()}</AvatarText>
      </AvatarContent>
    </AvatarRoot>
  )
}
