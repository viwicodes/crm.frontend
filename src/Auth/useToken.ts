import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('user');
        if (tokenString) {
            const userToken = JSON.parse(tokenString);
            return userToken?.token
        }
        else {
            return ''
        }
    };

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken: { token: any; }) => {
        localStorage.setItem('user', JSON.stringify(userToken));
        setToken(userToken.token);
    };

    return {
        setToken: saveToken,
        isLoggedIn: token,
        getToken
    }
}