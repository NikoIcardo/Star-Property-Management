import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import AccountColumn from '../../layout/tenant/AccountColumn';
import PaymentsColumn from '../../layout/tenant/PaymentsColumn';

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
          <div className="row ml-2">
            <div className="col-4 m-0 p-2">
              <h2>Messages</h2>
              <hr />
            </div>
            <PaymentsColumn tenant={tenant} />
            <AccountColumn tenant={tenant} />
          </div>
        </div>
      ) : (
        history.push('/TenantLogin')
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  tenant: state.tenants.tenant,
});

export default connect(mapStateToProps)(Tenant);
