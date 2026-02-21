import { useMemo, useState, useEffect } from "react";
import { Form, Input, InputNumber, Select, Button, Card, Avatar, Row, Col, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";

const DEFAULT_USER = {
  name: "Rommel",
  countryId: 3,
  position: "Developer",
  description: "UI Developer",
  avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Rommel",
  email: "rommel@example.com",
  phone: "123-456-7890",
};

export const UserForm = ({
  countries = [],
  initialValue = {},
  onSubmit,
}) => {
  const [form] = Form.useForm();
  const name = Form.useWatch("name", form);
  const position = Form.useWatch("position", form);
  const avatar = Form.useWatch("avatar", form);

  useEffect(() => {
    if (initialValue) {
      form.setFieldsValue(initialValue);
    } else {
      form.resetFields();
      form.setFieldsValue(DEFAULT_USER);
    }
  }, [initialValue, form]);

  const countryOptions = useMemo(() => {
    if (!Array.isArray(countries)) return [];
    return countries.map((c) => ({ label: c.name, value: c.id }));
  }, [countries]);


  const handleReset = () => {
    form.resetFields();
    if (initialValue && Object.keys(initialValue).length > 0) {
      form.setFieldsValue(initialValue);
    } else {
      form.setFieldsValue(DEFAULT_USER);
    }
  };


  return (
    <div style={{ marginBottom: 24 }}>

      <Card title="User" style={{ width: '100%', marginBottom: 24 }}>
        <Form
          key={initialValue?.id || "new-user"}
          form={form}
          layout="vertical"
          onFinish={onSubmit}
          initialValues={initialValue?.id ? initialValue : DEFAULT_USER}
        >
          <Row gutter={16}>
            <Col span={16}>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Id"
                    name="id"
                    hidden
                  >
                    <InputNumber />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input name!' }]}
                  >
                    <Input placeholder="John Doe" />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Country"
                    name="countryId"
                  >
                    <Select
                      options={countryOptions}
                      placeholder="Select a country"
                      loading={countryOptions.length === 0}
                    />
                  </Form.Item>
                </Col>


                <Col span={12}>
                  <Form.Item
                    label="Position"
                    name="position"
                  >
                    <Input placeholder="Developer" />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Phone"
                    name="phone"
                  >
                    <Input placeholder="123-456-7890" />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, type: 'email', message: 'Please input valid email!' }]}
                  >
                    <Input placeholder="john.doe@example.com" />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item
                    label="Avatar URL"
                    name="avatar"
                  >
                    <Input placeholder="https://..." />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item
                    label="Description"
                    name="description"
                  >
                    <Input.TextArea rows={3} placeholder="Desktop Developer" />
                  </Form.Item>
                </Col>
              </Row>
            </Col>

            <Col span={8}>
              <Form.Item label="Preview">
                <Card>
                  <Space align="center">
                    <Avatar
                      size={64}
                      src={avatar}
                      icon={<UserOutlined />}
                      shape="square"
                    />
                    <div>
                      <div style={{ fontWeight: 'bold' }}>{name || "(no name)"}</div>
                      <div style={{ fontSize: '12px', opacity: 0.6 }}>{position || "(no position)"}</div>
                    </div>
                  </Space>
                </Card>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="button" onClick={handleReset}>
                Reset
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
