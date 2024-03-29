import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const credentials = {
      username: username,
      password: password
    };

    // Log the JSON object to the console
    console.log(credentials);

    // You can add your login logic here, for example, sending a request to your backend
    // and verifying the credentials

    // For demonstration purposes, let's just check if username and password are not empty
    if (username && password) {
      setIsLoggedIn(true);
      // You can redirect the user to another page upon successful login
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome, {username}!</h2>
      ) : (
        
        <form onSubmit={handleSubmit}>
          <div>
          <h1 >Login/Signup</h1> 
          <p>Username: </p>
            <input 
            className="username"
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <p>password:</p>
            <input
              className="password"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
