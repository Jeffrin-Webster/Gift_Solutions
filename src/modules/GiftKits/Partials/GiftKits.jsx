import { Container } from '@modules/Objectives/Partials/Style'
import React, { useEffect, useRef, useState } from 'react'
import { Carouselslider, ClientStyle, Featured, FeaturedHead, FooterBefore, GiftHead, GiftKitsCards, GiftKitsText, HeadSlider, LeftSide, ReviewContent, SaleCards, StyledButton, StyledButtons, StyledImage } from './Style'
import { GiftKitsData, LoveData, ReviewData, SaleData, SaleDataOne, cardData } from '@modules/Data/Data'
import { CustomRow, Flex } from '@components/others'
import { Col } from 'antd'
import sale_one from '@assets/images/sale_one.png'
import sale_two from '@assets/images/sale_two.png'
import gift from '@assets/images/gift.png'
import offer from '@assets/images/offer.png'
import { CardMain, CardMainOne, LoveCards } from '@modules/ProductCard/Partials/Style'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'
import { FiCheck, FiShoppingCart } from 'react-icons/fi'
import { Button } from '@components/form'
import BrandPartners from '@modules/BrandPartners/Partials/BrandPartners'
import Client from '@modules/Client/Partials/Client'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import ProductCardMobile from '@modules/ProductCard/Partials/ProductCardMobile'
import purple_star from '@assets/images/purple_star.png'
import { useDispatch } from 'react-redux'
import { add } from '@modules/Profile/Partials/CartSlice'
import ProgressiveImage from "react-progressive-graceful-image";
import offer_blur from "@assets/images/offer_blur.png"
import offer_two from '@assets/images/offer_two.png'




export const GiftButton = styled(Button)`
font-weight: 400;
    font-size:1rem;
    padding: 20px 30px;
    justify-content: center;
    display: flex;
    align-items: center;
    float: left;
    margin-right:20px;
    border-color: black;
    top: 5px;
    height: 50px;
    width: 50px;

    &:hover {
      background: linear-gradient(180deg, #5500FF 0%, #FF6565 100%);
      color: white !important;
    }

    .productwishlisticon {
    
        :hover {
            color: white !important;

        }
    }

    .productwishlist {
        background-color: white;
        color: black;
    border-radius: 50%;



     :hover {
            background: linear-gradient(180deg, #5500FF 0%, #FF6565 100%);
      color: white !important;
        }
 

    }
    

`

const CustomImg = styled.img`
  width: 100%;

  &:hover {
    box-shadow: 11px 11px 11px #EBEBEB;

  }
`;



