import React, { FunctionComponent } from "react";
import Head from 'next/head'
import Heading from "../components/heading";

const Home: FunctionComponent = () => {
  return (
    <div className="container">
      <Head>
        <title>Yaren Ipek</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;700&display=swap" rel="stylesheet"></link>
      </Head>

      <main>
        <Heading />
        <h1 className="title">
          Hi! I'm Yaren Ipek
        </h1>
      </main>
    </div>
  )
}

export default Home;