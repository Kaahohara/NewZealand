import Menu from '../Components/Menu'
import Events from '../Components/Events'
import TitleLanding from '../Components/TitleLanding'
import Filter from '../Components/Filter'

function Wellington() {
 
  return (
     < >
     <Menu />
     <Filter color="#a3ceef" link1='/wellington' link2='/wellingtonrestaurant' link3='/wellingtonhotels' img1='bondecar.jpg'  subtitle1="Passeios" img2="wellingtonrestaurant.jpg" subtitle2="Restaurants" img3="wellingtonhotel.jpg" subtitle3="Hotels"/>

     <div className='justify-center flex p-10'>
        <div className='w-3/4 pb-20'>
          <TitleLanding title="Wellington"/>
          <Events subtitle="Wellington Botanic Garden" text="At the top of the Wellington Cable Car, and just minutes from the central business district, lies 25 hectares (64 acres) of beauty, peace and tranquillity. Established in 1844, the Wellington Botanic Garden is home to some of the oldest exotic trees in New Zealand. Today, the native and exotic forests are complemented by a duck pond, a begonia house and cafe, colourful floral displays, a herb garden, an Australian garden and the award-winning Lady Norwood Rose Garden." href='' img="wellingtongarden.jpg"/>
          <Events subtitle="Aotearoa New Zealand Festival of the Arts" text="Held every two years since 1986, Aotearoa New Zealand Festival of the Arts (ANZFA) celebrates creativity in all its forms. With a diverse programme, the festival covers everything from music, theatre, and dance, to visual arts, literature, and more. Music highlights include The National, performing in Wellington for the very first time as part of the festival’s opening weekend. See international singing sensation Meow Meow alongside the full force of the New Zealand Symphony Orchestra. And the double-Grammy award-winning choral group The King’s Singers bring their charismatic a cappella singing." href='' img="aotearosa.jpg"/>
          <Events subtitle="Koji" text="Koji is a vibrant restaurant on Majoribanks Street, combining Asian cuisine and Aotearoa produce. The menu comprises exciting dishes that mix traditional-style sauces with playful new ideas. The dishes come in different sizes and are set up for sharing. “I like having the family table. Everyone sitting down and multiple plates on the table at a time and getting a mix. It gives a bit more interaction at the table and connection with each other,” says Koji co-owner and chef Johnon MacDonald. The sharing style also creates a more casual approach to traditional high-end dining." href='' img="koji.jpg"/>
        </div>
     </div>
    </>    
  )
}

  export default Wellington;
    