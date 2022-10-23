import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/svg/Logo.svg';
import { useAuth } from '../../context/auth-context';
import { colors } from '../../styles/colors';
import InputSearch from '../../components/InputSearch';
import ListProducts from '../../components/ListProducts';
import { typography } from '../../styles/typography';

const StyledHeader = styled.header`
  padding: 2rem 1rem 1.5rem 1rem;
  background-color: ${colors.base.softBackground};
  margin-bottom: 2rem;
  @media (min-width: 600px) {
    padding: 2rem 6rem;
    display: flex;
    gap: 5.6rem;
  }
`
const Form = styled.form`
  @media (min-width: 600px) {
    width: 100%;
  }
`
const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`
const Warning = styled.p`
  ${typography.text.txt3};
  color: ${colors.text.paragraph};
  padding: 3rem 3rem;
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
        <Form onSubmit={handleSubmit}>
          <InputSearch
            value={query}
            onChange={handleFilter}
          />
        </Form>
      </StyledHeader>
      {filterData && filterData.length === 0 && query !== '' ?
        <Warning>The product was not found</Warning> : ''}
      {query ? <ListProducts products={filterData} /> : ''}
    </>
  )
}

export default Search;