import Menu from '../Components/Menu'
import TuristicsPoints from '../Components/TuristicsPoints'
import Events from '../Components/Events'
import TitleLanding from '../Components/TitleLanding'

function AucklandHotels() {
 
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

    </>    
  )
}

  export default AucklandHotels;
    