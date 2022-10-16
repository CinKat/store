import styled from "@emotion/styled"
import { TbSearch } from "react-icons/tb"
import { colors } from "../styles/colors"
import { typography } from "../styles/typography"


const StyledInput = styled.input`
  border: none;
  &::placeholder {
    ${typography.text.txt1};
    color: ${colors.text.subtxt};
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
function InputSearch() {
  return (
    <InputContainer>
      <StyledInput placeholder="Search anything" />
      <TbSearch color={colors.main.medium} />
    </InputContainer>
  )
}

export default InputSearch;