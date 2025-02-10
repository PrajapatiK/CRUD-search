const TableData = ({ state }) => {
  if (state.length === 0)
    return (
      <p style={{ textAlign: "center", width: "300px", border: '1px solid gray', padding: '15px', borderRadius: '10px'}}>
        No Record Found
      </p>
    );
  return (
    <table style={{ border: "1px solid gray" }}>
      <tr>
        <th>User ID</th>
        <th>User Name</th>

        <th>role</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Department</th>
        <th>Date of Joining</th>
        <th>Manager ID</th>

        <th>Seniority</th>
        <th>Employee Code</th>
      </tr>
      <tbody>
        {state.map((user) => {
          return (
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>{user.userName}</td>

              <td>{user.role}</td>
              <td>{user.fName}</td>
              <td>{user.lName}</td>
              <td>{user.dept}</td>
              <td>{user.doj}</td>
              <td>{user.mngrId}</td>

              <td>{user.seniority}</td>
              <td>{user.empCode}</td>
            </tr>

            // <p key={user?.userId}>{user?.dept}</p>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableData;
