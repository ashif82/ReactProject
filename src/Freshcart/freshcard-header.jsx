
import { useState } from "react";
import "./freshcardheader.css"
export function FreshCartHeader() {
  const [body] = useState({ width: "87%", margin: "auto" });
  const [logoImage] = useState("freshcartimg/freshcardlogo.png");
  const [headerTop] = useState({ "margin-top": "10px" });
  const [headerIcon] = useState(["bi bi-heart", "bi bi-person", "bi bi-bag"]);
  const [headerIconGap] = useState({ "margin-left": "17px", fontSize: "20px" });
  const [location, setLocation] = useState({
    "background-color": "",
    color: "",
  });

  function headerLocationOver() {
    setLocation({
      "background-color": "rgb(83, 78, 78)",
      color: "white",
    });
  }
  function headerLocationOut() {
    setLocation({
      "background-color": "",
      color: "",
    });
  }

  return (
    <div style={body} className="container-fluid overflow-hidden">
      <div style={headerTop} className="header-icon">
        <div className="d-flex justify-content-between">
          <img id="freshcart" src={logoImage} alt="" />
          <div id="searchLocation" className="input-group w-50 " style={headerTop}>
            <input type="text" className="form-control  " />
            <span className="bi bi-search input-group-text"></span>
            <button
              style={location}
              onMouseOver={headerLocationOver}
              onMouseOut={headerLocationOut}
              className="btn"
            >
              <span className="bi bi-geo-alt">Location</span>
            </button>
          </div>
          <div>
          {headerIcon.map((item) => (
            <span style={headerIconGap} key={item} className={item}></span>
          ))}
          <button id="list" className="btn bi bi-list fs-2"></button>
        </div>
        </div>

       
      </div>
    </div>
  );
}
