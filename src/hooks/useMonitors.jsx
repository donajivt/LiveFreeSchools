import { useState, useEffect } from 'react';

export const useMonitor = (monitor) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handleOnStart = () => {
            setIsLoading(true);
        };
        const handleOnSuccess = () => {
            setIsLoading(false);
        };
        const handleOnError = () => {
            setIsLoading(false);
        };

        window.addEventListener(`lf:${monitor}:start`, handleOnStart);
        window.addEventListener(`lf:${monitor}:success`, handleOnSuccess);
        window.addEventListener(`lf:${monitor}:error`, handleOnError);

        return () => {
            window.removeEventListener(`lf:${monitor}:start`, handleOnStart);
            window.removeEventListener(`lf:${monitor}:success`, handleOnSuccess);
            window.removeEventListener(`lf:${monitor}:error`, handleOnError);
        };
    }, [monitor]);

    return isLoading;
};

export const Monitor = ({ monitor, setMonitors }) => {
    const isLoading = useMonitor(monitor);

    useEffect(() => {
        setMonitors((prev) => ({
            ...prev,
            [monitor]: isLoading,
        }));
    }, [isLoading, monitor, setMonitors]);

    return null;
};
