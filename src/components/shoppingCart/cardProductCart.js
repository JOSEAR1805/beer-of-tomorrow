import { Row, Col, Typography, Button, Input, Tooltip, InputNumber, Card } from 'antd';
import Image from 'next/image';
import { RightCircleOutlined, LeftCircleOutlined, DeleteOutlined } from '@ant-design/icons';

const { Title } = Typography;

const CardProductCart = (props) => {

    return (
        <Card hoverable >
            <Row  justify="space-around" align="middle">
                <Col xs={8} sm={8} md={2} lg={2}>
                    <Image src="https://images.punkapi.com/v2/13.png" width={40} height={140} />
                </Col>
                <Col xs={16} sm={16} md={8} lg={8} style={{textAlign: "left"}}>
                    <Title level={3} className="title">Cerveza</Title>
                    <Col className="div-litres">
                        25 Litros
                    </Col>
                    <Title level={4} className="title" style={{marginBottom: "0px"}}>1900 $</Title>
                </Col>
                <Col xs={24} sm={24} md={5} lg={5} style={{paddingTop: "10px"}} className="div-group">
                    <Input.Group compact>
                        <Button onClick={() => handleCalculate("resta")}><LeftCircleOutlined /> </Button>
                        <InputNumber min={1} max={12} value={3}/>
                        <Button onClick={() => handleCalculate("suma")}><RightCircleOutlined /> </Button>
                    </Input.Group>
                </Col>
                <Col xs={24} sm={24} md={5} lg={5} style={{paddingTop: "10px"}}>
                    <Title level={3} className="title" style={{marginBottom: "0px"}}>1900 $</Title>
                </Col>
                <Col xs={24} sm={24} md={2} lg={2} style={{paddingTop: "10px"}}>
                    <Tooltip title="search">
                        <Button ghost type="primary" shape="circle" icon={<DeleteOutlined />} size="large" />
                    </Tooltip>
                </Col>
            </Row>
        </Card>
    )
}

export default CardProductCart;