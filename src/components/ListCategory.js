import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

export const Title = styled.h1`
  ${typography.head.h2};
  text-transform: capitalize;
`
const Container = styled.div`
  @media (min-width: 600px) {
    display: flex;
    gap: 2rem;
  }
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
  @media (min-width: 800px) {
    width: 9rem;
  }

  @media (min-width: 900px) {
    min-width: 16rem;
  }
`

function ListCategory() {
  const { categories } = useAuth()

  return (
    <Container>
      {categories ? categories.map(({ name, Icon, color } = categories) => (
        <Wrapper
          to={`category/${name}`}
          color={color}
          key={name}>
          <Icon color={`${colors.main.third}`} size='7rem' />
          <Title>{name}</Title>
        </Wrapper>
      )) : ''}
    </Container>
  );
}

export default ListCategory