import React from 'react'
import ShowItem from './ShowItem'

const ShowsList = () => {
    return (
        <section className="shows-list">
            <div className="container">
                <h1 className="text-center"> All Shows Lists </h1>
                <div className="row">
                    <div className="col-md-3">
                        <ShowItem />
                    </div>
                    <div className="col-md-3">
                        <ShowItem />
                    </div>
                    <div className="col-md-3">
                        <ShowItem />
                    </div>
                    <div className="col-md-3">
                        <ShowItem />
                    </div>
                    <div className="col-md-3">
                        <ShowItem />
                    </div>
                    <div className="col-md-3">
                        <ShowItem />
                    </div>
                    <div className="col-md-3">
                        <ShowItem />
                    </div>
                    <div className="col-md-3">
                        <ShowItem />
                    </div>
                    <div className="col-md-3">
                        <ShowItem />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowsList
