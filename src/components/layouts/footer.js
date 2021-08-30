import { Layout, Row, Col, Button, Typography, List } from 'antd';
import Image from 'next/image'
import Link from 'next/link'

const { Title } = Typography;
const { Footer } = Layout;

const FooterApp = (props) => {

    return (
        <Footer>
            <Row gutter={[16, 16]} style={{ marginBottom: "15px" }}>
                <Col xs={24} sm={24} md={24} lg={6}>
                    <Link href="/">
                        <a>
                            <Image src="/images/logo.png" alt="bot-logo" width={250} height={100} />
                        </a>
                    </Link>
                </Col>
                <Col xs={24} sm={8} md={8} lg={6}>
                    <Image src="/images/icon-location.png" alt="bot-location" width={25} height={25} />
                    <p>Neveria 4672, Las Condes, Región Metropolitana, Chile</p>
                </Col>
                <Col xs={24} sm={8} md={8} lg={4}>
                    <Image src="/images/icon-phone.png" alt="bot-phone" width={25} height={25} />
                    <List>
                        <List.Item>(58) 4324 534 534</List.Item>
                        <List.Item>(57) 42342 423423</List.Item>
                    </List>
                </Col>
                <Col xs={24} sm={8} md={8} lg={4}>
                    <Image src="/images/icon-email.png" alt="bot-email" width={25} height={25} />
                    <List>
                        <List.Item>user@exmple.com</List.Item>
                        <List.Item>admin@example.com</List.Item>
                    </List>
                </Col>
                <Col xs={24} sm={24} md={24} lg={4}>
                    <Row>

                        <Button
                            type="primary"
                            // loading={loadings[1]}
                            onClick={() => this.enterLoading(1)}
                            size={"medium"}
                            block
                        >
                            BUTTOM
                        </Button>
                        <small>Lorem ipsum es el texto que se usa habitualmente</small>
                    </Row>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={12} lg={6}>
                    <Title level={3}>Resources</Title>
                    <Row>
                        <List>
                            <List.Item><a>Scalfolds</a></List.Item>
                            <List.Item><a>Umi</a></List.Item>
                            <List.Item><a>Ant Design</a></List.Item>
                            <List.Item><a>Next</a></List.Item>
                        </List>
                    </Row>
                </Col>
                <Col xs={24} sm={12} md={12} lg={6}>
                    <Title level={3}>Tecnologías</Title>
                    <Row>
                        <List>
                            <List.Item><a>ReactJS</a></List.Item>
                            <List.Item><a>JavaScript</a></List.Item>
                            <List.Item><a>Redux</a></List.Item>
                            <List.Item><a>Axios</a></List.Item>
                        </List>
                    </Row>


                </Col>
                <Col xs={24} sm={12} md={12} lg={6}>
                    <Title level={3}>Products</Title>
                    <Row>
                        <List>
                            <List.Item><a>Catalgs</a></List.Item>
                            <List.Item><a>Category</a></List.Item>
                            <List.Item><a>Product</a></List.Item>
                        </List>
                    </Row>

                </Col>
                <Col xs={24} sm={12} md={12} lg={6}>
                    <Title level={3}>Help</Title>
                    <Row>
                        <List>
                            <List.Item><a>GitHub</a></List.Item>
                            <List.Item><a>FAQ</a></List.Item>
                            <List.Item><a>Issues</a></List.Item>
                            <List.Item><a>Discussions</a></List.Item>
                        </List>
                    </Row>

                </Col>
            </Row>
        </Footer>
    )
}

export default FooterApp;