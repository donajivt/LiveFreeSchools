import React from 'react';
import { Button, Card, Tabs } from 'antd';
import { UsersListView } from "./features/users";

const App = () => {
  const items = [
    {
      key: '1',
      label: 'Estado Base',
      children: (
        <Card title="Vista General" >
          <p>Hola Mundo</p>
          <p>Esta es la prueba de renderizado inicial.</p>
        </Card>
      ),
    },
    {
      key: '2',
      label: 'Controles',
      children: (
        <Card title="Prueba de Componentes" >
          <Button type="primary">Botón de prueba</Button>
        </Card>
      ),
    },
    {
      key: '3',
      label: 'Lista de Usuarios',
      children: (
        <div style={{ padding: '10px', background: '#fff', borderRadius: '8px' }}>
          <UsersListView />
        </div>
      ),
    },
  ];

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'start', 
      minHeight: '100vh', 
      background: '#f0f2f5',
      paddingTop: '50px' 
    }}>
      <div style={{ width: '90%', maxWidth: '800px' }}>
        <Card>
          <Tabs 
            defaultActiveKey="1" 
            items={items} 
            centered
          />
        </Card>
      </div>
    </div>
  );
};

export default App;