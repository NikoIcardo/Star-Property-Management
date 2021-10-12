import React, { useState } from 'react';

const OwnerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="container-fluid mx-0 p-0">
      <div className="row">
        <div className="col-12">
          <h1 className="mt-2 text-center bg-olive p-2">Owner Login</h1>
        </div>
      </div>
      <div className="row mt-5">
        <div
          className="col-6 offset-3 bg-olive p-4"
          style={{ borderRadius: '4px' }}
        >
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlfor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your User Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlfor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Your User Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <input type="submit" className="btn btn-dark" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default OwnerLogin;
