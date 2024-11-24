type TuristicsPointsProps = {
    link:string;
    img:string;
    subtitle:string;
};
import { Link } from "react-router-dom"
function TuristicsPoints({  link, img, subtitle }: TuristicsPointsProps) {
    const url = `http://localhost:5173/@fs/C:/xampp/htdocs/Portifolio_karina/TurismoNZ/src/assets/${img}`; 
  
    return ( 
               
        
            <Link to={link}>
                <img src={url} alt={subtitle}/>
                <p>{subtitle}</p>
            </Link>

    )
}

export default TuristicsPoints;
