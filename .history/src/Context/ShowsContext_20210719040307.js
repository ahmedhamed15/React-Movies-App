import React, {useState, useReducer} from 'react';

const ShowsContext = React.createContext({
    title: "",
    changeTitle: () => {}
})

const ShowState = (props) => {
    const initialState = "Hi!";
    const [title, setTitle] = useState(initialState);
    const [state, dispatch] = useReducer(() => {}, initialState);
    const changeTitle = () => {
        setTitle("Ahmed !");
    }
    return (
        <ShowsContext.Provider value={{ title, changeTitle }}>
            {props.children}
        </ShowsContext.Provider>
    )
}


export {ShowsContext, ShowState};