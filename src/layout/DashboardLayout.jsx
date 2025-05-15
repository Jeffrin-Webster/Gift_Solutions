import React, { useLayoutEffect, useState } from 'react'
import { BodyContent, MainLayout,TopNavBar } from '@layout/Partials/Style'
import { Drawer, Layout } from 'antd'
import { SideMenu } from '@layout/Partials/SideMenu'
import { NavHeader } from './Partials/NavHeader'
import Objectives from '@modules/Objectives/Partials/Objectives'
import GiftKits from '@modules/GiftKits/Partials/GiftKits'
import Demmo from '@modules/ProductCard/Partials/ProductCardMobile'


const DashboardLayout = ({ children }) => {

    // const [collapse, setCollapse] = useState(false)
    const [collapsed, setCollapsed] = useState(false);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('left');

    const updateCollapse = () => {
        setCollapsed(!collapsed)
    }

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onChange = (e) => {
        setPlacement(e.target.value);
    };

    return (
        <MainLayout>
            <Layout>
                {/* <SideMenuLayout width={'280'} trigger={null} collapsible collapsed={collapsed}>
                        <HeaderNav>
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                            />
                            <div>
                                {
                                    collapsed ? null :
                                        <h3 style={{ fontSize: '20px', marginLeft: '10px' }}>NAME</h3>
                                    // <p style={{ transition: '0.5s', overflow: 'hidden' }}>
                                    // <img src={Logo} />
                                    // </p>
                                }
                            </div>
                        </HeaderNav>
                    <SideMenu collapsed={collapsed} />
                </SideMenuLayout> */}

                <Drawer
                    title="NAME"
                    placement={placement}
                    closable={false}
                    onClose={onClose}
                    open={open}
                    key={placement}
                    width={250}
                >
                    <SideMenu collapsed={collapsed} />
                </Drawer>
                <Layout>
                    {/* <TopHeader> */}
                        {/* <NavHeader updateCollapse={updateCollapse} showDrawer={showDrawer} /> */}
                    {/* </TopHeader> */} 
                    <NavHeader/>
 
                    <Objectives/>
           {/* <GiftKits/> */}
                   {/* <Demo/> 

{/* 
                    <BodyContent
                        style={{
                            margin: '1px 1px',
                            padding: 24,
                            // minHeight: 280,
                        }}
                    >
                        {children}
                    </BodyContent> */}
                </Layout>
            </Layout>
        </MainLayout>
    )
}

export default DashboardLayout
