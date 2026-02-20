import { Form, Input, Select, InputNumber, Switch, Button, Card } from "antd";
import { useEffect } from "react";

import { DividerComponent } from "@/shared/components/divider";

const { Option } = Select;

export const BeaconForm = ({ beacon, onSubmit, onCancel }) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log("Form values:", values);
    if (onSubmit) onSubmit(values);
  };

  useEffect(() => {
  if (beacon) {
    form.setFieldsValue(beacon);
  } else {
    form.resetFields();
  }
}, [beacon, form]);

  const size = "large";

  return (
    <div style={{ maxWidth: 700,
        margin: "0 auto", 
        backgroundColor: "white", 
        padding: "24px",
        borderRadius: "8px" }}
    >
        <DividerComponent titlePlacement="start">Beacon Data</DividerComponent>
        <Card>
            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
                initialValues={{
                isAvailable: true,
                }}
            >
                <Form.Item
                label="Device Name"
                name="deviceName"
                rules={[{ required: true, message: "Device name is required" }]}
                >
                <Input placeholder="Enter device name" />
                </Form.Item>

                <Form.Item
                label="Beacon Type"
                name="beaconType"
                rules={[{ required: true, message: "Beacon type is required" }]}
                >
                <Select 
                    placeholder="Select beacon type"
                >
                    <Option value="1">Broadcast</Option>
                    <Option value="2">Chaperone</Option>
                </Select>
                </Form.Item>

                <Form.Item
                label="Phone Number"
                name="phoneNumber"
                rules={[{ required: true, message: "Phone number is required" }]}
                >
                <InputNumber
                    style={{ width: "100%" }}
                    placeholder="Enter phone number"
                />
                </Form.Item>

                <Form.Item
                label="District"
                name="districtId"
                >
                <Input placeholder="Enter district ID" />
                </Form.Item>

                <Form.Item 
                    label="School" 
                    name="schoolId" 
                >
                <Input placeholder="Enter school ID" />
                </Form.Item>

                <Form.Item 
                    label="Faculty" 
                    name="facultyId" 
                >
                <Input placeholder="Enter faculty ID" />
                </Form.Item>

                <Form.Item
                label="Available"
                name="isAvailable"
                valuePropName="checked"
                >
                <Switch />
                </Form.Item>

                <Form.Item>
                <div
                    style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "16px",
                    marginTop: "20px",
                    }}
                >
                    <Button
                    color="red"
                    variant="filled"
                    size={size}
                    onClick={() => {
                        form.resetFields();
                        if (onCancel) onCancel();
                    }}
                    >
                    Cancel
                    </Button>

                    <Button color="green" variant="filled" size={size} htmlType="submit">
                    Save
                    </Button>
                </div>
                </Form.Item>
            </Form>
            </Card>
    </div>
  );
};
