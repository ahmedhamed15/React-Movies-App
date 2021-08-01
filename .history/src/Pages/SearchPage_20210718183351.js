import React from 'react'
import Search from '../Components/Search/Search'
import ShowsList from '../Components/Shows/ShowsList'

const SearchPage = () => {
    return (
        <div>
            <Search size="small" />
            <ShowsList />
        </div>
    )
}
export default SearchPage;