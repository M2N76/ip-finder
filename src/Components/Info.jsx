import React from "react";

function Info(props) {
  return (
    <div>
      <div className="card-container">
        <span className="info">Info</span>
        <img className="round" src={props.data.flag.img} alt="brazil" />
        <h3>{props.data.country}</h3>
        <h6>{props.data.city}</h6>
        <p>ISP : {props.data.connection.isp}</p>
        <div className="footer">
          <p>IP : {props.data.ip}</p>
          <p>latitude: {props.data.latitude}</p>
          <p>longitude: {props.data.longitude}</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
