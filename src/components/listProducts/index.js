import { Row, Col } from 'antd';
import CardProduct from './cardProduct';

const ListProduct = (props) => {
    const { products } = props;

    return (
        <Row gutter={[16, 16]}>
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