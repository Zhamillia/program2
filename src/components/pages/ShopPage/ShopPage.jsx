import React from "react";
import "../ShopPage/ShopPage.css";
import iphone13blue from "../../images/iphone13blue.png";
import iPhone13black from "../../images/iPhone13black.png";
import iPhone13darkblue from "../../images/iPhone13darkblue.png";
import iPhone13Promaxgreen from "../../images/iPhone13Promaxgreen.png";
import airpods from "../../images/airpods.png";
import magsafe from "../../images/magsafe.png";
import time from "../../images/time.png";
import charger from "../../images/charger.png";
import lumen from "../../images/lumen.png";
import Figura from "../../images/Figura.png";
import otterbox from "../../images/otterbox.png";
// import lumen2 from "../../images/lumen2.png";

const ShopPage = () => {
  return (
    <section className="shop">
      <div className="container">
        <div className="shop__top">
          <h2 className="shop__title">
            Твой <br /> смартфон <br /> уже ждёт тебя
          </h2>
          <p className="shop__text">
            Если ты здесь, значит тебе нужен <br /> новый гаджет. Что мы можем{" "}
            <br /> предложить, смотри ниже. Если будут <br /> вопросы, не
            стесняйся, спрашивай. <br /> Приятных покупок)
          </p>
        </div>
        <div className="shop__row">
          <div className="shop__card">
            <img className="shop__img" src={iphone13blue} alt="iphone13blue" />
            <h3 className="shop__card-title">
              iPhone 13 <span>blue</span>
            </h3>
            <p className="shop__card-text">1 TB, 6,1 дюймов экран</p>
            <p className="shop__card-price">70 000 с</p>
            <button className="shop__card-btn">Купить</button>
          </div>
          <div className="shop__card">
            <img
              className="shop__img"
              src={iPhone13black}
              alt="iPhone13black"
            />
            <h3 className="shop__card-title">iPhone 13 black</h3>
            <p className="shop__card-text">128 TB, 6,1 дюймов экран</p>
            <p className="shop__card-price">65 000 с</p>
            <button className="shop__card-btn">Купить</button>
          </div>
          <div className="shop__card">
            <img
              className="shop__img"
              src={iPhone13darkblue}
              alt="iPhone13darkblue"
            />
            <h3 className="shop__card-title">
              iPhone 13 <span>dark blue</span>
            </h3>
            <p className="shop__card-text">128 TB, 6,1 дюймов экран </p>
            <p className="shop__card-price">54 000 с</p>
            <button className="shop__card-btn">Купить</button>
          </div>
          <div className="shop__card">
            <img
              className="shop__img"
              src={iPhone13Promaxgreen}
              alt="iPhone13Promaxgreen"
            />
            <h3 className="shop__card-title">
              iPhone 13 Pro max <span>green</span>
            </h3>
            <p className="shop__card-text">128 TB, 6,1 дюймов экран </p>
            <p className="shop__card-price">120 000 с</p>
            <button className="shop__card-btn">Купить</button>
          </div>
        </div>
        <div className="shop__top">
          <h2 className="shop__title">Аксессуары</h2>
        </div>
        <div className="shop__row">
          <div className="shop__card">
            <img className="shop__img" src={airpods} alt="airpods" />
            <h3 className="shop__card-title">AirPods Pro</h3>
            <p className="shop__card-text">2го поколения </p>
            <p className="shop__card-price">21 125 с</p>
            <button className="shop__card-btn">Купить</button>
          </div>
          <div className="shop__card">
            <img className="shop__img" src={magsafe} alt="magsafe" />
            <h3 className="shop__card-title">MagSafe</h3>
            <p className="shop__card-text">белый</p>
            <p className="shop__card-price">8 500 с</p>
            <button className="shop__card-btn">Купить</button>
          </div>
          <div className="shop__card">
            <img className="shop__img" src={time} alt="time" />
            <h3 className="shop__card-title">MagSafe 3 в 1</h3>
            <p className="shop__card-text">металлический </p>
            <p className="shop__card-price">12 900 с</p>
            <button className="shop__card-btn">Купить</button>
          </div>
          <div className="shop__card">
            <img className="shop__img" src={charger} alt="charger" />
            <h3 className="shop__card-title">Подставка для зарядки</h3>
            <p className="shop__card-text">белая </p>
            <p className="shop__card-price">8 500 с</p>
            <button className="shop__card-btn">Купить</button>
          </div>
        </div>
        <div className="shop__top">
          <h2 className="shop__title">Чехлы</h2>
          <div className="shop__text">
            Псс. У нас original чехлы и как правило <br /> самые новинки.
          </div>
        </div>
        <div className="shop__row">
          <div className="shop__card">
            <img className="shop__img" src={lumen} alt="lumen" />
            <h3 className="shop__card-title">Чехол Otterbox Lumen</h3>
            <p className="shop__card-text">MagSafe </p>
            <p className="shop__card-price">4 220 с</p>
            <button className="shop__card-btn">Купить</button>
          </div>
          <div className="shop__card">
            <img className="shop__img" src={Figura} alt="Figura" />
            <h3 className="shop__card-title">Чехол Otterbox Figura</h3>
            <p className="shop__card-text">MagSafe</p>
            <p className="shop__card-price">4 220 с</p>
            <button className="shop__card-btn">Купить</button>
          </div>
          <div className="shop__card">
            <img className="shop__img" src={otterbox} alt="otterbox" />
            <h3 className="shop__card-title">Чехол Otterbox Figura</h3>
            <p className="shop__card-text">MagSafe</p>
            <p className="shop__card-price">4 220 с</p>
            <button className="shop__card-btn">Купить</button>
          </div>
          <div className="shop__card">
            {/* <img className="shop__img" src={lumen2} alt="case" /> */}
            <h3 className="shop__card-title">Чехол Otterbox</h3>
            <p className="shop__card-text">MagSafe</p>
            <p className="shop__card-price">4 220 с</p>
            <button className="shop__card-btn">Купить</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
