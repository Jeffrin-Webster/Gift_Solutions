import React from 'react'
import { CustomRow, Flex } from '@components/others'
import { Col } from 'antd'
import { Container } from '@modules/Objectives/Partials/Style'
import { Brand, BrandCard, BrandCardImg } from '../../BrandPartners/Partials/Style'
import { BrandLogoDatas } from '@modules/Data/Data'



const BrandPartnersAboutus = () => {
    return (

        <>

            <Container>
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
                   
            </Container>
        </>
    )
}

export default BrandPartnersAboutus