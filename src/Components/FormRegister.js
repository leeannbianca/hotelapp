import './Login.css';
import {useState} from 'react';
import {auth} from '../Firebase'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';

function FormRegister(){
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [cell, setCell] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


 

    const register = ()=>{
        createUserWithEmailAndPassword(auth,email, password ).then(()=>{
            alert("Registered successfully!")

        }).catch((Error) =>{
            console.log(Error.message)
        })

    }
    


    return(
        <div className="formRegister">

           <div> 
            <div><h1>Registration</h1></div>

< div className='form'>
<input type="text" placeholder="Name" onChange={(event)=>setName(event.target.value)}/><br></br><br></br>
 <input type="text" placeholder="Last Name" onChange={(event)=>setSurname(event.target.value)}/><br></br><br></br>
 <input type="text" placeholder="Cell" onChange={(event)=>setCell(event.target.value)}/><br></br><br></br>
 <input type="email" placeholder="Email" onChange={(event)=>setEmail(event.target.value)}/><br></br><br></br>
 <input type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)}/><br></br><br></br>
 <input type="password" placeholder="Confirm Password"/><br></br><br></br>
 <button style={{'border-radius':'30px'}} onClick={register}>Register</button><br></br>

</div>
</div>
        </div>
    )
}

export default FormRegister;