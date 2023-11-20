import Card from "./Card";
import styles from "./styles.module.css"

export default function ContainCard({ cities, onClose }) {

  return <div className={styles.containCard}>
    {cities ? cities.map((city) => (
  <Card id={city.id} key={city.id} name={city.name} description={city.weather[0].description} humidity={city.main.humidity}  feels_like={city.main.feels_like} clouds={city.clouds.all} onClose={onClose} img={city.weather[0].icon}/>
)
): alert("No hay ciudades para mostrar")}
  </div>
}