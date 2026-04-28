/**
 * Divider Component
 * Used to separate content inline or in a stack
 */

import React from 'react'
import styled from 'styled-components'

const DividerWrapper = styled.div<{ orientation?: 'vertical' | 'horizontal' }>`
  display: flex;
  align-items: ${props => (props.orientation === 'horizontal' ? 'center' : 'flex-start')};
  justify-content: flex-start;
  border: none;
  background: none;
  padding: 0;
  
  ${props => {
    if (props.orientation === 'vertical') {
      return `
        flex-direction: column;
        height: 50px;
        border-left: 1px solid ${props.theme.tokens.colors.border.light};
        padding-left: 1px;
      `
    }
    return `
      flex-direction: row;
      width: 100%;
      border-top: 1px solid ${props.theme.tokens.colors.border.light};
      padding-top: 1px;
    `
  }}
`

const DividerPlaceholder = styled.div`
  background-color: ${props => props.theme.tokens.colors.brand.pink};
  width: ${props => props.theme.tokens.spacing.xxs};
  height: 100%;
  flex-shrink: 0;
`

interface DividerProps {
  className?: string
  orientation?: 'vertical' | 'horizontal'
  variant?: 'lightweight' | 'standard'
  dataNodeId?: string
}

export const Divider: React.FC<DividerProps> = ({
  className,
  orientation = 'vertical',
  variant = 'lightweight',
  dataNodeId,
}) => {
  return (
    <DividerWrapper
      className={className}
      orientation={orientation}
      data-node-id={dataNodeId}
      role="separator"
      aria-orientation={orientation}
    >
      <DividerPlaceholder data-name="placeholder" />
    </DividerWrapper>
  )
}
