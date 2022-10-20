import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import ListCategory, { Title } from "../../components/ListCategory";
import ListProducts from "../../components/ListProducts";
import Modal from "../../components/Modal";
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

function Home({ products, onCreate, onUpdate, onDelete }) {
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
      <ListProducts products={products} options={categories} onUpdate={onUpdate} onDelete={onDelete} />
      <Modal
        state={isOpenModal}
        changeState={setIsOpenModal}
        title="Add Products"
      >
        <Form options={categories} onCreate={onCreate} />
      </Modal>
    </>
  )
}

export default Home;