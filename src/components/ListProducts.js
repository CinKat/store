import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";
import { getSingleProduct } from "../services/products-service";
import Card from "./Card";
import Form from "./Form";
import Modal from "./Modal";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

function ListProducts({ options, products }) {
  const [isOpen, setOpen] = useState(false);
  const [singleProduct, setSingleProduct] = useState('')

  function handleProduct(id) {
    getSingleProduct(id)
      .then((product) => {
        setSingleProduct(product)
        setOpen(!isOpen)
      })
      .catch((error) => { console.log(error) })
  }

  return (
    <Wrapper>
      {products ? products.map((product) => (
        <Card
          product={product}
          key={product.title}
          isOpen={isOpen}
          getProduct={handleProduct} />
      )) : ''}
      <Modal
        state={isOpen}
        changeState={setOpen}
        title="Edit product"
      >
        <Form options={options} product={singleProduct} modal={setOpen} />
      </Modal>
    </Wrapper>
  )
}

export default ListProducts;