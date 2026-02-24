import { withReactive } from '@/reactive'
import { LoginForm } from './LoginForm'
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useCallback } from 'react';
import { useEffect } from 'react';

export const LoginController = withReactive(
    ({ data, services, monitors }) => {

        const { SetUser } = useContext(UserContext);

        const handleLogin = (credentials) => {
            SetUser(credentials.email)

            services.auth.login(credentials)
        }

        return (
            <LoginForm handleLogin={handleLogin} />
        )
    },
    {
        monitors: () => ["login"]
    }
)