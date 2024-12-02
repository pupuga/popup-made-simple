import React from "react";
import Window from "./Window";

const App = () => {
    return (
        <>
            { SIMPLE_POP_UP_DATA.map(el => {
                return <Window key={el.id} el={el} />
            })}
        </>
    );
};

export default App;