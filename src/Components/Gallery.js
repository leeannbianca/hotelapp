import hotel from '../images/hotel.jpg'
import download from '../images/download.png'
import images4 from '../images/images4.png'
import sh from '../images/sh.png'
import br from '../images/br.png'
import sheratonsantoshotel from '../images/sheratonsantoshotel.jpg'
import Restaurant from '../images/Restaurant.webp'

function Gallery(){

    return(
        <div className='' id='gallery'>

            <div className='galleryHead'><h1>Gallery</h1></div>

           <div className='gallery'>
           <div><img src={hotel} className='img'/></div>
            <div><img src={download} className='img'/></div>
            <div><img src={images4} className='img'/></div>
            <div><img src={sh} className='img'/></div>
           </div>

           <div className='gallery2'>
            <div><img src={br} className='img'/></div>
            <div><img src={sheratonsantoshotel} className='img'/></div>
            <div><img src={Restaurant} className='img'/></div>
           </div>
            
        </div>
    )
}

export default Gallery;