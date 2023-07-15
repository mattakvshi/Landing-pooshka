import "./footer.css";

import footerLogo from "./../../img/footer/logo-footer.png";
import footerIconMail from "./../../img/footer/mail-icon.svg";
import footerIconPhone from "./../../img/footer/phone-icon.svg";

const Footer = () => {
  return (
    <section className="section-footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-col">
            <a href="./index.html">
              <img className="logo-footer" src={footerLogo} alt="footer-logo" />
            </a>

            <div className="footer-icon-block">
              <img
                className="footer-mail-icon"
                alt="footer-mail-icon"
                src={footerIconMail}
              />
              <p>help@frybix.com</p>
            </div>
            <div className="footer-icon-block">
              <img
                className="footer-phone-icon"
                alt="footer-phone-icon"
                src={footerIconPhone}
              />
              <p>+1 234 456 678 89</p>
            </div>
            <div className="footer-phone"></div>
          </div>
          <div className="footer-col">
            <h3 className="title-3">Ссылки</h3>
            <a href="#!" className="footer-link-text">
              Главная
            </a>
            <a href="#!" className="footer-link-text">
              Товары
            </a>
            <a href="#!" className="footer-link-text">
              О нас
            </a>
            <a href="#!" className="footer-link-text">
              Контакты
            </a>
          </div>
          <div className="footer-col">
            <h3 className="title-3">Соглашения</h3>
            <a href="#!" className="footer-link-text">
              Пользовательское
            </a>
            <a href="#!" className="footer-link-text">
              Конфиденциальность
            </a>
            <a href="#!" className="footer-link-text">
              Файлы куки
            </a>
          </div>
          <div className="footer-col">
            <h3 className="title-3">Продукция</h3>
            <a href="#!" className="footer-link-text">
              Посмотреть товары
            </a>
            <a href="#!" className="footer-link-text">
              Задать вопрос
            </a>
            <a href="#!" className="footer-link-text">
              Отзывы
            </a>
          </div>
          <div className="footer-col-btn">
            <h3 className="title-3">Новости</h3>
            <a href="#!" className="footer-link-text">
              Телеграмм
            </a>
            <a href="#!" className="btn-small">
              Связаться!
            </a>
          </div>
        </div>
        <div className="footer-dev">
          <p>Created in 2023 by mattakushi & lumate </p>
        </div>
      </div>
    </section>
  );
};
export default Footer;
