import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";
import chevron from "../assets/svg/chevron.svg";
import { useAuth } from "../context/auth-context";


const StyledSelect = styled.select`
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 3rem;
  border: none;
  background-color: ${colors.main.white};
  color: ${colors.text.subtxt};
  ${typography.text.txt1};
  text-transform: capitalize;
  appearance: none;
  background-image: url(${chevron});
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: calc(100% - 21px);
  &:focus {
    outline: none;
  }
`;

const StyledLabel = styled.label`
  ${typography.text.xs};
  text-transform: uppercase;
`;

function Select({ label, defaultValue, ...rest }) {
  const { categories } = useAuth()

  return (
    <div>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledSelect {...rest}>
        {/* <option disabled>Category</option> */}
        {categories.map((option) => (
          <option key={option.name}>{option.name}</option>
        ))}
      </StyledSelect>
    </div>
  );
}

export default Select;