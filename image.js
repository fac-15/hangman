import React from 'react';
// import "./style.css";

export const Image = ({ url }) => (
    <figure className="image--container">
        <img className="image--img" src={url} />
    </figure>
);
