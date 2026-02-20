import { Form, Input, Select, InputNumber, Switch, Button, Card } from "antd";

const { Option } = Select;

export const BeaconForm = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log("Form values:", values);
    if (onSubmit) onSubmit(values);
  };

  return (
    <Card title="Beacon Form" style={{ maxWidth: 600 }}>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        initialValues={{
          isAvailable: true,
        }}
      >
        {/* Device Name */}
        <Form.Item
          label="Device Name"
          name="deviceName"
          rules={[{ required: true, message: "Device name is required" }]}
        >
          <Input placeholder="Enter device name" />
        </Form.Item>

        {/* Beacon Type */}
        <Form.Item
          label="Beacon Type"
          name="beaconType"
          rules={[{ required: true, message: "Beacon type is required" }]}
        >
          <Select placeholder="Select beacon type">
            <Option value="1">Type 1</Option>
            <Option value="2">Type 2</Option>
          </Select>
        </Form.Item>

        {/* Phone Number */}
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

        {/* District */}
        <Form.Item
          label="District"
          name="districtId"
          rules={[{ required: true, message: "District is required" }]}
        >
          <Input placeholder="Enter district ID" />
        </Form.Item>

        {/* School */}
        <Form.Item label="School" name="schoolId">
          <Input placeholder="Enter school ID" />
        </Form.Item>

        {/* Faculty */}
        <Form.Item label="Faculty" name="facultyId">
          <Input placeholder="Enter faculty ID" />
        </Form.Item>

        {/* Availability */}
        <Form.Item
          label="Available"
          name="isAvailable"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        {/* Submit */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save Beacon
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
