import styled from '@emotion/styled';
import { FaStar } from 'react-icons/fa'
import { Subtitle } from './ListProducts';

const StyledRating = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

function Rating({ rate }) {

  return (
    <StyledRating>
      <div>
        {
          [...Array(5)].map((item, index) => {
            return index + 1 <= rate ? <FaStar color='#FFB200' key={index} /> : <FaStar color='#B2B2B2' key={index} />
          })
        }
      </div>
      <Subtitle>{`(${rate})`}</Subtitle>
    </StyledRating>
  )
}

export default Rating;