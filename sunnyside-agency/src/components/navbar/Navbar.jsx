import './navbar.scss';
import menuImg from '../../images/icon-hamburger.svg';
import logo from '../../images/logo.svg';
const Navbar = () => {
  return (
    <>
      <header className='header'>
        <nav className='navbar'>
          <div className='rightSide'>
            <img src={logo} alt='Company name' className='logo' />
          </div>

          <div className='leftSide'>
            <img src={menuImg} alt='Burger Menu' className='menuBurger' />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
