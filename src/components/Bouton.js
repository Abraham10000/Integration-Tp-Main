import { useState } from "react";

export default function AddButon(props){
    const {setStyle,label,classname} = props;
    return(
        <div>
            <button classname={classname} onClick={e => {setStyle('show')}}>{label}</button>
        </div>
    )
}