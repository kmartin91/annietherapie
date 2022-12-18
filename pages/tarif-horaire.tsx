import { Cormorant_Garamond } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import Button from "../src/components/button/default/Button";
import Header from "../src/components/header/Header";

import styles from "../src/styles/Home.module.css";

const cormorant = Cormorant_Garamond({
  weight: "300",
  subsets: ["latin"],
});

export default function Tarif() {
  return (
    <>
      <Head>
        <title>Annie MAQUET - Psychopraticienne / Gestalt Thérapie</title>
        <meta
          name="description"
          content="Annie MAQUET - Psychopraticienne / Gestalt Thérapie"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${cormorant.className} ${styles.container}`}>
        <section className={styles.section}>
          <Header />

          <main className={styles.main}>
            <Button className={styles.buttonMain} href="/contact">
              Contact
            </Button>
          </main>
        </section>
      </div>
    </>
  );
}
