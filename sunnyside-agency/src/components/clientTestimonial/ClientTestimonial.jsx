import './clientTestimonial.scss';

const ClientTestimonial = (props) => {
  const { clientImage, clientComment, clientName, clientCompany } = props;
  return (
    <>
      <section className='mainWrapper'>
        <article className='testimonial'>
          <figure className='clientImage'>
            <img src={clientImage} alt='client' />
          </figure>
          <p className='clientComment'>{clientComment}</p>
          <p className='clientName'>{clientName}</p>
          <p className='clientCompany'>{clientCompany}</p>
        </article>
      </section>
    </>
  );
};
export default ClientTestimonial;
