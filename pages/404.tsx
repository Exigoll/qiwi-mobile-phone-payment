import {useEffect} from "react";
import {useRouter} from "next/router";
import styled from "styled-components";

import Head from "next/head";

const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 350px;

  h1 {
    padding-bottom: 20px;
    font-size: 64px;
    line-height: 64px;
    font-weight: 700;
  }

  h2 {
    font-size: 44px;
    line-height: 44px;
    font-weight: 500;
  }
`

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <StyledError>
      <Head>
        <title>Error 404</title>
      </Head>
      <h1>Error: 404</h1>
      <h2>This page was not found &#128528;</h2>
    </StyledError>
  );
};

export default Error;
