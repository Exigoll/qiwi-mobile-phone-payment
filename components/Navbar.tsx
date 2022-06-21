import {FC} from "react";
import styled from "styled-components";
import Link from "next/link";

const navigation = [
  {id: 1, title: "Платежи и переводы", path: "/operators"},
  {id: 2, title: "Банковские карты", path: "/id2"},
  {id: 3, title: "Пополнение кошелька", path: "/id3"},
  {id: 4, title: "Помощь", path: "/id4"},
  {id: 5, title: "Еще...", path: "/id5"},
]

const StyledNavbar = styled.nav`

`
const List = styled.ul`
  display: flex;
  column-gap: 25px;
`

const StyledLink = styled.a`
  transition: color .3s ease-in-out;

  &.active,
  &:hover {
    color: #FF8C00;
  }
`

const Navbar: FC = () => {
  const item = navigation.map(({id, title, path}) => (
    <li key={id}>
      <Link href={path}>
        <StyledLink>{title}</StyledLink>
      </Link>
    </li>
  ))

  return (
    <StyledNavbar>
      <List>
        {item}
      </List>
    </StyledNavbar>
  );
}

export default Navbar;
