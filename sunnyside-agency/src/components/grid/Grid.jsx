import bottle from '../../images/desktop/image-gallery-milkbottles.jpg';
import orange from '../../images/desktop/image-gallery-orange.jpg';
import cone from '../../images/desktop/image-gallery-cone.jpg';
import SugarCube from '../../images/desktop/image-gallery-sugarcubes.jpg';
import './grid.scss';
const Grid = () => {
  return (
    <>
      <div className='imageWrapper'>
        <img src={bottle} alt='milk bottles' />
        <img src={orange} alt='an orange in a bowl' />
        <img src={cone} alt='cone' />
        <img src={SugarCube} alt='sugar cubes' />
      </div>
    </>
  );
};

export default Grid;
