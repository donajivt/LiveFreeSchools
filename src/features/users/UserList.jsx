import { Table, Button, Avatar, Space, Tag } from "antd";

export const UserList = ({ users, countries, onClick, onDelete, onEdit }) => {
  const _countries = countries ?? [];

  const columns = [
    {
      title: "Name",
      key: "name",
      render: (_, record) => (
        <Space onClick={() => onClick(record)} style={{ cursor: 'pointer' }}>
          <Avatar shape="square" size="large" src={record.avatar} />
          <div>
            <div style={{ fontWeight: 'bold' }}>{record.name}</div>
            <div style={{ fontSize: '12px', opacity: 0.5 }}>
              {_countries.find((c) => c.id === record.countryId)?.name}
            </div>
          </div>
        </Space>
      ),
    },
    {
      title: "Job",
      key: "job",
      render: (_, record) => (
        <>
          <div>{record.position}</div>
          <Tag>{record.description}</Tag>
        </>
      )
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="small">
          <Button size="small" onClick={() => onEdit(record)}>
            Editar
          </Button>
          <Button size="small" danger onClick={() => onDelete(record.id)}>
            Eliminar
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={users}
      rowKey="id"
      pagination={{ pageSize: 5 }}
    />
  );
};
