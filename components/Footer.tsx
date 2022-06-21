import {FC} from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  font-size: 14px;
  line-height: 14px;
  font-weight: 300;
  color: rgb(100, 100, 100);
  background-color: rgb(245 245 245);

  p {
    text-align: right;
  }
`

const Footer: FC = () => {
  return (
    <StyledFooter>
      <p>© 2022, КИВИ Банк (АО), лицензия ЦБ РФ № 2241</p>
      <p>Россия, 117648, г. Москва, мкр. Чертаново Северное, д.1А, корп.1</p>
    </StyledFooter>
  );
}

export default Footer;
