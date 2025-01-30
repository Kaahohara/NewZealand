import Menu from '../Components/Menu'
import Events from '../Components/Events'
import TitleLanding from '../Components/TitleLanding'
import Filter from '../Components/Filter'

function AucklandRestaurant() {
 
  return (
     < >
     <Menu />
     <Filter color="#a3ceef" link1='/wellington' link2='/wellingtonrestaurant' link3='/wellingtonhotels' img1='bondecar.jpg'  subtitle1="Passeios" img2="wellingtonrestaurant.jpg" subtitle2="Restaurants" img3="wellingtonhotel.jpg" subtitle3="Hotels"/>

     <div className='justify-center flex p-10'>
     <div className='w-3/4 pb-20'>
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
           </div>
           </div>   
    </>    
  )
}

  export default AucklandRestaurant;
    