import { Button, Row, Col, Form, Input, Space } from 'antd';


export const LoginForm = ({ handleLogin }) => {

    const [form] = Form.useForm();


    return (
        <Form
            key={"login"}
            form={form}
            layout="horizontal"
            onFinish={(credentials) => handleLogin(credentials)}
            initialValues={{}}
            style={{ marginTop: 24 }}
        >
            <Row gutter={24}>
                <Col span={10}>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input name!' }]}
                    >
                        <Input placeholder="email" />
                    </Form.Item>
                </Col>
                <Col span={10}>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input password!' }]}
                    >
                        <Input placeholder="password" />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item>
                        <Space>
                            <Button type="primary" htmlType="submit">
                                Login
                            </Button>
                        </Space>
                    </Form.Item>
                </Col>
            </Row>

        </Form>
    )
}