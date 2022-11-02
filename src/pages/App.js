import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.scss";
import Map from "./components/Map";
import Chart from "./components/Chart";
import TopLeft from "./components/TopLeft";
import TopRight from "./components/TopRight";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="top-wrap">
        <img src="/images/wrapImg.png" className="bannerImg" />
        <div className="Nav">
          <img className="logo" src="./images/logo2_w.png" alt="로고" />
          <Link to="function" className="right_btn">
            장부대장 이용하기
          </Link>
        </div>
        <div className="top-contets">
          <TopLeft></TopLeft>
          <TopRight></TopRight>
        </div>
      </div>
      <div className="main-wrap">
        <Chart></Chart>
        <div className="mian-text-box">
          <h1>뭐가?! 얼마나?!</h1>
          <h2>입금일정과 매출액을 한 눈에!</h2>
          <p>
            실시간 매출액과 앞으로의 입금예정액을 한번에 볼 수 있어요.
            <br />
            일자별, 카테고리별로 확인하세요!
          </p>
        </div>
      </div>
      <div className="sub-wrap">
        <Map></Map>
      </div>
      <div className="side-contents">
        <img src="/images/instar.jpeg" alt="인스타홍보" />
        <div className="side-contents-text">
          <h1>뭐가 더 있을까?</h1>
          <h2>샐럽을 통한 홍보효과까지!</h2>
          <p>
            인스타 샐럽을 통한 가게 홍보를 도와드립니다.
            <br />
            점주님들을 위한 추가적인 구독서비스를 제공합니다.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
