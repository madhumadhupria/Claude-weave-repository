import React from 'react'
import styled from 'styled-components'

// Figma local assets served by Figma desktop app on localhost:3845
const imgModel = 'http://localhost:3845/assets/25bd4bf7fc0f7b832f1412f55bf7de29caa442bc.png'
const imgCanvasGrid = 'http://localhost:3845/assets/afb929fb25999473977441b9a9a1b7a2e0e8971a.png'
const imgAutodeskSymbol = 'http://localhost:3845/assets/62ee6e43892ebecc9d53382d65750049c03412d0.svg'
const imgCaretDown = 'http://localhost:3845/assets/46ead2f9475979bdd300e2c458e42dfb8309ffd2.svg'
const imgSettings = 'http://localhost:3845/assets/4e5adf82f9539d1f803b2b5a914fe22e14cc472c.svg'
const imgHelp = 'http://localhost:3845/assets/2e9ce90b7e605f51b00f4654b9b66b8ae891ca63.svg'
const imgMoreVertical = 'http://localhost:3845/assets/3a34ed3abfb940bf9f3e059498158bbb4d2adf7f.svg'
const imgEllipsis = 'http://localhost:3845/assets/6312d84367597c7388ec4a049f78ae7c36822a91.svg'
const imgCollapseRight = 'http://localhost:3845/assets/56e4c8a895ef9c29330bcdcf04eafb505f723f10.svg'
const imgNavLayers = 'http://localhost:3845/assets/e843e3e623350ab99158980ffbfd3854573fbd5b.svg'
const imgNavSearch = 'http://localhost:3845/assets/034cbd8d374bd7e652ed5cb56233fad329b80015.svg'
const imgNavProperties = 'http://localhost:3845/assets/89f8fd44f4a42c98f6800723feee793a57b3eab1.svg'
const imgNavModel = 'http://localhost:3845/assets/0f4fc983f1e8b035b04ac5c06b7c90482c239596.svg'
const imgNav3DActive1 = 'http://localhost:3845/assets/56d6076075f7ce556f3e1516e3067897a8848392.svg'
const imgNav3DActive2 = 'http://localhost:3845/assets/7ce929fec33e25fb89046d96392c0393743b8c72.svg'
const imgNav3DActiveDot = 'http://localhost:3845/assets/a24999ee969e17abf6989f0aafca65e05f1112ed.svg'
const imgBtnNavigation = 'http://localhost:3845/assets/b6feebe3162844bbf26b17ee7220fa6698db51b8.svg'
const imgBtnCaret = 'http://localhost:3845/assets/5ad63cda32017a283385d421869dd73fd377b8a3.svg'
const imgBtnAlign = 'http://localhost:3845/assets/6a077e940c01a8fdbe74bf8f5e849245d6a0e12d.svg'
const imgBtnFit = 'http://localhost:3845/assets/bbae98b349d4765bfde6b02fb29406befe9c469f.svg'
const imgBtnMarkup = 'http://localhost:3845/assets/e633be225b8f7c69e35b5b9643dcc9953ed66a2f.svg'
const imgBtnZoom = 'http://localhost:3845/assets/9bb37a40e618e306dcdddc36f4a1efd949d1d83e.svg'
const imgBtnSection = 'http://localhost:3845/assets/7f811262c1b9a70c1483e09796385a4c0421bd95.svg'
const imgCube = 'http://localhost:3845/assets/61329762711a8ebb62a765837de8280ee2671896.svg'
const imgCubeFrame = 'http://localhost:3845/assets/f13c4eda50cf79a3c3ab079d7737b22c97fcc9d1.svg'

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
  textMedium: '#3c3c3c',
  textStatusNew: '#006698',
  shadow: '0px 0px 16px 0px rgba(0,0,0,0.1)',
  radiusXL: '16px',
  radiusL: '12px',
  radiusM: '6px',
  radiusS: '4px',
  sp4: '4px',
  sp6: '6px',
  sp8: '8px',
  sp12: '12px',
  sp16: '16px',
  sp24: '24px',
  font: "'Artifakt Element', 'ArtifaktElement', sans-serif",
  fontSize: '12px',
  lineHeight: '16px',
}

// ─── Primitives ───────────────────────────────────────────────────────────────

const Ico16 = styled.img`width:16px;height:16px;display:block;flex-shrink:0;`
const Ico12 = styled.img`width:12px;height:12px;display:block;flex-shrink:0;`

const VDivider = styled.div<{ h?: number | string }>`
  width: 1px;
  height: ${p => (p.h ? (typeof p.h === 'number' ? `${p.h}px` : p.h) : 'auto')};
  align-self: ${p => (p.h ? 'center' : 'stretch')};
  background: ${t.borderDividerLight};
  border-radius: 10px;
  flex-shrink: 0;
`

