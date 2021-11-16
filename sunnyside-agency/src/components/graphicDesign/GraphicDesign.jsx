import './graphicDesign.scss';
const GraphicDesign = (props) => {
  const { image, title, text, color } = props;
  const textStyle = {
    color: color,
  };
  console.log(color);
  return (
    <>
      <section className='imageWrapper'>
        <img
          className='image'
          src={image}
          alt='a fruit for the section header'
        />
        <article className='textContainer'>
          <h1 className='textHeading' style={textStyle}>
            {title}
          </h1>
          <p className='textBody' style={textStyle}>
            {text}
          </p>
        </article>
      </section>
    </>
  );
};

export default GraphicDesign;
