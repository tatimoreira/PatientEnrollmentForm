import "../styles/index.css";
import { Layout } from "../components/layout";
import  RegisterUser  from "../components/registerUser";


import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => (
  <Layout>
    <RegisterUser/>
  </Layout>
);

export default Home;
