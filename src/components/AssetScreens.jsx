import './AssetScreens.css';

import sky from '../assets/fourth/sky.png';
import rightside from '../assets/fourth/rightside.png';
import bottom from '../assets/fourth/bottom.png';
import componentImg from '../assets/fourth/Component.png';
import componentText from '../assets/fourth/componenttext.png';
import componentText1 from '../assets/fourth/componenttext1.png';
import compText2 from '../assets/fourth/comptext2.png';
import compText3 from '../assets/fourth/conptext3.png';
import hydridIcon from '../assets/hydrid icon.png';
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';
import n1 from '../assets/n1.png';
import n2 from '../assets/n2.png';
import n3 from '../assets/n3.png';

function AssetScreen({ src, alt, className = 'asset-screen-image' }) {
    return (
        <div className="asset-screen">
            <img src={src} alt={alt} className={className} />
        </div>
    );
}

export function SkyScreen() {
    return <AssetScreen src={sky} alt="Sky screen" className="asset-screen-image" />;
}

export function RightSideScreen() {
    return <AssetScreen src={rightside} alt="Right side screen" className="asset-screen-image" />;
}

export function BottomScreen() {
    return <AssetScreen src={bottom} alt="Bottom screen" className="asset-screen-image" />;
}

export function ComponentScreen() {
    return <AssetScreen src={componentImg} alt="Component screen" className="asset-screen-image" />;
}

export function ComponentTextScreen() {
    return <AssetScreen src={componentText} alt="Component text screen" className="asset-screen-image" />;
}

export function ComponentText1Screen() {
    return <AssetScreen src={componentText1} alt="Component text 1 screen" className="asset-screen-image" />;
}

export function CompText2Screen() {
    return <AssetScreen src={compText2} alt="Component text 2 screen" className="asset-screen-image" />;
}

export function CompText3Screen() {
    return <AssetScreen src={compText3} alt="Component text 3 screen" className="asset-screen-image" />;
}

export function HydridIconScreen() {
    return <AssetScreen src={hydridIcon} alt="Hydrid icon screen" className="asset-screen-image" />;
}

export function C1Screen() {
    return <AssetScreen src={c1} alt="C1 screen" className="asset-screen-image" />;
}

export function C2Screen() {
    return <AssetScreen src={c2} alt="C2 screen" className="asset-screen-image" />;
}

export function C3Screen() {
    return <AssetScreen src={c3} alt="C3 screen" className="asset-screen-image" />;
}

export function N1Screen() {
    return <AssetScreen src={n1} alt="N1 screen" className="asset-screen-image" />;
}

export function N2Screen() {
    return <AssetScreen src={n2} alt="N2 screen" className="asset-screen-image" />;
}

export function N3Screen() {
    return <AssetScreen src={n3} alt="N3 screen" className="asset-screen-image" />;
}

export function N1N2Stack() {
    return (
        <div className="asset-stack">
            <N1Screen />
            <N2Screen />
        </div>
    );
}

export function AssetScreensGallery() {
    return (
        <div className="asset-gallery">
            <SkyScreen />
            <RightSideScreen />
            <BottomScreen />
            <ComponentScreen />
            <ComponentTextScreen />
            <ComponentText1Screen />
            <CompText2Screen />
            <CompText3Screen />
            <HydridIconScreen />
            <div className="asset-row-three">
                <C1Screen />
                <C2Screen />
                <C3Screen />
            </div>
            <N1N2Stack />
            <N3Screen />
        </div>
    );
}

export default AssetScreensGallery;
