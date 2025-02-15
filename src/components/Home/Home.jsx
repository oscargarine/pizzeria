import Header from '../Header/Header'
import CardPizza from '../CardPizza/CardPizza'
import { pizzas } from '../../pizzas.js'

const Home = () => {
  return (
    <>
      <Header />

    <div className="contenedor-cards">
      <div className="cards">

        {pizzas.map((pizza) => (
          <CardPizza 
            key={pizza.id}
            img={pizza.img}
            ingredients={pizza.ingredients} 
            name={pizza.name}
            price={pizza.price}
          />
        ))}

      </div>
    </div>



      
    </>
  )
}

export default Home