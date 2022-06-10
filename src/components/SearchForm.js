import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  return (
    <section className='section search'>
      <form
        className='search-form'
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className='form-control'>
          <label htmlFor='name'>search cocktails menu</label>
          <input
            type='text'
            ref={searchValue}
            id='name'
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
