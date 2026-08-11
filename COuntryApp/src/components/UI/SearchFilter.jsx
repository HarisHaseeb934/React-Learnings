export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
//   console.log();
//   function handleClick(value) {
//     const sortCountries = [...countries.data.objects].sort((a,b) => {
//         console.log(a)
//         console.log(b)
//         return value === "asc" ? a.names.common.localeCompare(b.names.common) : b.names.common.localeCompare(a.names.common)
//     })
//     console.log(sortCountries)
//     setCountries(sortCountries);
//   } 
  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function handleFilterChange(e) {
    e.preventDefault();
    setFilter(e.target.value);
  }

  return (
    <section className="w-full max-w-xl m-auto flex justify-between items-center my-5">
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={handleChange}
        className="p-3 outline-none border-1 border-[#66BB6A]"
      />
      <button onClick={() => handleClick("asc")}>ASC</button>
      <button onClick={() => handleClick("des")}>DES</button>
      <div>
        <select
          value={filter}
          onChange={handleFilterChange}
          className="p-3 outline-none border-1 border-[#66BB6A]"
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};
