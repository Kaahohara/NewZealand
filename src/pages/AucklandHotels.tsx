import Menu from '../Components/Menu'
import Events from '../Components/Events'
import Filter from '../Components/Filter'
import TitleLanding from '../Components/TitleLanding'

function AucklandHotels() {
 
  return (
     < >
     <Menu />
     <Filter color="#eead2d" link1='/NewZealand/auckland' link2='/NewZealand/aucklandrestaurants' link3='/NewZealand/aucklandhotels' img1='skytower.jpg'  subtitle1="Passeios" img2="TheBridgman.jpg" subtitle2="Restaurants" img3="skycity.jpg" subtitle3="Hotels"/>

     <div className='justify-center flex p-10'>
     <div className='w-3/4 pb-20'>
     
     <TitleLanding title="Hotels in Auckland"/>
     <Events 
        subtitle="Skycity" 
        text="213 Cuba Street, Te Aro, Wellington 6011, Nova Zelândia. Hotel 4 estrelas com Wi-Fi gratuito, estacionamento acessível, ar-condicionado, restaurante e bar." 
        href="" 
        img="skytower.jpg" 
      />

      <Events 
        subtitle="The Hotel Britomart" 
        text="28 Stewart Duff Drive, Rongotai, Wellington 6022, Nova Zelândia. Hotel 4 estrelas com Wi-Fi gratuito, café da manhã pago, estacionamento pago, ar-condicionado e serviço de quarto." 
        href="" 
        img="TheBridgman.jpg" 
      />

      <Events 
        subtitle="Four Points by Sheraton" 
        text="75 Featherston Street, Pipitea, Wellington 6011, Nova Zelândia. Hotel 4 estrelas com Wi-Fi gratuito, café da manhã pago, estacionamento pago, ar-condicionado e piscina coberta." 
        href="" 
        img="skycity.jpg" 
      />
</div>
</div>
    </>    
  )
}

  export default AucklandHotels;
    