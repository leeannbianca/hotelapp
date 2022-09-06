import Image from 'react-bootstrap/Image'
import tableware from '../images/tableware.png'
import meeting from '../images/meeting.png'
import roomservice from '../images/roomservice.png'
import housekeeping from '../images/housekeeping.png'
import wifi from '../images/wifi.png'
import parking from '../images/parking.png'



function Amenities(){
    return(
        <div className='AmenIties'>

            <div className='AmenHead'><h1>Amenities</h1></div>
           
           <div className='amenities'>

           <div className='amen'>
                <img src={tableware} style={{'height' : '30px', 'width' : '30px'}} className='img'/><p className='one1'>Restaurant</p>
            </div>

            <div className='amen'>
                <img src={meeting} style={{'height' : '30px', 'width' : '30px'}} className='img'/><p className='one2'>Meeting Space</p>
            </div>

            <div  className='amen'>
                <img src={roomservice} style={{'height' : '30px', 'width' : '30px'}} className='img'/><p className='one3'>Room Service</p>
            </div>

            <div  className='amen'>
                <img src={housekeeping} style={{'height' : '30px', 'width' : '30px'}} className='img'/><p className='one4'>Daily Housekeeping</p>
            </div>

            <div  className='amen'>
                <img src={wifi} style={{'height' : '30px', 'width' : '30px'}} className='img'/><p className='one5'>Free Wifi</p>
            </div>

            <div  className='amen'>
                <img src={parking} style={{'height' : '30px', 'width' : '30px'}} className='img'/><p className='one6'>Free Parking</p>
            </div>
           </div>
            
       
        </div>
    )
}

export default Amenities;