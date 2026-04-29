import React from 'react'
import styled from 'styled-components'

// ─── Assets ──────────────────────────────────────────────────────────────────
const imgCanvasGrid    = 'http://localhost:3845/assets/afb929fb25999473977441b9a9a1b7a2e0e8971a.png'
const imgModel         = 'http://localhost:3845/assets/24811da4c398d306ef8c28b225ad0a08e148b835.png'
const imgLogoWrapper   = 'http://localhost:3845/assets/ea15fc87606c41a442d78ba9dce305bf28f8e929.svg'
const imgCaretDown     = 'http://localhost:3845/assets/6f3a7fce614f093ae8f74fe95e783ec9ff383369.svg'
const imgNotification  = 'http://localhost:3845/assets/ea08c78928b1a6755a50ccefe274014424f00880.svg'
const imgHelp          = 'http://localhost:3845/assets/de5661f4aaaf31217fbe42c052ec63fd6a8a6aae.svg'
const imgShare         = 'http://localhost:3845/assets/f196f4ad0b81f0eae42e53afe9984b78ba75b9d3.svg'
const imgSurfaceContainer = 'http://localhost:3845/assets/47c36c4a051d42aa161765962d65f0f4ccd3bcad.svg'
const imgCloseIcon     = 'http://localhost:3845/assets/c703fc632d0d010f0b9f1774e9cfa55905fd4bcd.svg'
const imgNavHamburger  = 'http://localhost:3845/assets/b31de8469ffd5a2b7bc2e830645e9e4b2dfa371d.svg'
const imgNavShare      = 'http://localhost:3845/assets/8adedbfaa49d9dc50d84f1fc37dd55019af0e852.svg'
const imgNavProperties = 'http://localhost:3845/assets/89f8fd44f4a42c98f6800723feee793a57b3eab1.svg'
const imgNavModel      = 'http://localhost:3845/assets/0f4fc983f1e8b035b04ac5c06b7c90482c239596.svg'
const imgNav3DActive1  = 'http://localhost:3845/assets/56d6076075f7ce556f3e1516e3067897a8848392.svg'
const imgNav3DActive2  = 'http://localhost:3845/assets/7ce929fec33e25fb89046d96392c0393743b8c72.svg'
const imgNav3DActiveDot= 'http://localhost:3845/assets/a24999ee969e17abf6989f0aafca65e05f1112ed.svg'
const imgPanelClose    = 'http://localhost:3845/assets/9342b9863ace263a789cdbba6d8e30d83d1754c3.svg'
const imgPanelEdit     = 'http://localhost:3845/assets/dd7e5a3bde349a1a3f0ec75f41d01b248e4837a2.svg'
const imgChevronUp     = 'http://localhost:3845/assets/96a7b4e7fcf5bb674fabbfc61b4e29df756182ec.svg'
const imgAddRule       = 'http://localhost:3845/assets/5803034c428897e5bf2dc59df25c0f027c04fd72.svg'
const imgSearchIcon    = 'http://localhost:3845/assets/eae5c2ef3fa1b5bfcee69c75e651b9cb32f539d2.svg'
const imgEyeIcon       = 'http://localhost:3845/assets/21753c867ed9eed759538b47ed3c1b69436a686c.svg'
const imgTreeCaret     = 'http://localhost:3845/assets/275fe3fa1138015c45c2974468d836585585acba.svg'
const imgTreeThumb1    = 'http://localhost:3845/assets/eae313a48883a46e7a2a60ee806e73a8052191be.png'
const imgTreeThumbA    = 'http://localhost:3845/assets/bfdefc82f198083599c44e204390dbd5751b969a.png'
const imgTreeThumbB    = 'http://localhost:3845/assets/6c2527fb8ce4173c476749a4273dae6562c6b99c.png'
const imgBtnNavigation = 'http://localhost:3845/assets/b6feebe3162844bbf26b17ee7220fa6698db51b8.svg'
const imgBtnCaret      = 'http://localhost:3845/assets/5ad63cda32017a283385d421869dd73fd377b8a3.svg'
const imgBtnAlign      = 'http://localhost:3845/assets/6a077e940c01a8fdbe74bf8f5e849245d6a0e12d.svg'
const imgBtnFit        = 'http://localhost:3845/assets/bbae98b349d4765bfde6b02fb29406befe9c469f.svg'
const imgBtnMarkup     = 'http://localhost:3845/assets/e633be225b8f7c69e35b5b9643dcc9953ed66a2f.svg'
const imgBtnZoom       = 'http://localhost:3845/assets/9bb37a40e618e306dcdddc36f4a1efd949d1d83e.svg'
const imgBtnSection    = 'http://localhost:3845/assets/7f811262c1b9a70c1483e09796385a4c0421bd95.svg'
const imgCutIcon       = 'http://localhost:3845/assets/696b44a46b2c3cc120242c29307d9a1b4883dd20.svg'
const imgCursor        = 'http://localhost:3845/assets/8f60c12d80e4ec380012274e2e873d7e1b6bd0fc.svg'
const imgCube          = 'http://localhost:3845/assets/61329762711a8ebb62a765837de8280ee2671896.svg'
const imgCubeFrame     = 'http://localhost:3845/assets/f13c4eda50cf79a3c3ab079d7737b22c97fcc9d1.svg'

