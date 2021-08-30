import { useState } from 'react';
import { Row, Col, Typography, Button, Input, InputNumber, Divider } from 'antd';
import Image from 'next/image';
import { RightCircleOutlined, LeftCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Title } = Typography;

const ProductDetails = (props) => {
    const { loading, product } = props;
    console.log('LO QUE LLEGA', product)

    const [quantity, setQuantity] = useState(1)

    const handleCalculate = (type) => {
        switch (type) {
            case "suma":
                setQuantity(quantity === 12? quantity: quantity + 1)
                break;
            case "resta":
                setQuantity(quantity === 1? quantity: quantity - 1)
                break;
        }
    }

    return (
        <>
        {
            !loading &&
            <Row gutter={[16, 16]} className="div-product-details" justify="center">
                <Col xs={24} sm={24} md={10} lg={10} className="details">
                    <Title level={2} className="title">{product.name}</Title>
                    <Title level={4} className="subtitle">Venta distribution</Title>

                    <Row gutter={[16, 16]} justify="start">
                        <Col span={12} className="one">
                            Eslogan
                        </Col>
                        <Col span={12} className="two">
                            {product.tagline}
                        </Col>
                        <Col span={12} className="one">
                            Capacidad
                        </Col>
                        <Col span={12} className="two">
                            {product.boil_volume.value} {product.boil_volume.unit}
                        </Col>
                        <Col span={12} className="one">
                            Atenucion
                        </Col>
                        <Col span={12} className="two">
                            {product.attenuation_level}
                        </Col>
                        
                        <Col span={12} className="one">
                            fecha
                        </Col>
                        <Col span={12} className="two">
                            {product.first_brewed}
                        </Col>
                    </Row>

                    <Row gutter={[16, 16]} justify="start" style={{padding: "36px 0px"}}>
                        <Col xs={24} sm={24} md={24} lg={8} className="one">
                            <Title level={2} className="title">1900 $</Title>
                        </Col>
                        <Col xs={14} sm={14} md={14} lg={10} className="two">
                            <Input.Group compact>
                                <Button onClick={() => handleCalculate("resta")}><LeftCircleOutlined /> </Button>
                                <InputNumber min={1} max={12} value={quantity}/>
                                <Button onClick={() => handleCalculate("suma")}><RightCircleOutlined /> </Button>
                            </Input.Group>
                        </Col>
                        <Col xs={10} sm={10} md={10} lg={6} className="one">
                            <Button ghost
                                type="primary"
                                icon={<ShoppingCartOutlined />}> Agregar </Button>
                        </Col>
                    </Row>
                    
                    <Row gutter={[16, 16]}>
                        <Col>
                            <Divider orientation="left">Description</Divider>
                            <p style={{textAlign: "left"}}>
                                {product.description}
                            </p>
                        </Col>

                    </Row>

                </Col>
                <Col xs={24} sm={24} md={10} lg={10} className="image">
                    <Row className="center-image">
                        <Col>
                            <Image src={product.image_url} width={150} height={400} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        }
        </>
    )
}

export default ProductDetails;