import React from 'react'
import { Link } from 'react-router-dom'

const ShowItem = () => {
    return (
        <section className="show-item">
            <img src="https://cima4u.ws:2053/wp-content/uploads/1-1273.jpg" alt="show item" />
            <div className="show-item__overlay">
                <div className="rating-item">
                    <p> ⭐ </p>
                    <p> 7.5 </p>
                </div>
                 <Link to="/show/1"> Show title </Link>
            </div>
        </section>
    )
}

export default ShowItem