// ─── Weave 3.0 Design Tokens ──────────────────────────────────────────────────
const t = {
  white: '#ffffff',
  borderLight: 'rgba(0,0,0,0.1)',
  borderDividerLight: 'rgba(60,60,60,0.1)',
  borderTransparent: 'rgba(255,255,255,0)',
  borderSelection: 'rgba(0,109,162,0.7)',
  borderStatusNew: 'rgba(0,109,162,0.2)',
  bgSelection: 'rgba(205,234,247,0.6)',
  bgSelected: 'rgba(205,234,247,0.4)',
  bgStatusNewLight: '#e6f5fb',
  bgCanvas: '#f5fafd',
  bgContainer: '#f5f5f5',
  bgInput: 'rgba(0,0,0,0.04)',
  textDefault: '#363636',
  textMedium: '#3c3c3c',
  textDimmed: 'rgba(54,54,54,0.55)',
  textStatusNew: '#006698',
  shadow: '0px 0px 16px 0px rgba(0,0,0,0.1)',
  radiusXL: '16px',
  radiusL: '12px',
  radiusM: '6px',
  radiusS: '4px',
  sp2: '2px',
  sp4: '4px',
  sp6: '6px',
  sp8: '8px',
  sp12: '12px',
  sp16: '16px',
  sp24: '24px',
  font: "'Artifakt Element', 'ArtifaktElement', sans-serif",
  fontSize: '12px',
  fontSizeM: '14px',
  lineHeight: '16px',
  lineHeightM: '20px',
}

// ─── Primitives ───────────────────────────────────────────────────────────────
const Ico16 = styled.img`width:16px;height:16px;display:block;flex-shrink:0;`
const Ico12 = styled.img`width:12px;height:12px;display:block;flex-shrink:0;`

const VDivider = styled.div<{ h?: number | string }>`
  width:1px;
  height:${p => (p.h ? (typeof p.h === 'number' ? `${p.h}px` : p.h) : 'auto')};
  align-self:${p => (p.h ? 'center' : 'stretch')};
  background:${t.borderDividerLight};
  border-radius:10px;flex-shrink:0;
`
const HDivider = styled.div`
  height:1px;width:100%;background:${t.borderLight};
`
const IBtn = styled.button<{ $sel?: boolean }>`
  display:flex;align-items:center;justify-content:center;
  min-width:32px;min-height:32px;padding:${t.sp4};
  border-radius:${t.radiusM};
  border:1px solid ${p => (p.$sel ? t.borderSelection : t.borderTransparent)};
  background:${p => (p.$sel ? t.bgSelected : 'rgba(255,255,255,0)')};
  cursor:pointer;flex-shrink:0;
  &:hover{background:rgba(0,0,0,0.04);}
`

