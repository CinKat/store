import styled from "@emotion/styled"
import { TbSearch } from "react-icons/tb"
import { colors } from "../styles/colors"
import { typography } from "../styles/typography"


const StyledInput = styled.input`
  border: none;
  color: ${colors.text.paragraph};
  ${typography.head.h1};
  &::placeholder {
    ${typography.text.txt1};
    color: ${colors.text.subtxt};
  }
  &:focus {
    outline: none;
  }
`
const InputContainer = styled.div`
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4.3rem;
  background-color: ${colors.main.white};
`
function InputSearch({
  id,
  name,
  type = "text",
  ...rest }) {
  name ||= id;

  return (
    <InputContainer>
      <StyledInput
        placeholder="Search anything"
        id={id}
        name={name}
        type={type}
        {...rest}
      />
      <TbSearch color={colors.main.medium} />
    </InputContainer>
  )
}

export default InputSearch;