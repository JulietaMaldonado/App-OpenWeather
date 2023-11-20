import styles from "./styles.module.css"

export default function Card({id, name, description, feels_like, humidity, clouds, img, onClose}) {
return <div className={styles.card}>
    <button onClick={() => onClose(id)} className={styles.buttonX}>X</button>
    <div className="infoCard">
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} className={styles.imgClima}/>
    <h2>Nombre: {name}</h2>
    <p>Descripcion: {description}</p>
    <p>Sensasion: {feels_like}</p>
    <p>Humedad: {humidity}</p>
    <p>Nubes: {clouds}</p>
    </div>
  </div>;
}
