import { Link, useLocation } from 'react-router-dom';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { UserContext } from '../App';
import { LoginView } from '@/features/auth/login';
import { Layout, Menu, Button } from 'antd';


const { Header, Content } = Layout;

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

    const { user, SetUser } = useContext(UserContext);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" style={{ color: 'white', marginRight: '24px', fontWeight: 'bold' }}>
                    LiveFree
                </div>
                <NavigationMenu />
                {user ? (<Button onClick={() => SetUser(null)}>Logged as {user.name}</Button>) : (<LoginView />)}
            </Header>
            <Content style={{ padding: '24px' }}>
                {children}
            </Content>
        </Layout>
    );
}



''
