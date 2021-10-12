import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import { connect } from 'react-redux';
import { setCurrent, getProperties } from '../../../actions/propertyActions';

const AccountColumn = ({ tenant, properties, getProperties, setCurrent }) => {
  const history = useHistory();

  useEffect(() => {
    getProperties();
  }, [getProperties]);

  const onClick = () => {
    if (properties) {
      setCurrent(
        properties.find((property) => property.address === tenant.address).id
      );
      history.push('/Property');
    }
  };

  return (
    <div className="col-4 m-0 p-2">
      <h2>Account</h2>
      <hr />
      <img
        src={tenant.profileImage}
        alt="profile"
        height="100px"
        style={{ borderRadius: '40px' }}
      />
      <ul className="list-group-flush mt-3 w-75 text-left">
        <li className="list-group-item">
          Name: {tenant.firstName + ' ' + tenant.lastName}
        </li>
        <li className="list-group-item">Email: {tenant.email}</li>
        <li className="list-group-item">Phone: {tenant.phone}</li>
        <li className="list-group-item">
          <button className="btn btn-light" onClick={onClick}>
            Address: {tenant.address}
          </button>
        </li>
        <li className="list-group-item">
          Lease Start Date: {tenant.leaseStartDate}
        </li>
        <li className="list-group-item">
          Lease End Date: {tenant.leaseEndDate}
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  properties: state.properties.properties,
});

export default connect(mapStateToProps, { getProperties, setCurrent })(
  AccountColumn
);
