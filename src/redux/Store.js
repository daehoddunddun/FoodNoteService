import { configureStore, createSlice } from "@reduxjs/toolkit";

const start = createSlice({
  name: "state이름",
  initialState: "사용할 값",
}); // usestate랑 비슷한 역활을 함, 다른 점은 이름을 지정을 해줘야하고, 우리는 이것을 slice라고 부름
//리덕스 store에 해당 값을 저장하려면 변수처럼 let이나 const처럼 변수처럼 지정하고 아래 render에 내용을 입력함
//이제 모든 컴포넌트에서 해당 state를 가져다 사용할 수 있음.

const user = createSlice({
  name: "user",
  initialState: "kimdaeho",
  reducers: {
    setName(state) {
      return state + "사장";
    }, // setState의 역활을 함, export 해줘야함
  },
});

const testData = createSlice({
  name: "testData",
  initialState: {
    "첫번째 데이터": "대호",
    "세번째 데이터": "바보",
    "네번째 데이터": "너",
  },
  reducers: {
    delArr(state) {
      let test = state;
      test.pop();
      return test;
    },
  },
});

export const { setName } = user.actions;
export const { delArr } = testData.actions;

export default configureStore({
  reducer: {
    start: start.reducer,
    user: user.reducer,
    testData: testData.reducer,
  },
});
