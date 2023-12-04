import React from "react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Mc from "../../image/Mc.mp4";
import Mcimage from "../../image/img1.jpg";
import Mc2 from "../../image/img2.jpg.jpg";
import Mcspicy from "../../image/mcspicy.jpg";
import Mcmobil from "../../image/Mcmobil.jpg";
import Cristmas from "../../image/cristmas.png";
import Mcwolt from "../../image/Mcwolt.jpg";
import Mcicecream from "../../image/mcicecream.jpg";
import Mcgirl from "../../image/mc-girl.jpg";
import Mcmeal from "../../image/mc-meal.jpg";
import App from "../../image/app_store_badge.png";
import Google from "../../image/google_play_badge.png";
import Facebook from "../../image/facebook-f.jpg";

export default () => {
  return (
    <div className="container">
      {/* <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper"
        style={{ display: "flex", flexDirection: "row" }}
      > */}
      {/* <main className="main-mc">
        <div className="main-div" style={{ display: "flex" }}>
          <section className="sec-img"> */}
      {/* <SwiperSlide
          className="swipper-img1"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: 0,
          }}
        > */}
      {/* <img src={Mcimage} alt="" /> */}
      {/* </SwiperSlide> */}
      {/* <SwiperSlide>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {/* <video autoPlay loop muted src={Mc}></video> */}
      {/* </div> */}
      {/* </SwiperSlide>
        <SwiperSlide className="swiper-image2">
          <img src={Mc2} alt="" />
        </SwiperSlide> */}{" "}
      <div className="swipper-img1">
        {" "}
        <img src={Mcimage} alt="" />
      </div>
      {/* <div style={{ display: "flex", flexDirection: "row" }}>
              <video autoPlay loop muted src={Mc}></video>
            </div>
            <div className="swiper-image2">
              <img src={Mc2} alt="" />
            </div> */}
      {/* </section> */}
      {/* </div>
      </main> */}
      {/* </Swiper> */}
      <div className="mc-card">
        {/* ============================================================================================ */}
        <section className="section-info">
          <div className="mc-cardimg">
            <img src={Mcwolt} alt="" />
          </div>
          <div className="mc-text">
            <h2>
              “McDonald’s”dan yemək sifarişləri “Wolt” vasitəsilə çatdırılma
              ilə.
            </h2>
            <p>“McDonald’s”dan yeməklərin “Wolt” vasitəsilə çatdırılması.</p>
            <button className="mac-btn">Ətraflı</button>
          </div>
        </section>
        {/* ========================================================================================= */}
        <section className="section-info2">
          <div className="mc-text2">
            <h2>“McDonald’s”ın mobil tətbiqini yükləyin.</h2>

            <p>"McDonald's" tətbiqində xüsusi təkliflər.</p>
            <br />
            <br />
            <button className="mac-btn2">Ətraflı</button>
          </div>
          <div className="mc-cardimg2">
            <img src={Mcmobil} alt="" />
          </div>
        </section>
        {/* ===================================================================================== */}
        <section className="section-card">
          <div className="card1">
            <div className="mc-card2">
              <img src={Mcicecream} alt="" />

              <h2 className="cardtext">E-məktublarımıza abunə olun</h2>
              <p>
                “McDonald’s”dan elektron məktublar almaq üçün qeydiyyatdan
                keçin.
              </p>
              <br />
              <button className="card-btn1">Ətraflı</button>
            </div>
            {/* ======================================================================================== */}
            <div className="mc-card3">
              <img src={Mcgirl} alt="" />

              <h2 className="cardtext2">“McDonald's” ailəsinə qoşulun</h2>
              <p>
                “McDonald’s”dan elektron məktublar almaq üçün qeydiyyatdan
                keçin.
              </p>
              <br />
              <button className="card-btn2">Ətraflı</button>
            </div>
            {/* ================================================================================================ */}
            <div className="mc-card4">
              <img src={Mcmeal} alt="" />

              <h1 className="cardtext3">Yeməklərimiz haqqında</h1>
              <p>
                Yeməklərimizin hazırlanma üsullarının keyfiyyətini
                təkmilləşdiririk.
              </p>
              <br />
              <button className="card-btn3">Ətraflı</button>
            </div>
          </div>
        </section>
        <footer className="footer-card">
          <div className="footer-card1">
            <div className="footer-text">
              <ul>
                <li>Haqqımızda</li>
                <br />

                <li>Tariximiz</li>
                <br />

                <li>Xəbərlər və bildirişlər</li>
                <br />

                <li>Siz soruşun biz cavablandıraq</li>

                <br />
                <li>Dəyərlərimiz</li>
              </ul>
              <div className="facebook-logo">
                <img src={Facebook} alt="" />
              </div>
            </div>
          </div>
          <div className="footer-card1">
            <div className="footer-text">
              <ul>
                <li>Karyera</li>
                <br />
                <li>İnsanlarımızla tanış olun: Heyət və idarəetmə</li>
                <br />
                <li>İndi müraciət edin</li>
              </ul>
            </div>
          </div>
          <div className="footer-card1">
            <div className="footer-text">
              <ul>
                <li>Xidmətlər</li>
                <br />

                <li>Wi-Fi</li>
                <br />

                <li>McDelivery®</li>
                <br />

                <li>MakAvto®</li>

                <br />
                <li>Mobil tətbiqi yükləyin</li>
              </ul>
            </div>
          </div>
          <div className="footer-card1">
            <div className="footer-text">
              <ul>
                <li>Mobil tətbiq haqqında fikirləriniz</li>
                <br />

                <li>Restoran haqqında fikirləriniz</li>
              </ul>
              <br />
              <br />
              <div className="footer-logo">
                <img src={App} alt="" />
                <img src={Google} alt="" />
              </div>
            </div>
          </div>{" "}
        </footer>
      </div>
    </div>
  );
};
