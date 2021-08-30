import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { Row, Col, Typography, Button, Input, Tooltip, InputNumber, Card } from 'antd';
import { RightCircleOutlined, LeftCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { editProduct, deleteProduct } from '@redux/actions/gloabalActions';

const { Title } = Typography;

const CardProductCart = (props) => {
    const { product } = props

    const dispatch = useDispatch()

    const handleCalculate = (type) => {
        let data = product;

        switch (type) {
            case "suma":
                data.quantity = product.quantity + 1;
                dispatch(editProduct(data))
                break;
            case "resta":
                data.quantity = product.quantity - 1;
                dispatch(editProduct(data))
                break;
        }
    }

    const handleDelectProduct = () => {
        let data = product;
        dispatch(deleteProduct(data))
    }

    return (
        <Card hoverable >
            <Row justify="space-around" align="middle">
                <Col xs={8} sm={8} md={2} lg={2}>
                    <Image src={product.image_url} alt={`bot-${product.id}`} width={40} height={140} />
                </Col>
                <Col xs={16} sm={16} md={8} lg={8} style={{ textAlign: "left" }}>
                    <Title level={3} className="title">{product.name}</Title>
                    <Col className="div-litres">{product.capacity}</Col>
                    <Title level={4} className="title" style={{ marginBottom: "0px" }}>{product.price} $</Title>
                </Col>
                <Col xs={24} sm={24} md={5} lg={5} style={{ paddingTop: "10px" }} className="div-group">
                    <Input.Group compact>
                        <Button onClick={() => handleCalculate("resta")}><LeftCircleOutlined /> </Button>
                        <InputNumber min={1} max={12} value={product.quantity} />
                        <Button onClick={() => handleCalculate("suma")}><RightCircleOutlined /> </Button>
                    </Input.Group>
                </Col>
                <Col xs={24} sm={24} md={5} lg={5} style={{ paddingTop: "10px" }}>
                    <Title level={3} className="title" style={{ marginBottom: "0px" }}>{product.price * product.quantity } $</Title>
                </Col>
                <Col xs={24} sm={24} md={2} lg={2} style={{ paddingTop: "10px" }}>
                    <Tooltip title="search">
                        <Button ghost type="primary" shape="circle" icon={<DeleteOutlined />} size="large" onClick={ handleDelectProduct } />
                    </Tooltip>
                </Col>
            </Row>
        </Card>
    )
}

export default CardProductCart;