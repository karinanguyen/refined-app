import React from 'react'
import "./Card.css"

const Card = props => (
    <div className = "Card">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
)

export default Card 