type TuristicsPointsProps = {
    link:string;
    img:string;
    subtitle:string;
};
import { Link } from "react-router-dom"
function TuristicsPoints({  link, img, subtitle }: TuristicsPointsProps) {
    const url = `NewZealand/src/assets/${img}`; 
  
    return ( 
               
        
            <Link to={link}>
                <img src={url} alt={subtitle}/>
                <p>{subtitle}</p>
            </Link>

    )
}

export default TuristicsPoints;
