import { useState } from "react";
import styles from "./styles.module.css"

export default function SearchBar({ search }) {

  const [city, setCity] = useState("")

  return <div className={styles.searchBar}>
    <form onSubmit={(e) => {
      e.preventDefault();
      search(city)
    }}>
     <input type="text" onChange={(e) => setCity(e.target.value)} className={styles.inputSearch}/>
     <button type="submit" className={styles.buttonSearch}>Buscar</button>
    </form>
  </div>;
}