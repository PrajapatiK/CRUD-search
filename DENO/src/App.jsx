import { useEffect, useState } from "react";
import "./App.css";
import SearchInput from "./components/searchInput";
import FormInput from "./components/formInput";
import TableData from "./components/tableData";
import useDebounce from "./hooks/useDebounce";

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
  const debouncedSearch = useDebounce(search, 500);

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
    // getData({ query: e.target.value });
  };

  useEffect(() => {
    // if (debouncedSearch) {
    getData({ query: debouncedSearch });
    // }
  }, [debouncedSearch]);

  return (
    <>
      <SearchInput handleSearch={handleSearch} search={search} />
      <br />
      <br />
      <FormInput
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
      <br />
      <br />
      <TableData state={state} />
    </>
  );
}

export default App;
