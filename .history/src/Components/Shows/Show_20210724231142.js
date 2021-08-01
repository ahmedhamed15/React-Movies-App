import React, {useState, useEffect, useContext} from 'react';
import {Link, withRouter} from 'react-router-dom'
import { ShowsContext } from '../../Context/ShowsContext';
import noImg from '../../assets/images/no-img.png';

const Show = (props) => {

    const { getActiveShow, activeShow, isLoading } = useContext(ShowsContext);
    const [showImg, setShowImg] = useState(noImg);

    useEffect( () => {
        if (props.match.params.id) {
            getActiveShow(props.match.params.id);
            console.log(activeShow);
        }
    }, [] );

    useEffect( () => {
        if (activeShow.image) {
            if (activeShow.image.original) {
                setShowImg(activeShow.image.original)
            } else if (activeShow.image.medium) {
                setShowImg(activeShow.image.medium)
            }
        } else {
            setShowImg(noImg)
        }
    }, [activeShow] );

    const bgImg = {
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${showImg}) no-repeat center center fixed`,
    }

    return (
        <section className="show-detailed" style={bgImg}>
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
                                <img src={showImg} alt={activeShow.name ? activeShow.name : "..."} />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="show-detialed-info">
                                <h1> {activeShow.name ? activeShow.name : "..."} </h1>
                                {activeShow.genres && (
                                    <ul className="show-category">
                                        {activeShow.genres.map( el => <li key={el}> {el} </li> )}
                                    </ul>
                                )}
                                <p className="show-status"> <strong> Status: </strong>  <span> Running </span> </p>
                                { activeShow.rating && activeShow.rating.average && (
                                    <p className="show-status"> <strong> Rating: </strong>  <span> {activeShow.rating.average} </span> </p>
                                )}
                                <p className="official-site"> <strong> <a href={activeShow.officialSite} target="_blank" rel="noreferrer"> Official Site </a> </strong> </p>
                                <p className="show-story"> <strong> Story: </strong>  
                                    {activeShow.summary && (
                                        <span dangerouslySetInnerHTML={ {
                                            __html: activeShow.summary
                                        } }>  
                                        </span>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                ) }
            </div>
        </section>
    )
}

export default withRouter(Show);