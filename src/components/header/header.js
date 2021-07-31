import Img from '../../assets/img/image2vector.svg';

import './header.scss';

const Header = () => {
    return (
        <div className="header">
           <div className="header-container">
               <img src={Img} alt="logo" className="header-container-logo" />
               <h1 className="header-container-title">Todo App</h1>
           </div>
        </div>
    )
}

export default Header;
