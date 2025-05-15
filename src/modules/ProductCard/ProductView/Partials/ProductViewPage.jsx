import React from 'react'
import giftkits_two from '@assets/images/giftkits_two.png'
import { ProductHead } from './Style'
import { CustomRow, Flex } from '@components/others'
import { Col } from 'antd'
import { Container } from '@modules/Objectives/Partials/Style'
import { Button } from '@components/form'
import { FiShoppingCart } from 'react-icons/fi'
import { NavHeader } from '@layout/Partials/NavHeader'

const ProductViewPage = () => {
    return (
        <>
        <NavHeader/>
        <Container>
            <ProductHead>
                <CustomRow style={{ display: 'flex', justifyContent: 'space-around' }} space={[24, 24]}>
                    <Col span={24} md={10}>
                        <img className='productimg' src={giftkits_two} alt='' />
                    </Col>
                    <Col span={24} md={14}>
                        <h1 className='producttitle' >Bamboo Cup MG 656</h1>
                        <h3>Categories: Drink-ware Mugs,<br />

                            Eco-friendly gifting,<br />

                            Last Minute Gifting</h3>
                        <Flex spacearound className='cartlist' gap={'30px'}>
                            <Button.Primary
                                text={'ADD TO CART'}
                                icon={<FiShoppingCart style={{ marginRight: '10px' }} />}
                            />
                            <h2>Product added to the list
                                Browse the list
                                Related products</h2>

                        </Flex>
                    </Col>
                </CustomRow>

            </ProductHead>
        </Container>
        </>
    )
}

export default ProductViewPage