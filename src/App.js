import './App.css';
import {bloks} from "./bloks"


const App =() =>{
   console.log(bloks)
  return (
      <div>
        <div className="news">
          <div className="news-top">
            <span>Новости</span>
          </div>
          <div className="navigation-block">
            <nav className="navigation">
              <ul>
                <li><a href="#"><span>Учеба </span></a></li>
                <li><a href="#"><span>Наука </span></a></li>
                <li><a href="#"><span>Абитуриент </span></a></li>
                <li><a href="#"><span>Новости </span></a></li>
                <li><a href="#"><span>Новости группы </span></a></li>
                <li><a href="#"><span>РФ ПГУ </span></a></li>
                <li><a href="#"><span>И- новости </span></a></li>
                <li><a href="#"><span>Обьявления </span></a></li>
              </ul>
            </nav>
          </div>
          <div className="info-blocks">
            {bloks.map((blok) => <div className="info-block">

              <div className="top-block-text">
                <span>{blok.toptext}</span>
              </div>
              <div className="center-block-text">
                <span>{blok.centertext}</span>
              </div>
              <div className="bottom-block-text">
                <a href="#">{blok.bottomtext}</a>
                <span>{blok.date}</span>
              </div>
            </div>)
            }
          </div>
          <div className="show-all">
            <a href="#">Посмотреть все  ></a>
          </div>
        </div>

      </div>
  );
}

export default App;
