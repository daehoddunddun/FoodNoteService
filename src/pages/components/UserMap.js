/*global kakao*/
import React, { useEffect } from "react";

function UserMap({ mapValue }) {
  const { lat, lot } = mapValue;

  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(Number(lat), Number(lot)),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(Number(lat), Number(lot));
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, [lat]);
  return (
    <div>
      <div className="kakao-map-box">
        <div id="map" style={{ width: "1000px", height: "600px" }}></div>
      </div>
    </div>
  );
}

export default UserMap;
