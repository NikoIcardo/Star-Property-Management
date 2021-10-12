import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const Tenant = ({ tenant }) => {
  const history = useHistory();

  return (
    <Fragment>
      {tenant ? (
        <div className="container-fluid mx-0 p-0">
          <div className="row">
            <div className="col-12">
              <h1 className="mt-2 text-center bg-olive p-2">{`Welcome ${tenant.firstName} ${tenant.lastName}`}</h1>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-4 m-0 p-2">
              <h2>Messages</h2>
              <hr />
            </div>
            <div className="col-4 m-0 p-2">
              <h2>Payments</h2>
              <div className="text-left">
                <hr />
                <h4>This Month</h4>
                <p>
                  Rent: {tenant.rent} due on {tenant.dueDate} <br />
                  Utilities: {tenant.utilities} due on {tenant.dueDate}
                  <hr />
                  Total: {tenant.utilities + tenant.rent} due on{" "}
                  {tenant.dueDate}
                </p>
              </div>
            </div>
            <div className="col-4 m-0 p-2">
              <h2>Account</h2>
              <hr />
            </div>
          </div>
        </div>
      ) : (
        history.push("/TenantLogin")
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  tenant: state.tenants.tenant,
});

export default connect(mapStateToProps)(Tenant);
