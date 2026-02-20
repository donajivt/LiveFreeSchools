import { ActionComponent } from '@/shared/components/buttons';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Space } from 'antd';

export const columns = [
  {
    title: 'Beacon Name',
    dataIndex: 'deviceName',
    key: 'deviceName',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    filters: [
      {
        text: 'Broadcast',
        value: '1',
      },
      {
        text: 'Chaperone',
        value: '2',
      }
    ],
    onFilter: (value, record) => record.type === value,
    filterSearch: true,
    render: (_, record) => (
      <Space size="middle">
        <p>{record.type === '1' ? "Broadcast" : "Chaperone"}</p>
      </Space>
    ),
  },
  {
    title: 'Is Available',
    key: 'isAvailable',
    dataIndex: 'isAvailable',
    filters: [
      {
        text: 'True',
        value: true,
      },
      {
        text: 'False',
        value: false,
      },
    ],
    onFilter: (value, record) => record.avaible === value,
    filterSearch: true,
    render: (_, record) => (
      <Space size="middle">
        <p>{record.avaible === 1 ? "True" : "False"}</p>
      </Space>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space>
        <ActionComponent
          type="delete"
          icon={<DeleteOutlined />}
          onClick={() => console.log("Delete item", record)}
        />

        <ActionComponent
          type="edit"
          icon={<EditOutlined />}
          onClick={() => console.log("Edit item", record)}
        />

        <ActionComponent
          type="info"
          icon={<EyeOutlined />}
          onClick={() => console.log("View info", record)}
        />
      </Space>
    ),
  },
];