import { useState } from 'react';
import Logo from '../../../../../components/Logo/Logo';
import hamburgerLogo from '../../../../../assets/core/hamburger.svg';

import './styles.scss';

export default function NavbarMobile({Items}) {
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

    return (
        <div className={`navbar-mobile ${isNavMenuOpen ? 'menu-open' : ''}`}>
            <div className="basic">
                <div className="center-logo">
                    <Logo logoHeadingClassName="logo-nav-mobile" showSubtitle={false} />
                </div>
                <img
                    src={hamburgerLogo}
                    onClick={() => {
                        setIsNavMenuOpen(!isNavMenuOpen);
                    }}
                />
            </div>
            {isNavMenuOpen ? (
                <div className="items opacity-dark-text">
                   <Items callBack={()=>{
                     setIsNavMenuOpen(false)
                   }}/>
                </div>
            ) : (
                false
            )}
        </div>
    );
}
