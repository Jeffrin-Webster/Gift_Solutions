import { CustomRow, Flex } from '@components/others'
import { Col, Table } from 'antd'
import React from 'react'
import giftkits_four from '@assets/images/giftkits_four.png'
import { Button, CustomInput } from '@components/form';
import { Container } from '@modules/Objectives/Partials/Style';
import { FaMinus } from "react-icons/fa6";
import { NavHeader } from '@layout/Partials/NavHeader';
import Footer from '@modules/Footer/Partials/Footer';
import { BillTable, ProfileHead, profileData } from './Style';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from './CartSlice';

export const Profile = () => {

  const dispatch = useDispatch()

  const selectedproducts = useSelector(store=>store.cart)

  console.log(selectedproducts,'selectedproducts');

  const RemovefromCart = (key) =>{
    // console.log('tttttt');
    // console.log(key,'kkkkkkkkkkkkkkkkk');
    dispatch(remove(key))
}

// console.log(RemovefromCart,'RemovefromCart');


  return (
    <>
    <NavHeader/>
      <Container>
        <ProfileHead>
          <CustomRow>

            <Col span={24} md={24}>
              <Flex center>

                <h1>Request a Quote</h1>
              </Flex>
            </Col> 
          </CustomRow>
          <CustomRow>
            <Col span={24} md={22}>
              <BillTable>
            <table style={{ marginTop: '30px' }}>
              <thead >
                <tr>
                  <th style={{ textAlign: 'center', width: '80px' }}>  </th>
                  <th style={{ textAlign: 'center' }}>PRODUCT  </th>

                  <th style={{ textAlign: 'start' }}>  </th>


                </tr>
              </thead>
              <tbody>
                {profileData.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td style={{ textAlign: 'start' }}><img src={giftkits_four} width={'70px'} alt='' /></td>
                    <td>
                      <Flex spacearound>

                        {item.description}  <Button.Primary
                          className='productminusbtn'
                          onClick={()=>RemovefromCart(item.id)}
                          icon={<FaMinus color='black' style={{ marginRight: '0px' }} />}

                        />
                      </Flex>
                    </td>


                  </tr>
                ))}
              </tbody>
            </table>
          </BillTable>
            </Col>
          </CustomRow>
          
          <br />
          <CustomRow space={[24, 24]}>
            <Col span={24} md={22}>
              <CustomInput label={'First Name'} />

            </Col>
            <Col span={24} md={22}>
              <CustomInput label={'Last Name'} />
            </Col>
            <Col span={24} md={22}>
              <CustomInput label={'Company'} />
            </Col>
            <Col span={24} md={22}>
              <CustomInput label={'Phone'} />
            </Col>
            <Col span={24} md={22}>
              <CustomInput label={'Email'} />
            </Col>
            <Col span={24} md={22}>
              <CustomInput label={'Message (optional)'} />
            </Col>
            <Button.Primary
              text={'SEND YOUR REQUEST'}
              className='btnstyleprofile'
            />
          </CustomRow>
          <br />



        </ProfileHead>
      </Container>
      <Footer/>
    </>

  )
}
