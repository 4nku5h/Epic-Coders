import './styles.scss';
import Logo from '../../../../../components/Logo/Logo';

export default function NavbarDesktop() {
    return (
        <div className="navbar">
        <div className="center-logo">
            <Logo className="opacity-white-text" showSubtitle={false} />
        </div>
            <div className="items">
                <p>Home</p>
                <span />
                <p>Services</p>
                <p>About</p>
                <p>Contact Us</p>
            </div>
        </div>
    );
}
