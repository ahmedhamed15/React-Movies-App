import React, {useContext} from 'react'
import ShowItem from './ShowItem';
import { ShowsContext } from '../../Context/ShowsContext';

const ShowsList = () => {
    const { shows, isLoading } = useContext(ShowsContext);

    return (
        <section className="shows-list">
            <div className="container">
                { isLoading && (
                    <h1 className="text-center show-list__heading"> Loading... </h1>
                ) }
                { (shows.length === 0 && !isLoading) ? (
                    <h1 className="text-center show-list__heading"> Not Found! </h1>
                ) : (
                    <>
                        <h1 className="text-center show-list__heading"> All Shows Lists </h1>
                        <div className="row">
                            {shows.map( (show, index) => (
                                <div className="col-md-3" key={index}>
                                    <ShowItem show={show.show} />
                                </div>
                            ) )}
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}

export default ShowsList
