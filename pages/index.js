import Head from "next/head";
import Image from "next/image";
import PostThumb from "../components/PostThumb";
import Section from "../components/Section";

import Layout from "../layout/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Layout>
        <Section />
        <PostThumb />
      </Layout>
    </>
  );
}
