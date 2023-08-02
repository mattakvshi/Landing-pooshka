import "./../style/main.css";

import { NavLink } from "react-router-dom";

import Navbar from "./../components/navbar/Navbar";
import WbSection from "../components/wb-section/WbSection";

import Slider from "./../components/Slider/Slider";
import slider1 from "./../img/about-gallery/gallery1.jpg";
import slider2 from "./../img/about-gallery/gallery2.jpg";
import slider3 from "./../img/about-gallery/gallery3.jpg";
import slider4 from "./../img/about-gallery/gallery4.jpg";
import slider5 from "./../img/about-gallery/gallery5.jpg";
import slider6 from "./../img/about-gallery/gallery6.jpg";

import tshPrint from "./../img/about-ico/t-shorts-print.svg";
import sportWear from "./../img/about-ico/sport-wear.svg";

import contactIco from "./../img/about-ico/contact-chatting-communication-svgrepo-com.svg";
import tshIco from "./../img/about-ico/clean-clothes.png";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="section-about-info">
        <div className="container">
          <WbSection />
          <div className="info-wrapper">
            <h1 className="title-1">
              Давайте <em>познакомимся</em>
            </h1>
            <div className="about-text">
              <p>
                Добро пожаловать в Pooshka, ваш универсальный магазин модной и
                уникальной одежды! В Pooshka мы увлечены смешиванием двух наших
                любимых миров — видеоигр и спорта — чтобы предложить вам
                коллекцию одежды, которая позволит вам выразить свою любовь к
                обоим.
              </p>
              <div className="about-target">
                <div className="about-target__title">
                  <h3 className="title-3-about-target">Наши цели:</h3>
                </div>
                <div className="about-target__text">
                  <p>
                    <em>1.</em> Наш бренд создан для того, чтобы прославлять
                    острые ощущения и волнение от игр, оставаясь при этом
                    активными и стильными. Являетесь ли вы заядлым геймером,
                    любителем гимнастики или просто любите выражать себя через
                    моду, у нас найдется что-то для каждого.
                  </p>
                  <p>
                    <em>2.</em> В Pooshka мы уделяем первостепенное внимание
                    удовлетворенности клиентов. Мы стремимся предоставить вам
                    беспрепятственный и приятный опыт покупок. Наша команда
                    стремится к тому, чтобы каждая покупка, которую вы
                    совершаете, превзошла ваши ожидания, с момента, когда вы
                    просматриваете наш веб-сайт, до момента, когда ваш заказ
                    поступает к вам на порог.
                  </p>
                </div>
              </div>
              <p>
                Присоединяйтесь к нашему страстному сообществу, и позвольте нам
                помочь вам выразить свой уникальный стиль с помощью нашей
                тщательно подобранной коллекции. Если вы ищете идеальную
                футболку, чтобы продемонстрировать свою любовь к играм, или
                спортивную одежду, которая сочетает в себе комфорт и стиль,
                Pooshka поможет вам.
              </p>
              <div className="about-worlds-row">
                <div className="about-words-column">
                  <div className="column-left">
                    <img src={tshPrint} alt="tshPrint" className="worlds-ico" />
                    <div className="about-words-column-text">
                      Одной из наших особенностей является коллекция футболок с
                      нестандартными принтами, вдохновленными видеоиграми. Мы
                      считаем, что одежда должна отражать вашу индивидуальность,
                      и что может быть лучше, чем продемонстрировать вашу любовь
                      к играм с помощью наших тщательно подобранных дизайнов?
                      Наши футболки, от знаковых персонажей и символов до
                      запоминающихся цитат, созданы для того, чтобы заявить о
                      себе и побудить к разговору.
                    </div>
                  </div>
                </div>
                <div className="about-words-column">
                  <div className="column-right">
                    <img
                      src={sportWear}
                      alt="sportWear"
                      className="worlds-ico"
                    />
                    <div className="about-words-column-text">
                      В дополнение к нашим футболкам, вдохновленным видеоиграми,
                      мы также предлагаем ассортимент одежды, предназначенной
                      для гимнастики, спорта и танцев. Мы понимаем важность
                      комфорта, функциональности и стиля, когда речь идет о
                      спортивной одежде. Вот почему мы тщательно отобрали
                      высококачественные ткани, которые позволят вам показать
                      себя с лучшей стороны и при этом выглядеть шикарно.
                    </div>
                  </div>
                </div>
              </div>
              <p>
                <em>*</em> Одним из основных принципов, отличающих Pooshka,
                является наше стремление использовать высококачественные
                материалы. Мы считаем, что ключом к созданию исключительной
                спортивной одежды является выбор ткани. Вот почему все наши
                изделия изготавливаются из высококачественных, прочных и
                влагоотводящих материалов, обеспечивающих оптимальную
                воздухопроницаемость и комфорт. Собираетесь ли вы в спортзал,
                бегаете или занимаетесь йогой, спортивная одежда Pooshka
                обеспечит вам прохладу и сухость на протяжении всей тренировки.
              </p>
              <div className="about-transfers">
                <ul className="about-transfers__list">
                  <NavLink to="/products">
                    <li className="about-transfers__item">
                      <img
                        src={tshIco}
                        alt="tshIco"
                        className="about-transfers__img"
                      />
                      <h4 className="title-4">Посмотреть работы</h4>
                    </li>
                  </NavLink>
                  <NavLink to="/contacts">
                    <li className="about-transfers__item">
                      <img
                        src={contactIco}
                        alt="contactIco"
                        className="about-transfers__img"
                      />
                      <h4 className="title-4">Остались вопросы?</h4>
                    </li>
                  </NavLink>
                </ul>
              </div>
              <p>
                В заключение, Pooshka — это больше, чем просто бренд одежды —
                это образ жизни. Мы здесь, чтобы вдохновлять, мотивировать и
                давать людям возможность расширять свои возможности и достигать
                своих целей в гимнастике, танцах и хореографии, при этом выглядя
                стильно и чувствуя себя комфортно.
              </p>
              <div className="about-end">
                <h3 className="title-3-about-target">
                  Так зачем соглашаться на меньшее, если с Пушкой можно получить
                  все?
                </h3>
              </div>
            </div>
          </div>
          <div className="gallery-wrapper">
            <div className="about-gallery-title">
              <h2 className="title-3-about">
                Выставка дизайнерского потенциала
              </h2>
            </div>
            <div className="gallery">
              <Slider>
                <img src={slider1} alt="sliderImage1" />
                <img src={slider2} alt="sliderImage2" />
                <img src={slider3} alt="sliderImage3" />
                <img src={slider4} alt="sliderImage4" />
                <img src={slider5} alt="sliderImage5" />
                <img src={slider6} alt="sliderImage6" />
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
