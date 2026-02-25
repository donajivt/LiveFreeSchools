import './App.css';
import { Card } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserRouter } from "@/routes";
import { Toaster } from 'react-hot-toast';
import { MainLayout } from '@/components';
import { createContext, useState } from 'react';
import { withReactive } from '@/reactive';
import { useEffect } from 'react';

export const UserContext = createContext({});

const App = withReactive(
  ({monitors}) => {

    const [user, SetUser] = useState(null);

    const [isLoading, results] = monitors.refresh;

    useEffect(() => {
      if (results && Object.keys(results).length > 0) {
        SetUser(results.user);
      }
    }, [results, SetUser]);

    if (isLoading) {
      return <div>Loading...</div>;
    }


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
  },
  {
    init: ({ services }) => {
      services.auth.refresh();
    },
    monitors: () => ["refresh"]
  }
);

const Home = () => {
  return (
    <Card title="Home">
      <p>Adios Mundo</p>
    </Card>
  )
}


export default App;