import AddButon from "./Bouton";
import { Form } from "./Form";
import { useState } from "react";
import axios from "axios";



export default function Module(props) {
     let [result, setResult] = useState([]);
     const[nom,setNom] = useState('')
     const[username,setUsername] = useState('')
     const[email,setEmail] = useState('')
     const[id,setId] = useState('')
     const[address,setAddress] = useState('')
     const[town,setTown] = useState('')






    const {style, setStyle} = props;
    const postData = (e) => {
     e.preventDefault();
     axios.post('https://jsonplaceholder.typicode.com/users', {
          name : "",
          username : "",
          email : "",
          address : "",
          city : ""
     }).then(res => console.log(nom, res)).catch(error => console.log(error))
    }
    return(
        <>
        <div >
            <div className={style}>
                <form>
                <div className="form">
                    <br/>
                    <div className="headerform">
                <span onclick=".style.display='none'" className="close" title="Close Modal"
                 onClick={e => setStyle('module')}>Quitter</span> 
                    <div/> 
                <Form type="text" label="Nom" placeholder="Nom.." className="input"   onChange={(e => setNom(e.target.value))} />
                <Form type="text" label="Username" placeholder="Username.." className="input"  onChange={(e => setUsername(e.target.value))} />
                <Form type="text" label="Email" placeholder="Email.." className="input" onChange={(e => setEmail(e.target.value))} />
                <Form type="text" label="ID" placeholder="ID.." className="input"  onChange={(e => setId(e.target.value))} />
                <Form type="text" label="Adresse" placeholder="Adresse.." className="input"  onChange={(e => setAddress(e.target.value))} />
                <Form type="text" label="Town" placeholder="Town.." className="input"  onChange={(e => setTown)} />
                <br/>
                <button classname="bouton"
                onClick={postData}
                >Envoyer</button>
                </div>
                </div>
                </form>
                
            </div>
        </div>
        </>
        
    )
}