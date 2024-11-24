import { Link } from "react-router-dom"

function Menu(){
    return(
         
      <div className="menu">
                  
            <Link to="/auckland">
                <p>Auckland</p>
            </Link> 
            <Link to="/wellington">
                <p>Wellington</p>
            </Link> 
            <Link to="/queenstown">
                <p>Queenstown</p>
            </Link> 
        </div>
        
);
}
export default Menu;
