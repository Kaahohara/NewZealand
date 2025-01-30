type TuristicsPointsProps = {
    link:string;
    img:string;
    subtitle:string;
};
import { Link } from "react-router-dom"
function TuristicsPoints({  link, img, subtitle }: TuristicsPointsProps) {
    const url = `assets/${img}`; 


  
    return ( 
               
            <Link to={link} className="w-full justify-center">
                <img src={url} alt={subtitle} className="rounded-lg"/>
                <p className="text-2xl text-white">{subtitle}</p>
            </Link>

    )
}

export default TuristicsPoints;
