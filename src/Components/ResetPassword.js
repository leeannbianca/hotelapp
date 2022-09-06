import './Login.css';

import {auth} from '../Firebase'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import {useState} from 'react';

function ResetPassword(){

    const [email, setEmail] = useState("");

    const forgotPassword = (()=>{

        sendPasswordResetEmail(auth, email)
        .then(() => {
        alert("check your email")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });

    })



    

    return(

        <div className="resetpassword">
            <p>Please enter email address below.<br></br>
            We will send you information to recover your account</p>
            <div><h1>Reset Password</h1></div>
            <div>
            <input type="text"  onChange={(event) => setEmail(event.target.value)} placeholder="Email"/><br></br><br></br>
            <button style={{'border-radius':'30px'}}   onClick= {forgotPassword} >Reset Password</button>
            </div>
        </div>

    )

}

export default ResetPassword;