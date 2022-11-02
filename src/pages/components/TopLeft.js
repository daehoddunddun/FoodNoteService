import React from "react";
import "./TopLeft.scss";

function TopLeft() {
  return (
    <div className="top-left-wrap">
      <a href="#!" className="link-Btn">
        배달매장을 위한 모바일 간편장부
      </a>
      <h1 className="top-title">"장부대장"</h1>
      <div className="store-wrap">
        <div className="store-contents">
          <img src="/images/google.png" className="store-icon" alt="구글" />
          <a
            href="https://play.google.com/store/apps/details?id=com.foodnoteservice.jangboo"
            className="store-text"
          >
            google Play
          </a>
        </div>
        <div className="store-contents">
          <img src="/images/apple.png" className="store-icon" alt="애플" />
          <a
            href="https://apps.apple.com/kr/app/%EC%9E%A5%EB%B6%80%EB%8C%80%EC%9E%A5/id1528899382"
            className="store-text"
          >
            App Store
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopLeft;
