import { useState } from "react";

export default function Player({username,symbol,isActive,onchangename}){
    const [isediting, setisediting]=useState(false);
    const [finalname, setname]=useState(username);
    function handleclick(){
        setisediting(()=>!isediting);
        if(isediting){
        onchangename(symbol,finalname);
    }
    };
    let edit=<span className="player-name">{finalname}</span>;
    let buttonname="edit";

    function handlechange(event){
        setname(event.target.value)
    }


    if(isediting){
        edit= <input type="text" required value={finalname} onChange={handlechange}></input>;
        buttonname="save";
    };
    return(
        <li className={isActive ? 'active':undefined}>
          <span className="player">
           {edit}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleclick}>{buttonname}</button>
        </li>
        
    );
}