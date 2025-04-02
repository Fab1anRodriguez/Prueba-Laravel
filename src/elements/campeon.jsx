//aqui crearmos el componenete de los campeones que vamos a mostrar en la pagina principal
import React from 'react';

const Campeon = ({ nombre, imagen, descripcion }) => {
    return (
        <div className="champion-card">
            <div className="champion-image-container">
                <img src={imagen} alt={nombre} className="champion-image" />
            </div>
            <div className="champion-info">
                <h3 className="champion-name">{nombre}</h3>
                <p className="champion-description">{descripcion}</p>
            </div>
        </div>
    );
};

export default Campeon;