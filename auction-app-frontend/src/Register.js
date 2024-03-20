import React, { useState } from 'react';
import axios from 'axios';

function Register(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleregister = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            const response = await axios.post('http://localhost:3000/register', {
                username,
                password,
            });

            if (response.data.success) {
                // Assuming you have a method to handle successful register
                // For example, saving the register state and redirecting to another page
                console.log('register successful', response.data);
                // Redirect or update state here
                // props.history.push('/'); // Redirect to home page or dashboard
            } else {
                // Handle unsuccessful register
                setErrorMessage('Failed to register. Please check your username and password.');
            }
        } catch (error) {
            console.error('register error:', error);
            setErrorMessage('An error occurred during register.');
        }
    };

    return (
        <div>
            <h2>register</h2>
            <form onSubmit={handleregister}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">register</button>
                {errorMessage && <p className="error">{errorMessage}</p>}
            </form>
        </div>
    );
}

export default Register;
