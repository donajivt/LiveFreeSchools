import { Layout, Menu, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import services from "@/services";

const { Header, Content } = Layout;


const simulateAuth = async () => {
    await services.auth.login({
        email: "admin@example.com",
        password: "admin123",
    });
}


const NavigationMenu = () => {
    const location = useLocation();
    const selectedKey = location.pathname.startsWith('/users') ? 'users' : 'home';

    const menuItems = [
        {
            key: 'home',
            icon: <HomeOutlined />,
            label: <Link to="/">Inicio</Link>,
        },
        {
            key: 'users',
            icon: <UserOutlined />,
            label: <Link to="/users">Usuarios</Link>,
        },
    ];

    return (
        <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[selectedKey]}
            items={menuItems}
            style={{ flex: 1, minWidth: 0 }}
        />
    );
};

export const MainLayout = ({ children }) => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" style={{ color: 'white', marginRight: '24px', fontWeight: 'bold' }}>
                    LiveFree
                </div>
                <NavigationMenu />
                <Button type="primary" onClick={simulateAuth}>
                    Simular Autenticación
                </Button>
            </Header>
            <Content style={{ padding: '24px' }}>
                {children}
            </Content>
        </Layout>
    );
}
