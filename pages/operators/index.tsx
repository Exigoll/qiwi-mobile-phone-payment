import {FC} from "react";
import styled from "styled-components";
import {GetStaticProps} from "next";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Search from "../../components/Search";

import {operatorType} from "../../types";
import ButtonPrev from "../../components/Buttons/ButtonPrev";


export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://62b0a2f4e460b79df04a5c80.mockapi.io/operators");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {operators: data}
  };
};

type operatorsTypeProps = {
  operators: [operatorType];
}

const StyledOperators = styled.div`
  position: relative;
  max-width: 1440px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 40px 20px;

  h2 {
    padding-bottom: 10px;
    font-size: 14px;
    font-weight: 300;
  }

  h1 {
    font-size: 32px;
    line-height: 32px;
    font-weight: 900;
  }
`
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  justify-items: center;
  max-width: 928px;
  margin: 0 auto;
  padding: 80px 0;
`
const Item = styled.li`
  width: 220px;
  height: 224px;
  padding: 36px 12px 8px;
  background-color: #fff;
  border-radius: 10px;
  transition: box-shadow 300ms ease, transform 300ms ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 18px 0 rgb(0 0 0 / 10%);
  }
`
const StyledLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;

  h3 {
    font-weight: 900;
  }
`

const Operators: FC<operatorsTypeProps> = ({operators}) => {
  const operator = operators && operators.map(({id, title, img}) => (
    <Link key={id} href={`/operators/${id}`}>
      <Item>
        <StyledLink>
          <Image src={img}
                 width={72}
                 height={72}
                 alt="Logo"/>
          <h3>{title}</h3>
        </StyledLink>
      </Item>
    </Link>
  ))

  return (
    <StyledOperators>
      <Head>
        <title>Платежи и переводы</title>
      </Head>
      <h2>Услуги и платежи</h2>
      <h1>Мобильная связь</h1>
      <Search/>
      <ButtonPrev/>
      <List>
        {operator}
      </List>
    </StyledOperators>
  );
}

export default Operators;
