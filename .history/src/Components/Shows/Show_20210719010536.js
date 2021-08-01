import React from 'react'

const Show = () => {
    return (
        <section className="show-detailed">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="show-img">
                            <img src="" alt="show img" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="show-detialed-info">
                            <h1> Show full title </h1>
                            <ul className="show-category">
                                <li> Comedy </li>
                                <li> Drama </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Show