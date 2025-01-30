import Menu from '../Components/Menu'
import Filter from '../Components/Filter'
import Events from '../Components/Events'
import TitleLanding from '../Components/TitleLanding'

function QueenstownHotels() {
 
  return (
     < >
     <Menu />
     <Filter color="darkolivegreen" link1='/queenstown' link2='/queenstownrestaurant' link3='/queenstownhotels' img1='queenstownGondolas.jpg'  subtitle1="Passeios" img2="wellingtonrestaurant.jpg" subtitle2="Nest Kitchen" img3="StoneridgeEstate.jpeg" subtitle3="Hotels"/>
     <div className='justify-center flex p-10'>
     <div className='w-3/4 pb-20'>
     <TitleLanding title="Hotels in Queenstown"/>
     <Events 
      subtitle="Nomads Hostel" 
      text="
      Address:5-11 Church Street, Queenstown 9300 Nova Zelândia
      Hotel details
      Wi-Fi
      Sauna
      Café da manhã gratuito
      Caminhada
      Passeios a cavalo
      Armazenamento de bagagem
      Hotel para não fumantes
      Recepção 24 horas
        " 
      href="" 
      img="naumi.jpg" 
    />

    <Events 
      subtitle="Stoneridge Estate" 
      text="
        Address:756 Lake Hayes-Arrow Junction Highway, Lake Hayes, Queenstown 9371 Nova Zelândia Telephone: +64 4 896 9150
        Hotel details
        Quartos com isolamento acústico
        Roupões
        Ar-condicionado
        Escrivaninha
        Frigobar
        TV de tela plana
        Lençol térmico
        Chuveiro acessível" 
      href="" 
      img="StoneridgeEstate.jpeg" 
    />

    <Events 
      subtitle="Heritage" 
      text="
        Address: 91 Fernhill Road Queenstown, New Zealand
        Telephone: +64 3 450 1500
        Hotel details
        Air conditioning
        Interconnected rooms available
        Private balcony
        Room service
        Safe
        Refrigerator
        Flatscreen TV
        On-demand movies" 
      href="" 
      img="heritage.jpeg" 
    />
    </div>
    </div>
    </>    
  )
}

  export default QueenstownHotels;
    