import { withReactive } from '@/reactive'
import { LoginForm } from './LoginForm'
import { useContext } from 'react';
import { UserContext } from '@/App';
import { useEffect } from 'react';

export const LoginController = withReactive(
    ({ data, services, monitors }) => {

        const { SetUser } = useContext(UserContext);

        const [isLoading, results] = monitors.login;

        useEffect(() => {
            if (results && Object.keys(results).length > 0) {
                SetUser(results);
            }
        }, [results, SetUser]);

        const handleLogin = (credentials) => {
            services.auth.login(credentials);
        };

        return (

            <LoginForm handleLogin={handleLogin} isLoading={isLoading} />
        )
    },
    {
        monitors: () => ["login"]
    }
)