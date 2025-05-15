import React, { useEffect, useRef, useState } from 'react';
import { Col } from 'antd';
import customized_gifts from '@assets/images/customized_gifts.png'
import { CarouselDemo, CarouselHead, Carouselslider, NextButton, PreviousButton } from './Style';
import { CustomRow, Flex } from '@components/others';
import { NavHeader } from '@layout/Partials/NavHeader';
import { IoIosArrowBack, IoIosArrowForward, IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import Footer from '@modules/Footer/Partials/Footer';
import { Container } from '@modules/Objectives/Partials/Style';
import { cardData } from '@modules/Data/Data';
import { CardMain, CardMainOne } from '@modules/ProductCard/Partials/Style';
import { FiCheck, FiShoppingCart } from 'react-icons/fi';
import { GiftButton } from '@modules/GiftKits/Partials/GiftKits';
import ProductCardMobile from '@modules/ProductCard/Partials/ProductCardMobile';
import ProgressiveImage from "react-progressive-graceful-image";




const CustomizedGiftsCarousel = () => {

  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };

  const slider = useRef(null);

  const [isBelowMaxWidth, setIsBelowMaxWidth] = useState(false);

  const [clickedItems, setClickedItems] = useState(Array(cardData.length).fill(false));

  const [heartClickedItems, setHeartClickedItems] = useState(Array(cardData.length).fill(false));


  const handleButtonClick = (index) => {
    // Create a new array with updated clicked state for the clicked item
    const newClickedItems = [...clickedItems];
    newClickedItems[index] = !newClickedItems[index];
    setClickedItems(newClickedItems);

  };

  // Function to handle the click event for a specific item
  const handleHeartClick = (index) => {
    // Create a new array with updated clicked state for the clicked item
    const newHeartClickedItems = [...heartClickedItems];
    newHeartClickedItems[index] = !newHeartClickedItems[index];
    setHeartClickedItems(newHeartClickedItems);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsBelowMaxWidth(window.innerWidth <= 500); // Adjust the threshold as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial width on mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      <NavHeader />
      <Container>
        <CarouselDemo>
          <CarouselHead>
            <Carouselslider arrows={true} dots={false} afterChange={onChange} autoplay ref={slider} draggable autoplaySpeed={2000} responsive={[{ breakpoint: 1200, settings: { slidesPerRow: 1 } },
            { breakpoint: 900, settings: { slidesPerRow: 1 } },
            { breakpoint: 697, settings: { rows: 1, slidesPerRow: 1 } }]}  >
              <div >
                <img src={customized_gifts} alt='Customized Gift 1' />
              </div>
              <div >
                <img src={customized_gifts} alt='Customized Gift 1' />

              </div>
              <div >
                <img src={customized_gifts} alt='Customized Gift 1' />

              </div>

            </Carouselslider>
            <NextButton onClick={() => slider.current.prev()}>
              <IoIosArrowForward color='white' />
            </NextButton>
            <PreviousButton onClick={() => slider.current.next()}>
              <IoIosArrowBack color='white' /></PreviousButton>

          </CarouselHead>
        </CarouselDemo>
      </Container>
      <Container>
        {isBelowMaxWidth ? (
          <ProductCardMobile />
        ) : (
          <CustomRow space={[24, 24]} style={{ display: 'flex', justifyContent: 'center', paddingTop: '25px' }}>
            {cardData.map(({ imageUrl, title, key, placeholdersrc }, index) => (
              <Col span={12} md={12} lg={6} key={key}>
                <ProgressiveImage src={imageUrl} placeholder={placeholdersrc}>
                  {(src, loading) => (
                    <div style={{ backgroundColor: '#F2FAFB', padding: "50px 20px 50px 20px" }}>
                      <CardMainOne className={loading ? 'loading' : 'loaded'}>
                        {loading ? (
                          <div>Loading...</div>
                        ) : (
                          <img src={imageUrl} alt='' />
                        )}
                      </CardMainOne>
                    </div>
                  )}
                </ProgressiveImage>

                <br />
                <h3 style={{ textAlign: 'center' }}> {title}</h3>
                <br />
                <Flex gap={'5px'} center>

                  <GiftButton style={{ borderRadius: '50%', height: '50px', width: '50px' }}
                    className='productwishlist'
                    icon={heartClickedItems[index] ? <IoMdHeart style={{ marginRight: '0px', color: 'black' }} className='productwishlisticon' /> : <IoMdHeartEmpty style={{ marginRight: '0px', color: 'black' }} className='productwishlisticon' />}
                    onClick={() => handleHeartClick(index)}
                  />
                  <GiftButton style={{ borderRadius: '50%', height: '50px', width: '50px' }} className='productcart'
                    icon={clickedItems[index] ? <FiCheck style={{ marginRight: '0px', color: 'black' }} className='productwishlisticon' /> : <FiShoppingCart style={{ marginRight: '0px', color: 'black' }} className='productwishlisticon' />}
                    onClick={() => handleButtonClick(index)}
                  />
                </Flex>

              </Col>
            ))}
          </CustomRow>)}


      </Container>
      <br />
      <Footer />

    </>

  );
};
export default CustomizedGiftsCarousel;