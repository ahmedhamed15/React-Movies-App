import React, {useReducer} from 'react';

const ShowsContext = React.createContext({
    title: "",
    changeTitle: () => {}
})

const ShowState = (props) => {
    const initialState = "Hi!";
    const [state, dispatch] = useReducer(reducer, initialState);
    const changeTitle = () => dispatch({type: "CHANGE"});
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
            return state
    }
}


export {ShowsContext, ShowState};