import React, { useState } from 'react';

function AuthComponent() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('job seeker');
  const [message, setMessage] = useState('');

  const availableRoles = ['job seeker', 'employer', 'freelancer'];

  function handleAuthSubmit(event) {
    event.preventDefault();

    let endpoint;
    let body;

    if (isLogin) {
      endpoint = '/users/login';
      body = JSON.stringify({ username, password });
    } else {
      endpoint = '/users/register';
      body = JSON.stringify({ username, password, email, role });
    }

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error('Error authenticating/registering user:', error);
        setMessage('An error occurred.');
      });
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{isLogin ? 'Login' : 'Register'}</h5>
              {message && <div className="alert alert-danger">{message}</div>}
              <form onSubmit={handleAuthSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {!isLogin && (
                  <>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="role">Role</label>
                      <select
                        className="form-control"
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        {availableRoles.map((roleOption) => (
                          <option key={roleOption} value={roleOption}>
                            {roleOption}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                )}
                <button type="submit" className="btn btn-primary">
                  {isLogin ? 'Login' : 'Register'}
                </button>
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? 'Register' : 'Login'} instead
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthComponent;
