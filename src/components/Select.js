import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

const StyledSelect = styled.select`
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 3rem;
  border: none;
  background-color: ${colors.main.white};
  color: ${colors.text.subtxt};
  ${typography.text.txt1};
  text-transform: capitalize;
  &:focus {
    outline: none;
  }
`;

const StyledLabel = styled.label`
  ${typography.text.xs};
  text-transform: uppercase;
`;

function Select({ label, options, defaultValue, ...rest }) {
  console.log(options)
  return (
    <div>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledSelect {...rest} defaultValue={defaultValue}>
        {defaultValue && <option disabled>{defaultValue}</option>}
        {options.map((option) => (
          <option>{option.name}</option>
        ))}
      </StyledSelect>
    </div>
  );
}

export default Select;