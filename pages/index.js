import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor
          ex incidunt, ut a modi in natus minus quaerat veniam ipsa
          necessitatibus, optio at consequuntur delectus fugiat voluptatem
          ipsam! Explicabo.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor
          ex incidunt, ut a modi in natus minus quaerat veniam ipsa
          necessitatibus, optio at consequuntur delectus fugiat voluptatem
          ipsam! Explicabo.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninjas</a>
        </Link>
      </div>
    </>
  );
}
