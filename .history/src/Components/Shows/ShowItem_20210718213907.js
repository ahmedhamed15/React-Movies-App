import React from 'react'
import { Link } from 'react-router-dom'

const ShowItem = () => {
    return (
        <section className="show-item">
            <img src="" alt="show item" />
            <div className="show-item__overlay">
                <div className="rating-item">
                    <p> ⭐ </p>
                    <p> 7.5 </p>
                    <Link to="show/1"> Show title </Link>
                </div>
            </div>
        </section>
    )
}

export default ShowItem
