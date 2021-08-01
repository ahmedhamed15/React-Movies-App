import React from 'react';

const ShowsContext = React.createContext({
    title: "",
    changeTitle: () => {}
})

const useShows = (props) => {
    <ShowsContext.Provider>
        {props.children}
    </ShowsContext.Provider>
}


export default ShowsContext;