// ─── Global Header ────────────────────────────────────────────────────────────
const GlobalHeader = styled.header`
  display:flex;align-items:center;justify-content:space-between;
  width:100%;height:48px;
  padding:${t.sp4} 0 ${t.sp4} ${t.sp16};
  background:${t.white};
  border-bottom:1px solid ${t.borderLight};
  flex-shrink:0;position:relative;z-index:10;
`
const HeaderLeft = styled.div`
  display:flex;align-items:center;gap:${t.sp8};
  flex:1 0 0;min-width:0;padding-right:${t.sp16};
`
const AppLogo = styled.img`width:32px;height:32px;display:block;flex-shrink:0;`
const AppName = styled.span`
  font-family:${t.font};font-size:${t.fontSizeM};font-weight:700;
  color:${t.textDefault};white-space:nowrap;line-height:${t.lineHeightM};
`
const HdrHDivider = styled.div`
  width:1px;height:16px;background:${t.borderLight};flex-shrink:0;align-self:center;
`
const ModelLabel = styled.span`
  font-family:${t.font};font-size:${t.fontSizeM};font-weight:700;
  color:${t.textDefault};white-space:nowrap;line-height:${t.lineHeightM};
`
const VersionBadge = styled.div`
  display:flex;align-items:center;height:24px;
  padding:0 ${t.sp12};border-radius:1000px;
  background:${t.bgStatusNewLight};border:1px solid ${t.borderStatusNew};
`
const VersionLabel = styled.span`
  font-family:${t.font};font-size:${t.fontSize};font-weight:700;
  color:${t.textStatusNew};white-space:nowrap;line-height:${t.lineHeight};
`

const HeaderRight = styled.div`
  display:flex;align-items:center;gap:${t.sp4};
  flex:1 0 0;min-width:0;justify-content:flex-end;padding-left:${t.sp16};
`
const ServiceCenter = styled.div`display:flex;align-items:center;gap:${t.sp4};`

const AvatarBundle = styled.div`
  display:flex;align-items:center;height:32px;padding-right:${t.sp16};
`
const AvatarSlot = styled.div`
  position:relative;width:44px;height:44px;margin-right:-16px;flex-shrink:0;
`
const SurfaceBg = styled.img`
  position:absolute;inset:0;width:100%;height:100%;display:block;
`
const AvatarCircle = styled.div<{ $bg: string; $bc: string }>`
  position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
  width:32px;height:32px;border-radius:1000px;
  border:1px solid ${p => p.$bc};background:${p => p.$bg};
  display:flex;align-items:center;justify-content:center;
  z-index:2;overflow:hidden;
`
const AvatarText = styled.span<{ $c: string }>`
  font-family:${t.font};font-size:14px;font-weight:700;
  color:${p => p.$c};line-height:1.6;
`
const WindowControls = styled.div`
  display:flex;align-items:center;padding-left:${t.sp16};
`

const Toolbar: React.FC = () => (
  <GlobalHeader data-node-id="2296:15392">
    <HeaderLeft>
      <AppLogo src={imgLogoWrapper} alt="Autodesk" />
      <AppName>Docs</AppName>
      <HdrHDivider />
      <ModelLabel>Viewing 1 model</ModelLabel>
      <VersionBadge><VersionLabel>V1</VersionLabel></VersionBadge>
      <Ico16 src={imgCaretDown} alt="" style={{ transform: 'rotate(180deg)' }} />
    </HeaderLeft>

    <HeaderRight>
      <ServiceCenter>
        <IBtn aria-label="Notifications"><Ico16 src={imgNotification} alt="" /></IBtn>
        <IBtn aria-label="Help"><Ico16 src={imgHelp} alt="" /></IBtn>
        <IBtn aria-label="Share"><Ico16 src={imgShare} alt="" /></IBtn>
      </ServiceCenter>

      <AvatarBundle>
        {/* user04 – green */}
        <AvatarSlot>
          <SurfaceBg src={imgSurfaceContainer} alt="" />
          <AvatarCircle $bg="#edf4e2" $bc="rgba(84,121,25,0.2)">
            <AvatarText $c="#547919">F</AvatarText>
            <AvatarText $c="#547919">L</AvatarText>
          </AvatarCircle>
        </AvatarSlot>
        {/* user06 – teal */}
        <AvatarSlot>
          <SurfaceBg src={imgSurfaceContainer} alt="" />
          <AvatarCircle $bg="#e6f5fb" $bc="rgba(8,111,100,0.2)">
            <AvatarText $c="#086f64">F</AvatarText>
            <AvatarText $c="#086f64">L</AvatarText>
          </AvatarCircle>
        </AvatarSlot>
        {/* user02 – red */}
        <AvatarSlot>
          <SurfaceBg src={imgSurfaceContainer} alt="" />
          <AvatarCircle $bg="#fbdddd" $bc="rgba(128,24,24,0.2)">
            <AvatarText $c="#801818">F</AvatarText>
            <AvatarText $c="#801818">L</AvatarText>
          </AvatarCircle>
        </AvatarSlot>
      </AvatarBundle>

      <WindowControls>
        <IBtn aria-label="Close panel">
          <Ico16 src={imgCloseIcon} alt="" style={{ transform: 'rotate(-90deg)' }} />
        </IBtn>
      </WindowControls>
    </HeaderRight>
  </GlobalHeader>
)

