import React from "react"
import "./Location.css"

export const LocationCard = ({ location }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="Location_type">{location.address}</div>
    </section>
)
