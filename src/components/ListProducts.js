import styled from "@emotion/styled";
import { useState } from "react";
import { getSingleProduct } from "../services/products-service";
import Card from "./Card";
import Form from "./Form";
import Modal from "./Modal";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

function ListProducts({ products, onUpdate, options }) {
  const [isOpen, setOpen] = useState(false);
  const [singleProduct, setSingleProduct] = useState('')

  function handleProduct(id) {
    getSingleProduct(id)
      .then((product) => {
        setSingleProduct(product)
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
          setOpen={setOpen}
          getProduct={handleProduct} />
      )) : ''}
      <Modal
        state={isOpen}
        changeState={setOpen}
        title="Edit product"
      >
        <Form options={options} product={singleProduct} onUpdate={onUpdate} />
      </Modal>
    </Wrapper>
  )
}

export default ListProducts;