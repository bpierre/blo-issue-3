import { blo, bloSvg } from "blo";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.demo}>
        <img src={blo("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045")} />
        <div
          dangerouslySetInnerHTML={{
            __html: bloSvg("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"),
          }}
        />
      </div>
    </main>
  );
}
