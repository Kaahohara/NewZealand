type Filter = {
    link1:string;
    link2:string;
    link3:string;
    color:string;
    img1:string;
    img2:string;
    img3:string;
    subtitle1:string;
    subtitle2:string;
    subtitle3:string;
};
import TuristicsPoints from '../Components/TuristicsPoints'
function Filter({  link1, color, link2, link3,img1,img2,img3,subtitle1,subtitle2,subtitle3}: Filter) {

    return ( 
        <div className="p-10 " style={{backgroundColor: color }}>
        <div className="flex gap-4">
          <TuristicsPoints  link={link1} img={img1} subtitle={subtitle1}/>
          <TuristicsPoints  link={link2} img={img2} subtitle={subtitle2}/>
          <TuristicsPoints  link={link3} img={img3} subtitle={subtitle3}/>
        </div>
        </div>
    )
}

export default Filter;
