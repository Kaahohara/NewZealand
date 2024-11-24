import About from '../Components/About'
import Menu from '../Components/Menu'
import TuristicsPoints from '../Components/TuristicsPoints'
import Events from '../Components/Events'
import TitleLanding from '../Components/TitleLanding'

function AucklandRestaurant() {
 
  return (
     < >
     <Menu />
     <div className="filtro" style={{backgroundColor: "#eead2d" }}>
        <div className="categorias">
          <TuristicsPoints  link='/auckland' img="skytower.jpg" subtitle="Passeios"/>
          <TuristicsPoints  link='/aucklandrestaurants' img="TheBridgman.jpg" subtitle="Restaurants"/>
          <TuristicsPoints  link='/aucklandhotels' img="skycity.jpg" subtitle="Hotels"/>
        </div>
     </div>
     <TitleLanding title="Restaurants in Auckland"/>
     <Events subtitle="The Bridgman" text="Address: 234 Dominion Road, Cnr Valley Road, Mount Eden, Auckland 1024, Nova Zelândia. Phone:+64 22 649 4813" href="https://www.thebridgman.co.nz/bookings" img="TheBridgman.jpg"/>
     <Events subtitle="The Fox" text="PRICE RANGE $7 - $30 Address: 85-87 Customs Street West Viaduct Basin, Auckland Central, Auckland 1010 New Zealand Phone: +64 9-553 499" href="https://goodspiritshospitality.co.nz/the-fox/" img="TheFox.jpeg"/>
     <Events subtitle="Mission Bay, Good George" text="Address: 71 Tamaki Drive, Mission Bay, Auckland 1071, Nova Zelândia Phone: +64 9 974 0006 " href='https://www.missionbaytaproom.co.nz/#menus_anchor' img="GoodGeorge.jpeg"/>
       
    </>    
  )
}

  export default AucklandRestaurant;
    