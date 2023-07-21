import "./footer.css";

import { NavLink } from "react-router-dom";

import footerLogo from "./../../img/footer/logo-footer-white.png";

import footerIconMail from "./../../img/footer/mail-icon.svg";
import footerIconPhone from "./../../img/footer/phone-icon.svg";
import footerIconTelegram from "./../../img/footer/telegram-icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <div className="container-footer">
        <div className="footer-wrapper">
          <div className="footer-col">
            <NavLink to="/Landing-pooshka/">
              <img
                className="logo-footer"
                src={footerLogo}
                alt="footer-logo"
                width="180px"
                height="40px"
              />
            </NavLink>
            <a href="mailto:alex12332@list.ru" className="footer-link-text">
              <div className="footer-icon-block">
                <img
                  className="footer-mail-icon"
                  alt="footer-mail-icon"
                  src={footerIconMail}
                />
                <p>alex12332@list.ru</p>
              </div>
            </a>
            <a href="tel:+79181309620" className="footer-link-text">
              <div className="footer-icon-block">
                <img
                  className="footer-phone-icon"
                  alt="footer-phone-icon"
                  src={footerIconPhone}
                />
                <p>+7 (918) 130-96-20</p>
              </div>
            </a>
            <a
              href="https://t.me/pooshka_tshirt"
              target="_blank"
              rel="noreferrer"
              className="footer-link-text"
            >
              <div className="footer-icon-block">
                <img
                  className="footer-telegram-icon"
                  alt="footer-telegram-icon"
                  src={footerIconTelegram}
                />
                <p>Наш телеграм</p>
              </div>
            </a>
          </div>
          <div className="footer-col">
            <h3 className="title-3-footer">Ссылки</h3>
            <NavLink to="/Landing-pooshka/" className="footer-link-text">
              Главная
            </NavLink>
            <NavLink
              to="/Landing-pooshka/products"
              className="footer-link-text"
            >
              Товары
            </NavLink>
            <NavLink to="/Landing-pooshka/about" className="footer-link-text">
              О нас
            </NavLink>
            <NavLink
              to="/Landing-pooshka/contacts"
              className="footer-link-text"
            >
              Контакты
            </NavLink>
          </div>
          <div className="footer-col">
            <h3 className="title-3-footer">Соглашения</h3>
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
            <h3 className="title-3-footer">Продукция</h3>
            <a
              href="https://www.wildberries.ru/seller/1202796#c148101751"
              target="_blank"
              rel="noreferrer"
              className="footer-link-text"
            >
              Посмотреть товары
            </a>
            <a href="#!" className="footer-link-text">
              Задать вопрос
            </a>
            <a href="#!" className="footer-link-text">
              Отзывы
            </a>
          </div>
        </div>
        <div className="footer-dev">
          <p>Created in 2023 by mattakushi & lumate </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
