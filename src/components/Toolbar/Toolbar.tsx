/**
 * Toolbar Component
 * Horizontal toolbar for the 3D viewer interface
 */

import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '@components/Button/Button'
import { Divider } from '@components/Divider/Divider'
import { Badge } from '@components/Badge/Badge'
import { IconButton } from '@components/IconButton/IconButton'
import { Avatar } from '@components/Avatar/Avatar'
import { Text } from '@components/Text/Text'

const ToolbarRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${props => props.theme.tokens.spacing.fixed.m};
  background-color: ${props => props.theme.tokens.colors.background.surface[100]};
  backdrop-filter: blur(12.5px);
  border-bottom: 1px solid ${props => props.theme.tokens.colors.border.light};
  box-shadow: 0 0 4px ${props => props.theme.tokens.shadows.low.color};
`

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.tokens.spacing.fixed.m};
  height: 44px;
`

const HubButton = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.tokens.borderRadius.variable.l};
  background-color: ${props => props.theme.tokens.colors.background.generic};
  border-radius: ${props => props.theme.tokens.borderRadius.variable.m};
  padding: ${props => props.theme.tokens.spacing.fixed.xs}
    ${props => props.theme.tokens.spacing.fixed.m};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.tokens.colors.background.surface[250]};
  }
`

const IconImg = styled.img`
  width: 16px;
  height: 16px;
  display: block;
`

const HubLabel = styled(Text)`
  font-weight: ${props => props.theme.tokens.typography.weights.bold};
`

const StatusSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.tokens.shadows.low.blurRadius};
`

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.tokens.spacing.s};
`

const AvatarGroup = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
`

const AvatarWrapper = styled.div`
  margin-right: -8px;
  z-index: ${props => 100 - props.index || 0};

  &:last-child {
    margin-right: 0;
  }
`

interface ToolbarProps {
  onHubClick?: () => void
  onSearchClick?: () => void
  onSettingsClick?: () => void
  onHelpClick?: () => void
  onMoreClick?: () => void
}

export const Toolbar: React.FC<ToolbarProps> = ({
  onHubClick,
  onSearchClick,
  onSettingsClick,
  onHelpClick,
  onMoreClick,
}) => {
  const [modelCount] = useState(1)

  return (
    <ToolbarRoot data-node-id="2045:55761" data-name="Toolbar - horizontal">
      <LeftSection>
        <HubButton onClick={onHubClick} data-node-id="2045:55762">
          <IconImg
            src="https://www.figma.com/api/mcp/asset/46803557-18a1-42a8-8fc0-a464d6479512"
            alt="Autodesk"
          />
          <HubLabel as="span" variant="label">
            Docs
          </HubLabel>
          <Divider orientation="vertical" data-node-id="2045:55768" />
          <StatusSection>
            <Text variant="label">Viewing {modelCount} model</Text>
            <Badge variant="status">V1</Badge>
          </StatusSection>
        </HubButton>
      </LeftSection>

      <RightSection>
        <IconButton
          icon="https://www.figma.com/api/mcp/asset/656df6ac-07af-40d0-b9d8-0029f1ac7bc3"
          onClick={onSearchClick}
          ariaLabel="Search"
        />
        <IconButton
          icon="https://www.figma.com/api/mcp/asset/76603e8f-9a37-47e5-a682-53bb553f6ae1"
          onClick={onSettingsClick}
          ariaLabel="Settings"
        />
        <IconButton
          icon="https://www.figma.com/api/mcp/asset/7ad2923d-48fa-44c4-9d44-e0c0f41ce201"
          onClick={onHelpClick}
          ariaLabel="Help"
        />

        <AvatarGroup>
          <AvatarWrapper index={3}>
            <Avatar
              initials="FL"
              backgroundColor="#faf0ec"
              textColor="#a45229"
              borderColor="rgba(164,82,41,0.2)"
            />
          </AvatarWrapper>
          <AvatarWrapper index={2}>
            <Avatar
              initials="FL"
              backgroundColor="#f8e8e8"
              textColor="#bc2b2b"
              borderColor="rgba(188,43,43,0.2)"
            />
          </AvatarWrapper>
          <AvatarWrapper index={1}>
            <Avatar
              initials="+"
              backgroundColor="rgba(0,0,0,0.05)"
              textColor="#808080"
              borderColor="rgba(0,0,0,0.1)"
            />
          </AvatarWrapper>
        </AvatarGroup>

        <Divider orientation="vertical" />

        <IconButton
          icon="https://www.figma.com/api/mcp/asset/ed483a9f-dfbf-4606-9dce-6503ee585e0b"
          onClick={onMoreClick}
          ariaLabel="More options"
        />
      </RightSection>
    </ToolbarRoot>
  )
}
