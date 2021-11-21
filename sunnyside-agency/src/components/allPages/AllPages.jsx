import Home from '../home/Home';
import Navbar from '../navbar/Navbar';
import Transform from '../transform/Transform';
import eggImage from '../../images/mobile/image-transform.jpg';
import glassImage from '../../images/mobile/image-stand-out.jpg';
import cherryImage from '../../images/mobile/image-graphic-design.jpg';
import orangeImage from '../../images/mobile/image-photography.jpg';
import GraphicDesign from '../graphicDesign/GraphicDesign';
import Testimonials from '../testimonials/Testimonials';
import Grid from '../grid/Grid';
import Footer from '../footer/Footer';

const bodyText = [
  {
    heading: 'Transform your brand',
    bodyParagraph: `We are a full-service creative agency specializing in helping brands
    grow fast. Engage your clients through compelling visuals that do
    most of the marketing for you.`,
  },
  {
    heading: 'Stand out to the right audience',
    bodyParagraph: `Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.`,
  },
  {
    heading: 'Graphic Design',
    bodyParagraph: `Great design makes you memorable. We deliver artwork that
    underscores your brand message and captures potential clients’ attention.`,
    color: 'hsl(167, 40%, 24%)',
  },
  {
    heading: 'Photography',
    bodyParagraph: ` Increase your credibility by getting the most stunning,
    high-quality photos that improve your business image.`,
    color: 'hsl(198, 62%, 26%)',
  },
];

const AllPages = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Transform
        image={eggImage}
        title={bodyText[0].heading}
        text={bodyText[0].bodyParagraph}
      />
      <Transform
        image={glassImage}
        title={bodyText[1].heading}
        text={bodyText[1].bodyParagraph}
      />
      <GraphicDesign
        image={cherryImage}
        title={bodyText[2].heading}
        text={bodyText[2].bodyParagraph}
        color={bodyText[2].color}
      />
      <GraphicDesign
        image={orangeImage}
        title={bodyText[3].heading}
        text={bodyText[3].bodyParagraph}
        color={bodyText[3].color}
      />
      <Testimonials />
      <Grid />
      <Footer />
    </>
  );
};
export default AllPages;
