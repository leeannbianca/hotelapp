import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import banner from '../images/banner.png.webp';
import bath from '../images/bath.jpg'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Amenities from './Amenities';
import Rooms from './Rooms';
import Gallery from './Gallery';
import Meals from './Meals';
import Footer from './footer';





function Home(){

    return(
<>
        <Card.Body>
        <Card.Text>
            <Navbar expand="lg" variant="light" bg="#755645">
                <Navbar.Brand href="#">HotelMia</Navbar.Brand>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='#rooms'>Rooms</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='#gallery'>Gallery</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='#meals'>Meals</Nav.Link>
                    </Nav.Item>
                   
                 
                </Nav>
            </Navbar>
        </Card.Text>
    </Card.Body>
    <div className='imagebox' id='home'>
    <div className="image">
    <Card.Img variant="bottom" src={banner}/>
    </div>

   <div className='slogan'>
   <h1>Feels Like Home<br></br> Accomodation</h1>
    <h4>Defining a new<br></br> dimension of comfort</h4>
   </div>
    </div><br></br><br></br>

    <div className='table'>
        <Row>
            <Col><label>Arival Date</label><br></br><input className='inputdate' type="date"></input></Col>
            <Col><label>Departure Date</label><br></br><input className='inputdate' type="date"></input></Col>
            <Col><label>Guests</label><br></br><Form.Select aria-label="Default select example">
      <option>#Select</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select></Col>
            <Col sm={3}><label>Click!</label><br></br> <Button className='btnAvailability' variant="light" style={{ backgroundColor:'#755645', color:'white' }} >Check Availability</Button></Col>
            </Row>    
    </div>

    <div className='secondpart'>
       <div className='paragraph'>
       <p>Enjoy four - star elegance in the heart
        heart of Galeshewe. <br></br>Situated on the corner
        of Tyala and Hulana. HotelMia will<br></br> ensure that you
        have a comfortable stay with everything<br></br> you need </p>
       </div>

       <div className="reception">
    <Card.Img variant="bottom" src={bath}/>
    </div>

    </div>

    <Amenities/>
    <Rooms/>
    <Gallery/>
    <Meals/>
    <Footer/>
</>
    
    )
}

export default Home;