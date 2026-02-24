import { useState, useEffect } from 'react';

export const useMonitor = (monitor) => {

    const [state, setState] = useState([false, {}]);

    useEffect(() => {
        const handleOnStart = ({ detail }) => {
            setState([true, {}]);
        };
        const handleOnSuccess = ({ detail }) => {
            setState([false, detail]);
        };
        const handleOnError = ({ detail }) => {
            setState([false, {}]);
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
    return state;
};

export const Monitor = ({ monitor, setMonitors }) => {
    const state = useMonitor(monitor);

    useEffect(() => {
        setMonitors((prev) => ({
            ...prev,
            [monitor]: state,
        }));
    }, [state, monitor, setMonitors]);

    return null;
};
