import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import Typing from "components/Typing";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>
        <label style={{ color: "#e6213c" }}>Julián &nbsp;</label>
        <label style={{ color: "white" }}>Ángel</label>
      </h1>
      <Typing />
    </div>
  );
}
