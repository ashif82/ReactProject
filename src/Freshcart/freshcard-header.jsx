
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

            <button data-bs-target="#locations"data-bs-toggle="modal"
              style={location}
              onMouseOver={headerLocationOver}
              onMouseOut={headerLocationOut}
              className="btn"
            >
              <span  className="bi bi-geo-alt">Location</span>
            </button>

            <div className="modal fade " id="locations" >
              <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                <div className="modal-content ">
                  <div className="modal-header">
                   <dl className="row">
                    <dt>Choose Your Delivery Location </dt>
                    <dd>Enter your address and we will specify the offer you area.</dd>
                   </dl>
                   <button className="btn btn-close" data-bs-dismiss="modal"></button>
                  </div>
                  <div className="modal-body">
                    <input type="text" className="form-control" placeholder="Search for products" />
                   <dl className="row mt-4">
                    <dt>Select Location</dt>
                    <a className="nav-link d-flex justify-content-between px-3 py-2 " href="">
                      <span>Alabama</span>
                      <span>Min:$20</span>
                    </a>
                    <a className="nav-link d-flex justify-content-between px-3 py-2 " href="">
                      <span>Alabma</span>
                      <span>Min:$20</span>
                    </a>
                    <a className="nav-link d-flex justify-content-between px-3 py-2 " href="">
                      <span>Alabma</span>
                      <span>Min:$20</span>
                    </a>
                    <a className="nav-link d-flex justify-content-between px-3 py-2 " href="">
                      <span>Alabma</span>
                      <span>Min:$20</span>
                    </a>
                    <a className="nav-link d-flex justify-content-between px-3 py-2 " href="">
                      <span>Alabma</span>
                      <span>Min:$20</span>
                    </a>
                    <a className="nav-link d-flex justify-content-between px-3 py-2 " href="">
                      <span>Alabma</span>
                      <span>Min:$20</span>
                    </a>
                    <a className="nav-link d-flex justify-content-between px-3 py-2 " href="">
                      <span>Alabma</span>
                      <span>Min:$20</span>
                    </a>
                    <a className="nav-link d-flex justify-content-between px-3 py-2 " href="">
                      <span>Alabma</span>
                      <span>Min:$20</span>
                    </a>
                    <a className="nav-link d-flex justify-content-between px-3 py-2 " href="">
                      <span>Alabma</span>
                      <span>Min:$20</span>
                    </a>
                    <a className="nav-link d-flex justify-content-between px-3 py-2 " href="">
                      <span>Alabma</span>
                      <span>Min:$20</span>
                    </a>
                   </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
          {headerIcon.map((item) => (
            <span style={headerIconGap} key={item} className={item}></span>
          ))}
          <button data-bs-target="#lists" data-bs-toggle="offcanvas" id="list" className="btn bi bi-list fs-2"></button>
        </div>
        </div>

        <div className="offcanvas offcanvas-start" id="lists">
                <div className="offcanvas-header">
                  <img src="freshcartimg/freshcardlogo.png" width="150" alt="" />
                  <button data-bs-dismiss="offcanvas" className="btn btn-close"></button>
                </div>
                <div className="offcanvas-body">
                 <div className="input-group">
                 <input type="text" className="form-control"placeholder="Search for product" />
                 <button className="bi bi-search input-group-text"></button>
                 </div>
                  
                  <div className="dropdown mt-3">
                    <button data-bs-toggle="dropdown" className="btn btn-success"><span>All Departments</span></button>
                    <ul className="dropdown-menu">
                      <li className="dropdown-item"><a className="nav-link" href="">Dairy, Breads & Eggs</a></li>
                    </ul>
                  </div>
                    <select className="form-select mt-2">
                      <option>Home</option>
                      <option></option>

                    </select>
                    <select className="form-select ">
                      <option>Shop</option>
                      <option></option>

                    </select>
                    <select className="form-select">
                      <option>store</option>
                      <option></option>

                    </select>
                    <select className="form-select">
                      <option>Mega menu</option>
                      <option></option>

                    </select>
                    <select className="form-select">
                      <option>Pages</option>
                      <option></option>

                    </select>
                    <select className="form-select ">
                      <option>Account</option>
                      <option></option>

                    </select>
                    <select className="form-select ">
                      <option>Dashboard</option>
                      <option></option>

                    </select>
                    <select className="form-select ">
                      <option>Docs</option>
                      <option></option>

                    </select>
                </div>
        </div>
      </div>
    </div>
  );
}
