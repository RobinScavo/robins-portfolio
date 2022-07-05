import './header.scss';

import chevron from '../../images/icons/chevron.png'

const Header = () => {
    const devText = '{ developer }';

    return (
        <section className="header-container">
            <div className="title-container">
                <div className="icon-container">
                    <img
                        src={chevron}
                        alt="Hand Drawn Chevron by Max Miner from NounProject.com"
                        className="chevron"
                    />
                </div>
                <h2 className="header-title">robin scavo <span className="title-span">{ devText }</span></h2>
                <div className="header-links">
                    <div className="link-container">
                        <i class="email-icon header-icon fa fa-envelope" aria-hidden="true"></i>
                        <p className="icon-text">email</p>
                    </div>
                    <div className="link-container">
                        <i className="header-icon fa fa-github" aria-hidden="true"></i>
                        <p className="icon-text">github</p>
                    </div>
                    <div className="link-container">
                        <i class="header-icon fa fa-linkedin-square" aria-hidden="true"></i>
                        <p className="icon-text">linkedin</p>
                    </div>
                </div>
            </div>
            <p className="available-text">available for work</p>
        </section>
     );
}

export default Header;
