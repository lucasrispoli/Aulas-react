import Header from "../../components/HeaderMain";
import styles from "./Autores.module.css";
import Footer from "../../components/Footer";

export default function Autores() {
  return (
    <div> 
      <Header />
      <div className={styles.container}>
      <h1>AUTORES</h1>
      <div className={styles.lista}>
        <button onClick={()=>window.open('https://github.com/duarterailla','_blank')}>RAILLA</button>
        <button onClick={()=>window.open('https://github.com/lucasrispoli','_blank')}>LUCAS</button>
        <button onClick={()=>window.open('https://placebear.com/300/300','_blank')}>GEOVANI</button>
        <button onClick={()=>window.open('https://cataas.com/cat','_blank')}>JOSE</button>
        <button onClick={()=>window.open('https://github.com/LGomes25?tab=repositories','_blank')}>LEO</button>
      </div>
      <Footer />
    </div>
     </div>
  );
  }
