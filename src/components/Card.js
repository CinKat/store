import styled from "@emotion/styled"
import { colors } from "../styles/colors"
import { typography } from "../styles/typography"
import { AiOutlineEdit } from 'react-icons/ai'
import { CgTrash } from 'react-icons/cg'
import Rating from "./Rating"
import { useAuth } from "../context/auth-context"

const Img = styled.img`
  height: 11.5rem;
  width: 11rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  object-fit: contain;
`
const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 16rem;
  padding: 0.5rem 0.5rem 1rem 0.5rem;
  background: ${colors.main.white};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
`
export const Subtitle = styled.p`
  ${typography.text.txt1};
  color: ${colors.text.txt};
`
const Price = styled.h2`
  ${typography.text.txt5};
  color: ${colors.text.txt};
`
const CustomIcon = styled.button`
  background-color: ${colors.main.third};
  border-radius: 50%;
  border: none;
  width: 1.7rem;
  display: flex;
  justify-content: center;
  padding: 0.4rem;
  cursor: pointer;
`
const FooterCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`
const Links = styled.div`
  display: flex;
  gap: 0.2rem;
`

function Card({ product, getProduct }) {
  const { remove } = useAuth();


  function handleClickUpdate(id) {
    getProduct(id)
  }

  function handleClickDelete(id) {
    remove(id)
  }

  return (
    <ContentCard key={product.title}>
      <Img src={product.image} />
      <Subtitle>{product.title}</Subtitle>
      {product.rating ? <Rating rate={product.rating.rate} /> : ''}
      <FooterCard>
        <Price>{`$ ${product.price}`}</Price>
        <Links>
          <CustomIcon onClick={() => { handleClickUpdate(product.id) }}>
            <AiOutlineEdit color={`${colors.main.white}`} />
          </CustomIcon>
          <CustomIcon onClick={() => { handleClickDelete(product.id) }}>
            <CgTrash color={`${colors.main.white}`} />
          </CustomIcon>
        </Links>
      </FooterCard>
    </ContentCard>
  )
}

export default Card;