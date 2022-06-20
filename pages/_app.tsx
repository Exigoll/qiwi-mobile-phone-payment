import '../styles/app.scss';
import type {AppProps} from 'next/app'
import Wrapper from "../components/Wrapper";
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Wrapper>
      <Head>
        <title>Qiwi</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </Wrapper>
  )
}

export default MyApp
