import React from "react";
import "../MainPage/MainPage.css";
import { useNavigate } from "react-router-dom";
import main from "../MainPage/media/main.jpg";
import Vector from "../MainPage/media/Vector.svg";
import telega from "../MainPage/media/telega.svg";
import whats from "../MainPage/media/whats.svg";
import line from "../MainPage/media/line.svg";
import рамка4 from "../MainPage/media/рамка4.svg";
import рамка3 from "../MainPage/media/рамка3.svg";
import center from "../MainPage/media/center.png";
import Line9 from "../MainPage/media/Line9.svg";
import kanyon from "../MainPage/media/kanyon.png";
import imgLine from "../MainPage/media/imgLine.png";
import IK from "../MainPage/media/IK.png";
import karakol from "../MainPage/media/karakol.png";
import ploshad from "../MainPage/media/ploshad.png";
import map from "../MainPage/media/map.png";
import small_map from "../MainPage/media/small_map.png";

import marina from "../../images/marina.png";
import stars from "../../images/stars.png";
// import canyon from "../../images/canyon.png";
// import south from "../../images/south.png";
// import city from "../../images/city.png";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="content_MainPage">
        <img className="img_content_MainPage" src={main} alt="Photo" />

        <header>
          <p onClick={() => navigate("/shop")} className="p_shope_MainPage">
            Shop
          </p>
          <p className="p_travel_MainPage">Путешествия</p>
          <div>
            <img className="ramka4" src={рамка4} alt="" />
            <p className="p_admin_MainPage">Администратор</p>
            <img className="ramka3" src={рамка3} alt="" />
          </div>
          <div>
            <img className="ramka4_cab" src={рамка4} alt="" />
            <p className="p_cabinet_MainPage">Личный кабинет</p>
            <img className="ramka3_cab" src={рамка3} alt="" />
          </div>
          <img className="line" src={line} alt="" />
        </header>
        <h1 className="h1_MainPage">Вывозим в горы</h1>
        <h3 className="h3_MainPage">И не только вывозим, и не только в горы</h3>
        <div className="buttons_MainPage">
          <button
            onClick={() => navigate("/mountain")}
            className="btn_mountains_MainPage">
            Хочу в горы
          </button>
          <button
            onClick={() => navigate("/shop")}
            className="btn_shop_MainPage">
            Хочу в Shop
          </button>
        </div>
        <p>
          <a href="https://www.instagram.com/omks.travel/">
            <img className="insta" src={Vector} alt="INSTa" />
          </a>
        </p>
        <p>
          <a href="https://api.whatsapp.com/send/?phone=996551911912&text&type=phone_number&app_absent=0">
            <img className="telega" src={telega} alt="" />
          </a>
        </p>
        <p>
          <a href="https://api.whatsapp.com/send/?phone=996551911912&text&type=phone_number&app_absent=0">
            <img className="whats" src={whats} alt="" />
          </a>
        </p>
      </div>
      <div className="centerPage">
        <div>
          <img className="main_img_center" src={center} alt="" />
        </div>
        <div>
          <h3 className="h3_center">Самые горячие </h3>
          <h6 className="h6_center">
            Здесь собраны самые залайканные туры, которые мы проводим каждый
            день. Тебе не придется ждать выходных или пока наберется группа.
            Хочешь, можешь сегодня? Поехали!
          </h6>
        </div>
        <div className="tours">
          <p className="p_hot-tours">
            Hot tours
            <a href=""></a>
          </p>
          <p className="p_all-tours">
            All tours
            <a href=""></a>
          </p>
        </div>
        <img className="line9" src={Line9} alt="" />
        <div className="cards_center">
          <div className="img_cards_center">
            <img className="img_cards_center" src={kanyon} alt="" />
            <img className="imgLine_center" src={imgLine} alt="" />
            <p className="p_cards_center" id="skazka">
              Каньон “Сказка”
            </p>
            <div className="info_cards">
              <h5>Каньон “Сказка”</h5>
              <p>800 сом</p>
              <p>Туда в 12:00</p>
              <p>Сюда в 23:00 </p>
            </div>
          </div>
          <div>
            <img className="img_cards_center" src={IK} alt="" />
            <img className="imgLine_center" src={imgLine} alt="" />
            <p className="p_cards_center" id="ik">
              Юг Ыссык-Куля
            </p>
          </div>
          <div>
            <img className="img_cards_center" src={karakol} alt="" />
            <img className="imgLine_center" src={imgLine} alt="" />
            <p className="p_cards_center" id="karakol">
              Каракол
            </p>
          </div>
          <div>
            <img className="img_cards_center" src={ploshad} alt="" />
            <img className="imgLine_center" src={imgLine} alt="" />
            <p className="p__cards_center">Городская фотосессия</p>
          </div>
        </div>

        <h3 className="title_center">Всё самое важное о нас</h3>
        <h3 className="title_center_second">“Without water”</h3>
        <div className="text__center">
          <p className="text__center_first">
            Мы находимся и работаем в столице{" "}
            <span class="colortext">Кыргызстана,</span> но предоставляем туры в
            <span class="colortext"> любой уголок</span> нашей страны. А вот
            <span class="colortext"> Shop</span> находится только в Бишкеке.
          </p>
          <p className="text__center_second">
            Немного по цифрам, мы уже более <span class="colortext">7 лет</span>{" "}
            на рынке, все клиенты
            <span class="colortext"> счастливы</span> и целы. У нас работают{" "}
            <span class="colortext">профессионалы,</span> которые всем сердцем
            влюблены в нашу страну, а это самое{" "}
            <span class="colortext">важное!</span>
          </p>
        </div>
        <div className="map">
          <img id="big" src={map} alt="" />
          <img id="small" src={small_map} alt="" />
        </div>
      </div>
      <section className="comments">
        <div className="container">
          <h2 className="comments__title">Комментарии и отзывы</h2>
          <p className="comments__text">Всё, что мы так любим</p>
          <div className="comments__row">
            <div className="comments__slider">
              <img className="comments__image" src={marina} alt="marina" />
              <div className="comments__right">
                <h2 className="comments__right-title">Марина</h2>
                <img src={stars} alt="stars" />
                <p className="comments__right-cool">Просто cool</p>
                <p className="comments__right-text">
                  Путешествовала с ними вокруг ИКа, само озеро очень красивое.
                  Мне очень повезло с группой, очень весёлые. Но больше всего,
                  мне понравилась организация тура. Правда! Не было претензий,
                  только восторг. Водитель ехал аккуратно, не быстро, хотя все
                  знают, что на этой дороге многие едут быстро. Приехали в
                  Чолпон-Ату, а там уже стол накрыт, номера готовы. В общем,
                  очень круто, уже присмотрела новый тур.{" "}
                </p>
              </div>
            </div>
            <button className="comments__btn">
              <svg
                width="41"
                height="54"
                viewBox="0 0 41 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1L39.9676 25.2332M40 24.8191L1.02579 53"
                  stroke="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
