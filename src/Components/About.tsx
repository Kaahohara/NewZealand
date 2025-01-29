import bandeira from '../assets/bandeira.png'
import newzealandsnow from '../assets/newzealandsnow.jpg'

function About(){
    return (
        
        <div className="bg-blue-200 p-20">
            <div className="w-3/4 p-10 mx-auto rounded-lg shadow-[6px_6px_10px_rgba(0,0,0,0.3)] border-2 border-[#b5b5b5]">
                <div id="secao2" className="flex justify-center items-center">
                    <div className=''>
                        <img src={bandeira} className="w-20 h-20 rounded-full" alt="bandeira"/>
                    </div>
                    <div className="text-7xl">
                        <p>New Zealand</p>
                    </div>
                </div>

                <div className="w-full mt-20">
                    <img src={newzealandsnow} alt="New Zealand na neve"/>
                </div>
                <div className="mt-20">
                    <h1>About New Zeeland</h1>
                    <p className='text-1xl mt-10'> New Zealand is located approximately 2,000 km southeast of Australia, separated by the Tasman Sea. The most spoken and official language is English, brought by British colonizers, but they are still considered native languages, such as the Māori language.
                        New Zealanders are known for their friendliness and affection towards tourists. The country's population is smaller than that of Rio de Janeiro and the size of the country is equivalent to that of Rio Grande do Sul. Despite being small, the country is not calm at all. It is a home for extreme sports and the home of bungee jumping.
                        Extreme sports are a national passion – and one of the many visitors the country receives annually. Adventure tourism, mountaineering and other outdoor activities such as cycling, canoeing and swimming are also very popular. Among team sports, New Zealand is a world reference in rugby.
                    </p>
                </div>
            </div>
        </div>
     

            );
}
    export default About;