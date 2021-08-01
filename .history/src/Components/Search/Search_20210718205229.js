import React from 'react'

const Search = () => {
    return (
        <div className="search-content">
            <h1> Search for any series ! </h1>
            <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form </p>
            <form>
                <input type="search" className="search-field" />
                <button type="submit"> Search </button>
            </form>
        </div>
    )
}

export default Search
