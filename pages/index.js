import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";
import React, { useState } from 'react';
import Slider from './user/banner/banner';
import MenuProduct from './user/product/module/menuProduct'
import Product from './user/product/module/listProduct';
import Container from "react-bootstrap/Container";
import Style from '/styles/Home.module.css';

function Home() {
  return (
    <Layout>
      <Slider/>

      <Container className={Style.container}>
        <MenuProduct/>

        <Product/>
        <Product/>
        <Product/>
      </Container>
    </Layout>
  );
}

export default Home;
