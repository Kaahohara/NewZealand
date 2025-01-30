import { Link } from "react-router-dom"

function Menu(){
    return(
         
      <div className="bg-gray-300 flex justify-center gap-6 text-2xl p-5">
                  
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
