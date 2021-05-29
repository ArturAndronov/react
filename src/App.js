import './App.css';

const App = () => {
  return (
    <div>
    <div className="news">
      <div className="news-top">
          <span>Новости фы</span>
      </div>
      <div className="navigation-block">
          <nav className="navigation">
              <ul>
                  <li><a href="#"><span>Учеба |</span></a></li>
                  <li><a href="#"><span>Наука |</span></a></li>
                  <li><a href="#"><span>Абитуриент |</span></a></li>
                  <li><a href="#"><span>Новости |</span></a></li>
                  <li><a href="#"><span>Новости группы |</span></a></li>
                  <li><a href="#"><span>РФ ПГУ |</span></a></li>
                  <li><a href="#"><span>И- новости |</span></a></li>
                  <li><a href="#"><span>Обьявления </span></a></li>
              </ul>
          </nav>
      </div>
        <button className="btn-1" id="b1">
            <h3 className="news-btn">Предварительное<br/>тестирование абитуриентов<br/>в 2021 году</h3>
            <p className="text-news">В сязи с продлением карантинных<br/>мероприятий прием заявлений...</p>
            <div className="button-bottom">
            <p className="show-news"><a href="#">подробнее ></a></p>
            <p className="data-news" id="b1">09.02.21</p>
            </div>
        </button>
        <button className="btn-2" id="b1">
            <h3 className="news-btn">Идеальные соображения<br/>высшего порядка</h3>
            <p className="text-news"><br/>Задача организации, в особенности же<br/>сложившаяся структура организации...</p>
            <div className="button-bottom">
            <p className="show-news"><a href="#">подробнее ></a></p>
            <p className="data-news" id="b1">14.02.21</p>
            </div>
        </button>
        <button className="btn-3" id="b1">
            <h3 className="news-btn">Виртуальный тур по<br/>Рыбницкому филиалу ПГУ<br/>им.Т.Г.Шевченко</h3>
            <p className="text-news">В сязи с продлением карантинных<br/>мероприятий прием заявлений...</p>
            <div className="button-bottom">
            <p className="show-news"><a href="#">подробнее ></a></p>
            <p className="data-news" id="b1">14.02.21</p>
            </div>
        </button>
        <p className="show-all"><a href="#">Посмотреть все ></a></p>
    </div>
    <div className="footer">
          <div className="footer-wrap">
              <ul>
                  <li><a href="#">Главная</a></li>
                  <li><a href="#">О кафедре</a></li>
                  <li><a href="#">Преподаватели</a></li>
              </ul>
          </div>
          <div className="footer-wrap">
              <ul>
                  <li><a href="#">Новости</a></li>
                  <li><a href="#">Расписание</a></li>
                  <li><a href="#">Вопрос-ответ</a></li>
              </ul>
          </div>
          <div className="footer-wrap">
              <ul>
                  <li><a href="#">Главная</a></li>
                  <li><a href="#">О кафедре</a></li>
                  <li><a href="#">Преподаватели</a></li>
              </ul>
          </div>
    </div>
    </div>
  );
}

export default App;
