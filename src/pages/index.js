import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Blog from '../sections/Blog';
import Contact from '../sections/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Projects />
    <Contact />
    <Blog />
    <Footer />
   
  </Layout>
);

export default IndexPage;
