import 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../index.css';
import Getstarted from './Getstarted';
import Slider from './Slider';
import Slider2 from './Slider2';
import Reasons from './Reasons';
import Questions from './Questions';
import Footer from './Footer';
// import { FaPlay } from "react-icons/fa";

const Carouse = () => {
  const images = [
    "https://occ-0-3776-2186.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABY09ZwdbZqGY82hZJHFE_4CYuqI8Ucl_9iXl80mdZKH-BZeXUgeH0DCFxTQhBs4gUpmS3hGKB_tBJU1Jf73-vjVFpVilgPdaugDC.webp?r=c9a",
    "https://occ-0-3776-2186.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABbxMH92FDTs3xrwno6WMU2mwv1eFGFL7ceFtLfpuF62IO-PYbs9hcAm6EBVv4paxivzdBglvfKwq5xmlY3jHVSEMh1UMakcpStEh.webp?r=513",
    "/public/imgs/login-background.jpg",
  ];

  return (
    <>
      <div className='bg-gradient-to-b from-red-950 to-black'>
      <div  className="relative   pb-8 ">
        {/* Blurred Background */}
        {/* <div className="absolute inset-0 z-[-1] overflow-hidden">
          {images.map((src, index) => (
            <img
              key={`bg-${index}`}
              src={src}
              className="absolute top-0 left-0 w-full h-full object-cover blur-2xl brightness-[0.35]"
              alt={`Background Slide ${index + 1}`}
            />
          ))}
        </div> */}

        {/* Foreground Carousel */}
        <div className="container rounded-3xl mx-auto px-7">
          <Carousel className=""
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={2000}
            centerMode={false}
            containerClass="container"
            dotListClass="custom-dot-list"
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 1,
              },
              tablet: {
                breakpoint: { max: 1024, min: 768 },
                items: 1,
              },
              mobile: {
                breakpoint: { max: 769, min: 0 },
                items: 1,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {images.map((src, index) => (
              <img
                className="w-full h-[510px] object-cover rounded-3xl shadow-lg border-t-2 border-l-2 "
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
              />
            ))}
          </Carousel>
         {/* <FaPlay className='text-white text-lg ml-[31%] mt-4 cursor-pointer absolute'/> */}
        </div>
      </div>
      <Getstarted />
      <Slider/>
      <Slider2 />
      <Reasons />
      <Questions />
      <Footer />
      </div>
     
    </>
  );
};

export default Carouse;
