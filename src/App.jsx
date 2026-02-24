import './App.css';
import { Card } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserRouter } from "@/routes";
import { Toaster } from 'react-hot-toast';
import { MainLayout } from '@/components';
import { createContext, useState } from 'react';

export const UserContext = createContext({});

const App = () => {

  const [user, SetUser] = useState(null);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, SetUser }}>
        <MainLayout>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Toaster />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users/*" element={<UserRouter />} />
            </Routes>
          </div>
        </MainLayout>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

const Home = () => {
  return (
    <Card title="Home">
      <p>Adios Mundo</p>
    </Card>
  )
}


export default App;