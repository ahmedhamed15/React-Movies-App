import React from 'react'
import ShowItem from './ShowItem'

const ShowsList = () => {
    return (
        <section className="shows-list">
            <container>
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
            </container>
        </section>
    )
}

export default ShowsList
