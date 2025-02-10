const SearchInput = ({ search, handleSearch }) => {
  return (
    <input
      style={{ padding: "8px", borderRadius: "10px", width: "300px" }}
      type="text"
      placeholder="Search"
      onChange={handleSearch}
      value={search}
    />
  );
};

export default SearchInput;
