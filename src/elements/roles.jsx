import React from 'react';

const Roles = (props) => {
    return (
        <div className="champion-card">
            <div className="champion-image-container">
                <img src={props.imagen} alt={props.nombre} className="champion-image" />
            </div>
            <div className="champion-info">
                <span className="role-emoji">{props.emoji}</span>
                <h3 className="champion-name">{props.nombre}</h3>
                <p className="champion-description">{props.descripcion}</p>
            </div>
        </div>
    );
};

export default Roles;