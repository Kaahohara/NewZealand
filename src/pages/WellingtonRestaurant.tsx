import Menu from '../Components/Menu'
import TuristicsPoints from '../Components/TuristicsPoints'
import Events from '../Components/Events'
import TitleLanding from '../Components/TitleLanding'

function AucklandRestaurant() {
 
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
     <TitleLanding title="Restaurants in Wellington"/>
     <Events subtitle="The Thistle Inn" text="PRICE RANGE
        R$ 49 - R$ 106
        SPECIAL DIETS
        Vegetarian options, Vegan options, Gluten-free options
        Phone:+64 4-499 5980" href='https://www.thistleinn.co.nz/' img="TheBridgman.jpg"/>
     <Events subtitle="Istana Malaysia Restaurant" text="Address: 1 Allen Street, Te Aro, Wellington 6011, Nova Zelândia
        Phone: +64 4 801 7989" href="https://istanamalaysia.co.nz/" img="TheFox.jpeg"/>
     <Events subtitle="Rock Yard Restaurant" text="Food
        Asian, Vietnamese
        SPECIAL DIETS
        Vegetarian options, Vegan options, Gluten-free options
        Phone:+64 4-381 3930
        Address:18 allen street Te Aro Wellington, 6011 New Zealand " href='https://rockyard.co.nz/' img="GoodGeorge.jpeg"/>
              
    </>    
  )
}

  export default AucklandRestaurant;
    