import { useEffect, useState } from "react";

interface dataNews {
  image: string;
  caption: string;
  urlnews: string;
}

const CarouselComponent = ({ data, sizeCard }: any) => {
  let [index, setIndex] = useState(1);
  const [currentData, setCurrent] = useState<dataNews | undefined>(undefined);
  const [time, setTime] = useState(10000);

  const timeout = setTimeout(() => {
    NextAuto();
  }, time);

  const NextAuto = () => {
    if (index === data.length - 1) {
      setIndex(0);
      setCurrent(data[index]);
    } else {
      setIndex(index + 1);
      setCurrent(data[index]);
    }
  };

  const OnNext = () => {
    if (index === data.length - 1) {
      setIndex(0);
      setCurrent(data[index]);
    } else {
      setIndex(index + 1);
      setCurrent(data[index]);
    }
    clearTimeout(timeout);
  };

  const OnBack = () => {
    if (index === 0) {
      setIndex(Number(data.length - 1));
      setCurrent(data[index]);
    } else {
      setIndex(index - 1);
      setCurrent(data[index]);
    }
  };

  const reload = () => {
    timeout;
  };

  useEffect(() => {
    setCurrent(data[0]);
  }, []);

  useEffect(() => {
    reload();
  });

  return (
    <div className="App mt-5 mb-5">
      <div style={{ textAlign: "center" }}>
        <h2>Noticias Destacadas</h2>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <div className="container">
            {/* <Link to={currentData.urlnews}> */}

            <div className="carousel-container" style={sizeCard}>
              {currentData && (
                <a href={currentData.urlnews}>
                  <img id="carousel-image" src={currentData.image} alt="Logo" />
                  <div className="contenedor_titulo">
                    <p className="texto-centrado">{currentData.caption.substring(0, 200)+"..."}</p><strong>Leer Noticia</strong>
                  </div>
                </a>
              )}
              <div>
                {/* <h1 className="titulo-centrado"> {currentData.caption}</h1> */}

                <button className="pre" onClick={OnBack}>
                  <i className="dcontrol fa-solid fa-angles-left"></i>
                </button>
                <button className="nxt" onClick={OnNext}>
                  <i className="dcontrol fa-solid fa-angles-right"></i>
                </button>
              </div>
            </div>

            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
