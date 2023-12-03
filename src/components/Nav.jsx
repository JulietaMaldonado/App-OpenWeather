import React from "react";
import SearchBar from "./SearchBar"
import styles from "./styles.module.css"

export default function Nav({funcion}){
    return <div className={styles.nav}>
        <div className={styles.header}>
            <h1>OpenWeather</h1>
        </div>
        <SearchBar search={funcion}/>
    </div>
}