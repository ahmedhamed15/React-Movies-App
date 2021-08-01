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
    const changeTitle = () => dispatch({type: "CHANGE"});
    const searchShows = async (searchTerm) => {
        dispatch({ type: "SET_LOADING" });
        const { data } = await axios.get(
            `https://api.tvmaze.com/search/shows?q=${searchTerm}`
        );
        dispatch({ type: "SEARCH_SHOWS", payload: data });
    }
    return (
        <ShowsContext.Provider value={{ title: state, changeTitle }}>
            {props.children}
        </ShowsContext.Provider>
    )
}

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE" :
            return "Amera!";
        default:
            return state;
    }
}


export {ShowsContext, ShowState};