const TableData = ({ state }) => {
  if (state.length === 0)
    return (
      <p
        style={{
          textAlign: "center",
          width: "300px",
          border: "1px solid gray",
          padding: "15px",
          borderRadius: "10px",
        }}
      >
        No Record Found
      </p>
    );
  return (
    <table style={{ border: "1px solid gray" }}>
      <tr>
        <th style={{ border: "1px solid gray", padding: '5px' }}>User ID</th>
        <th style={{ border: "1px solid gray", padding: '5px' }}>User Name</th>

        <th style={{ border: "1px solid gray", padding: '5px' }}>role</th>
        <th style={{ border: "1px solid gray", padding: '5px' }}>First Name</th>
        <th style={{ border: "1px solid gray", padding: '5px' }}>Last Name</th>
        <th style={{ border: "1px solid gray", padding: '5px' }}>Department</th>
        <th style={{ border: "1px solid gray", padding: '5px' }}>Date of Joining</th>
        <th style={{ border: "1px solid gray", padding: '5px' }}>Manager ID</th>

        <th style={{ border: "1px solid gray", padding: '5px' }}>Seniority</th>
        <th style={{ border: "1px solid gray", padding: '5px' }}>Employee Code</th>
      </tr>
      <tbody>
        {state.map((user) => {
          return (
            <tr key={user.userId}>
              <td style={{ border: "1px solid gray", padding: '5px' }}>{user.userId}</td>
              <td style={{ border: "1px solid gray", padding: '5px' }}>{user.userName}</td>

              <td style={{ border: "1px solid gray", padding: '5px' }}>{user.role}</td>
              <td style={{ border: "1px solid gray", padding: '5px' }}>{user.fName}</td>
              <td style={{ border: "1px solid gray", padding: '5px' }}>{user.lName}</td>
              <td style={{ border: "1px solid gray", padding: '5px' }}>{user.dept}</td>
              <td style={{ border: "1px solid gray", padding: '5px' }}>{user.doj}</td>
              <td style={{ border: "1px solid gray", padding: '5px' }}>{user.mngrId}</td>

              <td style={{ border: "1px solid gray", padding: '5px' }}>{user.seniority}</td>
              <td style={{ border: "1px solid gray", padding: '5px' }}>{user.empCode}</td>
            </tr>

            // <p key={user?.userId}>{user?.dept}</p>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableData;
