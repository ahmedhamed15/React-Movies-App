import axios from 'axios';
import React, {useReducer} from 'react';

const ShowsContext = React.createContext({
    title: "",
    changeTitle: () => {}
});

const ShowState = (props) => {
    const initialState = {
        shows: [],
        activeShow: {},
        isLoading: false
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const searchShows = async (searchTerm) => {
        dispatch({ type: "SET_LOADING" });
        const { data } = await axios.get(
            `https://api.tvmaze.com/search/shows?q=${searchTerm}`
        );
        dispatch({ type: "SEARCH_SHOWS", payload: data });
    }
    return (
        <ShowsContext.Provider value={{ shows: state.shows, isLoading: state.isLoading ,searchShows }}>
            {props.children}
        </ShowsContext.Provider>
    )
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING" :
            return {...state, isLoading: true};
        case "SEARCH_SHOWS" :
                return {...state, shows: state.shows, isLoading: false};
        default:
            return state;
    }
}


export {ShowsContext, ShowState};