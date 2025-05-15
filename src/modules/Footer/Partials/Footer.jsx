import React from 'react'
import { CustomRow, Flex } from '@components/others'
import { Col } from 'antd'
import LogoImg from '@assets/images/FestiveFiveLogo.png'
import { CopyRightFooter, CopyWrightHolder, FooterSectionStyle } from './Style'
import { BiLogoInstagram } from "react-icons/bi";
import { LuTwitter } from "react-icons/lu";
import { MdOutlineEmail } from 'react-icons/md'
import { FaLinkedin, FaPinterest } from 'react-icons/fa6'
import { PiSpotifyLogo } from "react-icons/pi";
import gift_footer from '@assets/images/gift_fooer.png'



const Footer = () => {

    return (
        <div>
            <FooterSectionStyle>
                <CustomRow space={[24, 24]}>
                    <Col span={12} md={12} lg={6}>
                        <img src={gift_footer} alt='' /><br />
                        <div style={{ background: '#fff', display: 'inline-block', padding: '5px 10px', borderRadius: '5px', boxShadow: '1px 2px 4px 0px rgba(0, 0, 0, 0.25)', marginBottom: '20px' }}>
                            <img src={LogoImg} alt="Logo" style={{ width: '120px' }} />
                        </div>
                        {/* <p>
                            The standard chunk of Lorem Ipsum used<br /> since the 1500s is reproduced below for<br /> those interested.
                        </p> */}
                        <p>At Festive Five, we specialize in curating memorable gifts that elevate any occasion. Let us turn your moments into cherished memories with our thoughtful and unique selections..</p>
                    </Col>
                    <Col span={24} md={12} lg={6}>
                        <h3>Product</h3>
                        <p>Gifts</p>
                        <p></p>
                        <br />
                        <h3>Legal</h3>
                        <p>Privacy Policy</p>
                        <p>Security</p>
                        <p>Terms & Conditions</p>
                    </Col>
                    <Col span={24} md={12} lg={6}>
                        <h3>Solutions</h3>
                        <p>Use Cases</p>
                        <p>Reasons to Gift</p>
                        <p></p>
                        <p></p>
                        <br />
                        <h3>Connect</h3>
                        <Flex gap={'15px'}>
                            {/* <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzCpPPWRLmkSKMRbmxhQXKTWqwXzkNwjCQhMbxvLcnrNJdKdNWWWnTJhQQKWcpnjxlGmhhW">
                                <MdOutlineEmail color="white" size={24} />
                            </a> */}
                            <a href="https://www.instagram.com/jeffrin_webster/"><BiLogoInstagram color="white" size={24} /></a>
                            <a href="https://www.linkedin.com/in/jeffrinwebster/"><FaLinkedin color="white" size={24} /></a>
                            {/* <a href="#"><FaPinterest color="white" size={24} /></a>
                            <a href="#"><PiSpotifyLogo color="white" size={24} /></a> */}


                        </Flex>

                    </Col>
                    <Col span={24} md={12} lg={6}>
                        <h3>Company</h3>
                        <p>Our Story</p>
                        <p>Careers</p>
                        <p></p>

                    </Col>
                </CustomRow>


            </FooterSectionStyle>

            <CopyRightFooter>
                <CustomRow space={[24, 24]}>
                    <Col lg={18} md={16} sm={24}>
                        {/* <CopyWrightHolder>© 2023 Festive Five. All Rights Reserved. With love by  <a href="https://ideaux.in/" target="_blank">IDEAUXTECH</a></CopyWrightHolder> */}
                    </Col>
                </CustomRow>
            </CopyRightFooter>

        </div>
    )
}

export default Footer