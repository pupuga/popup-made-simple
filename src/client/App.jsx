import React from "react";
import Popup from "./Popup";

const App = () => {

    return (
        <>
            { SIMPLE_POP_UP_DATA.map(el => {
                return <Popup key={el.id} el={el} />
            })}
        </>
    );
};

export default App;