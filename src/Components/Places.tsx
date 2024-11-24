import aucklandcity from '../assets/aucklandcity.jpg'
import wellington2 from '../assets/wellington2.jpg'
import queenstown from '../assets/queenstown.jpg'
import { Link } from "react-router-dom"

function Places(){
    return (
        <div className="FundoGray">
        <div className="text">Choose a city</div>
        <div className="ContainerPlaces">
            <Link to="/auckland">
                <img src={aucklandcity} alt='Auckland'/>
                <p>Auckland</p>
            </Link>
            <Link to="/wellington">
                <img src={wellington2} alt='wellington'/>
                <p>Wellington</p>
            </Link>
            <Link to="/queenstown">
                <img src={queenstown} alt='queenstown'/>
                <p>Queenstown</p>
            </Link>
         </div>

 </div>
    );
}
export default Places;