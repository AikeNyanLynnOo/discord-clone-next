import Head from "next/head";
import Image from "next/image";
import { Navigation } from "../components/Navigation";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Discord Clone By a1k3</title>
        <meta name="description" content="Created by a1k3" />
        <link rel="icon" href="/discord-transparent.png" />
      </Head>
      <Navigation />
      <main className={`${styles.xLargeFont}`}>Hello world</main>
    </div>
  );
}
