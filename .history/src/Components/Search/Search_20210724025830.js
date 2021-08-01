import React, {useState, useContext, useEffect} from 'react'
import {ShowsContext} from '../../Context/ShowsContext';
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';

const Search = ( props ) => {
    const [searchTerm, setSearchTerm] = useState("");
    const {isLoading, searchShows} = useContext(ShowsContext);

    useEffect( () => {
        const queriesURL = queryString.parse(props.location.search);
        console.log(queriesURL.key);
        if (props.location.search && props.location.search.includes("key")) {
            let key = queriesURL.key;
            if (key) {
                setSearchTerm(key);
                if () {
                    searchShows(key);
                }
            }
        }
    }, [] );

    const submitSearch = (e) => {
        // setSearchTerm(e.target.search.value);
        e.preventDefault();
        searchShows(searchTerm);
        props.history.replace(`/search?key=${searchTerm}`);
    }
    return (
        <div className={ props.size === "large" ? "search-content text-center" : "search-content text-center sm-search-card"}>
            {props.size === "large" && 
                <div>
                    <h1> Search for any series ! </h1>
                    <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form </p>
                </div>
            }
            <form onSubmit={submitSearch}>
                <input type="search" name="search" className="search-field" placeholder="Search for a series..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button type="submit" className="search-btn" disabled={isLoading}> { isLoading ? "Loading..." : "Search" } </button>
            </form>
        </div>
    )
}

export default withRouter(Search)
