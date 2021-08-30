import { Row, Col, Typography, Button, Divider } from 'antd';
import CardProductCart from './cardProductCart';
import {  useSelector } from 'react-redux';

const { Title, Text } = Typography;

const ShoppingCart = (props) => {
    const { shoppingCart } = useSelector((stateData) => stateData.global)

    const handleCalculateAmount = () => {
        let auxAmountTotal = 0
        shoppingCart.map((product) => {
            auxAmountTotal +=  product.quantity * product.price
        })
        return auxAmountTotal
    }

    return (
        <Row gutter={[24, 16]} justify="center" style={{ marginBottom: "24px" }}>

            <Col span={24} style={{paddingTop: "24px"}}>
                <Title level={3} className="title">Carrito de compra</Title>
            </Col>

            <Col span={20}>
                <Divider />
            </Col>

            {
                shoppingCart &&
                shoppingCart.map((item) => (
                    <Col xs={24} sm={24} md={20} lg={18} >
                        <CardProductCart product={item} />
                    </Col>
                ))
            }

            <Col span={20}>
                <Divider />
            </Col>

            <Col span={20} >
                <Row justify="space-between">
                    <Col>
                        <Text strong style={{ fontSize: "1.6rem" }}>Monto Total: </Text>
                        <Text type="secondary" style={{ fontSize: "1.6rem" }}>{handleCalculateAmount()} $</Text>
                    </Col>
                    <Col>
                        <Button
                            type="primary"
                            size={"large"}
                        >
                            PAGAR
                        </Button>
                    </Col>

                </Row>
            </Col>
        </Row>
    )
}

export default ShoppingCart;