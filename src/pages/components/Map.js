/*global kakao*/
import React, { useEffect } from "react";
import "./Map.scss";

function Map() {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.50272841601286, 126.93381754923945),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);

    var markerPosition = new kakao.maps.LatLng(
      37.50272841601286,
      126.93381754923945
    );
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);
  return (
    <div className="map-wrap">
      <div className="map-text-box">
        <h1>배달하는 곳이 확실해?</h1>
        <h2>요청 받은 배달 위치를 확실하게!</h2>
        <p>
          카카오 지도 api를 활용하여 고객이 요청한 장소로 확실하게 안내합니다!
          <br />
          향후 실시간 배달현황 기능도 추가할 예정입니다.
        </p>
      </div>
      <div className="kakao-map-box">
        <div id="map" style={{ width: "800px", height: "600px" }}></div>
      </div>
    </div>
  );
}

export default Map;