// ─── Left Navigation Panel (icon bar) ─────────────────────────────────────────
const NavPanel = styled.nav`
  position:absolute;left:0;top:0;bottom:0;width:48px;
  background:${t.white};
  border-right:1px solid ${t.borderLight};
  display:flex;flex-direction:column;
  padding:${t.sp8} ${t.sp8} 48px;
  z-index:5;gap:${t.sp12};
  border-bottom-left-radius:${t.radiusXL};
`
const NavGroup = styled.div`display:flex;flex-direction:column;gap:${t.sp4};width:32px;`
const Icon3D = styled.div`position:relative;width:16px;height:16px;`

const NavigationPanel: React.FC = () => (
  <NavPanel data-node-id="2296:15401">
    <NavGroup>
      <IBtn aria-label="Menu"><Ico16 src={imgNavHamburger} alt="" /></IBtn>
      <IBtn aria-label="Share"><Ico16 src={imgNavShare} alt="" /></IBtn>
    </NavGroup>

    <HDivider />

    <NavGroup>
      <IBtn aria-label="Properties"><Ico16 src={imgNavProperties} alt="" /></IBtn>
      <IBtn aria-label="Model"><Ico16 src={imgNavModel} alt="" /></IBtn>
      <IBtn $sel aria-label="3D View">
        <Icon3D>
          <img src={imgNav3DActive2} alt="" style={{ position:'absolute', top:'6.25%', left:'6.25%', right:'6.25%', bottom:'0', width:'87.5%', height:'93.75%' }} />
          <img src={imgNav3DActive1} alt="" style={{ position:'absolute', bottom:'6.39%', right:'6.25%', width:'29.7%', height:'31.11%' }} />
          <img src={imgNav3DActiveDot} alt="" style={{ position:'absolute', bottom:0, right:0, width:6, height:6 }} />
        </Icon3D>
      </IBtn>
    </NavGroup>
  </NavPanel>
)

