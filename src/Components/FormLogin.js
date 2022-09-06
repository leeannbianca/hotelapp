import { Link } from 'react-bootstrap-icons';
import './Login.css';
import FormRegister from './FormRegister';
import {auth }from '../Firebase'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import {useState} from 'react';
import ResetPassword from './ResetPassword';
import { useNavigate } from 'react-router-dom';

function FormLogin(){

    const navigate = useNavigate();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Login = ()=>{

        signInWithEmailAndPassword(auth, email, password)
        navigate('/home')
        .then(auth=>console.log(auth))
        .catch(error=>console.error(error))

    }


    return(
        <div className="formlogin">

            <div className='login'>
            <div><h1>Login</h1></div>

            <div>
            <input type="text" placeholder="Email" onChange={(event)=>setEmail(event.target.value)}/><br></br><br></br>
            <input type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)}/><br></br><br></br>
         
            <button style={{'border-radius':'30px'}} aria-pressed="true"   onClick={Login}>Login</button><br></br><br></br>

            <a href='http://localhost:3000/resetpassword'><p>Forgot Password?</p></a><br></br><br></br>

            <p>Don't have an account?<br></br>
               <a href='http://localhost:3000/register'>Register Here</a></p>

</div>
            </div>

        </div>
    )
}
export default FormLogin;