import Navbar from "./../components/navbar/Navbar";

const Contacts = () => {
  return (
    <>
      <Navbar />
      <section className="contacts">
        <div className="container">
          <h1 className="title-1">
            Остались вопросы? <br />
          </h1>

          <ul className="contact-list">
            <li className="contact-list__item">
              <h2 className="title-2">Location</h2>
              <p>Krasnodar,Russia</p>
            </li>
            <li className="contact-list__item">
              <h2 className="title-2">Telegram/WhatsApp</h2>
              <p>
                <a href="tel:+79996339877">+7 (999) 633-98-77</a>
              </p>
            </li>
            <li className="contact-list__item">
              <h2 className="title-2">Email</h2>
              <p>
                <a href="mailto:mattakvvshi@yandex.ru">mattakvvshi@yandex.ru</a>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Contacts;
