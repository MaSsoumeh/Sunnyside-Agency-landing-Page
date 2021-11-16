import './transform.scss';

const Transform = (props) => {
  const { image, title, text } = props;
  return (
    <>
      <section className='transformWrapper'>
        <img
          src={image}
          alt='a graphic for the section header'
          className='transformImage'
        />
      </section>
      <section className='textWrapper'>
        <article className='textContainer'>
          <h1 className='textHeading'>{title}</h1>
          <p className='textBody'>{text}</p>
          <a href='#home' className='more'>
            LEARN MORE
          </a>
        </article>
      </section>
    </>
  );
};

export default Transform;
