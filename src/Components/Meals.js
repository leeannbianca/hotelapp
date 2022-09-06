import DC from '../images/DC.jpg'
import lunch from '../images/lunch.jpg'
import dinner from '../images/dinner.jpg'

function Meals(){
    return(
        <div>

            <div className='mealHead' id='meals'><h1>Meals</h1></div>

           <div className='food'>
           <div className='breakfast'><img src={DC} className='imgfood'/><p className='food1'>Breakfast</p></div>
            <div className='lunch'><img src={lunch} className='imgfood'/><p className='food2'>Lunch</p></div>
            <div className='dinner'><img src={dinner} className='imgfood'/><p className='food3'>Dinner</p></div>
           </div>
            
        </div>
    )
}

export default Meals;