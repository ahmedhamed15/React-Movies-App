import React, {useState} from 'react'

const Search = ({ size }) => {
    const submitSearch = (e) => {
        e.preventDefault();
        console.log(e.target.search.value)
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

export default Search
