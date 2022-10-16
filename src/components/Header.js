import styled from '@emotion/styled';
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
      <img src={logo} />
      <InputSearch />
    </StyledHeader>
  )
}

export default Header;