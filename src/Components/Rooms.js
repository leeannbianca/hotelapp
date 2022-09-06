import Image from 'react-bootstrap/Image'
import GuestRoom from '../images/GuestRoom.webp'
import JSuite from '../images/JSuite.webp'
import Guest from '../images/Guest.webp'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function Rooms(){

  const navigate = useNavigate();

  const Booking = ()=>{

    navigate('/Book')
 
}

const Booking2 = ()=>{

  navigate('/Book2')
}

const Booking3 = ()=>{

  navigate('/Book3')
}

    return(
        <div className='rooms' id='rooms'>

            <div><h1>Rooms</h1></div>

         <div className='cards'>
         <div>
           <Card style={{ width: '20rem'}}>
      <Card.Img variant="top" src={GuestRoom} />
      <Card.Body>
        <Card.Title>Guest Room</Card.Title>
        <Card.Text>
        2 Single Beds<br></br>Wireless Internet<br></br>Desk<br></br>Bottled Water
        <br></br>
        Coffee/Tea Maker<br></br>81cm LCD TV
        </Card.Text>
        <Button variant="light" style={{ backgroundColor:'#755645', color:'white' }} onClick={Booking} >Book Now!</Button>
      </Card.Body>
    </Card>
           </div>

           <div>
           <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={JSuite} />
      <Card.Body>
        <Card.Title>Junior Suite</Card.Title>
        <Card.Text>
        1 King size bed<br></br>Wireless Internet<br></br>Desk<br></br>Chair
        <br></br>Coffee/Tea Maker<br></br>
        130cm LCD TV
        </Card.Text>
        <Button variant="light" style={{ backgroundColor:'#755645', color:'white' }} onClick={Booking2}>Book Now!</Button>
      </Card.Body>
    </Card>
           </div>

           <div>
            
           <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={Guest} />
      <Card.Body>
        <Card.Title>Presidential Suite</Card.Title>
        <Card.Text>
        1 King size bed<br></br>Living/Sitting Area<br></br>Separate Living Room<br></br>
        Wireless Internet<br></br>Coffee/Tea Maker<br></br>102 cm LCD TV
        </Card.Text>
        <Button variant="light" style={{ backgroundColor:'#755645', color:'white' }} onClick={Booking3}>Book Now!</Button>
      </Card.Body>
    </Card>
           </div>
         </div>

            
        </div>
    )
}

export default Rooms;