// ─── Model Browser Panel ──────────────────────────────────────────────────────
const PanelWrap = styled.div`
  position:absolute;left:48px;top:0;bottom:0;width:252px;
  background:${t.white};
  border-right:1px solid rgba(0,0,0,0.05);
  border-bottom:1px solid rgba(0,0,0,0.05);
  display:flex;flex-direction:column;
  overflow:hidden;z-index:4;
`
const PanelHeader = styled.div`
  background:${t.bgContainer};
  display:flex;align-items:center;justify-content:space-between;
  padding:${t.sp4} ${t.sp12} ${t.sp4} ${t.sp16};
  flex-shrink:0;
`
const PanelTitle = styled.p`
  font-family:${t.font};font-size:${t.fontSizeM};font-weight:700;
  color:${t.textDefault};line-height:${t.lineHeightM};flex:1 0 0;
`
const PanelContent = styled.div`
  flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:${t.sp12};
  padding-bottom:${t.sp12};
`
const SectionWrap = styled.div`
  display:flex;flex-direction:column;
`
const SectionHeader = styled.div`
  display:flex;align-items:center;justify-content:flex-end;
  padding:${t.sp4} ${t.sp12} ${t.sp4} ${t.sp16};
  gap:${t.sp4};
`
const SectionLabel = styled.p`
  flex:1 0 0;font-family:${t.font};font-size:${t.fontSizeM};font-weight:700;
  color:${t.textDefault};line-height:${t.lineHeightM};
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
`
const SectionFiltersContent = styled.div`
  display:flex;flex-direction:column;gap:${t.sp12};
  padding:0 ${t.sp16} ${t.sp12};
`
const DropdownGroup = styled.div`display:flex;flex-direction:column;gap:${t.sp4};`
const DropdownLabel = styled.p`
  font-family:${t.font};font-size:${t.fontSize};font-weight:600;
  color:${t.textDefault};line-height:18px;
`
const DropdownInput = styled.div`
  background:${t.bgInput};height:32px;border-radius:${t.radiusM};
  display:flex;align-items:center;padding:0 0 0 ${t.sp12};
  overflow:hidden;
`
const DropdownValue = styled.p<{ $dimmed?: boolean }>`
  flex:1 0 0;font-family:${t.font};font-size:${t.fontSizeM};font-weight:600;
  color:${p => (p.$dimmed ? t.textDimmed : t.textDefault)};
  line-height:${t.lineHeightM};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
`
const DropdownCaret = styled.div`
  width:32px;height:32px;display:flex;align-items:center;justify-content:center;flex-shrink:0;
`
const AddRuleBtn = styled.button`
  display:flex;align-items:center;gap:${t.sp8};height:32px;
  padding:0 ${t.sp16};border-radius:${t.radiusM};
  border:1px solid rgba(0,0,0,0.15);
  background:rgba(255,255,255,0);cursor:pointer;
  font-family:${t.font};font-size:${t.fontSizeM};font-weight:700;
  color:${t.textDefault};white-space:nowrap;
  &:hover{background:rgba(0,0,0,0.04);}
`
const TreeSection = styled.div`
  display:flex;flex-direction:column;gap:${t.sp4};
  padding:0 ${t.sp16};
`
const TreeRow = styled.div<{ $sel?: boolean }>`
  display:flex;align-items:center;height:32px;
  padding-right:${t.sp12};border-radius:${t.radiusM};
  background:${p => (p.$sel ? t.bgSelection : 'transparent')};
  cursor:pointer;
  &:hover{background:${p => (p.$sel ? t.bgSelection : 'rgba(0,0,0,0.04)')};}
`
const TreeIndicator = styled.div`
  width:32px;height:32px;display:flex;align-items:center;justify-content:center;flex-shrink:0;
`
const TreeThumbWrap = styled.div`
  position:relative;width:32px;height:32px;border-radius:4px;
  background:#f5f5f5;border:1px solid ${t.borderLight};overflow:hidden;flex-shrink:0;
`
const TreeContent = styled.div`
  flex:1 0 0;min-width:0;display:flex;flex-direction:column;
  justify-content:center;height:100%;margin-left:${t.sp4};
`
const TreeName = styled.p`
  font-family:${t.font};font-size:${t.fontSize};font-weight:500;
  color:${t.textDefault};line-height:1.2;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
`
const TreeSub = styled.p`
  font-family:${t.font};font-size:10px;
  color:${t.textMedium};line-height:12px;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
`

const Dropdown: React.FC<{ label: string; value: string; placeholder?: boolean }> = ({ label, value, placeholder }) => (
  <DropdownGroup>
    <DropdownLabel>{label}</DropdownLabel>
    <DropdownInput>
      <DropdownValue $dimmed={placeholder}>{value}</DropdownValue>
      <DropdownCaret>
        <Ico12 src={imgBtnCaret} alt="" style={{ transform: 'rotate(180deg)' }} />
      </DropdownCaret>
    </DropdownInput>
  </DropdownGroup>
)

