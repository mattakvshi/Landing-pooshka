// todo: САНЯЯ ЗДЕСЬ СВЕРСТАЙ БЛОК О КОТОРОМ МЫ ГОВОРИЛИ,
// Я ПОДГОТОВИЛ ДЛЯ ТЕБЯ УЖЕ ФУНКЦИЮ, И ОСНООВНОЙЬ БЛОК,
// А ТАК ЖЕ ЭТОТ КОМПОНЕНТ УЖЕ ЭКСПОРТИРОВАН В APP В НУЖНОЕ МЕСТО,
// АК ЧТО ТЕБЕ ОСТАЛОСЬ ТОЛЬКО ЕГО СВЕРСТАТЬ

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! choice
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! container

import "./choice.css";

import choiceIcon1 from "./../../img/choice/choice-icon-1.png";
import choiceIcon2 from "./../../img/choice/choice-icon-2.png";
import choiceIcon3 from "./../../img/choice/choice-icon-3.png";
import choiceGroup from "./../../img/choice/Group.png";

const Choice = () => {
  return (
    <section className="section-choice">
      <div className="container">
        <div className="choice-wrapper">
          <h2 className="title-2">Почему Pooshka это ваш выбор ?</h2>

          <div className="section-choice__choice">
            <ul className="benefits">
              <li className="benefit">
                <img
                  src={choiceIcon1}
                  alt="choiceIcon1"
                  className="choiceIcon"
                />
                <div className="benefit-info">
                  <h3 className="title-3">Собственное производство</h3>
                  <p className="benefit-text">
                    Мы отвечаем за качество нашей продукции ведь делаем её сами.
                  </p>
                </div>
              </li>
              <li className="benefit">
                <img
                  src={choiceIcon2}
                  alt="choiceIcon2"
                  className="choiceIcon"
                />
                <div className="benefit-info">
                  <h3 className="title-3">Уникальный дизайн</h3>
                  <p className="benefit-text">
                    Над дизайном продукции нашего бренда работают лучшие
                    специалисты.
                  </p>
                </div>
              </li>
              <li className="benefit">
                <img
                  src={choiceIcon3}
                  alt="choiceIcon3"
                  className="choiceIcon"
                />
                <div className="benefit-info">
                  <h3 className="title-3">Быстрая доставка</h3>
                  <p className="benefit-text">
                    Доставим аккуратно и быстро в любую точку России.
                  </p>
                </div>
              </li>
            </ul>
            <div className="benefit-images">
              <div className="benefit-img__img">
                <img
                  src={choiceGroup}
                  alt="choiceGroup"
                  className="choiceGroup"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choice;
