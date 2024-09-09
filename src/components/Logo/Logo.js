import './styles.scss';

export default function Logo({ className="", logoHeadingClassName= "", size = 24, showSubtitle = true, subtitleAlign = 'left' }) {
    return (
        <div className={`logo ${className}`} style={{ fontSize: `${size}px` }}>
            <h2 className={logoHeadingClassName}>
                {`Epic`}
                <span>{' Coders'}</span>
            </h2>
            {showSubtitle ? (
                <h3 style={{ textAlign: subtitleAlign }}>A design and development studio</h3>
            ) : null}
        </div>
    );
}
