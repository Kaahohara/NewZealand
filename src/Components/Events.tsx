type Events = {
    text: string;
    img: string;
    subtitle: string;
    href:string;
  };
  
  function Events({ text, img, subtitle, href }: Readonly<Events>) {
    const url = `http://localhost:5173/@fs/C:/xampp/htdocs/Portifolio_karina/TurismoNZ/src/assets/${img}`; 
  
    if (text && img && subtitle) {
      return (
        <div className="containerpark">
          <div className="picture">
            <img src={url} alt={subtitle} />
          </div>
          <div className="namepark">
            <p style={{ color: 'black', fontSize: '40px' }}>{subtitle}</p>
            <p style={{color: 'black'}}>{text}</p>
            {href && <a href={href}>Saiba mais</a>}
          </div>
        </div>
      );
    }
  
    return null; 
  }
  
  export default Events;
  