const HDivider = styled.div`
  height: 1px;
  width: 100%;
  background: ${t.borderLight};
  border-radius: 10px;
`

const IBtn = styled.button<{ $sel?: boolean }>`
  display:flex;align-items:center;justify-content:center;
  min-width:32px;min-height:32px;
  padding:${t.sp4};
  border-radius:${t.radiusM};
  border:1px solid ${p => (p.$sel ? t.borderSelection : t.borderTransparent)};
  background:${p => (p.$sel ? t.bgSelected : 'rgba(255,255,255,0)')};
  cursor:pointer;flex-shrink:0;
  &:hover{background:rgba(0,0,0,0.04);}
`

// ─── Toolbar ──────────────────────────────────────────────────────────────────

const ToolbarRoot = styled.header`
  display:flex;align-items:center;justify-content:space-between;
  width:100%;padding:${t.sp6} ${t.sp24};
  background:rgba(255,255,255,0.92);
  backdrop-filter:blur(12.5px);
  border-bottom:1px solid ${t.borderLight};
  flex-shrink:0;position:relative;z-index:10;
`
const HubBtn = styled.div`
  display:flex;align-items:center;gap:${t.sp12};
  height:44px;
  padding:${t.sp8} ${t.sp24} ${t.sp8} ${t.sp12};
  border-radius:8px;cursor:pointer;
`
const Label = styled.p<{ $bold?: boolean }>`
  font-family:${t.font};font-size:${t.fontSize};
  font-weight:${p => (p.$bold ? 700 : 600)};
  color:${t.textMedium};white-space:nowrap;line-height:${t.lineHeight};
`
const V1Badge = styled.div`
  display:flex;align-items:center;height:24px;
  padding:0 ${t.sp12};border-radius:1000px;
  background:${t.bgStatusNewLight};
  border:1px solid ${t.borderStatusNew};
`
const BadgeLabel = styled.p`
  font-family:${t.font};font-size:${t.fontSize};font-weight:700;
  color:${t.textStatusNew};white-space:nowrap;line-height:${t.lineHeight};
`
const AvatarBundleWrap = styled.div`display:flex;align-items:center;padding-right:7px;`
const AvatarWrap = styled.div<{ $z: number }>`
  margin-right:-7px;z-index:${p => p.$z};
  border-radius:889px;background:${t.white};padding:1.8px;
`
const AvatarCircle = styled.div<{ $bg: string; $bc: string }>`
  width:28px;height:28px;border-radius:1000px;
  background:${p => p.$bg};border:0.9px solid ${p => p.$bc};
  display:flex;align-items:center;justify-content:center;overflow:hidden;
`
const AvatarText = styled.span<{ $c: string }>`
  font-family:${t.font};font-size:12.4px;font-weight:700;
  color:${p => p.$c};text-align:center;line-height:1;
`

const Toolbar: React.FC = () => (
  <ToolbarRoot data-node-id="2045:55761">
    <HubBtn data-node-id="2045:55762">
      <Ico16 src={imgAutodeskSymbol} alt="Autodesk" />
      <Label $bold>Docs</Label>
      <VDivider h={50} />
      <Label>Viewing 1 model</Label>
      <V1Badge><BadgeLabel>V1</BadgeLabel></V1Badge>
      <Ico16 src={imgCaretDown} alt="" style={{ transform: 'rotate(180deg)' }} />
    </HubBtn>

    <div style={{ display: 'flex', alignItems: 'center', gap: t.sp12, alignSelf: 'stretch' }}>
      <IBtn aria-label="Settings"><Ico16 src={imgSettings} alt="" /></IBtn>
      <IBtn aria-label="Help"><Ico16 src={imgHelp} alt="" /></IBtn>
      <IBtn aria-label="More"><Ico16 src={imgMoreVertical} alt="" /></IBtn>

      <AvatarBundleWrap>
        <AvatarWrap $z={3}>
          <AvatarCircle $bg="#faf0ec" $bc="rgba(164,82,41,0.2)">
            <AvatarText $c="#a45229">FL</AvatarText>
          </AvatarCircle>
        </AvatarWrap>
        <AvatarWrap $z={2}>
          <AvatarCircle $bg="#f8e8e8" $bc="rgba(188,43,43,0.2)">
            <AvatarText $c="#bc2b2b">FL</AvatarText>
          </AvatarCircle>
        </AvatarWrap>
        <AvatarWrap $z={1}>
          <AvatarCircle $bg="rgba(0,0,0,0.05)" $bc="rgba(0,0,0,0.1)">
            <Ico12 src={imgEllipsis} alt="" style={{ transform: 'rotate(-90deg)' }} />
          </AvatarCircle>
        </AvatarWrap>
      </AvatarBundleWrap>

      <VDivider />
      <IBtn aria-label="Collapse"><Ico16 src={imgCollapseRight} alt="" style={{ transform: 'rotate(-90deg)' }} /></IBtn>
    </div>
  </ToolbarRoot>
)

