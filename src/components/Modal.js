import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { MdOutlineClose } from "react-icons/md"

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.5);

  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContainer = styled.div`
  width: 80%;
  min-height: 80%;
  background-color: ${colors.main.white};
  position: relative;
  border-radius: 0.5rem;
  box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
  padding: 1.2rem;
`
const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  padding-bottom: 1.25rem;
`
const CloseButton = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;

  width: 1.8rem;
  height: 1.8rem;
  border: none;
  cursor: pointer;
  border-radius: 0.3rem;

  display: flex;
  align-items: center;
`

function Modal({ children, state, changeState }) {
  return (
    <>
      {state &&
        <Overlay>
          <ModalContainer>
            <ModalHeader>Add Products</ModalHeader>
            <CloseButton onClick={() => { changeState(!state) }}>
              <MdOutlineClose />
            </CloseButton>
            {children}
          </ModalContainer>
        </Overlay>
      }
    </>
  )
}

export default Modal;