import styled from "@emotion/styled";
import { useState } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import ListCategory, { Title } from "../../components/ListCategory";
import ListProducts from "../../components/ListProducts";
import Modal from "../../components/Modal";
import { useAuth } from "../../context/auth-context";

const Header = styled.header`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  border-radius: 0.3rem;
`

function Home() {
  const { products } = useAuth()
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <ListCategory />
      <Header>
        <Title>All Products</Title>
        <Button onClick={() => { setIsOpenModal(!isOpenModal) }}>Add product</Button>
      </Header>
      <ListProducts products={products} />
      <Modal
        state={isOpenModal}
        changeState={setIsOpenModal}
        title="Add Products"
      >
        <Form modal={setIsOpenModal} />
      </Modal>
    </>
  )
}

export default Home;