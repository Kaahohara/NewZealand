import Menu from '../Components/Menu'
import TuristicsPoints from '../Components/TuristicsPoints'
import Events from '../Components/Events'
import TitleLanding from '../Components/TitleLanding'

function Queenstown() {
 
  return (
     < >
     <Menu />
     <div className="filtro" style={{backgroundColor: 'darkolivegreen'}}>
        <div className="categorias">
          <TuristicsPoints  link='NewZealand/queenstown' img="queenstownGondolas.jpg" subtitle="Passeios"/>
          <TuristicsPoints  link='NewZealand/queenstownrestaurant' img="Nest Kitchen.jpg" subtitle="Restaurants"/>
          <TuristicsPoints  link='NewZealand/queenstowntonhotels' img="StoneridgeEstate.jpeg" subtitle="Hotels"/>
       </div>
     </div>
     <TitleLanding title="Queenstown"/>
     <Events subtitle="Queenstown Gondola" text="Take a scenic ride in the iconic Skyline Gondola and take in the stunning views as you ride the steepest cable car lift in the Southern Hemisphere! When you get to the top, enjoy the spectacular views while having a drink from the Bar, take a few rides on the thrilling Luge (once is never enough), refuel with a sumptuous buffet lunch or dinner at Stratosfare Restaurant. There’s more to enjoy!" href='' img="queenstownGondola.jpg"/>
     <Events subtitle="SHOTOVER RIVER" text=" Step across this great frontier and meet the challenge of whitewater rafting on Queenstown’s famous Shotover River. Experience the rugged beauty and unspoiled grandeur of the breathtaking scenery as you conquer this wild and untamed river. Tackle six rapids along the Shotover River, with stretches of calm water to take in the views, go for a swim and soak up its gold mining history." href='' img="whitewaterrafting.jpg"/>
     <Events subtitle="horseback riding" text="  Want an authentic New Zealand backcountry experience? Take the whole family on a horseback riding trek through Walter Peak farm. After taking the TSS Earnslaw across the lake, you’ll meet your tour guide at the farm and head off on a leisurely horse ride through rolling high country hills with stunning views of the lake and surrounding mountains. At only six people per tour group, it’s the perfect family activity in Queenstown." href='' img="horsequeensland.jpg"/>
     
    </>    
  )
}

  export default Queenstown;
    