import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"

export const AnimalCard = ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">
        <Link to={`/animals/detail/${animal.id}`}>
            { animal.name }
        </Link>
        </h3>
        <div className="animal__breed">{ animal.breed }</div>
    </section>
)


// import React from "react"
// import "./Animal.css"

// export const AnimalCard = ({ animal, customer, location }) => (
//     <section className="animal">
//         <h3 className="animal__name">{animal.name}</h3>
//         <address className="location__address">Location: {location.name}</address>
//         <div className="customer_name">Customer: {customer.name}</div>
//     </section>
// )
