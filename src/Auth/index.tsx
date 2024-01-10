import React, { useEffect, useState } from 'react';
import {
    Grid,
    TextField,
    Paper,
    Button
} from '@mui/material';
const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);

    // useEffect(() => {
    const fetchData = () => {
        // Replace 'yourBearerToken' with your actual bearer token

        fetch('http://localhost:4000/api/auth/login', {
            credentials: 'same-origin',
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })
            .then((response) => {
                // Check if the request was successful (status code 2xx)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // Parse the response JSON
                const cookie = response.headers
                console.log('myCookie:', cookie);
                return response.json();

            })
            .then((result) => {
                console.log(result,'cook')
                // const myCookieValue = result.headers['set-cookie'];
            })
            .catch((error) => {
                // Handle errors
            })
            .finally(() => {
                // Set loading to false when the API call is complete
            });
    };

    // Call the fetchData function when the component mounts
    const onClick = () => {
        fetchData()
    }
    // }, []);

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPassword(event.target.value);
    };

    return (
        <div style={{ padding: 30 }}>
            <Paper>
                <Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Username"
                            value={username}
                            onChange={(e) => handleUsernameChange(e)}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={password}
                            onChange={(e) => handlePasswordChange(e)} label="Password" type={'password'}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth onClick={onClick}>Login</Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default LoginPage;
