import { Row, Col, Divider, Typography } from 'antd';
import CardProduct from './cardProduct';

const { Title } = Typography;

const ListProduct = (props) => {
    const { products } = props;

    return (
        <Row gutter={[16, 16]} justify="center">
            <Col span={24} style={{paddingTop: "24px"}}>
                <Title level={3} className="title">Lista de Productos</Title>
            </Col>

            <Col span={20}>
                <Divider />
            </Col>
            {
                products.length > 0 &&
                products.map((product) =>
                    <Col xs={24} sm={12} md={12} lg={6} key={product.id}>
                        <CardProduct product={product} />
                    </Col>
                )
            }
        </Row>
    )
}

export default ListProduct;