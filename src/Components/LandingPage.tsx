import capa from '../assets/capa.jpg'
function LandingPage() {
    return (
        <div
        className="h-screen bg-cover bg-center flex items-center justify-center text-white text-4xl"
        style={{ backgroundImage: `url(${capa})` }}
    >
       <p className="text-8xl">Welcome to Newzeland</p>
    </div>
        
    );
}

export default LandingPage;
