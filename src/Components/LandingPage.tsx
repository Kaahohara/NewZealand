import TitleLanding from "./TitleLanding";
import capa from '../assets/capa.jpg'
function LandingPage() {
    return (
        <div className="LandingImage">
            <img src={capa} alt="LandingFundoLigthBlue" />
                <TitleLanding title="Welcome to Newzela" />
        </div>
    );
}

export default LandingPage;
