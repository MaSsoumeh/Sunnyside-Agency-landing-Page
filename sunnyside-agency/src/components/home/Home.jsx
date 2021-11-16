import './home.scss';
import headerImg from '../../images/mobile/image-header.jpg';

const Home = () => {
  return (
    <>
      <section className='homeWrapper'>
        <img
          src={headerImg}
          alt='a slice of an orange'
          className='headerImage'
        />
      </section>
    </>
  );
};

export default Home;