const ModelBrowserPanel: React.FC = () => (
  <PanelWrap data-node-id="2296:15433">
    <PanelHeader>
      <PanelTitle>Model Browser</PanelTitle>
      <IBtn aria-label="Close model browser">
        <Ico16 src={imgPanelClose} alt="" style={{ transform: 'rotate(-90deg)' }} />
      </IBtn>
    </PanelHeader>

    <PanelContent>
      {/* Filters section */}
      <SectionWrap>
        <HDivider />
        <SectionHeader>
          <SectionLabel>Filters</SectionLabel>
          <IBtn aria-label="Edit filters"><Ico16 src={imgPanelEdit} alt="" /></IBtn>
          <IBtn aria-label="Collapse filters"><Ico16 src={imgChevronUp} alt="" /></IBtn>
        </SectionHeader>
        <SectionFiltersContent>
          <Dropdown label="Levels" value="Select levels" placeholder />
          <Dropdown label="Categories" value="stairs" />
          <Dropdown label="Disciplines" value="Select disciplines" placeholder />
          <AddRuleBtn>
            <Ico16 src={imgAddRule} alt="" style={{ transform: 'rotate(-90deg)' }} />
            Add a rule
          </AddRuleBtn>
        </SectionFiltersContent>
      </SectionWrap>

      {/* Model Tree section */}
      <SectionWrap>
        <HDivider />
        <SectionHeader>
          <SectionLabel>Model Tree</SectionLabel>
          <IBtn aria-label="Search"><Ico16 src={imgSearchIcon} alt="" /></IBtn>
          <IBtn aria-label="Toggle visibility"><Ico16 src={imgEyeIcon} alt="" /></IBtn>
          <IBtn aria-label="Collapse tree"><Ico16 src={imgChevronUp} alt="" /></IBtn>
        </SectionHeader>
        <TreeSection>
          <TreeRow>
            <TreeIndicator>
              <Ico16 src={imgTreeCaret} alt="" style={{ transform: 'rotate(90deg)' }} />
            </TreeIndicator>
            <TreeThumbWrap>
              <img src={imgTreeThumb1} alt="" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }} />
              <img src={imgTreeThumbA} alt="" style={{ position:'absolute', height:'140%', left:'-62%', top:'-20%', width:'224%', maxWidth:'none' }} />
            </TreeThumbWrap>
            <TreeContent>
              <TreeName>Urban House 2019a.rvt - 3D MEP Building</TreeName>
              <TreeSub>25 objects</TreeSub>
            </TreeContent>
          </TreeRow>

          <TreeRow>
            <TreeIndicator>
              <Ico16 src={imgTreeCaret} alt="" style={{ transform: 'rotate(90deg)' }} />
            </TreeIndicator>
            <TreeThumbWrap>
              <img src={imgTreeThumb1} alt="" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }} />
              <img src={imgTreeThumbB} alt="" style={{ position:'absolute', height:'140%', left:'-62%', top:'-20%', width:'224%', maxWidth:'none' }} />
            </TreeThumbWrap>
            <TreeContent>
              <TreeName>Urban House 2019a.rvt - 3D MEP Building</TreeName>
              <TreeSub>25 objects</TreeSub>
            </TreeContent>
          </TreeRow>

          <TreeRow $sel>
            <TreeIndicator>
              <Ico16 src={imgTreeCaret} alt="" style={{ transform: 'rotate(90deg)' }} />
            </TreeIndicator>
            <TreeThumbWrap>
              <img src={imgTreeThumb1} alt="" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }} />
            </TreeThumbWrap>
            <TreeContent>
              <TreeName>Railings</TreeName>
              <TreeSub>4 objects</TreeSub>
            </TreeContent>
          </TreeRow>
        </TreeSection>
      </SectionWrap>
    </PanelContent>
  </PanelWrap>
)

// ─── Canvas ───────────────────────────────────────────────────────────────────
const CanvasWrap = styled.div`
  flex:1;position:relative;min-height:0;
  display:flex;align-items:center;justify-content:center;
  overflow:hidden;
`
const CanvasBgBase = styled.div`position:absolute;inset:0;background:${t.white};`
const CanvasBgGrid = styled.div<{ $url: string }>`
  position:absolute;inset:0;opacity:0.03;
  background-image:url('${p => p.$url}');
  background-size:40px 40px;background-position:top left;
`
const ModelImg = styled.img`
  width:809px;height:795px;
  max-width:90%;max-height:90%;
  object-fit:contain;position:relative;z-index:1;pointer-events:none;
`
const CursorWrap = styled.div`
  position:absolute;right:20%;bottom:30%;
  width:16px;height:18px;z-index:2;pointer-events:none;
  transform:rotate(-47.5deg);
`

// ─── Bottom Floating Toolbars ─────────────────────────────────────────────────
const BottomGroup = styled.div`
  position:absolute;bottom:${t.sp16};
  left:50%;transform:translateX(-50%);
  display:flex;gap:${t.sp12};align-items:flex-start;z-index:20;
`
const FloatBar = styled.div`
  display:flex;align-items:center;gap:${t.sp4};
  padding:${t.sp8} ${t.sp12};
  background:${t.white};
  border:1px solid ${t.borderLight};
  border-radius:${t.radiusL};
  box-shadow:${t.shadow};
`
const SegCtrl = styled.div`
  display:flex;align-items:center;
  border:1px solid rgba(0,0,0,0.2);
  border-radius:${t.radiusM};width:96px;
`
const SegBtn = styled.button<{ $sel?: boolean }>`
  display:flex;align-items:center;justify-content:center;
  flex:1;height:32px;border:none;
  border-radius:${t.radiusM};
  background:${p => (p.$sel ? t.bgSelection : 'rgba(250,250,250,0)')};
  outline:${p => (p.$sel ? '1px solid #4190be' : 'none')};
  cursor:pointer;
  font-family:${t.font};font-size:12.4px;font-weight:600;color:#000;
`
const SplitB = styled.button`
  display:flex;align-items:center;height:32px;
  border-radius:${t.radiusM};
  border:1px solid ${t.borderTransparent};
  background:rgba(255,255,255,0);cursor:pointer;padding:0;
`

