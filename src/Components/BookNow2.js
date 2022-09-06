import { collection, doc, setDoc } from "firebase/firestore"; 
import {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './Login.css';
import {db} from '../Firebase'
import {addDoc} from 'firebase/firestore'



function BookNow2(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cell, setCell] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guests, setGuests] = useState("");


    const book = (()=>{
        const collectionRef = collection(db, "bookings");
        const bookings = {
            name:name, email:email, cell:cell, checkIn:checkIn, checkOut:checkOut, guests:guests 
        }
        addDoc(collectionRef, bookings)
        .then(()=>{
            alert("Booking is successful")
        })
        .catch((error)=>{
            console.log(error)
        })
    })

    

    return(
        <div>

            <div className="guestRoom"><h1>Junior Suite</h1></div><br></br><br></br>

            <div className="bookingInputs">

            <div className="bookingBox">
            <Row>
               <Col>
               <label>Name</label><br></br>
               <input type="text" placeholder="Name" onChange={(event)=>setName(event.target.value)}/><br></br><br></br>
               <label>Email</label><br></br>
               <input type="email" placeholder="Email" onChange={(event)=>setEmail(event.target.value)}/><br></br><br></br>
               <label>Cell</label><br></br>
               <input type="text" placeholder="Cell" onChange={(event)=>setCell(event.target.value)}/><br></br><br></br></Col>

                <Col>
                    <label>Check In</label><br></br>
                    <input type="date" onChange={(event)=>setCheckIn(event.target.value)}/><br></br><br></br>
                    <label>Check Out</label><br></br>
                    <input type="date" onChange={(event)=>setCheckOut(event.target.value)}/><br></br><br></br>  
                    <label>#Guests</label><Form.Select aria-label="Default select example" style={{"width":"500px", "height":"50px", "border-radius":"30px"}}
                    onChange={(event)=>setGuests(event.target.value)}>
                            <option>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                   </Form.Select></Col>
            </Row>
            </div>

               
                
            </div>

            <div className="price" style={{'color':'green'}}><h1>R640</h1></div>
            <button className="btnbook" onClick={book}>Book</button><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

        </div>
    )
}

export default BookNow2;