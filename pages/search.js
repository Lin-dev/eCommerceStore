import React, { useState, Component } from 'react';
import styled from 'styled-components';
import allproducts from '../data';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Productlink = styled.a`
  max-width: 150px;

  & * {
    max-width: 150px;
  }

  & *:hover {
    background-color: gray;
    cursor: pointer;
  }
`;

const Search = () => {
  const [searchValue, setSearchValue] = useState([]);

  const handleSearchInputChanges = event => {
    setSearchValue(event.target.value);
  };

  let [count, setCount] = useState(1);
  function increment() {
    setCount(count + 1);
  }

  // const onSubmitHandler = event => {
  //   event.preventDefault();
  //   const linkWithSearch = './results?' + searchValue;
  //   window.location.href = linkWithSearch;
  // };

  return (
    <>
      <div>
        <div>
          <form action="/results">
            <input
              name="q"
              value={searchValue}
              onChange={handleSearchInputChanges}
            />

            <input type="submit" value="Search" />
          </form>
          <button onClick={increment}>+</button>
          {count}
        </div>
      </div>

      <br />
    </>
  );
};

export default Search;
