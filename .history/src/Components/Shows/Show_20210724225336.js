import React, {useState, useEffect, useContext} from 'react';
import {Link, withRouter} from 'react-router-dom'
import { ShowsContext } from '../../Context/ShowsContext';

const Show = (props) => {

    const { getActiveShow, activeShow, isLoading } = useContext(ShowsContext);

    useEffect( () => {
        if (props.match.params.id) {
            getActiveShow(props.match.params.id);
            console.log(activeShow);
        }
    }, [] );

    return (
        <section className="show-detailed">
            <div className="container">
                { isLoading && (
                    <h1 className="text-center show-list__heading"> Loading... </h1>
                ) }
                { !isLoading && activeShow.length < 0 && (
                    <h1 className="text-center show-list__heading"> Not Found </h1>
                ) }
                { !isLoading && activeShow && (
                    <div className="row">
                        <div className="col-md-4">
                            <div className="show-img">
                                <img src="https://images.amcnetworks.com/ifcfilms.com/wp-content/uploads/2020/03/sixmins.jpg" alt="show img" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="show-detialed-info">
                                <h1> {activeShow.name} </h1>
                                {activeShow.genres && (
                                    <ul className="show-category">
                                        {activeShow.genres.map( el => <li key={el}> {el} </li> )}
                                    </ul>
                                )}
                                <p className="show-status"> <strong> Status: </strong>  <span> Running </span> </p>
                                <p className="official-site"> <strong> <a href={activeShow.officialSite}> Official Site </a> </strong> </p>
                                <p className="show-story"> <strong> Story: </strong>  <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form </p> </p>
                            </div>
                        </div>
                    </div>
                ) }
            </div>
        </section>
    )
}

export default withRouter(Show);