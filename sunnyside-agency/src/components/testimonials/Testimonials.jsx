import ClientTestimonial from '../clientTestimonial/ClientTestimonial';
import './testimonials.scss';
import emily from '../../images/image-emily.jpg';
import jennie from '../../images/image-jennie.jpg';
import thomas from '../../images/image-thomas.jpg';

const clientTestimonials = [
  {
    clientImage: emily,
    clientComment: `We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.`,
    clientName: 'Emily R.',
    clientCompany: 'Marketing Director',
  },
  {
    clientImage: thomas,
    clientComment: `Sunnyside’s
    enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.`,
    clientName: 'Thomas S.',
    clientCompany: 'Chief Operating Officer',
  },
  {
    clientImage: jennie,
    clientComment: `Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!`,
    clientName: 'Jennie F.',
    clientCompany: 'Business Owner',
  },
];
const Testimonials = () => {
  return (
    <>
      <section className='testimonials'>
        <header className='heading'>
          <h2>CLIENT TESTIMONIALS</h2>
        </header>
        {clientTestimonials.map((client, index) => {
          const { clientImage, clientComment, clientName, clientCompany } =
            client;
          return (
            <ClientTestimonial
              key={index}
              clientImage={clientImage}
              clientComment={clientComment}
              clientName={clientName}
              clientCompany={clientCompany}
            />
          );
        })}
      </section>
    </>
  );
};

export default Testimonials;
