import React from 'react'
import { Link } from 'react-router-dom';
import noImg from '../../assets/images/no-img.png'

const ShowItem = ( { show } ) => {
    console.log(show);
    return (
        <section className="show-item">
            <img src={show.image && show.image.medium ? show.image.medium : noImg} alt={show.name ? show.name : " Show Name"} />
            <div className="show-item__overlay">
                <div className="rating-item">
                    <p> ⭐ </p>
                    <p> {show.rating && show.rating.average ? show.rating.average : "No Rating"} </p>
                </div>
                 <Link to={`/show/${show.id}`}> {show.name ? show.name : " Show Name"} </Link>
            </div>
        </section>
    )
}

export default ShowItem
