import PropTypes from 'prop-types';
import { Card as BootstrapCard, Button } from 'react-bootstrap';

const Card = ({ img, name, price, ingredients }) => {
  return (
    <BootstrapCard style={{ width: '18rem', margin: '1rem' }}>
      {/* Imagen */}
      <BootstrapCard.Img variant="top" src={img} alt={`Imagen de ${name}`} />

      {/* Cuerpo */}
      <BootstrapCard.Body>
        {/* Título */}
        <BootstrapCard.Title className="text-center">{name}</BootstrapCard.Title>

        {/* Ingredientes */}
        <BootstrapCard.Text className="text-center">
          <strong>Ingredientes:</strong>
          <br />
          <span>
            🍕 {Array.isArray(ingredients) ? ingredients.join(', ') : 'No disponibles'}
          </span>
        </BootstrapCard.Text>

        {/* Precio */}
        <BootstrapCard.Text className="text-center">
          <strong>Precio:</strong> ${price.toLocaleString()}
        </BootstrapCard.Text>

        {/* Botones */}
        <div className="d-flex justify-content-around mt-3">
          <Button variant="outline-dark">
            Ver Más <span role="img" alt="Botón ver más" aria-label="ver más">👀</span>
          </Button>
          <Button variant="dark">
            Añadir <span role="img" alt="Botón Añadir" aria-label="carrito">🛒</span>
          </Button>
        </div>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

// Validación de las props
Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
};

export default Card;
