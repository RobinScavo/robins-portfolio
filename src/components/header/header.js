import './header.css';


const Header = () => {
    const devText = '{ developer }';

    return (
        <div className="header-container">
            <h2 className="header-title">robin scavo { devText }</h2>
            <div className="header-links">
                <div className="link-container">
                    <i class="email-icon header-icon fa fa-envelope" aria-hidden="true"></i>
                    <p className="icon-text">Email</p>
                </div>
                <div className="link-container">
                    <i className="header-icon fa fa-github" aria-hidden="true"></i>
                    <p className="icon-text">Git Hub</p>
                </div>
                <div className="link-container">
                    <i class="header-icon fa fa-linkedin-square" aria-hidden="true"></i>
                    <p className="icon-text">Linked In</p>
                </div>
            </div>
        </div>
     );
}

export default Header;
