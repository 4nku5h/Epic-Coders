import './styles.scss';
import Logo from '../../../../../components/Logo/Logo';

export default function NavbarDesktop({Items}) {
    return (
        <div className="navbar">
        <div className="center-logo">
            <Logo className="opacity-white-text" showSubtitle={false} />
        </div>
            <div className="items">
                <Items />
            </div>
        </div>
    );
}
