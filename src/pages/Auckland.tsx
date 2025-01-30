import Menu from '../Components/Menu'
import Filter from '../Components/Filter'
import Events from '../Components/Events'
import TitleLanding from '../Components/TitleLanding'

function Auckland() {
 
  return (
     < >
     <Menu />
     <Filter color="#eead2d" link1='/auckland' link2='/aucklandrestaurants' link3='/aucklandhotels' img1='skytower.jpg'  subtitle1="Passeios" img2="TheBridgman.jpg" subtitle2="Restaurants" img3="skycity.jpg" subtitle3="Hotels"/>

     <div className='justify-center flex lg:p-10 pt-10'>
     <div className='w-3/4 pb-20'>
     <TitleLanding title="Auckland"/>
     <Events subtitle="SKY TOWER" text="The Sky Tower has stood tall at 328 meters as an icon of Auckland's sky line for over 20 years. It's an exciting hub of adrenaline activities, superb dining and breath-taking views." href='' img="skytower.jpg"/>
     <Events subtitle="Hobbiton Movie Set" text="The Hobbiton Movie Set tour is an essential stop on the itinerary for all visitors travelling through New Zealand, offering an interesting and entertaining experience incorporating the famous film set as seen in The Lord of The Rings and The Hobbit trilogies. Fall in love with the Alexander family sheep and beef farm, just as acclaimed director Sir Peter Jackson did, as you journey through the village, with the mighty Kaimai Ranges towering in the distance. Your guide will then escort you around the set," href='' img="hobbiton.jpeg"/>
     <Events subtitle="Skydive Auckland" text="The black sand beaches, volcanic peaks and rainforest-covered islands around Auckland make a spectacular setting for skydiving. On this tour, enjoy an exciting tandem skydive just minutes from central Auckland; Jump from altitudes of up to 6,096 meters - the highest elevation in New Zealand - and feel an adrenaline rush during the free fall." href='' img="paraquedas.jpeg"/>
     </div>
     </div>
    </>    
  )
}

  export default Auckland;
    