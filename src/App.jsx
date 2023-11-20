import ContainCard from "./components/ContainCard.jsx";
import data from "./data.js";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";
import "./App.css"

function App() {
const [cities, setCities] = useState(data)

function search(ciudad) {
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=e485382dd61bc4ac8fa0e4b427d20e85`)

.then(r => r.json())
.then((recurso) => {
  if(recurso.main !== undefined){
  console.log(ciudad)
  setCities([...cities, recurso])
  }else {
    alert("Ciudad no encontrada")
  }

})};

  // FUNCION QUITAR TARJETA
const onClose = (id) => {
const citiesFilter = cities.filter(city =>
  city.id !== id
 )
 setCities(citiesFilter)
}

  return (
    <div>
      <Nav funcion={search} />
      <ContainCard cities={cities} onClose={onClose}/>
      <Footer />
    </div>
  );
}

export default App;
