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
            `/search/shows?q=${searchTerm}`
        );
        console.log(data)
        dispatch({ type: "SEARCH_SHOWS", payload: data });
    }
    const getActiveShow = async (id) => {
        dispatch({ type: "SET_LOADING" });
        const config = {crossdomain: true}
        const { data } = await axios.get(
            `/search/shows/${id}`, config
        );
        console.log(data);
        dispatch({ type: "SET_ACTIVE_SHOW", payload: data })
    }
    return (
        <ShowsContext.Provider value={{ shows: state.shows, isLoading: state.isLoading, searchShows, getActiveShow }}>
            {props.children}
        </ShowsContext.Provider>
    )
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING" :
            return {...state, isLoading: true};
        case "SEARCH_SHOWS" :
            return {...state, shows: action.payload, isLoading: false};
        case "SET_ACTIVE_SHOW" :
            return {...state, activeShow: action.payload ? action.payload : {}, isLoading: false};
        default:
            return state;
    }
}


export {ShowsContext, ShowState};