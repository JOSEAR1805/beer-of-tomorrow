import { Layout, Row, Col } from 'antd';
import FooterApp from './footer';
import HeaderApp from './header';

const { Content } = Layout;

const LayoutApp = (props) => {
    const { children } = props;
    
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Row justify="center">
                <Col lg={24} xl={18} style={{ background: "#fff" }}>
                    <HeaderApp {...props}/>

                    <Content style={{textAlign: "center"}}>
                        { children }
                    </Content>

                    <FooterApp />
                </Col>
            </Row>
        </Layout>
    );
}

export default LayoutApp