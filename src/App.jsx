import React, { useState, useEffect } from 'react';
import {
  Layout, Button, theme, Table, Tag, Space, Card, 
  Row, Col, Statistic, Steps, Avatar, Badge, message, Skeleton,
  Popconfirm, Select
} from 'antd';
import {
  PlusOutlined, ProjectOutlined, ArrowUpOutlined, DeleteOutlined, EditOutlined
} from '@ant-design/icons';
import TaskDrawer from './TaskDrawer';
import EditTaskModal from './EditTaskModal';

const { Content } = Layout;
const { Option } = Select;

const initialData = [
  { key: '1', task: 'Diseñar base de datos', owner: 'Carlos', status: 'Completado', priority: 'Alta' },
  { key: '2', task: 'Integrar API de pagos', owner: 'Ana', status: 'En Progreso', priority: 'Alta' },
  { key: '3', task: 'Landing Page v1', owner: 'Luis', status: 'Pendiente', priority: 'Media' },
];

const App = () => {
  const { token } = theme.useToken();
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = token.colorBgContainer;
    document.body.style.color = token.colorText;
  }, [token]);

  useEffect(() => {
    setTimeout(() => {
      setData(initialData);
      setLoading(false);
    }, 1500);
  }, []);

  const handleCreateTask = (values) => {
    message.loading({ content: 'Guardando...', key: 'save' });
    setTimeout(() => {
      const newTask = {
        key: Date.now().toString(),
        task: values.taskName,
        owner: capitalize(values.owner),
        priority: capitalize(values.priority),
        status: 'Pendiente' 
      };
      setData((prev) => [...prev, newTask]);
      message.success({ content: '¡Creado!', key: 'save', duration: 2 });
      setOpenDrawer(false); 
    }, 500);
  };

  const handleDelete = (key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
    message.success('Eliminado');
  };

  const handleEditClick = (record) => {
    setEditingRecord(record);
    setIsModalOpen(true);
  };

  const handleUpdateTask = (values) => {
    const newData = data.map((item) => {
      if (item.key === editingRecord.key) {
        return {
          ...item,
          task: values.task,
          owner: capitalize(values.owner),
          priority: capitalize(values.priority),
          status: values.status
        };
      }
      return item;
    });

    setData(newData);
    setIsModalOpen(false);
    setEditingRecord(null);
    message.success('Tarea actualizada');
  };

  const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const columns = [
    { title: 'Tarea', dataIndex: 'task', key: 'task', render: text => <b>{text}</b> },
    { title: 'Responsable', dataIndex: 'owner', key: 'owner', render: (name) => (
        <Space><Avatar style={{ backgroundColor: '#f56a00' }}>{name[0]}</Avatar> {name}</Space>
      ) 
    },
    { title: 'Estado', dataIndex: 'status', key: 'status', render: (status) => {
        let color = status === 'Completado' ? 'green' : status === 'En Progreso' ? 'blue' : 'gold';
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      }
    },
    { title: 'Prioridad', dataIndex: 'priority', key: 'priority', render: (p) => (
        <Badge status={p === 'Alta' ? 'error' : 'warning'} text={p} />
      )
    },
    {
      title: 'Acción',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button 
            type="text" 
            style={{ color: '#1890ff' }} 
            icon={<EditOutlined />} 
            onClick={() => handleEditClick(record)} 
          >
            Editar
          </Button>
          <Popconfirm
            title="¿Eliminar tarea?"
            onConfirm={() => handleDelete(record.key)}
            okText="Sí"
            cancelText="No"
          >
            <Button danger type="text" icon={<DeleteOutlined />}>
              Borrar
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>      
      <Layout>
        <Layout style={{ padding: '0 24px 24px' }}>          
          <Content style={{ padding: 24, margin: 0, minHeight: 280, background: colorBgContainer, borderRadius: borderRadiusLG }}>
            
            <Row gutter={16} style={{ marginBottom: 24 }}>
              <Col span={8}>
                <Card variant={false} style={{ background: token.colorInfoBg }}>
                  <Statistic title="Sprints Completados" value={12} prefix={<ProjectOutlined />} />
                </Card>
              </Col>
              <Col span={8}>
                <Card variant={false} style={{ background: token.colorSuccessBg }}>
                  <Statistic 
                    title="Eficiencia del Equipo" 
                    value={93} 
                    suffix="%" 
                    prefix={<ArrowUpOutlined />} 
                    content={{ color: token.colorSuccessText }} 
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card variant={false} style={{ background: token.colorWarningBg }}>
                  <Statistic 
                    title="Tareas Pendientes" 
                    value={5} 
                    content={{ color: token.colorErrorText }} 
                  />
                </Card>
              </Col>
            </Row>

            <Card title="Progreso del Sprint Actual" style={{ marginBottom: 24 }}>
               <Steps
                current={1}
                items={[
                  { title: 'Planificación', description: 'Requisitos definidos' },
                  { title: 'Desarrollo', description: 'En proceso', subTitle: '2 días restantes' },
                  { title: 'QA / Testing', description: 'Pendiente' },
                  { title: 'Despliegue', description: 'Viernes' },
                ]}
              />
            </Card>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
              <h3>Tareas Recientes</h3>
              <Button type="primary" icon={<PlusOutlined />} onClick={() => setOpenDrawer(true)}>
                Nueva Tarea
              </Button>
            </div>
            
            {loading ? <Skeleton active /> : <Table columns={columns} dataSource={data} pagination={false} />}

          </Content>
        </Layout>
      </Layout>

      <TaskDrawer 
        open={openDrawer} 
        onClose={() => setOpenDrawer(false)} 
        onCreate={handleCreateTask} 
      />

      <EditTaskModal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onUpdate={handleUpdateTask}
        initialValues={editingRecord}
      />

    </Layout>
  );
};

export default App;