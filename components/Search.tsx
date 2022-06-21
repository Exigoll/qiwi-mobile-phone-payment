import {FC} from "react";
import styled from "styled-components";

import Image from "next/image";

import searchSvg from "../public/svg/search.svg";

const StyledSearch = styled.div`
  position: relative;
`
const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-top: 30px;
  background-color: rgba(118 118 118 / 15%);
  border-radius: 10px;
  color: rgb(118 118 118);
  transition: all .3s ease-in-out;

  &:focus {
    box-shadow: 0 27px 85px -5px rgba(0, 0, 0, 0.15);
    background-color: #fff;
  }
`
const StyledImage = styled.div`
  position: absolute;
  top: 40px;
  right: 15px;
  width: 28px;
  height: 28px;
  transition: opacity .3s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: .3;
  }
`

const Search: FC = () => {
  return (
    <StyledSearch>
      <Input type="text" placeholder="Найдите нужного оператора сотовой связи..."/>
      <StyledImage>
        <Image src={searchSvg}/>
      </StyledImage>
    </StyledSearch>
  );
}

export default Search;
