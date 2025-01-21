import 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../index.css';

// eslint-disable-next-line react/prop-types
const WithStyles = ({ image, altText }) => {
  return (
    <div style={{ padding: '10px', textAlign: 'center' }}>
      <div
        className="image-container"
        style={{
          maxWidth: '180px',
          maxHeight: '300px',
          overflow: 'hidden',
          margin: '0 auto', // Centers the images
        }}
      >
        <img
          src={image}
          alt={altText}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Ensures images maintain their aspect ratio
          }}
        />
      </div>
    </div>
  );
};

const Slider = () => {
  const images = [
   '/public/imgs/slider-1.webp',
   '/public/imgs/slider-2.webp',
   '/public/imgs/slider-3.webp',
   '/public/imgs/slider-4.webp',
   '/public/imgs/slider-5.webp',
   '/public/imgs/slider-6.webp',
   '/public/imgs/slider-7.webp',
   '/public/imgs/slider-8.webp',
   '/public/imgs/slider-9.webp',
  ];

  return (
  <>
 
    <div className="carousel-wrapper" style={{ maxWidth: '1100px', margin: 'auto' }}>
    <h1 className='text-[35px] text-white font-bold mb-1 mt-7'>Taranding Now</h1>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="custom-carousel flex items-center justify-center mb-5"
        containerClass="container"
        draggable
        infinite
        itemClass="carousel-item"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {images.map((image, index) => (
          <WithStyles key={index} image={image} altText={`Image ${index + 1}`} />
        ))}
      </Carousel>
    </div>
  </>
  );
};


export default Slider;
