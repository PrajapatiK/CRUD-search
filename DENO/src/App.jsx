import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const initialState = {
    userId: "",
    userName: "",
    role: "",
    lastLogin: "",
    fName: "",
    lName: "",
    dept: "",
    doj: "",
    mngrId: "",
    seniority: "",
    empCode: "",
  };
  const [state, setState] = useState([]);
  const [formData, setFormData] = useState(initialState);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData({});
  }, []);

  function getData(query) {
    console.log(query);

    fetch("http://localhost:4000/api/getUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);

        setState(resData.data);
      });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/api/addUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        getData({});
      });
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    getData({ query: e.target.value });
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        onChange={handleSearch}
        value={search}
      />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        First Name:{" "}
        <input
          type="text"
          name="fName"
          onChange={handleChange}
          value={formData.fName}
        />
        <br />
        <br />
        Last Name:{" "}
        <input
          type="text"
          name="lName"
          onChange={handleChange}
          value={formData.lName}
        />
        <br />
        <br />
        Department:{" "}
        <input
          type="text"
          name="dept"
          onChange={handleChange}
          value={formData.dept}
        />
        <br />
        <br />
        Role:{" "}
        <input
          type="text"
          name="role"
          onChange={handleChange}
          value={formData.role}
        />
        <br />
        <br />
        Date of Joining:{" "}
        <input
          type="date"
          name="doj"
          onChange={handleChange}
          value={formData.doj}
        />
        <br />
        <br />
        Seniority:{" "}
        <input
          type="text"
          name="seniority"
          onChange={handleChange}
          value={formData.seniority}
        />
        <br />
        <br />
        <button type="submit">ADD</button>
      </form>
      <br />
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
          {state.length > 0 ? state.map((user) => {
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
          }): <p style={{ textAlign: 'center', width: '100%' }}>No Record Found</p>}
        </tbody>
      </table>
    </>
  );
}

export default App;
