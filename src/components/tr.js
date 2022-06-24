import { Form } from "./Form";
import "./List/style.css";
import { useState } from "react";
import "./List/module.css"
import Module from "./Module";



export function Tbody(props) {
    const {name,username,email,address,company,website} = props;
  

    return (
        <>
        
         <tr onClick={()=>{
            
         }}>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{address}</td>
                <td>{company}</td>
                <td>{website}</td>
        </tr>

        </>
       
    )
}