type Events = {
    text: string;
    img: string;
    subtitle: string;
    href:string;
  };
  
  function Events({ text, img, subtitle, href }: Readonly<Events>) {
    const url = `NewZealand/assets/${img}`; 
  
    if (text && img && subtitle) {
      return (
        <div className="lg:flex gap-6 pt-6">
          <div className="lg:w-1/2">
            <img src={url} className=" rounded-lg" alt={subtitle} width={"100%"} />
          </div>
          <div className="lg:w-1/2">
            <p className="text-black text-3xl">{subtitle}</p>
            <p className="text-black">{text}</p><div className="mt-10 ">
            {href && <a className="bg-blue-800 text-white p-2 rounded-lg" href={href}>Saiba mais</a>}
          </div>
        </div>
        </div>
      );
    }
  
    return null; 
  }
  
  export default Events;
  