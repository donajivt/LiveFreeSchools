import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider, theme } from 'antd';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider
    theme={{
      algorithm: theme.darkAlgorithm,
      token: {
        colorPrimary: '#722ed1',
        colorBgBase: '#131313ff',
        colorBgContainer: '#141414',
        borderRadius: 8,
        wireframe: false,
      },
    }}
  >
    <App />
  </ConfigProvider>
);