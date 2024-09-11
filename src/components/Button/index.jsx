import { useState } from "react";

export function Button({text}){


    const [count, setCount] = useState(0)

    function handleClick(){

        setCount((prevState) => prevState +1);

    }
    
 return(
    <button onClick={handleClick}>{text} {count}</button>
    
 );


}
