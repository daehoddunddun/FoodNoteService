import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer-wrap">
      <div className="footer-left">
        <img src="/images/logo2_w.png" alt="로고" />
        <p>
          외식매장 점주님들에게 힘이 되는 <br />
          서비스를 만들어갑니다!
        </p>
      </div>
      <div className="footer-right">
        <p>고객문의 eogh773@naver.com</p>
        <p>
          (주)대호노트서비스 | 서울시 동작구 상도동 356-6 | 대표이사 홍길동 |
          사업자 등록번호 xxx-xxx-xxxxxx
        </p>
        <p> copyright: '© 1996-2080 daeho kim (eogh773@Naver.com)</p>
      </div>
    </div>
  );
}

export default Footer;
