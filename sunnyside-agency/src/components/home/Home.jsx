import './home.scss';
import headerImg from '../../images/mobile/image-header.jpg';
import arrowImg from '../../images/icon-arrow-down.svg';
const Home = () => {
  return (
    <>
      <section className='homeWrapper'>
        <img
          src={headerImg}
          alt='a slice of an orange'
          className='headerImage'
        />
        <img
          src={arrowImg}
          alt='an arrow icon point to an orange'
          className='arrow'
        />
        <p className='creativeText'>WE ARE CREATIVES</p>
      </section>
    </>
  );
};

export default Home;
