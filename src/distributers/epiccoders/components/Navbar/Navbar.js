import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import NavbarDesktop from './NavbarDesktop/NavbarDesktop';
import NavbarMobile from './NavbarMobile/NavbarMobile';
import { scrollToId } from '../../../../components/Common/helper';

export default function Navbar() {

    function Items({callBack}){
        function onItemClickHandler(e){
            const event = e.target.id
            if(callBack){
                callBack()
            }
            switch(event){
                case "nav-item-home":{
                    scrollToId('container-1');
                    break;
                }
                case "nav-item-services":{
                    scrollToId('container-2');
                    break;
                }
                case "nav-item-about":{
                    scrollToId('');
                    break;
                }
                case "nav-item-contact":{
                    scrollToId('container-8');
                    break;
                }
                
                default: return;
                
            }
            // setIsNavMenuOpen(false)
        }
        return(
           <>
                <p id="nav-item-home" onClick={onItemClickHandler}>Home</p>
                <p id="nav-item-services" onClick={onItemClickHandler}>Services</p>
                {/* <p id="nav-item-about" onClick={onItemClickHandler}>About</p> */}
                <p id="nav-item-contact" onClick={onItemClickHandler}>Contact us</p>
            </>
        )
    }
    if (isBrowser) return <NavbarDesktop Items={Items}/>;
    return <NavbarMobile Items={Items}/>;
}
