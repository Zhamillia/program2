import React from "react";
import "../MountainsPage/MountainsPage.css";

// import travelBlog from "../MountainsPage/mediatravelBlog.png";
import logo from "../MountainsPage/media/logo.png";
import turImg from "../MountainsPage/media/turImg.png";
import turImg1 from "../MountainsPage/media/turImg1.png";
import turImg2 from "../MountainsPage/media/turImg2.png";

const MountainsPage = () => {
  return (
    <div>
      <section className="mount">
        <div className="container">
          <div className="mount__content">
            <div className="mount__left">
              <div>
                <h2 className="mount__title">
                  Хэй! Выбирай <br />
                  тур и в путь!
                </h2>
                <p className="mount__canyon">Каньон “Сказка”</p>
                <p className="mount__text">
                  Когда? 22.12.22 <br />
                  Во сколько? 08:00 <br />
                  Что взять с собой? Крем от загара, очки, деньги <br />
                  на личные расходы <br />
                  Во сколько домой? В Бишкеке будем в 20:00
                </p>
              </div>
              <div className="mount__button">
                <p className="mount__button-text">
                  Мы встретимся на площади в 8:00 на “Ала-Тоо”, полчаса <br />
                  на закуп и выезжаем, делаем остановку в Бооме в 11:00, в 13:00{" "}
                  <br />
                  мы в каньоне “Сказка”, гуляем, фотографируемся, дышим <br />
                  свежим воздухом до 15:00, потом гуляем по южному берегу <br />
                  и выезжаем в 16:00. В 20:00 мы уже в Бишкеке.
                </p>
                <p className="mount__button-price">1300 сом</p>
                <button className="mount__btn">Забронировать</button>
              </div>
            </div>
            <div className="mount__right">
              <div className="mount__row">
                <p className="mount__tur">
                  Тут ты найдешь все наши туры, которые <br /> у нас есть. Также
                  мы сразу подписали, <br /> что нужно обязательно взять с
                  собой, <br /> чтобы путешествие было по максимому <br />{" "}
                  комфортное! С заботой)
                </p>
                <p className="mount__one">Однодневные туры</p>
              </div>
              <button className="mount__right-btn">
                Далее{" "}
                <span>
                  <svg
                    width="20"
                    height="34"
                    viewBox="0 0 20 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.383301 30.7167L3.3333 33.6667L20 17L3.3333 0.333374L0.383301 3.28337L14.1 17L0.383301 30.7167Z"
                      fill="black"
                      fill-opacity="0.55"
                    />
                  </svg>
                </span>
              </button>
              <div className="mount__images">
                <img className="mount__img" src={turImg} alt="turImg" />
                <div>
                  <img src={turImg1} alt="turImg1" />
                  <img src={turImg2} alt="turImg2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="travel">
        <div className="container">
          <div className="travel__top">
            <h1 className="travel__title">
              Travel Blog <br />{" "}
              <span className="travel__span">С картинками</span>
            </h1>
            <p className="travel__text">
              Тут мы рассказываем про волшебные <br /> места в нашей стране и
              показываем <br /> фотографии с прошлых путешествий.
            </p>
          </div>
          <div className="travel__blog">
            {/* <img src={travelBlog} alt="" /> */}
            <div className="travel__row">
              <h3 className="travel__row-title">Сон-Кёль</h3>
              <p className="travel__row-text">
                Сон-Куль находится на высоте 3000 метров в большой межгорной
                долине, ограниченной с севера хребтом Сонкуль-Тоо и хребтом
                Молдо-Тоо с юга. Озеро пресное и довольно глубокое —
                максимальная глубина озера 14 метров. Примерно в середине ноября
                Сон-Куль замерзает и оттаивает только к середине апреля.
                Местность вокруг озера весьма живописна, особенно в летний
                период.{" "}
              </p>
            </div>
            <div className="travel__logo">
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MountainsPage;
