import React, { Component, FormEvent } from 'react';

interface State {
  email: string;
  password: string;
}

class OwnerLogin extends Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.state.email, this.state.password);
  };

  render = () => (
    <div className="container-fluid mx-0 p-0">
      <div className="row">
        <div className="col-12">
          <h1 className="mt-2 text-center bg-olive p-2">Agent Login</h1>
        </div>
      </div>
      <div className="row mt-5">
        <div
          className="col-6 offset-3 bg-olive p-4"
          style={{ borderRadius: '4px' }}
        >
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your User Email Address"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
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
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
              ></input>
            </div>
            <input type="submit" className="btn btn-dark" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default OwnerLogin;
