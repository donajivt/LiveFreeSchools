import './App.css';
import { Card } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserRouter } from "./routes/UserRoutes";
import { Toaster } from 'react-hot-toast';
import { MainLayout } from './components/Layout';


const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Toaster />
          <Routes>
            <Route path="/" element={
              <Card title="Vista General">
                <p>Adios Mundo</p>
              </Card>
            } />
            <Route path="/users/*" element={<UserRouter />} />
          </Routes>
        </div>
      </MainLayout>

    </BrowserRouter>
  );
};


export default App;