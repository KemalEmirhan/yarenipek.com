import React, { FunctionComponent, useState } from "react";
import Head from 'next/head'
import Heading from "../components/heading";
import { About, Articles } from "@components/index";

const Home: FunctionComponent = () => {
  const [activeSection, setActiveSection] = useState(1); // 1 = About, 2 = Articles

  return (
    <div className="container">
      <Head>
        <title>Yaren Ipek</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;700&display=swap" rel="stylesheet"></link>
      </Head>

      <main>
        <Heading />
        {activeSection === 1 ? (
          <About /> 
        ) : (
          <Articles />
        )}
      </main>
    </div>
  )
}

export default Home;