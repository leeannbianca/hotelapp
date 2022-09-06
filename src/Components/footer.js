import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'
import pinterest from '../images/pinterest.png'
import marker from '../images/marker.png'
import phone from '../images/phone.png'
import email from '../images/email.png'
import Navbar from 'react-bootstrap/Navbar';


function Footer(){
    return(
        <div className='mainfooter'>

                <div className="footer">

                <div className='name'><p>HotelMania</p></div>
                    
                    <div className='footIcons'>
                        <div><img src={twitter} className='footicon'/></div>
                        <div><img src={facebook} className='footicon'/></div>
                        <div><img src={pinterest} className='footicon'/></div>
                    </div>

                    <div className='listnav'>
                    <p>Navigation<br></br>
                    <a href='#home'>Home</a><br></br>
                    <a href='#rooms'>Rooms</a><br></br>
                    <a href='#gallery'>Gallery</a><br></br>
                    <a href='#meals'>Meals</a>
                    </p>
                 
                    
                    </div>

                    <div className='info'>
                        <p className='address'>Address</p>
                        <div><img src={marker} className='footicon'/><p className='street'>13 cnr Tyala/Hulana</p></div>
                        <div><img src={phone} className='footicon'/><p className='num'>053 991 3472</p></div>
                        <div><img src={email} className='footicon'/><p className='mail'>HotelMia@email.com</p></div>

                    </div>

                    
                </div>


        </div>
    )
}

export default Footer;