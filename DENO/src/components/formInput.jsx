const FormInput = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <table style={{}}>
        <tr>
          <td style={{ textAlign: "left" }}>First Name: </td>
          <td>
            <input
              style={{ padding: "5px", borderRadius: "5px" }}
              type="text"
              name="fName"
              onChange={handleChange}
              value={formData.fName}
            />
          </td>
        </tr>
        <tr>
          <td style={{ textAlign: "left" }}>Last Name: </td>
          <td>
            <input
              style={{ padding: "5px", borderRadius: "5px" }}
              type="text"
              name="lName"
              onChange={handleChange}
              value={formData.lName}
            />
          </td>
        </tr>
        <tr>
          <td style={{ textAlign: "left" }}>Department: </td>
          <td>
            <input
              style={{ padding: "5px", borderRadius: "5px" }}
              type="text"
              name="dept"
              onChange={handleChange}
              value={formData.dept}
            />
          </td>
        </tr>
        <tr>
          <td style={{ textAlign: "left" }}>Role: </td>
          <td>
            <input
              style={{ padding: "5px", borderRadius: "5px" }}
              type="text"
              name="role"
              onChange={handleChange}
              value={formData.role}
            />
          </td>
        </tr>
        <tr>
          <td style={{ textAlign: "left" }}>Date of Joining: </td>
          <td>
            <input
              style={{ width: "92%", padding: "5px", borderRadius: "5px" }}
              type="date"
              name="doj"
              onChange={handleChange}
              value={formData.doj}
            />
          </td>
        </tr>
        <tr>
          <td style={{ textAlign: "left" }}>Seniority: </td>
          <td>
            <input
              style={{ padding: "5px", borderRadius: "5px" }}
              type="text"
              name="seniority"
              onChange={handleChange}
              value={formData.seniority}
            />
          </td>
        </tr>
        <br />
        <tr>
          <td colSpan={2}>
            <button style={{ width: "100%" }} type="submit">
              ADD
            </button>
          </td>
        </tr>
      </table>
    </form>
  );
};

export default FormInput;
