import Menu from '../Components/Menu'
import Events from '../Components/Events'
import TitleLanding from '../Components/TitleLanding'
import Filter from '../Components/Filter'

function AucklandHotels() {
 
  return (
     < >
     <Menu />
     <Filter color="#a3ceef" link1='/NewZealand/wellington' link2='/NewZealand/wellingtonrestaurant' link3='/NewZealand/wellingtonhotels' img1='bondecar.jpg'  subtitle1="Passeios" img2="wellingtonrestaurant.jpg" subtitle2="Restaurants" img3="wellingtonhotel.jpg" subtitle3="Hotels"/>

     <div className='justify-center flex p-10'>
     <div className='w-3/4 pb-20'>
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
</div>
</div>
    </>    
  )
}

  export default AucklandHotels;
    