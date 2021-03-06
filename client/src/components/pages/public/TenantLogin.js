import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { tenantLogin } from '../../../actions/tenantActions';

const TenantLogin = ({ tenant, tenantLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    tenantLogin(email, password);
    if (tenant) {
      history.push('/Tenant');
    }
  };

  return (
    <div className="container-fluid mx-0 p-0">
      <div className="row">
        <div className="col-12">
          <h1 className="mt-2 text-center bg-olive p-2">Tenant Login</h1>
        </div>
      </div>
      <div className="row mt-5">
        <div
          className="col-6 offset-3 bg-olive p-4"
          style={{ borderRadius: '4px' }}
        >
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
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
              <label htmlFor="password" className="form-label">
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

const mapStatetoProps = (state) => ({
  tenant: state.tenants.tenant,
});

export default connect(mapStatetoProps, { tenantLogin })(TenantLogin);
