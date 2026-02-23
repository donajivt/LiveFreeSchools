import { Card, Form, Input, Button } from "antd";

export const LoginForm = ({ onLogin, isLoading }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 100 }}>
      <Card title="Login" style={{ width: 400 }}>
        <Form layout="vertical" onFinish={onLogin}>
          <Form.Item
            label="Email"
            name="userName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            block
            loading={isLoading}
          >
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
};