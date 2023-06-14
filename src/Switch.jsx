import { useState } from "react";
import React from "react";

function Switch(){
    const [showComponent, setShowComponent]=useState(false);

    const handleClick = ()=>{
        setShowComponent(!showComponent);
    }

    return(
        <div>
            <button onClick={handleClick}>Show</button>{showComponent && <Another/>}
        </div>
    );
}

export default Switch