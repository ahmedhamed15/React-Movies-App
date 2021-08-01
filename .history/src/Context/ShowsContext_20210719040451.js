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

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE" :
            return "Amera!"
    }
}


export {ShowsContext, ShowState};