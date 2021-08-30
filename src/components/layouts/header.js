import { useState } from 'react';
import { Layout, Row, Col, Button, Divider, Menu, Badge } from 'antd';
import { ShoppingCartOutlined, DownCircleOutlined, UpCircleOutlined } from '@ant-design/icons';
import Image from 'next/image'
import Link from 'next/link'

const { Header } = Layout;

const HeaderApp = (props) => {

    const [showNavBar, setShowNavBar] = useState(false)

    return (
        <Header>
            <Row>
                <Col xs={24} sm={24} md={24} lg={8}>
                    <Row gutter={[16, 16]} className="center-menos-md">
                        <Col span={7} >
                            <a>FACEBOOK</a>
                        </Col>
                        <Col span={7} >
                            <a>TEXT</a>
                        </Col>
                        <Col span={5} style={{ paddingTop: "6px" }}>
                            <Image src="/images/logo-vk.png" width={25} height={20} />
                        </Col>
                        <Col span={5} style={{ paddingTop: "8px" }}>
                            <Image src="/images/logo-face.png" width={25} height={25} />
                        </Col>
                    </Row>

                </Col>
                <Col xs={24} sm={10} md={10} lg={8} >
                    <Row justify="center">
                        <Link href="/">
                            <Image src="/images/logo.png" width={250} height={100} />
                        </Link>
                    </Row>
                </Col>
                <Col xs={24} sm={14} md={14} lg={8} >
                    <Row style={{ marginTop: "15px" }} className="div-btns">
                        <Col>
                            <Button
                                type="primary"
                                onClick={() => this.enterLoading(1)}
                                size={"large"}
                            >
                                CONTACTO DIRECTO AQUÍ
                            </Button>
                            <Link href="/cart">
                                <Button
                                    ghost
                                    type="primary"
                                    icon={<ShoppingCartOutlined />}
                                    size={"large"}
                                    style={{ marginLeft: "20px" }}
                                />

                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Divider />
            <Row justify="center">
                <Col span={24} className="div-btn-menu">
                    <Row justify="center">
                        {
                            showNavBar ?
                                <UpCircleOutlined className="btn-menu" onClick={() => setShowNavBar(false)} /> :
                                <DownCircleOutlined className="btn-menu" onClick={() => setShowNavBar(true)} />
                        }
                    </Row>
                </Col>
                <Menu className={`nav-bar ${showNavBar && "dflex"}`}>
                    <Menu.Item key="mail">
                        <Badge status="error" />
                        <Link href="/">
                            Productos
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="mail2">
                        <Badge status="error" /> Categorias
                    </Menu.Item>
                    <Menu.Item key="mail3">
                        <Badge status="error" /> Almacen
                    </Menu.Item>
                    <Menu.Item key="mail4">
                        <Badge status="error" /> Clientes
                    </Menu.Item>
                    <Menu.Item key="mail5">
                        <Badge status="error" /> Soporte
                    </Menu.Item>
                    <Menu.Item key="mail6">
                        <Badge status="error" /> Contacto
                    </Menu.Item>

                </Menu>
            </Row>
        </Header>
    )
}

export default HeaderApp;