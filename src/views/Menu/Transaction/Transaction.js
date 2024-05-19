import React from 'react';

const Transaction = () => {
    const testFnc = ()=>{
        console.log("transaction")
    }
    testFnc()
  // Sample user data
  const users = [
    { name: 'John Doe', mobile: '+123456789', email: 'john@example.com'},
    { name: 'Jane Smith', mobile: '+987654321', email: 'jane@example.com',},
    { name: 'Bob Johnson', mobile: '+1122334455', email: 'bob@example.com', }
  ];

  // Inline CSS styles
  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    textAlign: 'left'
  };

  const thStyle = {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    padding: '8px',
    borderBottom: '1px solid #ddd'
  };

  const tdStyle = {
    padding: '8px',
    borderBottom: '1px solid #ddd'
  };

  return (
    <div>
      {/* <h1>Users Data</h1> */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Mobile</th>
            <th style={thStyle}>E-mail</th>
            
            </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
             <tr key={index}>
             <td style={tdStyle}>{user.name}</td>
             <td style={tdStyle}>{user.mobile}</td>
             <td style={tdStyle}>{user.email}</td>
             
           </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
