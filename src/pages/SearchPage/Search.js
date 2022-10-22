import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/svg/Logo.svg';
import { useAuth } from '../../context/auth-context';
import { colors } from '../../styles/colors';
import InputSearch from '../../components/InputSearch';
import ListProducts from '../../components/ListProducts';

const StyledHeader = styled.header`
  padding: 2rem 1rem 1.5rem 1rem;
  background-color: ${colors.base.softBackground};
`
const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`

function Search({ query, onSearch }) {
  const { products } = useAuth()
  const navigate = useNavigate();
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

  function handleClick() {
    setFilterData("")
    navigate("/")
  }


  return (
    <>
      <StyledHeader>
        <StyledButton onClick={handleClick}>
          <img src={logo} />
        </StyledButton>
        <form onSubmit={handleSubmit}>
          <InputSearch
            value={query}
            onChange={handleFilter}
          />
        </form>
      </StyledHeader>
      {filterData && filterData.length === 0 && query !== '' ? <p>No hay producto</p> : ''}
      {query ? <ListProducts products={filterData} /> : ''}
    </>
  )
}

export default Search;