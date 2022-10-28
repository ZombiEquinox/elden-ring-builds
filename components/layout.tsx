import Head from 'next/head'
import Nav from './nav'
import Footer from "./footer"

export default function Layout({children}){
  return(
    <>
    <Head>
        <title>Elden Ring Builds</title>
        <meta name="description" content="Create, share, and test Elden Ring builds" />
        <link rel="icon" href="/favicon.ico?v-2" />
      </Head>
      <Nav/>
    <main className='container'>
      {children}
    </main>
    <Footer/>
    </>
  )
}