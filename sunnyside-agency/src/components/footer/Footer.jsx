import './footer.scss';
import facebook from '../../images/icon-facebook.svg';
import instagram from '../../images/icon-instagram.svg';
import twitter from '../../images/icon-twitter.svg';
import pinterest from '../../images/icon-pinterest.svg';
import logo from '../../images/logo2.svg';
const Footer = () => {
  return (
    <>
      <section className='footerWrapper'>
        <div className='innerWrapper'>
          <img src={logo} alt='Sunnyside logo' className='title' />
          <div className='bottomNav'>
            <ul className='navBar'>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
            </ul>
          </div>
          <div className='otherLinks'>
            <img src={facebook} alt='' className='facebook' />
            <img src={instagram} alt='' className='facebook' />
            <img src={twitter} alt='' className='facebook' />
            <img src={pinterest} alt='' className='facebook' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
