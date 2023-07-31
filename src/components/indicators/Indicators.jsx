import "./indicators.css";

const Indicators = () => {
  return (
    <section className="section-indicators">
      <div className="container">
        <div className="indicators-wrapper"></div>
        <ul className="indicators-row">
          <li className="indicator">
            <h2 className="indicator-title">2500+</h2>
            <div className="indicator-text">
              <p>
                Покупателей уже являются счастливыми обладателями нашей
                продукции
              </p>
            </div>
          </li>
          <li className="indicator">
            <h2 className="indicator-title">2 года</h2>
            <div className="indicator-text">
              <p>Мы работаем развиваемся и радуем наших клиентов</p>
            </div>
          </li>
          <li className="indicator">
            <h2 className="indicator-title">95%</h2>
            <div className="indicator-text">
              <p>
                Положительных отзывов о наших товарах мы получаем каждый день
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Indicators;
