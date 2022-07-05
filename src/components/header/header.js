import './header.css';

const Header = () => {
    const devText = '{ developer }';

    return (
        <section className="header-container">
            <div className="title-container">
                <div className="icon-container">
                    <img
                        src="../../images/bathroom.jpg"
                        // src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat-768x384.png)"
                        alt=""
                        className="title-icon"
                    />
                </div>
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
            <p className="icon-text">Available for work.</p>
        </section>
     );
}

export default Header;
