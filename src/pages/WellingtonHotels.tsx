import Menu from '../Components/Menu'
import TuristicsPoints from '../Components/TuristicsPoints'
import Events from '../Components/Events'
import TitleLanding from '../Components/TitleLanding'

function AucklandHotels() {
 
  return (
     < >
     <Menu />
     <div className="filtro">
        <div className="categorias">
          <TuristicsPoints  link='/wellington' img="bondecar.jpg" subtitle="Passeios"/>
          <TuristicsPoints  link='/wellingtonrestaurant' img="wellingtonrestaurant.jpg" subtitle="Restaurants"/>
          <TuristicsPoints  link='/wellingtonhotels' img="wellingtonhotel.jpg" subtitle="Hotels"/>
       </div>
     </div>
     <TitleLanding title="Hotels in Wellington"/>
     <Events 
      subtitle="Naumi Studio Wellington" 
      text="
        Address: 213 Cuba Street, Te Aro, Wellington 6011, New Zealand
        4 star hotel
        Hotel details

        Free WiFi
        Accessible Parking
        Air conditioning
        Restaurant
        Bar
        " 
      href="" 
      img="naumi.jpg" 
    />

    <Events 
      subtitle="Rydges Wellington Airport" 
      text="
        Address:28 Stewart Duff Drive, Rongotai, Wellington 6022, New Zealand Telephone: +64 4 896 9150
        4 star hotel
        Hotel details
        Free WiFi
        Paid breakfast
        Paid parking
        Accessible
        Air conditioning
        Room service" 
      href="" 
      img="NomadsQueenstownHostel.jpg" 
    />

    <Events 
      subtitle="Rydges Wellington" 
      text="
        Address: 75 Featherston Street, Pipitea, Wellington 6011, New Zealand
        Telephone: +64 4 499 8686

        4 star hotel
        Hotel details
        Free WiFi
        Paid breakfast
        Paid parking
        Accessible
        Air conditioning
        Indoor pool" 
      href="" 
      img="rygdes.jpg" 
    />

    </>    
  )
}

  export default AucklandHotels;
    