const GiftKits = () => {

    const dispatch = useDispatch()



    const onChange = (currentSlide) => {
        // console.log(currentSlide);
    };


    const slider = useRef(null);

    const Navigate = useNavigate()

    const [clickedItems, setClickedItems] = useState(Array(cardData.length).fill(false));

    const [heartClickedItems, setHeartClickedItems] = useState(Array(cardData.length).fill(false));


    const handleButtonClick = (index, imageUrl) => {
        // console.log(imageUrl,'sssss');
        // Create a new array with updated clicked state for the clicked item
        const newClickedItems = [...clickedItems];
        newClickedItems[index] = !newClickedItems[index];
        setClickedItems(newClickedItems);
        dispatch(add(imageUrl))

    };

    // Function to handle the click event for a specific item
    const handleHeartClick = (index) => {
        // Create a new array with updated clicked state for the clicked item
        const newHeartClickedItems = [...heartClickedItems];
        newHeartClickedItems[index] = !newHeartClickedItems[index];
        setHeartClickedItems(newHeartClickedItems);
    };

    const [isBelowMaxWidth, setIsBelowMaxWidth] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsBelowMaxWidth(window.innerWidth <= 500);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <GiftHead>
                <Container>
                    <GiftKitsText >
                        <h1>Gift Kits & Baskets</h1>
                        <p>From fast, on-demand offerings to completely branded experiences, here’s a look into how you can get started on your gifting journey.</p>
                    </GiftKitsText>
                    <br />
                    <CustomRow style={{ display: 'flex', justifyContent: 'space-around' }}>
                        {GiftKitsData.map(({ pics, title, key, subtitle, bgcolor, placeholdersrc }, i) => (
                            <Col span={12} md={6} key={key}>
                                <ProgressiveImage src={pics} placeholder={placeholdersrc} >
                                    {(src, loading) => (
                                        <GiftKitsCards className={loading ? 'loading' : 'loaded'} >
                                            {loading ? (
                                                <div></div>
                                            ) : (
                                                <>
                                                    <img
                                                        src={src}
                                                        alt="pics"
                                                        width={'100%'}
                                                        className={`image${loading ? ' loading' : ' loaded'}`}
                                                    />
                                                    <br />
                                                    <h3 style={{ textAlign: 'center' }}>{title}</h3>
                                                    {/* <p style={{ textAlign: 'center' }}>{subtitle}</p> */}
                                                </>
                                            )}
                                        </GiftKitsCards>
                                    )}
                                </ProgressiveImage>
                            </Col>
                        ))}
                    </CustomRow>
                    <StyledButton>SEE ALL GIFT</StyledButton>
                    <br /> <br /><br /><br />

                    <CustomRow space={[24, 24]} >
                        {SaleData.map(({pics, key, placeholdersrc},i) => (
                            <Col span={12} md={6} key={key}>
                                <ProgressiveImage src={pics} placeholder={placeholdersrc} >
                                    {(src, loading) => (
                                        <SaleCards className={loading ? 'loading' : 'loaded'}>
                                            {loading ? (
                                                <div></div>
                                            ) : (

                                                <img src={src} alt={src} width={'100%'} />
                                            )}
                                        </SaleCards>
                                    )}
                                </ProgressiveImage>
                            </Col>
                            
                        ))}
                        {SaleDataOne.map(({saleTwo, key, placeholdersrc},i) => (
                            <Col span={24} md={12} key={key}>
                                <ProgressiveImage src={saleTwo} placeholder={placeholdersrc} >
                                    {(src, loading) => (
                                        <SaleCards className={loading ? 'loading' : 'loaded'}>
                                            {loading ? (
                                                <div></div>
                                            ) : (

                                                <img src={src} alt={src} width={'100%'} />
                                            )}
                                        </SaleCards>
                                    )}
                                </ProgressiveImage>
                            </Col>
                            
                        ))}
                        
                    </CustomRow>
                    
                </Container>
              
                <ClientStyle >

                <Client />
                </ClientStyle>
                <br /><br />
                <Container>
                    <FeaturedHead>
                        <Featured>

                            <h1>Featured Items
                                <img src={purple_star} alt='' />
                            </h1>
                            <p>From fast, on-demand offerings to completely branded experiences, here’s a look into how you can get started on your gifting journey.</p>
                        </Featured>
                        <br />
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
                                                            <div></div>
                                                        ) : (
                                                            <img src={src} alt='image' style={{ width: '100%' }} />
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
                                                onClick={() => handleButtonClick(index, imageUrl)}
                                            />
                                        </Flex>

                                    </Col>
                                ))}
                            </CustomRow>)}
                        <br />
                        <StyledButton>SEE ALL ITEMS</StyledButton>
                        <br />
                    </FeaturedHead>
                </Container>
                <br />

                <Container>
                    <CustomRow space={[24, 24]}>
                        <Col span={24} md={13}>
                            <LeftSide>
                                <h1>LOVE PICTURE OUR GIFT</h1>
                                <p>From fast, on-demand offerings to completely branded experiences, here’s a look into how you can get started on your gifting journey.</p>
                            </LeftSide>
                        </Col>
                        <Col span={24} md={12}>
                            <CustomRow space={[12, 12]}>
                                {LoveData.map(({ imageUrl, key, placeholdersrc, secondPic }) => (
                                  
                                        <Col span={24} md={12}>
                                            <ProgressiveImage src={imageUrl} placeholder={placeholdersrc}>
                                                {(src, loading) => (
                                                    <LoveCards className={loading ? 'loading' : 'loaded'}>
                                                        {loading ? (
                                                            <div></div>
                                                        ) : (
                                                            <>
                                                                <CustomImg src={imageUrl} alt={imageUrl} width={'100%'} />
                                                            </>

                                                        )}
                                                    </LoveCards>
                                                )}
                                            </ProgressiveImage>
                                        </Col>
                                    
                                   
                                ))}
                                 {LoveData.map(({ imageUrl, key, placeholdersrc, secondPic }) => (
                                  
                                  <Col span={24} md={24}>
                                      <ProgressiveImage src={secondPic} placeholder={placeholdersrc}>
                                          {(src, loading) => (
                                              <LoveCards className={loading ? 'loading' : 'loaded'}>
                                                  {loading ? (
                                                      <div></div>
                                                  ) : (
                                                      <>
                                                          <CustomImg src={secondPic} alt={secondPic} width={'100%'} />
                                                      </>

                                                  )}
                                              </LoveCards>
                                          )}
                                      </ProgressiveImage>
                                  </Col>
                              
                             
                          ))}
                            </CustomRow>
                        </Col>
                        

                        <Col span={24} md={12}>
                        {LoveData.map(({ thirdPic, key, placeholdersrc }) => (
                                  
                                
                                      <ProgressiveImage src={thirdPic} placeholder={placeholdersrc}>
                                          {(src, loading) => (
                                              <LoveCards className={loading ? 'loading' : 'loaded'}>
                                                  {loading ? (
                                                      <div></div>
                                                  ) : (
                                                      <>
                                                          <CustomImg src={thirdPic} alt={thirdPic} width={'100%'} />
                                                      </>

                                                  )}
                                              </LoveCards>
                                          )}
                                      </ProgressiveImage>
                               
                              
                             
                          ))}
                            
                            {/* <CustomImg src={gift}    alt={gift} width={'100%'} /> */}

                        </Col>
                    </CustomRow>
                    <br />
                </Container>
                <Container>

                    <BrandPartners />
                </Container>
                <br />
                <br />
                <Container>
                    <FooterBefore>
                        <h1>What People Say About Us?</h1>
                        <br />
                        <p>From fast, on-demand offerings to completely branded experiences, here’s a look into how you can get started on your gifting journey.</p>
                    </FooterBefore>
                    <br />
                    <HeadSlider>

                        <Carouselslider slidesPerRow={3} slidesToScroll={1} dotPosition={'bottom'} ref={slider} draggable autoplay autoplaySpeed={2000} afterChange={onChange} dots={true} responsive={[{ breakpoint: 1200, settings: { slidesPerRow: 3 } },
                        { breakpoint: 900, settings: { slidesPerRow: 2 } },
                        { breakpoint: 697, settings: { slidesPerRow: 1 } }]}>
                            {ReviewData.map(({ top_pic, head, subhead, key, boxShadow }, index) => (
                                <div key={key}>

                                    <ReviewContent>
                                        <img src={top_pic} alt='pic' />
                                        <p>{subhead}</p>

                                        <h2>{head}</h2>
                                    </ReviewContent>

                                </div>
                            ))}
                        </Carouselslider>
                    </HeadSlider>

                </Container>
            </GiftHead>
        </div>
    )
}

export default GiftKits