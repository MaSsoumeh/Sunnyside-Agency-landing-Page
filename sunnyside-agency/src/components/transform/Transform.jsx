import eggImage from '../../images/mobile/image-transform.jpg';
import './transform.scss';
const Transform = () => {
  return (
    <>
      <section className='imageWrapper'>
        <img
          src={eggImage}
          alt='an egg in a Yellow background'
          className='transformImage'
        />
      </section>
      <section className='textWrapper'>
        <article className='textContainer'>
          <h1 className='textHeading'>Transform your brand</h1>
          <p className='textBody'>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href='#home' className='more'>
            LEARN MORE
          </a>
        </article>
      </section>
    </>
  );
};

export default Transform;
