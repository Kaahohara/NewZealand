import aucklandcity from '../assets/aucklandcity.jpg'
import wellington2 from '../assets/wellington2.jpg'
import queenstown from '../assets/queenstown.jpg'
import { Link } from "react-router-dom"

function Places(){
    return (
        <div className="bg-gray-200">
            <div className='flex justify-center items-center text-center'>
        <p className="text-white text-3xl p-5">Choose a city</p>
        </div>
        <div className="flex gap-4">
            <Link to="/NewZealand/auckland">
                <img src={aucklandcity} alt='Auckland' className='rounded-lg'/>
                <p className="text-white text-2xl p-2">Auckland</p>
            </Link>
            <Link to="/NewZealand/wellington">
                <img src={wellington2} alt='wellington' className='rounded-lg'/>
                <p className="text-white text-2xl p-2">Wellington</p>
            </Link>
            <Link to="/NewZealand/queenstown">
                <img src={queenstown} alt='queenstown' className='rounded-lg'/>
                <p className="text-white text-2xl p-2">Queenstown</p>
            </Link>
         </div>

 </div>
    );
}
export default Places;