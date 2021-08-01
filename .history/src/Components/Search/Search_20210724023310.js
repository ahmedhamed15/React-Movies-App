import React, {useState, useContext} from 'react'
import {ShowsContext} from '../../Context/ShowsContext';
import {withRouter} from 'react-router-dom';

const Search = ({ size }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const {isLoading, searchShows} = useContext(ShowsContext);
    const submitSearch = (e) => {
        e.preventDefault();
        searchShows(e.target.search.value)
        // setSearchTerm(e.target.search.value);
        // console.log(searchTerm);
    }
    return (
        <div className={ size === "large" ? "search-content text-center" : "search-content text-center sm-search-card"}>
            { size === "large" && 
                <div>
                    <h1> Search for any series ! </h1>
                    <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form </p>
                </div>
            }
            <form onSubmit={submitSearch}>
                <input type="search" name="search" className="search-field" placeholder="Search for a series..." />
                <button type="submit" className="search-btn"> Search </button>
            </form>
        </div>
    )
}

export default withRouter(Search)
