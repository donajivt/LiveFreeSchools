import { Table, Space } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "@/features/routing/RoutePaths";

import { ActionComponent } from '@/shared/components/buttons';
import { LoadingButton } from '@/shared/components/buttons';



const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
export const BeaconsList = ({ onClick, onDelete, data, isLoading }) => {
  const navigate = useNavigate();
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
    onFilter: (value, record) => record.isAvailable === value,
    filterSearch: true,
    render: (_, record) => (
      <Space size="middle">
        <p>{record.isAvailable === true ? "True" : "False"}</p>
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
          onClick={() => onDelete(record.id)}
        />

        <ActionComponent
          type="edit"
          icon={<EditOutlined />}
          onClick={() => navigate(RoutePaths.beacons.update(record.id))}
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
  return(
  <div> 
    <LoadingButton label="Update Table" onClick={onClick} loading={isLoading} />
    <Table 
      columns={columns} 
      dataSource={data} 
      loading={isLoading} 
      onChange={onChange}
    />
  </div>
  );
};
