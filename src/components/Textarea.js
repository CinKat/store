import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

const Label = styled.label`
  ${typography.head.h1};
  color: ${colors.text.paragraph};
`;

const StyledTextarea = styled.textarea`
  padding: 1rem 1.5rem;
  border-radius: 1.8rem;
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
`;

export const Error = styled.p`
  color: ${colors.main.softBlack};
  padding-left: 1rem;
`;

function Textarea({
  id,
  name,
  placeholder,
  label,
  error,
  size,
  ...rest
}) {
  name ||= id;

  return (
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      <StyledTextarea
        id={id}
        name={name}
        placeholder={placeholder}
        size={size}
        {...rest}
      />
      {error && <Error>{error}</Error>}
    </InputContainer>
  );
}

export default Textarea;