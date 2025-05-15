import { CustomRow, Flex } from '@components/others'
import { cardData } from '@modules/Data/Data'
import { Card, Col } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import { GiftButton } from '../../GiftKits/Partials/GiftKits'
import { FiCheck, FiShoppingCart } from 'react-icons/fi'
import { Button } from '@components/form'
import { useNavigate } from 'react-router-dom'
import ProgressiveImage from "react-progressive-graceful-image";


const CardMainMobile = styled.div`
    background-color: white;
    /* border-radius: 8px; 
    overflow: hidden; */
    /* height: 400px; */
    border: 3px solid black;

    & img {
        width: 100%;
        height: 140px;
        /* object-fit: cover; */
    }

    /* Apply border-radius to bottom corners only */
    border-bottom-left-radius: 15%;
    border-bottom-right-radius: 15%;

    @media screen and (max-width:320px) {
      height: 220px;
      border-color: black;
      
    }

    @media screen and (min-width:321px) and (max-width:500px) {
      height: 235px;
      border-color: black;
      
    }

    @media screen and (min-width:500px) and (max-width:2000px) {
     display: none ;
      
    }

  
`;
const CardMobileImg = styled.div`
  
 &.loading {
  filter: blur(20px);
  clip-path: inset(0);
}
&.loaded {
  filter: blur(0px);
  transition: filter 2s linear;
}


`

const ProductCardMobile = () => {



  const Navigate = useNavigate()


  const [clickedItems, setClickedItems] = useState(Array(cardData.length).fill(false));

  const handleButtonClick = (index) => {
    // Create a new array with updated clicked state for the clicked item
    const newClickedItems = [...clickedItems];
    newClickedItems[index] = !newClickedItems[index];
    setClickedItems(newClickedItems);
  };

  return (
    <div><CustomRow space={[24, 24]} style={{ display: 'flex', justifyContent: 'center', paddingTop: '25px' }}>
      {cardData.map(({ imageUrl, title, key, placeholdersrc }, index) => (
        <Col span={12} md={12} lg={6} key={key}>
          <ProgressiveImage src={imageUrl} placeholder={placeholdersrc}>
            {(src, loading) => (
              <CardMainMobile hoverable>
                <CardMobileImg className={loading ? 'loading' : 'loaded'}>
                  {loading ? (
                    <div></div>
                  ) : (
                    <img src={src} alt={title} />
                  )}
                </CardMobileImg>

                <Flex center aligncenter>
                  <div></div>
                  <GiftButton
                    style={{ borderRadius: '50%', height: '50px', width: '50px', left: '8px' }}
                    className='productwishlist'
                    icon={clickedItems[index] ? <FiCheck style={{ marginRight: '0px', color: 'black' }} className='productwishlisticon' /> : <FiShoppingCart style={{ marginRight: '0px', color: 'black' }} className='productwishlisticon' />}
                    onClick={() => handleButtonClick(index)}
                  />
                </Flex>
              </CardMainMobile>
            )}
          </ProgressiveImage>
        </Col>
      ))}
    </CustomRow>
    </div>
  )
}

export default ProductCardMobile