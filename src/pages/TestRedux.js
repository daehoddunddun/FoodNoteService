import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delArr } from "../redux/Store";

function TestRedux() {
  const arrData = useSelector((state) => {
    return state.testData;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h1>리덕스 연습하기</h1>
      <p>데이터 표출이랑 데이터 삭제 함수 사용</p>
    </div>
  );
}

export default TestRedux;
