import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import logo from '../assets/svg/Logo.svg';
import { colors } from '../styles/colors';
import InputSearch from './InputSearch';

const StyledHeader = styled.header`
  padding: 2rem 1rem 1.5rem 1rem;
  background-color: ${colors.base.softBackground};
`

function Header() {
  return (
    <StyledHeader>
      <Link to={'/'}>
        <img src={logo} />
      </Link>
      <InputSearch />
    </StyledHeader>
  )
}

export default Header;