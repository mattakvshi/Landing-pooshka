import Navbar from "./../components/navbar/Navbar";

import Slider from "./../components/Slider/Slider";
import slider1 from "./../img/about_slider/slider1.png";
import slider2 from "./../img/about_slider/slider2.png";
import slider3 from "./../img/about_slider/slider3.png";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="section-about-info">
        <div className="container">
          <div className="info-wrapper">
            <h1 className="title-1">Немного о нашей компании</h1>
            <p>
              Тут будет какой то текст о нашей компании
              рвафоынпшЦУШЖЦ4ШШКРЦгарвардывраолцацФУРОФЫВРДЛОАПРЛ
            </p>
          </div>
          <div className="gallery-wrapper">
            <h2 className="title-2">Наша галерея</h2>

            <div className="gallery">
              <Slider>
                <img src={slider1} alt="sliderImage1" />
                <img src={slider2} alt="sliderImage2" />
                <img src={slider3} alt="sliderImage3" />
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
