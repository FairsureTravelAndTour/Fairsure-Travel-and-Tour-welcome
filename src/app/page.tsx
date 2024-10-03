import { Welcome } from "./(landingpage)/page";
import 'aos/dist/aos.css';
import styles from './page.module.css'; 


export default function Home() {


  return (
    <div className={styles.page}>
      <Welcome/>
    </div>
  );
}
