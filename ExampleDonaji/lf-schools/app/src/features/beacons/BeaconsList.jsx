import { Space, Table } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';

import { ActionComponent } from '@/shared/components/buttons';
import { LoadingButton } from '@/shared/components/buttons';

const columns = [
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
    title: 'Avaible',
    key: 'tags',
    dataIndex: 'avaible',
    filters: [
      {
        text: 'True',
        value: 1,
      },
      {
        text: 'False',
        value: 0,
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

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
export const BeaconsList = ({ onClick, data, isLoading }) => {
  console.log("BeaconList.Data", data);
  return(<>
    <LoadingButton
      label="Actualizar"
      isLoading={isLoading}
      onClick={onClick}
    />
    <Table columns={columns} dataSource={data} loading={isLoading} onChange={onChange} />
  </>)
};