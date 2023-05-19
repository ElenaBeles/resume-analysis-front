import axios from "axios";

// @ts-ignore
axios.interceptors.request.use(({...config}) => {
    const token = localStorage.getItem('token');

    if (token) {
        return {
            ...config,
            headers: {
                ...(config.headers || {}),
                'Token': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        };
    }
    return {
        ...config,
    };
});
