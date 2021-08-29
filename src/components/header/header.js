import { Link } from 'react-router-dom';
import Img from '../../assets/img/image2vector.svg';

import './header.scss';

const styleLink = {
    textDecoration: 'none'
}

const Header = () => {
    return (
        <Link to={'/'} style={styleLink}>
            <div className="header">
                <div className="header-container">
                    <img src={Img} alt="logo" className="header-container-logo"/>
                    <h1 className="header-container-title">Todo App</h1>
                </div>
            </div>
        </Link>
    )
}

export default Header;
