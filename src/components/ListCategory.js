import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

export const Title = styled.h1`
  ${typography.head.h2};
  text-transform: capitalize;
`

const Wrapper = styled(Link)`
  background-color: ${(props) => (props.color)};
  border-radius: 0.3rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: ${colors.main.medium};
`

function ListCategory() {
  const { categories } = useAuth()

  return (
    <>
      {categories ? categories.map(({ name, Icon, color } = categories) => (
        <Wrapper
          to={`category/${name}`}
          color={color}
          key={name}>
          <Icon color={`${colors.main.third}`} size='7rem' />
          <Title>{name}</Title>
        </Wrapper>
      )) : ''}
    </>
  );
}

export default ListCategory