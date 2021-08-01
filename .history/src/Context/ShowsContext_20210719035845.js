import React, {useState} from 'react';

const ShowsContext = React.createContext({
    title: "",
    changeTitle: () => {}
})

const showState = (props) => {
    const initialState = "Hi!";
    const [title, setTitle] = useState(initialState);
    const changeTitle = () => {
        setTitle("Ahmed !");
    }
    <ShowsContext.Provider value={{ title, changeTitle }}>
        {props.children}
    </ShowsContext.Provider>
}


export {ShowsContext, showState};