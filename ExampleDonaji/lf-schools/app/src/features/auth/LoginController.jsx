import { useNavigate } from "react-router-dom";
import { message } from "antd";

import { withReactive } from '@/reactive/withReactive';
import { LoginForm  } from './LoginForm';
import { RoutePaths } from "@/features/routing/RoutePaths";

export const LoginController = withReactive((
    { services, monitors }
) => {
    const navigate = useNavigate();
    const isLoading = monitors.login;
    const handleLogin = async (credentials) => {
        try {
            await services.auth.login({
                userName: credentials.userName,
                password: credentials.password
            });
            navigate(RoutePaths.beacons.list());
        } catch (error) {
            message.error(error.message);
        }
    };
    return (
        <div>
            <LoginForm
                onLogin={ handleLogin }
                isLoading={isLoading}
            />
        </div>
    );
},
{
    init: () => {},
    queries: () => [],
    monitors: () => ['login']
});