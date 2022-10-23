import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { typography } from "../styles/typography";

const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  background-color: ${colors.main.third};
  font-weight: 600;
  border: none;
  cursor: pointer;
  border-radius: 3.1rem;
  width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};
`;

const Text = styled.span`
  ${typography.text.txt2};
  color: ${colors.main.white};
`

function Button(props) {
  return (
    <StyledButton {...props}>
      {props.Icon && <props.Icon />}
      <Text>{props.children}</Text>
    </StyledButton>
  );
}

export default Button;