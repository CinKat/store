import styled from '@emotion/styled';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/svg/Logo.svg';
import { useAuth } from '../context/auth-context';
import { colors } from '../styles/colors';
import InputSearch from './InputSearch';
import ListProducts from './ListProducts';

const StyledHeader = styled.header`
  padding: 2rem 1rem 1.5rem 1rem;
  background-color: ${colors.base.softBackground};
`

function Header({ query, onSearch }) {
  const { products } = useAuth()
  const [filterData, setFilterData] = useState()

  function handleFilter(event) {
    onSearch({ query: event.target.value })
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (query) {
      const results = products.filter((item) => {
        return item.title.toLowerCase().includes(query.toLowerCase())
      })
      setFilterData(results)
    }
  }


  return (
    <>
      <StyledHeader>
        <Link to="/">
          <img src={logo} />
        </Link>
        <form onSubmit={handleSubmit}>
          <InputSearch
            value={query}
            onChange={handleFilter}
          />
        </form>
      </StyledHeader>
      {query ? <ListProducts products={filterData} /> : ''}
    </>
  )
}

export default Header;