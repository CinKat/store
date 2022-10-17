import styled from "@emotion/styled";
import { useEffect, useState } from "react"; import { useParams } from "react-router-dom"
import { getCategory } from "../services/categories-service";
import { colors } from "../styles/colors";
import Button from "./Button";
import ListProducts from "./ListProducts";

const NameCategory = styled.h4`
  color: ${colors.main.white};
  text-transform: capitalize;
`
const Header = styled.header`
  display: flex;
  background-color: ${colors.blue};
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  border-radius: 0.3rem;
`
function Category() {
  let { categoryId } = useParams();
  const [products, setProducts] = useState('')

  useEffect(() => {
    getCategory(categoryId)
      .then((data) => setProducts(data))
      .catch(console.log)
  }, [categoryId])

  return (
    <div>
      <Header>
        <NameCategory>{categoryId}</NameCategory>
        <Button>Agregar producto</Button>
      </Header>
      <ListProducts products={products} />
    </div>
  )
}

export default Category