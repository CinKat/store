import styled from "@emotion/styled";
import { useState } from "react";
import { getSingleProduct } from "../services/products-service";
import Card from "./Card";
import Form from "./Form";
import Modal from "./Modal";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(220px, 1fr));
  gap: 1rem;
  justify-items: center;
`

function ListProducts({ products }) {
  const [isOpen, setOpen] = useState(false);
  const [singleProduct, setSingleProduct] = useState('')

  function handleProduct(id) {
    getSingleProduct(id)
      .then((product) => {
        if (typeof (product) === 'object') {
          setSingleProduct(product)
        } else {
          let currentProduct = products.find((product) => product.id === id)
          setSingleProduct(currentProduct)
        }
        setOpen(!isOpen)
      })
      .catch((error) => { console.log(error) })
  }

  return (
    <>
      <Container>
        {products ? products.map((product) => (
          <Card
            product={product}
            key={product.title}
            isOpen={isOpen}
            getProduct={handleProduct} />
        )) : ''}
      </Container>


      <Modal
        state={isOpen}
        changeState={setOpen}
        title="Edit product"
      >
        <Form product={singleProduct} modal={setOpen} />
      </Modal>
    </>
  )
}

export default ListProducts;