import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import ListCategory, { Title } from "../../components/ListCategory";
import ListProducts from "../../components/ListProducts";
import Modal from "../../components/Modal";
import { useAuth } from "../../context/auth-context";
import { getCategories } from "../../services/categories-service";
import { handleCategories } from "./utils";

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
  const [categories, setCategories] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    getCategories()
      .then((data) => {
        const allCategory = handleCategories(data)
        setCategories(allCategory)
      })
      .catch(console.log)
  }, [])

  return (
    <>
      <ListCategory categories={categories} />
      <Header>
        <Title>All Products</Title>
        <Button onClick={() => { setIsOpenModal(!isOpenModal) }}>Add product</Button>
      </Header>
      <ListProducts options={categories} products={products} />
      <Modal
        state={isOpenModal}
        changeState={setIsOpenModal}
        title="Add Products"
      >
        <Form options={categories} modal={setIsOpenModal} />
      </Modal>
    </>
  )
}

export default Home;