// ─── Left Navigation Panel ────────────────────────────────────────────────────

const NavPanel = styled.nav`
  position:absolute;left:1px;top:0;bottom:0;width:48px;
  background:${t.white};
  border-right:1px solid ${t.borderLight};
  border-bottom-left-radius:${t.radiusXL};
  display:flex;flex-direction:column;
  padding:${t.sp8} ${t.sp8} 48px;
  z-index:5;gap:${t.sp12};
`
const NavGroup = styled.div`display:flex;flex-direction:column;gap:${t.sp4};width:32px;`
const Icon3D = styled.div`position:relative;width:16px;height:16px;`

const NavigationPanel: React.FC = () => (
  <NavPanel data-node-id="2045:55804">
    <NavGroup>
      <IBtn aria-label="Layers"><Ico16 src={imgNavLayers} alt="" /></IBtn>
      <IBtn aria-label="Search"><Ico16 src={imgNavSearch} alt="" /></IBtn>
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

// ─── Canvas ───────────────────────────────────────────────────────────────────

const CanvasWrap = styled.div`
  flex:1;position:relative;min-height:0;
  display:flex;align-items:center;justify-content:center;
  overflow:hidden;
`
const CanvasBgBase = styled.div`position:absolute;inset:0;background:${t.bgCanvas};`
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
  <BottomGroup data-node-id="2045:55821">
    <FloatBar data-node-id="2045:55823">
      <SegCtrl>
        <SegBtn aria-label="2D">2D</SegBtn>
        <SegBtn aria-label="Align"><Ico16 src={imgBtnAlign} alt="" /></SegBtn>
        <SegBtn $sel aria-label="3D">3D</SegBtn>
      </SegCtrl>
      <VDivider h={16} />
      <IBtn aria-label="Fit"><Ico16 src={imgBtnFit} alt="" /></IBtn>
    </FloatBar>

    <FloatBar data-node-id="2045:55832">
      <SplitB aria-label="Navigation">
        <div style={{ display:'flex',alignItems:'center',justifyContent:'center',minWidth:32,minHeight:32,padding:t.sp4 }}>
          <Ico16 src={imgBtnNavigation} alt="" />
        </div>
        <div style={{ display:'flex',alignItems:'center',justifyContent:'center',height:32,padding:`0 ${t.sp4}` }}>
          <Ico12 src={imgBtnCaret} alt="" style={{ transform:'rotate(180deg)' }} />
        </div>
      </SplitB>
      <IBtn aria-label="Markup"><Ico16 src={imgBtnMarkup} alt="" /></IBtn>
      <IBtn aria-label="Zoom"><Ico16 src={imgBtnZoom} alt="" /></IBtn>
      <VDivider h={16} />
      <IBtn aria-label="Section"><Ico16 src={imgBtnSection} alt="" /></IBtn>
    </FloatBar>

    <FloatBar data-node-id="2045:55840">
      <IBtn aria-label="Cut"><Ico16 src={imgBtnSection} alt="" /></IBtn>
      <SplitB aria-label="Layers">
        <div style={{ display:'flex',alignItems:'center',justifyContent:'center',minWidth:32,minHeight:32,padding:t.sp4 }}>
          <Ico16 src={imgNavLayers} alt="" />
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
  border-radius:${t.radiusXL};
  display:flex;flex-direction:column;
  overflow:hidden;
`

export const Viewer3D: React.FC = () => (
  <ViewerRoot data-node-id="2045:55758" data-name="3D">
    <CanvasContainer data-node-id="2045:55760">
      <Toolbar />
      <CanvasWrap data-node-id="2045:55797">
        <CanvasBgBase />
        <CanvasBgGrid $url={imgCanvasGrid} />
        <ModelImg src={imgModel} alt="3D Model – Urban House" />
        <NavigationPanel />
        <BottomToolbars />
      </CanvasWrap>
    </CanvasContainer>

    <CubeWrap data-node-id="2045:55845">
      <img src={imgCubeFrame} alt="" style={{ position:'absolute', inset:'-4%', width:'108%', height:'108%', display:'block' }} />
      <img src={imgCube} alt="" style={{ position:'absolute', top:17, right:22, width:48, height:58, display:'block' }} />
    </CubeWrap>
  </ViewerRoot>
)
