import styled from "styled-components";
import type {NextPage} from 'next'

const StyledHome = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 40px 20px;

  p {
    padding-top: 50px;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
  }
`

const Home: NextPage = () => {
  return (
    <StyledHome>
      <p>Для оплаты счета нажмите на ссылку "Платежи и переводы" в панели навигации страницы</p>
    </StyledHome>
  )
}

export default Home
