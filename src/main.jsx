import React from 'react';
import { Button, Card } from 'antd';

const App = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      background: '#f0f2f5' 
    }}>
      <Card title="Estado Base" style={{ width: 300 }}>
        <p>Hola Mundo</p>
        <Button type="primary">Botón de prueba</Button>
      </Card>
    </div>
  );
};

export default App;