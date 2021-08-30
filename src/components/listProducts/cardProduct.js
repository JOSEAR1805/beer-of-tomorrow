import Image from 'next/image'
import { Row, Col, Card, Typography } from 'antd';
import Link from 'next/link'

const { Title } = Typography;

const CardProduct = (props) => {
    const { product } = props

    return (
        <Link key={1} href="/product/[idProduct]" as={`/product/${product.id}`} passHref>
            <a>
                <Card className="card-product" hoverable >
                    <Row justify="center">
                        <Col span={24}>
                            <Title level={2} className="title">{product.name}</Title>
                        </Col>
                        <Col>
                            <Image src={product.image_url} width={70} height={180} />
                        </Col>
                        <Col span={24}>
                            <Col className="div-litres">
                                {product.boil_volume.value} {product.boil_volume.unit}
                            </Col>
                            <Col className="div-price">
                                {product.abv * 1000} $
                            </Col>

                        </Col>
                    </Row>
                </Card>
            </a>
        </Link>
    )
}

export default CardProduct;