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

function Home({ products, onSubmit }) {
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

  function handleClick() {
    const data = {
      title: 'T-shirt',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://images.unsplash.com/photo-1522706604291-210a56c3b376?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
      category: `electronics`,
      rating: {
        rate: 1,
        count: 0,
      }
    }
    onSubmit(data)
  }

  return (
    <>
      <ListCategory categories={categories} />
      <Header>
        <Title>All Products</Title>
        <Button onClick={() => { setIsOpenModal(!isOpenModal) }}>Add product</Button>
      </Header>
      <ListProducts products={products} />
      <Modal
        state={isOpenModal}
        changeState={setIsOpenModal}
      >
        <Form options={categories} />
      </Modal>
    </>
  )
}

export default Home;