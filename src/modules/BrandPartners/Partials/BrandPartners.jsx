import React from 'react'
import brand_one from '@assets/images/brand_one.png'
import giftkits_four from '@assets/images/giftkits_four.png'

import { CustomRow, Flex } from '@components/others'
import { Col } from 'antd'
import { Container } from '@modules/Objectives/Partials/Style'
import { Brand, BrandCard, BrandCardImg, Head } from './Style'
import { BrandLogoDatas } from '@modules/Data/Data'
import valentine from '@assets/images/valentine.png'
import { Button } from '@components/form'
import brand_grey from '@assets/images/brand_grey.png'


const BrandPartners = () => {
    return (
        // <div>
        //     <img src={BrandPartner} alt='' width={'100px'} />
        //     asdsfd
        // </div>
        <>

            {/* <Brand> */}
            <Container>
                <Head>
                    <Brand>
                        <br />
                        <h1 style={{ textAlign: 'center', color: 'white' }}>Brand Partners</h1>
                        <br />
                        <Flex center>

                            <CustomRow style={{ width: '800px' }}>
                                {BrandLogoDatas.map(({ imageUrl, key }) => (
                                    <Col span={6} md={6} key={key}>
                                        <BrandCard>
                                            <BrandCardImg>
                                                <img src={imageUrl} alt='' />
                                            </BrandCardImg>

                                        </BrandCard>

                                    </Col>
                                ))}
                            </CustomRow>
                        </Flex>
                    </Brand>
                    {/* <CustomRow space={[24, 24]} className='brandContent'>
                        <Col span={24} md={12}>
                            <img className='valentine' src={brand_grey} alt=''  />
                          
                        </Col>
                        <Col span={24} md={12}>
               
                            <CustomRow>
                                <Col span={24} md={24}>
                                  
                                    <h1 className='valentinetitle'>Embrace the spirit of Valentine's Day and make every moment unforgettable</h1>
                                    <p className='valentinepara'>Celebrate love with our irresistible Valentine's Day Sale! :two_hearts: Elevate your gifting game and surprise your special someone with thoughtful presents they'll cherish.</p>
                                    <h2 className='shopnow'>SHOP NOW</h2>

                                    <Button.Primary
                                        text={'SHOP NOW'} 
                                        className='shopnow'


                                    />
                                  
                                </Col>
                                
                            </CustomRow>
                      

                        </Col>
                    </CustomRow> */}
                     <CustomRow space={[24, 24]} className='brandContent'>
                        <Col span={24} md={12}>
                            <img className='greyimg' src={valentine} alt='' />
                        </Col>
                        <Col span={24} md={12}>
                            <CustomRow>
                                <Col span={24} md={24}>
                                    <h1 className='valentinetitle'>Embrace the spirit of Valentine's Day and make every moment unforgettable</h1>
                                    <p className='valentinepara'>Celebrate love with our irresistible Valentine's Day Sale! :two_hearts: Elevate your gifting game and surprise your special someone with thoughtful presents they'll cherish.</p>
                                    <Button.Primary
                                        text={'SHOP NOW'} 
                                        className='shopnow'


                                    />
                                </Col>
                            </CustomRow>
                        </Col>
                    </CustomRow>
                </Head>
            </Container>
            {/* </Brand> */}


            {/* </Container> */}
        </>
    )
}

export default BrandPartners