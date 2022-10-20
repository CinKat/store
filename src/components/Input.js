import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

const Label = styled.label`
  ${typography.head.h1};
  color: ${colors.text.paragraph};
`;

const StyledInput = styled.input`
  padding: 1rem 1.5rem;
  border-radius: 3rem;
  border: none;
  background-color: ${colors.main.white};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.text.subtxt};
    ${typography.text.txt1};
    width: fit-content;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  ${(props) => typeStyles(props.type)};
`;

export const Error = styled.p`
  color: ${colors.main.softBlack};
  padding-left: 1rem;
`;

function typeStyles(type) {
  switch (type) {
    case 'file':
      return `
        & > input {
          display: none;
        }

        & > label {
          padding: 0.5rem 1.5rem; 
          border-radius: 0.5rem; 
          border: solid 1px black;
          width: fit-content;
        }
      `
    default:
      break;
  }
}

function Input({
  id,
  name,
  type = "text",
  placeholder,
  label,
  error,
  size,
  ...rest
}) {
  name ||= id;

  return (
    <InputContainer type={type}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        size={size}
        {...rest}
      />
      {error && <Error>{error}</Error>}
    </InputContainer>
  );
}

export default Input;