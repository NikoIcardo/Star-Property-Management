import React, { useState, useEffect } from 'react';

const PaymentsColumn = ({ tenant }) => {
  const [dueDate, setDueDate] = useState();

  useEffect(() => {
    const date = new Date();
    if (tenant) {
      date.setDate(tenant.dueDate);
    }
    setDueDate(String(`${date.getMonth() + 1}\\${date.getDate()}\\${2021}`));
  }, [setDueDate, tenant]);

  return (
    <div className="col-4 m-0 p-2">
      <h2>Payments</h2>

      <hr />
      <h4>This Month</h4>
      {dueDate && (
        <p>
          Rent: {tenant.rent} &emsp; &emsp; Due on {dueDate} <br />
          Utilities: {tenant.utilities} &emsp; &emsp; Due on {dueDate}
          <hr />
          Total: {tenant.utilities + tenant.rent} &emsp; &emsp; Due on {dueDate}
        </p>
      )}

      <button className="btn btn-dark">Transactions</button>
    </div>
  );
};

export default PaymentsColumn;