const BottomToolbars: React.FC = () => (
  <BottomGroup data-node-id="2296:15409">
    <FloatBar>
      <SegCtrl>
        <SegBtn aria-label="2D">2D</SegBtn>
        <SegBtn aria-label="Align"><Ico16 src={imgBtnAlign} alt="" /></SegBtn>
        <SegBtn $sel aria-label="3D">3D</SegBtn>
      </SegCtrl>
      <VDivider h={16} />
      <IBtn aria-label="Fit"><Ico16 src={imgBtnFit} alt="" /></IBtn>
    </FloatBar>

    <FloatBar>
      <SplitB aria-label="Navigation">
        <div style={{ display:'flex',alignItems:'center',justifyContent:'center',minWidth:32,minHeight:32,padding:t.sp4 }}>
          <Ico16 src={imgBtnNavigation} alt="" />
        </div>
        <div style={{ display:'flex',alignItems:'center',justifyContent:'center',height:32,padding:`0 ${t.sp4}` }}>
          <Ico12 src={imgBtnCaret} alt="" style={{ transform:'rotate(180deg)' }} />
        </div>
      </SplitB>
      <IBtn $sel aria-label="Markup"><Ico16 src={imgBtnMarkup} alt="" /></IBtn>
      <IBtn aria-label="Zoom"><Ico16 src={imgBtnZoom} alt="" /></IBtn>
      <VDivider h={16} />
      <IBtn aria-label="Section"><Ico16 src={imgBtnSection} alt="" /></IBtn>
    </FloatBar>

    <FloatBar>
      <IBtn aria-label="Cut"><Ico16 src={imgCutIcon} alt="" /></IBtn>
      <SplitB aria-label="Layers">
        <div style={{ display:'flex',alignItems:'center',justifyContent:'center',minWidth:32,minHeight:32,padding:t.sp4 }}>
          <Ico16 src={imgNavModel} alt="" />
        </div>
        <div style={{ display:'flex',alignItems:'center',justifyContent:'center',height:32,padding:`0 ${t.sp4}` }}>
          <Ico12 src={imgBtnCaret} alt="" style={{ transform:'rotate(180deg)' }} />
        </div>
      </SplitB>
      <IBtn aria-label="Markup2"><Ico16 src={imgBtnMarkup} alt="" /></IBtn>
    </FloatBar>
  </BottomGroup>
)

// ─── Cube Navigation Widget ───────────────────────────────────────────────────
const CubeWrap = styled.div`
  position:absolute;top:116px;right:60px;
  width:92px;height:92px;z-index:15;pointer-events:none;
`

// ─── Root ─────────────────────────────────────────────────────────────────────
const ViewerRoot = styled.div`
  position:relative;width:100%;height:100vh;
  font-family:${t.font};
`
const CanvasContainer = styled.div`
  position:absolute;inset:0;
  border:1px solid ${t.borderLight};
  display:flex;flex-direction:column;
  overflow:hidden;
`

export const Viewer3D: React.FC = () => (
  <ViewerRoot data-node-id="2296:15390" data-name="light-grey-ai">
    <CanvasContainer data-node-id="2296:15391">
      <Toolbar />
      <CanvasWrap data-node-id="2296:15393">
        <CanvasBgBase />
        <CanvasBgGrid $url={imgCanvasGrid} />
        <ModelImg src={imgModel} alt="3D Model – Urban House" />
        <CursorWrap>
          <img src={imgCursor} alt="" style={{ width:16, height:18, display:'block' }} />
        </CursorWrap>
        <NavigationPanel />
        <ModelBrowserPanel />
        <BottomToolbars />
      </CanvasWrap>
    </CanvasContainer>

    <CubeWrap data-node-id="2296:15845">
      <img src={imgCubeFrame} alt="" style={{ position:'absolute', inset:'-4%', width:'108%', height:'108%', display:'block' }} />
      <img src={imgCube} alt="" style={{ position:'absolute', top:17, right:22, width:48, height:58, display:'block' }} />
    </CubeWrap>
  </ViewerRoot>
)
