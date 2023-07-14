import "./indicators.css";

const Indicators = () => {
  return (
    <section className="section-indicators">
      <div className="container">
        <div className="indicators-wrapper">
          <div className="indicator">
            <h2 className="indicator-title">2500+</h2>
            <p className="indicator-text">
              Покупателей уже являются счастливыми обладателями нашей продукции
            </p>
          </div>
          <div className="indicator">
            <h2 className="indicator-title">2 года</h2>
            <p className="indicator-text">
              Мы работаем развиваемся и радуем наших клиентов
            </p>
          </div>
          <div className="indicator">
            <h2 className="indicator-title">99.99%</h2>
            <p className="indicator-text">
              Положительных отзывов о наших товарах мы получаем каждый день
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Indicators;
