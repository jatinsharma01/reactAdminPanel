import React from 'react';

const Colors = () => {
  // Sample user data
  const users = [
    { name: 'John Doe', mobile: '+123456789', email: 'john@example.com', experience: '5 years', dob: 'React', currentStatus: 'Active' },
    { name: 'Jane Smith', mobile: '+987654321', email: 'jane@example.com', experience: '3 years', dob: 'Angular', currentStatus: 'Inactive' },
    { name: 'Bob Johnson', mobile: '+1122334455', email: 'bob@example.com', experience: '7 years', dob: 'Vue', currentStatus: 'Active' }
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
      {/* <h1>Priest Data</h1> */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Mobile</th>
            <th style={thStyle}>E-mail</th>
            <th style={thStyle}>Experience</th>
            <th style={thStyle}>DOB</th>
            <th style={thStyle}>Documents</th>
            <th style={thStyle}>Cur Status</th>
            <th style={thStyle}>Action</th>
            </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
             <tr key={index}>
             <td style={tdStyle}>{user.name}</td>
             <td style={tdStyle}>{user.mobile}</td>
             <td style={tdStyle}>{user.email}</td>
             <td style={tdStyle}>{user.experience}</td>
             <td style={tdStyle}>{user.dob}</td>
             <td style={tdStyle}>{user.documents}</td>
             <td style={tdStyle}>{user.currentStatus}</td>
             <td style={tdStyle}>Action button</td> {/* Placeholder for action button */}
           </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Colors;
