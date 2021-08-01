import React, {useContext} from 'react'
import ShowItem from './ShowItem';
import { ShowsContext } from '../../Context/ShowsContext';

const ShowsList = () => {
    const { shows, isLoading } = useContext(ShowsContext);

    return (
        <section className="shows-list">
            <div className="container">
                <h1 className="text-center show-list__heading"> All Shows Lists </h1>
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
