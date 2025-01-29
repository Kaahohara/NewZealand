import About from '../Components/About'
import Menu from '../Components/Menu'
import TuristicsPoints from '../Components/TuristicsPoints'
import Events from '../Components/Events'
import Filter from '../Components/Filter'
import TitleLanding from '../Components/TitleLanding'

function AucklandRestaurant() {
 
  return (
     < >
     <Menu />
     <Filter color="#eead2d" link1='/NewZealand/auckland' link2='/NewZealand/aucklandrestaurants' link3='/NewZealand/aucklandhotels' img1='skytower.jpg'  subtitle1="Passeios" img2="TheBridgman.jpg" subtitle2="Restaurants" img3="skycity.jpg" subtitle3="Hotels"/>
     <div className='justify-center flex p-10'>
        <div className='w-3/4 pb-20'>
            <TitleLanding title="Restaurants in Auckland"/>
            <Events subtitle="The Bridgman" text="Address: 234 Dominion Road, Cnr Valley Road, Mount Eden, Auckland 1024, Nova Zelândia. Phone:+64 22 649 4813" href="https://www.thebridgman.co.nz/bookings" img="TheBridgman.jpg"/>
            <Events subtitle="The Fox" text="PRICE RANGE $7 - $30 Address: 85-87 Customs Street West Viaduct Basin, Auckland Central, Auckland 1010 New Zealand Phone: +64 9-553 499" href="https://goodspiritshospitality.co.nz/the-fox/" img="TheFox.jpeg"/>
            <Events subtitle="Mission Bay, Good George" text="Address: 71 Tamaki Drive, Mission Bay, Auckland 1071, Nova Zelândia Phone: +64 9 974 0006 " href='https://www.missionbaytaproom.co.nz/#menus_anchor' img="GoodGeorge.jpeg"/>
          </div>
       </div>
    </>    
  )
}

  export default AucklandRestaurant;
    