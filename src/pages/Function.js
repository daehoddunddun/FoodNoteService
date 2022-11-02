import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserChart from "./components/UserChart";
import UserMap from "./components/UserMap";
import "./Function.scss";
import { setName } from "../redux/Store";

function Function() {
  const userName = useSelector((state) => {
    return state;
  });
  //스토어에서 지정한 state를 꺼내는 방법

  const dispatch = useDispatch();
  //스토어 state를 setState처럼 변경하는 방법, dispatch는 스토어로 요청을 보내주는 함수

  const [calculation, setCalculation] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [mapValue, setMapValue] = useState({
    lat: 37.50272841601286,
    lot: 126.93381754923945,
  });

  const order = () => {
    setTimeout(() => {
      alert("배달이 도착했습니다!");
      setMapValue({ lat: 37.50282841601286, lot: 126.92381754923945 });
    }, 3000);
  };

  const saveInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const sumbitInput = () => {
    setCalculation(inputValue);
    setInputValue("");
    setData3([
      {
        id: "금일 매출액",
        value: inputValue,
        color: "hsl(39, 70%, 50%)",
      },
      {
        id: "어제 매출액",
        value: 492292,
        color: "hsl(80, 70%, 50%)",
      },
    ]);
    setData4([
      {
        id: "10월 28일 입금액",
        value: 412921,
        color: "hsl(88, 70%, 50%)",
      },
      {
        id: "10월 29일 입금예정액",
        value: 777723,
        color: "hsl(62, 70%, 50%)",
      },
      {
        id: "10월 30일 입금예정액",
        value: inputValue * 0.9,
        color: "hsl(260, 70%, 50%)",
      },
    ]);
  };
  const [
    data3 = [
      {
        id: "금일 매출액",
        value: 0,
        color: "hsl(39, 70%, 50%)",
      },
      {
        id: "어제 매출액",
        value: 492292,
        color: "hsl(80, 70%, 50%)",
      },
    ],
    setData3,
  ] = useState([
    {
      id: "금일 매출액",
      value: 0,
      color: "hsl(39, 70%, 50%)",
    },
    {
      id: "어제 매출액",
      value: 492292,
      color: "hsl(80, 70%, 50%)",
    },
  ]);

  const [
    data4 = [
      {
        id: "10월 28일 입금액",
        value: 412921,
        color: "hsl(88, 70%, 50%)",
      },
      {
        id: "10월 29일 입금예정액",
        value: 777723,
        color: "hsl(62, 70%, 50%)",
      },
      {
        id: "10월 30일 입금예정액",
        value: inputValue,
        color: "hsl(260, 70%, 50%)",
      },
    ],
    setData4,
  ] = useState([
    {
      id: "10월 28일 입금액",
      value: 412921,
      color: "hsl(88, 70%, 50%)",
    },
    {
      id: "10월 29일 입금예정액",
      value: 777723,
      color: "hsl(62, 70%, 50%)",
    },
    {
      id: "10월 30일 입금예정액",
      value: inputValue,
      color: "hsl(260, 70%, 50%)",
    },
  ]);

  return (
    <div className="function-wrap">
      <div className="function-top">
        <Link to="/">
          <img className="logo2" src="./images/logo2_w.png" alt="로고" />
        </Link>
        <img
          src="/images/banner.jpg"
          alt="기능페이지배너"
          className="function-banner"
        />
      </div>
      <div className="calculation-title">1.매출액,입금액 관리하기</div>
      <div className="function-calculation">
        <div className="calculation-input">
          <p className="input-intro">금일 매출액 입력하기</p>
          <div className="input-box">
            <input
              type="text"
              placeholder="값을 입력해주세요"
              onChange={saveInputValue}
              value={inputValue}
            />
            <button onClick={sumbitInput}>확인</button>
          </div>
          <strong>
            금일 매출액을 입력해주시면 해당 내용이 저장되고
            <br />
            금일 입금예정액(수수료10%차감)이 결정되어 표출됩니다.
            <br />
            {userName.user}님의 입금 예정액은 {inputValue}원 입니다.
          </strong>
          <button
            onClick={() => {
              dispatch(setName());
            }}
          >
            직책 붙히기
          </button>
        </div>
        <div className="calculation-chart">
          <UserChart
            calculation={calculation}
            setCalculation={setCalculation}
            data3={data3}
            data4={data4}
          ></UserChart>
        </div>
      </div>
      <div className="function-middle">
        <UserMap mapValue={mapValue}></UserMap>
        <button onClick={order}>주문받기</button>
        <Link to="redux">리덕스 연습하러 가기</Link>
      </div>
    </div>
  );
}

export default Function;
