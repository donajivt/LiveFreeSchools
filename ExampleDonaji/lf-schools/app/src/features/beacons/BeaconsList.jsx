import { Table, Space } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

import { RoutePaths } from "@/features/routing/RoutePaths";
import { ActionComponent } from '@/shared/components/buttons';
import { LoadingButton } from '@/shared/components/buttons';

export const BeaconsList = ({  onClick, onDelete, data, isLoading }) => {
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
    dataIndex: 'beaconType',
    key: 'beaconType',
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
    onFilter: (value, record) => record.beaconType === value,
    filterSearch: true,
    render: (_, record) => (
      <Space size="middle">
        <p>{record.beaconType === "1" ? "Broadcast" : "Chaperone"}</p>
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
          onClick={() => navigate(RoutePaths.beacons.detail(record.id))}
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
      pagination={{ pageSize: 5 }}
    />
  </div>
  );
};
