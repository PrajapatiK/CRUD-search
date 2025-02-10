const FormInput = ({ formData, handleChange, handleSubmit }) => {
  return (
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
  )
}

export default FormInput;
