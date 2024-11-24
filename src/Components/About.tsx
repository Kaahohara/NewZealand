import bandeira from '../assets/bandeira.png'
import newzealandsnow from '../assets/newzealandsnow.jpg'

function About(){
    return (
        <>
        <div className="FundoLigthBlue">
            <div className="container">
                <div id="secao2" className="dados">
                    <div className="bandeira">
                        <img src={bandeira} />
                    </div>
                    <div className="titulo">New Zealand
                        <div className="traco-com-bolinhas">
                        </div>
                    </div>
                </div>

                <div className="curiosidades">
                    <img src={newzealandsnow} alt="New Zealand na neve"/>
                </div>
                <div className="about">
                    <h1>About New Zeeland</h1>
                    <p> New Zealand is located approximately 2,000 km southeast of Australia, separated by the Tasman Sea. The most spoken and official language is English, brought by British colonizers, but they are still considered native languages, such as the Māori language.
                    </p><p>
                        New Zealanders are known for their friendliness and affection towards tourists. The country's population is smaller than that of Rio de Janeiro and the size of the country is equivalent to that of Rio Grande do Sul. Despite being small, the country is not calm at all. It is a home for extreme sports and the home of bungee jumping.
                    </p><p>
                        Extreme sports are a national passion – and one of the many visitors the country receives annually. Adventure tourism, mountaineering and other outdoor activities such as cycling, canoeing and swimming are also very popular. Among team sports, New Zealand is a world reference in rugby.
                    </p>
                </div>
            </div>
        </div>
     
    </>
            );
}
    export default About;