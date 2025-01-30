import Menu from '../Components/Menu'
import Filter from '../Components/Filter'
import Events from '../Components/Events'
import TitleLanding from '../Components/TitleLanding'

function AucklandRestaurant() {
 
  return (
     < >
     <Menu />
     <Filter color="darkolivegreen" link1='/queenstown' link2='/queenstownrestaurant' link3='/queenstownhotels' img1='queenstownGondolas.jpg'  subtitle1="Passeios" img2="wellingtonrestaurant.jpg" subtitle2="Nest Kitchen" img3="StoneridgeEstate.jpeg" subtitle3="Hotels"/>
     <div className='justify-center flex p-10'>
     <div className='w-3/4 pb-20'>
     <TitleLanding title="Restaurants in Queenstown"/>
     <Events subtitle="Nest Kitchen" 
         text="
         Address:139 Fernhill Road Kamana Lakehouse, Queenstown 9300 Nova Zelândia
         PRICE RANGE
         R$ 152 - R$ 457
         SPECIAL DIETS
         Vegetarian options, Vegan options
         Phone:+64 3-901 0284" 
         href='https://www.nestqt.co.nz/dinner-menu' 
         img="Nest Kitchen.jpg"/>
     <Events subtitle="Boardwalk" 
        text="
         PRICE RANGE
         R$ 91 - R$ 304 Address:Level 1 Steamer Wharf 88 Beach Street, Queenstown 9300 Nova Zelândia
         Phone: +64 3-442 4600" 
        href="https://www.boardwalkqueenstown.nz/" 
        img="Boardwalk.jpg"/>
     <Events subtitle="Perky's - Floating Bar Queenstown" 
         text="
         FAIXA DE PREÇO
         R$ 15 - R$ 61
         Phone:+64 21 664 043
         Address:1Queenstown Bay, Queenstown 9300 Nova Zelândia" 
         href='https://www.perkys.co.nz/' 
         img="floatingBarspeaky.jpg"/>
                </div>
                </div>  
    </>    
  )
}

  export default AucklandRestaurant;
    